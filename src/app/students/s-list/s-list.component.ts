import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-s-list',
  templateUrl: './s-list.component.html',
  styleUrls: ['./s-list.component.css']
})
export class SListComponent implements OnInit {
  @Input() students: Student[] = [];
  @Output() clicked_student = new EventEmitter<Student>();
  @Output() edit_student = new EventEmitter<Student>();
  @Output() delete_student = new EventEmitter<Student>();
  @Output() create_student = new EventEmitter<Student>();

  constructor() {
  }

  ngOnInit() {
  }

  clickedOnStudentFunc(student: Student) {
    this.clicked_student.emit(student);
  }

  editStudentFunc(student: Student) {
    this.edit_student.emit(student)
  }

  deleteStudentFunc(student: Student) {
    this.delete_student.emit(student)
  }

  createStudentFunc() {
    this.create_student.emit({
      id: null,
      name: '',
      address_line1: '',
      city: '',
      phone_number: '',
      postal_code: '',
      state: ''
    })
  }
}
