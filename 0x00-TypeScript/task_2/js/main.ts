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



const createEmployee = (salary: string | number): TeacherInterface | DirectorInterface => {
    return (typeof salary === "number" && salary < 500) ? new Teacher() : new Director()
}

const isDirector = (employee: TeacherInterface | DirectorInterface): boolean => {
    return (employee instanceof Director)
}

const executeWork = (employee: TeacherInterface | DirectorInterface): void => {
    if (employee instanceof Director) console.log(employee.workDirectorTasks())
    else if ((employee instanceof Teacher)) console.log(employee.workTeacherTasks())
}

type Subjects = 'Math' | 'History';

const teachClass = (todayClass: Subjects): string => {
    return todayClass === 'Math' ? 'Teaching Math' : 'Teaching History'
}