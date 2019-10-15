import React, { useState, createContext, useContext, Component, useEffect } from 'react';
import { process } from 'react-native-css-media-query-processor';
import { getMatchObject } from 'utils/common';
import { Dimensions } from 'react-native';

export const DimensionsContext = createContext({});

export function DimensionsProvider(props) {
    const math = getMatchObject();
    const [dimensions, setDimensions] = useState(math);

    useEffect(() => {
        function dimensions() {
            setDimensions(getMatchObject());
        }

        Dimensions.addEventListener('change', dimensions);

        return function cleanup() {
            Dimensions.removeEventListener('change', dimensions);
        };
    });

    return (
        <DimensionsContext.Provider value={{ dimensions }}>
            {props.children}
        </DimensionsContext.Provider>
    );
}

export function useDimensions() {
    return useContext(DimensionsContext);
}

export function widthDimensionsHOC(WrapperComponent) {
    return function widthMediaQueryProvider(props) {
        const { dimensions } = useDimensions();
        return <WrapperComponent dimensions={dimensions} {...props} />;
    };
}

export function widthMediaQueryHOC(styleSheet) {
    return function widthWrapperComponent(WrapperComponent) {
        class StyleSheetConverter extends Component {
            constructor(props) {
                super(props);
                this.styleSheet = process(styleSheet, props.dimensions);
            }

            shouldComponentUpdate(nextProps, nextState, nextContext) {
                if (
                    nextProps.dimensions.orientation !== this.props.dimensions.orientation ||
                    nextProps.dimensions.width !== this.props.dimensions.width ||
                    nextProps.dimensions.height !== this.props.dimensions.height ||
                    nextProps.dimensions.type !== this.props.dimensions.type
                ) {
                    this.styleSheet = process(styleSheet, nextProps.dimensions);
                }
                return true;
            }

            render() {
                return <WrapperComponent {...this.props} styleSheet={this.styleSheet} />;
            }
        }
        return widthDimensionsHOC(StyleSheetConverter);
    };
}
