const tarjetas = document.querySelectorAll('.tarjeta');             //Traer todas las tarjetas
const contenedor = document.getElementById('contenedor-seccion');   //Aquí accederemos a las secciones


//Seleccionamos la tarjeta y cargamos su sección
tarjetas.forEach(tarjeta => {                                       //Recorremos cada tarjeta
    tarjeta.addEventListener('click', () => {                       //Le damos acciones al clickear
        const numSeccion = tarjeta.getAttribute('data-seccion');    //Llamamos al número de seccion
        cargarSeccion(numSeccion);                                  //Usamos la función que carga las secciones
    });
});

//Función para cargar secciones
function cargarSeccion(num){                            //Creamos la función y pedimos como parámetro el número de sección
    fetch(`Secciones/seccion${num}.html`)                    //Buscamos el archivo en su carpeta con su número
    
    .then(response => response.text())
    .then (data => {
        contenedor.innerHTML = data;                                        //Le damos los datos de la sección al contenedor
        contenedor.dataset.secAct = num;                                    //Guarda el número de la sección actual
        document.getElementById('pantalla-inicio').style.display = 'none'; //Ocultamos la pantalla de inicio
        window.scrollTo(0, 0);                                              //Regresa al usuario hasta el inicio de la página
        document.body.style.overflowY = 'auto';         //Muestra la barra de desplazamiento vertical en las secciones
    });
}

//Función para botoón volver
function volverAlMenu(){
    document.getElementById('pantalla-inicio').style.display= "flex";   //Vuelve a aparecer la pantalla de inicio
    contenedor.innerHTML = '';                                          //Vacía el contenedor
    window.scrollTo(0,0);                                               //Regresa al usuario hasta el inicio de la página
    document.body.style.overflowY = 'hidden';               //Oculta la barra de desplazamiento vertical en la pantalla de inicio
}

//Función para avanzar al siguiente capítulo
function sigCap(){
    const secAct = parseInt(contenedor.dataset.secAct);     //Accede al número de sección guardado
    const siguiente = secAct + 1;                           //Aumenta dicho número 
    cargarSeccion(siguiente);                               //Lo manda a la función cargar como (num)
}

//Función para retroceder al capítulo anterior
function capAnt(){
    const secAct = parseInt(contenedor.dataset.secAct);     //Accede al número de sección guardado
    const anterior = secAct - 1;                           //Aumenta dicho número 
    cargarSeccion(anterior);                               //Lo manda a la función cargar como (num)
}
