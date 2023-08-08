//1. importamos la libreria express
import express from 'express'

//2. la ejecutamos (a la librería express)
const app = express()

//4. creacion de las rutas del servidor
app.get('/', (req, res) => {
    res.send('Hola Mundo!!')
})

app.get('/users', (req, res) => {
    res.send('La lista de usuarios registrados en este sitio web es:')
})

//3. app es el servidor web, lo ponemos a escuchar peticiones en el puerto 8080
app.listen(8080, () => console.log('Server Up!'))