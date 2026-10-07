<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Models\Member;

class MemberController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json(Member::latest()->get());
    }

    public function show(Member $member): JsonResponse
    {
        $member->load('assignments.task');
        return response()->json($member);
    }
}
