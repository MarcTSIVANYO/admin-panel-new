<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use DB;
use App\User;
use App\Http\Requests\ChangePasswordRequest;
use Symfony\Component\HttpFoundation\Response;

class ChangePasswordController extends Controller
{
    //

    public function process(ChangePasswordRequest $request){
        return $this->getPasswordTableRow($request)->count()>0 ? $this->changePassword($request):$this->tokenNotFoundResponse();
    }

    private function getPasswordTableRow($request){
        return DB::table('password_resets')->where(['email'=>$request->email,'token'=>$request->resetToken]);
    }

    public function tokenNotFoundResponse(){
        return response()->json(['error'=>'Token ou Email incorrect', Response::HTTP_UNPROCESSABLE_ENTITY]);
    }

    public function changePassword($request){
        $user = User::where('email', $request->email)->first();
        $user->update(['password'=>bcrypt($request->password)]);
        $this->getPasswordTableRow($request)->delete();
        return response()->json(['success'=>'Mot de passe modifié avec succès'],Response::HTTP_CREATED);
    }

}
