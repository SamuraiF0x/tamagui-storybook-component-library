# NioWave Design

> [!NOTE]
>
> Component library for Crestron touchpads

<br>

## 🛠️ Stack

<br>

<div align="center" padding="25px">
   <img src="/public/react.svg" width="20" height="20"> React &ensp; &ensp;
   <img src="/public/typescript.svg" width="20" height="20"> TypeScript &ensp; &ensp;
   <img src="/public/vite.svg" width="20" height="20"> Vite &ensp; &ensp;
   <img src="/public/tamagui.svg" width="20" height="20"> Tamagui &ensp; &ensp;
   <img src="/public/storybook.svg" width="20" height="20"> Storybook &ensp; &ensp;
</div>

<br>
<br>

## 🍿 Components preview

<br>

<div align="center" padding="25px">
   <img src="/public/preview.png" width="100%" height="100%">
</div>

<br>

## 🚀 Installation

```bash
npm i
```

> [!IMPORTANT]
> Accept all VSCode extensions for better development experience

<br>

#### 🎬 Running storybook

```bash
npm storybook
```

<br>

#### 📝 TODO

> [!NOTE]
> ⌛ configure `peerDependencies` in `package.json` after adding package to first project

<br>

## 📖 Usage

### 🥑 Commit rule

> [!IMPORTANT]
>
> Format before each commit
>
> -   runs Prettier `npm run pretty` and ESLint `npm run lint`

```bash
npm format
```

<br>

### 🥪 NPM Scripts

-   `dev` starts a local web server with HMR for development
-   `build` builds the project, and outputs to the folder ./build
-   `preview` start a local web server that serves the built solution from ./build for previewing
-   `update: tamagui` updates all tamagui dependencies
-   `update: storybook` updates all storybook dependencies
-   `update: tamagui & storybook` updates all tamagui & storybook dependencies at the same time

<br>

#### Better comments

> [!IMPORTANT]
> When adding comments, always start with TODO so it's easily searchable
>
> -   add other markdown as displayed below in example
> -   // TODO ...
> -   // ! TODO ...

![comment options](https://github.com/aaron-bond/better-comments/blob/master/images/better-comments.PNG?raw=true)

<br>

#### Markdown Preview Enhanced → [keybindings](https://shd101wyy.github.io/markdown-preview-enhanced/#/) 🔗

> The <kbd>cmd</kbd> key for _Windows_ is <kbd>ctrl</kbd>.

| Shortcuts                                         | Functionality              |
| ------------------------------------------------- | -------------------------- |
| <kbd>cmd-k v</kbd> or <kbd>ctrl-k v</kbd>         | Open preview to the Side   |
| <kbd>cmd-shift-v</kbd> or <kbd>ctrl-shift-v</kbd> | Open preview               |
| <kbd>ctrl-shift-s</kbd>                           | Sync preview / Sync source |
| <kbd>shift-enter</kbd>                            | Run Code Chunk             |
| <kbd>ctrl-shift-enter</kbd>                       | Run all Code Chunks        |
| <kbd>cmd-=</kbd> or <kbd>cmd-shift-=</kbd>        | Preview zoom in            |
| <kbd>cmd--</kbd> or <kbd>cmd-shift-\_</kbd>       | Preview zoom out           |
| <kbd>cmd-0</kbd>                                  | Preview reset zoom         |
| <kbd>esc</kbd>                                    | Toggle sidebar TOC         |

<br>

#### Other

<details>

<summary>Expanding the ESLint configuration</summary>

### Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

-   Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

-   Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
-   Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
-   Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

</details>
