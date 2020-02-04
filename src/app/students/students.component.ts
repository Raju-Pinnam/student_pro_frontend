import {Component, OnInit} from '@angular/core';
import {StudentService} from "../shared/student.service";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students_list: Student[] = [];
  selected_student: Student;
  edit_student: Student;
  delete_student: Student;
  create_student: Student;

  constructor(private studentService: StudentService) {
  }

  ngOnInit() {
    this.studentService.getStudentsList().subscribe(
      (result: Student[]) => {
        this.students_list = result
      },
      error => console.log(error)
    )
  }

  passStudentDetailsFunc(student: Student) {
    this.selected_student = student;
    this.edit_student = null;
    this.delete_student = null;
    this.create_student = null;
  }

  editStudentFunc(student: Student) {
    this.edit_student = student;
    this.delete_student = null;
    this.create_student = null;
  }

  createStudent(newS: Student) {
    this.edit_student = newS;
    this.delete_student = null;
    this.create_student = newS;
  }

  deleteStudent(student: Student) {
    this.studentService.deleteStudent(student.id).subscribe(
      (result: Student) => {
        this.selected_student = null;
        this.studentService.getStudentsList().subscribe(
          (result: Student[]) => {
            this.students_list = result
          },
          error => console.log(error)
        );
      }
    )
  }

  checkStudentData(student: Student) {
    this.studentService.getStudentsList().subscribe(
      (result: Student[]) => {
        this.students_list = result
      },
      error => console.log(error)
    );
    this.edit_student = student;
  }
}
