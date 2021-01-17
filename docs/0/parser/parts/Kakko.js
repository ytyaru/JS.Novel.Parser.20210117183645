class Kakko {
    // 漢字（かんじ）
    static #REGEX_KANJI_RUBY = /([\u2e80-\u2fdf\u3005\3007\303b\u4e00-\u9faf\u3400-\u4dbf\uf900-\ufaff]{1,10}?)[\(（]([^\n]{1,20}?)[\)）]/g;
    static #REGEX_KANJI_RUBY_H = /([\u2e80-\u2fdf\u3005\3007\303b\u4e00-\u9faf\u3400-\u4dbf\uf900-\ufaff]{1,10}?)[\(]([^\n]{1,20}?)[\)]/g;
    static #REGEX_KANJI_RUBY_Z = /([\u2e80-\u2fdf\u3005\3007\303b\u4e00-\u9faf\u3400-\u4dbf\uf900-\ufaff]{1,10}?)[（]([^\n]{1,20}?)[）]/g;
    static toHtml(text, is_Zenkaku=false) {
        const regex = (is_Zenkaku) ? Kakuyomu.#REGEX_KANJI_RUBY : Kakuyomu.#REGEX_KANJI_RUBY_H
        text = text.replace(regex, (match, p1, p2)=>{
            return `<ruby>${p1}<rt>${p2}</rt></ruby>`;
        });
        return text
    }
}
