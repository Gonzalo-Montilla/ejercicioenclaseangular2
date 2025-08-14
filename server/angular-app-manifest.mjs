
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://Gonzalo-Montilla.github.io/ejercicioenclaseangular2/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/ejercicioenclaseangular2"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1365, hash: '0db4693af2073687274f202e86a7673a6913f9948d2644e0a4e1db781230e0cd', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1024, hash: 'b67623b0b6e9c7cf46f2c934e4fc8f97cfd97538c5a10cae90ed6e424eb05bf3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 6945, hash: 'dc1bcc0b1218d3182c6ac49c435fb1aefd556f981fa32bb9fc3d8b8d342f0ed0', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-QEIAELCQ.css': {size: 729, hash: 'znwGlH26RH4', text: () => import('./assets-chunks/styles-QEIAELCQ_css.mjs').then(m => m.default)}
  },
};
