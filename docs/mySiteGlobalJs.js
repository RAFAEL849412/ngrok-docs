const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Verifica se a variável de ambiente PASSWORD está definida
const password = process.env.PASSWORD;
if (!password) {
  console.error('Erro: A variável de ambiente PASSWORD não está definida.');
  process.exit(1);
}

// Configuração do middleware
app.use(bodyParser.json());

// Conectar ao MongoDB (substitua pela sua URI do MongoDB)
const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/ngrok-docs';
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado ao MongoDB'))
  .catch(err => {
    console.error('Erro de conexão com o MongoDB:', err);
    process.exit(1);
  });

// Criar o modelo para o dispositivo
const DispositivoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  tipo: { type: String, required: true },
  sistemaOperacional: { type: String, required: true },
  dataRegistro: { type: Date, default: Date.now }
});

const Dispositivo = mongoose.model('Dispositivo', DispositivoSchema);

// Rota para registrar um novo dispositivo
app.post('/registrar', async (req, res) => {
  try {
    const { nome, tipo, sistemaOperacional } = req.body;

    // Validar os dados recebidos
    if (!nome || !tipo || !sistemaOperacional) {
      return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios!' });
    }

    // Criar um novo dispositivo
    const novoDispositivo = new Dispositivo({
      nome,
      tipo,
      sistemaOperacional
    });

    // Salvar no banco de dados
    await novoDispositivo.save();

    return res.status(201).json({ mensagem: 'Dispositivo registrado com sucesso!', dispositivo: novoDispositivo });
  } catch (err) {
    console.error('Erro ao registrar dispositivo:', err);
    return res.status(500).json({ mensagem: 'Erro ao registrar dispositivo' });
  }
});

// Iniciar o servidor
const PORT = process.env.PORT || 443;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});