import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  extends: path.join(__dirname, 'webpack.base.config.js'),
  mode: 'production',
};