const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 19000


//Routes
const routerEmployee = require('./routes/EmpleadosRouter.js')
const routerLogin = require('./routes/LoginRouter.js')

// Middleware
app.use("/api/empleados/", routerEmployee)
app.use("/api/auth/", routerLogin)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.json())

app.listen(port, () => {
    console.log(`Server funcionando en http://localhost:${port}`)
})