<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use App\Models\Member;


class MemberController extends Controller
{
    function addMember(Request $req)
    {
        $member = new Member;
        $member->name = $req->input('Name');
        $member->email = $req->input('Email');
        $member->Designation = $req->input('Designation');
        $member->order_num = $req->input('OrderNum');
        $member->save();

        return $member;
    }

    function listMember()
    {

        return Member::all();
    }

    function DeleteMember($id)
    {
        $result=Member::where('id',$id)->delete();
        if($result)
        {
            return ["Result"=>"Member Deleted"];
        }
        else
        {
            return ["Result"=>"Operation Failed"];
        }
    }
    function getMember($id)
    {
        $member = Member::find($id);
        return $member;

    }
    function searchMember($key)
    {

        return Member::where('Name','like','%'.$key.'%')->get();
    }
    function updateMember(Request $req,$id)
    {
        $member = Member::find($id);
        $member->name = $req->input('name');
        $member->email = $req->input('email');
        $member->designation = $req->input('designation');
        $member->order_num = $req->input('order_num');
        $member->save();
        return response()->json('Member updated successfully');
    }
}
