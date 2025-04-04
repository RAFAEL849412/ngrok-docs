#!/bin/bash

# Cria a pasta necessária
mkdir -p .github/workflows

# Lista de arquivos a serem movidos
files=(.autofix.yml .ci-checks.yml .deploy.yml .webpack.yml .write-rss.yml docker-compose.yaml)

# Move os arquivos para a pasta .github/workflows se eles existirem
for file in "${files[@]}"; do
    if [ -e "$file" ]; then
        mv "$file" .github/workflows/
    else
        echo "Arquivo $file não encontrado, pulando..."
    fi
done
