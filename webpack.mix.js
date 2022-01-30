const mix = require('laravel-mix');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

mix
  .webpackConfig({
    plugins: [
      new CleanWebpackPlugin({
        cleanAfterEveryBuildPatterns: ['dist'],
      }),
      new ESLintPlugin({
        fix: true,
      }),
    ],
  });

mix
  .options({
    processCssUrls: false,
  });

mix
  .js('src/ui/js/app.js', 'js')
  .ts('src/game/scripts/game.ts', 'js')
  .sass('src/ui/styles/app.scss', 'css')
  .sourceMaps()
  // .copyDirectory('src/ui/fonts', 'dist/fonts')
  .copyDirectory('src/ui/img', 'dist/img')
  .copyDirectory('src/game/assets/sprites', 'dist/img/sprites')
  .copyDirectory('src/game/assets/sounds', 'dist/sounds')
  .copyDirectory('src/ui/*.html', 'dist')
  .setPublicPath('dist');

mix
  .browserSync({
    watch: true,
    ghostMode: false,
    notify: false,
    server: './dist',
  });
