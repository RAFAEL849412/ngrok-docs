const express = require('express');
const ngrok = require('ngrok');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Rota de teste
app.get('/', (req, res) => {
  res.send('API funcionando via ngrok!');
});

// Rota para abrir o link do site de configuração do ngrok para Docker
app.get('/ngrok-docker-setup', (req, res) => {
  res.redirect('https://dashboard.ngrok.com/get-started/setup/docker');
});

// Inicia o servidor e o túnel ngrok
const start = async () => {
  try {
    app.listen(PORT, async () => {
      console.log(`Servidor Express rodando em http://localhost:${PORT}`);

      // Conectando o ngrok
      const url = await ngrok.connect({
        addr: PORT,
        authtoken: process.env.NGROK_AUTHTOKEN
      });

      console.log(`ngrok está ativo em: ${url}`);
    });
  } catch (err) {
    console.error('Erro ao iniciar:', err);
  }
};

start();
