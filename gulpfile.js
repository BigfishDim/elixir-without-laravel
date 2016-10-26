const elixir = require('laravel-elixir');

require('laravel-elixir-vue-2');

// 'resources/assets'
elixir.config.assetsPath = 'src',

//'public'
//elixir.config.publicPath = 'dist',
elixir.config.publicPath = 'public',

elixir(mix => {
    mix.sass('app.scss')
       .webpack('app.js');
});
