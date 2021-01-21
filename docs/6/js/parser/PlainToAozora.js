class PlainToAozora { // 漢字（かんじ）-> ｜漢字《かんじ》
    #rubyRuleBuilder;
    constructor() {
        this.#rubyRuleBuilder = new PlainToAozoraRubyRuleBuilder();
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
