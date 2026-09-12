# 株式会社博多テクノ 採用サイト

本番URL: https://hakata-techno.tech

## 技術スタック

- Next.js
- React
- TypeScript
- Tailwind CSS

動作確認済みの実行環境:

- Node.js v24〜25系
- パッケージマネージャは **pnpm**（v11系で動作確認済み）

## セットアップ

```bash
pnpm install --frozen-lockfile
pnpm dev
```

`http://localhost:3000` で確認できます。

## ビルド

```bash
pnpm build
```

## ページ構成

- `/` トップページ
- `/company` 会社概要
- `/profile` プロフィール
- `/recruit` 採用情報

## デプロイ

Vercel にプロジェクトを接続し、以下の設定でデプロイします。

- フレームワークプリセット: Next.js
- ビルドコマンド: `pnpm build`（既定のまま）
- インストールコマンド: `pnpm install --frozen-lockfile`（既定のまま）

## 保守上の注意

各ページのCSSクラス名はスタイル定義のセレクタと対応しているため、安易に変更しないでください。
