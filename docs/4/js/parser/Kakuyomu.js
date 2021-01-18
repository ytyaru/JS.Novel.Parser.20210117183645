class Kakuyomu {
    static #REGEX_DOT = /《《([^\n]{1,50}?)》》/g;
    static #REGEX_RUBY = /[｜|]([^\n]{1,50}?)《([^\n]{1,20}?)》/g;
    static #REGEX_KANJI_RUBY = /([\u2e80-\u2fdf\u3005\3007\303b\u4e00-\u9faf\u3400-\u4dbf\uf900-\ufaff]{1,50}?)《([^\n]{1,20}?)》/g;
    static parse(text) {
        text = text.replace(Kakuyomu.#REGEX_DOT, (match, p1)=>{
            const text = [...p1].map(a => `<span>${a}</span>`).join('');
            return `<em class="emphasis">${text}</em>`;
        });
        text = text.replace(Kakuyomu.#REGEX_RUBY, (match, p1, p2)=>{
            return `<ruby>${p1}<rt>${p2}</rt></ruby>`;
        });
        text = text.replace(Kakuyomu.#REGEX_KANJI_RUBY, (match, p1, p2)=>{
            return `<ruby>${p1}<rt>${p2}</rt></ruby>`;
        });
        return text
    }
}
