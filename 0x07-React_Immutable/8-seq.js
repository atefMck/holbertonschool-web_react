import { Seq, Map } from 'immutable';

const printBestStudents = (obj) => {
  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
  const student = Seq(obj)
    .fliter((subject) => subject.score < 70)
    .map((student) => Map(student)
      .set('firstName', capitalize(student.firstName))
      .set('lastName', capitalize(student.lastName)));
  console.log(student);
};

export default printBestStudents;
