//1. importamos la libreria express
import express from 'express'

const user = {
    name: 'Alex',
    last_name: 'Marin',
    age: 46
}

//2. la ejecutamos (a la librería express)
const app = express()

//4. creacion de las rutas del servidor
app.get('/', (req, res) => {
    res.send('Hola Mundo!!')
})

app.get('/users', (req, res) => {
    res.send(user)
})

app.get('/home', (req, res) => {
    res.send('<h1>Hola Mundo!!!</h1><hr /><h2>Bienvenido</h2><div style="color: blue">Soy un texto de color blue</div>')
})

//3. app es el servidor web, lo ponemos a escuchar peticiones en el puerto 8080
app.listen(8080, () => console.log('Server Up!'))