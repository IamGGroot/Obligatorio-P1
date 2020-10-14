document.querySelector("#btnAcceso").addEventListener("click",ingreso);
document.querySelector("#sellogin").addEventListener("change", ingreso); // Cuando el select de tipo de usuario cambia ejecuta ingreso()
ingreso();
function ingreso()
{
let tipoUsuario = document.querySelector("#sellogin").value;  // Toma el valor del select tipo de usuario y lo guarda en la variable tipoUsuario.

mostrarInmueblesListadosYCalificaciones(tipoUsuario); // ESQUELETO HECHO
mostrarInmueblesListadosVerMas(tipoUsuario); // SIN HACER
mostrarInmueblesPorPropiedad(tipoUsuario); // SIN HACER
mostrarHabilitarInmuebles(tipoUsuario); // SIN HACER
//mostrarRegistroInmubles(tipoUsuario); // SIN HACER
mostrarOrdenarInmuebles(tipoUsuario);// ESQUELETO HECHO
mostrarReporteInmuebles(tipoUsuario);//SIN HACER

mostrarAcceso(tipoUsuario); // ESQUELETO HECHO
mostrarRegistro(tipoUsuario);// ESQUELETO HECHO
mostrarSeleccionarMoneda(tipoUsuario);// ESQUELETEO HECHO
mostrarCotizacion(tipoUsuario);// ESQUELETO HECHO
/*mostrarDarAltaAnfitrion(tipoUsuario);// SIN HACER
mostrarCerrarSesion(tipoUsuario);// 

mostrarRealizarReserva(tipoUsuario);// SIN HACER
mostrarConsultarReserva(tipoUsuario);// SIN HACER
mostrarRelizarCalificacion(tipoUsuario);// SIN HACER
*/
}
function mostrarAcceso(user) {

 if (user=="Visitante") 
 {
 document.querySelector("#btnSalir").style.display = "none";
 }  
 if (user=="Huesped") 
 {
    document.querySelector("#btnSalir").style.display = "inline"; 
 }  
 if (user=="Anfitrion") 
 {
    document.querySelector("#btnSalir").style.display = "inline"; 
 }  
 if (user=="Administrador") 
 {
    document.querySelector("#btnSalir").style.display = "inline"; 
 }
}
function mostrarRegistro(user)
{
    if (user=="Visitante") 
    {
        document.querySelector("#divNOREG").style.display = "block";
        document.querySelector("#divREG").style.display = "block";
    }  
    if (user=="Huesped") 
    {
        document.querySelector("#divNOREG").style.display = "none";
        document.querySelector("#divREG").style.display = "none";
    }  
    if (user=="Anfitrion") 
    {
        document.querySelector("#divNOREG").style.display = "none";
        document.querySelector("#divREG").style.display = "none";
    }  
    if (user=="Administrador") 
    {
        document.querySelector("#divNOREG").style.display = "none";
        document.querySelector("#divREG").style.display = "none";
    }
}
function mostrarSeleccionarMoneda(user)
{
    document.querySelector("#selCotiazacion").selectedIndex = 0; //SETEA LA COTIZACION EN PESOS PORQUE SI VIENE SETEADA DESDE DOLARES PUEDE QUE OTRO USUARIO VEA EL VALOR EN DOLARES 
    if (user=="Visitante") 
    {
        document.querySelector("#selCotiazacion").style.display = "inline";
        document.querySelector("#selCotiazacion").options[1].style.display = "";
    }  
    if (user=="Huesped") 
    {
        document.querySelector("#selCotiazacion").style.display = "inline";
        document.querySelector("#selCotiazacion").options[1].style.display = "";
    }  
    if (user=="Anfitrion") 
    {
        document.querySelector("#selCotiazacion").style.display = "inline";
        document.querySelector("#selCotiazacion").options[1].style.display = "none"
    }  
    if (user=="Administrador") 
    {
        document.querySelector("#selCotiazacion").style.display = "none";
        document.querySelector("#selCotiazacion").options[1].style.display = "none"
    }
}  
function mostrarCotizacion(user)
{
    if (user=="Visitante") 
    {
        document.querySelector("#divCotizar").style.display = "none";
        
    }  
    if (user=="Huesped") 
    {
        document.querySelector("#divCotizar").style.display = "none";
    }  
    if (user=="Anfitrion") 
    {
        document.querySelector("#divCotizar").style.display = "none";
    }  
    if (user=="Administrador") 
    {
        document.querySelector("#divCotizar").style.display = "inline";
    }
}  
function mostrarReporteInmuebles(user)
{
    if (user=="Visitante") 
    {
        document.querySelector("#divReporteInmueble").style.display = "none";
        
    }  
    if (user=="Huesped") 
    {
        document.querySelector("#divReporteInmueble").style.display = "none";
    }  
    if (user=="Anfitrion") 
    {
        document.querySelector("#divReporteInmueble").style.display = "none";
    }  
    if (user=="Administrador") 
    {
        document.querySelector("#divReporteInmueble").style.display = "inline";
    }

}
function mostrarInmueblesListadosYCalificaciones(user)
{
    if (user==="Visitante") 
    {
        document.querySelector("#divInmuebles").innerHTML = ` <table border=1>
        <tr>
          <th>Precio propiedad</th>
          <th>$150</th>
        </tr>
        <tr>
          <td>Calificacion</td>
          <td>5</td>
          
        </tr>
      </table>
      <img src="img/casa1.jpg">`;

        
    }  
    if (user==="Huesped") 
    {
        document.querySelector("#divInmuebles").innerHTML =         document.querySelector("#divInmuebles").innerHTML = ` <table border=1>
        <tr>
          <th>Precio propiedad</th>
          <th>$150</th>
        </tr>
        <tr>
          <td>Calificacion</td>
          <td>5</td>
          
        </tr>
      </table>
      <img src="img/casa1.jpg">`;
    }  
    if (user==="Anfitrion") 
    {
        document.querySelector("#divInmuebles").innerHTML = "ACA SE MUESTRAN SOLOS LAS CASAS DE SU PROPIEDAD";
    }  
    if (user==="Administrador") 
    {
        document.querySelector("#divInmuebles").innerHTML = "";
    }
}
function mostrarOrdenarInmuebles(user)
{
    if (user=="Visitante") 
    {
        document.querySelector("#selOrdenar").style.display = "inline";
        document.querySelector("#txtBusqueda").style.display = "inline";
    }  
    if (user=="Huesped") 
    {
        document.querySelector("#selOrdenar").style.display = "inline";
        document.querySelector("#txtBusqueda").style.display = "inline";
    }  
    if (user=="Anfitrion") 
    {
        document.querySelector("#selOrdenar").style.display = "none";
        document.querySelector("#txtBusqueda").style.display = "none";
    }  
    if (user=="Administrador") 
    {
        document.querySelector("#selOrdenar").style.display = "none";
        document.querySelector("#txtBusqueda").style.display = "none";
    }
}
function mostrarInmueblesPorPropiedad(user)
{
    if (user=="Visitante") 
    {
        document.querySelector("#btnVerInmueblesAnfitrion").style.display = "none";
        
    }  
    if (user=="Huesped") 
    {
        document.querySelector("#btnVerInmueblesAnfitrion").style.display = "none";
    }  
    if (user=="Anfitrion") 
    {
        document.querySelector("#btnVerInmueblesAnfitrion").style.display = "inline";
    }  
    if (user=="Administrador") 
    {
        document.querySelector("#btnVerInmueblesAnfitrion").style.display = "none";
    }
}
function mostrarInmueblesListadosVerMas(user)
{
    if (user=="Visitante") 
    {
        document.querySelector("#divVerMas").style.display = "none";
        
    }  
    if (user=="Huesped") 
    {
        document.querySelector("#divVerMas").style.display = "block";
    }  
    if (user=="Anfitrion") 
    {
        document.querySelector("#divVerMas").style.display = "none"; // ME QUEDA DUDA DE SINO MUETRA EL VER MAS DE SUS PROPIAS PROPIEDADES
    }  
    if (user=="Administrador") 
    {
        document.querySelector("#divVerMas").style.display = "none";
    }
}
function mostrarHabilitarInmuebles(user)
{
    if (user=="Visitante") 
    {
        document.querySelector("#divHabilitarInmueble").style.display = "none";
        
    }  
    if (user=="Huesped") 
    {
        document.querySelector("#divHabilitarInmueble").style.display = "none";
    }  
    if (user=="Anfitrion") 
    {
        document.querySelector("#divHabilitarInmueble").style.display = "block"; 
    }  
    if (user=="Administrador") 
    {
        document.querySelector("#divHabilitarInmueble").style.display = "none";
    }
}