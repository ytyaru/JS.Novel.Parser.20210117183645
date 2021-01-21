class Denden { // でんでんマークダウン。{漢字|かんじ}, {漢字|かん|じ}
    static #REGEX_RUBY = /[\{]([^\{\}]+)[\}]/g; // {...}
    static #REGEX_RB_RT = /([^\|]+)[\|]]/g; // ...|...
    static parse(text) {
        text = text.replace(Denden.#REGEX_RUBY, (match, p1)=>{
            const texts = p1.split('|');
            console.log(texts, texts[0].length === texts.length);
            if (texts.length === 2) {
                return `<ruby>${texts[0]}<rt>${texts[1]}</rt></ruby>`;
            }
            else if (texts[0].length === texts.length - 1) {
                let html = `<ruby>`;
                console.log(texts, texts[0], texts[0].split(''));
                const rbs = texts[0].split('');
                const rts = texts.slice(1);
                for (let i=0; i<rbs.length; i++) {
                    html += `${rbs[i]}<rt>${rts[i]}</rt>`;
                }
                html += `</ruby>`;
                return html;
            } else { return p1; }
        });
        return text
    }
}
