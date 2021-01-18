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
    $('#selector').trigger('change');
    console.log(Ruby.toHtml('漢字', 'かんじ'));
    console.log(Ruby.toHtml(['漢','字'], ['かん','じ']));

    console.log(Ruby.toDom('漢字', 'かんじ'));
    console.log(Ruby.toDom(['漢','字'], ['かん','じ']));

});
