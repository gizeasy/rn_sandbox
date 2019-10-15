module.exports = {
    parser: 'sugarss',
    map: false,
    plugins: [
        require('postcss-css-variables')({
            variables: {
                '--some-var': '#ff6100',
                '--other-var': {
                    value: '#00ff00',
                },
                '--important-var': {
                    value: '#ff0000',
                    isImportant: true,
                },
            },
        }),
    ],
};
