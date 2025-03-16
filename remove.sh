#!/bin/bash

# Cria as pastas necessárias
mkdir -p .github/.workflows

# Move os arquivos para a pasta .github/.workflows se eles existirem
for file in .autofix.yml .ci-checks.yml .deploy.yml .webpack.yml .write-rss.yml; do
    if [ -e "$file" ]; then
        mv "$file" .github/.workflows/
    else
        echo "Arquivo $file não encontrado, pulando..."
    fi
done