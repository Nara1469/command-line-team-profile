class Employee {
    constructor(id, name, email, role) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.role = role;
    }

    getRole() {
        this.role = "Employee";
    }
}