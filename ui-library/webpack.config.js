const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        index: path.resolve(__dirname, './src/index.ts')
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    externals: {
        react: 'react',
        node_modules: '/node_modules',
        scss: './src/components/[name]/style/[name].scss'
    },
    module: {
        rules: [
            {
                test: /\.(?:ts|tsx)$/,
                use: ['ts-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
        ]
    }
};
