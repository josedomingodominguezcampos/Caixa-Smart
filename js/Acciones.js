// ----------------------------------
function WVer_Pdf(codigo, parametros) {
// ----------------------------------   
    Creditaxi.WS_acciones.Ver_PDF(codigo, parametros, RVer_PDF, OnError, OnTimeOut);
}

//-----------------------------------
function WVer_Pdf_editable(codigo, parametros) {
    // ----------------------------------   
    Creditaxi.WS_acciones.Ver_Pdf_editable(codigo,parametros , RVer_PDF, OnError, OnTimeOut);
}

// ----------------------------------
function WGuardar_Pdf(codigo, codigotabla, parametros) {
    // ----------------------------------   
    Creditaxi.WS_acciones.Guardar_PDF(codigo,codigotabla, parametros, RGuardar_PDF, OnError, OnTimeOut);
}

// --------------------------------
    function RGuardar_PDF(arg) {
// --------------------------------
    var resultado = valor_xml(arg, 'resultado');
    if (resultado == 'OK') 
    {
        alert("Fichero generado y guardado.");
    }
    else
    {
        var error = valor_xml(arg, 'error');
        alert(error);
    }
}

// -----------------------------------------
    function WlistaSeleccion(tabla_bajas)
// ------------------------------------------
{
    Mostrar_Pantalla_Esperando();
    var lista_chk = "";
    var tb = document.getElementById("tabla_" + tabla_bajas);
    if (tb) {
        var rows = tb.rows;
        for (var i = 0; i < rows.length; i++) {
            var numcell = rows[i].cells.length;
            var cell = rows[i].cells[numcell - 1];
            var chk = cell.firstChild;
            if (chk) {
                if (chk.id != "undefined") {
                    if (chk.checked) {
                        lista_chk = lista_chk + replaceAll(chk.id,"CHK","") + ",";
                    }
                }
            }
        }
    }
    if (lista_chk != "") {
        Creditaxi.WS_acciones.Lista_seleccion_excel(tabla_bajas, lista_chk, RWlistaSeleccion, OnError, OnTimeOut);
    } else {
        Creditaxi.WS_acciones.Lista_seleccion_excel(tabla_bajas, "", RWlistaSeleccion, OnError, OnTimeOut);
    }
}

// --------------------------------
    function RWlistaSeleccion(arg) {
// --------------------------------
    var resultado = valor_xml(arg, 'resultado');

    if (resultado == 'OK') {
        var ficheros = valor_xml(arg, 'fichero');
        var splits = ficheros.split(";");

        for (var i = 0; i < splits.length; i++) {
            fichero = splits[i];
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
    }
    else {
        var error = valor_xml(arg, 'error');
        alert(error);
    }

    return false;
}

// ----------------------------------
    function WExecAccion(codigo, parametros) {
// ----------------------------------   
    Creditaxi.WS_acciones.Accion(codigo, parametros, RAccion, OnError, OnTimeOut);
}

// --------------------------------
    function RAccion(arg) {
// --------------------------------
    var resultado = valor_xml(arg, 'resultado');
    if (resultado == 'OK') {
        alert("Correcto.");
        Generar_Lista_Parametros();
        if (!WGrid_Tabla()) { return false; };
    }
    else {
        var error = valor_xml(arg, 'error');
        alert(error);
    }

}

// --------------------------------
    function RVer_PDF(arg) {
// --------------------------------

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

    return false;
}