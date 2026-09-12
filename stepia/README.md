# ステピア コーポレートサイト

ステピア コーポレートサイトのソースコードです。

- 本番URL: https://stepia.jp

## 技術スタック

- [Next.js 16](https://nextjs.org/)（App Router / Turbopack）
- [React 19](https://react.dev/) / [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)（[base-ui](https://base-ui.com/) ベース）

## 必要環境

- Node.js **24 以上**（`.nvmrc` 参照。nvm / mise / Volta 等でバージョンを合わせてください）
- npm

## セットアップ

```bash
npm ci
```

## 開発

```bash
npm run dev
```

http://localhost:3005 で起動します（ポート3005固定）。

## ビルド・本番起動

```bash
npm run build
npm start
```

## Lint・型チェック

```bash
npm run check   # lint + typecheck + build をまとめて実行
```

個別に実行する場合:

```bash
npm run lint
npm run typecheck
```

## ディレクトリ構成

```
src/
  app/            # App Router エントリポイント（layout, page, globals.css）
  components/
    sections/     # トップページの各セクション（about, service, works, recruit 等）
    ui/           # shadcn/ui ベースの共通UIパーツ
  lib/            # 共通ユーティリティ
public/
  images/         # 画像・イラスト素材
  videos/         # KV動画
```

## デプロイ（Vercel）

本番は Vercel にデプロイされています。新しいVercelプロジェクトとして接続する場合は以下の手順です。

1. Vercelでこのリポジトリを Import する
2. Framework Preset は **Next.js** を選択（自動検出されます）
3. Node.js のバージョンは **24系** を指定
4. 環境変数がある場合は Vercel の Project Settings > Environment Variables に設定
5. ドメイン（stepia.jp）を Vercel プロジェクトの Domains に追加し、DNS を設定

ビルドコマンド・出力ディレクトリは Next.js のデフォルト設定のままで問題ありません。
