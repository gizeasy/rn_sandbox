module.exports = function(api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            [
                'react-native-platform-specific-extensions',
                { extensions: ['less', 'css', 'sass', 'scss'] },
            ],
            ['react-native-classname-to-dynamic-style'],
            [
                'module-resolver',
                {
                    root: ['./src'],
                    alias: {
                        components: './src/components',
                        utils: './src/utils',
                        containers: './src/containers',
                        less: './src/less',
                        svg: './src/svg',
                    },
                },
            ],
        ],
    };
};
