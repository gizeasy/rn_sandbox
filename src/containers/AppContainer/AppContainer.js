import styleSheet from './AppContainer.less';
import React, { Component, useState } from 'react';
import { View, TouchableOpacity } from 'react-native';

import { Text } from 'components/Text/Text';
import { s } from 'utils/styles';
import { getMatchObject, sm, useMediaQueries } from 'utils/common';
import style from '../MediaQueries/MediaQueries.less';
// import Play from 'svg/Play.svg';

const sApp = s('AppContainer')(styleSheet);
const sAppText = s('AppContainer', 'Text')(styleSheet);
const sAppIcon = s('AppContainer', 'Icon')(styleSheet);

const countIterations = 5;

export const AppContainer = () => {
    const [test, setTest] = useState('stop');
    const [result, setResult] = useState(null);

    const handleStart = () => {
        setTest('run');
    };

    function renderComponets() {
        const arr = [];
        const t0 = Date.now();
        for (let i = 0, len = countIterations; i < len; i++) {
            // arr.push(sm('MediaQueries')(useMediaQueries(styleSheet)));
            // arr.push(
            //     <Text
            //         key={i}
            //         size="5xl"
            //         weight="medium"
            //         theme="invert"
            //         // style={[
            //         //     styleSheet['sAppText'],
            //         //     test === 'run' && styleSheet['sAppText_test_run'],
            //         //     test === 'run' && styleSheet['sAppText_test_run'],
            //         //     test === 'run' && styleSheet['sAppText_test_run'],
            //         //     styleSheet['sAppText_mod'],
            //         //     styleSheet['sAppText_mod'],
            //         //     styleSheet['sAppText_mod'],
            //         //     styleSheet['sAppText_mod'],
            //         //     styleSheet['sAppText_mod'],
            //         //     styleSheet['sAppText_mod'],
            //         //     styleSheet['sAppText_mod'],
            //         //     styleSheet['sAppText_mod'],
            //         //     styleSheet['sAppText_mod'],
            //         //     styleSheet['sAppText_mod'],
            //         //     styleSheet['sAppText_mod'],
            //         //     styleSheet['sAppText_mod'],
            //         //     styleSheet['sAppText_mod'],
            //         //     styleSheet['sAppText_mod'],
            //         //     styleSheet['sAppText_mod'],
            //         //     styleSheet['sAppText_mod'],
            //         // ]}
            //         style={sAppText({
            //             test,
            //             mod: true,
            //             mod2: 'abc',
            //             mod3: '123',
            //             mod4: ['qwe', 'rty'],
            //         })}
            //     >
            //         123
            //     </Text>
            // );
            // arr.push(
            //     sAppText(null, [
            //         styleSheet['AppContainer-AppText_mod'],
            //         styleSheet['AppContainer-AppText_mod'],
            //         styleSheet['AppContainer-AppText_mod'],
            //         styleSheet['AppContainer-AppText_mod'],
            //         styleSheet['AppContainer-AppText_mod'],
            //         styleSheet['AppContainer-AppText_mod'],
            //         styleSheet['AppContainer-AppText_mod'],
            //         styleSheet['AppContainer-AppText_mod'],
            //         styleSheet['AppContainer-AppText_mod'],
            //         styleSheet['AppContainer-AppText_mod'],
            //         styleSheet['AppContainer-AppText_mod'],
            //         styleSheet['AppContainer-AppText_mod'],
            //     ])
            // );
        }
        const t1 = Date.now();
        console.log('Took', t1 - t0, 'milliseconds');
        setTest('final');
        setResult(`Took ${t1 - t0} milliseconds`);

        return null;
    }

    const isRun = test === 'run';

    return (
        <View style={sApp({ test })}>
            {!isRun && (
                <Text size="5xl" style={sAppText({ test })}>
                    {result ? result : 'Bem stress test'}
                </Text>
            )}
            {isRun && renderComponets()}
            {!isRun && (
                <TouchableOpacity onPress={handleStart}>
                    <Text size="5xl" style={sAppText({ test })}>
                        dd
                    </Text>
                </TouchableOpacity>
            )}
        </View>
    );
};
