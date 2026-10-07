<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Member;
use App\Models\Task;
use App\Models\Assignment;
class AssignmentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $members = Member::all();
        $tasks = Task::all();

        $members->each(function (Member $member) use ($tasks) {
            $tasks
                ->random(fake()->numberBetween(1, min(10, $tasks->count())))
                ->each(function (Task $task) use ($member) {
                    Assignment::factory()->create([
                        'member_id' => $member->id,
                        'task_id' => $task->id,
                    ]);
                });
        });
    }
}
