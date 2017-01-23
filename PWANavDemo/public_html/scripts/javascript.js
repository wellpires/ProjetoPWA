/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
window.onload = function () {
    
    var menuButton = document.getElementById("menuButton");
    var mySidenav = document.getElementById("mySidenav");
    var content = document.getElementById("content");
    var closeButton = document.getElementById("closeButton");
    
    menuButton.onclick = function () {
        if (window.innerWidth > 600) {
            mySidenav.style.width = "250px";
            content.style.marginLeft = "250px";
        } else {
            mySidenav.style.width = "250px";
        }

    };
    closeButton.onclick = function () {
        mySidenav.style.width = "0";
        content.style.marginLeft = "0";
    };

    $('#divCentral').load('main.html');

    alterarConteudoCentral('pwaTitle', 'main.html');
    alterarConteudoCentral('linkHome', 'main.html');
    alterarConteudoCentral('linkAbout', 'about.html');
    alterarConteudoCentral('linkServices', 'services.html');
    alterarConteudoCentral('linkContact', 'contact.html');

};

function alterarConteudoCentral(link, page) {
    document.getElementById(link).addEventListener('click', function () {
        $('#divCentral').load(page);
    });
}
