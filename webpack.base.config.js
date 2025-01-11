import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: path.join(__dirname, 'src', 'main.tsx'), // 入力ファイルのエントリーポイント
  output: {
    filename: 'bundle.js', // 出力ファイル名
    path: path.join(__dirname, 'dist'), //　出力ファイルのパス
    chunkFormat: 'module',
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx", ".json"],
  },
  target: ["node", "es6"],
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          { loader: 'css-loader' },
        ],
      },
      {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          loader: 'ts-loader',
      },
    ]
  },
  optimization: { minimize: false },
};