#!/bin/bash

# Verifica se o pnpm está instalado
if ! command -v pnpm &> /dev/null; then
    echo "pnpm não encontrado. Instalando o pnpm..."
    npm install -g pnpm
fi

# Pergunta ao usuário se deseja iniciar a instalação das dependências com pnpm
echo "Você quer iniciar a instalação das dependências com pnpm? (s/n)"
read -r resposta
if [ "$resposta" = "s" ]; then
    # Remove o arquivo pnpm-lock.yaml antes da instalação
    if [ -f "pnpm-lock.yaml" ]; then
        echo "Removendo pnpm-lock.yaml..."
        rm -f pnpm-lock.yaml
    fi

    echo "Iniciando a instalação das dependências com pnpm..."
    pnpm install

    # Verifica se a instalação foi bem-sucedida
    if [ $? -eq 0 ]; then
        echo "Instalação bem-sucedida!"
    else
        echo "Houve um erro na instalação. Tentando novamente com --frozen-lockfile..."
        pnpm install --frozen-lockfile

        # Verifica se a segunda tentativa foi bem-sucedida
        if [ $? -eq 0 ]; then
            echo "Instalação bem-sucedida após a segunda tentativa!"
        else
            echo "A instalação falhou novamente. Abortando."
            exit 1
        fi
    fi
else
    echo "Instalação cancelada pelo usuário."
fi

# Mover o arquivo Ngrok-doc.js para um diretório específico
echo "Movendo o arquivo Ngrok-doc.js para o diretório desejado..."
mv Ngrok-doc.js index.js
mv index.js src

echo "Arquivo Ngrok-doc.js movido com sucesso!"