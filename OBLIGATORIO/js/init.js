ingreso("Visitante");

document.querySelector("#selLogin").addEventListener("change", ingresofalso); // Cuando el select de tipo de usuario cambia ejecuta ingreso()

var userActual = document.querySelector("#selLogin").value;

function ingresofalso()
{  
    userActual = document.querySelector("#selLogin").value; 
    console.log()
    ingreso(userActual);
}
function ingreso(tipoUsuario) {
    userActual = tipoUsuario;
    mostrarInmueblesListadosYCalificaciones(tipoUsuario); // 
    mostrarInmueblesListadosVerMas(tipoUsuario); // 
    mostrarInmueblesPorPropiedad(tipoUsuario); // 
    mostrarHabilitarInmuebles(tipoUsuario); // 
    mostrarRegistroInmubles(tipoUsuario); // 
    mostrarOrdenarInmuebles(tipoUsuario);//  
    mostrarReporteInmuebles(tipoUsuario);// 
    mostrarAcceso(tipoUsuario); //  
    mostrarRegistro(tipoUsuario);//  
    mostrarSeleccionarMoneda(tipoUsuario);//  
    mostrarCotizacion(tipoUsuario);//  
    mostrarDarAltaAnfitrion(tipoUsuario);//  
    //mostrarCerrarSesion(tipoUsuario);// 
    mostrarRealizarReserva(tipoUsuario);//  
    //mostrarConsultarReserva(tipoUsuario);//  
    mostrarRelizarCalificacion(tipoUsuario);// 

}

function mostrarAcceso(user) {

    if (user === "Visitante") {
        document.querySelector("#btnSalir").style.display = "none";
    }
    if (user === "Huesped") {
        document.querySelector("#btnSalir").style.display = "inline";
    }
    if (user === "Anfitrion") {
        document.querySelector("#btnSalir").style.display = "inline";
    }
    if (user === "Administrador") {
        document.querySelector("#btnSalir").style.display = "inline";
    }

    

}

function mostrarRegistro(user) {
    if (user === "Visitante") {
        document.querySelector("#tituloReg").innerHTML = "Registro de nuevo Huésped"
        document.querySelector("#divNoReg").style.display = "block";
        document.querySelector("#divReg").style.display = "block";
    }
    if (user === "Huesped") {
        document.querySelector("#divNoReg").style.display = "none";
        document.querySelector("#divReg").style.display = "none";
    }
    if (user === "Anfitrion") {
        document.querySelector("#divNoReg").style.display = "none";
        document.querySelector("#divReg").style.display = "none";
    }
    if (user === "Administrador") {
        document.querySelector("#tituloReg").innerHTML = "Registro de nuevo Anfitrión"
        document.querySelector("#divNoReg").style.display = "block";
        document.querySelector("#divReg").style.display = "block";
    }
}
function mostrarSeleccionarMoneda(user) {
    document.querySelector("#selCotizacion").selectedIndex = 0; //SETEA LA COTIZACION EN PESOS PORQUE SI VIENE SETEADA DESDE DOLARES PUEDE QUE OTRO USUARIO VEA EL VALOR EN DOLARES 
    if (user === "Visitante") {
        document.querySelector("#selCotizacion").style.display = "inline";
        document.querySelector("#selCotizacion").options[1].style.display = "";
    }
    if (user === "Huesped") {
        document.querySelector("#selCotizacion").style.display = "inline";
        document.querySelector("#selCotizacion").options[1].style.display = "";
    }
    if (user === "Anfitrion") {
        document.querySelector("#selCotizacion").style.display = "inline";
        document.querySelector("#selCotizacion").options[1].style.display = "none"
    }
    if (user === "Administrador") {
        document.querySelector("#selCotizacion").style.display = "none";
        document.querySelector("#selCotizacion").options[1].style.display = "none"
    }
}
function mostrarCotizacion(user) {
    if (user === "Visitante") {
        document.querySelector("#divCotizar").style.display = "none";

    }
    if (user === "Huesped") {
        document.querySelector("#divCotizar").style.display = "none";
    }
    if (user === "Anfitrion") {
        document.querySelector("#divCotizar").style.display = "none";
    }
    if (user === "Administrador") {
        document.querySelector("#divCotizar").style.display = "inline";
    }
}
function mostrarReporteInmuebles(user) {
    if (user === "Visitante") {
        document.querySelector("#divReporteInmueble").style.display = "none";

    }
    if (user === "Huesped") {
        document.querySelector("#divReporteInmueble").style.display = "none";
    }
    if (user === "Anfitrion") {
        document.querySelector("#divReporteInmueble").style.display = "none";
    }
    if (user === "Administrador") {
        document.querySelector("#divReporteInmueble").style.display = "inline";
    }

}
function mostrarInmueblesListadosYCalificaciones(user) {    
 
    if (user === "Visitante") {
        document.querySelector("#divInmuebles").innerHTML = "";
        //ver mostrarTabla en acceso.js
  
    }
    if (user === "Huesped") {
        document.querySelector("#divInmuebles").innerHTML = ` <table border=1>
        <tr>
      
          <th>Título 1</th>
          
        </tr>
        <tr>
        <th>Descripción</th>
        <th>hermosa casa 1</th>
        </tr>
        <tr>
        <th>Ciudad</th>
        <th>Montevideo</th>
        </tr>
        <tr>
        
          <th>Precio por Noche</th>
          <th>$150</th>
        </tr>
        <tr>
          <th>Promedio de Calificacion</th>
          <th>5</th>
          
        </tr>
      </table>
      <img id="imagenActual" src="img/casa1.jpg">`;
    }
    if (user === "Anfitrion") {
        document.querySelector("#divInmuebles").innerHTML = "ACÁ SE MUESTRAN SOLOS LAS CASAS DE SU PROPIEDAD";
    }
    if (user === "Administrador") {
        document.querySelector("#divInmuebles").innerHTML = "";
    }
}
function mostrarOrdenarInmuebles(user) {
    if (user === "Visitante") {
        document.querySelector("#selOrdenar").style.display = "inline";
        document.querySelector("#txtBusqueda").style.display = "inline";
    }
    if (user === "Huesped") {
        document.querySelector("#selOrdenar").style.display = "inline";
        document.querySelector("#txtBusqueda").style.display = "inline";
    }
    if (user === "Anfitrion") {
        document.querySelector("#selOrdenar").style.display = "none";
        document.querySelector("#txtBusqueda").style.display = "none";
    }
    if (user === "Administrador") {
        document.querySelector("#selOrdenar").style.display = "none";
        document.querySelector("#txtBusqueda").style.display = "none";
    }
}
function mostrarInmueblesPorPropiedad(user) {
    if (user === "Visitante") {
        document.querySelector("#btnVerInmueblesAnfitrion").style.display = "none";
    }
    if (user === "Huesped") {
        document.querySelector("#btnVerInmueblesAnfitrion").style.display = "none";
    }
    if (user === "Anfitrion") {
        document.querySelector("#btnVerInmueblesAnfitrion").style.display = "inline";
    }
    if (user === "Administrador") {
        document.querySelector("#btnVerInmueblesAnfitrion").style.display = "none";
    }
}
function mostrarInmueblesListadosVerMas(user) {
    if (user === "Visitante") {
        document.querySelector("#divVerMas").style.display = "none";
    }
    if (user === "Huesped") {
        document.querySelector("#divVerMas").style.display = "block";
    }
    if (user === "Anfitrion") {
        document.querySelector("#divVerMas").style.display = "none";
    }
    if (user === "Administrador") {
        document.querySelector("#divVerMas").style.display = "none";
    }
}
function mostrarHabilitarInmuebles(user) {
    if (user === "Visitante") {
        document.querySelector("#divHabilitarInmueble").style.display = "none";

    }
    if (user === "Huesped") {
        document.querySelector("#divHabilitarInmueble").style.display = "none";
    }
    if (user === "Anfitrion") {
        document.querySelector("#divHabilitarInmueble").style.display = "block";
    }
    if (user === "Administrador") {
        document.querySelector("#divHabilitarInmueble").style.display = "none";
    }
}
function mostrarRegistroInmubles(user) {
    if (user === "Visitante") {
        document.querySelector("#divRegistrarInmueble").style.display = "none";
    }
    if (user === "Huesped") {
        document.querySelector("#divRegistrarInmueble").style.display = "none";
    }
    if (user === "Anfitrion") {
        document.querySelector("#divRegistrarInmueble").style.display = "inline";
    }
    if (user === "Administrador") {
        document.querySelector("#divRegistrarInmueble").style.display = "none";
    }
}
function mostrarDarAltaAnfitrion(user) {
    if (user === "Visitante") {
        document.querySelector("#btnAltaAnfitrion").style.display = "none";
    }
    if (user === "Huesped") {
        document.querySelector("#btnAltaAnfitrion").style.display = "none";
    }
    if (user === "Anfitrion") {
        document.querySelector("#btnAltaAnfitrion").style.display = "none";
    }
    if (user === "Administrador") {
        document.querySelector("#btnAltaAnfitrion").style.display = "block";
    }
}
function mostrarRealizarReserva(user) {
    if (user === "Visitante") {
        document.querySelector("#divReserva").style.display = "none";
    }
    if (user === "Huesped") {
        document.querySelector("#divReserva").style.display = "block";
    }
    if (user === "Anfitrion") {
        document.querySelector("#divReserva").style.display = "none";
    }
    if (user === "Administrador") {
        document.querySelector("#divReserva").style.display = "none";
    }
}

//function mostrarConsultarReserva(user)
//{}

function mostrarRelizarCalificacion(user) {
    if (user === "Visitante") {
        document.querySelector("#divCalificarReserva").style.display = "none";
    }
    if (user === "Huesped") {
        document.querySelector("#divCalificarReserva").style.display = "block";
    }
    if (user === "Anfitrion") {
        document.querySelector("#divCalificarReserva").style.display = "none";
    }
    if (user === "Administrador") {
        document.querySelector("#divCalificarReserva").style.display = "none";
    }
}
console.log("Init cargado")

