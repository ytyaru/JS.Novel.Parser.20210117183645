class RubyParser { // 二重山括弧。
//    #REGEX_RUBY = /[｜|]([^\n]{1,50}?)《([^\n]{1,20}?)》/g;
//    #REGEX_KANJI_RUBY = /([\u2e80-\u2fdf\u3005\3007\303b\u4e00-\u9faf\u3400-\u4dbf\uf900-\ufaff]{1,50}?)《([^\n]{1,20}?)》/g;
    #REGEX_RUBY;
    #REGEX_KANJI_RUBY;
    #REGEX_ESCAPE;
    #REGEX_KANJI = '[\\u2e80-\\u2fdf\\u3005\\3007\\303b\\u4e00-\\u9faf\\u3400-\\u4dbf\\uf900-\\ufaff]';
    #rule;
    constractor(rubyParseRule) {
//        this.rule = new RubyParseRule();
        this.rule = rubyParseRule;
        this.#REGEX_RUBY = new RegEx(`[${rule.StartChar}]([^\\n]{1,${rule.RbLen}}?)${rule.EncloseStartChar}([^\\n]{1,${rule.RtLen}}?)${rule.EncloseEndChar}`, 'g');
        this.#REGEX_KANJI_RUBY = new RegEx(`(${this.#REGEX_KANJI}{1,${rule.RbLen}}?)${rule.EncloseStartChar}([^\\n]{1,${rule.RtLen}}?)${rule.EncloseEndChar}`, 'g');
        this.#REGEX_ESCAPE = new RegEx(`[${rule.StartChar}]${rule.EncloseStartChar}`, 'g');
    }
    parse(text) {
        const self = this;
        text = text.replace(this.#REGEX_RUBY, (match, p1, p2)=>{
            return self.rule.convert(p1, p2);
        });
        if (self.rule.CanOmitStartChar) {
            text = text.replace(this.#REGEX_KANJI_RUBY, (match, p1, p2)=>{
                return self.rule.convert(p1, p2);
            });
        }
        if (self.rule.CanEscape) {
            text = text.replace(this.#REGEX_ESCAPE, rule.EncloseStartChar[0]);
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
