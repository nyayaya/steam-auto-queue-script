// ==UserScript==
// @name         Steam auto queue script
// @version      1.00
// @author       nyayaya
// @description  i think it works
// @include      http://store.steampowered.com/*
// @include      https://store.steampowered.com/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

if(window.location.pathname.indexOf("explore") != -1){
    var temp = document.getElementsByClassName("discovery_queue_winter_sale_cards_header")[0].getElementsByClassName("subtext")[0].innerHTML;
    if(temp.indexOf("Come back") == -1){
        document.getElementById("refresh_queue_btn").click();
    }
}
else{
    document.getElementById("next_in_queue_form").submit();
}
