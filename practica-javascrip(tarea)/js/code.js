//login ashley villanueva
function ingresar(){
    var usuario=document.getElementById('usuario').value;
    var clave=document.getElementById('password').value;
    
     if(usuario==""){
         alert('aun no a ingresado su usuario');
         return false;
     }   
     if(clave==""){
        alert('aun no a ingresado su clave');
         return false;
     }
     
    //usuario y clave ;
    if(usuario=="certus"  && clave=="12345678"){
        alert('Bienvenido a Certus :');
        window.open('principal.html','height=750px, width=800px');
        alert('Ingrese sus Datos');
    }else{
        alert('Su usuario o contraseña son incorrectos : Reintentar');
    }
    } 
    //fin login
    //pagina2(principal)
    //codigo-cliente-dni-direccion-provincia-departamento y distrito

    function registrar(){
        var codigo=document.getElementById('codigo').value;
        var cliente=document.getElementById('cliente').value;
        var dni=document.getElementById('dni').value;
        var direccion=document.getElementById('direccion').value;
        var provincia=document.getElementById('provincia').value;
        var departamento=document.getElementById('departamento').value;
        var distrito=document.getElementById('distrito').value;

    if(codigo==""){
        alert('usted no ha digitado el codigo');
        
    }
    if(codigo=="12345678"){
        alert('codigo verificado');
       
    }
    if (cliente==""){
        alert('usted no ha digitado el Cliete ');
        
    }
    if(dni==""){
        alert('usted no ha registrado el Codigo');
        
    }
    if(direccion==""){
        alert('usted no ha registrado su DNI');
        
    }
    if(provincia==""){
        alert('usted no ha registrado su Provincia');
        
    }
    if(departamento==""){
        alert('usted no ha registrado su Departamento');
        
    }
    if(distrito==""){
        alert('usted no ha registrado su Distrito');
        
    }if(codigo=="12345678"  && cliente=="" && dni=="" && direction==""&& provincia=="" && departamento==""&& distrito==""){
        alert('Sus datos se han procesado correctamente :');
    }
}
//fin registro
    // funciones
    function sololetras(event){
        if (event.keyCode >48 && event.keyCode  <62) event.returnValue = false;
     } 
     function solonumeros(event){
       if (event.keyCode >65 && event.keyCode <126) event.returnValue = false;
    
      }
   
    ////////////////////////////////////////////////////////////////
    var va=/[a-z]/ 

    function validar(usuario) {
            var correcto = va.exec(usuario.value);
        if (correcto) {
             alert('success');  
             return false;   
       } else {
          alert('error de correo');
          telefono.value = '' 
          return false;       
        }         
      } 
     
    
      

     // patron : numeros

     var re2=/[0-9]/
     function numeros(password){
    
        var perfect = re2.exec(password.value);
        if (perfect) {
             alert('perfect'); 
             return false;
       } else {
          alert('error'); 
          password.value = ''   
          return false;   
        }   




}
