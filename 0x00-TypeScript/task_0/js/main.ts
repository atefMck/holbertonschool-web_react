interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string,
};

const studentOne: Student = {
    firstName: 'Atef',
    lastName: 'Mechken',
    age: 23,
    location: 'Tunisia'
};

const studentTwo: Student = {
    firstName: 'Aziz',
    lastName: 'Ayed',
    age: 22,
    location: 'Tunisia'
};

const studentsList: Student[] = [studentOne, studentTwo];

studentsList.forEach((student: Student): void => console.table([student.firstName, student.location]))