// react:
import { default as React, } from 'react'; // base technology of our nodestrap components
// cssfn:
import { 
// compositions:
mainComposition, 
// styles:
style, imports, 
//combinators:
children, } from '@cssfn/cssfn'; // cssfn core
import { 
// hooks:
createUseSheet, } from '@cssfn/react-cssfn'; // cssfn for react
import { createCssConfig, 
// utilities:
usesGeneralProps, usesPrefixedProps, usesSuffixedProps, overwriteProps, } from '@cssfn/css-config'; // Stores & retrieves configuration using *css custom properties* (css variables)
// nodestrap utilities:
import spacers from '@nodestrap/spacers'; // configurable spaces defs
import { 
// hooks:
usesSizeVariant, } from '@nodestrap/basic';
import { 
// styles:
usesContentLayout, usesContentVariants, } from '@nodestrap/content';
import Icon from '@nodestrap/icon';
import CloseButton from '@nodestrap/close-button';
import { 
// styles:
usesPopupLayout, usesPopupVariants, usesPopupStates, Popup, } from '@nodestrap/popup';
// styles:
const iconElm = '.icon';
const bodyElm = '.body';
const controlElm = '.control';
export const usesAlertLayout = () => {
    return style({
        ...imports([
            // layouts:
            usesPopupLayout(),
            usesContentLayout(),
        ]),
        ...style({
            // layouts:
            display: 'grid',
            // explicit areas:
            /*
                just one explicit area: `body`
                icon & control rely on implicit area
            */
            gridTemplateRows: [['auto' /*fluid height*/]],
            gridTemplateColumns: [['auto' /*fluid width*/]],
            gridTemplateAreas: [[
                    '"body"',
                ]],
            // implicit areas:
            gridAutoFlow: 'column',
            gridAutoRows: 'min-content',
            gridAutoColumns: 'min-content',
            // the gridArea's size configured as *minimum* content's size required => no free space left to distribute => so (justify|algin)Content is *not required*
            // child default sizes:
            justifyItems: 'stretch',
            alignItems: 'stretch',
            // children:
            ...children(iconElm, {
                // layouts:
                gridArea: '1 / -3',
                // sizes:
                justifySelf: 'center',
                alignSelf: 'start',
                // customize:
                ...usesGeneralProps(usesPrefixedProps(cssProps, 'icon')), // apply general cssProps starting with icon***
            }),
            ...children(bodyElm, {
                // layouts:
                gridArea: 'body',
                // customize:
                ...usesGeneralProps(usesPrefixedProps(cssProps, 'body')), // apply general cssProps starting with body***
            }),
            ...children(controlElm, {
                // layouts:
                gridArea: '1 / 2',
                // sizes:
                justifySelf: 'center',
                alignSelf: 'start',
                // customize:
                ...usesGeneralProps(usesPrefixedProps(cssProps, 'control')), // apply general cssProps starting with control***
            }),
            // customize:
            ...usesGeneralProps(cssProps), // apply general cssProps
        }),
    });
};
export const usesAlertVariants = () => {
    // dependencies:
    // layouts:
    const [sizes] = usesSizeVariant((sizeName) => style({
        // overwrites propName = propName{SizeName}:
        ...overwriteProps(cssDecls, usesSuffixedProps(cssProps, sizeName)),
    }));
    return style({
        ...imports([
            // variants:
            usesPopupVariants(),
            usesContentVariants(),
            // layouts:
            sizes(),
        ]),
    });
};
export const usesAlertStates = () => {
    return style({
        ...imports([
            // states:
            usesPopupStates(),
        ]),
    });
};
export const useAlertSheet = createUseSheet(() => [
    mainComposition(imports([
        // layouts:
        usesAlertLayout(),
        // variants:
        usesAlertVariants(),
        // states:
        usesAlertStates(),
    ])),
], /*sheetId :*/ 'a5qyy5nbby'); // an unique salt for SSR support, ensures the server-side & client-side have the same generated class names
// configs:
export const [cssProps, cssDecls, cssVals, cssConfig] = createCssConfig(() => {
    return {
        //#region spacings
        gapInline: spacers.default,
        gapBlock: spacers.default,
        //#endregion spacings
    };
}, { prefix: 'alrt' });
export function Alert(props) {
    // styles:
    const sheet = useAlertSheet();
    // rest props:
    const { 
    // actions:
    onActiveChange, 
    // children:
    icon, children: body, control, ...restProps } = props;
    // fn props:
    const mildFn = props.mild ?? false;
    // jsx fn props:
    const iconFn = (() => {
        // default (unset) or string:
        if ((icon === undefined) || (typeof icon === 'string'))
            return (React.createElement(Icon
            // appearances:
            , { 
                // appearances:
                icon: icon ?? (() => {
                    switch (props.theme) {
                        case 'success': return 'check_circle';
                        case 'warning': return 'warning';
                        case 'danger': return 'error';
                        // case 'primary'   :
                        // case 'secondary' :
                        // case 'info'      :
                        // case 'light'     :
                        // case 'dark'      :
                        default: return 'info';
                    } // switch
                })(), 
                // variants:
                size: 'md', theme: props.theme, mild: !mildFn, 
                // classes:
                classes: [
                    'icon', // inject icon class
                ] }));
        // nodestrap's component:
        if (React.isValidElement(icon))
            return React.cloneElement(icon, {
                // classes:
                classes: [...(icon.props.classes ?? []),
                    'icon', // inject icon class
                ],
            });
        // other component:
        return icon && (React.createElement("div", { 
            // classes:
            className: 'icon' }, icon));
    })();
    const bodyFn = (() => {
        return body && (React.createElement("div", { 
            // classes:
            className: 'body' }, body));
    })();
    const controlFn = (() => {
        // handlers:
        const handleClose = onActiveChange && ((e) => {
            if (!e.defaultPrevented) {
                onActiveChange(false);
                e.preventDefault();
            } // if
        });
        // default (unset):
        if (control === undefined)
            return (React.createElement(CloseButton
            // variants:
            , { 
                // variants:
                size: 'xs', 
                // classes:
                classes: [
                    'control', // inject control class
                ], 
                // actions:
                onClick: handleClose }));
        // nodestrap's component:
        if (React.isValidElement(control))
            return React.cloneElement(control, {
                // classes:
                classes: [...(control.props.classes ?? []),
                    'control', // inject control class
                ],
                // actions:
                onClick: (e) => {
                    control.props.onClick?.(e);
                    handleClose?.(e);
                },
            });
        // other component:
        return control && (React.createElement("div", { 
            // classes:
            className: 'control' }, control));
    })();
    // jsx:
    return (React.createElement(Popup, { ...restProps, 
        // semantics:
        semanticTag: props.semanticTag ?? [null], semanticRole: props.semanticRole ?? 'alert', 
        // variants:
        mild: mildFn, 
        // classes:
        mainClass: props.mainClass ?? sheet.main },
        iconFn,
        bodyFn,
        controlFn));
}
export { Alert as default };
