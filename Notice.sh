Esse erro indica que o arquivo pnpm-lock.yaml está corrompido ou malformatado. Aqui estão algumas maneiras de corrigir o problema:

1. Excluir o arquivo de lock e reinstalar as dependências

Tente remover o arquivo de lock (pnpm-lock.yaml) e reinstalar os pacotes:

rm pnpm-lock.yaml
pnpm install

2. Forçar a regeneração do lockfile

Se a remoção simples não resolver, tente excluir node_modules e pnpm-lock.yaml:

rm -rf node_modules pnpm-lock.yaml
pnpm install

3. Verificar o formato do arquivo

Se quiser inspecionar o erro manualmente, abra pnpm-lock.yaml com um editor como nano ou vim:

nano pnpm-lock.yaml

Verifique se há caracteres inválidos ou uma formatação incorreta, como espaços extras antes dos dois pontos (:).

4. Atualizar o PNPM

Se estiver usando uma versão antiga do PNPM, tente atualizá-lo:

pnpm add -g pnpm

5. Usar pnpm install --force

Isso força a reinstalação das dependências e a regeneração do pnpm-lock.yaml:

pnpm install --force

Se o erro continuar, me avise para que possamos investigar mais a fundo!

