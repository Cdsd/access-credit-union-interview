<?php

namespace Database\Seeders;

use App\Models\Task;
use Illuminate\Database\Seeder;

class TaskSeeder extends Seeder
{
    public function run(): void
    {
        Task::factory()->createMany([
            [
                'title' => 'TFSA Contribution Review',
                'description' => 'Review the member\'s TFSA contribution room and discuss suitable contribution options based on their financial goals.',
            ],
            [
                'title' => 'FHSA Eligibility Review',
                'description' => 'Confirm whether the member qualifies for a First Home Savings Account and explain the main benefits and contribution rules.',
            ],
            [
                'title' => 'Overdraft Protection Setup',
                'description' => 'Review the member\'s account activity and determine whether overdraft protection would be appropriate for their banking needs.',
            ],
            [
                'title' => 'RRSP Contribution Planning',
                'description' => 'Discuss RRSP contribution options with the member and review how contributions may support their long-term retirement goals.',
            ],
            [
                'title' => 'Mortgage Pre-Qualification',
                'description' => 'Collect the required member information and review their potential mortgage borrowing capacity for a future home purchase.',
            ],
            [
                'title' => 'Line of Credit Review',
                'description' => 'Review the member\'s current credit needs and determine whether a personal line of credit could provide additional financial flexibility.',
            ],
            [
                'title' => 'Credit Card Application',
                'description' => 'Review the member\'s needs and recommend an appropriate credit card product based on spending habits and financial goals.',
            ],
            [
                'title' => 'Credit Limit Review',
                'description' => 'Review the member\'s existing credit card limit and determine whether an adjustment may be appropriate based on their current financial situation.',
            ],
            [
                'title' => 'Personal Loan Consultation',
                'description' => 'Discuss the member\'s borrowing requirements and review personal loan options, repayment terms, and applicable rates.',
            ],
            [
                'title' => 'GIC Investment Review',
                'description' => 'Discuss the member\'s savings goals and review available GIC options, terms, and maturity dates.',
            ],
            [
                'title' => 'Savings Account Review',
                'description' => 'Review the member\'s current savings strategy and recommend account options that may better support their short- and medium-term goals.',
            ],
            [
                'title' => 'Checking Account Review',
                'description' => 'Review the member\'s current banking activity and determine whether their existing chequing account meets their day-to-day banking needs.',
            ],
            [
                'title' => 'Direct Deposit Setup',
                'description' => 'Assist the member with setting up or updating their direct deposit information for payroll or other recurring payments.',
            ],
            [
                'title' => 'Online Banking Setup',
                'description' => 'Help the member register for online banking and review the available account management and security features.',
            ],
            [
                'title' => 'Mobile Banking Assistance',
                'description' => 'Assist the member with setting up the mobile banking application and explain key features such as transfers, deposits, and account monitoring.',
            ],
            [
                'title' => 'Investment Account Review',
                'description' => 'Review the member\'s existing investment accounts and discuss whether their current strategy continues to align with their financial objectives.',
            ],
            [
                'title' => 'RESP Consultation',
                'description' => 'Discuss Registered Education Savings Plan options and explain how contributions and available government incentives can support education savings.',
            ],
            [
                'title' => 'Debt Consolidation Review',
                'description' => 'Review the member\'s existing debts and discuss potential consolidation options that could simplify payments or reduce borrowing costs.',
            ],
            [
                'title' => 'Financial Planning Consultation',
                'description' => 'Meet with the member to review their financial goals and identify appropriate savings, investment, and borrowing products.',
            ],
            [
                'title' => 'Account Security Review',
                'description' => 'Review the member\'s account security settings and provide guidance on protecting their accounts, credentials, and personal information.',
            ],
        ]);
    }
}
