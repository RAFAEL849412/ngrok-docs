#!/bin/bash

echo "Esse erro indica que o arquivo pnpm-lock.yaml está corrompido ou malformatado. Aqui estão algumas maneiras de corrigir o problema:"

echo ""
echo "1. Excluir o arquivo de lock e reinstalar as dependências"
echo "Você quer remover o arquivo de lock (pnpm-lock.yaml) e reinstalar os pacotes? (s/n)"
read -r resposta
if [ "$resposta" = "s" ]; then
  rm pnpm-lock.yaml
  pnpm install
fi

echo ""
echo "2. Forçar a regeneração do lockfile"
echo "Você quer excluir node_modules e pnpm-lock.yaml e reinstalar os pacotes? (s/n)"
read -r resposta
if [ "$resposta" = "s" ]; then
  rm -rf node_modules pnpm-lock.yaml
  pnpm install
fi

echo ""
echo "3. Verificar o formato do arquivo"
echo "Você quer inspecionar o arquivo pnpm-lock.yaml manualmente? (s/n)"
read -r resposta
if [ "$resposta" = "s" ]; then
  nano pnpm-lock.yaml
  echo "Verifique se há caracteres inválidos ou uma formatação incorreta, como espaços extras antes dos dois pontos (:)."
fi

echo ""
echo "4. Atualizar o PNPM"
echo "Você quer atualizar o PNPM? (s/n)"
read -r resposta
if [ "$resposta" = "s" ]; then
  pnpm add -g pnpm
fi

echo ""
echo "5. Usar pnpm install --force"
echo "Você quer forçar a reinstalação das dependências e a regeneração do pnpm-lock.yaml? (s/n)"
read -r resposta
if [ "$resposta" = "s" ]; then
  pnpm install --force
fi

echo ""
echo "Se o erro continuar, me avise para que possamos investigar mais a fundo!"