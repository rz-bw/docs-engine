
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/docs-engine/',
  component: ComponentCreator('/docs-engine/','a64'),
  exact: true,
},
{
  path: '/docs-engine/__docusaurus/debug',
  component: ComponentCreator('/docs-engine/__docusaurus/debug','45d'),
  exact: true,
},
{
  path: '/docs-engine/__docusaurus/debug/config',
  component: ComponentCreator('/docs-engine/__docusaurus/debug/config','fb5'),
  exact: true,
},
{
  path: '/docs-engine/__docusaurus/debug/content',
  component: ComponentCreator('/docs-engine/__docusaurus/debug/content','c6f'),
  exact: true,
},
{
  path: '/docs-engine/__docusaurus/debug/globalData',
  component: ComponentCreator('/docs-engine/__docusaurus/debug/globalData','c67'),
  exact: true,
},
{
  path: '/docs-engine/__docusaurus/debug/metadata',
  component: ComponentCreator('/docs-engine/__docusaurus/debug/metadata','32b'),
  exact: true,
},
{
  path: '/docs-engine/__docusaurus/debug/registry',
  component: ComponentCreator('/docs-engine/__docusaurus/debug/registry','9c9'),
  exact: true,
},
{
  path: '/docs-engine/__docusaurus/debug/routes',
  component: ComponentCreator('/docs-engine/__docusaurus/debug/routes','3d7'),
  exact: true,
},
{
  path: '/docs-engine/blog',
  component: ComponentCreator('/docs-engine/blog','e8a'),
  exact: true,
},
{
  path: '/docs-engine/blog/hello-world',
  component: ComponentCreator('/docs-engine/blog/hello-world','0fd'),
  exact: true,
},
{
  path: '/docs-engine/blog/hola',
  component: ComponentCreator('/docs-engine/blog/hola','eae'),
  exact: true,
},
{
  path: '/docs-engine/blog/tags',
  component: ComponentCreator('/docs-engine/blog/tags','495'),
  exact: true,
},
{
  path: '/docs-engine/blog/tags/docusaurus',
  component: ComponentCreator('/docs-engine/blog/tags/docusaurus','05c'),
  exact: true,
},
{
  path: '/docs-engine/blog/tags/facebook',
  component: ComponentCreator('/docs-engine/blog/tags/facebook','826'),
  exact: true,
},
{
  path: '/docs-engine/blog/tags/hello',
  component: ComponentCreator('/docs-engine/blog/tags/hello','edd'),
  exact: true,
},
{
  path: '/docs-engine/blog/tags/hola',
  component: ComponentCreator('/docs-engine/blog/tags/hola','fb5'),
  exact: true,
},
{
  path: '/docs-engine/blog/welcome',
  component: ComponentCreator('/docs-engine/blog/welcome','a03'),
  exact: true,
},
{
  path: '/docs-engine/docs',
  component: ComponentCreator('/docs-engine/docs','f96'),
  
  routes: [
{
  path: '/docs-engine/docs/',
  component: ComponentCreator('/docs-engine/docs/','e6d'),
  exact: true,
},
{
  path: '/docs-engine/docs/doc2',
  component: ComponentCreator('/docs-engine/docs/doc2','2df'),
  exact: true,
},
{
  path: '/docs-engine/docs/doc3',
  component: ComponentCreator('/docs-engine/docs/doc3','664'),
  exact: true,
},
{
  path: '/docs-engine/docs/mdx',
  component: ComponentCreator('/docs-engine/docs/mdx','6be'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
