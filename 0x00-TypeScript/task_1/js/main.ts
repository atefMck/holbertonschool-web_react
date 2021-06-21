interface Teacher {
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string,
    [prop: string]: any,
};

interface Directors extends Teacher {
    numberOfReports: number,
}

interface printTeacherFunction {
    (firstName: string, lastName: string): void
}

const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
	return `${firstName[0]}. ${lastName}`;
}

interface StudentClassInterface {
    firstName: string,
    lastName: string,
    workOnHomework(): string,
    displayName(): string,
}

interface StudentConstructor {
    new(firstName: string, lastName: string): StudentClassInterface
}

const StudentClass: StudentConstructor = class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string { return 'Currently working' }
    displayName(): string { return 'Currently working' }
}
