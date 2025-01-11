import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  extends: 'webpack.base.config.js',
  mode: 'development',
  devServer: {
    liveReload: true,
    port: 9000,
    static: { directory: path.join(__dirname, 'public') },
  },
  watch: true,
  watchOptions: { poll: 5000, ignored: /node_modules/ },
  devtool: 'inline-source-map',
};