import styleSheet from './MediaQueries.less';
import React from 'react';
import { Text, View, Button } from 'react-native';
import { useTheme, GLOBAL_THEMES } from 'containers/GlobalThemeProvider/GlobalThemeProvider';
import { widthMediaQueryHOC } from 'containers/DimensionsProvider/DimensionsProvider';

export const MediaQueriesPresenter = ({ styleSheet, dimensions }) => {
    const { globalTheme, setGlobalTheme, s } = useTheme();
    const toggleTheme = () =>
        setGlobalTheme(
            globalTheme === GLOBAL_THEMES.LIGHT ? GLOBAL_THEMES.DARK : GLOBAL_THEMES.LIGHT
        );

    const sMediaQueries = s('MediaQueries')(styleSheet);

    return (
        <View style={sMediaQueries()}>
            <View style={sMediaQueries('Row')}>
                <View style={sMediaQueries('Col')}>
                    <Text style={sMediaQueries('Text')}>{dimensions.orientation}</Text>
                </View>
                <View style={sMediaQueries('Col', { col: 'body' })}>
                    <View style={sMediaQueries('Row')}>
                        <View style={sMediaQueries('Col', { col: 'box' })}>
                            <View style={sMediaQueries('Box')} />
                        </View>
                        <View style={sMediaQueries('Col', { col: 'button' })}>
                            <Button
                                onPress={toggleTheme}
                                style={sMediaQueries('Button')}
                                title="portrait-block"
                            />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

export const MediaQueries = widthMediaQueryHOC(styleSheet)(MediaQueriesPresenter);
