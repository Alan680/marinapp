class DespachoDTO {
    constructor(
      nombreEmbarcacion,
      matriculaEmbarcacion,
      fechaSalida,
      horaSalida,
      pasajerosABordo,
      idSocio,
      numeroTelefono,
      fechaLlegada,
      horaLlegada,
      observaciones
    ) {
      this._nombreEmbarcacion = nombreEmbarcacion;
      this._matriculaEmbarcacion = matriculaEmbarcacion;
      this._fechaSalida = fechaSalida;
      this._horaSalida = horaSalida;
      this._pasajerosABordo = pasajerosABordo;
      this._idSocio = idSocio;
      this._numeroTelefono = numeroTelefono;
      this._fechaLlegada = fechaLlegada;
      this._horaLlegada = horaLlegada;
      this._observaciones = observaciones;
    }
  
    // Getters
    get nombreEmbarcacion() {
      return this._nombreEmbarcacion;
    }
    
    get matriculaEmbarcacion() {
      return this._matriculaEmbarcacion;
    }
  
    get fechaSalida() {
      return this._fechaSalida;
    }
  
    get horaSalida() {
      return this._horaSalida;
    }
  
    get pasajerosABordo() {
      return this._pasajerosABordo;
    }
  
    get idSocio() {
      return this._idSocio;
    }
  
    get numeroTelefono() {
      return this._numeroTelefono;
    }
  
    get fechaLlegada() {
      return this._fechaLlegada;
    }
  
    get horaLlegada() {
      return this._horaLlegada;
    }
  
    get observaciones() {
      return this._observaciones;
    }
  
    
}
  
  export default DespachoDTO;
  