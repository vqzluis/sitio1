function fnValidar01()
{
    let xTexto1 = document.getElementById("1texto").value;
    if (xTexto1 == "" || /^\s+$/.test(xTexto1)) {
        alert("escriba su nombre");
        return false;
    }

    let xTexto2 = document.getElementById("2texto").value;
    if (xTexto2 == "") {
        alert("escriba su nombre");
        return false;
    }

    let xNro = document.getElementById("numer").value;
    if (xNro == "") {
        alert("escriba su edad");
        return false;
    }

    return true;   
}