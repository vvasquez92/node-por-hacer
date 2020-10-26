const { rejects } = require('assert');
const fs = require('fs');

let listaPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listaPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) console.log(err);
        else console.log('archivo actualizado');
    })
}

const cargarDB = () => {
    try {
        listaPorHacer = require('../db/data.json');
    } catch {
        listaPorHacer = [];
    }

}

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listaPorHacer.push(porHacer);

    guardarDB();

    return porHacer;
}

const getListado = () => {
    cargarDB();

    return listaPorHacer;

}

const actualizar = (descripcion, completado = true) => {
    cargarDB();

    let index = listaPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listaPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {
    cargarDB();

    let index = listaPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listaPorHacer.splice(index, 1);
        guardarDB();
        return true;
    } else {
        return false;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}