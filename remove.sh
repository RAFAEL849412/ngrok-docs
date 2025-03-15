mkdir -p .github
mkdir -p .workflows
cd /data/data/com.termux/files/home/ngrok-docs/.github
mv /data/data/com.termux/files/home/ngrok-docs/.autofix.yml /data/data/com.termux/files/home/ngrok-docs/.github/.workflows
mv /data/data/com.termux/files/home/ngrok-docs/.ci-checks.yml /data/data/com.termux/files/home/ngrok-docs/.github/.workflows
mv /data/data/com.termux/files/home/ngrok-docs/.deploy.yml /data/data/com.termux/files/home/ngrok-docs/.github/.workflows 
mv /data/data/com.termux/files/home/ngrok-docs/.webpack.yml /data/data/com.termux/files/home/ngrok-docs/.github/.workflows 
mv /data/data/com.termux/files/home/ngrok-docs/.write-rss.yml /data/data/com.termux/files/home/ngrok-docs/.github/.workflows
cd .. 
cd ..
