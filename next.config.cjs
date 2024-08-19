const createMDX = require("@next/mdx");

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
  // その他の設定があればここに追加
};

const withMDX = createMDX({
  extension: /\.mdx?$/, // .mdx または .md ファイルをサポート
});

module.exports = withMDX(nextConfig);
