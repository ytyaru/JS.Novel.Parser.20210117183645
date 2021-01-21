// 共通パーサ（なろう、アルファポリス、エブリスタ、カクヨム）
// https://kakuyomu.jp/works/1177354054887461010/episodes/1177354054887475663
class Common {
    #rubyRuleBuilder;
    constructor() {
        this.#rubyRuleBuilder = new CommonRubyRuleBuilder();
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
