function validateForm(){
    
    var name=document.getElementById('name').value;
    if(name.length==0){
        alert("Ingrese su nombre");
        return false;
    }
    validarLetras(name);
    validarMayus(name);
    
    function validarLetras(nombre){
        var filter6=/^[A-Za-z\_\-\.\s\xF1\xD1]+$/;
        if (filter6.test(nombre)){
            return true;
        }else{
         alert("Debes Ingresar solo letras");
        } 
    }
   
    function validarMayus(nombre){
        if(nombre.substring(0,1)==nombre.substring(0,1).toUpperCase()){
            return true;
        }else{
            alert("El campo debe comenzar con Mayuscula");
            return false;
        }
    }

    var lastName=document.getElementById('lastname').value;
    if(lastName.length==0){
        alert("Ingrese su Apellido");
        return false;
    }
    validarLetras(lastName);
    validarMayus(lastName);
    
    var pass=document.getElementById('input-password').value;
    
    if(pass.length==0){
        alert("Falta Ingresar Password");
    }
    
    if(pass!="123456" && pass!="0987654"){

        if(pass.length>=6){
            return true;
        }else{
            alert("La contraseña debe tener al menos 6 caracteres");
        }
    }else{
        alert("La contraseña no puede ser ni 123456 ni 0987654");
    }
    
    var mail = document.getElementById("input-email").value;

    if(mail.length==0){
        alert("Debe ingresar su mail");
        return false;
    }

    if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(mail)) ) {
        return false;

    }

    function seleccion(){
        var valor = document.querySelector('select').value;
        if( valor == null || valor == '0' ){
            alert("Debes seleccionar un tipo de bici.");
        }
    }
    seleccion();
}