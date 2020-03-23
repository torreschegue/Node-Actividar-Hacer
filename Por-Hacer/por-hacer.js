const fs = require('fs');

let listadoPorHacer = [];

// Guardando lo Capturado en el arreglo y transformando a JSON
const guardarDB = () => {
 let data = JSON.stringify(listadoPorHacer);
 fs.writeFile('db/data.json', data, (err) =>{

    if(err) throw new Error('No se pudo Grabar', err);
 });

}

const CargarDB = () =>{
    try{
        listadoPorHacer = require('../db/data.json');
    }catch(error){
        listadoPorHacer = [];
    }   
}

const Crear = (descripcion) => {

    CargarDB();
    let porHacer = {
        descripcion, 
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}

const getListado = () => {
    CargarDB();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    CargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion );
    if(index >= 0){
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    }else{
        return false;
    }
}

const Borrar = (descripcion) => {
    CargarDB();
    let nuevoListado = listadoPorHacer.filter( tarea => tarea.descripcion !== descripcion);

    if (listadoPorHacer.length === nuevoListado.length){
        return false;
    }else{
       listadoPorHacer = nuevoListado;
       guardarDB();
       return true;
    }
}

module.exports = {
    Crear,
    getListado,
    actualizar, 
    Borrar
}