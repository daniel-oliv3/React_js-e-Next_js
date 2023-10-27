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
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "react/react-in-jsx-scope": "off",
  },
};
```

- Criar o arquivo `.prettierrc.js` na raiz do projeto

- `.prettierrc.js`

```js
module.exports = {
  semi: true,
  trailingComma: "all",
  singleQuote: true,
  printWidth: 120,
  tabWidth: 2,
};
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

- Exemplo:
  - react_js-45

### 46 - useState - React Hook (Parte 1)

**VSCode**

- Editor vscode, aba:  file/preferences/Settings

**Keybindings.json**

- keybindings.json

```json
// Place your key bindings in this file to override the defaultsauto[]
[
  {
    "key": "ctrl+shift+alt+=",
    "command": "editor.action.fontZoomIn"
  },
  {
    "key": "ctrl+shift+alt+-",
    "command": "editor.action.fontZoomOut"
  },
  {
    "key": "ctrl+shift+alt+0",
    "command": "editor.action.fontZoomReset"
  },
  {
    "key": "ctrl+alt+d",
    "command": "editor.action.copyLinesDownAction",
    "when": "editorTextFocus && !editorReadonly"
  },
  {
    "key": "ctrl+shift+alt+down",
    "command": "-editor.action.copyLinesDownAction",
    "when": "editorTextFocus && !editorReadonly"
  },
  {
    "key": "ctrl+alt+s",
    "command": "editor.action.copyLinesUpAction",
    "when": "editorTextFocus && !editorReadonly"
  },
  {
    "key": "ctrl+shift+alt+up",
    "command": "-editor.action.copyLinesUpAction",
    "when": "editorTextFocus && !editorReadonly"
  },
  {
    "key": "ctrl+numpad_divide",
    "command": "editor.action.commentLine",
    "when": "editorTextFocus && !editorReadonly"
  },
  {
    "key": "ctrl+/",
    "command": "-editor.action.commentLine",
    "when": "editorTextFocus && !editorReadonly"
  },
  {
    "key": "ctrl+shift+alt+k",
    "command": "code-runner.runCustomCommand"
  },
  {
    "key": "ctrl+alt+k",
    "command": "-code-runner.runCustomCommand"
  },
  {
    "key": "ctrl+shift+alt+s",
    "command": "workbench.action.files.saveAll"
  },
  {
    "key": "ctrl+'",
    "command": "workbench.action.terminal.toggleTerminal"
  },
  {
    "key": "ctrl+shift+[BracketLeft]",
    "command": "-workbench.action.terminal.toggleTerminal"
  },
  {
    "key": "ctrl+alt+b",
    "command": "workbench.action.terminal.kill"
  },
  {
    "key": "ctrl+escape",
    "command": "workbench.action.toggleActivityBarVisibility"
  },
  {
    "key": "shift+alt+l",
    "command": "editor.action.transformToLowercase"
  },
  {
    "key": "shift+alt+s",
    "command": "editor.action.transformToSnakecase"
  },
  {
    "key": "shift+alt+t",
    "command": "editor.action.transformToTitlecase"
  },
  {
    "key": "shift+alt+u",
    "command": "editor.action.transformToUppercase"
  }
]
```

**Settings.json**

- settings.json

```json
{
  // Workbench
  "workbench.startupEditor": "newUntitledFile",
  "workbench.editor.labelFormat": "short",
  "workbench.iconTheme": "material-icon-theme",
  "workbench.editor.enablePreview": false,
  "workbench.sideBar.location": "left",
  "window.menuBarVisibility": "toggle",
  "workbench.list.smoothScrolling": true,
  // "workbench.colorTheme": "OM Theme (Night Owl Italic)",
  "workbench.colorTheme": "Omni",
  "workbench.editorAssociations": [
    {
      "viewType": "jupyter.notebook.ipynb",
      "filenamePattern": "*.ipynb"
    }
  ],

  // Explorer
  "explorer.compactFolders": false,
  "explorer.confirmDelete": true,

  // Editor and breadcrumbs
  "breadcrumbs.enabled": true,
  "editor.renderControlCharacters": false,
  "editor.tabSize": 2,
  "editor.renderLineHighlight": "gutter",
  "editor.rulers": [79, 120],
  "editor.minimap.enabled": false,
  "editor.fontSize": 20,
  "editor.detectIndentation": true,
  "editor.snippetSuggestions": "top",
  "editor.wordBasedSuggestions": false,
  "editor.suggest.localityBonus": true,
  "editor.acceptSuggestionOnCommitCharacter": false,
  "editor.formatOnPaste": false,
  "editor.cursorSmoothCaretAnimation": true,
  "editor.mouseWheelScrollSensitivity": 2,
  "editor.smoothScrolling": true,
  "editor.mouseWheelZoom": true,
  "editor.linkedEditing": true,
  "editor.fontFamily": "'Operator Mono Lig Book', 'SF Mono', Consolas, 'Source Code Pro', 'Dank Mono', 'Fira Code', Menlo, 'Inconsolata', 'Droid Sans Mono', 'DejaVu Sans Mono', 'Ubuntu Mono', 'Courier New', Courier, Monaco, monospace",
  "editor.glyphMargin": false,
  "editor.fontLigatures": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.fixAll": true
  },
  "editor.suggestSelection": "first",

  // Git
  "git.enableSmartCommit": true,
  "diffEditor.ignoreTrimWhitespace": true,

  // Debug
  "debug.console.fontSize": 18,

  // Files and search
  "files.defaultLanguage": "{activeEditorLanguage}",
  "files.exclude": {
    "USE_GITIGNORE": true
  },
  "search.exclude": {
    "**/node_modules": true,
    "**/bower_components": true,
    "**/coverage": true,
    "**/dist": true,
    "**/build": true,
    "**/.build": true,
    "**/.gh-pages": true
  },

  // Terminal
  "terminal.integrated.copyOnSelection": false,
  "terminal.integrated.cursorBlinking": true,
  "terminal.integrated.cursorStyle": "line",
  "terminal.integrated.shell.linux": "zsh",
  "terminal.external.linuxExec": "x-terminal-emulator",
  "terminal.integrated.fontFamily": "'Operator Mono Lig Book', 'Fira Code', 'SF Mono', Consolas, 'Source Code Pro', 'Dank Mono', Menlo, 'Inconsolata', 'Droid Sans Mono', 'DejaVu Sans Mono', 'Ubuntu Mono', 'Courier New', Courier, Monaco, monospace",
  "terminal.integrated.fontSize": 18,
  "terminal.integrated.drawBoldTextInBrightColors": false,
  "terminal.integrated.enableFileLinks": false,
  "terminal.integrated.env.linux": {
    // "PORT": "4000"
  },

  // Javascript & TypeScript
  "javascript.preferences.quoteStyle": "single",
  "typescript.preferences.quoteStyle": "single",
  "javascript.validate.enable": false,
  "javascript.updateImportsOnFileMove.enabled": "always",
  "typescript.updateImportsOnFileMove.enabled": "always",
  "javascript.suggest.autoImports": true,
  "typescript.suggest.autoImports": true,
  "[javascript]": {
    "editor.suggestSelection": "recentlyUsed",
    "editor.suggest.showKeywords": false
  },

  // Python
  "[python]": {
    "editor.defaultFormatter": "ms-python.python",
    "editor.tabSize": 4,
    "editor.insertSpaces": true,
    "editor.formatOnSave": true,
    "editor.formatOnType": true
  },
  "python.formatting.autopep8Args": [
    "--indent-size=4"
    // "--ignore=E111",
  ],
  "python.linting.flake8Args": [
    // "--ignore=E111",
  ],
  "python.linting.pylintArgs": [
    "--load-plugins=pylint_django",
    "--errors-only"
  ],
  "python.pythonPath": "/bin/python3.8",
  "python.linting.flake8Enabled": true,
  "python.linting.mypyEnabled": true,
  "python.testing.unittestEnabled": true,

  // Django
  "files.associations": {
    "*.html": "html",
    "**/templates/*.html": "django-html",
    "**/templates/*": "django-txt",
    "**/requirements{/**,*}.{txt,in}": "pip-requirements"
  },

  // Emmet
  "emmet.syntaxProfiles": {
    "javascript": "jsx"
  },
  "emmet.includeLanguages": {
    "django-html": "html",
    "javascript": "javascriptreact",
    "typescript": "typescriptreact"
  },

  // ##################### Extensions ##################### //

  // Bracket pair colorizer
  "bracket-pair-colorizer-2.colors": [
    "#8BE9FD",
    "#50FA7B",
    "#FFB86C",
    "#FF79C6",
    "#BD93F9",
    "#F1FA8C"
  ],
  "bracket-pair-colorizer-2.colorMode": "Consecutive",
  "bracket-pair-colorizer-2.forceUniqueOpeningColor": false,
  "bracket-pair-colorizer-2.forceIterationColorCycle": false,
  "bracket-pair-colorizer-2.showBracketsInGutter": true,
  "bracket-pair-colorizer-2.showBracketsInRuler": true,
  "bracket-pair-colorizer-2.showVerticalScopeLine": false,
  "bracket-pair-colorizer-2.showHorizontalScopeLine": false,
  "bracket-pair-colorizer-2.unmatchedScopeColor": "#FF5555",

  // Code runner
  "code-runner.clearPreviousOutput": true,
  "code-runner.ignoreSelection": true,
  "code-runner.saveFileBeforeRun": true,
  "code-runner.runInTerminal": true,
  "code-runner.preserveFocus": false,
  "code-runner.executorMap": {
    "python": "python3 -u",
    "typescript": "npx ts-node --files --transpile-only"
  },

  // Material icon theme extension
  "material-icon-theme.hidesExplorerArrows": true,
  "material-icon-theme.folders.theme": "classic",
  "material-icon-theme.folders.color": "#6273a6",

  // Colorize (in big files you may want to disable this)
  "colorize.hide_current_line_decorations": false,
  "colorize.include": [".tsx", ".jsx", ".ts", ".js"],
  "colorize.languages": [
    "typescriptreact",
    "javascriptreact",
    "javascript",
    "typescript",
    "css",
    "sass",
    "scss",
    "less",
    "pcss",
    "sss",
    "stylus",
    "xml",
    "svg",
    "json",
    "jsonc",
    "yaml"
  ],
  "colorize.colorized_colors": [
    // "BROWSERS_COLORS", // this is reaaally annoying
    "HEXA",
    "RGB",
    "HSL"
  ],
  "colorize.enable_search_variables": false,

  // CSpell checker extension
  "cSpell.enabled": true,
  "cSpell.language": "en,pt,pt_BR",
  "cSpell.enableFiletypes": ["shellscript"],
  "cSpell.customUserDictionaries": [
    {
      "name": "Custom",
      "description": "Custom CSpell Dict",
      "path": "~/Development/custom-cspell-dictionary.txt",
      "addWords": false
    }
  ],

  // XML Language Support by Red Hat
  "redhat.telemetry.enabled": true,

  // VsCode Action Buttons
  "actionButtons": {
    "defaultColor": "#8be9fd", // Can also use string color names.
    "loadNpmCommands": false, // Disables automatic generation of actions for npm commands.
    "reloadButton": "🗘", // Custom reload button text or icon (default ↻). null value enables automatic reload on configuration change
    "commands": [
      {
        "cwd": "./", // Terminal initial folder ${workspaceFolder} and os user home as defaults
        "name": "Open dictionary",
        "color": "#8be9fd",
        "singleInstance": true,
        "command": "code -r ~/Development/custom-cspell-dictionary.txt; exit" // This is executed in the terminal.
      }
    ]
  }
}
```

- no-unused-vars
  - .eslintrc.js


- Documentação:

  - Link: https://pt-br.legacy.reactjs.org/docs/hooks-state.html

- Exemplo:
  - react_js-46





### 47 - useState - React Hook (Parte 2)

- Settings.json Sapup3
```json
{
  "editor.suggestSelection": "first",
  "vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue",
  "files.autoSave": "afterDelay",
  "explorer.confirmDelete": false,
  "files.exclude": {
    "**/.classpath": true,
    "**/.project": true,
    "**/.settings": true,
    "**/.factorypath": true
  },
  "workbench.iconTheme": "material-icon-theme",
  "terminal.integrated.defaultProfile.windows": "Git Bash",
  "workbench.colorTheme": "Omni",
  "explorer.compactFolders": false,
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "php.suggest.basic": false,
  "php.validate.enable": false,
  "emmet.excludeLanguages": ["markdown", "php"],
  "security.workspace.trust.untrustedFiles": "open",
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "files.associations": {
    "*.css": "css"
  },
  "editor.fontSize": 25,
  "[css]": {
    "editor.defaultFormatter": "aeschli.vscode-css-formatter"
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[php]": {
    "editor.defaultFormatter": "Sophisticode.php-formatter"
  },
  "editor.accessibilitySupport": "off",
  "[python]": {
    "editor.formatOnType": true
  },
  "css.lint.unknownAtRules": "ignore",
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "aws.suppressPrompts": {
    "codeWhispererNewWelcomeMessage": true
  },
  "window.zoomLevel": -1
}
```

- Exemplo:
  - react_js-47


### 48 - useEffect - React Hook

**Optional Chaining no JavaScript**

- Link: https://medium.com/@guigaoliveira_/entendendo-o-optional-chaining-no-javascript-964ca6928598

- Exemplo:
  - react_js-48


### 49 - Regras dos Hooks

**Regras dos Hooks**

- Link: https://pt-br.legacy.reactjs.org/docs/hooks-rules.html

- Exemplo:
  - react_js-49









