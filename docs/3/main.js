window.addEventListener('load', (event) => {
    document.querySelector('#selector').addEventListener('input', (event)=>{
        parse();
    });
    document.querySelector('#editor').addEventListener('input', (event)=>{
        parse();
    });
    function getParser() { return eval(document.querySelector('#selector').value); }
    function parse() {
        const editor = document.querySelector('#editor');
        const viewer = document.querySelector('#viewer');
        viewer.value = getParser().parse(editor.value);
    }
    document.querySelector('#selector').focus();
    document.querySelector('#selector').options[0].selected = true;
    parse();
});
