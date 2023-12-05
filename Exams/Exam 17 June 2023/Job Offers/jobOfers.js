class JobOffers {
    constructor(employer, position) {
        this.employer = employer;
        this.position = position;
        this.jobCandidates = [];
    }

    jobApplication(candidates) {
        const stringSet = new Set
        for (const candidate of candidates) {
            const [name, education, yearsExperience] = candidate.split('-')
            if (this.jobCandidates.find(candidate => candidate.name === name)) {
                const user = this.jobCandidates.find(candidate => candidate.name === name)
                if (yearsExperience > user.yearsExperience) {
                    user.yearsExperience = yearsExperience
                }
            } else {
                this.jobCandidates.push({ name, education, yearsExperience })
            }
            stringSet.add(name)
        }

        const arr = Array.from(stringSet)
        return `You successfully added candidates: ${arr.join(', ')}.`
    }

    jobOffer(chosenPerson) {
        const [name, minimalExperience] = chosenPerson.split('-');

        if (!(this.jobCandidates.find(candidate => candidate.name === name))) {
            throw new Error(`${name} is not in the candidates list!`)
        }

        const user = this.jobCandidates.find(candidate => candidate.name === name)

        if (Number(minimalExperience) > Number(user.yearsExperience)) {
            throw new Error(`${name} does not have enough experience as ${this.position}, minimum requirement is ${minimalExperience} years.`)
        } else {
            //can break 
            user.yearsExperience = 'hired'
        }
        return `Welcome aboard, our newest employee is ${name}.`
    }

    salaryBonus(name) {
        if (!(this.jobCandidates.find(candidate => candidate.name === name))) {
            throw new Error(`${name} is not in the candidates list!`)
        }

        const user = this.jobCandidates.find(candidate => candidate.name === name)

        if (user.education === 'Bachelor') {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $50,000 per year!`
        }
        if (user.education === 'Master') {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $60,000 per year!`
        }

        return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $40,000 per year!`
    }

    candidatesDatabase() {
        const arr = []
        if (this.jobCandidates.length === 0) {
            throw new Error("Candidate Database is empty!")
        }

        this.jobCandidates.sort((a, b) => a.name.localeCompare(b.name))

        for (const candidate of this.jobCandidates) {
            arr.push(`${candidate.name}-${candidate.yearsExperience}`)
        }

        return `Candidates list:\n${arr.join('\n')}`
    }
}

let Jobs = new JobOffers("Google", "Strategy Analyst");
console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Jordan Cole-High School-5", "Daniel Jones- Bachelor-18"]));
console.log(Jobs.jobOffer("John Doe-8"));
console.log(Jobs.jobOffer("Peter Parker-4"));
console.log(Jobs.jobOffer("Jordan Cole-4"));
console.log(Jobs.salaryBonus("Jordan Cole"));
console.log(Jobs.salaryBonus("John Doe"));
console.log(Jobs.candidatesDatabase());

