import { Component, OnInit } from '@angular/core';

interface IStudent {
  id?: number;
  firstName: string;
  lastName: string;
  course: string;
  editMode: boolean;
}

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  studentArray: Array<IStudent> = [];
  disableAdding = false;

  constructor() { }

  ngOnInit() {
    this.studentArray = [
      {
        id: 1,
        firstName: 'Jim',
        lastName: 'Yang',
        course: 'IS',
        editMode: false,
      },
      {
        id: 2,
        firstName: 'Jimmy',
        lastName: 'Yang',
        course: 'Math',
        editMode: false
      },
      {
        id: 3,
        firstName: 'James',
        lastName: 'Yang',
        course: 'English',
        editMode: false
      }
    ];
  }
  addStudent() {
    this.studentArray.unshift(
      {
        id: null,
        firstName: null,
        lastName: null,
        course: null,
        editMode: true
      }
    );
    this.disableAdding = true;
  }

  deleteStudent(index: number) {
    this.studentArray.splice(index, 1);
  }

  saveStudent() {
    this.studentArray[0].editMode = false;
    this.disableAdding = false;
    this.sort();
  }
  sort() {
    this.studentArray.sort((a: IStudent, b: IStudent) => {
      return a.id < b.id ? -1 : 1;
    });
  }

}
