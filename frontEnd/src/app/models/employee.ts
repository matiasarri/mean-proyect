export class Employee {
    _id: String;
    name: String;
    posicion: String;
    office: String;
    salary: Number;

    consutructor(id= '' , name= '', posicion= '', office= '', salary= 0) {
        this._id = id;
        this.name = name;
        this.posicion = posicion;
        this.office = office;
        this.salary = salary;
    }
}
