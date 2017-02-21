onload = function(){
var formulario = document.forms[0];
formulario.onsubmit = function(){
    var err = document.getElementsByClassName('errores')[0];
    var errList ="";
    var ret = true;

    //Nombre
    var nom = document.getElementsByName('name')[0].value;
    console.log(nom);
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
    console.log(email);
    if ( !/^\w+@\w+\.\w+$/.test(email) ){
      errList += "El email es incorrecto <br/>";
      ret = false;
    }

    //Campo de texto
    var txtArea = document.getElementsByName('name')[0].value;
    console.log(txtArea);
    if (txtArea.length > 750){
         errList += "El campo Mensaje tiene demasiados carácteres <br/>"
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
}

//captcha
function checkform(theform){
var why = "";

if(theform.txtInput.value == ""){
why += "- El captcha debe estar rellenado.\n";
}
if(theform.txtInput.value != ""){
if(ValidCaptcha(theform.txtInput.value) == false){
why += "- El codigo de seguridad no coincide.\n";
}
}
if(why != ""){
alert(why);
return false;
}
}

//Generates the captcha function
var a = Math.ceil(Math.random() * 9)+ '';
var b = Math.ceil(Math.random() * 9)+ '';
var c = Math.ceil(Math.random() * 9)+ '';
var d = Math.ceil(Math.random() * 9)+ '';
var e = Math.ceil(Math.random() * 9)+ '';

var code = a + b + c + d + e;
document.getElementById("txtCaptcha").value = code;
document.getElementById("txtCaptchaDiv").innerHTML = code;

// Validate the Entered input aganist the generated security code function
function ValidCaptcha(){
var str1 = removeSpaces(document.getElementById('txtCaptcha').value);
var str2 = removeSpaces(document.getElementById('txtInput').value);
if (str1 == str2){
return true;
}else{
return false;
}
}

// Remove the spaces from the entered and generated code
function removeSpaces(string){
return string.split(' ').join('');
}
