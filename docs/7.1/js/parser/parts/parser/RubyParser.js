//import _RubyParser from './_RubyParser.js';
import RubyParseRuleParser from './RubyParseRuleParser.js';
export default class RubyParser { // 二重山括弧。
    static parse(text, builder) {// this.#rubyRuleBuilder
        for (let rule of builder.Rules) {
            let parser = new RubyParseRuleParser(rule);
            text = parser.parse(text);
        }
        return text;
    }
}
