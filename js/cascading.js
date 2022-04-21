
var p_codigo_combo = "";
var p_autocompletar = 0;

// --------------------------------
    function sale_foco_db(inputauto) {
// --------------------------------

try {
    
    var iddd = inputauto.id.replace("sch_", "");
    var ddauto = document.getElementById(iddd);
    var valueasociado = document.getElementById("value_" + iddd);

    if (ddauto) {
        if (inputauto.value == "") {        // han borrado todo el campo -> vacío el dd
            ddauto.options.length = 0;      // Vaciar dd
            inputauto.value = "";           // Vaciar inputauto

            if (valueasociado) {
                if (valueasociado.value == "") { return true; }
                valueasociado.value = "";
            }
        }
        else {                              // no han vaciado por completo el db
            if (ddauto.selectedIndex != -1) {
                inputauto.value = ddauto.options[ddauto.selectedIndex].text;
                if (valueasociado) {
                    if (valueasociado.value == ddauto.value) { return true;  }
                    valueasociado.value = ddauto.value;
                }
            } else {
                inputauto.value = "";       // Vaciar db porque no hay un item seleccionado
                if (valueasociado) {
                    if (valueasociado.value == "") { return true; }
                    valueasociado.value = "";
                }
            }

        }
        if (!Recarga_DropDown(ddauto)) { return false }                                 // Para que genere los cambios en los que éste afecta
        if (valueasociado) { if (!Recarga_DropDown_Filtros(ddauto)) { return false } }  // Para que genere los cambios en los que éste afecta
        
    }
    // ---------------------------------------------------------------------
    } catch (e) {
        alert('ERROR 1:' + e.message); 
        return false
    }
    // ---------------------------------------------------------------------
    return true;
}

// --------------------------------------------------------------------------
    function generar_autocompletar(input_db, tabla, campob, campom, swhere) {
// -------------------------------------------------------------------------

try {

    var cf1, cf2, cf3
    var posa, posb, desde_parametros

    desde_parametros = swhere.indexOf("@p@");
    swhere = replaceAll(swhere, "@p@", "");

    // -------------------
    // Analizar el where
    // -------------------

    if (swhere.length >= 3) {
        posa = swhere.indexOf("#");
        if (posa > 0) posb = swhere.indexOf("#", posa + 1);
        if (posa > 0 && posb > 0) {
            cf1 = swhere.substring(posa + 1, posb)
            posa = swhere.indexOf("#", posb + 1);
            if (posa > 0) { posb = swhere.indexOf("#", posa + 1); }
            if (posa > 0 && posb > 0) {
                cf2 = swhere.substring(posa + 1, posb)
                posa = swhere.indexOf("#", posb + 1);
                if (posa > 0) { posb = swhere.indexOf("#", posa + 1) }
                if (posa > 0 && posb > 0) { cf3 = swhere.substring(posa + 1, posb) }
                }
            }
        }
    else
        { swhere = ""; }

    // -------------------

    $(input_db).autocomplete({
        source: function (request, response) {
            PageMethods.DameListaDDList
                    (request.term
                    , tabla
                    , campob
                    , campom
                    , captura_datos_autocomplete(input_db, swhere, cf1, cf2, cf3)
                    , function (data) {
                        var dropdownlist = (typeof data) == 'string' ? eval('(' + data + ')') : data;
                        response(dropdownlist.slice(0, 100));
                    }
                    );
        }
        , minLength: 1
        , delay: 0
        , select: function (event, ui) {
            $("#" + input_db.id.substring(4) + "").html('<option value="' + ui.item.id + '" selected>' + ui.item.label + '</option>');
            if (desde_parametros == 0) {
                WCondiciona_Registro();
                if (!Recarga_DropDown(document.getElementById(input_db.id.substring(4)))) {return false };
            }
        }
    });

    // input_db.onkeydown = $("#" + input_db.id.substring(4) + "").html('');
    input_db.onfocus = null;
    // ---------------------------------------------------------------------
    } catch (e) {
      alert('ERROR 2:' + e.message);
      return false
    }
    // ---------------------------------------------------------------------
    return true;
}

// ---------------------------------------------------------------------
    function captura_datos_autocomplete(input_db, swhere, cf1, cf2, cf3) {
// --------------------------------------------------------------------

try {

    var ef1, ef2, ef3;
    var vf1, vf2, vf3;

    var swhere_adicional = ""; // Activar / DesActivar

    // ---------------------------------------------------------
    // Comprobar si hay un a con el filtro para tablas foraneas
    // ---------------------------------------------------------

    var filtro_foraneo;
    if (input_db.id.substring(0, 8) == "sch_fil_") { filtro_foraneo = input_db.id.replace("sch_fil_", "campo_comun_fil_"); } 
    else if (input_db.id.substring(0, 4) == "sch_") { filtro_foraneo = input_db.id.replace("sch_", "campo_fil_comun_"); }
    var dd_filtro_foraneo = document.getElementById(filtro_foraneo);
    if (dd_filtro_foraneo) {swhere_adicional += dd_filtro_foraneo.innerHTML;}

    // -----------------------------------------------------------------------------------------------------
    // Comprobar si hay un texarea con id='select_fil_XXXXXXXX' (el input_db es 'sch_fil_XXXXXXXXXXXXX' )
    // ya que puede contener un filtro adicional
    // -----------------------------------------------------------------------------------------------------

    var filtro_otros;
    if (input_db.id.substring(0, 8) == "sch_fil_") { filtro_otros = input_db.id.replace("sch_fil_", "select_fil_"); } 
    else if (input_db.id.substring(0, 4) == "sch_") {filtro_otros = input_db.id.replace("sch_", "select_");}

    var dd_filtro_otros = document.getElementById(filtro_otros);
    if (dd_filtro_otros) {
        var condicion_filtro_otros = dd_filtro_otros.value;
        condicion_filtro_otros = replaceAll(condicion_filtro_otros, "tbp.", "mt.");
        if (condicion_filtro_otros.indexOf("[AUTOCOMPLETAR]") == -1 && condicion_filtro_otros!="" ) {
            swhere_adicional = swhere_adicional.replace("and 18=18", condicion_filtro_otros);
        }
    }

    // ----------------------------

    swhere += swhere_adicional;

    if (swhere == "") {return "";}

    if (cf1) { ef1 = document.getElementById(cf1); }
    if (cf2) { ef2 = document.getElementById(cf2); }
    if (cf3) { ef3 = document.getElementById(cf3); }

    if (ef1) { vf1 = ef1.value } else { vf1 = ""; }
    if (ef2) { vf2 = ef2.value } else { vf2 = ""; }
    if (ef3) { vf3 = ef3.value } else { vf3 = ""; }

    if (cf1) { swhere = swhere.replace("#" + cf1 + "#", vf1); }
    if (cf2) { swhere = swhere.replace("#" + cf2 + "#", vf2); }
    if (cf3) { swhere = swhere.replace("#" + cf3 + "#", vf3); }

    swhere = replaceAll(swhere, "@$@", "'");
    swhere = replaceAll(swhere, "··", '"');
    swhere = replaceAll(swhere, "·", "'");

    // -------------------------------------------------

    } catch (e) {
        alert('ERROR 3:' + e.message);
        return "";
    }
    // ---------------------------------------------------------------------
    return swhere;
}

// ---------------------------------------------------
    function AutoRecarga_DropDown(DD, codigo_combo) {
// ---------------------------------------------------

try {

    p_codigo_combo = codigo_combo;

    var crlf = String.fromCharCode(10);
    var idDD = DD.id;
    
    var e = document.getElementById("select_" + idDD)   // Encontrar el TextArea que se tiene la select del DD

    if (e) {
        var SQL = e.value;
        // --------------------------------------------------------
        // buscar más cambios por si la select tiene varios campos
        // --------------------------------------------------------
        var palabras = SQL.split("#");
        for (var p = 0; p < palabras.length; p++) {
            var newidDD = document.getElementById(palabras[p]);  // DD que afecta a la select
            if (newidDD) {
                valueDD = newidDD.value;
                if (valueDD == "") { valueDD = "-1"; }
                SQL = SQL.replace("#" + newidDD.id + "#", valueDD);
            }
        }
        // -------------------------------------------------
        // Ejecutar la Select y pasar el id del DD afectado
        // -------------------------------------------------
        WDatos_Option(SQL, idDD);
    } else {
        alert("Error, no encuentra " + "select_" + idDD);
    }
    // -------------------------------------------------
    } catch (e) {
        alert('ERROR 4:' + e.message);
        return false
    }
    // ---------------------------------------------------------------------
    return true;
}

// -------------------------------
   function Recarga_DropDown(DD) {
// -------------------------------

try {

    var crlf = String.fromCharCode(10);

    var idDD = DD.id;
    var valueDD = DD.value;

    if (valueDD == "") {
        valueDD = "0"; 
    }

    var e = document.getElementsByTagName("textarea")   // Recorrer los textarea para ver cual es el vinculado con este DD 
    for (var x = 0; x < e.length; x++) {

        var SQL = e[x].value;
        var idDDafectado = e[x].id;
        idDDafectado = idDDafectado.replace("select_", "");

        if (SQL.indexOf("#" + idDD + "#") > 0) {

            // -----------------------------
            // suplanto el valor que afecta
            // -----------------------------

            SQL = SQL.replace("#" + idDD + "#", valueDD);

            // --------------------------------------------------------
            // buscar más cambios por si la select tiene varios campos
            // --------------------------------------------------------

            var palabras = SQL.split("#");

            for (var p = 0; p < palabras.length; p++) {

                var palabra = palabras[p];

                var newidDD = document.getElementById(palabra);  // DD que afecta a la select
                if (newidDD) {
                    var newvalueDD = newidDD.value;
                    if (newvalueDD == "") {newvalueDD = "-1";}
                    SQL = SQL.replace("#" + newidDD.id + "#", newvalueDD);
                }
            }

            // -------------------------------------------------
            // Ejecutar la Select y pasar el id del DD afectado
            // -------------------------------------------------

            var span = document.getElementById("select_final_" + idDDafectado);
            if (span) {
                span.innerHTML = SQL;
            }

            WDatos_Option(SQL, idDDafectado);
        }

    }
    // -------------------------------------------------
    } catch (e) {
        alert('ERROR 5:' + e.message);
        return false
    }
    // ---------------------------------------------------------------------
    return true;
     
}

// ---------------------------------------
    function Recarga_DropDown_Filtros(DD) {
// ---------------------------------------

try {

    var crlf = String.fromCharCode(10);

    // Si DD está vacio es para recargar todos los combos -> busco el primero 

    var DDVacio=0;
	
    if (DD==undefined) {
		var combos = document.getElementsByTagName("textarea");
		for (var x = 0; x < combos.length; x++) {
			ddasociado = document.getElementById(combos[x].id.replace("select_", ""));	
			if (combos[x].id.indexOf("select_fil_" + p_tabla_tratada + "_" + p_capa_entrada + "_" + p_tab) > -1) {
				DD=document.getElementById(combos[x].id.replace("select_", ""));
				DDVacio=1;
				break;
			}
		}
	}

	if (DD==undefined) {return true;}

    var idDD = DD.id;
    var valueDD = DD.value;
    var ddasociado;
    var campo;
    var valor;
    var valorprimero;
    var autotexto;
    var autocombo;
    var y;

    var osemilla = document.getElementById("semilla_" + p_tabla_tratada + "_" + p_capa_entrada + "_" + p_tab);
    var semilla = "";
    if (osemilla) { semilla = osemilla.value; }

    if (valueDD == "") { valueDD = "0"; }

    var e = document.getElementsByTagName("textarea");   // Recorrer los textarea para ver cual es el vinculado con este DD 

    for (var x = 0; x < e.length; x++) {

        ddasociado = document.getElementById(e[x].id.replace("select_", ""));

        if (ddasociado == DD) {  // Es el que ha cambiado
		
            if (e[x].id.indexOf("select_fil_" + p_tabla_tratada + "_" + p_capa_entrada + "_" + p_tab) > -1) {
                
                asociado = document.getElementById(e[x].id.replace("select_fil_", "campo_fil_"));      // Ver si tiene etiqueta de campo asociado

                if (asociado) {

                    var WHERE = "";

                    // ---------------------------------------
                    // Capturar los Valores de los selects
                    // así capturamos las condiciones totales
                    // ---------------------------------------
                    
                    for (y = 0; y < e.length; y++) {

                        if (e[y].id.indexOf("select_fil_" + p_tabla_tratada + "_" + p_capa_entrada + "_" + p_tab) > -1) {

                            if (document.getElementById(e[y].id.replace("select_fil_", "campo_fil_"))) {

                                campo = e[y].id.replace("select_fil_", "campo_fil_");
                                
                                valor = e[y].id.replace("select_fil_", "fil_");
                                valorprimero = e[y].id.replace("select_fil_", "value_fil_");  // Ver si tiene input de Valor porque viene en la inyeccion

                                // ------------------------------
                                // -- Check contenedor de Valor
                                // ------------------------------

                                if (document.getElementById(valorprimero)) {
                                    valor = valorprimero;
                                    if (document.getElementById(valor).value == "NULL") {
                                        document.getElementById(valor).value = "";
                                            }
                                   }

                                // ------------------------
                                // -- Check si Autocombo
                                // ------------------------

                                if (document.getElementById(e[y].id.replace("select_fil_", "sch_fil_"))) { autocombo = 1; } else { autocombo = 0; }

                                if (autocombo == 1) {    // AutoCombo

                                    autotexto = e[y].id.replace("select_fil_", "sch_fil_");        // Input de entrada de autocombo

                                    if (document.getElementById(campo) && document.getElementById(valor) && document.getElementById(autotexto)) { // Todos los elementos están presentes
                                        if (document.getElementById(autotexto).style.display == "none") {
                                            WHERE += " and tbp." + document.getElementById(campo).innerHTML + ' is null';
                                        }
                                        else {
                                            if (document.getElementById(valor).value != "" && document.getElementById(valor).value != "0" && document.getElementById(valor).value != "-1") {
                                                WHERE += " and tbp." + document.getElementById(campo).innerHTML + '=' + document.getElementById(valor).value;
                                            }
                                        }
                                    }

                                } else {                 // No AutoCombo  

                                    if (document.getElementById(campo) && document.getElementById(valor)) { // Todos los elementos están presentes
                                        if (document.getElementById(valor).style.display == "none") {
                                            WHERE += " and tbp." + document.getElementById(campo).innerHTML + ' is null';
                                        }
                                        else {
                                            if (document.getElementById(valor).value != "" && document.getElementById(valor).value != "0" && document.getElementById(valor).value != "-1") {
                                                WHERE += " and tbp." + document.getElementById(campo).innerHTML + '=' + document.getElementById(valor).value;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }

                    // -----------------------------------
                    // Ejecutar la Select para cada DD 
                    // -----------------------------------
					
                try {

                    for (y = 0; y < e.length; y++) {

                        if (e[y].id.indexOf("select_fil_" + p_tabla_tratada + "_" + p_capa_entrada + "_" + p_tab) > -1) {

                            var inputasociado = document.getElementById(e[y].id.replace("select_fil_", "sch_fil_"));   // Buscar si tiene un autocombo asociado
                            ddasociado = document.getElementById(e[y].id.replace("select_", ""));

                            if (ddasociado) {

                                // ------------------------------------------------------------
                                // -- Check si DropDown es distinto al que ha cambiado de valor
                                // ------------------------------------------------------------

                                if (ddasociado != DD || DDVacio==1) {

                                    if (e[y].id.indexOf("select_fil_" + p_tabla_tratada + "_" + p_capa_entrada + "_" + p_tab) > -1) {

                                        // ------------------------
                                        // -- Check si Autocombo
                                        // ------------------------

                                        if (document.getElementById(e[y].id.replace("select_fil_", "sch_fil_"))) { autocombo = 1; } else { autocombo = 0; }

                                        // ------------------------

                                        if (document.getElementById(e[y].id.replace("select_fil_", "campo_fil_"))) {
                                            var WHERE_REPLACE = "";

                                            campo = e[y].id.replace("select_fil_", "campo_fil_");       // Nombre del Campo de Filtro 
                                          
                                            valor = e[y].id.replace("select_fil_", "fil_");             // Select
                                            valorprimero = e[y].id.replace("select_fil_", "value_fil_");  // Ver si tiene input de Valor porque viene en la inyeccion

                                            // ------------------------------
                                            // -- Check contenedor de Valor
                                            // ------------------------------

                                            if (document.getElementById(valorprimero)) {
                                                valor = valorprimero;
                                                if (document.getElementById(valor).value == "NULL") {
                                                    document.getElementById(valor).value = "";
                                                }
                                            }

                                            // ------------------------

                                            if (autocombo == 1) {    // AutoCombo

                                                autotexto = e[y].id.replace("select_fil_", "sch_fil_");        // Input de entrada de autocombo

                                                if (document.getElementById(campo) && document.getElementById(valor) && document.getElementById(autotexto)) {  // Todos los elementos están presentes
                                                    if (document.getElementById(autotexto).style.display == "none") {
                                                        WHERE_REPLACE = "and tbp." + document.getElementById(campo).innerHTML + ' is null';
                                                    }
                                                    else {
                                                        if (document.getElementById(valor).value != "" && document.getElementById(valor).value != "0" && document.getElementById(valor).value != "-1") {
                                                            WHERE_REPLACE = "and tbp." + document.getElementById(campo).innerHTML + '=' + document.getElementById(valor).value;
                                                        }
                                                    }
                                                }

                                                // ------------------------

                                            } else {                 // Combo Normal
                                                if (document.getElementById(campo) && document.getElementById(valor)) {  // Todos los elementos están presentes
                                                    if (document.getElementById(valor).style.display == "none") {
                                                        WHERE_REPLACE = "and tbp." + document.getElementById(campo).innerHTML + ' is null';
                                                        }
                                                    else {
                                                        if (document.getElementById(valor).value != "" && document.getElementById(valor).value != "0" && document.getElementById(valor).value != "-1") {
                                                            WHERE_REPLACE = "and tbp." + document.getElementById(campo).innerHTML + '=' + document.getElementById(valor).value;
                                                          }
                                                    }
                                                }
                                            }
                                        // ---------------------------------------------
                                        var WHERE_PAR = WHERE.replace(WHERE_REPLACE, "")

                                        var sql_combo = e[y].value;

                                        var esperando_asociado = document.getElementById(e[y].id.replace("select_fil_", "cargando_fil_"));   // Buscar si tiene un icono esperando asociado
                                        var numero_asociado = document.getElementById(e[y].id.replace("select_fil_", "numero_fil_"));        // Buscar si tiene un contador asociado
                                        
                                        if (inputasociado) {              // Es un autocombo

                                            e[y].value = WHERE_PAR;
                                            var contadorasociado = document.getElementById(e[y].id.replace("select_fil_", "contador_fil_"));   // Buscar si tiene un contador asociado

                                            if (contadorasociado) {

                                                sql_combo = contadorasociado.value;
                                                sql_combo = sql_combo.replace("and 10=10", " " + WHERE_PAR);

                                                if (esperando_asociado) { esperando_asociado.style.display = ""; }
                                                if (numero_asociado) { numero_asociado.style.display = "none"; }

                                                WDatos_Option(sql_combo, e[y].id.replace("select_", ""));
                                            }

                                            if (!document.getElementById(valorprimero)) { sale_foco_db(inputasociado); }

                                        } else {                          // Combo Normal

                                            sql_combo = sql_combo.replace("and 10=10", " " + WHERE_PAR);

                                            if (esperando_asociado) { esperando_asociado.style.display = ""; }
                                            if (numero_asociado) { numero_asociado.style.display = "none"; }

                                            WDatos_Option(sql_combo, e[y].id.replace("select_", ""));
                                        }
                                        // --------------------------------------------
                                        }
                                    }
                                }
                            }
                        }
                        }

                } catch (e) {
                    alert('ERROR 6.1:' + e.message);
                    return false
                }

                }
            }
            // -------------------------------------
            break;
        }
    }

    // ---------------------------------------------------------------------
    } catch (e) {
        alert('ERROR 6:' + e.message);
        return false
    }
    // ---------------------------------------------------------------------
    return true;
}

// ----------------------------------
// ----------------------------------
    function WDatos_Option(sql, vinDD) {
// ----------------------------------
// ----------------------------------

        try {

            var inputasociado = document.getElementById("sch_" + vinDD);
            var comboasociado = document.getElementById(vinDD);

            // --------------------------------------
            // Desactivar el Combo mientras se carga
            // --------------------------------------
            
            if (inputasociado) { inputasociado.style.visibility = "hidden";}
            else { if (comboasociado) { comboasociado.style.visibility = "hidden";}}


            THERION.WS_general.Datos_Option(sql, vinDD, RDatos_Option, OnError, OnTimeOut);

        // ---------------------------------------------------------------------

        } catch (e) {
            alert('ERROR 7:' + e.message);
            return false
        }
    // ---------------------------------------------------------------------
    return true;
}

// --------------------------------
    function RDatos_Option(arg) {
// --------------------------------

try {
    // ------------------------------------------------
    // Tratamiento de la Informacion por XML recibida
    // ------------------------------------------------
    
    if (window.DOMParser) {
        parser = new DOMParser();
        doc = parser.parseFromString(arg, "text/xml");
    }
    else {   // para IE
        doc = new ActiveXObject("Microsoft.XMLDOM");
        doc.async = "false";
        doc.loadXML(arg);
    }

    // ------------------------
    // Carga de Datos del XML
    // ------------------------

    var dd = doc.getElementsByTagName("dd");
    for (y = 0; y < dd.length; y++) {
        var idDD = dd[y].getElementsByTagName("id")[0].childNodes[0].nodeValue;
        var objDD = document.getElementById(idDD);              // DD vinculado
        break;
    }

    // ------------------------

    if (objDD) {

        var inputasociado = document.getElementById("sch_" + objDD.id);
        var comboasociado = document.getElementById(objDD.id);

        var valorprimero = "value_" + objDD.id;                               
        var valorsch = "sch_" + objDD.id;
        var valor_combo_auto = "";

        if (document.getElementById(valorprimero)) {                          // Captar el Valor y Borrar Elemento
            p_codigo_combo = document.getElementById(valorprimero).value;     // Valor del Codigo de DropDown en el input pasado
            if (document.getElementById(valorsch)) {valor_combo_auto = document.getElementById(valorsch).value;}   // Para los AutoCombos
        } else {
            p_codigo_combo = objDD.value;                                     // Valor del Combo después de Primera Vez
        }

        var datos = doc.getElementsByTagName("datos");
        var es_autocombo = 0;
        var registros_combo = 0;

        // -----------------------------------------------------

        try {
        if (datos.length > 0) {
            if (datos[0].getElementsByTagName("v")[0].childNodes[0].nodeValue == "autocombo") {
                es_autocombo = 1;
                registros_combo = datos[0].getElementsByTagName("o")[0].childNodes[0].nodeValue;
            }
            else {
                es_autocombo = 0;
                registros_combo = datos.length - 1;
            }
            }
        } catch (e) {
            alert('ERROR 8.1: ' + e.message + arg);
        }

        // -----------------------------------------------------

        try {
            if (es_autocombo == 0) {
                objDD.options.length = 0;                                // Vaciar ddl
                for (x = 0; x < datos.length; x++) {

                    var vNode;
                    var oNode;

                    if (datos[x].getElementsByTagName("v")[0].childNodes.length > 0) {
                        vNode = datos[x].getElementsByTagName("v")[0].childNodes[0].nodeValue;
                    } else { vNode = "------"; }

                    if (datos[x].getElementsByTagName("o")[0].childNodes.length > 0) {
                        oNode = datos[x].getElementsByTagName("o")[0].childNodes[0].nodeValue;
                    } 
                    if (oNode) {
                        var opt = new Option(vNode, oNode);
                        if (p_codigo_combo != "") {
                            if (opt.value == p_codigo_combo) { opt.setAttribute("selected", "selected") }
                        }
                        objDD.options.add(opt);
                    }
                }
            }
              else {
                    if (valor_combo_auto != "") {
                        var opt = new Option(valor_combo_auto, p_codigo_combo);
                        opt.setAttribute("selected", "selected");
                        objDD.options.add(opt);

                        var valueasociado = document.getElementById("value_" + objDD.id);
                        if (valueasociado) { valueasociado.value = objDD.value; }
                    }
                } 

        } catch (e) {
            alert('ERROR 8.1: ' + e.message + arg);
        }
                
        // -----------------------------------------------------
        // Informar del Numero de Registros que tiene el Combo
        // -----------------------------------------------------

        var idnumDBINPUT = "numero_" + objDD.id;                 
        var numDBINPUT = document.getElementById(idnumDBINPUT);  // numero de registros vinculado al DB
        if (numDBINPUT) {
            numDBINPUT.innerHTML = "" + (registros_combo) + "";
            numDBINPUT.style.display = "";
        }

        // -----------------------------------------------------

        if (es_autocombo == 0) {if (p_codigo_combo == "") { objDD.selectedIndex = -1; }}

        // -----------------------------------------------------
        // Informar del Numero de Registros que tiene el Combo
        // -----------------------------------------------------

        var esperando_asociado = document.getElementById("cargando_" + objDD.id);  // numero de registros vinculado al DB
        if (esperando_asociado) {esperando_asociado.style.display= "none";}
        if (numDBINPUT) {numDBINPUT.style.display = "";}

        // -----------------------------------------------------
        
        if (inputasociado) { inputasociado.style.visibility = "visible"; }
        else { if (comboasociado) { comboasociado.style.visibility = "visible"; } }

        // if (!Recarga_DropDown(objDD)) { return false }   // Para que genere los cambios en los que éste afecta

    }
    // ---------------------------------------------------------------------
    } catch (e) {
        alert('ERROR 8: ' + e.message + arg);
        return false
    }
    // ---------------------------------------------------------------------
    return true;
}

// ----------------------------------
// ----------------------------------
    function WDatos_Option_DB(sql, vinDD) {
// ----------------------------------
// ----------------------------------

try {
    THERION.WS_general.Datos_Option(sql, vinDD, RDatos_Option_DB, OnError, OnTimeOut);
    } catch (e) {
      alert('ERROR 8:' + e.message);
      return false
    }
  return true;
}

// ----------------------------------
    function RDatos_Option_DB(arg) {
// ----------------------------------

try {

    // ------------------------------------------------
    // Tratamiento de la Informacion por XML recibida
    // ------------------------------------------------

    if (window.DOMParser) {
        parser = new DOMParser();
        doc = parser.parseFromString(arg, "text/xml");
    }
    else {   // para IE
        doc = new ActiveXObject("Microsoft.XMLDOM");
        doc.async = "false";
        doc.loadXML(arg);
    }

    // ------------------------
    // Carga de Datos del XML
    // ------------------------

    var dd = doc.getElementsByTagName("dd");
    for (y = 0; y < dd.length; y++) {
        var idDD = dd[y].getElementsByTagName("id")[0].childNodes[0].nodeValue;
        var objDD = document.getElementById(idDD);              // DD vinculado
        if (objDD) { break; }
    }

    if (objDD) {

        objDD.options.length = 0;   // Vaciar ddl

        var datos = doc.getElementsByTagName("datos");
        for (x = 0; x < datos.length; x++) {
            var opt = new Option(datos[x].getElementsByTagName("v")[0].childNodes[0].nodeValue, datos[x].getElementsByTagName("o")[0].childNodes[0].nodeValue);
            if (x == datos.length - 1) {
                opt.setAttribute("selected", "selected")
            }
            objDD.options.add(opt);
        }

        if (!Recarga_DropDown(objDD)) { return false }    // Para que genere los cambios en los que éste afecta
    }

    // ------------------------
    } catch (e) {
      alert('ERROR 9:' + e.message);
      return false;
        }

    // ------------------------

    return true;
}

// ----------------------------------
// ----------------------------------
    function WDato_DB_Busqueda(sql, vinDD) {
// ----------------------------------
// ----------------------------------

try {
    THERION.WS_general.Dato_DB_Busqueda(sql, vinDD, RDato_DB_Busqueda, OnError, OnTimeOut);
    // ------------------------
    } catch (e) {
      alert('ERROR 10:' + e.message);
      return false;
    }
    // ------------------------
    return true;
}

// ----------------------------------
    function RDato_DB_Busqueda(arg) {
// ----------------------------------

try {
    var error = valor_xml(arg, 'error');
    if (error != "") {
        alert(error);
        return;
    }

    var dd = valor_xml(arg, 'dd');
    var objDD = document.getElementById(dd);  // DD vinculado

    if (objDD) {
        var idobjDBINPUT = "sch_" + objDD.id;                    // Vaciar input vinculado si existe cuando se vacia el dd
        var objDBINPUT = document.getElementById(idobjDBINPUT);  // input vinculado vinculado al DB
        if (objDBINPUT) {
            var dato = valor_xml(arg, 'datos');
            objDBINPUT.value = dato;

         }
    }
    // ------------------------
    } catch (e) {
      alert('ERROR 11:' + e.message);
      return false;
    }
    // ------------------------
    return true;
}