import loguxTsConfig from '@logux/eslint-config/ts'

export default [
  {
    ignores: ['**/errors.ts', 'coverage']
  },
  ...loguxTsConfig
]
