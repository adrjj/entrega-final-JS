// creamos una variable global con un array vacio
let tipoDeAuto = [];
// llamamos los id del formulario para la carga del tipo de auto y su id que pinta el en el doom esa info
// usamos el mismo nombre tanto para el id como para la variable mejorar la lectura del codigo.
const cargaTipoAuto = document.getElementById("cargaTipoAuto");
const muestraTipoAuto = document.getElementById("muestraTipoAuto");

// creamos una funcion para llenar el array tipo de auto, se conoce como factorie
const creandotipoDeAuto = (tipoid, tipoMarca, tipoModelo, tipoAdquirido, tipoAño) => {
    const antiguedad = new Date().getFullYear() - tipoAño;
    const loTengo = new Date().getFullYear() - tipoAdquirido;
    return {
        id: tipoid,
        marca: tipoMarca,
        modelo: tipoModelo,
        AñoAdquirido: tipoAdquirido,
        Año: tipoAño,
        antiguedad: antiguedad,
        loTengo: loTengo

    }
};


const addtipo = (tipo) => {
    const div = document.createElement("div");
    tipoDeAuto.push(tipo);
    div.innerHTML += `
<div class="contAuto">

<div class="contStrong">
<h3 class="tituloAuto">Mi Auto</h3>
    <strong>Marca</strong> <p class="pintoAuto">${tipo.marca} </p>
    <strong>Modelo</strong><p class="pintoAuto"> ${tipo.modelo}</p>
    <strong>Cuando lo compre</strong><p class="pintoAuto">${tipo.AñoAdquirido}</p>
    <strong>Año de patentamiento </strong><p class="pintoAuto"> ${tipo.Año}</p>
    <strong>Antiguedad</strong> <p class="pintoAuto">${tipo.antiguedad + " años"}</p>
    <strong>Lo tengo hace </strong> <p class="pintoAuto">${tipo.loTengo + " años"}</p>
    <button href="#tdauto" class="btnBorrar" id="${tipo.id}" name="delete">Borrar</button>
</div>
</div>

`


    muestraTipoAuto.appendChild(div);

    cargaTipoAuto.reset();
    saveTaskStorage(tipoDeAuto);

};

const borrarTipo = (id) => {
    tipoDeAuto.forEach((tipo, index) => {
        if (tipo.id === id) {
            tipoDeAuto.splice(index, 1);
        }
    });
    showTasks(tipoDeAuto);

    // Pisamos o actualizamos los valores del Storage
    saveTaskStorage(tipoDeAuto);
};

const showTasks = (tipoDeAuto) => {
    const div = document.createElement("div");

    // Limpiamos el contenedor de las tareas
    muestraTipoAuto.innerHTML = '';

    tipoDeAuto.forEach(tipo => {

        div.innerHTML += `
        <div class="contAuto">
    
        <div class="contStrong">
        <h3 class="tituloAuto">Mi Auto</h3>
            <strong>Marca</strong> <p class="pintoAuto">${tipo.marca} </p>
            <strong>Modelo</strong><p class="pintoAuto"> ${tipo.modelo}</p>
            <strong>Cuando lo compre</strong><p class="pintoAuto">${tipo.AñoAdquirido}</p>
            <strong>Año de patentamiento </strong><p class="pintoAuto"> ${tipo.Año}</p>
            <strong>Antiguedad</strong> <p class="pintoAuto">${tipo.antiguedad + " años"}</p>
            <strong>Lo tengo hace </strong> <p class="pintoAuto">${tipo.loTengo + " años"}</p>
            <button href="#tdauto" class="btnBorrar" id="${tipo.id}" name="delete">Borrar</button>
        </div>
        </div>
        `;

        muestraTipoAuto.appendChild(div);
    });
};
//console.log (antiguedad);

const getRandomId = () => {
    return Math.floor(Math.random() * Date.now()).toString(16)
};
// LOCALSTORAGE
const saveTaskStorage = (tipoDeAuto) => {
    localStorage.setItem('tipoDeAuto', JSON.stringify(tipoDeAuto));
};

const getTasksStorage = () => {
    const tasksStorage = JSON.parse(localStorage.getItem('tipoDeAuto'));
    return tasksStorage;
};

const getTasks = () => {
    if (localStorage.getItem('tipoDeAuto')) {
        tipoDeAuto = getTasksStorage();
        showTasks(tipoDeAuto);
    }
}










//EVENTOS 
//aplicamos este evento en el domcuento llamado 'DOMContentLoaded' para que recargue todo lo fuardado en el localStorage en 
// este caso como segun parametro pasamos la funcion getTask
document.addEventListener('DOMContentLoaded', getTasks);

muestraTipoAuto.addEventListener('click', (e) => borrarTipo(e.target.id));
cargaTipoAuto.addEventListener('submit', (e) => {
    e.preventDefault();

    const form = new FormData(cargaTipoAuto);
    const tipoMarca = form.get('Marca');
    const tipoModelo = form.get('Modelo');
    const tipoAdquirido = form.get("AñoAdquirido");
    const tipoAño = form.get("Año");


    // const Antiguedad =
    const tipoid = getRandomId()

    // Podemos explicar Hoisting en esta parte
    const tipo = creandotipoDeAuto(tipoid, tipoMarca, tipoModelo, tipoAdquirido, tipoAño);
    // console.log(task)
    addtipo(tipo);

});




///////////////////////////////////////////////////////////////////////////////////////
// creamos una variable global con un array vacio
let tipoDeAceite = [];
// llamamos los id del formulario para la carga del tipo de auto y su id que pinta el en el doom esa info
// usamos el mismo nombre tanto para el id como para la variable mejorar la lectura del codigo.
const cargaTipoAceite = document.getElementById("cargaTipoAceite");
const muestraTipoAceite = document.getElementById("muestraTipoAceite");

// creamos una funcion para llenar el array tipo de auto, se conoce como factorie
const creandotipoDeAceite = (aceiteid, aceiteFecha, aceiteTipo, aceiteFiltro, aceiteAire, aceiteNafta, aceiteHabitaculo, descripcion) => {
    // const antiguedad = new Date().getFullYear() - tipoAño;
    //const loTengo = new Date().getFullYear() - tipoAdquirido;
    return {
        id: aceiteid,
        fecha: aceiteFecha,
        tipo: aceiteTipo,
        fAceite: aceiteFiltro,
        fAire: aceiteAire,
        fNafta: aceiteNafta,
        fHabitaculo: aceiteHabitaculo,
        fdescripcion: descripcion,

        // antiguedad: antiguedad,
        // loTengo:loTengo

    }
};


const addAceite = (aceite) => {
    const div = document.createElement("div");
    tipoDeAceite.push(aceite);
    div.innerHTML += `
    <div class="contAceite">
    <h3 class="tituloAceite">Cambio de Aceite </h3>
    <div class="strongAceite">
        <div class="fechaTipo">
        <strong>Fecha</strong> <p class="pintoAceite"> ${aceite.fecha} </p>
        <strong>Tipo de aceite </strong> <p class="pintoAceite">  ${aceite.tipo}</p>
        </div>
        <h3 class="tituloAceite">Filtros </h3>
        <div class="filtroTipo">
        <strong>Aceite </strong> <p class="pintoAceite">  ${aceite.fAceite}</p>
        <strong>Aire  </strong><p class="pintoAceite">  ${aceite.fAire}</p>
        <strong>Nafta </strong><p class="pintoAceite">  ${aceite.fNafta}</p>
        <strong>Habitaculo </strong><p class="pintoAceite">  ${aceite.fHabitaculo}</p>
        </div>
        <div class="Nota">
        <h3 class="tituloAceite">Notas </h3>
    
        <div class="cajaNota">
        <p class="pintoNota">  ${aceite.fdescripcion}</p>
        </div>
        </div>
        <div class="cajaBoton">
        <button href="#tda" class="btnBorrar" id="${aceite.id}" name="deleteAceite">Borrar</button>
        </div>
    </div>
    </div>

`


    muestraTipoAceite.appendChild(div);

    cargaTipoAceite.reset();
    saveAceiteStorage(tipoDeAceite);

};



const borrarAceite = (id) => {
    tipoDeAceite.forEach((aceite, index) => {
        if (aceite.id === id) {
            tipoDeAceite.splice(index, 1);
        }
    });
    showAceite(tipoDeAceite);

    // Pisamos o actualizamos los valores del Storage
    saveAceiteStorage(tipoDeAceite);
};

const showAceite = (tipoDeAceite) => {
    const div = document.createElement("div");

    // Limpiamos el contenedor de las tareas
    muestraTipoAceite.innerHTML = '';

    tipoDeAceite.forEach(aceite => {

        div.innerHTML += `
        <div class="contAceite">
    <h3 class="tituloAceite">Cambio de Aceite </h3>
    <div class="strongAceite">
        <div class="fechaTipo">
        <strong>Fecha</strong> <p class="pintoAceite"> ${aceite.fecha} </p>
        <strong>Tipo de aceite </strong> <p class="pintoAceite">  ${aceite.tipo}</p>
        </div>
        <h3 class="tituloAceite">Filtros </h3>
        <div class="filtroTipo">
        <strong>Aceite </strong> <p class="pintoAceite">  ${aceite.fAceite}</p>
        <strong>Aire  </strong><p class="pintoAceite">  ${aceite.fAire}</p>
        <strong>Nafta </strong><p class="pintoAceite">  ${aceite.fNafta}</p>
        <strong>Habitaculo </strong><p class="pintoAceite">  ${aceite.fHabitaculo}</p>
        </div>
        <div class="Nota">
        <h3 class="tituloAceite">Notas </h3>
      
        <div class="cajaNota">
        <p class="pintoNota">  ${aceite.fdescripcion}</p>
        </div>
        </div>
        <div class="cajaBoton">
        <button href="#tda" class="btnBorrar" id="${aceite.id}" name="deleteAceite">Borrar</button>
        </div>
    </div>
    </div>
        `;

        muestraTipoAceite.appendChild(div);
    });
};


//LOCALSTORAGE

const saveAceiteStorage = (tipoDeAceite) => {
    localStorage.setItem('tipoDeAceite', JSON.stringify(tipoDeAceite));
};

const getAceiteStorage = () => {
    const aceiteStorage = JSON.parse(localStorage.getItem('tipoDeAceite'));
    return aceiteStorage;
};

const getAceite = () => {
    if (localStorage.getItem('tipoDeAceite')) {
        tipoDeAceite = getAceiteStorage();
        showAceite(tipoDeAceite);
    }
}
//EVENTOS
document.addEventListener("DOMContentLoaded", getAceite)

muestraTipoAceite.addEventListener('click', (e) => {
    if (e.target.name === "deleteAceite") {
        borrarAceite(e.target.id);
    }
});

cargaTipoAceite.addEventListener('submit', (e) => {
    e.preventDefault();

    const formAceite = new FormData(cargaTipoAceite);
    const aceiteFecha = formAceite.get('fecha');
    const aceiteTipo = formAceite.get('aceiteTipo');
    //colocamos de esta manera para que si  no seleccion el checkbox diga "sin cambio" con el metodo "has"
    const aceiteFiltro = formAceite.has('filtroAceite') ? formAceite.get('filtroAceite') : 'NO';
    const aceiteAire = formAceite.has('filtroAire') ? formAceite.get('filtroAire') : 'NO';
    const aceiteNafta = formAceite.has('filtroNafta') ? formAceite.get('filtroNafta') : 'NO';
    const aceiteHabitaculo = formAceite.has('filtroHabitaculo') ? formAceite.get('filtroHabitaculo') : 'NO';
    const aceiteNota = formAceite.get("nota");



    const aceiteid = getRandomId()


    const aceite = creandotipoDeAceite(aceiteid, aceiteFecha, aceiteTipo, aceiteFiltro, aceiteAire, aceiteNafta, aceiteHabitaculo, aceiteNota);

    addAceite(aceite);

});


