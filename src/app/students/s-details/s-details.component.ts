import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-s-details',
  templateUrl: './s-details.component.html',
  styleUrls: ['./s-details.component.css']
})
export class SDetailsComponent implements OnInit {
  @Input() student:Student;
  constructor() { }

  ngOnInit() {
  }

}
