class Paragraph {
    // 末尾に改行が２つあれば<p>
//    static #REGEX_PARAGRAPH = /([^\n]+)[\n]{2}/g;
//    static #REGEX_PARAGRAPH = /^(.+)[\n]{2}/gm;
//    static #REGEX_PARAGRAPH = /^([\s\S.]+)[\n]{2}/gm;
//    static #REGEX_PARAGRAPH = /^([.]+[\s\S]?)[\n]{2}/gm;
//    static #REGEX_PARAGRAPH = /^([.]+[\s\S])[\n]{2}/gm;
//    static #REGEX_PARAGRAPH = /^(.+)[\n]{2}/gms;
//    static #REGEX_PARAGRAPH = /^(.+[\n])[\n]{2}/gm;
//    static #REGEX_PARAGRAPH = /^(.+[\n]?)[\n]{2}/gm;
//    static #REGEX_PARAGRAPH = /^(.+[\n]?[.+]?)[\n]{2}/gm;
//    static #REGEX_PARAGRAPH = /^([\u{3000}].+)/g;
//    static #REGEX_PARAGRAPH = /^[\u{3000}](.+)/g;
//    static #REGEX_PARAGRAPH = /^[\x{20}](.+)/g;
//    static #REGEX_PARAGRAPH = /^[\x{20}](.+)/g;
//    static #REGEX_PARAGRAPH = /^[\u{3000}](.+)[\n]{2}/gmu;
//    static #REGEX_PARAGRAPH = /^[\u{3000}](.+)[\n]{2}/gmu;
//    static #REGEX_PARAGRAPH = /^[\u{3000}](.+)$/gu;
//    static #REGEX_PARAGRAPH = /^[\u{3000}](.+)$[\n]/gmu;
//    static #REGEX_PARAGRAPH = /^[\u{3000}](.+)[\n]{2}/gmu;
//    static #REGEX_PARAGRAPH = /^[\u{3000}](.+)$/gmu;
    static #REGEX_PARAGRAPH = /^([\u{3000}])(.+)[\n]{2}/gmu;

    static #REGEX_BLEAK_LINE= /[\n]/g;

    // 行頭...改行２つ
    // 改行２つ...行末
    static parse(text) {
        text = text.replace(Paragraph.#REGEX_PARAGRAPH, (match, p1, p2)=>{
            return `<p>${p1}${p2}</p>`;
        });
        // パラグラフ以外の改行は<br>に
//        text = text.replace('\n', '<br>');
        
        text = text.replace(Paragraph.#REGEX_BLEAK_LINE, (match)=>{
            return `<br>`;
        });

        return text
    }
}
