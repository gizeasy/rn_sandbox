// For React Native version 0.59 or later
var upstreamTransformer = require('metro-react-native-babel-transformer');
var lessTransformer = require('react-native-less-transformer');
var svgTransformer = require('react-native-svg-transformer');
var postCSSTransformer = require('react-native-postcss-transformer');

module.exports.transform = function({ src, filename, options }) {
    switch (true) {
        case filename.endsWith('.less'): {
            return lessTransformer
                .renderToCSS({ src, filename, options })
                .then((css) => postCSSTransformer.transform({ src: css, filename, options }));
        }
        case filename.endsWith('.svg'): {
            return svgTransformer.transform({ src, filename, options });
        }
        default: {
            return upstreamTransformer.transform({ src, filename, options });
        }
    }
};
