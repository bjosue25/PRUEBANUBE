function validar() { 
    nombre = document.getElementById("nombre").value;
            apellido = document.getElementById("apellido").value;  
            telefono = document.getElementById("telefono").value;
            correo = document.getElementById("correo").value;
            pass1 = document.getElementById('pass1').value;
            pass2 = document.getElementById('pass2').value;


            coveriferacion =/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
        cantele = /^\d{10}$/;
        expresioncontra = /^.{8,16}$/;
        
        if(!expresioncontra.test(pass1)){
                alert("La contraseña debe contener entre 8 a 16 digitos");
                return false;
                }

    if (nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)){ 
    alert("El campo de nombres no puede estar vacio "); 
    return false; 
    }


    if (apellido == null || apellido.length == 0 || /^\+$/.test(apellido)){ 
    alert("El campo apellidos no puede estar vacio"); 
    return false; 
    }

            

            if(!cantele.test(telefono))  {  
    alert("El campo telefono debe constar con un minimo de 10"); 
    return false; 
    }
             
            
            if(!coveriferacion.test(correo)){
                alert("Correo invalido");
                return false;
    }
             if (pass1 != pass2) {
                alert("Las contraseñas no coinciden"); 
                return false;
             }

        }