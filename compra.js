class Televisores{

    constructor(modelo, precio, stock){
        this.modelo = modelo;
        this.precio = precio;
        this.stock = stock;
    }

    tomar_datos(){
        console.log("");
        console.log("Modelo: ", this.modelo);
        console.log("Precio: ", this.precio);
        console.log("Stock: ", this.stock);
        console.log("");
    }

    tomar_stock(){
        if(this.stock <= 0){
            return false
        }
        else{
            return true
        }
    }

    actualizar_stock(cantidad){
        if(this.stock >= cantidad){
            this.stock = this.stock - cantidad;
        }
        else{
            console.log("No disponemos de stock para vender")
        }
    }
}

let lista_modelos = [];

for(let i = 0 ; i<4 ; i = i+1){

    let modelo = prompt ("Ingrese el modelo a ingresar en stock");
    let precio = prompt ("Ingrese el precio del modelo");
    let stock = prompt ("Ingrese el stock del modelo");

    let televisores = new Televisores (modelo, precio, stock);
    
    lista_modelos.push(televisores);
}

for(let televisores of lista_modelos){

    televisores.tomar_datos();
}

function buscar_producto ( televisores ){

    return televisores.modelo == compra_usuario
}

let compra_usuario = prompt ("Ingrese el modelo que desea comprar: ");

let resultado_buscar = lista_modelos.find(buscar_producto);

if (resultado_buscar != undefined){

    if (resultado_buscar.tomar_stock()){
        let unidades = prompt ("Cuantos unidades desea comprar?");
        resultado_buscar.actualizar_stock(unidades);
        console.log("Gracias por su compra!, vuelva pronto");
    }
    else {
        console.log("No tenemos stock del modelo");
    }
}
else{
    console.log("Producto no encontrado");
}

resultado_buscar.tomar_datos();










