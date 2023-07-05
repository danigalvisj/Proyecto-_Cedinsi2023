const infoProductos = [
    {
        titulo: "Caminador Mecánico Plegable",
        imagen: "imagenes_proyecto/caminadora.png",
        descripcion: "El caminador mecánico Sportfitness es ideal para tu entrenamiento cardiovascular. Los beneficios de las caminadoras incluyen el fortalecimiento de piernas, incrementar tu energía, y prevención de enfermedades. El caminador mecánico Sportfitness es plegable y no requiere energía ideal para tu hogar.",
        precio: "$1.319.200",
        cantidad: 20,
    },

    {
        titulo: "Banda Caminadora Versalles",
        imagen: "imagenes_proyecto/caminadora.png",
        descripcion: "Caminadora electrónica Sportfitness ideal para tu entrenamiento cardiovascular. Los beneficios de las caminadoras incluyen el fortalecimiento de piernas, incrementar tu energía y prevención de enfermedades. La Banda Caminadora Versalles Sportfitness es plegable, ideal para tu hogar.",
        precio: "$1.725.500",
        cantidad: 25,
    },
]


let card = document.getElementById("card");
infoProductos.forEach(function (producto) {
    console.log(producto);
    let tarjeta= document.createElement("div");
    tarjeta.classList.add("card-body");
    let titulo = document.createElement("h1");
    tarjeta.classList.add("card-title");
    let descripcion = document.createElement("p");
    tarjeta.classList.add("card-tex");
    let precio = document.createElement("span");
    tarjeta.classList.add("card-tex");
    let imagen= document.createElement("img");
    tarjeta.classList.add("col-md-4");
    titulo.textContent = producto.titulo;
    descripcion.textContent = producto.descripcion;
    precio.textContent = producto.precio;
    imagen.src = producto.imagen;
    tarjeta.appendChild(titulo);
    tarjeta.appendChild(descripcion);
    tarjeta.appendChild(precio);
    tarjeta.appendChild(imagen);
    card.appendChild(tarjeta)
})
    