interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = { firstName: 'John', lastName: 'Doe', age: 20, location: 'NY' };
const student2: Student = { firstName: 'Jane', lastName: 'Smith', age: 22, location: 'LA' };
const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
studentsList.forEach(student => {
  const row = document.createElement('tr');
  const nameCell = document.createElement('td');
  const locationCell = document.createElement('td');
  nameCell.textContent = student.firstName;
  locationCell.textContent = student.location;
  row.appendChild(nameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});
document.body.appendChild(table);
