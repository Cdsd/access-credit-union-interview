<?php

use App\Http\Controllers\Api\TaskController;
use App\Http\Controllers\Api\MemberController;
use Illuminate\Support\Facades\Route;

Route::apiResource('tasks', TaskController::class);

Route::apiResource('members', MemberController::class)
    ->except(['store', 'update', 'destroy']);
