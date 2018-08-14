import Cookie from 'js-cookie'

const Lang = [];
const LOCALE = Cookie.get('LOCALE');
const LOCALE_FALLBACK = 'en';

const trans = (typedKey) => {
    let index = typedKey.indexOf('.'),
        type = typedKey.substr(0, index),
        key = typedKey.substr(index + 1, typedKey.length);

    if (Lang[type] === undefined) {
        Lang[type] = require('./' + type).default;
    }

    return Lang[type][LOCALE][key] || Lang[type][LOCALE_FALLBACK][key] || key;
};

const currentLocale = () => LOCALE || LOCALE_FALLBACK;

export default trans;
export {trans, currentLocale};
