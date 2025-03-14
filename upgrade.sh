pkg update && pkg upgrade
pkg install nodejs
npm install -g pnpm
echo 'export PATH=$HOME/.npm-global/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
pnpm --version
