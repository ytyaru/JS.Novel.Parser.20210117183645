window.addEventListener('load', (event) => {
    document.querySelector('#selector').addEventListener('input', (event)=>{
        parse();
    });
    document.querySelector('#editor').addEventListener('input', (event)=>{
        parse();
    });
//    function getRuleBuilderType() { return eval(document.querySelector('#selector').value); }
//    function getParser() { return eval(document.querySelector('#selector').value); }
    function getParserType() { return eval(document.querySelector('#selector').value); }

//    function getClass(className){return Function('return (' + className + ')')();}
    function getRuleBuilderType(){return Function('return (' + document.querySelector('#selector').value + ')')();}

    function parse() {
        const editor = document.querySelector('#editor');
        const viewer = document.querySelector('#viewer');
        const drawer = document.querySelector('#drawer');
//        viewer.value = getParser().parse(editor.value);
        const parserType = getParserType();
        const parser = new parserType();
        console.log(parserType , parser );
        viewer.value = parser.parse(editor.value);
        drawer.innerHTML = BreakLine.parse(Paragraph.parse(viewer.value));

        /*
//        KakuyomuRubyRuleBuilder
//        NarouRubyRuleBuilder 
//        PlainToAozoraRubyRuleBuilder
        let text = editor.value;
        const ruleBuilderType = getRuleBuilderType();
        const ruleBuilder = new ruleBuilderType();
        console.log(ruleBuilder instanceof ruleBuilderType);
        console.log(ruleBuilder);
        console.log('ruleBuilder.Rules',ruleBuilder.Rules);
        for (let rule of ruleBuilder.Rules) {
            console.log('rule',rule);
            let parser = new RubyParser(rule);
            text = parser.parse(text);
        }
        viewer.value = text;
        drawer.innerHTML = BreakLine.parse(Paragraph.parse(viewer.value));
        */
    }
    document.querySelector('#selector').focus();
    document.querySelector('#selector').options[0].selected = true;
    parse();
});
