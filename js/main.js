function validateForm(){
    
    var letrasnormales = /^[A-Za-z\_\-\.\s\xF1\xD1]+$/;

    function Nombre(){

        var Nombre = document.getElementById("name").value;
        if(Nombre == null || Nombre.length == 0 || /^\s+$/.test(Nombre)) {
            var papa = document.getElementsByClassName('input-box')[0];
            var hijo = document.createElement('span');           
            var texto = document.createTextNode('Ingrese su nombre');
            hijo.appendChild(texto);
            papa.appendChild(hijo);
            return false;

        } else if(!letrasnormales.test(Nombre)){
            var papa = document.getElementsByClassName('input-box')[0];
            var hijo = document.createElement('span');           
            var texto = document.createTextNode('Debes ingresar solo letras');
            hijo.appendChild(texto);
            papa.appendChild(hijo);
            return  true;

        } else if (Nombre.charAt(0) != Nombre.charAt(0).toUpperCase()) {
            var papa = document.getElementsByClassName('input-box')[0];
            var hijo = document.createElement('span');           
            var texto = document.createTextNode('Debe comenzar con mayusculas');
            hijo.appendChild(texto);
            papa.appendChild(hijo);
        }
    }
    Nombre();

    function apellido(){

        var apellido = document.getElementById("lastname").value;
        if(apellido == null || apellido.length == 0 || /^\s+$/.test(apellido)) {
            var papa = document.getElementsByClassName('input-box')[1];
            var hijo = document.createElement('span');           
            var texto = document.createTextNode('Ingrese su apellido');
            hijo.appendChild(texto);
            papa.appendChild(hijo);
            return false;

        }else if(!letrasnormales.test(apellido)){
            var papa = document.getElementsByClassName('input-box')[1];
            var hijo = document.createElement('span');           
            var texto = document.createTextNode('Ingrese solo letras');
            hijo.appendChild(texo);
            papa.appendChild(hijo);
            return true;

        } else if (apellido.charAt(0) != apellido.charAt(0).toUpperCase()) {
            var papa = document.getElementsByClassName('input-box')[1];
            var hijo = document.createElement('span');           
            var texto = document.createTextNode('Debe comenzar con mayusculas');
            hijo.appendChild(texto);
            papa.appendChild(hijo);   
        }
    }
    apellido();

    function correo(){
        var caracteres = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
        var correo = document.getElementById('input-email').value;
        if(correo === null || correo.length === 0){
            var papa = document.getElementsByClassName('input-box')[2];
            var hijo = document.createElement('span');           
            var texto = document.createTextNode('Ingrese su correo electronico');
            hijo.appendChild(texto);
            papa.appendChild(hijo);
            return false;

        }else if(caracteres.test(correo)){
            var papa = document.getElementsByClassName('input-box')[2];
            var hijo = document.createElement('span');           
            var texto = document.createTextNode('Verifique su correo electronico');
            hijo.appendChild(texto);
            papa.appendChild(hijo);
            return true;
        }
    }
    correo();

    function contras(){
        var contras = document.getElementById('input-password').value;
        if(contras == null || contras.length === 0){
            var papa = document.getElementsByClassName('input-box')[3];
            var hijo = document.createElement('span');
            var texto = document.createTextNode('Ingrese una contraseña');
            hijo.appendChild(texto);
            papa.appendChild(hijo);
            return false;

        }else if (contras.length < 6) {
            var papa = document.getElementsByClassName('input-box')[3];
            var hijo = document.createElement('span');           
            var texto = document.createTextNode('La contraseña debe tener seis caracteres');
            hijo.appendChild(texto);
            papa.appendChild(hijo);
            return false;
        }
    }
    contras();

    function tipoBici(){
        var select = document.getElementsByTagName('select')[0];
        var tipo = select.value;
        var papa = document.getElementsByClassName('input-box')[4];
        var hijo = document.createElement('span');           
        var texto = document.createTextNode('Seleccione una opcion');
        hijo.appendChild(texto);
        papa.appendChild(hijo);
            return false;
        
        return tipo == 'urbana' || tipo == 'trekking' || tipo == 'electrica' || tipo == 'estatica';

    }
    tipoBici();

}
    validateForm();
