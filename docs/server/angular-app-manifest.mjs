
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/ejercicioenclaseangular2/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/ejercicioenclaseangular2"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1331, hash: '4354b3f8e2b1a78146fd093aecce9fc6e97ab973e9f37c0429be8dd5b0f09f3b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 990, hash: '936fa9977b97e3aaea1819b67809a1c09721ea94ea3b015e3ef4008d25499b52', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 6911, hash: 'c2c332d8aee5dbc2922299af84e6a4ceedefe12ae756ea17575fb45b360912c7', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-QEIAELCQ.css': {size: 729, hash: 'znwGlH26RH4', text: () => import('./assets-chunks/styles-QEIAELCQ_css.mjs').then(m => m.default)}
  },
};
