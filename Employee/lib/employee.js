'use strict';

var Employee = {
    salary: 100000,
    getCadre: function getCadre() {
        if (Employee.salary >= payGrades.entryLevel.minSalary && Employee.salary <= payGrades.entryLevel.maxSalary) {
            return 'entryLevel';
        } else if (Employee.salary >= payGrades.midLevel.minSalary && Employee.salary <= payGrades.midLevel.maxSalary) {
            return 'midLevel';
        } else return 'seniorLevel';
    },
    calculateTax: function calculateTax() {
        return payGrades[Employee.getCadre()].taxMultiplier * Employee.salary;
    },
    getBenefits: function getBenefits() {
        return payGrades[Employee.getCadre()].benefits.join(', ');
    },
    calculateBonus: function calculateBonus() {
        return .02 * Employee.salary;
    },
    reimbursementEligibility: function reimbursementEligibility() {
        var reimbursementCosts = { health: 5000, housing: 8000, wellness: 6000, gym: 12000 };
        var totalBenefitsValue = 0;
        var employeeBenefits = payGrades[Employee.getCadre()].benefits;
        for (var i = 0; i < employeeBenefits.length; i++) {
            totalBenefitsValue += reimbursementCosts[employeeBenefits[i]];
        }
        return totalBenefitsValue;
    }
};

var payGrades = {
    entryLevel: { taxMultiplier: .05, benefits: ['health'], minSalary: 10000, maxSalary: 49999 },
    midLevel: { taxMultiplier: .1, benefits: ['health', 'housing'], minSalary: 50000, maxSalary: 99999 },
    seniorLevel: { taxMultiplier: .2, benefits: ['health', 'housing', 'wellness', 'gym'], minSalary: 100000, maxSalary: 200000 }
};

function getEmployeeInformation(inputSalary) {
    Employee['salary'] = inputSalary;
    console.log('Cadre: ' + Employee.getCadre());
    console.log('Tax: ' + Employee.calculateTax());
    console.log('Benefits: ' + Employee.getBenefits());
    console.log('Bonus: ' + Employee.calculateBonus());
    console.log('Reimbursement Eligibility: ' + Employee.reimbursementEligibility() + '\n');
}

getEmployeeInformation(10000);
getEmployeeInformation(50000);
getEmployeeInformation(100000);