function company() {

    class Company {
        constructor() {
            this.departments = {}
        }

        addEmployee(name, salary, position, department) {

            if (name == null || name == undefined || name == '') {
                throw new Error("Invalid input!");
            }
            if (salary == null || salary == undefined || salary == '') {
                throw new Error("Invalid input!");
            }
            if (position == null || position == undefined || position == '') {
                throw new Error("Invalid input!");
            }

            if (department == null || department == undefined || department == '') {
                throw new Error("Invalid input!");
            }

            if (salary < 0) {
                throw new Error("Invalid input!");      

            }

            if (!this.departments.hasOwnProperty(department)) {
                this.departments[department] = {
                    employes: [],
                    totalSalary: 0
                };
                this.departments[department].employes.push({ name: name, salary: salary, position: position });
                this.departments[department].totalSalary += salary
                return `New employee is hired. Name: ${name}. Position: ${position}`;
            } else {
                this.departments[department].employes.push({ name: name, salary: salary, position: position });
                this.departments[department].totalSalary += salary
                return `New employee is hired. Name: ${name}. Position: ${position}`;

            }

        }

        bestDepartment() {
            let company = '';
            let highestSlaray = 0;
            for (const depertment in this.departments) {
                if (this.departments[depertment].totalSalary/this.departments[depertment].employes.length > highestSlaray) {
                    highestSlaray = this.departments[depertment].totalSalary
                    company = depertment
                }
                
            }

            this.departments[company].employes.sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name))
            
            let names = ''
            for (const person of this.departments[company].employes) {
                names += `${person.name} ${person.salary} ${person.position}\n`
            }
            return `Best Department is: ${company}\nAverage salary: ${(highestSlaray / this.departments[company].employes.length).toFixed(2)}\n${names}`.trim()
        }
    }



    let c = new Company();
    c.addEmployee("Stanimir", 2000, "engineer", "Human resources");
    c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
    c.addEmployee("Slavi", 500, "dyer", "Construction");
    c.addEmployee("Stan", 2000, "architect", "Construction");
    c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
    c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
    c.addEmployee("Gosho", 1350, "HR", "Human resources");
    console.log(c);
    console.log(c.bestDepartment());


}
company()