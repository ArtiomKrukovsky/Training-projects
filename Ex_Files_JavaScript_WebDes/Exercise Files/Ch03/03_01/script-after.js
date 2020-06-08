(function() {
"use strict";

document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('cart-hplus').addEventListener('submit', estimateTotal);

    function estimateTotal(event) {
        event.preventDefault();
    
        if (document.getElementById('s-state').value === '') {
            alert('Please choose your shipping state.');
        
            document.getElementById('s-state').focus();
        }
    
        var itemBball = parseInt(document.getElementById('txt-q-bball').value, 10) || 0,
            itemJersey = parseInt(document.getElementById('txt-q-jersey').value, 10) || 0,
            itemPower = parseInt(document.getElementById('txt-q-power').value, 10) || 0,
        
            // don't have to use selectedIndex in modern browsers - just value
            state = document.getElementById('s-state').value,
            shippingMethod = document.querySelector('[name=r_method]:checked').value || '';
    
        var taxFactor = 1;
        if (state === 'CA') {
            taxFactor = 1.075; // tax is 7.5% in California
        }
    
        // pickup, usps, ups
        var shippingCostPer = 0;
        switch (shippingMethod) {
            case 'pickup' :
                shippingCostPer = 0;
                break;
            case 'usps' :
                shippingCostPer = 2;
                break;
            case 'ups' :
                shippingCostPer = 3;
                break;
        }
        var totalItems = itemBball + itemJersey + itemPower,
            shippingCost = totalItems * shippingCostPer;
    
        var subtotal = ((itemBball * 90) + (itemJersey * 25) + (itemPower * 30)) * taxFactor;
    
        var estimate = "$" + (subtotal + shippingCost).toFixed(2);
    
        document.getElementById('txt-estimate').value = estimate;
    
        document.getElementById('results').innerHTML = 'Total items: ' + totalItems + '<br>';
        document.getElementById('results').innerHTML += 'Total shipping: $' + shippingCost.toFixed(2) + '<br>';
        document.getElementById('results').innerHTML += 'Tax: ' + ((taxFactor - 1) * 100).toFixed(2) + '% (' + state + ')';
    }
});

})();