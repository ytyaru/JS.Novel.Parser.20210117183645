// 共通パーサ（なろう、アルファポリス、エブリスタ、カクヨム）
// https://kakuyomu.jp/works/1177354054887461010/episodes/1177354054887475663
class Common {
    static #REGEX_RUBY = /[｜|]([^\n]{1,10}?)《([^\n]{1,20}?)》/g;
    static parse(text) {
        text = text.replace(Kakuyomu.#REGEX_RUBY, (match, p1, p2)=>{
            return `<ruby>${p1}<rt>${p2}</rt></ruby>`;
        });
        return text
    }
}
