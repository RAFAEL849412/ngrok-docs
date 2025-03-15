const jwt = require('jsonwebtoken'); 
const payload = {
    userId: 256281040558,
    username: 'Facebook'
};
const secretKey = '2tbGpvEZks9ix3D5JK8QgGkP8Dj_5JuiWTKCFwkiWMFNgYv2g';
const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });
console.log('Token gerado:', token);
const config = {
    name: "ngrok-doc",
    version: "0.0.0",
    private: true,
    packageManager: "pnpm@10.4.1",
    engines: {
        node: "^22.0.0"
    },
    scripts: {
        preinstall: "npx only-allow pnpm",
        docusaurus: "docusaurus",
        fmt: "prettier --write --cache .",
        "fmt:check": "prettier --check .",
        dev: "pnpm run start",
        start: "docusaurus start --host 0.0.0.0",
        build: "cross-env NODE_OPTIONS=--max-old-space-size=5120 docusaurus build",
        swizzle: "docusaurus swizzle",
        deploy: "docusaurus deploy",
        clear: "docusaurus clear",
        serve: "docusaurus serve",
        typecheck: "tsc",
        "write-translations": "docusaurus write-translations",
        "write-heading-ids": "docusaurus write-heading-ids"
    }
};

console.log("NgrokDoc Configuration:", config);
