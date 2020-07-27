<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\ResetsPasswords;
use Illuminate\Http\Request;
use App\User;
use Mail;
use App\Mail\ResetPasswordMail;
use Illuminate\Support\Str;
use DB;
use Carbon\Carbon;

class ResetPasswordController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Password Reset Controller
    |--------------------------------------------------------------------------
    |
    | This controller is responsible for handling password reset requests
    | and uses a simple trait to include this behavior. You're free to
    | explore this trait and override any methods you wish to tweak.
    |
    */

    use ResetsPasswords;

    /**
     * Where to redirect users after resetting their password.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    public function sendEmail(Request $request) {
        //return $this->validateEmail($request->email);
        if($this->validateEmail($request->email)==null){
            return $this->failedResponse();
        }
        $this->send($request->email);
        return $this->successResponse();
    }

    public function send($email){

        $token=$this->createToken($email);

        Mail::to($email)->send(new ResetPasswordMail($token));

    }

    public function createToken($email){
        $oldToken=DB::table('password_resets')->where('email',$email)->first();
        if($oldToken){
            return $oldToken->token;
        }
        $token=Str::random(40);
        DB::table('password_resets')->insert([
            'email'=>$email,
            'token'=>$token,
            'created_at'=>Carbon::now()
        ]);
        return $token;
    }

    public function failedResponse(){
        return response()->json(['error' => 'Votre email n\'existe pas dans le système'], 401);
    }

    public function validateEmail($email){
        return !!User::where('email',$email)->first();
    }

    public function successResponse(){
        return response()->json(['data' => 'Email de reinitialisation a été envoyé avec succès'], 200);
    }
}
