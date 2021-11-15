import { de } from 'src/common/globals/languages/de';
import { en } from 'src/common/globals/languages/en';
import { no } from 'src/common/globals/languages/no';
import { store } from 'src/common/state/store';

export const getLanguageFile: any = () => {
    // If no file was found, return english.
    return en;
};

export const lang = getLanguageFile();
