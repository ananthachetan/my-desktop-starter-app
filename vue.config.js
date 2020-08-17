const path = require("path");

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    assetsDir: "static",
    lintOnSave: process.env.NODE_ENV !== "production",
    transpileDependencies: ["vuetify"],
    configureWebpack: {
        resolve: {
            extensions: [".js", ".vue", ".json"],
            alias: {
                vue$: "vue/dist/vue.esm.js",
                assets: resolve("src/assets"),
            },
        },
        performance: {
            hints: false,
            maxEntrypointSize: 1024000,
            maxAssetSize: 1024000,
        },
    },
    css: {
        sourceMap: true,
    },
    pluginOptions: {
        electronBuilder: {
            builderOptions: {
                productName: "My Desktop Starter App",
                // options placed here will be merged with default configuration and passed to electron-builder
            },
        },
    },
};
