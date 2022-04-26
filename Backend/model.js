const conexion = require("./conexion")
const {Client} = require("pg");


module.exports = async function (context) {
    const client = new Client(conexion)
    client.connect()
    const consult  = client.query('select * from employe');
    Promise.all([consult])
        .then(results => {
            const resultados = results[0].rows;
            console.log(resultados)
            client.end()
            return resultados
        }).catch(error => console.error(error))
}

