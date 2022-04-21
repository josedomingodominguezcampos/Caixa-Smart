
var objeto_cambiar_html;

// --------------------------------------------------
    function WPDF_Facturas_Bloque(lista, celda_td) {
// -------------------------------------------------
    objeto_cambiar_html = document.getElementById(celda_td);
    if (objeto_cambiar_html) {
        if (!Mostrar_Pantalla_Esperando()) { return; }
        THERION.WSnego.PDF_Facturas_Bloque(lista, RPDF_Facturas_Bloque, OnError, OnTimeOut);
    }
}

// -------------------------------------
    function RPDF_Facturas_Bloque(arg) {
// -------------------------------------
    if (objeto_cambiar_html) { objeto_cambiar_html.innerHTML = arg; }
    if (!Quitar_Pantalla_Esperando()) { return false; }
}

// --------------------------------------------------
    function WPDF_Notas_Cargo_Bloque(lista, celda_td) {
// -------------------------------------------------
    objeto_cambiar_html = document.getElementById(celda_td);
    if (objeto_cambiar_html) {
        if (!Mostrar_Pantalla_Esperando()) { return; }
        THERION.WSnego.PDF_Notas_Cargo_Bloque(lista, RPDF_Notas_Cargo_Bloque, OnError, OnTimeOut);
    }
}

// -------------------------------------
    function RPDF_Notas_Cargo_Bloque(arg) {
// -------------------------------------
    if (objeto_cambiar_html) { objeto_cambiar_html.innerHTML = arg; }
    if (!Quitar_Pantalla_Esperando()) { return false; }
}

// --------------------------------------------------
    function WPDF_TLPC_Reclamacion(lista, celda_td) {
// -------------------------------------------------
    objeto_cambiar_html = document.getElementById(celda_td);
    if (objeto_cambiar_html) {
        if (!Mostrar_Pantalla_Esperando()) { return; }
        THERION.WSnego.PDF_TLPC_Reclamacion(lista, RPDF_TLPC_Reclamacion, OnError, OnTimeOut);
    }
}

// -------------------------------------
    function RPDF_TLPC_Reclamacion(arg) {
// -------------------------------------
    if (objeto_cambiar_html) { objeto_cambiar_html.innerHTML = arg; }
    if (!Quitar_Pantalla_Esperando()) { return false; }
}

// -------------------------------------------------------------
    function WPDF_Procedimiento(procedimiento, lista, celda_td) {
// -------------------------------------------------------------
    objeto_cambiar_html = document.getElementById(celda_td);
    if (objeto_cambiar_html) {
        if (!Mostrar_Pantalla_Esperando()) { return; }
        THERION.WSnego.PDF_Procedimiento(procedimiento, lista, celda_td, RPDF_Procedimiento, OnError, OnTimeOut);
    } else {
        alert("No encontrado el elemento : " + celda_td);
    }
}

// -------------------------------------
    function RPDF_Procedimiento(arg) {
// -------------------------------------
    if (objeto_cambiar_html) { objeto_cambiar_html.innerHTML = arg; }
    if (!Quitar_Pantalla_Esperando()) { return false; }
}

// -----------------------------------------------------
    function WEnviar_Email_Factura_Bloque(lista, email) {
// -------------------------------------------------
    if (!Mostrar_Pantalla_Esperando()) { return; }
    THERION.WSnego.Enviar_Email_Factura_Bloque(lista, email, REnviar_Email_Factura_Bloque, OnError, OnTimeOut);
}

// ----------------------------------------------------
    function REnviar_Email_Factura_Bloque(arg) {
// ----------------------------------------------------
    alert(arg);
    if (!Quitar_Pantalla_Esperando()) { return false; };
}

// -------------------------------------------------------
    function WEnviar_Email_Notas_Cargo_Bloque(lista, email) {
// -------------------------------------------------------
    if (!Mostrar_Pantalla_Esperando()) { return; }
    THERION.WSnego.Enviar_Email_Notas_Cargo_Bloque(lista, email, REnviar_Email_Notas_Cargo_Bloque, OnError, OnTimeOut);
}

// ----------------------------------------------------
    function REnviar_Email_Notas_Cargo_Bloque(arg) {
// ----------------------------------------------------
    alert(arg);
    if (!Quitar_Pantalla_Esperando()) { return false; };
}

// -----------------------------------------------------
    function WEnviar_Email_Factura_DKV_Bloque(lista, email) {
// -------------------------------------------------
    if (!Mostrar_Pantalla_Esperando()) { return; }
    THERION.WSnego.Enviar_Email_Factura_DKV_Bloque(lista, email, REnviar_Email_Factura_DKV_Bloque, OnError, OnTimeOut);
}

// ----------------------------------------------------
    function REnviar_Email_Factura_DKV_Bloque(arg) {
// ----------------------------------------------------

    alert(arg);
    if (!Quitar_Pantalla_Esperando()) { return false; }
}

// ----------------------------------------------------------
    function WCrear_Carga_Contable_Notas_Cargo(descripcion, lista) {
// ----------------------------------------------------------
    if (!Mostrar_Pantalla_Esperando()) { return; }
    THERION.WSnego.Crear_Carga_Contable_Notas_Cargo(descripcion, lista, RCrear_Carga_Contable_Notas_Cargo, OnError, OnTimeOut);
}

// ---------------------------------------------
    function RCrear_Carga_Contable_Notas_Cargo(arg) {
// ---------------------------------------------
    try {
        var resultado = valor_xml(arg, 'resultado');
        if (resultado == 'OK') { alert('Generada Carga Contable'); }
        else {
            var error = valor_xml(arg, 'error');
            alert(error);
        }
    }
    catch (e) { alert('Error ' + e.message); }
    finally { }

    if (!Refresca_Registro_Grid()) {return false;}
    if (!Quitar_Pantalla_Esperando()) {return false; }
}

// ----------------------------------------------------------
    function WCrear_Carga_Contable_VAT(descripcion, lista) {
// ----------------------------------------------------------
    if (!Mostrar_Pantalla_Esperando()) { return; }
    THERION.WSnego.Crear_Carga_Contable_VAT(descripcion, lista, RCrear_Carga_Contable_VAT, OnError, OnTimeOut);
}

// ---------------------------------------------
    function RCrear_Carga_Contable_VAT(arg) {
// ---------------------------------------------
    try {
        var resultado = valor_xml(arg, 'resultado');
        if (resultado == 'OK') {alert('Generada Carga Contable');}
        else {
            var error = valor_xml(arg, 'error');
            alert(error);
        }
    }
    catch (e) { alert('Error ' + e.message); }
    finally { }

    if (!Refresca_Registro_Grid()) {return false;}
    if (!Quitar_Pantalla_Esperando()) { return false; }
}

// ----------------------------------------------------------
    function WCrear_Carga_Contable_VIAVAT(descripcion, lista) {
// ----------------------------------------------------------
    if (!Mostrar_Pantalla_Esperando()) { return; }
    THERION.WSnego.Crear_Carga_Contable_VIAVAT(descripcion, lista, RCrear_Carga_Contable_VIAVAT, OnError, OnTimeOut);
}

// ---------------------------------------------
    function RCrear_Carga_Contable_VIAVAT(arg) {
// ---------------------------------------------
    try {
        var resultado = valor_xml(arg, 'resultado');
        if (resultado == 'OK') { alert('Generada Carga Contable'); }
        else {
            var error = valor_xml(arg, 'error');
            alert(error);
        }
    }
    catch (e) { alert('Error ' + e.message); }
    finally { }

    if (!Refresca_Registro_Grid()) {return false;}
    if (!Quitar_Pantalla_Esperando()) { return false; }
}

// ----------------------------------------------------------
    function WCrear_Remesa_VAT(descripcion, lista) {
// ----------------------------------------------------------
    if (!Mostrar_Pantalla_Esperando()) { return; }
    THERION.WSnego.Crear_Remesa_VAT(descripcion, lista, RCrear_Remesa_VAT, OnError, OnTimeOut);
}

// ---------------------------------------------
    function RCrear_Remesa_VAT(arg) {
// ---------------------------------------------
    try {
        var resultado = valor_xml(arg, 'resultado');
        if (resultado == 'OK') { alert('Generada Remesa'); }
        else {
            var error = valor_xml(arg, 'error');
            alert(error);
        }
    }
    catch (e) { alert('Error ' + e.message); }
    finally { }

    if (!Refresca_Registro_Grid()) {return false;}
    if (!Quitar_Pantalla_Esperando()) { return false; }
}

// ----------------------------------------------------------
    function WCrear_Remesa_Notas_Cargo_VAT(descripcion, lista) {
// ----------------------------------------------------------
    if (!Mostrar_Pantalla_Esperando()) { return; }
    THERION.WSnego.Crear_Remesa_Notas_Cargo_VAT(descripcion, lista, RCrear_Remesa_Notas_Cargo_VAT, OnError, OnTimeOut);
}

// ---------------------------------------------
    function RCrear_Remesa_Notas_Cargo_VAT(arg) {
// ---------------------------------------------
    try {
        var resultado = valor_xml(arg, 'resultado');
        if (resultado == 'OK') { alert('Generada Remesa'); }
        else {
            var error = valor_xml(arg, 'error');
            alert(error);
        }
    }
    catch (e) { alert('Error ' + e.message); }
    finally { }

    if (!Refresca_Registro_Grid()) {return false;}
    if (!Quitar_Pantalla_Esperando()) { return false; }
}

// ----------------------------------------------------------
    function WCrear_Remesa_VIAVAT(descripcion, lista) {
// ----------------------------------------------------------
    if (!Mostrar_Pantalla_Esperando()) { return; }
    THERION.WSnego.Crear_Remesa_VIAVAT(descripcion, lista, RCrear_Remesa_VIAVAT, OnError, OnTimeOut);
}

// ---------------------------------------------
    function RCrear_Remesa_VIAVAT(arg) {
// ---------------------------------------------
    try {
        var resultado = valor_xml(arg, 'resultado');
        if (resultado == 'OK') { alert('Generadas Remesas'); }
        else {
            var error = valor_xml(arg, 'error');
            alert(error);
        }
    }
    catch (e) { alert('Error ' + e.message); }
    finally { }

    if (!Refresca_Registro_Grid()) {return false;}
    if (!Quitar_Pantalla_Esperando()) { return false; }
}

// -----------------------------------------------------------------------
    function WBajar_Fichero_Carga_Contable_VAT(codigo_carga_contable) {
// -----------------------------------------------------------------------
    if (!Mostrar_Pantalla_Esperando()) { return; }
    THERION.WSnego.Bajar_Fichero_Carga_Contable_VAT(codigo_carga_contable, RBajar_Fichero_Carga_Contable_VAT, OnError, OnTimeOut);
}

// ---------------------------------------------
    function RBajar_Fichero_Carga_Contable_VAT(arg) {
// ---------------------------------------------
    
    if (!Quitar_Pantalla_Esperando()) { return false; }
    if (arg.substring(0, 5) == "ERROR") {
        alert(arg);
    }
    else {
        SaveToDisk("documentos/" + arg, arg)
    }
}

// -----------------------------------------------------------------------
    function WBajar_Fichero_Carga_Contable_Notas_Cargo(codigo_carga_contable) {
// -----------------------------------------------------------------------
    if (!Mostrar_Pantalla_Esperando()) { return; }
    THERION.WSnego.Bajar_Fichero_Carga_Contable_Notas_Cargo(codigo_carga_contable, RBajar_Fichero_Carga_Contable_Notas_Cargo, OnError, OnTimeOut);
}

// ---------------------------------------------
    function RBajar_Fichero_Carga_Contable_Notas_Cargo(arg) {
// ---------------------------------------------
    
    if (!Quitar_Pantalla_Esperando()) { return false; }
    if (arg.substring(0, 5) == "ERROR") {
        alert(arg);
    }
    else {
        SaveToDisk("documentos/" + arg, arg)
    }
}


// -----------------------------------------------------------------------
    function WBajar_Fichero_Carga_Contable_VIAVAT(codigo_carga_contable) {
// -----------------------------------------------------------------------
    if (!Mostrar_Pantalla_Esperando()) { return; }
    THERION.WSnego.Bajar_Fichero_Carga_Contable_VIAVAT(codigo_carga_contable, RBajar_Fichero_Carga_Contable_VIAVAT, OnError, OnTimeOut);
}

// ---------------------------------------------
    function RBajar_Fichero_Carga_Contable_VIAVAT(arg) {
// ---------------------------------------------
    
    if (!Quitar_Pantalla_Esperando()) { return false; }
    if (arg.substring(0, 5) == "ERROR") {
        alert(arg);
    }
    else {
        SaveToDisk("documentos/" + arg, arg)
    }
}

// ---------------------------------------------------------------
    function WGenerar_Carga_Contable_VIAVAT(descripcion, lista) {
// ---------------------------------------------------------------
    if (!Mostrar_Pantalla_Esperando()) { return; }
    THERION.WSnego.Generar_Carga_Contable_VIAVAT(descripcion, lista, RGenerar_Carga_Contable_VIAVAT, OnError, OnTimeOut);
}

// ----------------------------------------------------
    function RGenerar_Carga_Contable_VIAVAT(arg) {
// ----------------------------------------------------

    try {
        var resultado = valor_xml(arg, 'resultado');
        if (resultado == 'OK') { alert('Generada Carga Contable'); }
        else {
            var error = valor_xml(arg, 'error');
            alert(error);
        }
    }
    catch (e) { alert('Error ' + e.message); }
    finally { }

    if (!Refresca_Registro_Grid()) {return false;}
    if (!Quitar_Pantalla_Esperando()) { return false; }
}

// -----------------------------------------------------
    function WPDF_Facturas_DKV_Bloque(lista, celda_td) {
// -------------------------------------------------
    objeto_cambiar_html = document.getElementById(celda_td);
    if (objeto_cambiar_html) {
        if (!Mostrar_Pantalla_Esperando()) { return; }
        THERION.WSnego.PDF_Facturas_DKV_Bloque(lista, RPDF_Facturas_DKV_Bloque, OnError, OnTimeOut);
    }
}

// -------------------------------------
    function RPDF_Facturas_DKV_Bloque(arg) {
// -------------------------------------
    if (objeto_cambiar_html) { objeto_cambiar_html.innerHTML = arg; }
    if (!Quitar_Pantalla_Esperando()) { return false; }
}

// -------------------------------------------------------
    function WCambiar_Fecha_Factura(codigo, celda, fecha) {
// -------------------------------------------------------
    objeto_cambiar_html = document.getElementById(celda);
    if (objeto_cambiar_html) {
        if (!Mostrar_Pantalla_Esperando()) { return; }
        THERION.WSnego.Cambiar_Fecha_Factura(codigo, fecha, RCambiar_Fecha_Factura, OnError, OnTimeOut);
    }
}

// -------------------------------------
    function RCambiar_Fecha_Factura(arg) {
// -------------------------------------
    if (objeto_cambiar_html) { objeto_cambiar_html.innerHTML = arg; }
    if (arg.substring(0, 5).toUpperCase() == "ERROR") {
        alert(arg);
    }
    if (!Quitar_Pantalla_Esperando()) { return false; }
    if (!Refresca_Registro_Grid()) {return false;}

}

// -------------------------------------------------------
    function WCambiar_Fecha_Factura_DKV(codigo, celda, fecha) {
// -------------------------------------------------------
    objeto_cambiar_html = document.getElementById(celda);
    if (objeto_cambiar_html) {
        if (!Mostrar_Pantalla_Esperando()) { return; }
        THERION.WSnego.Cambiar_Fecha_Factura_DKV(codigo, fecha, RCambiar_Fecha_Factura_DKV, OnError, OnTimeOut);
    }
}

// -------------------------------------
    function RCambiar_Fecha_Factura_DKV(arg) {
// -------------------------------------
    if (objeto_cambiar_html) { objeto_cambiar_html.innerHTML = arg; }
    if (arg.substring(0, 5).toUpperCase() == "ERROR") {
        alert(arg);
    }
    if (!Quitar_Pantalla_Esperando()) { return false; }
    if (!Refresca_Registro_Grid()) {return false;}

}

// -------------------------------------------------------
    function WCambiar_Fecha_Concertada_Remesa_VAT(codigo, celda, fecha) {
// -------------------------------------------------------
    objeto_cambiar_html = document.getElementById(celda);
    if (objeto_cambiar_html) {
        if (!Mostrar_Pantalla_Esperando()) { return; }
        THERION.WSnego.Cambiar_Fecha_Concertada_Remesa_VAT(codigo, fecha, RCambiar_Fecha_Concertada_Remesa_VAT, OnError, OnTimeOut);
    }
}

// --------------------------------------------------------
    function RCambiar_Fecha_Concertada_Remesa_VAT(arg) {
// --------------------------------------------------------
    if (objeto_cambiar_html) { objeto_cambiar_html.innerHTML = arg; }
    if (arg.substring(0, 5).toUpperCase() == "ERROR") {
        alert(arg);
    }
    if (!Quitar_Pantalla_Esperando()) { return false; }
    if (!Refresca_Registro_Grid()) {return false;}

}

// --------------------------------------------------------------------------
    function WCambiar_Fecha_Concertada_Remesa_VIAVAT(codigo, celda, fecha) {
// -------------------------------------------------------------------------
    objeto_cambiar_html = document.getElementById(celda);
    if (objeto_cambiar_html) {
        if (!Mostrar_Pantalla_Esperando()) { return; }
        THERION.WSnego.Cambiar_Fecha_Concertada_Remesa_VIAVAT(codigo, fecha, RCambiar_Fecha_Concertada_Remesa_VIAVAT, OnError, OnTimeOut);
    }
}

// ------------------------------------------------------------
    function RCambiar_Fecha_Concertada_Remesa_VIAVAT(arg) {
// ------------------------------------------------------------
    if (objeto_cambiar_html) { objeto_cambiar_html.innerHTML = arg; }
    if (arg.substring(0, 5).toUpperCase() == "ERROR") {
        alert(arg);
    }
    if (!Quitar_Pantalla_Esperando()) { return false; }
    if (!Refresca_Registro_Grid()) {return false;}
}

// -------------------------------------------------------
    function WEnviar_Email_Factura(codigo, celda, email) {
// -------------------------------------------------------

    objeto_cambiar_html = document.getElementById(celda);
    if (objeto_cambiar_html) {
        if (!Mostrar_Pantalla_Esperando()) { return; }
        THERION.WSnego.Enviar_Email_Factura(codigo, email, REnviar_Email_Factura, OnError, OnTimeOut);
    }
}

// -------------------------------------
    function REnviar_Email_Factura(arg) {
// -------------------------------------
    if (objeto_cambiar_html) { objeto_cambiar_html.innerHTML = arg; }
    alert(arg);
    if (!Quitar_Pantalla_Esperando()) { return false; }
    if (!Refresca_Registro_Grid()) {return false;}
}

// -------------------------------------------------------
    function WEnviar_Email_Nota_Cargo(codigo, celda, email) {
// -------------------------------------------------------

    objeto_cambiar_html = document.getElementById(celda);
    if (objeto_cambiar_html) {
        if (!Mostrar_Pantalla_Esperando()) { return; }
        THERION.WSnego.Enviar_Email_Nota_Cargo(codigo, email, REnviar_Email_Nota_Cargo, OnError, OnTimeOut);
    }
}

// -------------------------------------
    function REnviar_Email_Nota_Cargo(arg) {
// -------------------------------------
    if (objeto_cambiar_html) { objeto_cambiar_html.innerHTML = arg; }
    alert(arg);
    if (!Quitar_Pantalla_Esperando()) { return false; }
    if (!Refresca_Registro_Grid()) {return false;}
}

// ----------------------------------
    function WVer_Fichero_Sistema(codigo) {
// ----------------------------------
    if (!Mostrar_Pantalla_Esperando()) { return; }
    THERION.WSnego.Ver_Fichero_Sistema(codigo, RVer_Fichero_Sistema, OnError, OnTimeOut);
}

// -----------------------------------------
    function RVer_Fichero_Sistema(arg) {
// -----------------------------------------

    var newURL = "";

    try {
        var resultado = valor_xml(arg, 'resultado');

        if (resultado == 'OK') {
            var fichero = valor_xml(arg, 'fichero');
            if (fichero != '') {
                var path = window.location.href;
                var n = path.lastIndexOf("/");
                newURL = path.substring(0, n) + "/documentos/" + fichero;
                window.open(newURL);
                setTimeout(function () { WBorrar_Fichero_Servidor(fichero, "XX") }, 30000);
            }
            else {
                alert("Imposible Acceso al Fichero");
            }
        }
        else {
            var error = valor_xml(arg, 'error');
            alert(error);
        }
        if (!Quitar_Pantalla_Esperando()) { return false; }
        return false;
    }
    catch (e) { alert('Error en fichero: ' + newURL + "  " + e.message); }
    finally { }
}

// ----------------------------------
    function WVer_Factura(codigo) {
// ----------------------------------
    if (!Mostrar_Pantalla_Esperando()) { return; }
    THERION.WSnego.Ver_Factura(codigo, RVer_Factura, OnError, OnTimeOut);
}

// --------------------------------
    function RVer_Factura(arg) {
// --------------------------------

    var newURL = "";

    try {
        var resultado = valor_xml(arg, 'resultado');

        if (resultado == 'OK') {
            var fichero = valor_xml(arg, 'fichero');
            if (fichero != '') {
                var path=window.location.href;
                var n = path.lastIndexOf("/");
                newURL = path.substring(0, n) + "/documentos/" + fichero;
                window.open(newURL);
                setTimeout(function () { WBorrar_Fichero_Servidor(fichero, "XX") }, 30000);
            }
            else {
                alert("Imposible Acceso al Fichero");
            }
        }
        else {
            var error = valor_xml(arg, 'error');
            alert(error);
        }
        if (!Quitar_Pantalla_Esperando()) { return false; }
        return false;
    }
    catch (e) { alert('Error en fichero: ' + newURL + "  " + e.message); }
    finally {}
}


// ----------------------------------
    function WVer_Nota_Cargo(codigo) {
// ----------------------------------
    if (!Mostrar_Pantalla_Esperando()) { return; }
    THERION.WSnego.Ver_Nota_Cargo(codigo, RVer_Nota_Cargo, OnError, OnTimeOut);
}

// --------------------------------
    function RVer_Nota_Cargo(arg) {
// --------------------------------

    var newURL = "";

    try {
        var resultado = valor_xml(arg, 'resultado');

        if (resultado == 'OK') {
            var fichero = valor_xml(arg, 'fichero');
            if (fichero != '') {
                var path = window.location.href;
                var n = path.lastIndexOf("/");
                newURL = path.substring(0, n) + "/documentos/" + fichero;
                window.open(newURL);
                setTimeout(function () { WBorrar_Fichero_Servidor(fichero, "XX") }, 30000);
            }
            else {
                alert("Imposible Acceso al Fichero");
            }
        }
        else {
            var error = valor_xml(arg, 'error');
            alert(error);
        }
        if (!Quitar_Pantalla_Esperando()) { return false; }
        return false;
    }
    catch (e) { alert('Error en fichero: ' + newURL + "  " + e.message); }
    finally { }
}

// ----------------------------------
    function WVer_Factura_DKV(codigo) {
// ----------------------------------   

    if (!Mostrar_Pantalla_Esperando()) { return; }
    THERION.WSnego.Ver_Factura_DKV(codigo, RVer_Factura_DKV, OnError, OnTimeOut);
}

// --------------------------------
    function RVer_Factura_DKV(arg) {
// --------------------------------

var fichero = "";
try {
        var resultado = valor_xml(arg, 'resultado');
        if (resultado == 'OK') {
            fichero = valor_xml(arg, 'fichero');
            if (fichero != '') {
                var path = window.location.href;
                var n = path.lastIndexOf("/");
                newURL = path.substring(0, n) + "/documentos/" + fichero;
                window.open(newURL);
                setTimeout(function () { WBorrar_Fichero_Servidor(fichero, "XX") }, 30000);
            }
            else {
                alert("Imposible Acceso al Fichero");
            }
        }
        else {
            var error = valor_xml(arg, 'error');
            alert(error);
        }
        if (!Quitar_Pantalla_Esperando()) { return false; }
        return false;
    }
    catch (e) {alert('Error en fichero: ' + fichero + "  " + e.message); }
    finally {}
}

// -------------------------------------------------------
    function WEnviar_Email_Factura_DKV(codigo, celda, email) {
// -------------------------------------------------------

    objeto_cambiar_html = document.getElementById(celda);
    if (objeto_cambiar_html) {
        if (!Mostrar_Pantalla_Esperando()) { return; }
        THERION.WSnego.Enviar_Email_Factura_DKV(codigo, email, REnviar_Email_Factura_DKV, OnError, OnTimeOut);
    }
}

// -------------------------------------
    function REnviar_Email_Factura_DKV(arg) {
// -------------------------------------
    if (objeto_cambiar_html) { objeto_cambiar_html.innerHTML = arg; }
    alert(arg);
    if (!Quitar_Pantalla_Esperando()) { return false; }
    if (!Refresca_Registro_Grid()) {return false;}
}

// -------------------------------------------------
   function WGenerar_Factura(codigo, celda) {
// -------------------------------------------------
    objeto_cambiar_html = document.getElementById(celda);
    if (objeto_cambiar_html) {
        if (!Mostrar_Pantalla_Esperando()) { return; }
        THERION.WSnego.Generar_Factura(codigo, RGenerar_Factura, OnError, OnTimeOut);
    }
}

// -------------------------------------
    function RGenerar_Factura(arg) {
// -------------------------------------
    if (objeto_cambiar_html) { objeto_cambiar_html.innerHTML = arg; }
    alert(arg);
    if (!Quitar_Pantalla_Esperando()) { return false; }
    if (!Refresca_Registro_Grid()) {return false;}
}

// -------------------------------------------------
    function WGenerar_Factura_DKV(codigo, celda) {
// -------------------------------------------------
    objeto_cambiar_html = document.getElementById(celda);
    if (objeto_cambiar_html) {
        if (!Mostrar_Pantalla_Esperando()) { return; }
        THERION.WSnego.Generar_Factura_DKV(codigo, RGenerar_Factura_DKV, OnError, OnTimeOut);
    }
}

// -------------------------------------
    function RGenerar_Factura_DKV(arg) {
// -------------------------------------
    if (objeto_cambiar_html) { objeto_cambiar_html.innerHTML = arg };
    alert(arg);
    if (!Quitar_Pantalla_Esperando()) { return false; }
    if (!Refresca_Registro_Grid()) {return false;}
}

// -------------------------------------------------
    function WActualizar_Factura(codigo, celda) {
// -------------------------------------------------
    objeto_cambiar_html = document.getElementById(celda);
    if (objeto_cambiar_html) {
        if (!Mostrar_Pantalla_Esperando()) { return; }
        THERION.WSnego.Actualizar_Factura(codigo, RActualizar_Factura, OnError, OnTimeOut);
    }
}

// -------------------------------------
    function RActualizar_Factura(arg) {
// -------------------------------------
    if (objeto_cambiar_html) { objeto_cambiar_html.innerHTML = arg; }
    alert(arg);
    if (!Quitar_Pantalla_Esperando()) { return false; }
    if (!Refresca_Registro_Grid()) {return false;}
}

// -------------------------------------------------
    function WActualizar_Factura_DKV(codigo, celda) {
// -------------------------------------------------
    objeto_cambiar_html = document.getElementById(celda);
    if (objeto_cambiar_html) {
        if (!Mostrar_Pantalla_Esperando()) { return; }
        THERION.WSnego.Actualizar_Factura_DKV(codigo, RActualizar_Factura_DKV, OnError, OnTimeOut);
    }
}

// -------------------------------------
    function RActualizar_Factura_DKV(arg) {
// -------------------------------------
    if (objeto_cambiar_html) { objeto_cambiar_html.innerHTML = arg; }
    alert(arg);
    if (!Quitar_Pantalla_Esperando()) { return false; }
    if (!Refresca_Registro_Grid()) {return false;}
}

// -------------------------------------------------
    function WBorrar_Factura(codigo, celda) {
// -------------------------------------------------
    objeto_cambiar_html = document.getElementById(celda);
    if (objeto_cambiar_html) {
        if (!Mostrar_Pantalla_Esperando()) { return; }
        THERION.WSnego.Borrar_Factura(codigo, RBorrar_Factura, OnError, OnTimeOut);
    }
}

// -------------------------------------
    function RBorrar_Factura(arg) {
// -------------------------------------
    if (objeto_cambiar_html) { objeto_cambiar_html.innerHTML = arg; }
    alert(arg);
    if (!Quitar_Pantalla_Esperando()) { return false; }
    if (!WGrid_Tabla()) { return false; };  // Reescribe Grid
}

// -------------------------------------------------
    function WAnular_Remesa(codigo_remesa) {
// -------------------------------------------------
    if (!Mostrar_Pantalla_Esperando()) { return; }
    THERION.WSnego.Anular_Remesa(codigo_remesa, RAnular_Remesa, OnError, OnTimeOut);
}

// -------------------------------------
    function RAnular_Remesa(arg) {
// -------------------------------------
        if (!Quitar_Pantalla_Esperando()) { return false; }
        if (arg == 'OK') {alert("Remesa Anulada");} else {alert(arg);}
        if (!Refresca_Registro_Grid()) { return false; }
    }

// -------------------------------------------------
    function WBorrar_Remesa(codigo_remesa) {
// -------------------------------------------------
    if (!Mostrar_Pantalla_Esperando()) { return; }
    THERION.WSnego.Borrar_Remesa(codigo_remesa, RBorrar_Remesa, OnError, OnTimeOut);
}

// -------------------------------------
    function RBorrar_Remesa(arg) {
// -------------------------------------
    
    if (!Quitar_Pantalla_Esperando()) { return false; }
    if (arg == 'OK') { alert("Remesa Borrada") } else { alert(arg); }
    if (!WGrid_Tabla()) { return false; };  // Reescribe Grid

}

// -------------------------------------------------
    function WDefecto_Remesa(codigo_remesa) {
 // -------------------------------------------------
    if (!Mostrar_Pantalla_Esperando()) { return; }
    THERION.WSnego.Defecto_Remesa(codigo_remesa, RDefecto_Remesa, OnError, OnTimeOut);
}

// -------------------------------------
    function RDefecto_Remesa(arg) {
// -------------------------------------
    
    if (!Quitar_Pantalla_Esperando()) { return false; };
    if (arg.substring(0, 2) == "OK") {if (arg != "OK") {alert(arg); }} else {alert(arg);}
    if (!Refresca_Registro_Grid()) { return false; }
    }

// -------------------------------------------------
    function WEmitir_Remesa_Banco(codigo_remesa) {
// -------------------------------------------------
    if (!Mostrar_Pantalla_Esperando()) { return; }
    THERION.WSnego.Emitir_Remesa_Banco(codigo_remesa, REmitir_Remesa_Banco, OnError, OnTimeOut);
}

// -------------------------------------
    function REmitir_Remesa_Banco(arg) {
// -------------------------------------

    if (!Quitar_Pantalla_Esperando()) { return false; }
    if (arg.substring(0, 2) == "OK") {if (arg != "OK") {alert(arg);}} else { alert(arg);}
    if (!Refresca_Registro_Grid()) { return false; }
    }

// -------------------------------------------------
    function WGenerar_Fichero_Remesa_C19(codigo_remesa) {
// -------------------------------------------------
    if (!Mostrar_Pantalla_Esperando()) { return; }
    THERION.WSnego.Generar_Fichero_Remesa_C19(codigo_remesa, RGenerar_Fichero_Remesa_C19, OnError, OnTimeOut);
}

// --------------------------------------------
    function RGenerar_Fichero_Remesa_C19(arg) {
// --------------------------------------------
    if (!Quitar_Pantalla_Esperando()) { return false; }
    if (arg == 'OK') {alert("Fichero de Remesa Generado");} else {alert(arg);}
    if (!Refresca_Registro_Grid()) { return false; }
}


// ---------------------------------------------------------------
    function WGenerar_Fichero_Remesa_SEPA_B2B(codigo_remesa) {
// ---------------------------------------------------------------
    if (!Mostrar_Pantalla_Esperando()) { return; }
    THERION.WSnego.Generar_Fichero_Remesa_SEPA_B2B(codigo_remesa, RGenerar_Fichero_Remesa_SEPA_B2B, OnError, OnTimeOut);
}

// ----------------------------------------------------
    function RGenerar_Fichero_Remesa_SEPA_B2B(arg) {
// ----------------------------------------------------

    if (!Quitar_Pantalla_Esperando()) { return false; }
    if (arg == 'OK') {alert("Fichero de Remesa Generado");} else {alert(arg);}
    if (!Refresca_Registro_Grid()) { return false; }
}

// -------------------------------------------------
    function WSacar_de_Remesa_Factura(codigo_factura) {
// -------------------------------------------------
    if (!Mostrar_Pantalla_Esperando()) { return; }
    THERION.WSnego.Sacar_de_Remesa_Factura(codigo_factura, RSacar_de_Remesa_Factura, OnError, OnTimeOut);
}

// -------------------------------------
    function RSacar_de_Remesa_Factura(arg) {
// -------------------------------------

    if (!Quitar_Pantalla_Esperando()) { return false; }
        if (arg.substring(0, 2) == "OK") { if (arg != "OK") { alert(arg); } else { alert(arg); } }
    if (!Refresca_Registro_Grid()) {return false; }
    }

// -------------------------------------------------
    function WSacar_de_Remesa_Factura_DKV(codigo_factura) {
// -------------------------------------------------
    if (!Mostrar_Pantalla_Esperando()) { return; }
    THERION.WSnego.Sacar_de_Remesa_Factura_DKV(codigo_factura, RSacar_de_Remesa_Factura_DKV, OnError, OnTimeOut);
}

// -------------------------------------
    function RSacar_de_Remesa_Factura_DKV(arg) {
// -------------------------------------

    if (!Quitar_Pantalla_Esperando()) { return false; }
    if (arg.substring(0, 2) == "OK") {if (arg != "OK") {alert(arg);}} else {alert(arg);}
    if (!Refresca_Registro_Grid()) { return false; }
    }

// ------------------------------------------------------------------
    function WMeter_en_Remesa_Factura(codigo_factura, codigo_remesa) {
// ------------------------------------------------------------------
    if (!Mostrar_Pantalla_Esperando()) { return; }
    THERION.WSnego.Meter_en_Remesa_Factura(codigo_factura, codigo_remesa, RMeter_en_Remesa_Factura, OnError, OnTimeOut);
}

// -------------------------------------
    function RMeter_en_Remesa_Factura(arg) {
// -------------------------------------

    if (!Quitar_Pantalla_Esperando()) { return false; }
    if (arg.substring(0, 2) == "OK") {if (arg != "OK") {alert(arg);}} else { alert(arg);}
    if (!Refresca_Registro_Grid()) { return false; }
    }

// ------------------------------------------------------------------
    function WMeter_en_Remesa_Factura_DKV(codigo_factura, codigo_remesa) {
// ------------------------------------------------------------------
    if (!Mostrar_Pantalla_Esperando()) { return; }
    THERION.WSnego.Meter_en_Remesa_Factura_DKV(codigo_factura, codigo_remesa, RMeter_en_Remesa_Factura_DKV, OnError, OnTimeOut);
}

// -------------------------------------
    function RMeter_en_Remesa_Factura_DKV(arg) {
// -------------------------------------

    if (!Quitar_Pantalla_Esperando()) { return false; }
    if (arg.substring(0, 2) == "OK") {if (arg != "OK") {alert(arg);}} else {alert(arg);}
    if (!Refresca_Registro_Grid()) { return false; }
}

// -------------------------------------------------
    function WDevolver_de_Remesa_Factura(codigo_factura) {
// -------------------------------------------------
    if (!Mostrar_Pantalla_Esperando()) { return; }
    THERION.WSnego.Devolver_de_Remesa_Factura(codigo_factura, RDevolver_de_Remesa_Factura, OnError, OnTimeOut);
}

// -------------------------------------
    function RDevolver_de_Remesa_Factura(arg) {
// -------------------------------------

    if (!Quitar_Pantalla_Esperando()) { return false; }
    if (arg.substring(0, 2) == "OK") {if (arg != "OK") {alert(arg);}} else {alert(arg);}
    if (!Refresca_Registro_Grid()) { return false; }
    }

// -------------------------------------------------
    function WDevolver_de_Remesa_Factura_DKV(codigo_factura) {
// -------------------------------------------------
    if (!Mostrar_Pantalla_Esperando()) { return; }
    THERION.WSnego.Devolver_de_Remesa_Factura_DKV(codigo_factura, RDevolver_de_Remesa_Factura_DKV, OnError, OnTimeOut);
}

// -------------------------------------
    function RDevolver_de_Remesa_Factura_DKV(arg) {
// -------------------------------------
    
    if (!Quitar_Pantalla_Esperando()) { return false; }
    if (arg.substring(0, 2) == "OK") {if (arg != "OK") {alert(arg);}} else { alert(arg); }
    if (!Refresca_Registro_Grid()) { return false; }
}


// -------------------------------------------------
    function WPagar_Factura(codigo_factura) {
// -------------------------------------------------
    if (!Mostrar_Pantalla_Esperando()) { return; }
    THERION.WSnego.Pagar_Factura(codigo_factura, RPagar_Factura, OnError, OnTimeOut);
}

// -------------------------------------
    function RPagar_Factura(arg) {
// -------------------------------------
    
    if (!Quitar_Pantalla_Esperando()) { return false; };
    if (arg.substring(0, 2) == "OK") {if (arg != "OK") {alert(arg);}} else { alert(arg); }
    if (!Refresca_Registro_Grid()) { return false; }
}

// -------------------------------------------------
    function WPagar_Factura_DKV(codigo_factura) {
// -------------------------------------------------
    if (!Mostrar_Pantalla_Esperando()) { return; }
    THERION.WSnego.Pagar_Factura_DKV(codigo_factura, RPagar_Factura_DKV, OnError, OnTimeOut);
}

// -------------------------------------
    function RPagar_Factura_DKV(arg) {
// -------------------------------------
    
    if (!Quitar_Pantalla_Esperando()) { return false; }
    if (arg.substring(0, 2) == "OK") {if (arg != "OK") {alert(arg);}} else { alert(arg); }
    if (!Refresca_Registro_Grid()) { return false; }
}

// ----------------------------------------------
    function WDesPagar_Factura(codigo_factura) {
// ----------------------------------------------
    if (!Mostrar_Pantalla_Esperando()) { return; }
    THERION.WSnego.DesPagar_Factura(codigo_factura, RDesPagar_Factura, OnError, OnTimeOut);
}

// -------------------------------------
    function RDesPagar_Factura(arg) {
// -------------------------------------
    
    if (!Quitar_Pantalla_Esperando()) { return false; };
    if (arg.substring(0, 2) == "OK") {if (arg != "OK") {alert(arg);}} else {alert(arg);}
    if (!Refresca_Registro_Grid()) { return false; }
}

// ----------------------------------------------
    function WDesPagar_Factura_DKV(codigo_factura) {
 // ----------------------------------------------
    if (!Mostrar_Pantalla_Esperando()) { return; }
    THERION.WSnego.DesPagar_Factura_DKV(codigo_factura, RDesPagar_Factura_DKV, OnError, OnTimeOut);
}

// -------------------------------------
    function RDesPagar_Factura_DKV(arg) {
// -------------------------------------
    
    if (!Quitar_Pantalla_Esperando()) { return false; };
        if (arg.substring(0, 2) == "OK") { if (arg != "OK") { alert(arg); } else { alert(arg); } }
    if (!Refresca_Registro_Grid()) { return false; }
}

// ----------------------------------------------
    function WProvisionar_Factura(codigo_factura) {
// ----------------------------------------------
    if (!Mostrar_Pantalla_Esperando()) { return; }
    THERION.WSnego.Provisionar_Factura(codigo_factura, RProvisionar_Factura, OnError, OnTimeOut);
}

// -------------------------------------
    function RProvisionar_Factura(arg) {
// -------------------------------------
    
    if (!Quitar_Pantalla_Esperando()) { return false; };
    if (arg.substring(0, 2) == "OK") {if (arg != "OK") {alert(arg); }} else {alert(arg);}
    if (!Refresca_Registro_Grid()) { return false; }
}

// ----------------------------------------------
    function WProvisionar_Factura_DKV(codigo_factura) {
// ----------------------------------------------
    if (!Mostrar_Pantalla_Esperando()) { return; }
    THERION.WSnego.Provisionar_Factura_DKV(codigo_factura, RProvisionar_Factura_DKV, OnError, OnTimeOut);
}

// -------------------------------------
    function RProvisionar_Factura_DKV(arg) {
// -------------------------------------
    
    if (!Quitar_Pantalla_Esperando()) { return false; }
    if (arg.substring(0, 2) == "OK") {if (arg != "OK") {alert(arg);}} else {alert(arg);}
    if (!Refresca_Registro_Grid()) { return false; }
}

// ----------------------------------------------
    function WDesProvisionar_Factura(codigo_factura) {
// ----------------------------------------------
    if (!Mostrar_Pantalla_Esperando()) { return; }
    THERION.WSnego.DesProvisionar_Factura(codigo_factura, RDesProvisionar_Factura, OnError, OnTimeOut);
}

// -------------------------------------
    function RDesProvisionar_Factura(arg) {
// -------------------------------------
    
    if (!Quitar_Pantalla_Esperando()) { return false; }
    if (arg.substring(0, 2) == "OK") {if (arg != "OK") { alert(arg); }} else {alert(arg);}
    if (!Refresca_Registro_Grid()) { return false; }
}

// ----------------------------------------------
    function WDesProvisionar_Factura_DKV(codigo_factura) {
// ----------------------------------------------
    if (!Mostrar_Pantalla_Esperando()) { return; }
    THERION.WSnego.DesProvisionar_Factura_DKV(codigo_factura, RDesProvisionar_Factura_DKV, OnError, OnTimeOut);
}

// -------------------------------------
    function RDesProvisionar_Factura_DKV(arg) {
// -------------------------------------
   
    if (!Quitar_Pantalla_Esperando()) { return false; }
    if (arg.substring(0, 2) == "OK") {if (arg != "OK") {alert(arg);}} else {alert(arg);}
    if (!Refresca_Registro_Grid()) { return false; }
}

// -----------------------------------------------------------
    function WBajar_Fichero_Remesa_C19(codigo_remesa) {
// -----------------------------------------------------------
    if (!Mostrar_Pantalla_Esperando()) { return; }
    THERION.WSnego.Bajar_Fichero_Remesa_C19(codigo_remesa, RBajar_Fichero_Remesa_C19, OnError, OnTimeOut);
}

// ------------------------------------------------
    function RBajar_Fichero_Remesa_C19(arg) {
// -------------------------------------------------
    if (!Quitar_Pantalla_Esperando()) { return false; }
    if (arg.substring(0, 5) == "ERROR") {
        alert(arg);
    }
    else {
        SaveToDisk("documentos/" + arg, arg)
    }
}

// -----------------------------------------------------------
    function WBajar_Fichero_Remesa_SEPA_B2B(codigo_remesa) {
// -----------------------------------------------------------
    if (!Mostrar_Pantalla_Esperando()) { return; }
    THERION.WSnego.Bajar_Fichero_Remesa_SEPA_B2B(codigo_remesa, RBajar_Fichero_Remesa_SEPA_B2B, OnError, OnTimeOut);
}

// ------------------------------------------------
    function RBajar_Fichero_Remesa_SEPA_B2B(arg) {
// -------------------------------------------------
    
    if (!Quitar_Pantalla_Esperando()) { return false; }
    if (arg.substring(0, 5) == "ERROR") {
        alert(arg);
    }
    else {
        SaveToDisk("documentos/" + arg, arg)
    }
}

// -----------------------------------------------------------
    function WBajar_Fichero_Remesa_SEPA_CORE(codigo_remesa) {
// -----------------------------------------------------------
    if (!Mostrar_Pantalla_Esperando()) { return; }
    THERION.WSnego.Bajar_Fichero_Remesa_SEPA_CORE(codigo_remesa, RBajar_Fichero_Remesa_SEPA_CORE, OnError, OnTimeOut);
}

// ------------------------------------------------
    function RBajar_Fichero_Remesa_SEPA_CORE(arg) {
// -------------------------------------------------
    
    if (!Quitar_Pantalla_Esperando()) { return false; }
    if (arg.substring(0, 5) == "ERROR") {
        alert(arg);
    }
    else {
        SaveToDisk("documentos/" + arg, arg)
    }
}

// -----------------------------------------------------------
    function WBajar_Fichero_Contable_Remesa(codigo_remesa,tipo) {
// -----------------------------------------------------------
    if (!Mostrar_Pantalla_Esperando()) { return; }
    THERION.WSnego.Bajar_Fichero_Contable_Remesa(codigo_remesa, tipo, RBajar_Fichero_Contable_Remesa, OnError, OnTimeOut);
}

// ------------------------------------------------
    function RBajar_Fichero_Contable_Remesa(arg) {
// -------------------------------------------------
    
    if (!Quitar_Pantalla_Esperando()) { return false; }
    if (arg.substring(0, 5) == "ERROR") {
        alert(arg);
    }
    else {
        SaveToDisk("documentos/" + arg, arg)
    }
}

// -----------------------------------------
    function WDownload_File(codigo_file) {
// -----------------------------------------
    if (!Mostrar_Pantalla_Esperando()) { return; }
    THERION.WSnego.Download_File(codigo_file, RDownload_File, OnError, OnTimeOut);
}

// -------------------------------------
    function RDownload_File(arg) {
// -------------------------------------
    if (!Quitar_Pantalla_Esperando()) { return false; }
    SaveToDisk("documentos/" + arg, arg)
}

// ---------------------------------------------------------
    function WDownload_Ficheros_SERVISA(codigo_proceso) {
// ---------------------------------------------------------
    if (!Mostrar_Pantalla_Esperando()) { return; }
    THERION.WSnego.Download_Ficheros_SERVISA(codigo_proceso, RDownload_Ficheros_SERVISA, OnError, OnTimeOut);
}

// -------------------------------------
    function RDownload_Ficheros_SERVISA(arg) {
// -------------------------------------

    if (!Quitar_Pantalla_Esperando()) { return false; }

    // Ojo, vienen varios

    if (window.DOMParser) {
        parser = new DOMParser();
        doc = parser.parseFromString(arg, "text/xml");
    }
    else {                                                   // Internet Explorer
        doc = new ActiveXObject("Microsoft.XMLDOM");
        doc.async = "false";
        doc.loadXML(validacion);
    }

    // -----------------------
    // Proceso de los Ficheros
    // -----------------------

    var ColeccionFicheros = doc.getElementsByTagName("fichero");
    for (var xt = 0; xt < ColeccionFicheros.length; xt++) {
        var fichero = ColeccionFicheros[xt].childNodes[0].data;
        Guardar_en_Disco("documentos/" + fichero, fichero)
    }
}

// -----------------------------------------
    function WDownload_PLOSE(codigo_factura_plose) {
// -----------------------------------------
    if (!Mostrar_Pantalla_Esperando()) { return; }
    THERION.WSnego.Download_PLOSE(codigo_factura_plose, RDownload_PLOSE, OnError, OnTimeOut);
}

// -------------------------------------
    function RDownload_PLOSE(arg) {
// -------------------------------------
    
    if (!Quitar_Pantalla_Esperando()) { return false; }
    Guardar_en_Disco("documentos/" + arg, arg)
}

// -----------------------------------------
    function WDownload_AXXES(codigo_factura_axxes) {
// -----------------------------------------
    if (!Mostrar_Pantalla_Esperando()) { return; }
    THERION.WSnego.Download_AXXES(codigo_factura_axxes, RDownload_AXXES, OnError, OnTimeOut);
}

// -------------------------------------
    function RDownload_AXXES(arg) {
// -------------------------------------
    
    if (!Quitar_Pantalla_Esperando()) { return false; }
    Guardar_en_Disco("documentos/" + arg, arg)
}

// -------------------------------------------------
    function WAnular_Carga_Contable(codigo) {
// -------------------------------------------------
    if (!Mostrar_Pantalla_Esperando()) { return; }
    THERION.WSnego.Anular_Carga_Contable(codigo, RAnular_Carga_Contable, OnError, OnTimeOut);
}

// -------------------------------------
    function RAnular_Carga_Contable(arg) {
// -------------------------------------
    
    if (!Quitar_Pantalla_Esperando()) { return false; }
    if (arg.substring(0, 2) == "OK") {if (arg != "OK") {alert(arg);}} else {alert(arg);}
    if (!Refresca_Registro_Grid()) { return false; }
}

// -------------------------------------------------
    function WEmitir_Carga_Contable_Contabilidad(codigo) {
// -------------------------------------------------
    if (!Mostrar_Pantalla_Esperando()) { return; }
    THERION.WSnego.Emitir_Carga_Contable_Contabilidad(codigo, REmitir_Carga_Contable_Contabilidad, OnError, OnTimeOut);
}

// -------------------------------------
    function REmitir_Carga_Contable_Contabilidad(arg) {
// -------------------------------------
    
    if (!Quitar_Pantalla_Esperando()) { return false; }
    if (arg.substring(0, 2) == "OK") {if (arg != "OK") {alert(arg);}} else {alert(arg);}
    if (!Refresca_Registro_Grid()) { return false; }
}

// -------------------------------------------------
    function WEmitir_Remesa_Contabilidad(codigo) {
// -------------------------------------------------
    if (!Mostrar_Pantalla_Esperando()) { return; }
    THERION.WSnego.Emitir_Remesa_Contabilidad(codigo, REmitir_Remesa_Contabilidad, OnError, OnTimeOut);
}

// -------------------------------------
    function REmitir_Remesa_Contabilidad(arg) {
// -------------------------------------
    try {    
        if (!Quitar_Pantalla_Esperando()) { return false; }
        if (arg != 'OK') {alert(arg);}
        if (!Refresca_Registro_Grid()) { return false; }
    } catch (e) {
        alert('ERROR RSQL:' + e.message);
        return false
    }
    // ---------------------------------------------------------------------
    return true;
    }

// -----------------------------
    function WSQL(ts_script) {
// -----------------------------
    try {
        if (!Mostrar_Pantalla_Esperando()) { return; }
        ts_script = replaceAll(ts_script, "··", '"');
        ts_script = replaceAll(ts_script, "·", "'");
        ts_script = replaceAll(ts_script, "&quot", '"');
        ts_script = replaceAll(ts_script, "&#039", "'");
        THERION.WSnego.Procesar_SQL(ts_script, RSQL, OnError, OnTimeOut);
    } catch (e) {
        alert('ERROR RSQL:' + e.message);
        return false
    }
    // ---------------------------------------------------------------------
    return true;
}

// ----------------------
    function RSQL(arg) {
// ----------------------

    try {
        if (!Quitar_Pantalla_Esperando()) { return false; }
        if (arg.substring(0, 2) == "OK") {if (arg != "OK") {alert(arg);}} else {alert(arg);}
    } catch (e) {
        alert('ERROR RSQL:' + e.message);
        return false
    }
    if (!Refresca_Registro_Grid()) { return false; }
    // ---------------------------------------------------------------------
    return true;
}

// ------------------------------------------
    function Guardar_en_Disco(fileURL, fileName) {
// ------------------------------------------
    window.open(fileURL, 'Download');
}

// ------------------------------------------
    function SaveToDisk(fileURL, fileName) {
// ------------------------------------------
    // para no IE
    if (!window.ActiveXObject) {
        var save = document.createElement('a');
        save.href = fileURL;
        save.target = '_blank';
        save.download = fileName || fileURL;
        var evt = document.createEvent('MouseEvents');
        evt.initMouseEvent('click', true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
        save.dispatchEvent(evt);
        (window.URL || window.webkitURL).revokeObjectURL(save.href);
    }

    // para IE

    else if (!!window.ActiveXObject && document.execCommand) {
        var _window = window.open(fileURL, "_blank");
        _window.document.close();
        _window.document.execCommand('SaveAs', true, fileName || fileURL)
        _window.close();
    }

    if (!Quitar_Pantalla_Esperando()) { return false; }

}