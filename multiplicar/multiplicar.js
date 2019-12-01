const fs = require('fs');

let listarTabla = (base, limite = 10) => {

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} x ${i} = ${base * i}\n`);
    }

}



let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('No es un numero')
            return
        }

        let data = ''

        for (let i = 1; i <= limite; i++) {
            data += `${base} x ${i} = ${base * i}\n`
        }



        fs.writeFile(`archivos/Tabla-${base}-al-${ limite }`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`Tabla ${base}-al-${ limite }.txt`)
            //console.log('El archivo ha sido creado');
        });

    })
}

module.exports = {
    crearArchivo,
    listarTabla
}



