const path = require('path');

module.exports = {
  mode: 'development', // Ou 'production'
  entry: './src/index.js', // Caminho correto do arquivo de entrada
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};

module.exports = {
  mode: 'development', // ou 'production'
  entry: './src.js',
  output: {
    filename: 'main.js',
  },
};
