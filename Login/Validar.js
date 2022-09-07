
//Creacion del evento del formulario
document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("form").addEventListener('submit',validateForm);
});


//Funcion para validar los campos en el formulario
function validateForm(evt){
    evt.preventDefault();

    var email = document.getElementById("email").value;
    if(email.length == 0){
        alert('Debebes llenar el campo email');
        return;
    }

    var password = document.getElementById("password").value;
    if(password <= 6){
        alert('Debes llenar el campo password');
        return;
    }

    this.submit();
}