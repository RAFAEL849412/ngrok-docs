// babel.config.cjs

module.exports = {
  presets: [
    // Resolvendo o caminho do preset do Docusaurus
    require.resolve('@docusaurus/core/lib/babel/preset')
  ]
};