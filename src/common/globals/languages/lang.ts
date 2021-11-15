import { en } from 'src/common/globals/languages/en';

export const getLanguageFile: any = () => {
    // If no file was found, return english.
    return en;
};

export const lang = getLanguageFile();
