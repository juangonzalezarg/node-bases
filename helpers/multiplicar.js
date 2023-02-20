const fs = require('fs');
const colors = require('colors/safe');

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {

    try {

        let salida = '';
        let consola = '';

        for (let index = 1; index <= hasta; index++) {

            salida += `${base} ${colors.yellow('x')} ${index} ${colors.yellow('=')} ${base * index}\n`;
            consola += `${base} x ${index} = ${base * index}\n`;

        }

        if (listar) {
            console.log('===================');
            console.log('    Tabla del', colors.green(base));
            console.log('===================');

            console.log(salida);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, consola);

        return `tabla-${base}.txt`;

    } catch (error) {
        throw error;
    }

}

module.exports = {
    crearArchivo
}
