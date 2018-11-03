import { Component, OnInit } from '@angular/core';
import { EmployeService } from '../../services/employe.service';
import { NgForm } from '@angular/forms';
import { Employee } from '../../models/employee';

declare var M: any ; // declarandola de esta manera estará disponible en toda la aplicacion

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers: [EmployeService]
})
export class EmployeesComponent implements OnInit {

  // al poner privete se define la variable y queda disponible para usar dentro de toda la clase
  constructor( private employeeService: EmployeService) { }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.employeeService.selectedEmployee = new Employee();
    }
  }

  addEmployee(form?: NgForm) {
    if (form) {
      if (form.value._id) {
        this.employeeService.putEmoployee(<Employee>form.value)
            .subscribe(res => {
              this.resetForm(form);
              M.toast({html: 'Empleado Actualizado correctamente'});
              this.getEmployees();
            });
      } else {
        this.employeeService.postEmployee(<Employee>form.value)
          .subscribe(res => {
            // console.log(res);
            this.resetForm(form);
            M.toast({html: 'Empleado Guardado correctamente'});
            this.getEmployees();
          }); // Escucho el retorno de la respuesta del servidor
      }
    }
  }

  getEmployees() {
    this.employeeService.getEmployees()
        .subscribe(res => {
          // Guardo el resultado en el arreglo de empleados del servicio
          // console.log(res);
          this.employeeService.employees = res as Employee[];
          console.log(res);
        });
  }

  editEmployee(employee: Employee) {
    this.employeeService.selectedEmployee = employee;
  }

  deleteEmployee(_id: String) {
    if (confirm('Estas seguro de querer eliminar el empleado?')) {
      this.employeeService.deleteEmoployee(_id)
      .subscribe(res => {
          // console.log(res);
          M.toast({html: 'Empleado Eliminado'});
          this.getEmployees();
      });
    }

  }
  
  ngOnInit() {
    this.getEmployees();  }

}
