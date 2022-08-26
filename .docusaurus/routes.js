import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'ef5'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '1b9'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '74f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'a23'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '7a6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'f40'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '950'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '343'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '1f0'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', 'dd1'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', 'b99'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e14'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', 'fd1'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '991'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '672'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '33f'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '191'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'b68'),
    exact: true
  },
  {
    path: '/first-markdown-page',
    component: ComponentCreator('/first-markdown-page', 'e23'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'b66'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '492'),
    routes: [
      {
        path: '/docs/category/tutorial---basics',
        component: ComponentCreator('/docs/category/tutorial---basics', 'd44'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/tutorial---extras',
        component: ComponentCreator('/docs/category/tutorial---extras', 'f09'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/JavaScript/Arrays',
        component: ComponentCreator('/docs/JavaScript/Arrays', '4c5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/JavaScript/Conditionals',
        component: ComponentCreator('/docs/JavaScript/Conditionals', '47a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/JavaScript/Functions',
        component: ComponentCreator('/docs/JavaScript/Functions', 'dec'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/JavaScript/Introduction',
        component: ComponentCreator('/docs/JavaScript/Introduction', 'bab'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/JavaScript/Iterators',
        component: ComponentCreator('/docs/JavaScript/Iterators', '66a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/JavaScript/Loops',
        component: ComponentCreator('/docs/JavaScript/Loops', 'f8f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/JavaScript/Objects',
        component: ComponentCreator('/docs/JavaScript/Objects', '64e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/JavaScript/Scope',
        component: ComponentCreator('/docs/JavaScript/Scope', '48f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/test folder/hello',
        component: ComponentCreator('/docs/test folder/hello', '312'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/test folder/test',
        component: ComponentCreator('/docs/test folder/test', '904'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Tutorial/tutorial-basics/congratulations',
        component: ComponentCreator('/docs/Tutorial/tutorial-basics/congratulations', 'c7b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Tutorial/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/docs/Tutorial/tutorial-basics/create-a-blog-post', '8cc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Tutorial/tutorial-basics/create-a-document',
        component: ComponentCreator('/docs/Tutorial/tutorial-basics/create-a-document', 'd39'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Tutorial/tutorial-basics/create-a-page',
        component: ComponentCreator('/docs/Tutorial/tutorial-basics/create-a-page', 'e5a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Tutorial/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/docs/Tutorial/tutorial-basics/deploy-your-site', 'dcc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Tutorial/tutorial-basics/markdown-features',
        component: ComponentCreator('/docs/Tutorial/tutorial-basics/markdown-features', 'b4c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Tutorial/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/docs/Tutorial/tutorial-extras/manage-docs-versions', 'bba'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Tutorial/tutorial-extras/translate-your-site',
        component: ComponentCreator('/docs/Tutorial/tutorial-extras/translate-your-site', '822'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '6e3'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
