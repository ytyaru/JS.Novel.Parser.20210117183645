class Narou {
    #rubyRuleBuilder;
    constructor() {
        this.#rubyRuleBuilder = new NarouRubyRuleBuilder();
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
