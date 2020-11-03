document.getElementById('buttonData').onclick = function resumeForm() {
    var name = document.getElementById('name').value;
    var birthYear = document.getElementById('birthYear').value;
    var footSize = document.getElementById('footSize').value;
    
    var result = (footSize * 2 + 5) * 50 - birthYear + 1769;

    alert(
        "Mme/Mr. " + name +
        '\n' + "Né.e en " + birthYear +
        '\n' + "chausse du " + footSize +
        '\n' + "mon résultat est " + result +
        '\n' + "et tout le monde s'en fout !"
    );}

