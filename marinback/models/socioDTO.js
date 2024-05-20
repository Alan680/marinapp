class SocioDTO {
    constructor(nombre, apellido, email, password, creationDate) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._email = email;
        this._password = password;
        this._creationDate = creationDate;
    }

    // Getters para acceder a las propiedades del socio
    get nombre() {
        return this._nombre;
    }

    get apellido() {
        return this._apellido;
    }

    get email() {
        return this._email;
    }

    get password() {
        return this._password;
    }

    get creationDate() {
        return this._creationDate;
    }
}

// Exportar el DTO de Socio
export default SocioDTO;
