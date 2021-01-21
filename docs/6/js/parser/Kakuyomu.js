class Kakuyomu {
    #REGEX_DOT = /《《([^\n]{1,50}?)》》/g;
    #rubyRuleBuilder;
    constructor(isKakko=false) {
        this.#rubyRuleBuilder = new KakuyomuRubyRuleBuilder(isKakko);
    }
    parse(text) {
        text = this.#parseRuby(text);
        text = this.#parseDot(text);
        return text;
    }
    #parseRuby(text) {
        for (let rule of this.#rubyRuleBuilder.Rules) {
            let parser = new RubyParser(rule);
            text = parser.parse(text);
        }
        return text;
    }
    #parseDot(text) {
        return text.replace(this.#REGEX_DOT, (match, p1)=>{
            const text = [...p1].map(a => `<span>${a}</span>`).join('');
            return `<em class="emphasis">${text}</em>`;
        });
    }
}
