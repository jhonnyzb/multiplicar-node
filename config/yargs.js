const opt = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }

}
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla', opt)
    .command('crear', 'Genera archivo con la tabla Multiplicar', opt)
    .help()
    .argv


module.exports={
    argv
}