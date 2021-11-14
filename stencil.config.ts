import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stencil-config-e2e-conflict',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      baseUrl: '/subdirectory',
      serviceWorker: null, // disable service workers
    },
  ],
};
