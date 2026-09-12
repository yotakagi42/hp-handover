# 株式会社東海システム コーポレートサイト

株式会社東海システムのコーポレートサイトです。

## 技術スタック

- [Next.js](https://nextjs.org/) 16 (App Router / Turbopack)
- React 19 / TypeScript
- Tailwind CSS 4
- framer-motion

## 動作環境

- Node.js v20 以上（v22系推奨。`.nvmrc` を同梱）
- パッケージマネージャは **pnpm** を使用してください（npm / yarn は不可）

## セットアップ

```bash
pnpm install --frozen-lockfile
```

## 開発

```bash
pnpm dev
```

http://localhost:3000 で確認できます。

## ビルド

```bash
pnpm build
```

## ページ構成

| パス | 内容 |
| --- | --- |
| `/` | トップページ |
| `/company` | 会社概要 |
| `/recruit` | 採用情報 |

## デプロイ（Vercel）

1. [Vercel](https://vercel.com/) で本リポジトリを接続し、新規プロジェクトを作成する
2. フレームワークプリセットは **Next.js** を選択（自動検出されます）
3. ビルドコマンド・出力設定はデフォルトのままで問題ありません
4. デプロイ後、必要に応じて独自ドメインをプロジェクト設定から追加してください
