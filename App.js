import './App.less';
import React, { useContext } from 'react';
// import { AppContainer } from './src/containers/AppContainer/AppContainer';
import { TouchableOpacity, Text } from 'react-native';
import { MediaQueries } from './src/containers/MediaQueries/MediaQueries';
// import { OrientationChangeProvider } from 'react-native-orientation-change-provider';

import { GlobalThemeProvider } from 'containers/GlobalThemeProvider/GlobalThemeProvider';
import { DimensionsProvider } from 'containers/DimensionsProvider/DimensionsProvider';

export default function App() {
    return (
        <GlobalThemeProvider>
            <DimensionsProvider>
                <MediaQueries />
            </DimensionsProvider>
        </GlobalThemeProvider>
    );
}
