<?php

namespace App\Enums;

enum AssigmentStatus: string
{
    case Todo = 'todo';
    case InProgress = 'in_progress';
    case Done = 'done';
}
