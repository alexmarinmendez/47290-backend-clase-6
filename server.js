import http from 'http'

const server = http.createServer((req, res) => {
    console.log('Alguien me hizo una petición')
    res.end('Hola Mundo!!!')
})

const connectedServer = server.listen(8080, () => console.log('Server Up!'))