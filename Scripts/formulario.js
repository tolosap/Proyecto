
var formulario = document.forms[0];
//Generates the captcha function
var a = Math.ceil(Math.random() * 9)+ '';
var b = Math.ceil(Math.random() * 9)+ '';
var c = Math.ceil(Math.random() * 9)+ '';

var code = a + b + c;

var captchita = "Captcha... Introduce el codigo " + code;
$('#laCaptcha').attr('placeholder', captchita);

botoncito.onclick = function(e){
    e.preventDefault();
    var err = document.getElementsByClassName('errores')[0];
    var errList ="";
    var ret = true;

    //Nombre
    var nom = document.getElementsByName('name')[0].value;
    if (nom == null || nom.length == 0 || !(/^\S+$/.test(nom))){
         errList += "El campo nombre es incorrecto <br/>"
         ret = false;
    }




    //Teléfono
    var tel = document.getElementsByName('phone')[0].value;
    if (isNaN(tel) || !(/^\d{9,10}$/.test(tel))){
      errList += "El campo teléfono es incorrecto <br/>";
      ret = false;
    }


    //Email
    var email = document.getElementsByName("email")[0].value;
    if ( !/^\w+@\w+\.\w+$/.test(email) ){
      errList += "El email es incorrecto <br/>";
      ret = false;
    }

    //Campo de texto
    var txtArea = document.getElementsByName('name')[0].value;
    if (txtArea.length > 750){
         errList += "El campo Mensaje tiene demasiados carácteres <br/>"
         ret = false;
    }

    //captcha

    // Validate the Entered input aganist the generated security code function
    var str2 = document.getElementById('laCaptcha').value;
    if (str2 == code){
    }else{
    errList += "La captcha es incorrecta <br/>"
    ret = false;
    }



    if (ret){
      errList = "Enviado correctamente";
      err.style.color="green";
    }else{
      err.style.color="red";
    }

    err.innerHTML = errList;
    return ret;
}
