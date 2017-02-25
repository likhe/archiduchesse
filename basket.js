"use strict";
document.addEventListener("DOMContentLoaded", function(event) {
        //define the targets
        let contentBasket = document.getElementById('basket');
        let buySocks = document.querySelectorAll('buysocks');
        let nbBasket = 0;
        //create an addEventListener: when the link of img is clicked, targets which targets the basket
        for (let i = 0; i < buySocks.length; i++) {
            buySocks[i].addEventListener('click', function() {
                contentBasket.document.write(nbBasket++);
            });
        }
        for (let j = 0; j < contentBasket.length; j++) {
            contentBasket[i].addEventListener('click', function() {
                contentBasket.innerHTML = nbBasket++;
            });
        }
    )};
