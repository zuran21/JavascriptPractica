function registrar(){
  var codigo=document.getElementById('codigo').value;
  
if(codigo==""){
  alert('usted no ha digitado el codigo');
  return false;
}
if(codigo=="12345678"){
  alert('codigo verificado');
  return false;
}
if (cliente==""){
  alert('usted no ha digitado el Cliete ');
  return false;
}
if(dni==""){
  alert('usted no ha registrado el Codigo');
  return false;
}
if(direccion==""){
  alert('usted no ha registrado su DNI');
  return false;
}
if(provincia==""){
  alert('usted no ha registrado su Provincia');
  return false;
}
if(departamento==""){
  alert('usted no ha registrado su Departamento');
  return false;
}
if(distrito==""){
  alert('usted no ha registrado su Distrito');
  return false;
}if(codigo=="12345678"  && cliente=="" && dni=="" && direction==""&& provincia=="" && departamento==""&& distrito==""){
  alert('Sus datos se han procesado correctamente :');
}
}
function sololetras(event){
  if (event.keyCode >48 && event.keyCode  <62) event.returnValue = false;
} 
function solonumeros(event){
 if (event.keyCode >65 && event.keyCode <126) event.returnValue = false;

}