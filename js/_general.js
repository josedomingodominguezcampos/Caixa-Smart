// -------------------------------------------
   function GetScreenCordinates(obj) {
// -------------------------------------------
    var p = {};
    p.x = obj.offsetLeft;
    p.y = obj.offsetTop;
    while (obj.offsetParent) {
        p.x = p.x + obj.offsetParent.offsetLeft;
        p.y = p.y + obj.offsetParent.offsetTop;
        if (obj == document.getElementsByTagName("body")[0]) {
            break;
        }
        else {
            obj = obj.offsetParent;
        }
    }
    return p;
}

// -------------------------------------------
    function Mostrar_Pantalla_Esperando() {
// ------------------------------------------

    try {

        var h_screen = document.body.clientHeight;
        var dw = $get(div_wait)
        dw.style.height = h_screen+'px';
        dw.style.zIndex = 20000;
        if (dw.style.display == "none") { dw.style.display = "inline"; }
        document.images[im_wait].src = "img/big-roller.gif";
        if (!desactivar_boton_refrescar()) { return false }
        return true;
    }
    catch (e) {
        alert('Error: ' + e.message);
        return false;
    }
}

// ------------------------------------------
    function Quitar_Pantalla_Esperando() {
// ------------------------------------------

    try {
        var dw = $get(div_wait)
        if (dw.style.display == "inline") { dw.style.display = "none"; }
        document.images[im_wait].src = "";
        if (!activar_boton_refrescar()) { return false }
        return true;
    }
    catch (e) {
        alert('Error: ' + e.message);
        return false;
    }
}

// ---------------------------------------------------
// Funciones de TimeOut/Failed en llamadas WebServices
// ---------------------------------------------------

function OnTimeOut(arg) { alert("Error por Tiempo caducado"); }
function OnError(arg) {alert("Error: " + arg._message);}

function OnTimeOut_Sin_Aviso(arg) {  }
function OnError_Sin_Aviso(arg) { }

function GuardaScrollPos(campo, pos) {
    var obj_scroll = document.getElementById(campo);
    if (obj_scroll) {
        obj_scroll.value = pos;
    }
}

// ----------------

function  señ(row, color) {for (var i = 0, cell; cell=row.cells[i]; i++) { cell.style.backgroundColor = color; } }
function dseñ(row, color) {for (var i = 0, cell; cell=row.cells[i]; i++) { cell.style.backgroundColor = color; } }

// ----------------
// Funciones Espera
// ----------------

function sleep_old(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}

// ---------------------------------------
    function sleep(delay) {
// ---------------------------------------
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}

// ---------------------------------------
   function Posiciona_Combo(combo, dato) {
// ---------------------------------------
    obj = document.getElementById(combo);
    for (o = 0; o < obj.length; o++) {
        if (obj.options[o].value == dato) {
            obj.selectedIndex = o;
        }
    }
}

// ----------------------------
// Limpia los Campos de Edicion
// ----------------------------

// ------------------------------------------------------
   function Limpia_Campos(aTag, aObj, aTip) {
// ------------------------------------------------------

    var obj;
    var x = 0;

    for (x = 0; x < aTag.length; x++) {

        obj = document.getElementById(aObj[x]);
        tip = aTip[x];

        if (tip == "combo") {
            if (!obj) {
                obj = $find(aObj[x]);
                obj.set_SelectedValue('');
                obj._onParentChange(null, true);
            }
            else { obj.selectedIndex = -1; }
        }
        else {
            var typeobj = document.getElementById(aObj[x]).type;
            if (typeobj == "checkbox") { obj.checked = false; } else { obj.value = ""; }
        }
    }
}

// ---------------------------------------------------------------------
   function XML_Carga_Datos(arg, aTag, aObj, aTip, aUpd, fEncontrados) {
// ---------------------------------------------------------------------

    // ------------------------
    // Captura de Datos por XML
    // ------------------------

    if (window.DOMParser) {
        parser = new DOMParser();
        doc = parser.parseFromString(arg, "text/xml");
    }
    else {                                                   // Internet Explorer
        doc = new ActiveXObject("Microsoft.XMLDOM");
        doc.async = "false";
        doc.loadXML(arg);
    }

    // ---------------
    // Carga de Datos
    // ---------------

    Limpia_Campos(aTag, aObj, aTip);  // Vaciado de Datos

    var datosXML = doc.getElementsByTagName("datos");

    if (datosXML.length > 0) {

        var obj;
        var tip;
        var nodo;
        var dato = "";
        var x = 0;

        // ----------------
        // Relleno de Datos
        // ----------------

        for (x = 0; x < aTag.length; x++) {

            obj = document.getElementById(aObj[x]);
            tip = aTip[x];
            var ccdd = false;
            if (tip == "combo") {
                if (!obj) {
                    obj = $find(aObj[x]);
                    ccdd = true;
                }
            }

            if (obj) {
                dato = "";
                nodo = datosXML[0].getElementsByTagName(aTag[x]);
                if (nodo) { if (nodo.length > 0) { if (nodo[0].childNodes.length > 0) { dato = nodo[0].firstChild.nodeValue; } } }

                if (tip == "combo") {
                    if (ccdd) {
                        obj.set_SelectedValue(dato);
                        obj._onParentChange(null, true);
                    }
                    else {
                        sleep(1000);
                        setTimeout('Posiciona_Combo("' + aObj[x] + '","' + dato + '")', 1000)
                    }
                }
                else {
                    var typeobj = document.getElementById(aObj[x]).type;
                    if (typeobj == "checkbox") { obj.checked = (dato == 1); }
                    else {
                        obj.value = dato;
                        if (aTag[x] == "busqueda") {
                            setTimeout('' + fEncontrados + ';', 10);
                        }
                    }
                }
            } else { alert("No encuentro" + aObj[x]); }

        }

        sleep(500);
    }    
}

// ------------------------------------------------------
  function XML_Graba_Datos(aTag, aObj, aTip, aUpd) {
// ------------------------------------------------------

    var xml = "<parametros>";
    var obj;
    var tip;
    var dato = "";

    for (x = 0; x < aTag.length; x++) {

        tip = aTip[x];
        obj = document.getElementById(aUpd[x]);

        if (obj) {
            dato = "";
            if (tip == "combo") {
                if (obj.selectedIndex!=-1) {
                    dato = obj.options[obj.selectedIndex].value; 
                }
            }
            else {
                var typeobj = document.getElementById(aObj[x]).type;
                if (typeobj == "checkbox") { if (obj.checked) { dato = "1"; } else { dato = "0"; }; }
                else { dato = obj.value; }
            }
        } else { alert("No encuentro" + aObj[x]); }

        xml += "<" + aTag[x] + ">" + dato + "</" + aTag[x] + ">";
    }

    xml = xml + "</parametros>";
    return xml;

}

// ---------------------------------------
   function Actualiza_Popup() {
// ---------------------------------------
    try {
        var w = window.outerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        var h = window.outerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        window.resizeTo(w, h + 1);
        window.resizeTo(w, h - 1);
    } catch (e) {}
}

// ---------------------------------------
   getDimensions = function (oElement) {
// ---------------------------------------
    var x, y, w, h;
    x = y = w = h = 0;
    if (document.getBoxObjectFor) { // Mozilla
        var oBox = document.getBoxObjectFor(oElement);
        x = oBox.x - 1;
        w = oBox.width;
        y = oBox.y - 1;
        h = oBox.height;
    }
    else if (oElement.getBoundingClientRect) { // IE
        var oRect = oElement.getBoundingClientRect();
        x = oRect.left - 2;
        w = oElement.clientWidth;
        y = oRect.top - 2;
        h = oElement.clientHeight;
    }
    return { x: x, y: y, w: w, h: h };
}

// -------------------------------------------
   function Mostrar_Pantalla_Esperando_Basico() {
// ------------------------------------------

  try {
      document.images[im_wait].src = "img/Traduciendo.gif"
      $get(div_wait).style.zIndex = 20000;
      if ($get(div_wait).style.display == "none") { $get(div_wait).style.display = "inline";}
    return true;  
    }

  catch (e) { alert('ERROR: ' + e.message); return false; }
}

// ------------------------------------------
   function Quitar_Pantalla_Esperando_Basico() {
// ------------------------------------------
    try {
        document.images[im_wait].src="";
        if ($get(div_wait).style.display == "inline") {$get(div_wait).style.display = "none";}
        return true;
    }
    catch (e) { alert('ERROR: ' + e.message); return false; }
}

// -------------------------------------------
   function Idioma_Code () {
// -------------------------------------------
       try {
           var idioma_code = "";
           var f = document.getElementsByClassName("codigo_idioma");
           if (f) { idioma_code = f[0].innerHTML }
           if (idioma_code == "") { idioma_code = "ES"; }
           return idioma_code;
       }
       catch (e) { alert('ERROR: ' + e.message); return false; }
}

// -------------------------------------------
  function Visualizar_Banderas(idioma) {
// -------------------------------------------
      try {
          if (idioma != 0) {
              var f = document.getElementsByClassName("codigo_idioma");
              if (f) { f[0].innerHTML = idioma }
          }
          var idioma_code = Idioma_Code();
          if (!idioma_code) { return false; }
          THERION.WS_general.Visualizar_Banderas(idioma_code, RVisualizar_Banderas, OnError_Sin_Aviso, OnTimeOut_Sin_Aviso);
          return true;
      }
      catch (e) { alert('ERROR: ' + e.message); return false; }
}

// ---------------------------------------
    function RVisualizar_Banderas(arg) {
// ---------------------------------------

        try {
            var resultado = valor_xml(arg, 'resultado');

            if (resultado == 'OK') {
                var eti = valor_xml(arg, 'salida');   // Lista de Posiciones GPS
                var parser;
                var xmlDoc;

                xmlDoc = $.parseXML(eti);

                // ----------------------------------------------------
                // Cambiar los controles de los Idiomas por marcación en lang
                // ----------------------------------------------------

                var idioma_code = Idioma_Code();
                if (!idioma_code) {return false; }

                // ------------------------------
                // Alterar la Bandera del Idioma
                // ------------------------------

                document.getElementById('id_spain').style.visibility = 'hidden'
                document.getElementById('id_ingla').style.visibility = 'hidden'
                document.getElementById('id_alema').style.visibility = 'hidden'
                document.getElementById('id_franc').style.visibility = 'hidden'
                document.getElementById('id_itali').style.visibility = 'hidden'

                document.getElementById('id_spain').style.border = '0px solid #E8272C'
                document.getElementById('id_ingla').style.border = '0px solid #E8272C'
                document.getElementById('id_alema').style.border = '0px solid #E8272C'
                document.getElementById('id_franc').style.border = '0px solid #E8272C'
                document.getElementById('id_itali').style.border = '0px solid #E8272C'

                $('idiomas', xmlDoc).each(
            function () {
                idioma = $(this).find("idioma").text();
                if (idioma == "ES") { document.getElementById('id_spain').style.visibility = 'visible'; }
                else if (idioma == "EN") { document.getElementById('id_ingla').style.visibility = 'visible'; }
                else if (idioma == "GE") { document.getElementById('id_alema').style.visibility = 'visible'; }
                else if (idioma == "FR") { document.getElementById('id_franc').style.visibility = 'visible'; }
                else if (idioma == "IT") { document.getElementById('id_itali').style.visibility = 'visible'; }
            }
            )

                if (idioma_code == "ES") { document.getElementById('id_spain').style.border = '2px solid #E8272C' }
                else if (idioma_code == "EN") { document.getElementById('id_ingla').style.border = '2px solid #E8272C' }
                else if (idioma_code == "GE") { document.getElementById('id_alema').style.border = '2px solid #E8272C' }
                else if (idioma_code == "FR") { document.getElementById('id_franc').style.border = '2px solid #E8272C' }
                else if (idioma_code == "IT") { document.getElementById('id_itali').style.border = '2px solid #E8272C' }

            }
            else {
                var error = valor_xml(arg, 'error');
                alert(error);
            }

        }
        catch (e) { alert('ERROR: ' + e.message); return false; }
}

// -----------------------------
   function CargaIdioma() {
// -----------------------------

try {

    var varios_idiomas ="N"

    if (document.getElementById('id_ingla').style.visibility == 'visible') { varios_idiomas = "S"; }
    if (document.getElementById('id_alema').style.visibility == 'visible') { varios_idiomas = "S"; }
    if (document.getElementById('id_franc').style.visibility == 'visible') { varios_idiomas = "S"; }
    if (document.getElementById('id_itali').style.visibility == 'visible') { varios_idiomas = "S"; }

    if (varios_idiomas == "N") {
        // if (!Quitar_Pantalla_Esperando_Basico()) { return false; }
        return true; 
    }

    if (!Mostrar_Pantalla_Esperando_Basico()) { return false; }

    var idioma_code = Idioma_Code();
    if (!idioma_code) { return false; }

    var xml_traducir = "<root>";
    var obj;
    var xmlDoc;
    var i;
    var f;
    var cadena;
    var cadena_alt;
    var font;
    var NodoName;

    var coletilla = Math.floor((Math.random() * 10000000000) + 1);

    var matches = $('[lang^=TRADUCIR]');
    
    for (x = 0; x < matches.length; x++) {

        if (matches[x].id == "") {matches[x].id = "TRADUCIR_" + coletilla + "" + x;}

        obj = matches[x];

        NodoName = obj.nodeName.toUpperCase();

        cadena = ""; 
        cadena_alt ="";
         
        // -----------------------------------------------------------------------
        // Extraccion de la cadena HTML del objeto o del alt en casos de imagenes
        // -----------------------------------------------------------------------

             if (NodoName == "LABEL" ) { cadena = obj.innerHTML; cadena_alt = obj.alt; }
        else if (NodoName == "DIV"   ) { cadena = obj.innerHTML; cadena_alt = obj.alt; }
        else if (NodoName == "LEGEND") { cadena = obj.innerHTML; cadena_alt = obj.alt; }
        else if (NodoName == "TD"    ) { cadena = obj.innerHTML; cadena_alt = obj.alt; }
        else if (NodoName == "UL"    ) { cadena = obj.innerHTML; cadena_alt = obj.alt; }
        else if (NodoName == "LI"    ) { cadena = obj.innerHTML; cadena_alt = obj.alt; }
        else if (NodoName == "SPAN"  ) { cadena = obj.innerHTML; cadena_alt = obj.alt; }
        else if (NodoName == "P") { cadena = obj.innerHTML; cadena_alt = obj.alt; }

        else if (NodoName == "A"     ) {
                                        cadena_alt = "";
                                        cadena = obj.innerHTML;
                                        if (obj.title != "" && obj.title != undefined) {
                                            i = obj.title.indexOf('<font lang=');
                                            f = obj.title.indexOf('</font>');
                                            if (i >= 0 && f >= 0) { obj.title = obj.title.substring(i + 11 + 1 + idioma_code.length + 2, f); }
                                            cadena_alt = '<font lang="' + idioma_code + '">' + obj.title + '</font>';
                                            }
                                        }
        
        else if (NodoName == "IMG") {
                                         cadena = obj.alt;
                                         cadena_alt = obj.alt; 
                                    }
        else if (NodoName == "INPUT" && (obj.type.toLowerCase() == "submit" || obj.type.toLowerCase() == "button" || obj.type.toLowerCase() == "butt" || obj.type.toLowerCase() == "text")) {
                                        cadena_alt = obj.alt;
                                        if (obj.alt != "" && obj.alt != undefined) {
                                            cadena = obj.alt;
                                            i = cadena.indexOf('<font lang=');
                                            f = cadena.indexOf('</font>');
                                            if (i >= 0 && f >= 0) {
                                                cadena = cadena.substring(i + 11 + 1 + idioma_code.length + 2, f);
                                                }
                                            cadena = '<font lang="' + idioma_code + '">' + cadena + '</font>';
                                        }
                                    }
        else if (NodoName == "SELECT") {
                                        if (obj.alt != "" && obj.alt != undefined) {
                                            cadena_alt = obj.alt; 
                                            cadena = obj.alt;
                                            i = cadena.indexOf('<font lang=');
                                            f = cadena.indexOf('</font>');
                                            if (i >= 0 && f >= 0) {
                                                cadena = cadena.substring(i + 11 + 1 + idioma_code.length + 2, f);
                                                }
                                            cadena = '<font lang="' + idioma_code + '">' + cadena + '</font>';
                                        }
                                    }
        else if (NodoName == "HR"    ) { cadena = ""; cadena_alt = obj.alt; }

        if (cadena_alt === undefined) { cadena_alt = ""; }
        if (cadena === undefined) { cadena = ""; }

        //--------------------------------
        
        if (cadena != "") {
            xml_traducir = xml_traducir + '<trd>';
            xml_traducir = xml_traducir + '<id>' + obj.id + '</id>';
            xml_traducir = xml_traducir + '<nN>' + NodoName + '</nN>';
            xml_traducir = xml_traducir + '<cd>' + replaceAll(replaceAll(cadena,"<","[{]"),">","[}]") + '</cd>';

            lang = "";

            if (cadena != "") {
                i = cadena.indexOf('[{]font lang=');
                f = cadena.indexOf('[{]/font>');
                if (i >= 0 && f >= 0) {
                    font = ReplaceAll(ReplaceAll(cadena.substring(i, f + 9), '[{]', '<'), '[}]', '>');
                    try { xmlDoc = $.parseXML(font); } 
                    catch (e) {alert(e.Description); }
                    $('font', xmlDoc).each(function () { lang = $(this).attr('lang'); })
                }
            }

            if (cadena_alt != "") { xml_traducir = xml_traducir + '<ca>' + replaceAll(replaceAll(cadena_alt, "<", "[{]"), ">", "[}]") + '</ca>'; }
            if (lang != "") { xml_traducir = xml_traducir + '<lg>' + lang + '</lg>'; }

            xml_traducir = xml_traducir + '</trd>';
            xml_traducir = xml_traducir + String.fromCharCode(10);
        }
    }

    xml_traducir = xml_traducir + '</root>';

    THERION.WS_general.Traducir_Pagina_New(xml_traducir, idioma_code, RTraducir_Pagina_New, OnError_Sin_Aviso, OnTimeOut_Sin_Aviso);
    
    return true;

    }

catch (e) {
    alert('Error: ' + e.message);
    return false;
    }

}

// ---------------------------------
   function RTraducir_Pagina_New(arg) {
// ---------------------------------

       try {

           var idioma_code = Idioma_Code();
           if (!idioma_code) { return false; }

           var id;
           var lang;
           var nodeName;
           var cadena;
           var cadena_alt;
           var obj;

           var resultado = valor_xml(arg, 'resultado');

           if (resultado == 'OK') {
               var eti = valor_xml(arg, 'salida');
               var parser;
               var xmlDoc;

               xmlDoc = $.parseXML(eti);

               $('trd', xmlDoc).each(

            function () {

                id = $(this).find("id").text();
                lang = $(this).find("lang").text();
                nodeName = $(this).find("nodeName").text();
                cadena = $(this).find("cadena").text();
                cadena = replaceAll(replaceAll(cadena, "[{]", "<"), "[}]", ">")
                cadena_alt = $(this).find("cadena_alt").text();
                cadena_alt = replaceAll(replaceAll(cadena_alt, "[{]", "<"), "[}]", ">")

                i = cadena_alt.indexOf('<font lang=');
                f = cadena_alt.indexOf('</font>');
                if (i >= 0 && f >= 0) {
                    cadena_alt = cadena_alt.substring(i + 11 + 1 + idioma_code.length + 2, f);
                }

                obj = document.getElementById(id);

                if (obj) {

                    nodeName = obj.nodeName.toUpperCase();

                         if (nodeName == "LABEL") { obj.innerHTML = cadena; obj.title = cadena_alt; }
                    else if (nodeName == "LEGEND") { obj.innerHTML = cadena; obj.title = cadena_alt; }
                    else if (nodeName == "DIV") { obj.innerHTML = cadena; obj.title = cadena_alt; }
                    else if (nodeName == "TD") { obj.innerHTML = cadena; obj.title = cadena_alt; }
                    else if (nodeName == "SPAN") { obj.innerHTML = cadena; obj.title = cadena_alt; }
                    else if (nodeName == "A") {obj.innerHTML = cadena; obj.title = cadena_alt; }
                    else if (nodeName == "P") { obj.innerHTML = cadena; obj.title = cadena_alt; }
                    else if (nodeName == "UL") { obj.innerHTML = cadena; obj.title = cadena_alt; }
                    else if (nodeName == "LI") { obj.innerHTML = cadena; obj.title = cadena_alt; }
                    else if (nodeName == "IMG") { obj.title = cadena_alt; }
                    else if (nodeName == "INPUT" && (obj.type.toLowerCase() == "submit" || obj.type.toLowerCase() == "button" || obj.type.toLowerCase() == "butt")) {

                        i = cadena.indexOf('<font lang=');
                        f = cadena.indexOf('</font>');
                        if (i >= 0 && f >= 0) {
                            cadena = cadena.substring(i + 11 + 1 + idioma_code.length + 2, f);
                            obj.value = cadena;
                        }
                        obj.title = cadena_alt;
                    }
                    else if (nodeName == "INPUT" && (obj.type.toLowerCase() == "text")) { obj.title = cadena_alt; }
                    else if (nodeName == "SELECT") { obj.title = cadena_alt; }
                    else if (obj.nodeName === undefined) { }
                    else { alert(obj.id + " es un " + obj.nodeName + " y no está definido en la cadena de traduccion") }
                }
            }
            )
           }
           else {
               var error = valor_xml(arg, 'error');
               alert(error);
           }

           if (!Quitar_Pantalla_Esperando_Basico()) {return false;}

           var campo_busqueda = document.getElementById("cl_busqueda_" + p_tabla_tratada + "_" + p_capa_entrada + "_" + p_tab);
           if (campo_busqueda) { campo_busqueda.focus(); }

           //-------------------------------------------------------

           return true;
       }

       catch (e) { alert('ERROR: ' + e.message); return false; }
}

// ---------------------
    function Stylos() {
// ---------------------

        try {

            if (!PonerStylo("ul.mtabs", "fontfamily", "fontfamilysolapaapri", "0")) {return false;}
            if (!PonerStylo("ul.mtabs", "fontsize", "fontsizesolapapri", "0")) {return false;}
            if (!PonerStylo("ul.mtabs", "fontcolor", "colorsolapapri", "0")) {return false;}
            // if (!PonerStylo("ul.mtabs", "fontbackcolor", "backgroundcolorsolapageneralpri","0")) {return false;}

            if (!PonerStylo("ul.mtabs li", "fontfamily", "fontfamilysolapapri", "0")) {return false;}
            if (!PonerStylo("ul.mtabs li", "fontsize", "fontsizesolapapri", "0")) {return false;}
            if (!PonerStylo("ul.mtabs li", "fontcolor", "colorsolapapri", "0")) {return false;}
            // if (!PonerStylo("ul.mtabs li", "fontbackcolor", "backgroundcolorsolapapri","0")) {return false;}

            if (!PonerStylo("ul.mtabs li a", "fontfamily", "fontfamilysolapapri", "0")) {return false;}
            if (!PonerStylo("ul.mtabs li a", "fontsize", "fontsizesolapapri", "0")) {return false;}
            if (!PonerStylo("ul.mtabs li a", "fontcolor", "colorsolapapri", "0")) {return false;}
            if (!PonerStylo("ul.mtabs li a", "fontbackcolor", "backgroundcolorsolapapri", "0")) {return false;}

            if (!PonerStylo("ul.mtabs li a.active", "fontfamily", "fontfamilysolapaactivepri", "0")) {return false;}
            if (!PonerStylo("ul.mtabs li a.active", "fontsize", "fontsizesolapaactivepri", "0")) {return false;}
            if (!PonerStylo("ul.mtabs li a.active", "fontcolor", "colorsolapaactivepri", "0")) {return false;}
            if (!PonerStylo("ul.mtabs li a.active", "fontbackcolor", "backgroundcolorsolapaactivepri", "0")) {return false;}

            if (!PonerStylo("ul.mtabs li a:hover", "fontfamily", "fontfamilysolapahoverpri", "0")) {return false;}
            if (!PonerStylo("ul.mtabs li a:hover", "fontsize", "fontsizesolapahoverpri", "0")) {return false;}
            if (!PonerStylo("ul.mtabs li a:hover", "fontcolor", "colorsolapahoverpri", "0")) {return false;}
            if (!PonerStylo("ul.mtabs li a:hover", "fontbackcolor", "backgroundcolorsolapahoverpri", "0")) {return false;}

            if (!PonerStylo("ul.tabs", "fontfamily", "fontfamilysolapaamto", "0")) {return false;}
            if (!PonerStylo("ul.tabs", "fontsize", "fontsizesolapamto", "0")) {return false;}
            // if (!PonerStylo("ul.tabs", "fontbackcolor", "backgroundcolorsolapageneralmto","0")) {return false;}

            if (!PonerStylo("ul.tabs li", "fontfamily", "fontfamilysolapamto", "0")) {return false;}
            if (!PonerStylo("ul.tabs li", "fontsize", "fontsizesolapamto", "0")) {return false;}
            if (!PonerStylo("ul.tabs li", "fontcolor", "colorsolapamto", "0")) {return false;}
            // if (!PonerStylo("ul.tabs li", "fontbackcolor", "backgroundcolorsolapamto","0")) {return false;}

            if (!PonerStylo("ul.tabs li a", "fontfamily", "fontfamilysolapamto", "0")) {return false;}
            if (!PonerStylo("ul.tabs li a", "fontsize", "fontsizesolapamto", "0")) {return false;}
            if (!PonerStylo("ul.tabs li a", "fontcolor", "colorsolapamto", "0")) {return false;}
            if (!PonerStylo("ul.tabs li a", "fontbackcolor", "backgroundcolorsolapamto", "0")) {return false;}

            if (!PonerStylo("ul.tabs li a.active", "fontfamily", "fontfamilysolapaactivemto", "0")) {return false;}
            if (!PonerStylo("ul.tabs li a.active", "fontsize", "fontsizesolapaactivemto", "0")) {return false;}
            if (!PonerStylo("ul.tabs li a.active", "fontcolor", "colorsolapaactivemto", "0")) {return false;}
            if (!PonerStylo("ul.tabs li a.active", "fontbackcolor", "backgroundcolorsolapaactivemto", "0")) {return false;}

            if (!PonerStylo("ul.tabs li a:hover", "fontfamily", "fontfamilysolapahovermto", "0")) {return false;}
            if (!PonerStylo("ul.tabs li a:hover", "fontsize", "fontsizesolapahovermto", "0")) {return false;}
            if (!PonerStylo("ul.tabs li a:hover", "fontcolor", "colorsolapahovermto", "0")) {return false;}
            if (!PonerStylo("ul.tabs li a:hover", "fontbackcolor", "backgroundcolorsolapahovermto", "1")) {return false;}

            return true;

        }

        catch (e) { alert('ERROR: ' + e.message); return false; }

}

// ----------------------------
   function AplicarStylos() {
// ----------------------------

    // Buscar el menu_aplicacion para aplicar el stylo correspoendiente a señalizado

       try {

           var frm = document.getElementsByTagName("span");
           for (i = 0; i < frm.length; i++) {
               if (frm[i].id.slice(-15) == "menu_aplicacion") {
                   var MenuSel = document.getElementById(frm[i].innerHTML);
                   if (MenuSel) {
                       MenuSel.className = "active";
                       break;
                   }
               }
           }
           return true;
       }
       catch (e) { alert('ERROR: ' + e.message); return false; }
}

// -------------------------------------------------------------
    function PonerStylo(objstylo, atrstylo, clavebbdd, ultimo) {
// -------------------------------------------------------------

        try {
            THERION.WS_general.PonerStylo(objstylo, atrstylo, clavebbdd, ultimo, RPonerStylo, OnError_Sin_Aviso, OnTimeOut_Sin_Aviso);
            return true;
        }
        catch (e) { alert('ERROR: ' + e.message); return false; }
}

// -----------------------------
    function RPonerStylo(arg) {
// -----------------------------

        try {

            var objsty = valor_xml(arg, 'objstylo');
            var valsty = valor_xml(arg, 'valstylo');
            var atrsty = valor_xml(arg, 'atrstylo');
            var ultsty = valor_xml(arg, 'ultimo');

            var styleTag = document.getElementById("style_mantenimiento_1");
            if (styleTag) {
                var sheet = styleTag.sheet ? styleTag.sheet : styleTag.styleSheet;
                var rules = sheet.cssRules ? sheet.cssRules : sheet.rules;
                for (var x = 0; x < rules.length; x++) {
                    var Rule = rules[x];

                    if (Rule.selectorText == objsty) {
                        if (atrsty == "fontfamily") { Rule.style.fontFamily = valsty; return }
                        if (atrsty == "fontsize") { Rule.style.fontSize = valsty; ; return }
                        // if (atrsty == "fontcolor") { Rule.style.color = valsty; ; return }
                        // if (atrsty == "fontbackcolor") { Rule.style.backgroundColor = valsty; ; return }
                    }
                }
            }

            styleTag = document.getElementById("style_principal");
            if (styleTag) {
                sheet = styleTag.sheet ? styleTag.sheet : styleTag.styleSheet;
                rules = sheet.cssRules ? sheet.cssRules : sheet.rules;
                for (var x1 = 0; x1 < rules.length; x1++) {
                    Rule = rules[x1];
                    if (Rule.selectorText == objsty) {
                        if (atrsty == "fontfamily") { Rule.style.fontFamily = valsty; return }
                        if (atrsty == "fontsize") { Rule.style.fontSize = valsty; ; return }
                        if (atrsty == "fontcolor") { Rule.style.color = valsty; ; return }
                        if (atrsty == "fontbackcolor") { Rule.style.backgroundColor = valsty; ; return }
                    }
                }
            }

            if (ultsty == "1") {if (!AplicarStylos()) {return false;}; }

            return true;

        }
        catch (e) { alert('ERROR: ' + e.message); return false; }

}

// -----------------------------
    function valor_xml(xml, tag) {
// -----------------------------

    if (xml) {
        var posi = xml.indexOf('<' + tag + '>');
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

// -----------------------------------------------
    function replaceAll(text, busca, reemplaza) {
// -----------------------------------------------
        if (busca == "") { return text; }
        if (busca == reemplaza) { return text; }
        var ncontador = 0; 
        while (text.toString().indexOf(busca) != -1) {
            text = text.toString().replace(busca, reemplaza);
            ncontador++;
            if (ncontador > 10000) {
                alert("problema con replace");
                break
            }
        }
    return text;
}

// -----------------------------------------------
    function replace(text, busca, reemplaza) {
// -----------------------------------------------
    text = text.toString().replace(busca, reemplaza);
    return text;
}

// -------------------------
    function Left(str, n) {
// -------------------------
    if (n <= 0)
        return "";
    else if (n > String(str).length)
        return str;
    else
        return String(str).substring(0, n);
}
// -------------------------
    function Right(str, n) {
// -------------------------
    if (n <= 0)
        return "";
    else if (n > String(str).length)
        return str;
    else {
        var iLen = String(str).length;
        return String(str).substring(iLen, iLen - n);
    }
}