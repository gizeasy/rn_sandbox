import { Dimensions, Platform } from 'react-native';
import { process } from 'react-native-css-media-query-processor';
import { s } from './styles';

export function getMatchObject() {
    const win = Dimensions.get('window');
    return {
        width: win.width,
        height: win.height,
        orientation: win.width > win.height ? 'landscape' : 'portrait',
        'aspect-ratio': win.width / win.height,
        type: 'screen',
    };
}

export function useMediaQueries(style) {
    return process(style, getMatchObject());
}

export function sm(b, e) {
    return function(styleSheet) {
        const key = `${b}_${e}`;
        const { orientation } = getMatchObject();
        const c = cache(key);
        if (c) {
            console.warn(c);
        }
        cache(key, { orientation });
        return s(b, e)(useMediaQueries(styleSheet));
    };
}

export const isIos = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';
