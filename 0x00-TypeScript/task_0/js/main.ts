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

const table: HTMLTableElement = document.createElement('table');
let i: number = 0;
studentsList.forEach((student: Student): void => {
    const row: HTMLTableRowElement = table.insertRow(i);
    const firstName: HTMLTableCellElement = row.insertCell(0);
    firstName.innerText = student.firstName;
    const location: HTMLTableCellElement = row.insertCell(1);
    location.innerText = student.location;
    i += 1;
})

document.body.appendChild(table);
