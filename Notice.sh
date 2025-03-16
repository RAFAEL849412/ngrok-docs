#!/bin/bash

# Verifica se o pnpm está instalado
if ! command -v pnpm &> /dev/null; then
    echo "pnpm não encontrado. Instalando o pnpm..."
    npm install -g pnpm
fi

# Pergunta ao usuário se deseja iniciar a instalação com o --frozen-lockfile
echo "Você quer iniciar a instalação das dependências com pnpm usando --frozen-lockfile? (s/n)"
read -r resposta
if [ "$resposta" = "s" ]; then
    echo "Iniciando a instalação das dependências com pnpm..."
    pnpm install --frozen-lockfile

    # Verifica se a instalação foi bem-sucedida
    if [ $? -eq 0 ]; then
        echo "Instalação bem-sucedida!"
    else
        echo "Houve um erro na instalação."
        exit 1
    fi
else
    echo "Instalação cancelada pelo usuário."
fi