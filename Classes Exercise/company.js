
class Company {
    constructor() {
        this.departments = {}
    }

    addEmployee(name, salary, position, department) {
        if (name == '' || name == undefined || name == null) {
            throw new Error("Invalid input!");
        } if (salary == '' || salary == undefined || salary == null || salary < 0) {
            throw new Error("Invalid input!");
        } if (position == '' || position == undefined || position == null) {
            throw new Error("Invalid input!");
        } if (department == '' || department == undefined || department == null) {
            throw new Error("Invalid input!");
        }

        if (!this.departments.hasOwnProperty(department)) {
            this.departments[department] = [{ name, salary, position }];
            this.departments[department].averageSalary = 0;
            this.departments[department].averageSalary += salary;
        } else {
            this.departments[department].push({ name, salary, position })
            this.departments[department].averageSalary += salary;
        }

        return `New employee is hired. Name: ${name}. Position: ${position}`
    }
    bestDepartment() {
        let finalString = '';
        let currentHighestAverage = 0;
        let bestDepartmentsName = undefined;
        for (const [key, value] of Object.entries(this.departments)) {
            const average = value.averageSalary / value.length
            if (average > currentHighestAverage) {
                currentHighestAverage = average;
                bestDepartmentsName = key;
            }
        }
        finalString += `Best Department is: ${bestDepartmentsName}`
        finalString += `\nAverage salary: ${currentHighestAverage.toFixed(2)}`

        const sortedValues = this.departments[bestDepartmentsName].sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name))

        for (const person of sortedValues) {
            finalString += `\n${person.name} ${person.salary} ${person.position}`
        }

        return finalString;
    }
}





let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());

