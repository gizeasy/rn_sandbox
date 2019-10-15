module.exports = {
    native: true,
    expandProps: 'end',
    template: ({ template }, opts, { imports, componentName, props, jsx, exports }) => {
        return template.ast`
            ${imports}
            import style from 'svg/Svg.less';
            import { s } from 'utils/styles';
            
            const sSvg = s('Svg')(style);
           
            const ${componentName} = (${props}) => {
                props = {...props, style: sSvg(null, props.style)}                
                return ${jsx};
            };
            export default ${componentName};
        `;
    },
};
