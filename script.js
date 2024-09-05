//ETAPA 1
//Deberán modificar el HTML para hacer unos pequeños ajustes. Ahora necesitamos que las etiquetas de imágenes estén envueltas en etiquetas de link. 
//Con la condición de que estas deben tener una clase para luego poder seleccionarlas desde nuestro JavaScript. Ejemplo: Así de sencillo,
// sin ningún atributo porque se lo agregaremos dinámicamente.

//ETAPA 2
// Sin sus correspondientes “href” nuestros links no van a funcionar, por lo que debemos identificar en nuestro script el momento en que agregamos los “src” a nuestras imágenes. Es ahí donde debemos aprovechar y también indicar los “href” de nuestras . Obviamente tenemos que haberlos captado con su selector previamente. Concluida la primera parte de esta etapa, deberán hacer que los links abran las imágenes en una pestaña nueva. Para eso deberán recordar qué atributo es el que determina esta acción e implementarlo. Obviamente esto de manera dinámica, desde el archivo js, no debemos hacerlo en el html.
/* ETAPA 3
- Nodo padre: un contenedor de tipo div, aunque no es el padre directo. Este contiene divs que dan estilo a la tarjeta contenedora del link
- Nodo hijo repetitivo: a (dentro de un div)
- Explicación: crear todo el contenido del contenedor o del body inclusive y luego ubicar las fuentes con variables.
se puede inclusive crear una variable para cada uno de los atributos de las etiquetas para crear un DOM dinamico.
*/
//Etapa 1 y 2
let imagen = document.querySelectorAll(".imagen");
for(let i= 0; i<imagen.length; i++){
    let valorI= prompt(`Ingrese URL la Imagen ${i+1}:`);
    imagen[i].setAttribute('src', valorI) 
}

let href = document.querySelectorAll(".etiquetaI");
for( let i=0; i<href.length; i++){
    let valorH= prompt(`Ingrese el enlace la Imagen ${i+1}:`);
    href[i].setAttribute('href', valorH)

}
//etapa3
let contenedor= document.createElement("div");
for(let i=1; i<=3; i++){
    let a = document.createElement("a");
    a.setAttribute("class", "etiquetaI")
    contenedor.appendChild(a);

    let div = document.createElement("div");
    div.setAttribute("class", "tarjeta")
    a.appendChild(div);

    let imagenes = document.createElement("img");
    imagenes.setAttribute("class", "imagen");
    div.appendChild(imagenes);   
}
console.log(contenedor);



 //--------------------------------ENLACES----------------------------------------
//Referencia de imagen Krats
//https://i.pinimg.com/736x/00/1e/98/001e98e6e4da7961fa5f50ecc1c148ba.jpg
// https://i.pinimg.com/236x/5f/c5/2e/5fc52ed0947032d0acca39e9d892aa7b.jpg
//https://i.pinimg.com/736x/04/81/73/04817372e5f8c0f31e62b33efbf7c1c8.jpg

//Referencia de sitio de imagen Krats
// https://www.google.com/url?sa=i&url=https%3A%2F%2Fmx.pinterest.com%2Fpin%2F830632725052342217%2F&psig=AOvVaw1CTvZiEUUUhD2pI0m7P18e&ust=1725562069932000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJiIx-f5qYgDFQAAAAAdAAAAABAE
//https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Farleen_og%2Faventuras-con-los-kratt%2F&psig=AOvVaw1CTvZiEUUUhD2pI0m7P18e&ust=1725562069932000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJiIx-f5qYgDFQAAAAAdAAAAABAI
//https://www.google.com/url?sa=i&url=https%3A%2F%2Far.pinterest.com%2Fjuliaguerrero12%2Fkrats%2F&psig=AOvVaw1CTvZiEUUUhD2pI0m7P18e&ust=1725562069932000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJiIx-f5qYgDFQAAAAAdAAAAABAQ
//--------------------------------------------------------------------------------------------------------------
//Referencia de imagen Bluey
//https://i.pinimg.com/736x/75/82/8a/75828ab6e25b545bd402d5c9c05922ae.jpg
//https://i.pinimg.com/originals/21/81/69/2181694c469dc41524b66aea71a6a429.jpg
//https://i.pinimg.com/736x/1e/1a/2b/1e1a2b02e7643edb79ef8f5e7ee6c9fb.jpg

//Referencia de sitio de imagen Bluey
//https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.pinterest.com%2Fpin%2F313000242862288847%2F&psig=AOvVaw2KOxPz0fXJC5d3lpOslPBi&ust=1725562710685000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJCOmZX8qYgDFQAAAAAdAAAAABAI
//https://www.google.com/url?sa=i&url=https%3A%2F%2Far.pinterest.com%2Fpin%2F155303887800638428%2F&psig=AOvVaw2KOxPz0fXJC5d3lpOslPBi&ust=1725562710685000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJCOmZX8qYgDFQAAAAAdAAAAABAQ
//https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.pinterest.com%2Fpin%2F885661082950364801%2F&psig=AOvVaw2KOxPz0fXJC5d3lpOslPBi&ust=1725562710685000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJCOmZX8qYgDFQAAAAAdAAAAABAY
