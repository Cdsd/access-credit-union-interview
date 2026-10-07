<?php

namespace Database\Factories;

use App\Models\Assignment;
use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Member;
use App\Models\Task;
use App\Enums\AssigmentStatus;

/**
 * @extends Factory<Assignment>
 */
class AssignmentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'member_id' => Member::factory(),
            'task_id' => Task::factory(),
            'status' => $this->faker->randomElement(AssigmentStatus::cases()),
        ];
    }
}
