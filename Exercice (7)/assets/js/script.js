document.getElementById('buttonData()').onclick = function resumeForm() {
    var age = document.getElementById('age').value;
    var result;
    if(age > 18) {
       alert('Vous êtes majeur !');
    }
    if(age < 18) {
       alert("Vous êtes mineur...");
    }
}
