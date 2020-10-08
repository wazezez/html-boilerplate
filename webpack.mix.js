let mix = require('laravel-mix');

mix.options({
        processCssUrls: false,
        autoprefixer: {
            enabled: true,
            options: {
                overrideBrowserslist: ['last 2 versions', '> 1%'],
                cascade: true,
                grid: true,
            }
        },
    })
    .setPublicPath('/')
    .sass('src/scss/app.scss', 'assets/css/styles.css')
    .sass('src/scss/base/_fonts.scss', 'assets/css/fonts.css')
    .js('src/js/app.js', 'assets/js/scripts.js')
    .version();

    mix.browserSync({
        proxy: 'localhost',
        files: [
            "*.htm",
            "**/*.htm",
            "**/**/*.css",
            "assets/css/*.css"
        ]
    });