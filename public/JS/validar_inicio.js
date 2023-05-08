function validar(){
    
    var correo,apellido;
    correo= document.getElementById("Correo").value;
    contra= document.getElementById("Contra").value;

    
    expresioncontra= /^.{8,16}$/;
    
    expresioncorreo= /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

    
        if(!expresioncorreo.test(correo)){
        alert("Correo no valido");
        return false;
        }
        if(!expresioncontra.test(contra)){
            alert("La contraseña debe contener entre 8 a 16 digitos");
            return false;
            }

    }

    