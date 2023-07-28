const amqp = require('amqplib')

const rabbitSettings = {
    protocol: 'amqp',
    hostname: '52.71.43.19',
    port: 5672,
    username: 'guest',
    password: 'guest'
}
async function connect() {
    const queue = "score"
    try {
        const conn = await amqp.connect(rabbitSettings);
        console.log('Conexión exitosa')
        const channel3 = await conn.createChannel()
        console.log ("Canal creado exitosamente")

        channel3.consume(queue, (msn)=> {
            console.log('Tu puntuacion es:', msn.content.toString())
            channel3.ack(msn)
        })
        

    } catch (error) {
        console.error('Error => ', error)    
    }
}

connect();