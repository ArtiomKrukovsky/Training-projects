
(function() {
"use strict";   

    var planet = document.getElementById('p-planet'),
        textPanel = document.getElementById('text-info'),
        textArray = textPanel.children;

    document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('info-from').addEventListener('submit', displayInfo);

        for (let i = 0; i < textArray.length; i++) {
            textArray[i].style.display = 'none';
        }

        var btnSubmit = document.getElementById('btn-estimate');
        btnSubmit.disabled = true;
        
        planet.addEventListener('change', function(){
            if(planet.value === ''){
                btnSubmit.disabled = true;
            }
            else{
                btnSubmit.disabled = false;
            }
        });
    });

    function displayInfo(event){
        event.preventDefault();

        if (planet.value === '') {
            alert('Please choose planet');
            planet.focus();
        }

        showInfo(planet.value);
    }

    function showInfo(planet){
        var result = document.getElementById('image-info');
        result.innerHTML = '<h3 class="planet-name">Planet name: ' + planet + '</h3><br>';
        result.innerHTML += '<img src="_images/'+ planet +'.jpg" alt="planet">';

        if(typeof planet === "string"){
            var planetName = planet.toLowerCase();
        }

        for (let i = 0; i < textArray.length; i++) {
            if (planetName === textArray[i].id) {
                textArray[i].style.display = 'inline';
            }
            else{
                textArray[i].style.display = 'none';
            }
        }
    }
})();