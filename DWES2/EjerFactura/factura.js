class Empresa{
    constructor(nomE, dirE, telE, cif){
        this._nombre = nomE;
        this._direccion = dirE;
        this._telefono = telE;
        this._CIF = cif;
    }
    get nombre (){
        return this._nombre;
    }
    set nombre(nom){
        this._nombre = nom;
    }

    get direccion (){
        return this._direccion;
    }
    set direccion(dir){
        this._direccion = dir;
    }

    get telefono (){
        return this._telefono;
    }
    set telefono(tel){
        this._telefono = tel;
    }

    get cif(){
        return this._CIF;
    }
    set cif(mcif){
        this._CIF = mcif;
    }

    muestraEmpresa(){
        return "Nombre: " + this._nombre + "\n Dirección: " + this._direccion + "\n teléfono: " + this._telefono + "\n CIF: " + this._CIF;
    }
}

class Cliente{
    constructor(nomC, dirC, telC, nif){
        this._nombre = nomC;
        this._direccion = dirC;
        this._telefono = telC;
        this._nif = nif;
    }
    get nombre (){
        return this._nombre;
    }
    set nombre(nom){
        this._nombre = nom;
    }

    get direccion (){
        return this._direccion;
    }
    set direccion(dir){
        this._direccion = dir;
    }

    get telefono (){
        return this._telefono;
    }
    set telefono(tel){
        this._telefono = tel;
    }

    get nif(){
        return this._nif;
    }
    set nif(mnif){
        this._nif = mnif;
    }
    muestraCliente(){
        return "Nombre: " + this._nombre + "\n Dirección: " + this._direccion + "\n teléfono: " + this._telefono + "\n NIF: " + this._nif;
    }
} 

class Elemento{
    constructor(desE, cantE, precioE){
        this._descripcion = desE;
        this._cantidad = cantE;
        this._precio = precioE;
    }
    muestraElemento(){
        return "Descripción: " + this._descripcion + "\n Cantidad: " + this._cantidad + "\n Precio: " + this._precio;
    }
}

class Factura{
    constructor(miEmp, miCli, misElem, miIVA, miFormaPago){
        this._empresa = miEmp;
        this._cliente = miCli;
        this._elementos = misElem;
        this._iva = miIVA;
        this._FormaPago = miFormaPago;
        this._baseImponible = 0;
        this._total = 0;
    }

    get iva(){
        return this._iva;
    }

    set iva(miIVA){
        this._iva = miIVA;
    }

    get FormaPago(){
        return this._FormaPago;
    }

    set FormaPago(miFormaPago){
        this._FormaPago = miFormaPago;
    }

    get baseImponible(){
        return this._baseImponible;
    }

    get total(){
        return this._total;
    }
    
    calculaBaseImponible(){
        for(let i=0 ; i<this._elementos.length ; i++){
            this._baseImponible += this._elementos[i]._cantidad * this._elementos[i]._precio;
        }
        
    }

    calculaTotal(){
        if (this._baseImponible>0 && this._iva>0){
            this._total = this._baseImponible * ((this._iva/100)+1);
        }
    }
    muestraFactura(){
        console.log(this._empresa.muestraEmpresa());
        console.log(this._cliente.muestraCliente());
        for(let i=0; i<this._elementos.length; i++){
            console.log(this._elementos[i].muestraElemento());
        }
    }
}