class Narou {
//    static #HIRAGANA = \u{3000}-\u{301C}\u{3041}-\u{3093}\u{309B}-\u{309E};
//    static #KATAKANA = \u{3000}-\u{301C}\u{30A1}-\u{30F6}\u{30FB}-\u{30FE};
    // ｜ベース《ヨミガナ》
    static #REGEX_RUBY = /[｜|]([^\n]{1,10}?)《([^\n]{1,20}?)》/g;
    // 漢字（ひらがなorカタカナ）
//    static #REGEX_KANJI_RUBY = /([\u2e80-\u2fdf\u3005\3007\303b\u4e00-\u9faf\u3400-\u4dbf\uf900-\ufaff]{1,50}?)[\(（]([\u{3000}-\u{301C}\u{3041}-\u{3093}\u{309B}-\u{309E}\u{30A1}-\u{30F6}\u{30FB}-\u{30FE}]{1,20}?)[\)）]/g;
    static #REGEX_KANJI_RUBY = /([\u2e80-\u2fdf\u3005\3007\303b\u4e00-\u9faf\u3400-\u4dbf\uf900-\ufaff]{1,10}?)[\(（]([^\n]{1,20}?)[\)）]/g;
    static toHtml(text) {
        text = text.replace(Narou.#REGEX_RUBY, (match, p1, p2)=>{
            return `<ruby>${p1}<rt>${p2}</rt></ruby>`;
        });
        text = text.replace(Narou.#REGEX_KANJI_RUBY, (match, p1, p2)=>{
            return `<ruby>${p1}<rt>${p2}</rt></ruby>`;
        });
        return text
    }
}
