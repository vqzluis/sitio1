function fnValidar02()
{
    let xTexto = document.getElementById("txtTex").value;
    if (xTexto == "" || /^\s+$/.test(xTexto)) {
        alert("escriba texto");
        return false;
    }

    let xTurno = document.getElementsByName("rdiTurno");
	let valorTurno ="";
	let eligioTurno=false;
	for(let i=0; i<xTurno.length; i++){
		if(xTurno[i].checked){
			valorTurno =xTurno[i].value;
			eligioTurno = true
		}
	}
    if(!eligioTurno){
		alert("Elija su Turno");
		return false;
	} 
    
    let elementoPref = document.getElementsByName("ckPre");
	let valorElegidoPreferencia="";
	let elegioPreferencia=false;
	for(let i=0; i<elementoPref.length; i++){
		if(elementoPref[i].checked){
			valorElegidoPreferencia=elementoPref[i].value;
			elegioPreferencia = true
		}
	}
    if(!elegioPreferencia){
		alert("Elija tres Preferencias");
		return false;
	} 

    return true;   
}