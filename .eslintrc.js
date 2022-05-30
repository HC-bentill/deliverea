const OFF = 0
const ERROR = 2

module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'prettier'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 13,
    sourceType: 'module'
  },
  plugins: ['import', 'jsx-a11y', 'react', 'react-hooks'],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'react/no-unescaped-entities': [ERROR, { forbid: ['>', '}', '"'] }],
    'react/prop-types': [ERROR, { skipUndeclared: true }]
  },
  overrides: [
    {
      files: ['sanity/plugins/**/*.js', 'sanity/plugins/**/*.jsx'],
      rules: {
        'no-unused-vars': [
          'error',
          {
            varsIgnorePattern: '^React$'
          }
        ],
        'react/react-in-jsx-scope': OFF,
        'react/jsx-uses-react': OFF
      }
    }
  ]
}
