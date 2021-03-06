/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
window.onload = function () {

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./service-worker.js').then(function (registration) {
            console.log('Service Worker registered ', registration);
        }).catch(function (e) {
            console.log('ERRO ', e);
        });
    }

    var menuButton = document.getElementById("menuButton");
    var mySidenav = document.getElementById("mySidenav");
    var content = document.getElementById("content");
    
    menuButton.onclick = function (e) {
        e.stopImmediatePropagation();     
        
        if (window.innerWidth > 600) {
            if(mySidenav.style.width === "250px"){
                mySidenav.style.width = "0";
                content.style.marginLeft = "0";
            } else {
                 mySidenav.style.width = "250px";
                 content.style.marginLeft = "250px";
            }           
        } else {
            mySidenav.style.width = "250px";
        }

    };
    content.onclick = function (e) {
        if(e.currentTarget === this) {
            mySidenav.style.width = "0";
            content.style.marginLeft = "0";
        }      
    };

    $('#divCentral').load('main.html');

    alterarConteudoCentral('pwaTitle', 'main.html');
    alterarConteudoCentral('linkHome', 'main.html');
    alterarConteudoCentral('linkAbout', 'about.html');
    alterarConteudoCentral('linkServices', 'services.html');  

};

function alterarConteudoCentral(link, page) {
    document.getElementById(link).addEventListener('click', function () {
        $('#divCentral').load(page);
        esconderMenu();
    });
}

function esconderMenu() {
    if(!(window.innerWidth > 600)){
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("content").style.marginLeft = "0";
    }   
}
