<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class TaskFactory extends Factory
{
    public function definition(): array
    {
        return [
            'title' => $this->faker->sentence(4, false),
            'description' => $this->faker->optional(0.7)->paragraph(),
        ];
    }
}
