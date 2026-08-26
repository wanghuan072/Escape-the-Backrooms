import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTypeScript from 'eslint-config-next/typescript'

export default defineConfig([
  ...nextVitals,
  ...nextTypeScript,
  {
    rules: {
      '@next/next/no-img-element': 'off',
      'import/no-anonymous-default-export': 'off',
    },
  },
  {
    files: ['src/components/layout/RootDocument.tsx'],
    rules: {
      '@next/next/no-head-element': 'off',
      '@next/next/no-sync-scripts': 'off',
    },
  },
  globalIgnores([
    '.next/**',
    'coverage/**',
    'next-env.d.ts',
    'public/collet-data.js',
  ]),
])
