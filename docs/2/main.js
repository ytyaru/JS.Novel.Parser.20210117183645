window.addEventListener('load', (event) => {
    let PARSER = null;
    document.querySelector('#selector').addEventListener('change', (event)=>{
        const value = document.querySelector('#selector').value;
        PARSER = getParser(value);
        parse();
    });
    document.querySelector('#selector').addEventListener('input', (event)=>{
        const value = document.querySelector('#selector').value;
        PARSER = getParser(value);
        parse();
    });
    document.querySelector('#editor').addEventListener('input', (event)=>{
        parse();
    });
    function getParser(id) { return eval(id); }
    function parse() {
        if (PARSER) {
            const editor = document.querySelector('#editor');
            const viewer = document.querySelector('#viewer');
            viewer.value = PARSER.parse(editor.value);
        }
    }
    $('#selector').trigger('change');
});
