
var codigo_fichero = 0;

// --------------------------------------------
    function WExtension_Formato() {
// --------------------------------------------
    var tipo_formato = $get(cb_formato_fichero).value;
    THERION.WS_Files.Extension_Formato(tipo_formato, RExtension_Formato, OnError, OnTimeOut);
}

// ---------------------------------------
    function RExtension_Formato(arg) {
// ---------------------------------------
    extension_formato = arg;
}

// --------------------------------------------
    function WDescrifrar_Fichero(parametros) {
// --------------------------------------------
    codigo_fichero = parametros;
    THERION.WS_Files.Descrifrar_Fichero(parametros, RDescrifrar_Fichero, OnError, OnTimeOut);
}

// ---------------------------------------
    function RDescrifrar_Fichero(arg) {
// ---------------------------------------

    var salida = valor_xml(arg, "salida");

    if (salida == "KO") {
        var error = valor_xml(arg, "error");
        alert(error);
        return
    }

    if (salida == "OK") {

        var formato = valor_xml(arg, "formato");
        var estado = valor_xml(arg, "estado");
        var codigo = valor_xml(arg, "codigo");
        var ubicacion = valor_xml(arg, "ubicacion");
        var fichero = valor_xml(arg, "fichero");

        if (estado != "PP") {
            alert("El fichero no está pendiente proceso");
            return;
        }

        if (formato == "AXXESF") {
            WProcesar_Fichero_Axxes_PDF(ubicacion);
            return;
        }

        if (formato == "PLOSEFI") {
            WProcesar_Fichero_PLOSE_PDF(ubicacion);
            return;
        }

        if (formato == "TISPD") {
            WProcesar_Documento(codigo);
            return;
        }

        if (formato == "TISPC") {
            WProcesar_Documento(codigo);
            return;
        }

        if (formato == "SERVDCO") {
            WProcesar_Documento(codigo);
            return;
        }

        if (formato == "SERVCCO") {
            WProcesar_Documento(codigo);
            return;
        }
    }
}

// --------------------------------------------
    function WBorrar_Fichero(parametros) {
// --------------------------------------------
    Mostrar_Pantalla_Esperando();
    codigo_fichero = parametros;
    THERION.WS_Files.Borrar_Fichero(parametros, RBorrar_Fichero, OnError, OnTimeOut);
}

// ---------------------------------------
    function RBorrar_Fichero(arg) {
// ---------------------------------------

        var salida = "Fichero Eliminado";
        if (arg == 'OK') {

            var tabla = document.getElementById("tabla_ficheros");
            for (var i=1; i<tabla.rows.length; i++) {
                if (tabla.rows[i].id == "linea_fichero_" + codigo_fichero) {
                    tabla.deleteRow(i)
                }
            }
        }
        else {
            salida = arg;
        }

        Quitar_Pantalla_Esperando();

        var ressalida = document.getElementById("resultado_proceso");
        if (ressalida) {
            ressalida.innerHTML = salida;
        }

}

// --------------------------------------------
    function WProcesar_Documento(parametros) {
// --------------------------------------------
    Mostrar_Pantalla_Esperando();
    THERION.WS_Files.Procesar_Fichero(parametros, RProcesar_Documento, OnError, OnTimeOut);
}

// ---------------------------------------
    function RProcesar_Documento(arg) {
// ---------------------------------------

    var resultado = valor_xml(arg, 'resultado');
    var salida = valor_xml(arg, 'salida');
    var error = valor_xml(arg, 'error');

    if (resultado == 'OK') {

        salida = salida;

        for (var x = 1; x <= 5; x++) {
            var c = document.getElementById("c" + x + "_" + codigo_fichero);
            if (c) {
                c.style.color="#a00"
            }
        }
        
        var estado = document.getElementById("c5_" + codigo_fichero);
        if (estado) {
            estado.innerHTML = "PROCESADO"
        }

        var imgfile = document.getElementById("imgfile_" + codigo_fichero);
        if (imgfile) {
            imgfile.src = "img/procesado.png"
        }

    }
    else {
        salida = error; 
      }

    Quitar_Pantalla_Esperando();

    var ressalida = document.getElementById("resultado_proceso");

    if (ressalida) {
        ressalida.innerHTML = salida; 
    }
}


// ------------------------------------------------
    function WProcesar_Fichero_PLOSE_PDF(fichero) {
// ------------------------------------------------

    Mostrar_Pantalla_Esperando();
    THERION.WS_Files.Procesar_Fichero_PLOSE_PDF(fichero, RProcesar_Fichero_PLOSE_PDF, OnError, OnTimeOut);
}

// ------------------------------------------------
    function RProcesar_Fichero_PLOSE_PDF(arg) {
// ------------------------------------------------

    Quitar_Pantalla_Esperando();

    var divlista = document.getElementById("resultado_proceso");
    var salida = valor_xml(arg, 'salida');

    var resultado = "";
    var error = "";
    var ubicacion = "";

    if (salida == "OK") {

        resultado = valor_xml(arg, 'resultado');
        ubicacion = valor_xml(arg, 'ubicacion');
        WProcesado_Fichero_PLOSE_PDF(ubicacion);

        for (var x = 1; x <= 5; x++) {
            var c = document.getElementById("c" + x + "_" + codigo_fichero);
            if (c) {
                c.style.color = "#a00"
            }
        }

        var estado = document.getElementById("c5_" + codigo_fichero);
        if (estado) {
            estado.innerHTML = "PROCESADO"
        }

        var imgfile = document.getElementById("imgfile_" + codigo_fichero);
        if (imgfile) {
            imgfile.src = "img/procesado.png"
        }

        if (divlista) { divlista.innerHTML = resultado; }
        return;
    }

    if (salida == "KO") {
        error = valor_xml(arg, 'error');
        if (divlista) { divlista.innerHTML = error; }
        return;
    }
}

// ------------------------------------------------
    function WProcesado_Fichero_PLOSE_PDF(ubicacion) {
// ------------------------------------------------
    THERION.WS_Files.Procesado_Fichero_PLOSE_PDF(ubicacion, RProcesado_Fichero_PLOSE_PDF, OnError, OnTimeOut);
}

// ------------------------------------------------
    function RProcesado_Fichero_PLOSE_PDF(arg) {
// ------------------------------------------------
    alert("Proceso Finalizado");
}    

// ------------------------------------------------
    function WProcesar_Fichero_Axxes_PDF(fichero) {
// ------------------------------------------------
    Mostrar_Pantalla_Esperando();
    THERION.WS_Files.Procesar_Fichero_PDF(fichero, RProcesar_Fichero_Axxes_PDF, OnError, OnTimeOut);
}

// ------------------------------------------------
    function RProcesar_Fichero_Axxes_PDF(arg) {
// ------------------------------------------------
    
    Quitar_Pantalla_Esperando();

    var divlista = document.getElementById("resultado_proceso");
    var salida = valor_xml(arg, 'salida');

    var resultado = "";
    var error = "";
    var ubicacion = "";

    if (salida == "OK") {
        
        resultado = valor_xml(arg, 'resultado');
        ubicacion = valor_xml(arg, 'ubicacion');
        WProcesado_Fichero_Axxes_PDF(ubicacion);

        for (var x = 1; x <= 5; x++) {
            var c = document.getElementById("c" + x + "_" + codigo_fichero);
            if (c) {
                c.style.color = "#a00"
            }
        }

        var estado = document.getElementById("c5_" + codigo_fichero);
        if (estado) {
            estado.innerHTML = "PROCESADO"
        }

        var imgfile = document.getElementById("imgfile_" + codigo_fichero);
        if (imgfile) {
            imgfile.src = "img/procesado.png"
        }

        if (divlista) {divlista.innerHTML = resultado;}
        return;
    }

    if (salida == "KO") {
        error = valor_xml(arg, 'error');
        if (divlista) { divlista.innerHTML = error; }
        return;
    }
}

// ------------------------------------------------
    function WProcesado_Fichero_Axxes_PDF(ubicacion) {
// ------------------------------------------------
    THERION.WS_Files.Procesado_Fichero_Axxes_PDF(ubicacion, RProcesado_Fichero_Axxes_PDF, OnError, OnTimeOut);
}

// ------------------------------------------------
    function RProcesado_Fichero_Axxes_PDF(arg) {
// ------------------------------------------------
        alert("Proceso Finalizado");
    }    

// -------------------------------
    function valor_xml(xml, tag) {
// -------------------------------

    if (xml) {
        var posi = xml.indexOf('<' + tag + '>')
        if (posi == -1) { return (""); }
        var posf = xml.indexOf('</' + tag + '>');
        if (posf == -1) { return (""); }
        posi += tag.length;
        posi += 2;

        if (posi == posf) {
            return ("");
        } else {
            return (xml.substring(posi, posf));
        }

    } else { return (""); }
}
