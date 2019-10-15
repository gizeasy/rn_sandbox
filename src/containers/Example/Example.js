import React from 'react';
import { StyleSheet, Text as RnText, View } from 'react-native';
import { s } from 'bem-react-native';

const textStyle = StyleSheet.create({
    Text: {
        textTransform: 'none',
    },
    Text_size_s: {
        fontSize: 13,
    },
    Text_size_m: {
        fontSize: 15,
    },
    Text_size_l: {
        fontSize: 18,
    },
    Text_weight_regular: {
        fontWeight: '400',
    },
    Text_weight_medium: {
        fontWeight: '500',
    },
    Text_weight_bold: {
        fontWeight: '600',
    },
    Text_uppercase: {
        textTransform: 'uppercase',
    },
    Text_lowercase: {
        textTransform: 'lowercase',
    },
    Text_align_center: {
        textAlign: 'center',
    },
    Text_align_right: {
        textAlign: 'right',
    },
    Text_align_left: {
        textAlign: 'left',
    },
});

const exampleStyle = StyleSheet.create({
    Example: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    'Example-Text': {
        marginBottom: 20,
        padding: 20,
        color: '#cb0606',
    },
    'Example-Text_globalTheme_light': {
        //..//
    },
    'Example-Text_globalTheme_dark': {
        //..//
    },
    'Example-Text_actionAccent_danger': {
        //..//
    },
    'Example-Text_actionAccent_info': {
        //..//
    },
    'Example-Text_globalTheme-accent_light-danger': {
        //..//
    },
    'Example-Text_globalTheme-accent_light-info': {
        //..//
    },
    'Example-Text_globalTheme-accent_dark-danger': {
        //..//
    },
    'Example-Text_globalTheme-accent_dark-info': {
        //..//
    },
});

const sText = s('Text')(textStyle);

const Text = ({ children, style, size, weight, uppercase, lowercase, align, ...props }) => {
    return (
        <RnText style={sText({ size, weight, uppercase, lowercase, align }, style)} {...props}>
            {children}
        </RnText>
    );
};

const sExample = s('Example')(exampleStyle);

export const Example = ({ style, globalTheme, accent }) => {
    // style = style, globalTheme = 'light', actionAccent = danger
    return (
        <View style={sExample(null, style)}>
            <Text
                style={sExample('Text', {
                    globalTheme,
                    actionAccent,
                    'globalTheme-accent': [globalTheme, accent],
                })}
                size="l"
                weight="medium"
                align="center"
                uppercase
            >
                I love bem!
            </Text>
            {
                // finalStyle = [
                //     textStyle['Text'],
                //     textStyle['Text_size_l'],
                //     textStyle['Text_weight_medium'],
                //     textStyle['Text_uppercase'],
                //     exampleStyle['Example-Text'],
                //     exampleStyle['Example-Text_globalTheme_light'],
                //     exampleStyle['Example-Text_accent_danger'],
                //     exampleStyle['Example-Text_globalTheme-accent_light-danger']
                // ];
            }
        </View>
    );
};
