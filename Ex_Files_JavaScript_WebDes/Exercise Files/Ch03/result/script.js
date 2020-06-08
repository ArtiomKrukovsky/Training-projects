(function() {
"use strict";

var sbmButton = document.getElementById('btn-estimate');
var state = document.getElementById('s-state');

document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('cart-hplus').addEventListener('submit', estimateTotal);
    sbmButton.disabled = true;

    state.addEventListener('change', changeEnabledStatus);
});

function changeEnabledStatus(){
    sbmButton.disabled = (state.value === '');
}

function estimateTotal(event){
    event.preventDefault();

    if(state.value === ''){
        alert('Please choose your shipping state.')
        state.focus();
    }

    var bballCount = parseInt(document.getElementById('txt-q-bball').value, 10) || 0, 
        jerseyCount = parseInt(document.getElementById('txt-q-jersey').value, 10) || 0,
        powerCount = parseInt(document.getElementById('txt-q-power').value, 10) || 0,
        mineralCount = parseInt(document.getElementById('txt-q-mineral').value, 10) || 0,
        shippingState = state.value,
        shippingMethod = document.querySelector('[name=r_method]:checked').value || "";
    
    var totalQty = bballCount + jerseyCount + powerCount + mineralCount,
        shippingCostPer,
        shippingCost,
        taxFactor = 1,
        estimate,
        totalItemPrice = (90 * bballCount) + (25 * jerseyCount) + (30 * powerCount) + (4 * mineralCount);

    switch(shippingState){
        case 'CA':
            taxFactor = 1.075;
            break;
        case 'D.C.':
            taxFactor = 1.065;
            break;
    }

    switch(shippingMethod){
        case 'usps' :
            shippingCostPer = 2;
            break;
        case 'ups' :
            shippingCostPer = 3;
            break;
        default :
            shippingCostPer = 0;
            break;
    }

    shippingCost = shippingCostPer * totalQty;
    
    estimate = '$' + ((totalItemPrice * taxFactor) + shippingCost).toFixed(2);
    document.getElementById('txt-estimate').value = estimate;

    var results = document.getElementById('results');

    results.innerHTML = 'Total items: ' + totalQty + '<br>';
    results.innerHTML += 'Total shipping cost: $' + shippingCost.toFixed(2) + '<br>';
    results.innerHTML += 'Tax: ' + ((taxFactor - 1) * 100).toFixed(2) + '% (' + shippingState + ')';
 }

})();