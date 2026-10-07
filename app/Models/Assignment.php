<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Assignment extends Model
{

    use HasFactory;

    protected $fillable = [
        'status',
        'member_id',
        'task_id',
    ];

    protected $casts = [
        'status' => \App\Enums\AssigmentStatus::class,
    ];


    public function member()
    {
        return $this->belongsTo(Member::class);
    }

    public function task()
    {
        return $this->belongsTo(Task::class);
    }
}
