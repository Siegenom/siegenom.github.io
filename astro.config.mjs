// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // あなたのGitHub PagesのトップURLを正確に設定します
  // user.github.io の形式なので、末尾のスラッシュは不要です。
  site: 'https://siegenom.github.io', 
  
  // 統合（インテグレーション）は既存のものをそのまま使います
  integrations: [mdx(), sitemap()],

  // ★重要: GitHub Pagesのユーザーサイト (user.github.io) は、
  //   ベースパスが '/' になります。これはデフォルトなので明示不要ですが、
  //   もしプロジェクトサイト (user.github.io/repo-name/) の場合は
  //   base: '/repo-name/', のように設定が必要です。
  //   今回はユーザーサイトなので、baseは設定不要か、あえて書くなら base: '/' でOKです。
  //   デフォルトが '/' なので、ここでは明示的に書きません。

  // 出力先を静的ファイルに設定 (デフォルトですが明示しても良い)
  // GitHub Pagesへのデプロイでは output: 'static' が基本です
  output: 'static', 

  // ビルド出力ディレクトリ (デフォルト: dist)
  // GitHub Actionsのpeaceiris/actions-gh-pages@v3を使う場合は、publish_dir: ./dist と合わせる
  outDir: './dist',
});