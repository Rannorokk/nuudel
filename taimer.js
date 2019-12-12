/*
var pasta_liik = prompt('Sisestage pasta liik, mida keeta tahate: ').toLowerCase();
var küpsusaste = prompt('Sisestage pasta soovitud küpsusaste: ').toLowerCase();
*/

var pasta_liik;
var küpsusaste;

var harder = {'fusili':5, 'penne rigate':7, 'ditali lisci':5, 'maccheroni lisci':5, 'spaghetti':7};
var aldente = {'fusili':6, 'penne rigate':8, 'ditali lisci':7, 'maccheroni lisci':7, 'spaghetti':8};
var softer = {'fusili':8, 'penne rigate':9, 'ditali lisci':9, 'maccheroni lisci':9, 'spaghetti':10};

var sõnastik = {
    'harder': harder, 
    'aldente': aldente, 
    'softer': softer
};

function alustaTaimer() {
    pasta_liik = document.getElementById('pasta_select').value;
    küpsusaste = document.getElementById('kypsus_select').value;

    var aeg = sõnastik[küpsusaste][pasta_liik] * 60 * 1000;
    var d = new Date();
    var targetTime = d.getTime() + aeg;

    var x = setInterval(() => {
        // Get today's date and time
        var now = new Date().getTime();
            
        // Find the distance between now and the count down date
        var distance = targetTime - now;
            
        // Time calculations for days, hours, minutes and seconds
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
        // Output the result in an element with id="demo"
        document.getElementById("demo").innerHTML = minutes + "m " + seconds + "s ";
            
        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }, 1000);
}