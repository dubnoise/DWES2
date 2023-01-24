class Empleado{
    constructor(Nombre, FechaNacimiento, NIF){
        this.Nombre = Nombre;
        this.FechaNacimiento = FechaNacimiento;
        this.NIF = NIF;
    }
    MuestraInfo(){
        return 'NOMBRE: ' + this.Nombre + '\nFECHANACIMIENTO: ' + this.FechaNacimiento + '\nNIF: ' + this.NIF;
    }
}

class EmpleadoTemporal extends Empleado{
    constructor(Nombre, FechaNacimiento, NIF, FechaAlta, FechaBaja){
        super(Nombre, FechaNacimiento, NIF);
        this.FechaAlta = FechaAlta;
        this.FechaBaja = FechaBaja;
    }

    MuestraInfo(){
        super.MuestraInfo();
        return 'FECHA ALTA: ' + this.FechaAlta + '\nFECHA BAJA: ' + this.FechaBaja;
    }
}

class EmpleadoHoras extends Empleado{
    constructor(Nombre, FechaNacimiento, NIF, PrecioHora, NumeroHoras){
        super(Nombre, FechaNacimiento, NIF);
        this.PrecioHora = PrecioHora;
        this.NumeroHoras = NumeroHoras;
    }

    PrecioMes(){
        return 'PRECIO AL MES: ' + this.NumeroHoras*this.PrecioHora + '€';
    }

    MuestraInfo(){
        super.MuestraInfo();
        return 'PRECIO HORA: ' + this.PrecioHora + '€' + '\nNUMERO HORAS: ' + this.NumeroHoras;
    }
}

class EmpleadoFijo extends Empleado{
    constructor(Nombre, FechaNacimiento, NIF, Informacion){
        super(Nombre, FechaNacimiento, NIF);
        this.Informacion = Informacion;
    }

    MuestraInfo(){
        super.MuestraInfo();
        return 'INFO: ' + this.Informacion;
    }
}

let empleado1 = new Empleado ('David', '11/03/1999', '23825821Y');
empleado1.MuestraInfo();

let empleado2 = new EmpleadoTemporal ('David', '11/03/1999', '23825821Y', '11-11-1111', '22-22-2222');
empleado2.MuestraInfo();


let empleado3 = new EmpleadoHoras ('David', '11/03/1999', '23825821Y', '15', '200');
empleado3.MuestraInfo();
empleado3.PrecioMes();