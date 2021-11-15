import { cc } from 'src/common/globals/color-codes/cc';
export function color(): IColor {

    return {
        background: cc.themes.light.colors.background,
        border: cc.themes.light.colors.border,
        divider: cc.themes.light.colors.divider,
        primary: cc.themes.light.colors.primary,
        secondary: cc.themes.light.colors.secondary,
        secondaryText: cc.themes.light.colors.secondaryText,
        text: cc.themes.light.colors.text
    };
}

export interface IColor {
    background: string;
    border: string;
    divider: string;
    primary: string;
    secondary: string;
    secondaryText: string;
    text: string;
}
