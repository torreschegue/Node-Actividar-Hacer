const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion De La Tarea Por Hacer'
}

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca Como Completado o Pendiente la Tarea'
}

const argv = require('yargs')
                .command('Crear', 'Crear Un Elemento Por Hacer',{
                    descripcion
                })
                .command('Actualizar', 'Actualizar El Estado Completo de una Tarea', {
                    descripcion,
                    completado
                })
                .command('Borrar', 'Borrar Una Tarea', {
                    descripcion
                })

                .help()
                .argv;

module.exports = {
    argv
}






