// https://color.adobe.com/pt/search?q=nature

function natureMode(){

    var checkbox = document.getElementById('checkbox');

    if (checkbox.checked){
    document.getElementsByTagName("body")[0].style = 'background-image:url("assets/style/imagens/wallpaper.jpg")';
    document.getElementsByClassName("label")[0].style = 'color: white';


    document.getElementsByTagName("img")[0].src = 'assets/style/imagens/github-clean.png';
    document.getElementsByTagName("img")[1].src = 'assets/style/imagens/linkedin-clean.png';
    document.getElementsByTagName("img")[2].src = 'assets/style/imagens/instagram-clean.png';

    document.getElementsByTagName("main")[0].style = 'background-color: rgba(0, 6, 13, 0.564)';

    document.getElementsByTagName('input')[0].style = 'background-color: rgba(14, 38, 24, 0.564)';

    document.getElementById('engualkkkk').style = 'background-color: rgba(45, 89, 48, 0.564)';
    } else{
        voltaParaTemaPadrao();
    };
}

function voltaParaTemaPadrao(){
    document.getElementsByTagName("body")[0].style = '';
    document.getElementsByClassName("label")[0].style = '';


    document.getElementsByTagName("img")[0].src = 'assets/style/imagens/icons8-github-50.png';
    document.getElementsByTagName("img")[1].src = 'assets/style/imagens/icons8-linkedin-50.png';
    document.getElementsByTagName("img")[2].src = 'assets/style/imagens/icons8-instagram-50.png';

    document.getElementsByTagName("main")[0].style = '';

    document.getElementsByTagName('input')[0].style = '';

    document.getElementById('engualkkkk').style = '';
}