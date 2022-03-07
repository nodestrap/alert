import { default as React } from 'react';
import { IconList } from '@nodestrap/icon';
import { PopupPlacement, PopupMiddleware, PopupStrategy, PopupProps } from '@nodestrap/popup';
export declare const usesAlertLayout: () => import("@cssfn/cssfn").Rule;
export declare const usesAlertVariants: () => import("@cssfn/cssfn").Rule;
export declare const usesAlertStates: () => import("@cssfn/cssfn").Rule;
export declare const useAlertSheet: import("@cssfn/types").Factory<import("jss").Classes<"main">>;
export declare const cssProps: import("@cssfn/css-config").Refs<{
    gapInline: import("@cssfn/css-types").Cust.Ref;
    gapBlock: import("@cssfn/css-types").Cust.Ref;
}>, cssDecls: import("@cssfn/css-config").Decls<{
    gapInline: import("@cssfn/css-types").Cust.Ref;
    gapBlock: import("@cssfn/css-types").Cust.Ref;
}>, cssVals: import("@cssfn/css-config").Vals<{
    gapInline: import("@cssfn/css-types").Cust.Ref;
    gapBlock: import("@cssfn/css-types").Cust.Ref;
}>, cssConfig: import("@cssfn/css-config").CssConfigSettings;
export interface AlertProps<TElement extends HTMLElement = HTMLElement> extends PopupProps<TElement> {
    onActiveChange?: (newActive: boolean) => void;
    icon?: React.ReactChild | boolean | null | IconList;
    children?: React.ReactNode;
    control?: React.ReactChild | boolean | null;
}
export declare function Alert<TElement extends HTMLElement = HTMLElement>(props: AlertProps<TElement>): JSX.Element;
export { Alert as default };
export type { PopupPlacement, PopupMiddleware, PopupStrategy };
