import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  baseUrl = `http://127.0.0.1:8000/`;
  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private httpClient: HttpClient) {
  }

  getStudentsList() {
    return this.httpClient.get(`${this.baseUrl}students/`, {headers: this.headers})
  }

  createStudent(studentData: Student) {
    const body = JSON.stringify(studentData);
    return this.httpClient.post(`${this.baseUrl}students/`, body, {headers: this.headers})
  }

  updateStudent(id: number, studentData: Student) {
    const body = JSON.stringify(studentData);
    return this.httpClient.put(`${this.baseUrl}students/${id}/`, body, {headers: this.headers})
  }

  deleteStudent(id: number) {
    return this.httpClient.delete(`${this.baseUrl}students/${id}/`, {headers: this.headers})
  }

  getStates() {
    return this.httpClient.get(`${this.baseUrl}address/states/`, {headers: this.headers})
  }
}
