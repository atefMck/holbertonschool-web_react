interface DirectorInterface {
    workFromHome(): string,
    getCoffeeBreak(): string,
    workDirectorTasks(): string,
}

interface TeacherInterface  {
    workFromHome(): string,
    getCoffeeBreak(): string,
    workTeacherTasks(): string,
}

class Director implements DirectorInterface {
    workFromHome(): string { return 'Working from home' }
    getCoffeeBreak(): string { return 'Getting a coffee break' }
    workDirectorTasks(): string { return 'Getting to director tasks' }
}

class Teacher implements TeacherInterface {
    workFromHome(): string { return 'Cannot work from home' }
    getCoffeeBreak(): string { return 'Cannot have a break' }
    workTeacherTasks(): string { return 'Getting to work' }
}

type employee = Teacher | Director;

const createEmployee = (salary: string | number): employee => {
    return (typeof salary === "number" && salary < 500) ? new Teacher() : new Director()
}

const isDirector = (employee: employee): boolean => {
    return (employee instanceof Director)
}

const executeWork = (employee: employee): void => {
    if (employee instanceof Director) console.log(employee.workDirectorTasks())
    else console.log(employee.workTeacherTasks())
}

type Subjects = 'Math' | 'History';

const teachClass = (todayClass: Subjects): string => {
    return todayClass === 'Math' ? 'Teaching Math' : 'Teaching History'
}