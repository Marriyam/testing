<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\MemberController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('/addMember', [MemberController::class, 'addMember']);
Route::get('/list', [MemberController::class, 'listMember']);
Route::delete('delete/{id}', [MemberController::class, 'DeleteMember']);
Route::get('member/{id}', [MemberController::class, 'getMember']);
Route::get('search/{key}', [MemberController::class, 'searchMember']);
Route::put('update/{id}', [MemberController::class, 'updateMember']);
Route::get('/members/{id}', 'App\Http\Controllers\MemberController@getMember');
Route::put('/members/{id}', 'App\Http\Controllers\MemberController@updateMember');
Route::post('/login', [UserController::class, 'login']);
Route::post('/register', [UserController::class, 'register']);
Route::get('/details', [UserController::class, 'details'])->middleware('auth:api');
