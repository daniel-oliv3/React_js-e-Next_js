##
### Seção 4: React Hooks (Teoria e hooks avançados)
##


<p align="center">
  <img alt="...." src="./assets/reactjs_logo_icon_170805.png" width="100%">
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




### 45 - Update 04/2022 - novas configurações do ESLint e Prettier (React 18)

**UPDATE**

Update 04/2022 - novas configurações do ESLint e Prettier (React 18)
Como parte do meu compromisso com você, estou revisando este curso para atualizar quaisquer partes que possam ser relevantes na nova versão do React (React 18).

Ao seguir essa seção, percebi que algumas configurações do Prettier e do ESLint estão um pouco diferentes do que costumo usar atualmente (30/04/2022).

- Instale o Prettier:
```
npm i -D prettier eslint-plugin-prettier eslint-config-prettier
```
- Segue como está a base do meu `.eslintrc.js`:

```
module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'react-hooks'],
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

- Podem existir atualizações ou muitas outras modificações. Porém essa é a base inicial do arquivo.

- Segue como está o meu arquivo `.prettierrc.js`:

```
module.exports = {
  arrowParens: 'always',
  bracketSpacing: true,
  endOfLine: 'lf',
  htmlWhitespaceSensitivity: 'ignore',
  insertPragma: false,
  jsxSingleQuote: false,
  printWidth: 80,
  proseWrap: 'always',
  quoteProps: 'as-needed',
  requirePragma: false,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
  vueIndentScriptAndStyle: false,
  embeddedLanguageFormatting: 'off',
};
```

- Importante: se você usar a extensão do VS Code para o "Prettier", aponte o caminho do ".prettierrc.js" do projeto nas configurações da extensão. Pra isso, basta adicionar isso no settings.json do VS Code:
```
{
  "prettier.configPath": "./.prettierrc.js"
}
```
- Crie um arquivo chamado de .babelrc.json na raiz do projeto com os seguintes dados:

```
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```


- Caso queira ver um projeto ativo com React 18, React Router Dom v6, ESLint e Prettier, veja: https://github.com/luizomf/base-react-18-router-dom-v6-eslint-prettier























