var randomArray = [];

while (randomArray.length < 19){
    var randomBr =  2 + Math.floor(Math.random() * 19);

    if(randomArray.indexOf(randomBr) === -1){
        randomArray.push(randomBr);
    }
}

var ispis = "<div id='polje1'></div>";
var okvir = document.getElementById('okvir');

for (var i = 0; i < 19; i++) {
    ispis += `<div id="polje${i + 2}"><img src="img/${randomArray[i]}.jpg" alt="${i + 2}"></div>`;
}

okvir.innerHTML = ispis;
okvir.addEventListener('click', function (e) {

    var kliknuto = Number(e.target.alt);

    if (kliknuto > 0) {
        var prazno_polje = 5;
        for (i = 1; i <= 20; i++) {
            if (!document.querySelector('#polje' + i + ' img')) {
                prazno_polje = i;
            }
        }

        console.log('kliknuto na ', kliknuto, 'prazno', prazno_polje);
        var razlika = prazno_polje - kliknuto;
        if (razlika < 0) {
            razlika *= -1;
        }
        console.log('razlika', razlika);

        if ((razlika == 1 || razlika == 5)
            && (!(razlika == 1 && (kliknuto == 5 && prazno_polje == 6)))
            && (!(razlika == 1 && (kliknuto == 6 && prazno_polje == 5)))
            && (!(razlika == 1 && (kliknuto == 10 && prazno_polje == 11)))
            && (!(razlika == 1 && (kliknuto == 11 && prazno_polje == 10)))
            && (!(razlika == 1 && (kliknuto == 15 && prazno_polje == 16)))
            && (!(razlika == 1 && (kliknuto == 16 && prazno_polje == 15)))
        ) {
            document.getElementById('polje' + prazno_polje).innerHTML =
                document.getElementById('polje' + kliknuto).innerHTML;

            document.getElementById('polje' + kliknuto).innerHTML = '';
            document.querySelector('#polje' + prazno_polje + ' img').alt = prazno_polje;
        }

        /* Predpostavka da je igrac pobedio */
        var pobeda = true;

        for (i = 1; i <= 20; i++) {
            if (document.querySelector('#polje' + i + ' img')) {
                var src = document.querySelector('#polje' + i + ' img').src;
                var deloviLinkaDoSLike = src.split("/");
                var poslednjDeoLinkaDoSLike = deloviLinkaDoSLike[deloviLinkaDoSLike.length - 1];

                var brojSlike = poslednjDeoLinkaDoSLike.split(".")[0];

                /* Da bi se osigurali da ce promenljiva */
                /* {brojSlike} biti broj, svakako je konvertujemo u broj */
                /* Kopristeci parseInt */
                /* brzi pristup linku ( CTRL + click )  */
                /* @doc https://www.w3schools.com/jsref/jsref_parseint.asp*/
                if (i !== parseInt(brojSlike, 10)) {
                    /* Ako makar broj jedne slike nije jednak sa brojem polja, igrac ipak nije pobedio*/
                    /* Uslov za pobedu je da sve slike budu poredjane redom */
                    /* <img src="img/{redniBrojPolja}.jpg" alt="{redniBrojPolja}"*/
                    pobeda = false;
                }
            }
        }

        if (pobeda) {
            /* Ako je vrednost promenljive {pobeda} true ... */
            /* Juhuu :) :) :) */
            alert("Pobedio si!!! :)")
        }
    }

});

function clickOnPuzzle(event){
    var element = document.getElementById("zavrsna");

    if (event.button === 0 && event.type === 'mousedown') {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }

}