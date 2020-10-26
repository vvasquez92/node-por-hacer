const descripcion = {
    demand: true,
    alias: 'd'
}

const completado = {
    alias: 'c',
    default: true
}

const crear = {
    descripcion
}

const actualizar = {
    descripcion,
    completado
}

const borrar = {
    descripcion
}

const argv = require('yargs')
    .command('crear', 'Crear una tarea por hacer', crear)
    .command('actualizar', 'Actualiza el estado de una tarea', actualizar)
    .command('borrar', 'Borra una tarea', borrar)
    .help()
    .argv;

module.exports = {
    argv
}