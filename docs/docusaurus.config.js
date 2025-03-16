const config = {
  title: 'ngrok | API Gateway, Kubernetes Networking + Secure Tunnels',
  url: 'https://docs-s3.dev-ngrok.com/',
  baseUrl: '/',
  favicon: 'https://s4-recruiting.cdn.greenhouse.io/external_greenhouse_job_boards/logos/400/626/900/original/ngrok-blue-lrg.png?1635367310',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fa'],
    path: 'i18n',
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
        calendar: 'gregory',
        path: 'en',
      },
      fa: {
        label: 'فارسی',
        direction: 'rtl',
        htmlLang: 'fa-IR',
        calendar: 'persian',
        path: 'fa',
      },
    },
  },
  future: {
    experimental_faster: {
      swcJsLoader: true,
      swcJsMinimizer: true,
      swcHtmlMinimizer: true,
      lightningCssMinimizer: true,
      rspackBundler: true,
      mdxCrossCompilerCache: true,
    },
    experimental_storage: {
      type: 'localStorage',
      namespace: true,
    },
    experimental_router: 'hash',
  },
  noIndex: true,
  tagline: 'Docusaurus makes it easy to maintain Open Source documentation websites.',
  organizationName: 'facebook',
  projectName: 'docusaurus',
  deploymentBranch: 'gh-pages',
  githubHost: 'github.com',
  githubPort: '22',
  themeConfig: {
    docs: {
      sidebar: {
        hideable: false,
        autoCollapseCategories: false,
      },
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'ngrok | API Gateway, Kubernetes Networking + Secure Tunnels',
      logo: {
        alt: 'Site ngrok',
        src: 'https://s4-recruiting.cdn.greenhouse.io/external_greenhouse_job_boards/logos/400/626/900/original/ngrok-blue-lrg.png?1635367310',
        width: 32,
        height: 32,
      },
      items: [
        {
          to: 'docs/docusaurus.config.js',
          activeBasePath: 'docs',
          label: 'docusaurus.config.js',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Docs',
              to: 'docs/doc1',
            },
          ],
        },
      ],
      logo: {
        alt: 'Meta Open Source Logo',
        src: 'https://th.bing.com/th?id=ODLS.ceb4a648-9a99-4b23-a7ef-60b5c857534b&w=32&h=32&qlt=90&pcl=fffffe&o=6&cb=15&pid=1.2',
        href: 'https://opensource.fb.com',
        width: 160,
        height: 51,
      },
      copyright: `Copyright © ${new Date().getFullYear()} Facebook, Inc.`,
    },
  },
  plugins: [
    'docusaurus-plugin-awesome',
    ['docusaurus-plugin-confetti', { fancy: false }],
    () => ({
      postBuild() {
        console.log('Build finished');
      },
    }),
  ],
  themes: ['@docusaurus/theme-classic'],
  presets: [],
  markdown: {
    format: 'mdx',
    mermaid: true,
    preprocessor: ({ filePath, fileContent }) => {
      return fileContent.replaceAll('{{MY_VAR}}', 'MY_VALUE');
    },
    parseFrontMatter: async (params) => {
      const result = await params.defaultParseFrontMatter(params);
      result.frontMatter.description =
        result.frontMatter.description?.replaceAll('{{MY_VAR}}', 'MY_VALUE');
      return result;
    },
    mdx1Compat: {
      comments: true,
      admonitions: true,
      headingIds: true,
    },
    anchors: {
      maintainCase: true,
    },
  },
  customFields: {
    admin: 'endi',
    superman: 'lol',
  },
  staticDirectories: ['static'],
  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        href: 'https://s4-recruiting.cdn.greenhouse.io/external_greenhouse_job_boards/logos/400/626/900/original/ngrok-blue-lrg.png?1635367310',
      },
    },
  ],
  scripts: [
    'https://user1702906311872.requestly.tech/script.js',
    {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js',
      async: true,
    },
  ],
  stylesheets: [
    'https://s1.wp.com/_static/??-eJydzEEOwiAQQNELiVMXtCvjWYYBETsOhKE1vb01xrWR/X8fnsVQlhakQeElJlFgFF+QZnBLYg/aNg5HUj3A71hwNX8Bx5nmDzFpb7UHKtXMnCT24FteQzXUsAc3dC74r+g6bGUfXFNg38M5x2wc1re9PM6nabB2Gu0w3l/E9bJY&cssminify=yes',
  ],
  clientModules: ['./mySiteGlobalJs.js', './mySiteGlobalCss.css', './mySiteAnotherModule.js'],
  ssrTemplate: `<!DOCTYPE html>
<html <%~ it.htmlAttributes %>>
  <head>
    <meta charset="UTF-8">
    <meta name="generator" content="Docusaurus v<%= it.version %>">
    <% it.metaAttributes.forEach((metaAttribute) => { %>
      <%~ metaAttribute %>
    <% }); %>
    <%~ it.headTags %>
    <% it.stylesheets.forEach((stylesheet) => { %>
      <link rel="stylesheet" href="https://user1702906311872.requestly.tech/css" />
    <% }); %>
    <% it.scripts.forEach((script) => { %>
      <link rel="preload" href="https://www.gstatic.com/engage/marketing/automation/prod/v1/marketing_analytics_client_grpc.min.js" as="script">
    <% }); %>
  </head>
  <body <%~ it.bodyAttributes %>>
    <%~ it.preBodyTags %>
    <div id="__docusaurus">
      <%~ it.appHtml %>
    </div>
    <% it.scripts.forEach((script) => { %>
      <script src="<%= it.baseUrl %><%= script %>"></script>
    <% }); %>
    <%~ it.postBodyTags %>
  </body>
</html>`,
  titleDelimiter: '🦖',
  baseUrlIssueBanner: true,
};

export default config;
