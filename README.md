# pet-cherish-frontend

此為寵樂的前端服務。使用 Next.js 和 TypeScript 構建。本專案集成了多種 React 套件和工具，以提供最佳的開發體驗和高效的程式碼管理。

### 前置準備

- Node.js（版本 18.7 以上）
- npm（版本 6.x 以上）

### 安裝

```bash
npm install
```

### 開發

```bash
npm run dev
```

### 語法檢查和格式化

本專案使用 ESLint 進行語法檢查，使用 Prettier 進行程式碼格式化。確保程式碼符合專案的規則，執行以下指令：

```bash
npm run lint
npm run format
```

### Husky 和 Lint-Staged

Husky 用於管理 Git hooks，lint-staged 用於在暫存文件上運行 linters。要設置 Husky，執行：

```bash
npm run prepare
```

### 專案技術

- [React](https://reactjs.org/)
- [Next App Router](https://nextjs.org/)
- [Nookies](https://github.com/maticzav/nookies)
- [React Hook Form](https://react-hook-form.com/)
- [Shadcn UI](https://ui.shadcn.com/)
- [Sweetalert2](https://sweetalert2.github.io)
- [Zod](https://zod.dev/)
- [Zustand](https://github.com/pmndrs/zustand)

### 開發技術

- [ESLint](https://eslint.org/)

- [Husky](https://github.com/typicode/husky)
- [lint-staged](https://github.com/okonet/lint-staged)
- [Prettier](https://prettier.io/)
- [prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)
- [Tailwindcss](https://tailwindcss.com/)
- [Typescript](https://www.typescriptlang.org/)

### 專案結構

```bash
src/
├── actions/           # Next.js server action
├── app/               # Next.js 頁面
├── components/        # React 元件
├── const/             # 常數
├── hooks/             # 客製化 hooks
├── lib/               # 工具函式
├── schemas/           # 資料型別定義
├── styles/            # 全局樣式
└── types/             # 資料型別定義
```
