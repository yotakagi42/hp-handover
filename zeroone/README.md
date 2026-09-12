# Zeroone コーポレートサイト

株式会社ゼロワンのコーポレートサイトです。

- 本番URL: https://hr-zeroone.com

## 技術スタック

- Vite + React 19 + TypeScript
- Tailwind CSS
- Three.js / React Three Fiber（@react-three/fiber, @react-three/drei, @react-three/postprocessing）
- Framer Motion
- React Router

## セットアップ

Node.js 20 以上が必要です（`.nvmrc` は 22 を指定。Node 22 / 25 でビルド確認済み）。

```bash
npm install
npm run dev      # http://localhost:3006 で起動
npm run build    # 本番ビルド（dist/ に出力）
npm run preview  # ビルド結果をローカルでプレビュー
```

## ディレクトリ構成

```
src/
  components/  # 共通UIコンポーネント
  pages/       # ページ単位のコンポーネント
  assets/      # 画像・アイコンなどの静的アセット
public/
  illust/      # イラスト素材（ライセンスは下記参照）
```

## デプロイ

Vercel への接続を前提としています。

1. Vercel でリポジトリを新規プロジェクトとしてインポート
2. フレームワークプリセットは `Vite` を選択
3. ビルドコマンド・出力ディレクトリはデフォルト（`npm run build` / `dist`）のままで問題ありません
4. `vercel.json` に SPA 用のリライト設定（すべてのパスを `index.html` に振る）が含まれているため、React Router によるクライアントサイドルーティングがそのまま動作します

## ライセンス表記

`public/illust/` 配下のイラストは [unDraw](https://undraw.co/) のフリーイラストです。商用利用可・帰属表示不要のライセンスで提供されています。
