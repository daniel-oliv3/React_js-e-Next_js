##
### Seção 4: React Hooks (Teoria e hooks avançados)
##


<p align="center">
  <img alt="...." src="./assets/reactjs_logo_icon_170805.png" width="60%">
</p>



### 43 - React Hooks e componentes de classes


- Exemplo:
  - react_js-43



### 44 - Configuração do projeto (eslint, prettier, editorconfig e prop-types)

- Hello World: **Configuração de um projeto INICIAL**
  - .editorconfig
  - .eslintrc.js
  - .prettierrc.js

**VSCode Extensões**

- `Reload`

**Configuração do Ambiente de Desenvolvimento**

- Criar o arquivo `.editorconfig` na raiz do projeto (click botão direito do mouse no VSCODE, aba extensões)
  - Generate .editorconfig

- `.editorconfig`
```conf
# EditorConfig is awesome: https://EditorConfig.org

# top-most EditorConfig file
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
```

- Criar o arquivo `.eslintrc.js` na raiz do projeto

- `.eslintrc.js`

```js
module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
  },
};
```

- Criar o arquivo `.prettierrc.js` na raiz do projeto

- `.prettierrc.js`

```js
module.exports = {
  semi: true,
  trailingComma: 'all',
  singleQuote: true,
  printWidth: 120,
  tabWidth: 2
}
```

**Comandos VSCode**

- Prettier
```
npm i -D prettier eslint-config-prettier eslint-plugin-prettier
```

- Eslint
```
npx eslint src/**/*.js --fix
```

- Prop-types
```
npm i prop-types
```

**Start**


- Roda o projeto
```
npm start
```


- Exemplo:
  - react_js-44




























