import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StudentsComponent} from './students.component';
import {Routes, RouterModule} from "@angular/router";
import {SListComponent} from './s-list/s-list.component';
import {HttpClientModule} from "@angular/common/http";
import { SDetailsComponent } from './s-details/s-details.component';
import { SFormComponent } from './s-form/s-form.component';
import {ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [
  {path: 'students', component: StudentsComponent}
];

@NgModule({
  declarations: [StudentsComponent, SListComponent, SDetailsComponent, SFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class StudentsModule {
}
