import loguxTsConfig from '@logux/eslint-config/ts'

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: ['**/errors.ts', 'coverage']
  },
  ...loguxTsConfig
]
