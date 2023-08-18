<?php
namespace App\Http\Controllers;


use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Response;
use Validator;

class UserController extends Controller
{
    public function login(Request $req):Response
    {
        $input = $req->all();
        Auth::attempt($input);
        $user = Auth::user();
        $token = $user->createToken('example')->accessToken;
        return new Response(['status' => 200, 'token'=> $token], 200);

    }
/**
     * details api
     *
     * @return \Illuminate\Http\Response
     */
    public function details() : Response
    {

        if(Auth::guard('api')->check()){
            $user = Auth::guard('api')->user();
            return Response(['data'=> $user], 200);
        }
        return Response(['data'=> 'Unauthorized'],401);
    }

    function register(Request $request): Response
    {

        $input = $request->all();
        $input['password'] = bcrypt($input['password']);
        $user = User::create($input);
        $success['token'] =  $user->createToken('MyApp')-> accessToken;
        $success['name'] =  $user->name;
        $success['email'] =  $user->email;
        return Response(['success'=> $success],200);

    }

}
