class PlainToHtml { // 漢字（かんじ）-> <ruby>漢字<rt>かんじ</rt></ruby>
    #rubyRuleBuilder;
    constructor() {
        this.#rubyRuleBuilder = new PlainToHtmlRubyRuleBuilder();
    }
    parse(text) {
        text = this.#parseRuby(text);
        return text;
    }
    #parseRuby(text) {
        for (let rule of this.#rubyRuleBuilder.Rules) {
            let parser = new RubyParser(rule);
            text = parser.parse(text);
        }
        return text;
    }
}
