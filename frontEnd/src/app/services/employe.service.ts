import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // para poder comunicar el front end y el server importamos HttpClient
import { Employee } from '../models/employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  selectedEmployee: Employee;
  employees: Employee[];
  readonly URL_API = 'http://localhost:3000/api/employes';

  // al poner privete se define la variable y queda disponible para usar dentro de toda la clase
  constructor(private http: HttpClient) {
    this.selectedEmployee = new Employee;
  }

  getEmployees() {
    // retorna un arreglo de empleados que vienen desde el server
    // http es la manera de consultar al server los datos
    return this.http.get(this.URL_API);
  }

  // Agrego
  postEmployee(employee: Employee) {
    return this.http.post(this.URL_API, employee);
  }

  // Actualizo
  putEmoployee(employee: Employee) {
    return this.http.put(this.URL_API + `/${employee._id}` , employee);
  }

  // Borro
  deleteEmoployee(_id: String) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
