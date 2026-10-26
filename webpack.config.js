const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // JavaScript es el punto de entrada; desde ahí se carga también la hoja de estilos.
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "assets/[name].[contenthash].js",
    // Limpiamos archivos anteriores para que la carpeta final solo tenga la compilación actual.
    clean: true
  },
  module: {
    rules: [
      // Babel prepara JavaScript y Webpack incorpora los estilos a la página.
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    // Usamos el HTML de la raíz como plantilla para crear la página final.
    new HtmlWebpackPlugin({
      template: "./index.html"
    })
  ],
  devServer: {
    static: path.resolve(__dirname, "dist"),
    port: 8080,
    // Abrimos la página al iniciar y actualizamos los cambios durante el desarrollo.
    open: true,
    hot: true
  }
};
