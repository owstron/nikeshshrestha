window.onload = function(e) {
    console.log('Window loaded ', e);

    createBackgroundChoices();
}

function getAllFileNames() {
    let arrFilename = ["paper-background-01", "paper-background-02", "paper-background-03", "paper-background-04", "paper-background-05", "paper-background-06", "paper-background-07", "paper-background-08", "paper-background-09", "paper-background-10", "paper-background-11", "paper-background-12", "paper-background-13", "paper-background-14", "paper-background-15"];

    return arrFilename
}

function createBackgroundChoices() {
    let navbar = document.getElementById('navbar');

    let input_select = document.createElement('select');
    input_select.id = 'input-select';
    
    let opt_blank = document.createElement('option');
    opt_blank.selected = true;
    opt_blank.hidden = true;
    opt_blank.value = ''
    opt_blank.text = 'Choose background';
    input_select.add(opt_blank);
    input_select.addEventListener('change', changeBackground);
    
    fileNames = getAllFileNames();
    fileNames.map(function(fileName) {
        let opt = document.createElement('option');
        opt.value = fileName;
        opt.text = fileName;
        input_select.add(opt);
    });
    
    
    
    
    
    navbar.appendChild(input_select);

    // adding desing select
    const design_select = document.createElement('select');
    // opt_blank.text = 'Choose Design';
    // design_select.add(opt_blank);
    design_select.id = 'design-select';
    design_select.addEventListener('change', changeBackground);

    let opt_blank_design = document.createElement('option');
    opt_blank_design.selected = true;
    opt_blank_design.hidden = true;
    opt_blank_design.value = ''
    opt_blank_design.text = 'Choose design';
    design_select.add(opt_blank_design);
    
    const designs = ['plain', 'three fold', 'one fold', 'edge fold'];
    const designValues = ['', 'a', 'b', 'c'];

    designs.map(function(design_label, index) {
        let opt = document.createElement('option');
        opt.value = designValues[index];
        opt.text = design_label;
        design_select.add(opt);
    })


    navbar.appendChild(design_select)
}

function changeBackground() {
    const design_select_value = document.getElementById('design-select').value;
    const input_select_value = document.getElementById('input-select').value;
    const url = 'assets/images/background';

    const extension = '.jpg';

    const image_url = `url('${url}/${input_select_value}${design_select_value}${extension}')`;
    document.body.style.backgroundImage = image_url;

}