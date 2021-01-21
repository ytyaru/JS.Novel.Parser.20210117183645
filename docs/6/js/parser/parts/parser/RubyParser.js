class RubyParser { // 二重山括弧。
//    #REGEX_RUBY = /[｜|]([^\n]{1,50}?)《([^\n]{1,20}?)》/g;
//    #REGEX_KANJI_RUBY = /([\u2e80-\u2fdf\u3005\3007\303b\u4e00-\u9faf\u3400-\u4dbf\uf900-\ufaff]{1,50}?)《([^\n]{1,20}?)》/g;
    #REGEX_RUBY;
    #REGEX_KANJI_RUBY;
    #REGEX_ESCAPE;
    #REGEX_KANJI = '[\\u2e80-\\u2fdf\\u3005\\3007\\303b\\u4e00-\\u9faf\\u3400-\\u4dbf\\uf900-\\ufaff]';
    #rule;
    constructor(rubyParseRule) {
        console.log('rubyParseRule',rubyParseRule);
//        this.rule = new RubyParseRule();
        this.#rule = rubyParseRule;
        console.log('this.#rule',this.#rule);
        this.#REGEX_RUBY = new RegExp(`[${this.#rule.StartChar}]([^\\n]{1,${this.#rule.RbLen}}?)[${this.#rule.EncloseStartChar}]([^\\n]{1,${this.#rule.RtLen}}?)[${this.#rule.EncloseEndChar}]`, 'g');
        this.#REGEX_KANJI_RUBY = new RegExp(`(${this.#REGEX_KANJI}{1,${this.#rule.RbLen}}?)[${this.#rule.EncloseStartChar}]([^\\n]{1,${this.#rule.RtLen}}?)[${this.#rule.EncloseEndChar}]`, 'g');
        this.#REGEX_ESCAPE = new RegExp(`[${this.#rule.StartChar}][${this.#rule.EncloseStartChar}]`, 'g');
    }
    parse(text) {
        const self = this;
        text = text.replace(this.#REGEX_RUBY, (match, p1, p2)=>{
            return self.#rule.convert(p1, p2);
        });
        console.log('self.#rule',self.#rule);
        if (self.#rule.CanOmitStartChar) {
            text = text.replace(this.#REGEX_KANJI_RUBY, (match, p1, p2)=>{
                return self.#rule.convert(p1, p2);
            });
        }
        if (self.#rule.CanEscape) {
            text = text.replace(this.#REGEX_ESCAPE, this.#rule.EncloseStartChar[0]);
        }
        /*
        text = text.replace(this.#REGEX_RUBY, (match, p1, p2)=>{
            return `<ruby>${p1}<rt>${p2}</rt></ruby>`;
        });
        text = text.replace(this.#REGEX_KANJI_RUBY, (match, p1, p2)=>{
            return `<ruby>${p1}<rt>${p2}</rt></ruby>`;
        });
        // escape
        text = text.replace('｜《', '《');
        text = text.replace('|《', '《');
        */
        return text
    }
}
