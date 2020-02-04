import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {StudentService} from "../../shared/student.service";

interface State {
  id: number;
  state_name: string;
}

@Component({
  selector: 'app-s-form',
  templateUrl: './s-form.component.html',
  styleUrls: ['./s-form.component.css']
})
export class SFormComponent implements OnInit {
  studentForm;
  studentId = null;
  states: State[] = [];

  @Input() set studentData(val: Student) {
    this.studentId = val.id;
    this.studentForm = new FormGroup({
      name: new FormControl(val.name),
      phone_number: new FormControl(val.phone_number),
      address_line1: new FormControl(val.address_line1),
      city: new FormControl(val.city),
      state: new FormControl(val.state),
      postal_code: new FormControl(val.postal_code)
    });
  }
  @Output() studentChange = new EventEmitter();
  constructor(private studentService: StudentService) {
  }

  formValidaFunc() {
    return !(this.studentForm.value.name.length && this.studentForm.value.phone_number.length
      && this.studentForm.value.address_line1.length && this.studentForm.value.city.length
      && this.studentForm.value.state.length && this.studentForm.value.postal_code);
  }

  ngOnInit() {
    this.studentService.getStates().subscribe(
      (result: State[]) => {
        this.states = result;
      },
      error => console.log(error)
    )
  }

  submitFormFunc() {
    if (this.studentId) {
      this.studentService.updateStudent(this.studentId, this.studentForm.value).subscribe(
        (result: Student) => {
            console.log(result);
            this.studentChange.emit(result);
        },error => console.log(error),
      )
    } else {
      this.studentService.createStudent(this.studentForm.value).subscribe(
        result => {
          console.log(result);
          this.studentChange.emit(result);
        },
        error => console.log(error)
      )
    }
  }
}
