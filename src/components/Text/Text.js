import styleSheet from './Text.less';
import React from 'react';
import { Text as RnText } from 'react-native';
import PropTypes from 'prop-types';
import { s } from 'utils/styles';
const sText = s('Text')(styleSheet);

export const Text = ({
    tag,
    children,
    style,
    size,
    weight,
    theme,
    oneLine,
    uppercase,
    ...props
}) => {
    const Tag = tag || RnText;

    return (
        <Tag
            // style={[
            //     styleSheet['Text'],
            //     size === 'xs' && styleSheet['Text_size_xs'],
            //     size === 's' && styleSheet['Text_size_s'],
            //     size === 'm' && styleSheet['Text_size_m'],
            //     size === 'l' && styleSheet['Text_size_l'],
            //     size === 'xl' && styleSheet['Text_size_xl'],
            //     size === '2xl' && styleSheet['Text_size_2xs'],
            //     size === '3xl' && styleSheet['Text_size_3xs'],
            //     size === '4xl' && styleSheet['Text_size_4xs'],
            //     size === '5xl' && styleSheet['Text_size_5xs'],
            //     weight === 'medium' && styleSheet['Text_weight_medium'],
            //     weight === 'regular' && styleSheet['Text_weight_regular'],
            //     weight === 'bold' && styleSheet['Text_weight_bold'],
            //     theme === 'invert' && styleSheet['Text_weight_invert'],
            //     theme === 'text' && styleSheet['Text_weight_text'],
            //     theme === 'second' && styleSheet['Text_weight_second'],
            //     theme === 'third' && styleSheet['Text_weight_third'],
            //     theme === 'danger' && styleSheet['Text_weight_danger'],
            //     theme === 'link' && styleSheet['Text_weight_link'],
            //     oneLine && styleSheet['Text_oneLine'],
            //     uppercase && styleSheet['Text_uppercase'],
            //     ...style,
            // ]}
            style={sText({ style, size, weight, theme, oneLine, uppercase }, style)}
            {...props}
        >
            {children}
        </Tag>
    );
};

Text.propTypes = {
    tag: PropTypes.node,
    children: PropTypes.node,
    size: PropTypes.oneOf(['xs', 's', 'm', 'l', 'xl', '2xl', '3xl', '4xl', '5xl']),
    weight: PropTypes.oneOf(['medium', 'regular', 'bold']),
    theme: PropTypes.oneOf(['invert', 'text', 'second', 'third', 'danger', 'link']),
    oneLine: PropTypes.bool,
    uppercase: PropTypes.bool,
};

Text.defaultProps = {
    theme: 'text',
    weight: 'regular',
    size: 'm',
};
