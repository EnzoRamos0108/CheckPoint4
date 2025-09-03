const express = require('express')
const cors = require('cors')
const app = express()
const port = 5001

app.listen(port, ()=>{
    console.log(`Servidor rodando na porta ${port}`)
})
app.use(express.json())
app.use(cors())

app.get('/carros', (req, res) => {
  res.json([{ id: 1, nome: 'Fusca' }, { id: 2, nome: 'Mustang' }]);
});

app.get('/sobre', (req, res) => {
  res.json({ texto: 'Somos apaixonados por carros!' });
});

app.get('/contato', (req, res) => {
  res.json({ email: 'contato@motorhorses.com', telefone: '(11) 95299-2081' });
});