class Empresa{
    constructor(nombreE, direccionE, telefonoE, nifE){
        this.nombreE = nombreE;
        this.direccionE = direccionE;
        this.telefonoE = telefonoE;
        this.nifE = nifE;
    }
    // get nombreE(){
    //     return this.nombreE;
    // }
    // set nombreE(nombreE){
    //     this.nombreE = nombreE;
    // }
    // get direccionE(){
    //     return this.direccionE;
    // }
    // set direccionE(direccionE){
    //     this.direccionE = direccionE;
    // }
    // get telefonoE(){
    //     return this.telefonoE;
    // }
    // set telefonoE(telefonoE){
    //     this.telefonoE = telefonoE;
    // }
    // get nifE(){
    //     return this.nifE;
    // }
    // set nifE(nifE){
    //     this.nifE = nifE;
    // }
    muestraEmpresa(){
        return 'Nombre: ' + this.nombreE + '\nDirección: ' + this.direccionE + '\nTeléfono: ' + this.telefonoE + '\nNIF: ' + this.nifE;
    }
    
}
class Cliente{
    constructor(nombreC, direccionC, telefonoC, nifC){
        this.nombreC = nombreC;
        this.direccionC = direccionC;
        this.telefonoC = telefonoC;
        this.nifC = nifC;
    }
    // get nombreC(){
    //     return this.nombreC;
    // }
    // set nombreC(nombreC){
    //     this.nombreC = nombreC;
    // }
    // get direccionC(){
    //     return this.direccionC;
    // }
    // set direccionC(direccionC){
    //     this.direccionC = direccionC;
    // }
    // get telefonoC(){
    //     return this.telefonoC;
    // }
    // set telefonoC(telefonoC){
    //     this.telefonoC = telefonoC;
    // }
    // get nifC(){
    //     return this.nifC;
    // }
    // set nifC(nifC){
    //     this.nifC = nifC;
    // }
    muestraCliente(){
        return 'Nombre: ' + this.nombreC + '\nDirección: ' + this.direccionC + '\nTeléfono: ' + this.telefonoC + '\nNIF: ' + this.nifC;
    }
}
class Elemento{
    constructor(descripcion, precio, cantidad){
        this.descripcion = descripcion;
        this.precio = precio;
        this.cantidad = cantidad;
    }
    // get descripcion(){
    //     return this.descripcion;
    // }
    // set descripcion(descripcion){
    //     this.descripcion = descripcion;
    // }
    // get precio(){
    //     return this.precio;
    // }
    // set precio(precio){
    //     this.precio = precio;
    // }
    // get cantidad(){
    //     return this.cantidad;
    // }
    // set cantidad(cantidad){
    //     this.cantidad = cantidad;
    // }
    muestraElemento(){
        return 'Descripción: ' + this.descripcion + '\nCantidad: ' + this.cantidad + '\nPrecio: ' + this.precio;
    }
}
class Factura{
    constructor(empresa, cliente, elementos, tipoIva, formaPago){
        this.empresa = empresa;
        this.cliente = cliente;
        this.elementos = elementos;
        this.tipoIva = tipoIva;
        this.formaPago = formaPago;
        this.baseImponible = 0;
        this.total = 0;
    }
    // get tipoIva(){
    //     return this.tipoIva;
    // }
    // set tipoIva(tipoIva){
    //     this.tipoIva = tipoIva;
    // }
    // get formaPago(){
    //     return this.formaPago;
    // }
    // set formaPago(formaPago){
    //     this.formaPago = formaPago;
    // }
    // get baseImponible(){
    //     return this.baseImponible;
    // }
    // get total(){
    //     return this.total;
    // }

    calculaBaseImponible(){
        for(let i=0;i<this.elementos.length;i++){
            this.baseImponible += this.elementos[i].cantidad * this.elementos[i].precio;
        }
    }

    calculaTotal(){
        if (this.baseImponible>0 && this.tipoIva>0){
            this.total = this.baseImponible * ((this.tipoIva/100)+1);
        }
    }

    muestraFactura(){
        console.log(this.empresa.muestraEmpresa());
        console.log(this.cliente.muestraCliente());
        for(let i=0; i<this.elementos.length; i++){
            console.log(this.elementos[i].muestraElemento());
        }
    }
}

