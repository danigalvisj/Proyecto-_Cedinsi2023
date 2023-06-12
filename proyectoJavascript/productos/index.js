const infoProductos=[
{
    titulo:"casa"
    imagen:"prueba"
    descripción: "está ubicada..."
    costo: "1000000"
    cantidad:5
},
{
    titulo:"casa 1
    imagen:"prueba2"
    descripción: "está ubicada..."
    costo: "1000000"
    cantidad:5
},
]

infoProductos.forEach(function(producto){
    console.log(producto);
    let titulo=document.createElement("h1");
    titulo.textContent=producto.titulo;
})

for(let i=0; i <infoProductos.length;i++){
let titulo=document.createElement("h1")
titulo.textContent=
}