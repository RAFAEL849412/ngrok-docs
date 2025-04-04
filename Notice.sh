#!/bin/bash

# Pergunta ao usuário se deseja instalar/atualizar o pnpm globalmente via npm
read -n1 -p "Deseja instalar ou atualizar o pnpm com 'npm install -g pnpm'? (s/n): " instalar_pnpm
echo
if [[ "$instalar_pnpm" =~ ^[sS]$ ]]; then
    echo "Instalando/atualizando pnpm com npm..."
    npm install -g pnpm
else
    echo "Instalação do pnpm ignorada pelo usuário."
fi

# Pergunta ao usuário se deseja iniciar a instalação das dependências com pnpm
read -n1 -p "Você quer iniciar a instalação das dependências com pnpm? (s/n): " resposta
echo
if [[ "$resposta" =~ ^[sS]$ ]]; then
    # Remove o arquivo pnpm-lock.yaml antes da instalação
    if [ -f "pnpm-lock.yaml" ]; then
        echo "Removendo pnpm-lock.yaml..."
        rm -f pnpm-lock.yaml
    fi

    echo "Iniciando a instalação das dependências com pnpm..."
    pnpm install

    if [ $? -eq 0 ]; then
        echo "Instalação bem-sucedida!"
    else
        echo "Erro na instalação. Tentando novamente com --frozen-lockfile..."
        pnpm install --frozen-lockfile

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

# Mover o arquivo Ngrok-doc.js para src/index.js
if [ -f "Ngrok-doc.js" ]; then
    mkdir -p src
    echo "Movendo Ngrok-doc.js para src/index.js..."
    mv -f Ngrok-doc.js src/index.js
else
    echo "Arquivo Ngrok-doc.js não encontrado. Nenhum arquivo foi movido."
fi
