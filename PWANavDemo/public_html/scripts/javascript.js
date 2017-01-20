/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

window.onload = function () {
    document.getElementById("menuButton").onclick = function () {
        if (window.innerWidth > 600) {
            document.getElementById("mySidenav").style.width = "250px";
            document.getElementById("content").style.marginLeft = "250px";
        } else {
            document.getElementById("mySidenav").style.width = "250px";
        }

    };
    document.getElementById("closeButton").onclick = function () {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("content").style.marginLeft = "0";
    };
};





