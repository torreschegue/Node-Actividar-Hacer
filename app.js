//const argv = require('yargs').argv;

const argv = require('./config/yargs').argv;
const colors = require('colors');
const porHacer = require('./Por-Hacer/por-hacer');

console.log(argv);

let comando= argv._[0];
 
switch (comando){

    case 'Crear':
        let tarea = porHacer.Crear(argv.descripcion);
        console.log(tarea);
    break;

    case 'Listar':
       let Listado = porHacer.getListado();
            for(let tarea of Listado){
                console.log('============= Pendiente ============='.green);
                console.log(tarea.descripcion);
                console.log('Estado: ', tarea.completado);
                console.log('====================================='.green);
            }
    break;

    case 'Actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
    break;

    case 'Borrar':
        let Borrar = porHacer.Borrar(argv.descripcion);
        console.log(Borrar);
    break;

    default:
        console.log('Comando No Fue Conocido');

}