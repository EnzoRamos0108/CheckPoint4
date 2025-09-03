const express = require('express')
const cors = require('cors')
const app = express()
const port = 5001

app.listen(port, ()=>{
    console.log(`Servidor rodando na porta ${port}`)
})
app.use(express.json())
app.use(cors())
