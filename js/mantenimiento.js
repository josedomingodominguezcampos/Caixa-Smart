var diferencia_milisegundos = "";
var WHTML_General_running;

// ------------------------------------------

var script_control_ficheros = ""
    + " // Ver_Variables();"
    + " var c1=configurar_panel_ficheros();"
    + " var c2=posicionar_capa();"
    + " // Cargar_Valor_Acceso_Directo();";

// ------------------------------------------

var geocoder;
var map;
var marker;
var markerAuto;
var latLng;
var infowindow;
var infowindowContent;
var spread_gen;
var searchBox;
var autocompletegeo;

var card_geo = document.getElementById('pac-card');
var input_geo = document.getElementById('pac-input');
var types_geo = document.getElementById('type-selector');
var strictBounds_geo = document.getElementById('strict-bounds-selector');

// ------------------------------------------

var layermap = new Array();
var mapaGEO = null;
var GEODatosDiv = null;
var geopuntos = new Array();

var mapgoogle = null;
var markergoogle = null;

// ------------------------------------------

var id_registro_grid = new Array();
var id_tabla_grid = new Array();
var tipo_grabacion= ""
var color_fondo_row_grid_over=""
var color_fondo_row_grid=""

var codigo_fichero_bajar;
var objeto_man_cambiar_html;
var refrescar_html_general;
var condicionando;

var timer_correo;
var timer_validacion;
var timer_ponerhora;
var timer_actualizar_grid;
var timer_acceso_directo;
var timer_hide_menusuperior;

var timer_ficheros;
var capa_posicionada = 0;

var p_lista_parametros = "";
var p_registro_validado = 0;
var aIdfichero;
var agrega_ficheros_desde_grid = 0;

var tabla_ficheros_desde_grid = "";
var campo_tabla_ficheros_desde_grid = "";
var codigo_tabla_ficheros_desde_grid = 0;

var filtros_emitidos = "";
var filtros_adicionales = "";
var valores_actuales = "";
var p_ws_postparametros = "";
var p_datos_precargados = "";
var p_acceso_directo_valor = "";

// ------------------------------------------

var p_capa_entrada = 0;
var p_grid_primera_vez = "S";
var p_num_tab = 0;
var p_tabla_tratada = "";
var p_tabla_maestra = "";
var p_codigo_tratado = 0;
var p_codigo_tratado_antes_borrado = 0;
var p_bajar_capa_despues_borrado = 0;
var p_contador_alta_foranea = 0;
var p_codigo_maestra = 0;
var p_where = "";
var p_where_tabla = "";
var p_contenedor = "";
var div_rejilla = "";
var p_tab = "";
var p_tipo_informacion="";
var p_pagina=0;
var p_texto_buscado = "";
var p_campo_ordenacion = "";
var p_busqueda_directa = "";
var p_filtros_frontales = "";
var p_seleccion_filtrado = "";
var p_filtros = "";
var p_orden_ordenacion = "";
var p_tipo_registros = "";
var p_accion = "";
var p_dd_recargar;
var p_dd_recargar_no_procede;
var p_impresion = 0;

var p_otra_tabla = "";
var p_solo_rejilla = "";

var p_codigo_mostrar_detalle = new Array();
var p_codigo_mostrar_detalle_previo = new Array();

// -----------------------------------------

var ultima_XML_Carga_Grabacion_Condicionar = "";
var ultima_XML_Carga_Grabacion_Informar = "";
var ultima_XML_Carga_Grabacion_Computar = "";

// ------------------------------------------

var p_hilo = new Array();
var p_tabla_hilo = new Array();

// ------------------------------------------

var p_capa_entrada_ant = new Array();
var p_tabla_tratada_ant = new Array();
var p_tabla_maestra_ant = new Array();
var p_codigo_tratado_ant = new Array();
var p_codigo_maestra_ant = new Array();
var p_where_ant = new Array();
var p_where_tabla_ant = new Array();
var p_contenedor_ant = new Array();
var p_tab_ant = new Array();
var p_tipo_informacion_ant = new Array();
var p_pagina_ant = new Array();
var p_texto_buscado_ant = new Array();
var p_campo_ordenacion_ant = new Array();
var p_seleccion_filtrado_ant = new Array();
var p_filtros_ant = new Array();
var p_orden_ordenacion_ant = new Array();
var p_tipo_registros_ant = new Array();
var p_impresion_ant = new Array();
var p_accion_ant = new Array();
var p_dd_recargar_ant = new Array();

var objeto_cambiar_html;
var hide_capa_completado;
var baja_capa_completado;

// ---------------------------------------

function start_validacion() { timer_validacion = window.setInterval("if (p_registro_validado != -1) {stop_validacion(); if (p_registro_validado == 1) {WWGraba_Registro();}}", 300); }
function stop_validacion() { window.clearInterval(timer_validacion); }
function stop_correo() { window.clearInterval(timer_correo); }

// -------------------------
    function starttimer() {
// -------------------------
 // timer_ficheros = window.setInterval(script_control_ficheros                        ,  300); // Indicamos que se ejecutará la función action cada  0.3 segundos.
 // timer_ponerhora = window.setInterval("var phs=ponerhoraservidor();"                , 1000); // Indicamos que se ejecutará la función action cada  1   segundos.
 // timer_autorefresco = window.setInterval("var ri=Refresco_Individual();"            ,10000); // Indicamos que se ejecutará la función action cada 10   segundos.
 // timer_autorefresco_acciones = window.setInterval("var ra=Refresco_Grid_Acciones();",10000); // Indicamos que se ejecutará la función action cada 10   segundos.
 // timer_hide_menusuperior = window.setInterval("var r=Hide_Menu_Superior();"         , 5000); // Indicamos que se ejecutará la función action cada  5   segundos.
 // timer_acceso_directo = window.setInterval("Cargar_Valor_Acceso_Directo();"         ,  500); // Indicamos que se ejecutará la función action cada 20   segundos.
}

// ------------------------------------------------------------
   function Temporizador() {
// ------------------------------------------------------------

    // Ver_Variables();
    // Cargar_Valor_Acceso_Directo();

    if (tiempo_panel_ficheros == 0) { var c1 = configurar_panel_ficheros(); tiempo_panel_ficheros = 25 } else { tiempo_panel_ficheros -= 1; }
    if (tiempo_posicion_capas == 0) { var c2 = posicionar_capa(); tiempo_posicion_capas = 20 } else { tiempo_posicion_capas -= 1; }
    if (tiempo_reloj == 0) { THERION.WSmantenimiento.Dame_Hora_Servidor(RMponerhoraservidor, OnError_Sin_Aviso, OnTimeOut_Sin_Aviso); tiempo_reloj = 10 * 60 } else { tiempo_reloj -= 1; }
    if (tiempo_menu_general == 0) { var hms = Hide_Menu_Superior(); tiempo_menu_general = 2 * 60 } else { tiempo_menu_general -= 1; }
    if (tiempo_refresco_individual == 0) { var ri = Refresco_Individual(); tiempo_refresco_individual = 15 * 60 } else { tiempo_refresco_individual -= 1; }
    if (tiempo_refresco_acciones == 0) { var ra = Refresco_Grid_Acciones(); tiempo_refresco_acciones = 20 * 60 } else { tiempo_refresco_acciones -= 1 }

	// -----------------------------
	// Actualizacion de XLS usuarios
    // -----------------------------

	if (tiempo_exceldatos == 0) {
		var exceldatos= document.getElementsByClassName("exceldatos");
		if (exceldatos) {
		   for (var d = 0; d < exceldatos.length; d++) {
				var exceldato = exceldatos[d];
				var sentencia = exceldato.getAttribute("data-sentencia");
				Evaluar(sentencia);
		   }
		}
	    tiempo_exceldatos = 20 * 60;
	} else { tiempo_exceldatos -= 1; }
    
	// --------------------------------------------------------------
	// Autoarranques de procesos que por inyeccion HTML no se podría
    // --------------------------------------------------------------

	if (tiempo_autoarranques == 0) {
		var autoarranques=document.getElementsByClassName("autoarranques");
		if (autoarranques) {
		   for (var d = 0; d < autoarranques.length; d++) {
				var autoarranque = autoarranques[d];
				if (autoarranque.style.display==="") 
				   {
					autoarranque.style.display="none";
					autoarranque.className = "autoarranques_ejecutado"
					$get(autoarranque.id).click();
					}
		   }
		}        
		tiempo_autoarranques = 30
	} else { tiempo_autoarranques -= 1; }
	
	// -----------------------------------------------------------------------------------------------
	// refrescogrid (se usa para después de los altas de los registros para que se actualice rápido)
    // -----------------------------------------------------------------------------------------------
	
	if (tiempo_refresco_altas == 0) {
	
		var refrescogrids=document.getElementsByClassName("refrescogrid_new");
		
		if (refrescogrids) {
		   
		   for (var d = 0; d < refrescogrids.length; d++) {
				
				var refrescogrid = refrescogrids[d];
				var pendiente=refrescogrid.getAttribute("data-nuevo");
				var icoborrar=refrescogrid.getAttribute("data-icoborrar");
				var semilla  =refrescogrid.getAttribute("data-semilla");
				
				if (pendiente==="S") {
					
					refrescogrid.style.border="solid 0px #a00";
					refrescogrid.setAttribute("data-nuevo","N");  // Actualizo Flag para que no se ejecute más
					refrescogrid.className = "refrescogrid"
					
					id_registro_grid[p_capa_entrada]=semilla;
					
					Refresca_Registro_Grid();                     // Refresca la Informacion del Registro Completo 
					
					// ---------------------------------------------------
					// Activa el Icono de Borrado por si no está activado
					// ---------------------------------------------------
					
					var ico_borrado=document.getElementById(icoborrar);
					if (ico_borrado) {
						ico_borrado.style.display="";
					}
					
					// ---------------------------------------------------
					// Refresca la Informacion de los Registros Asociados
					// ---------------------------------------------------
					
					var tabla_asociados_id=refrescogrid.getAttribute("data-tabla");			
					var tabla_asociados   =document.getElementById(tabla_asociados_id);
					
					if (tabla_asociados) {
					   for (var r = 0; r < tabla_asociados.rows.length; r++) {
						   var rw = tabla_asociados.rows[r];
						   for (var c = 0; c < rw.cells.length; c++) {
							   var d1 = rw.cells[c].childNodes[0];
							   if (d1) {
								   var clase = d1.className;
								   if (clase) {
									   if (clase.indexOf("refresco_detalle") >= 0) {
										   var id1=d1.id;
										   if (id1) {
											   THERION.WSmantenimiento.HTML_Refresco_Detalle(id1, RHTML_Refresco_Detalle, OnError_Sin_Aviso, OnTimeOut_Sin_Aviso);
										   }
									   }
								   }
							   }
						   }
					   }
					}				
					
					// ---------------------------------------------------
				}
		   }
		}        	
		
		tiempo_refresco_altas = 45
		
	} else { tiempo_refresco_altas -= 1; }
	
    // -----------------------------------------------------------------------------------------------
	
	gRATemporizador = requestAnimationFrame(Temporizador);

}

// -----------------------------------
   function iniciar_temporizador() { gRATemporizador = requestAnimationFrame(Temporizador); }
// -----------------------------------
   function detener_temporizador() { cancelAnimationFrame(gRATemporizador); }
// -----------------------------------

// -----------------------------------
   function RMponerhoraservidor(arg) {
// -----------------------------------
    if (arg == "ERROR") {
        if (!Quitar_Pantalla_Esperando()) { return false; }
        detener_temporizador();
        window.location.href = "login.aspx";
    }
    else {
        var hora = $get("horasistema");
        if (hora) { hora.innerHTML = "HS: " + arg ; }
    }
}

// ------------------------------------
   function iniciar_computacion() {
// ------------------------------------

    gRATemporizador = gRAComputador = requestAnimationFrame(Computacion);
}
//-------------------------------------------------------------------------------------------------------------------------------------

// ----------------------------
   function Computacion() {
// ----------------------------

   if (tiempo_computacion == 0) {
        tiempo_computacion = 60;
        var marca_edicion = document.getElementById("marca_de_edicion_" + p_tabla_tratada);
        if (!marca_edicion || marca_edicion == "undefined" || marca_edicion.style.display=="none" ) {
            if (gRAComputador) {
                cancelAnimationFrame(gRAComputador)
            }
            return true;
        }

        var CR = WCondiciona_Registro();
        var CD = WComputar_Datos();
        var ID = WInformar_Datos();
    }

    else { tiempo_computacion -= 1; }

   gRAComputador = requestAnimationFrame(Computacion);

}

// -----------------------------------------
   function Cargar_Valor_Acceso_Directo() {
// ------------------------------------------
   var acceso_directo = document.getElementById("acceso_directo_1");
   if (acceso_directo) {if (acceso_directo.value == "") {acceso_directo.value = p_acceso_directo_valor } }
}

// ---------------------------------
// ---------------------------------
   function Evaluar(sentencia) {
// ---------------------------------
// ---------------------------------

       sentencia = replaceAll(sentencia, "··", '"');
       sentencia = replaceAll(sentencia, "·", "'");
       sentencia = replaceAll(sentencia, "&quot", '"');
       sentencia = replaceAll(sentencia, "&#039", "'");

       THERION.WSmantenimiento.Evaluar(sentencia, REvaluar, OnError_Sin_Aviso, OnTimeOut_Sin_Aviso);

}

// --------------------------------
// --------------------------------
   function REvaluar(arg) {
// --------------------------------
// --------------------------------
   try {
       var tmpFunc = new Function(arg);
       tmpFunc();
    }
    catch (e) {
        alert( 'ERROR: '+e.message); 
    }
    finally {
        if (!CargaIdioma()) { return false; }
        if (!Quitar_Pantalla_Esperando()) { return false; }
    }
    return true;
}
// --------------------------------
   function Hide_Menu_Superior() {
// --------------------------------
    try {
        if (dentro_menu_general == 'SI') { return true }
        var ms = document.getElementsByClassName("MENUGENERAL");
        if (ms) {
            if ($(ms[0]).css("display") == "none") { return true; }
            var opcion = $('[id^="li_tab_"]');
            if (opcion.length > 0) { $(ms[0]).hide('slow') }
        }
    } catch (e) { alert('ERROR: ' + e.message); return false; }
    return true;
}

// ---------------------------------
   function Refresco_Individual() {
// ---------------------------------

       try {

           if ($get(div_wait).style.display == "inline") {return true;}

           // --------------------------------------------------------- 
           // Para que esto se active en la funcion hay que indicar:
           // '<table class="tabla_grid" id="#refresco_individual#">'
           // ---------------------------------------------------------

           var tb = document.getElementById('auto_refresco_' + p_tabla_tratada + '_' + p_capa_entrada + '_' + p_tab, p_tabla_tratada);
           if (tb) { if (tb.innerHTML == '[Auto Refresco OFF]') { return true } } else { return true }

           var filas = document.getElementsByClassName("tabla_grid");
           if (filas) {
               var tbuscado = p_texto_buscado;
               for (var x = 0; x < filas.length; x++) {
                   var tabla = filas[x];
                   var id = tabla.id;   // La Tabla tiene que tener un Id asignado
                   if (id != "") {
                       // Check del grid mostrado en ese momento, ex: // clientes_1_0#$9999#$*13*
                       if (id.indexOf(p_tabla_tratada + '_' + p_capa_entrada + '_' + p_tab + '#') >= 0) {
                           var g = id.substring(0, id.indexOf("#"));
                           g = replaceAll(g, p_tabla_tratada + '_' + p_capa_entrada + '_' + p_tab, p_tabla_tratada);
                           var c = id.substring(id.indexOf("#$") + 2, id.lastIndexOf("#$"));
                           var u = id.substring(id.indexOf("*") + 1, id.lastIndexOf("*"));
                           var l = "grid_" + g + "(" + c + "," + u + ")";
                           THERION.WSmantenimiento.HTML_Refresco(l, id, tbuscado, RHTML_Refresco, OnError_Sin_Aviso, OnTimeOut_Sin_Aviso);
                       }
                   }
               }
           }

           if (!Refresca_Detalles_Asociados_Grid("")) { return false; }

       }

       catch (e) { alert('ERROR: ' + e.message); return false; }
       return true;
}

// --------------------------------------
   function Refresca_Registro_Grid() {
// --------------------------------------

       try {

           var id = id_registro_grid[p_capa_entrada];

           if (id) {

               if (id != "") {
                   var tbuscado = p_texto_buscado;
                   var idv = replaceAll(id, "RI$$_", "");
                   if (idv.indexOf(p_tabla_tratada + '_' + p_capa_entrada + '_' + p_tab + '#') >= 0) {
                       var g = idv.substring(0, idv.indexOf("#"));
                       g = replaceAll(g, p_tabla_tratada + '_' + p_capa_entrada + '_' + p_tab, p_tabla_tratada);
                       var c = idv.substring(idv.indexOf("#$") + 2, idv.lastIndexOf("#$"));
                       var u = idv.substring(idv.indexOf("*") + 1, idv.lastIndexOf("*"));
                       var l = "grid_" + g + "(" + c + "," + u + ")";
                       if (u == "XXX") { l = "grid_" + g + "(" + c + ")"; } // Eliminar el usuario si XXX porque indica que no tiene usuario la funcion grid
                       THERION.WSmantenimiento.HTML_Refresco(l, id, tbuscado, RHTML_Refresco, OnError_Sin_Aviso, OnTimeOut_Sin_Aviso);
                   }
               }
           }

       }

       catch (e) {
           alert('ERROR: ' + e.message);
           return false;
       }

       return true;
}

// --------------------------------
// --------------------------------
    function RHTML_Refresco(arg) {
// --------------------------------
// --------------------------------

        try {

            var resultado          = valor_xml(arg, 'resultado_refresco');
            var resultado_asociado = valor_xml(arg, 'resultado_refresco_asociado');
            var codigo_tabla       = valor_xml(arg, 'codigo_tabla_refresco');

            if (resultado != 'KO') {
                if (codigo_tabla.indexOf("RI$$_") >= 0) {     // Es un Refresco de cambio de Registro (No AUTO)
                    
				    var elemento_referencia = document.getElementById(codigo_tabla);
                    if (elemento_referencia) {
                        var hermano_3 = elemento_referencia.parentNode;
                        if (hermano_3) {
                            var padre_grid = hermano_3.parentNode;
                            if (padre_grid) {
                                var hermano_4 = padre_grid.childNodes[4];
                                if (hermano_4) {
                                    var fila_refrescar = hermano_4.childNodes[0];
                                    if (fila_refrescar) {
                                        if (fila_refrescar.innerHTML != resultado) {
                                            fila_refrescar.innerHTML = resultado;
                                            id_registro_grid[p_capa_entrada] = "";
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                else {       // Es un Refresco AUTO
                    var fila = document.getElementById(codigo_tabla);
                    if (fila) {
                        if (fila.innerHTML != resultado) {
                            fila.innerHTML = resultado;
                        }
                    }
                }
            }

        }
        catch (e) {
            var rfr = document.getElementById('refresco');
            if (rfr) {rfr.innerHTML='ERROR: '+e.message; }
                }
        finally {
            if (!CargaIdioma()) {return false;}
          //if (!Quitar_Pantalla_Esperando()) { return false; }
        }
        return true;
}

// -----------------------------------
   function Refresco_Grid_Acciones() {
// -----------------------------------

    // ----------------------------------------------------------------------------------- 
    // Para que esto se active en la funcion hay que indicar:
    // '<table class="tabla_grid" id="#refresco_acciones#">' en el grid_TABLA_acciones
    // -----------------------------------------------------------------------------------

       try {

           if ($get(div_wait).style.display == "inline") { return true; }

           var tb = document.getElementById('auto_refresco_' + p_tabla_tratada + '_' + p_capa_entrada + '_' + p_tab, p_tabla_tratada);
           if (tb) { if (tb.innerHTML == '[Auto Refresco OFF]') { return false } }

           var filas = document.getElementsByClassName("autorefresco_acciones");
           if (filas) {
               for (var x = 0; x < filas.length; x++) {
                   var tabla = filas[x];
                   var id = tabla.id;   // La Tabla tiene que tener un Id asignado
                   if (id != "") {
                       // Check del grid mostrado en ese momento, ej: // refresco_acciones_#TABLA#$CODIGO_GRID$*USUARIO*
                       if (id.indexOf('refresco_acciones_#' + p_tabla_tratada + '_' + p_capa_entrada + '_' + p_tab + '#') >= 0) {
                           var g = id.substring(id.indexOf("#") + 1, id.lastIndexOf("#"));
                           g = replaceAll(g, p_tabla_tratada + '_' + p_capa_entrada + '_' + p_tab, p_tabla_tratada);
                           var c = id.substring(id.indexOf("$") + 1, id.lastIndexOf("$"));
                           var u = id.substring(id.indexOf("*") + 1, id.lastIndexOf("*"));
                           var l = "grid_" + g + "_acciones(" + c + "," + u + ")";
                           THERION.WSmantenimiento.HTML_Refresco_Acciones(l, id, RHTML_Refresco_Acciones, OnError_Sin_Aviso, OnTimeOut_Sin_Aviso);
                       }
                   }
               }
           }
       }
       catch (e) { alert('ERROR: ' + e.message); return false; }
       return true;
}

// ----------------------------------------
// ----------------------------------------
    function RHTML_Refresco_Acciones(arg) {
// ----------------------------------------
// ----------------------------------------

        try {
            var resultado = valor_xml(arg, 'resultado_refresco');
            var codigo_id = valor_xml(arg, 'codigo_id_refresco');

            if (resultado != 'KO') {
                var fila = document.getElementById(codigo_id);
                if (fila) { if (fila.innerHTML != resultado) { fila.innerHTML = resultado; } }
            }
        }
        catch (e) { alert('ERROR: ' + e.message); return false; }
        return true;
}

// -------------------------------------------------------
   function Refresca_Detalles_Asociados_Grid(idRwodGrid) {   // El idRwodGrid es el a que contiene el numero
// -------------------------------------------------------

       try {
           if (idRwodGrid == "") {
               var detalles = document.getElementsByClassName("refresco_detalle");
               if (detalles) {
                   for (var d = 0; d < detalles.length; d++) {
                       var detalle = detalles[d];
                       var id = detalle.id;
                       if (id != "") {
                           THERION.WSmantenimiento.HTML_Refresco_Detalle(id, RHTML_Refresco_Detalle, OnError_Sin_Aviso, OnTimeOut_Sin_Aviso);
                       }
                   }
               }
           }
		   
           else {         
               
               var aReferenciaId = document.getElementById(idRwodGrid); if (!aReferenciaId) { return; }  // Elemento Referenciado
			   
               aReferenciaId = aReferenciaId.parentNode   ; if (!aReferenciaId) { return; } // Zona del TD (Hijo Nº 3)
               aReferenciaId = aReferenciaId.parentNode   ; if (!aReferenciaId) { return; } // Zona del TR 
               aReferenciaId = aReferenciaId.childNodes[5]; if (!aReferenciaId) { return; } // Zona del TD Asociados
               aReferenciaId = aReferenciaId.childNodes[0]; if (!aReferenciaId) { return; } // Zona del TABLE de Asociados

               var tb = aReferenciaId;

               if (tb.tagName.toUpperCase() == "TABLE") {
                   for (var r = 0; r < tb.rows.length; r++) {
                       var rw = tb.rows[r];
                       for (var c = 0; c < rw.cells.length; c++) {
                           var d1 = rw.cells[c].childNodes[0];
                           if (d1) {
                               if (d1.className == "refresco_detalle") {
                                   var id1 = d1.id;
                                   if (id1 != "") {
									   THERION.WSmantenimiento.HTML_Refresco_Detalle(id1, RHTML_Refresco_Detalle, OnError_Sin_Aviso, OnTimeOut_Sin_Aviso);
                                   }
                               }
                           }
                       }
                   }
               }
           }
       }
       catch (e) { alert('ERROR: ' + e.message); return false; }
       return true;
}

// -------------------------------------------
// -------------------------------------------
   function HTML_Mostrar_Registro_Nuevo(nc) {
// -------------------------------------------
// -------------------------------------------

       try {

           
		   var id_tabla = 'tabla_' + p_tabla_tratada + '_' + p_capa_entrada + '_' + p_tab;
           var t = document.getElementById(id_tabla); if (!t) { alert('TABLA NO ENCONTRADA'); return false; };   // Captar la Tabla que contiene

           var r = t.rows[0]; if (!r) { alert('NO ENCONTRADA PRIMERA ROW'); return false; };                     // Captar la Primera Fila 
           var x0 = r.childNodes[0]; if (!x0) { alert('NO Encontrado Child 0'); return false; };                 // Hijo 0 -> Control de la Tabla

           var x1 = r.childNodes[1]; if (!x1) { if (!WGrid_Tabla()) { return false; }; return false; };          // En el caso de que no se presenta ninguna fila en el Grid -> se actualiza

           var h = r.innerHTML;                                                                                  // Captura todo el codigo de la primera fila para clonar 
           var nr = t.insertRow(0); if (!nr) { alert('NO GENERADA Row CLON desde primera Row'); return false; }; // Inserta la nueva fila al principio de la Tabla

           // Cambia los Códigos del Registro en el HTML

           var co = '#$' + x0.innerHTML + '#$';
           var cn = '#$' + nc + '#$';
           h = replaceAll(h, co, cn);

           // Cambia los Códigos de la llamada al Borrado en el HTML

           var bo = 'WBorra_Registro_Grid(' + x0.innerHTML + ')';
           var bn = 'WBorra_Registro_Grid(' + nc + ')';
           h = replaceAll(h, bo, bn);

           // Cambia los Códigos de la llamada de la Edición

           var eo = 'Editar_Registro(' + x0.innerHTML + ')';
           var en = 'Editar_Registro(' + nc + ')';
           h = replaceAll(h, eo, en);

           // Cambia los Códigos de la Asociados

           var ao = 'detalle_' + p_tabla_tratada + '_' + p_capa_entrada + '_' + p_tab + '##' + x0.innerHTML + '##';
           var an = 'detalle_' + p_tabla_tratada + '_' + p_capa_entrada + '_' + p_tab + '##' + nc + '##';
           h = replaceAll(h, ao, an);

           // Cambia los Códigos de la Tabla que contiene las etiquetas de los asociados

           var yo = 'detalle_' + p_tabla_tratada + '_' + p_capa_entrada + '_' + p_tab + '_#$' + x0.innerHTML + '#$';
           var yn = 'detalle_' + p_tabla_tratada + '_' + p_capa_entrada + '_' + p_tab + '_#$' + nc + '#$';
           h = replaceAll(h, yo, yn);

           // Cambia los Códigos de la Tabla que contiene el icono de Borrado

           var yo = 'borra_registro_' + p_tabla_tratada + '_' + p_capa_entrada + '_' + p_tab + '_' + x0.innerHTML + '';
           var yn = 'borra_registro_' + p_tabla_tratada + '_' + p_capa_entrada + '_' + p_tab + '_' + nc + '';
		   var idicoborrar=yn;
           h = replaceAll(h, yo, yn);


           var wo = ",'" + x0.innerHTML+"',f)";
           var wn = ",'" + nc + "',f)";
           h = replaceAll(h, wo, wn);
	   
           // Clonar Eventos del Row

           nr.onclick = r.onclick
           nr.onmouseover = r.onmouseover
           nr.onmouseout = r.onmouseout

           // Incrusta el nuevo codigo HTML en la línea nueva

           nr.innerHTML = h;

           // Control en el Nuevo Registro para Actualizar algunos datos en el primer TD 

           var h0 = nr.childNodes[0]; if (!h0) { alert('NO Encontrado Hijo 0'); return false; };
           var h1 = nr.childNodes[1]; if (!h1) { alert('NO Encontrado Hijo 1'); return false; };
           var h2 = nr.childNodes[2]; if (!h2) { alert('NO Encontrado Hijo 2'); return false; };
           var h3 = nr.childNodes[3]; if (!h3) { alert('NO Encontrado Hijo 3'); return false; };
           var h4 = nr.childNodes[4]; if (!h4) { alert('NO Encontrado Hijo 4'); return false; };

           h0.innerHTML = nc;
           h2.innerHTML = '0';     // Es el numero de Fila (está display none) -> se vacía

           // Actualizar variable de Control de Cambio

           var h30 = h3.childNodes[0];
           if (!h30) { alert('NO Encontrado Hijo 0 del 3'); return false; };
           var idh30 = h30.id;
           var tw = document.getElementById(idh30); if (!tw) { alert('NO HA SIDO POSIBLE MOSTRAR EL REGISTRO NUEVO. Refresque la información para verlo'); return false; };
           id_registro_grid[p_capa_entrada]=idh30;

           // Detectar el asociado que hay que actualizar

           var referencia_tc =p_tabla_tratada+'_'+p_capa_entrada+'_'+p_tab+"_#$"+nc+"#$";
		   
		   // Mostrar que es un regisgro Nuevo

           h30.innerHTML = '<img'
                          +' id="'+id_tabla+'_nuevo" ' 
		                  +' class="refrescogrid_new"'
		                  +' data-nuevo="S"'
						  +' data-semilla="'+idh30+'"'
						  +' data-icoborrar="'+idicoborrar+'"'
						  +' data-tabla="detalle_'+referencia_tc+'"'
						  +' style="vertical-align:middle;border:solid 1px #a00;"'
						  +' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABF1BMVEUAAADbwgvbxAncxgfbwwncwwrbwgbcwgrbwwnbwgrjxgDbwwnbwwnRuQDbxArbwwrdwwfbwwnmzADbwwnbwwnbwwnYxADbwwnbwwnbwwndwQfbwwnbwwndxAnbwwnbwwnYxAfbwwnZxgnhww/bvwncwwncxAjaxAnawwjawwnbxAjbxArbwwnbxArexQjcwwnbwwnbwwnbwwnewgvcwwjbwwn/qgDawwjaxAraxAncxAnbwwrduxHbtgDbxAncwwv//wDbxAnXvwjbwwrbwwnbwwjbwwndwgjawwjcxAncxQzbwwnVxg7cwQnbwwncxQzawgnawgjbxQfawwnawgjbwwnbwwnbwwnbxAnbwwnbwwnbwwkAAACj8DdOAAAAW3RSTlMAR9IkqrsqUPVPCeHkC4GAJvYKd/OIDeLy+iX+vh7AxSfHGxEcwl9SIrxjTrOFH4mVjMwuXu8DRGeSbJ0PB6NIAawgnupd3kOZVyzuEh3rFlNgI9G1yci/veDj3n+AygAAAAFiS0dEAIgFHUgAAAAJcEhZcwAADukAAA7pAQ4zQhwAAAAHdElNRQfjCQ8JHiDpiZUzAAABLklEQVQ4y72TV1cCMRSEh7XAIgqsKE3AFURUREXshWLDXrHN//8fhoT1GGDPvnict2S+k8xN7gU0+QzDB3eNjFJobHyY5w9QU8DU/eAE+xSa1IApDij8249EB4Fo5Me2pmMcoujMrPLNOF0UV0ljdFVCAkl3IPk3QCpNzmWyzM3b9kI+X1gsLtEuLXNllUynBFAW5BoqiXVsbMLKV6pbCNXg396pCKMM7FIC2JPAvlgc4PAIxycodp06jB7Q8MkTMjk20RIHt3DadQwHqIs9CVR51gDOxfJCAZcKaF/BuYLXsG5ucUd1RS9k+/7BCSlCPPIJNaqQsszs8wtfW1W7IMrs8K30zk7pg70y/+Gpvb/bs2E8W867aYXCg4DW9gh+9vtf+uDA9Bg97+F1Hf9vKgHSRsH1+EMAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTktMDktMTVUMDk6MzA6MzIrMDA6MDDwyeykAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE5LTA5LTE1VDA5OjMwOjMyKzAwOjAwgZRUGAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII="'
						  +' />'

           // Actualizar la informacion del TD de Datos del Registro.
		   
		   // Ahora lo hace el temporizador

           // if (!Refresca_Registro_Grid()) { return false; }
           // if (!Refresca_Detalles_Asociados_Grid("")) { return false; }
                     
           return true;
       }
       catch (e) { alert('ERROR: ' + e.message); return false; }
}

// -------------------------------------------
// -------------------------------------------
   function HTML_Ocultar_Registro_Borrado(codigo_registro_borrar) {
// -------------------------------------------
// -------------------------------------------

   try {
        var id_tabla ='tabla_'+p_tabla_tratada+'_'+p_capa_entrada+'_'+p_tab;
        var tb = document.getElementById(id_tabla); if (!tb) { alert('TABLA NO ENCONTRADA'); return; };  // Captar la Tabla que contien
        for (var r = 0; r < tb.rows.length; r++) {
                var rw = tb.rows[r];
                var d = rw.cells[0];
                var h = d.innerHTML;
                if (h == codigo_registro_borrar) { rw.style.display = "none"; break; }
            }
        return true;
       }
       catch (e) { alert('ERROR: ' + e.message); return false; }
    }

// ---------------------------------------
   function RHTML_Refresco_Detalle(arg) {
// ---------------------------------------

    var resultado = valor_xml(arg, 'resultado_refresco');
    var id_detalle = valor_xml(arg, 'codigo_detalle_refresco');

    if (resultado != 'KO') {
        var detalle = document.getElementById(id_detalle);
        if (detalle) {
            if (resultado == '0') {
                resultado = ''
                detalle.style.paddingLeft = "0px";
                detalle.style.paddingRight = "0px";
                detalle.style.paddingTop = "0px";
                detalle.style.paddingBottom = "0px";
                };
            
            if (detalle.innerHTML != resultado) {
                detalle.innerHTML = resultado;
                detalle.style.paddingLeft = "4px";
                detalle.style.paddingRight = "4px";
                detalle.style.paddingTop = "2px";
                detalle.style.paddingBottom = "2px";
               } 
         }
    }
}

// ----------------------------------------
    function stoptimer() { window.clearInterval(timer_ficheros); }
// ----------------------------------------

// ----------------------------------------
   function activar_boton_refrescar() {
// ----------------------------------------

    try {
        var boton_refrescar_s = document.getElementById('BOTON_REFRESCAR_' + p_tabla_tratada + '_' + p_capa_entrada + '_' + p_tab);
        if (boton_refrescar_s) {
            boton_refrescar_s.style.visibility = 'visible';
        }
    }
    catch (e) { $get('refresco').innerHTML='ERROR: ' + e.message; return false }
    return true
}

// -------------------------------------------
    function desactivar_boton_refrescar() {
// ------------------------------------------

    try {
        var boton_refrescar_s = document.getElementById('BOTON_REFRESCAR_' + p_tabla_tratada + '_' + p_capa_entrada + '_' + p_tab);
        if (boton_refrescar_s) {
            boton_refrescar_s.style.visibility = 'hidden';
        }
    }
    catch (e) { $get('refresco').innerHTML = 'ERROR: ' + e.message; return false }

    return true;
}

// --------------------------------
   function padNmb(nStr, nLen) {
// --------------------------------
    var sRes = String(nStr);
    var sCeros = "0000000000";
    return sCeros.substr(0, nLen - sRes.length) + sRes;
} 

// --------------------------------
    function ponerhoraservidor() {
// --------------------------------

try {

        if (diferencia_milisegundos == "")
           {
             THERION.WSmantenimiento.Dame_Hora_Servidor(Rponerhoraservidor, OnError_Sin_Aviso, OnTimeOut_Sin_Aviso);
           }
        else {
            var hora_local = new Date();
            hora_local.setMilliseconds(hora_local.getMilliseconds() - diferencia_milisegundos);
            var hora_base_datos = padNmb(hora_local.getDate(),2) + "/"
                                + padNmb(hora_local.getMonth(), 2) + "/"
                                + padNmb(hora_local.getFullYear(), 4)
                                + " "
                                + padNmb(hora_local.getHours(),2) + ":"
                                + padNmb(hora_local.getMinutes(),2) + ":"
                                + padNmb(hora_local.getSeconds(), 2);

            var hora = $get("horasistema");
            if (hora) { hora.innerHTML = hora_base_datos; }
        }

} catch (e) { alert('ERROR: ' + e.message); return false; }

    }

// -----------------------------------
   function Rponerhoraservidor(arg) {
// -----------------------------------
    if (arg == "ERROR") 
       { window.location.href = "login.aspx";return false;}
     else 
     {
       var hora_bbdd = new Date(arg);
       var hora_local = new Date();
       diferencia_milisegundos=hora_local.getTime()-hora_bbdd.getTime();
     }
}

// ---------------------------------
    function Inicializa_Arrays() {
// ---------------------------------

        try {

            p_capa_entrada = 0;
            p_grid_primera_vez = "S";
            p_tabla_tratada = "";
            p_tabla_maestra = "";
            p_codigo_tratado = 0;
            p_codigo_maestra = 0;
            p_where = "";
            p_where_tabla = "";
            p_contenedor = "";
            p_tab = "";
            p_tipo_informacion = "";
            p_pagina = 0;
            p_texto_buscado = "";
            p_campo_ordenacion = "";
            p_seleccion_filtrado = "";
            p_filtros = "";
            p_orden_ordenacion = "";
            p_tipo_registros = "";
            p_impresion = 0;
            p_accion = "";
            var x;

            for (x = 1; x < 100; x++) {

                id_registro_grid[x] = "";
                id_tabla_grid[x] = "";

                p_capa_entrada_ant[x] = 0;
                p_tabla_tratada_ant[x] = "";
                p_tabla_maestra_ant[x] = "";
                p_codigo_tratado_ant[x] = 0;
                p_codigo_maestra_ant[x] = 0;
                p_where_ant[x] = "";
                p_where_tabla_ant[x] = "";
                p_contenedor_ant[x] = "";
                p_tab_ant[x] = "";
                p_tipo_informacion_ant[x] = "";
                p_pagina_ant[x] = 0;
                p_texto_buscado_ant[x] = "";
                p_campo_ordenacion_ant[x] = "";
                p_seleccion_filtrado_ant[x] = "";
                p_filtros_ant[x] = "";
                p_orden_ordenacion_ant[x] = "";
                p_tipo_registros_ant[x] = "";
                p_impresion_ant[x] = 0;
                p_accion_ant[x] = "";
                p_dd_recargar_ant[x] = "";
                p_hilo[x] = -1;
                p_tabla_hilo[x] = "..";

                layermap[x] = null;

            }

            for (x = 1; x < 10000; x++) { geopuntos[x] = null; }

            // ----------------------------------------
            // Para Guardar los accesos a los detalles
            // ----------------------------------------

            for (var xcapa = 0; xcapa < 20; xcapa++) {
                p_codigo_mostrar_detalle[xcapa] = new Array();
                p_codigo_mostrar_detalle_previo[xcapa] = new Array();
                for (var xtab = 0; xtab < 20; xtab++) {
                    p_codigo_mostrar_detalle[xcapa][xtab] = "XX";
                    p_codigo_mostrar_detalle_previo[xcapa][xtab] = "XX";
                }
            }
            return true;
        } catch (e) { alert('ERROR: ' + e.message); return false; }

}

// ------------------------------------------
// ------------------------------------------
// -- Funciones de Paginacion de los Grid
// ------------------------------------------
// ------------------------------------------

function Sig_Pag() { if (!Mostrar_Pantalla_Esperando()) { return; }; var opagina=document.getElementById("ir_pagina_" + p_tabla_tratada + "_" + p_capa_entrada + "_" + p_tab); if (opagina) { p_pagina = opagina.value } else { p_pagina=1 };  p_pagina++; if (!WGrid_Tabla()) { return false; }; }
function Ant_Pag() { if (!Mostrar_Pantalla_Esperando()) { return; }; var opagina=document.getElementById("ir_pagina_" + p_tabla_tratada + "_" + p_capa_entrada + "_" + p_tab); if (opagina) { p_pagina = opagina.value } else { p_pagina=1 };  p_pagina--; if (!WGrid_Tabla()) { return false; }; }
function Pri_Pag() { if (!Mostrar_Pantalla_Esperando()) { return; }; p_pagina=1; if (!WGrid_Tabla()) { return false; }; }
function Ult_Pag() { if (!Mostrar_Pantalla_Esperando()) { return; }; p_pagina=-1; if (!WGrid_Tabla()) { return false; }; }
function Ir_Pag(DD) { if (!Mostrar_Pantalla_Esperando()) { return; }; p_pagina = DD.value; var opagina = document.getElementById("ir_pagina_" + p_tabla_tratada + "_" + p_capa_entrada + "_" + p_tab); if (opagina) { p_pagina = opagina.value } else {p_pagina=1}; if (!WGrid_Tabla()) { return false; }; }

// ---------------------------------------
    function tabSwitch(num_tab, tabla) {
// ---------------------------------------

        try {

            if (num_tab == -1) {
                var opcion = document.getElementsByClassName("li_tab_" + tabla);
                if (opcion) { num_tab = replaceAll(opcion[0].id, 'li_tab_0_', '') }
            }

            var new_con = 'con_' + p_capa_entrada + '_' + num_tab;
            var new_tab = 'tab_' + p_capa_entrada + '_' + num_tab;
            var new_li = 'li_tab_' + p_capa_entrada + '_' + num_tab;

            p_num_tab = num_tab;

            if (p_contenedor == new_con) { return true; }  // Si el contenedor activo es el mismo clickeado -> no hacer nada

            // --------------------------------------------------------
            // Buscar Filtros de la Tabla
            // Si encontramos el elemento es la primera vez que entra
            // --------------------------------------------------------

            var div_filtro = document.getElementById(new_con);
            var filtro_tabla = "";

            if (div_filtro) {
                var filtros_tablas = div_filtro.getElementsByClassName("filtro_tabla");
                if (filtros_tablas) {
                    if (filtros_tablas.length > 0) {
                        if (filtros_tablas[0].childNodes[0]) {
                            filtro_tabla = filtros_tablas[0].childNodes[0].nodeValue + " ";
                        }
                        div_filtro.innerHTML = "";
                    }
                }
            }

            // ---------------------------------------------------
            // Hide al anterior tab activo si había alguno activo
            // ---------------------------------------------------

            // Desactivar todos los de la capa activa menos el 0

            for (var x = 1; x < 40; x++) {
                var con_desactivar = document.getElementById("con_" + p_capa_entrada + "_" + x); if (con_desactivar) { con_desactivar.style.display = "none"; }
                var tab_desactivar = document.getElementById("tab_" + p_capa_entrada + "_" + x); if (tab_desactivar) { tab_desactivar.className = ""; }
                var li_desactivar = document.getElementById("li_tab_" + p_capa_entrada + "_" + x); if (li_desactivar) { li_desactivar.className = ""; }
            }

            // ----------------------------------------
            // show al tab referenciado de la Capa
            // ----------------------------------------

            var con_act = document.getElementById(new_con);
            var tab_act = document.getElementById(new_tab);
            var li_act = document.getElementById(new_li);

            if (con_act) {
                con_act.style.display = "block";
                con_act.className = "content";
                }
            else {return true;}

            if (li_act) { li_act.className = "button_seleccionado"; }
            if (tab_act) { tab_act.className = "active_seleccionado"; } else { return true; }

            // -----------------------------------------------------------------
            // Recargar variables de esa capa por cambio de tab en la misma capa
            // -----------------------------------------------------------------

            p_contenedor = new_con;
            p_tab = new_tab;
            p_tabla_tratada = tabla;
            p_where = "";
            p_tabla_hilo[p_capa_entrada] = p_tabla_tratada;

            // ----------------------------------------------------------------------------
            // ver si el nuevo clickleado tenia ya información -> recargar contenido propio
            // ----------------------------------------------------------------------------

            if (con_act.innerHTML == "") { // El contenedor no tiene nada de html todavia
                p_tabla_maestra = "";
                p_codigo_tratado = 0;
                p_where = filtro_tabla;
                p_where_tabla = filtro_tabla;
                p_grid_primera_vez = "S";
                p_pagina = 0;
                p_texto_buscado = "";
                p_campo_ordenacion = "";
                p_seleccion_filtrado = "";
                p_filtros = "";
                p_orden_ordenacion = "";
                p_tipo_registros = "";
                if (!WGrid_Tabla()) { return false; };   // Generar el contenido html e inyectarlo en el tab
            } else {                                     // Captar los datos (deben estar en un textarea llamado cl_parametros_entrada_tabla)
                p_grid_primera_vez = "N";
                var campo_parametros_entrada = document.getElementById("cl_parametros_entrada_" + p_capa_entrada + "_" + p_tabla_tratada + "_" + p_tab);
                if (campo_parametros_entrada) {
                    var arg = campo_parametros_entrada.value;
                    if (!Leer_Lista_Parametros(arg)) { return false; }
                }
            }

            // Ocultar el boton de grabación cuando la solapa no es la 1

            var bt_grabar = document.getElementById("grabar_capa" + p_capa_entrada);
            if (bt_grabar) {
                if (num_tab == 1) { bt_grabar.style.visibility = 'visible' } else { bt_grabar.style.visibility = 'hidden' }
            }

            // Ocultar el boton de grabación cuando la solapa no es la 1

            var bt_borrar = document.getElementById("borrar_capa" + p_capa_entrada);
            if (bt_borrar) {
                if (num_tab == 1) { bt_borrar.style.visibility = 'visible' } else { bt_borrar.style.visibility = 'hidden' }
            }
            return true;
        }

        catch (e) { alert('ERROR: ' + e.message); return false; }

}

// ------------------------------------------------------
    function WHTML_General(procedimiento, subir_capa) {
// ------------------------------------------------------

        try {

            if (!Mostrar_Pantalla_Esperando()) { return false; }

            WHTML_General_running = 1;

            var div_html = document.getElementById(p_contenedor);
            if (!div_html) {
                alert("Expired Session");
                if (!Quitar_Pantalla_Esperando()) { return false; }
                window.location.href = "login.aspx";
                return false;
            }

            procedimiento = replaceAll(procedimiento, "··", '"');
            procedimiento = replaceAll(procedimiento, "·", "'");
            procedimiento = replaceAll(procedimiento, "&quot", '"');
            procedimiento = replaceAll(procedimiento, "&#039", "'");

            // --------------------------

            var nueva_capa = "0";
            if (subir_capa == "undefined") {
                nueva_capa = "1";
            } else {
                nueva_capa = subir_capa;
            }

            // --------------------------

            var parametros_pasados = "";
            refrescar_html_general = 0;
            var campo_parametros = document.getElementById("parametros_" + procedimiento);

            if (campo_parametros) {
                parametros_pasados = campo_parametros.value;
                refrescar_html_general = 1;  // es una llamada realizada desde el propio procedimiento, lo cual no hay que subir capa
                nueva_capa = 0;
            }

            // --------------------------

            if (nueva_capa == 1) {
                if (!Sube_Capa()) { if (!Quitar_Pantalla_Esperando()) { return false; }; return false; }
                var new_con = 'con_' + p_capa_entrada + '_0';
                var new_tab = 'tab_' + p_capa_entrada + '_1';
                p_contenedor = new_con;
                p_tab = new_tab;
            }

            // --------------------------------------------------------------------------
            // Vaciamos el contenedor cuando hay parametros -> indica que hay rellamada
            // para esperar el resultado
            // --------------------------------------------------------------------------

            div_html = document.getElementById(p_contenedor);
            if (div_html) {
                if (refrescar_html_general == 1) {
                    div_html.innerHTML = "";
                }
            }

            // --------------------

            THERION.WSmantenimiento.HTML_General(procedimiento, parametros_pasados, nueva_capa, RHTML_General, OnError, OnTimeOut);
            
            return true;
        
        }

        catch (e) { alert('ERROR: ' + e.message); return false; }

}


// --------------------------------
// --------------------------------
   function RHTML_General(arg) {
// --------------------------------
// --------------------------------

       try {



           var div_html = document.getElementById(p_contenedor);
           if (!div_html) {
               alert("Ha expirado la Sesión.");
               window.location.href = "login.aspx";
               WHTML_General_running = 0;
               return false;
           }

           // Evaluar resultados

           var mostrar_espera = valor_xml(arg, 'mostrar_espera');
           var resultado = valor_xml(arg, 'resultado');
           var alerta = valor_xml(arg, 'alert');
           var salida = valor_xml(arg, 'salida');
           var error = valor_xml(arg, 'error');
           var popup = valor_xml(arg, 'popup');
           var borrar_tr = valor_xml(arg, 'borrar_tr');
           var codigo_fichero = valor_xml(arg, 'codigo_fichero');
           var nombre_ventana = valor_xml(arg, 'nombre_ventana');
           var refrescar_grid = valor_xml(arg, 'refrescar_grid');
           var refrescar_grid_completo = valor_xml(arg, 'refrescar_grid_completo');

           //BRF BASE64
           try {
               //BRF BASE64
               var ficheroBase64 = valor_xml(arg, 'FILEBASE');
               var ficheroName64 = valor_xml(arg, 'FILEBASENAME');
               var ficheroTYPE64 = valor_xml(arg, 'FILEBASETYPE');
               //var ficheroBytes = atob(ficheroBase64);

			   var tipo_fichero ="";
			   
               if (ficheroTYPE64 == "")  {ficheroTYPE64 = 'pdf';}
			   if (ficheroTYPE64.toUpperCase()=="PDF")  {tipo_fichero='application/pdf';}
			   if (ficheroTYPE64.toUpperCase()=="XML")  {tipo_fichero='application/xml';}
			   if (ficheroTYPE64.toUpperCase()=="PNG")  {tipo_fichero='image/png';}
				
               if (ficheroBase64 != "" && tipo_fichero!="" ) 
			   {
				   
				   
				   
					var blob = new b64toBlob(ficheroBase64, tipo_fichero);  // Transformar a Blob
					var fileURL = URL.createObjectURL(blob);
					window.open(fileURL);
				}
			   else  if (ficheroBase64 != "") 
			   {
                   var blob = new b64toBlob(ficheroBase64, ficheroTYPE64);  // Transformar a Blob
				   
                   var link =document.createElement('a');
				   var url  =window.URL.createObjectURL(blob);
                   link.href=url
                   link.download = ficheroName64;
                   link.click();
				   setTimeout(() => {window.URL.revokeObjectURL(url);document.body.removeChild(link);}, 0)				   
				   
                   WHTML_General_running = 0;
                   return true;
               }
			   
			   
           }
           catch (err) {
               alert("Error Procesa Fichero" + err);
               WHTML_General_running = 0;
               return true;
           }

           if (resultado == 'OK') {

               // Mostrar Alerta

               if (alerta != "") { alert(alerta); }

               // ----------------------
               // Apertura de Fichero
               // ----------------------

               if (mostrar_espera == "1") { if (!Mostrar_Pantalla_Esperando()) { return false; }; }                 // muestra imagen de espera

               // ----------------------
               // Apertura de Fichero
               // ----------------------

               if (codigo_fichero != "") {
                   Ver_Fichero_General(codigo_fichero);

                   WHTML_General_running = 0;
                   return true;
               }

               // ----------------------
               // Eliminar el TR
               // ----------------------

               if (borrar_tr != "") {
                   var tr_borrar = document.getElementById(borrar_tr);
                   if (tr_borrar) {
                       tr_borrar.style.display = "none";
                   }
               }

               // ----------------------
               // Procesar la Salida
               // ----------------------

               if (salida != "") {
                   if (popup == 1) {
                       var muestra_correo = "  "
                           + " var gen=window.open('', '" + nombre_ventana + "'); "
                           + " gen.document.write('" + salida + "');"
                           + " stop_correo(); "
                           + " // gen.document.close();";
                       timer_correo = window.setInterval(muestra_correo, 300);
                       WHTML_General_running = 0;
                       return true;
                   }
                   else {
                       div_html.innerHTML = salida;
                   }
               }
           }

           else {
               if (error != "") { alert(error); } else { alert("ERROR (no definido)" + arg) }
               WHTML_General_running = 0;
               return;
           }

           // -----------------------------
           // Levantar la Capa si procede
           // -----------------------------

           var nueva_capa = valor_xml(arg, 'nueva_capa');
           if (nueva_capa == "1") {
               if (p_capa_entrada == 1 && document.getElementById(capa1).style.display == "none") { $get(bt_ed_1).click(); }
               else if (p_capa_entrada == 2 && document.getElementById(capa2).style.display == "none") { $get(bt_ed_2).click(); }
               else if (p_capa_entrada == 3 && document.getElementById(capa3).style.display == "none") { $get(bt_ed_3).click(); }
               else if (p_capa_entrada == 4 && document.getElementById(capa4).style.display == "none") { $get(bt_ed_4).click(); }
               else if (p_capa_entrada == 5 && document.getElementById(capa5).style.display == "none") { $get(bt_ed_5).click(); }
               else if (p_capa_entrada == 6 && document.getElementById(capa6).style.display == "none") { $get(bt_ed_6).click(); }
               else if (p_capa_entrada == 7 && document.getElementById(capa7).style.display == "none") { $get(bt_ed_7).click(); }
               else if (p_capa_entrada == 8 && document.getElementById(capa8).style.display == "none") { $get(bt_ed_8).click(); }
               else if (p_capa_entrada == 9 && document.getElementById(capa9).style.display == "none") { $get(bt_ed_9).click(); }
           }

           if (refrescar_grid_completo == "1") { if (!WGrid_Tabla()) { return false; } }
           if (refrescar_grid == "1") { if (!Refresca_Registro_Grid()) { return false; } }

           WHTML_General_running = 0;

           return true;

       }

       catch (e) { alert('ERROR: ' + e.message); return false; }

       finally { 
	             WHTML_General_running = 0;
	             if (!Refresca_Detalles_Asociados_Grid("")) { return false; }
                 if (!Quitar_Pantalla_Esperando()) { return false; } 
			   }

}

//------------------------------------------------------------
//------------------------------------------------------------
   function b64toBlob(b64Data, contentType, sliceSize) {
//------------------------------------------------------------
//------------------------------------------------------------

       try {

           contentType = contentType || '';
           sliceSize = sliceSize || 512;

           var byteCharacters = atob(b64Data);
           var byteArrays = [];

           for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
               var slice = byteCharacters.slice(offset, offset + sliceSize);

               var byteNumbers = new Array(slice.length);
               for (var i = 0; i < slice.length; i++) { byteNumbers[i] = slice.charCodeAt(i); }

               var byteArray = new Uint8Array(byteNumbers);
               byteArrays.push(byteArray);
           }

           var blob = new Blob(byteArrays, { type: contentType });
           return blob;
       }
       
       catch (e) { alert('ERROR: ' + e.message); return false; }
}

/*

// --------------------------------
// --------------------------------
   function RDameSessionUsuario(arg) 
// --------------------------------
// --------------------------------

{ try {

    if (arg!="ACTIVO") {
        if (!Quitar_Pantalla_Esperando()) { return false; }
        alert("Expired Session");
        window.location.href = "login.aspx";
        return false;
    }
    return true;
} 
catch (e) { alert('Error ' + e.message); return false; }}

*/

// --------------------------------------
    function WGrid_Tabla() {
// --------------------------------------

try {

    if (!Mostrar_Pantalla_Esperando()) { return false; }
    
    // -----------------------------------------
    // Cargar en el contenedor el html del grid
    // -----------------------------------------

    var div_grid = document.getElementById(p_contenedor);
    if (!div_grid) {
        alert("Expired Session");
        if (!Quitar_Pantalla_Esperando()) { return false; }
        window.location.href = "login.aspx";
        return false;
    }

    // --------------------------

    var salida_ok = 0;

    // --------------------------

    var mdp = p_codigo_mostrar_detalle_previo[p_capa_entrada][p_num_tab];
    var md = p_codigo_mostrar_detalle[p_capa_entrada][p_num_tab];

    // --------------------------

    var mismo_registro = 0;
    if (mdp == md) {
        mismo_registro = 1;
    } else {
        p_filtros = "";
    }

    p_codigo_mostrar_detalle_previo[p_capa_entrada][p_num_tab] = p_codigo_mostrar_detalle[p_capa_entrada][p_num_tab];
                
    // --------------------------
    // Captar Busquedas Generales
    // --------------------------

    var campo_busqueda = document.getElementById("cl_busqueda_" + p_tabla_tratada + "_" + p_capa_entrada + "_" + p_tab);
    if (campo_busqueda && mismo_registro==1) {
        p_texto_buscado = campo_busqueda.value;
    } else {
        p_texto_buscado = "";
    }

    // -----------------------
    // Captar Filtros Directos
    // -----------------------

    var sep = ' and 9=9 and ';

    var filtro_general = document.getElementById("filtro_" + p_tabla_tratada + "_" + p_capa_entrada + "_" + p_tab);
    var filtro_general_1 = document.getElementById("filtro_1_" + p_tabla_tratada + "_" + p_capa_entrada + "_" + p_tab);
    var filtro_general_2 = document.getElementById("filtro_2_" + p_tabla_tratada + "_" + p_capa_entrada + "_" + p_tab);

    if (filtro_general && mismo_registro == 1) {
        p_seleccion_filtrado = filtro_general.value;
        if (filtro_general_1 && mismo_registro == 1) { p_seleccion_filtrado += sep + filtro_general_1.value; }
        if (filtro_general_2 && mismo_registro == 1) { p_seleccion_filtrado += sep + filtro_general_2.value; }
        p_seleccion_filtrado = replaceAll(p_seleccion_filtrado, "<", "&lt;");
        p_seleccion_filtrado = replaceAll(p_seleccion_filtrado, ">", "&gt;");
    } else {
        p_seleccion_filtrado = "";
    }

    // --------------------------
    // Captar Busquedas Directas
    // --------------------------

    var busquedas_directas = "";
    if (mismo_registro == 1) {
        for (var bd = 1; bd < 10; bd++) {
            var busqueda_directa = document.getElementById("busqueda_directa_" + p_tabla_tratada + "_" + p_capa_entrada + "_" + p_tab + "_" + bd);
            if (busqueda_directa) {
                if (busqueda_directa.value != "") {   // Han introducido datos
                    var where_busqueda_directa = document.getElementById("where_busqueda_directa_" + p_tabla_tratada + "_" + p_capa_entrada + "_" + p_tab + "_" + bd);
                    if (where_busqueda_directa) {

                        var dato_busqueda_directa = replace(busqueda_directa.value, /["']/g, "");
                        var filtrado_por_busqueda_directa = replaceAll(where_busqueda_directa.value, '#parametro#', dato_busqueda_directa)

                        if (p_seleccion_filtrado == "") {
                            p_seleccion_filtrado += filtrado_por_busqueda_directa + " and";
                        } else {
                            p_seleccion_filtrado += " and " + filtrado_por_busqueda_directa + " and";
                        }
                        busquedas_directas +=  "###" + "busqueda_directa_" + p_tabla_tratada + "_" + p_capa_entrada + "_" + p_tab + "_" + bd + '###' + busqueda_directa.value;
                    }
                }
            }
        }
    }
    p_busqueda_directa = busquedas_directas;

    // --------------------------
    // Captar Filtrados Frontales
    // --------------------------

    var osemilla = document.getElementById("semilla_" + p_tabla_tratada + "_" + p_capa_entrada + "_" + p_tab);
    var semilla = "";
    if (osemilla) { semilla = osemilla.value;}


    var filtros_frontales = "";
    if (mismo_registro == 1) {
        var aFrontales = document.getElementsByClassName("filtro_frontal_" + p_tabla_tratada + "_" + p_capa_entrada + "_" + p_tab);
        for (var i = 0; i < aFrontales.length; i++) {
            var filtro_frontal = aFrontales[i];
            if (filtro_frontal) {
                var icampobbdd = replaceAll(filtro_frontal.id, semilla, "");
                if (filtro_frontal.id.substring(0, 4) == "nulo") { filtros_frontales += icampobbdd + "=" + filtro_frontal.style.borderWidth + ","; } // Para la Etiqueta del "Sin" (se tiene en cuenta el Border width)
                else {  // Para Combos, AutoCombos, Fechas y Numeros 
                    if (filtro_frontal.value != "") { filtros_frontales += icampobbdd + "=" + filtro_frontal.value + ","; }   // Han introducido datos
                    else { filtros_frontales += icampobbdd + "=NULL" + ",";}                                                  // Está vacío el Campo Filtro
                } 
            }
        }
    }

    p_filtros_frontales = filtros_frontales;

    // -----------------------
    // Captar Campo Ordenacion
    // -----------------------

    var combo_ordenacion = document.getElementById("orden_" + p_tabla_tratada + "_" + p_capa_entrada + "_" + p_tab);
    if (combo_ordenacion) {
        p_campo_ordenacion = combo_ordenacion.value;
    }

    // --------------------------------
    // Captar Sentido de la Ordenacion
    // --------------------------------

    var ordenacion_normal = document.getElementById("orden_normal_" + p_tabla_tratada + "_" + p_capa_entrada + "_" + p_tab);
    var ordenacion_inversa = document.getElementById("orden_inverso_" + p_tabla_tratada + "_" + p_capa_entrada + "_" + p_tab);

    if (ordenacion_normal) {if (ordenacion_normal.style.borderWidth == "1px") { p_orden_ordenacion="";}}
    if (ordenacion_inversa) { if (ordenacion_inversa.style.borderWidth == "1px") { p_orden_ordenacion = "desc"; } }
    
    // ----------------
    // Captar Filtrados
    // ----------------

    if (p_seleccion_filtrado != "") {
        if (Right(p_seleccion_filtrado, 4) == " and") {
            p_seleccion_filtrado = String(p_seleccion_filtrado).substring(0, p_seleccion_filtrado.length - 4);
        }
    }

    // --------------------------------------------

    filtros_emitidos = "";
    if (mismo_registro == 1) {
        if (!Regenerar_HTML_Filtros()) {     // Regenera los Filtros Emitidos en filtro_emitidos
            if (!Quitar_Pantalla_Esperando()) { return false; }
            return false;
        }
    }

    // -----------------------------------------

    salida_ok = 1;
    p_tipo_informacion = "G";
    if (!Generar_Lista_Parametros()) { return false; }

    // -----------------------------------------

    // div_grid.innerHTML = "";  // Vaciar el Grid

    var local_solo_rejilla = p_solo_rejilla;
    var tc = p_tabla_tratada + "_" + p_capa_entrada + "_" + p_tab;

    var div_botones = document.getElementById("div_botones_" + tc);
    var div_rejilla = document.getElementById("rejilla_" + tc);

    if (local_solo_rejilla == "S" && (div_rejilla)) {
        div_rejilla.innerHTML = "";
    } else {
        div_grid.innerHTML = "";
    }

    if (!Hide_Menu_Superior()) { return false; }

    if (div_botones) { div_botones.disabled = true }

    THERION.WSmantenimiento.Grid_Tabla(p_lista_parametros, RGrid_Tabla, OnError, OnTimeOut);

    p_datos_precargados="";

}
    catch (e) {
        p_solo_rejilla = "N";
        if (!Quitar_Pantalla_Esperando()) {return false;}
        alert('Error: '+e.message);
        return false;
    }

    finally { if (salida_ok == 0) {$get('refresco').className = 'refresco_normal';} }

}

// --------------------------------
// --------------------------------
    function RGrid_Tabla(arg) {
// --------------------------------
// --------------------------------

    try {

        var tc = p_tabla_tratada + "_" + p_capa_entrada + "_" + p_tab;
        var local_solo_rejilla = p_solo_rejilla;
        p_solo_rejilla = "N";

        // -----------------------------------------
        // Cargar en el contenedor el html del grid
        // -----------------------------------------

        var div_grid = document.getElementById(p_contenedor);
        if (!div_grid) {
            alert("Expired Session");
            window.location.href = "login.aspx";
            return false;
        }

        var div_rejilla = document.getElementById("rejilla_" + tc);
        var div_control = document.getElementById("div_control_" + tc);
        var div_botones = document.getElementById("div_botones_" + tc);

        // ----------------------
        // Vaciado del contenedor
        // ----------------------

        //if (local_solo_rejilla == "S" && (div_rejilla)) {
        //    div_rejilla.innerHTML = "";
        //} else {
        //    div_grid.innerHTML = "";
        //}

        //if (!Hide_Menu_Superior()) { return false; }

        // -----------------------------------------

        var resultado = valor_xml(arg, 'resultado');

        var div_act = document.getElementById(p_contenedor); 
        if (div_act) { var nodes=div_act.getElementsByTagName('*'); for (var i=0; i<nodes.length; i++) {nodes[i].disabled=false;} }
        
        if (resultado == 'KO') 
            {
                var error = valor_xml(arg, 'error');
                alert(error);
                return false; 
            }

        // -----------------------------------------

        if (!Leer_Lista_Parametros(arg)) {return false;}

        // -----------------------------------------
        // Cargar en el contenedor el html del grid
        // -----------------------------------------
        
        var padre_div_grid = div_grid.parentNode;
        var codhtml = "";

        // -----------------------------------------
        // Trozos de código para suplantar 
        // -----------------------------------------

        var innerhtml_div_totalizadora;
        var innerhtml_div_acciones;
        var innerhtml_numpagina;
        var innerhtml_numpaginas;
        var innerhtml_numreg;
        var innerhtml_codigogrid;
        var innerhtml_milisegundos;
        var innerhtml_fechahora;

        var totalregistros = 0;
        var displaybotonexcel = "";
        var visibilitynavegacion = "";
        var displayfiltroactivo = "";
        var colorfondofiltroactivo = "";

        if (local_solo_rejilla == "S") {
            
            innerhtml_div_totalizadora = valor_xml(arg, 'div_totalizadora');
            innerhtml_div_acciones = valor_xml(arg, 'div_acciones');
            innerhtml_numpagina = valor_xml(arg, 'numpagina');
            innerhtml_numpaginas = valor_xml(arg, 'numpaginas');
            innerhtml_numreg = valor_xml(arg, 'numreg');
            innerhtml_codigogrid = valor_xml(arg, 'codigogrid');
            innerhtml_milisegundos = valor_xml(arg, 'milisegundos');
            innerhtml_fechahora = valor_xml(arg, 'fechahora');

            totalregistros = valor_xml(arg, 'totalregistros');
            displaybotonexcel = valor_xml(arg, 'displaybotonexcel');
            displayfiltroactivo = valor_xml(arg, 'displayfiltroactivo');
            colorfondofiltroactivo = valor_xml(arg, 'colorfondofiltroactivo');
            visibilitynavegacion = valor_xml(arg, 'visibilitynavegacion');
            
        }

        // -----------------------------------------

        if (local_solo_rejilla == "S" && (div_rejilla)) {

            div_rejilla.innerHTML = valor_xml(arg, 'salida');

            var odiv_totalizadora = document.getElementById("div_totalizadora_" + tc);
            var odiv_acciones = document.getElementById("div_acciones_" + tc);
            var onumpagina = document.getElementById("ir_pagina_" + tc);
            var onumpaginas = document.getElementById("numpaginas_" + tc);
            var onumreg = document.getElementById("numreg_" + tc);
            var ocodigogrid = document.getElementById("codigogrid_" + tc);
            var omilisegundos = document.getElementById("milisegundos_" + tc);
            var ofechahora = document.getElementById("fechahora_" + tc);
            var oXLS_GENERAL = document.getElementById("XLS_GENERAL_" + tc);
            var obotonexcel = document.getElementById("botonexcel_" + tc);
            var oiconofiltroactivo = document.getElementById("imagen_filtro_" + tc);
            var oetiquetafiltroactivo = document.getElementById("etiqueta_filtro_" + tc);
            var opanelfiltro = document.getElementById("fila_filtros_" + tc);
            var obotonabrecierrafiltro = document.getElementById("abrecierrafiltros_" + tc);
            var onavegacion = document.getElementById("navegacion_" + tc);

            if (odiv_totalizadora) { odiv_totalizadora.innerHTML = innerhtml_div_totalizadora } else { alert("No encuentro odiv_totalizadora") }
            if (odiv_acciones) { odiv_acciones.innerHTML = innerhtml_div_acciones } else { alert("No encuentro odiv_acciones") }
            if (onumpagina) { onumpagina.value = innerhtml_numpagina } else { alert("No encuentro onumpagina") }
            if (onumpaginas) { onumpaginas.innerHTML = innerhtml_numpaginas } else { alert("No encuentro onumpaginas") }
            if (onumreg) { onumreg.innerHTML = innerhtml_numreg } else { alert("No encuentro onumreg") }
            if (ocodigogrid) { ocodigogrid.innerHTML = innerhtml_codigogrid } else { alert("No encuentro ocodigogrid") }
            if (omilisegundos) { omilisegundos.innerHTML = innerhtml_milisegundos } else { alert("No encuentro omilisegundos") }
            if (ofechahora) { ofechahora.innerHTML = innerhtml_fechahora } else { alert("No encuentro ofechahora") }
            if (oXLS_GENERAL) { oXLS_GENERAL.innerHTML = "" } else { alert("No encuentro oXLS_GENERAL") }
            if (obotonexcel) { obotonexcel.style.display = displaybotonexcel } else { alert("No encuentro obotonexcel") }
            if (oiconofiltroactivo) { oiconofiltroactivo.style.display = displayfiltroactivo } else { alert("No encuentro oiconofiltroactivo") }
            if (oetiquetafiltroactivo) { oetiquetafiltroactivo.style.display = displayfiltroactivo } else { alert("No encuentro oetiquetafiltroactivo") }
            if (opanelfiltro) { opanelfiltro.style.display = "none" } else { alert("No encuentro opanelfiltro") }
            if (obotonabrecierrafiltro) { obotonabrecierrafiltro.style.backgroundColor = colorfondofiltroactivo } else { alert("No encuentro obotonabrecierrafiltro") }
            if (onavegacion) { onavegacion.style.visibility = visibilitynavegacion } else { alert("No encuentro onavegacion") }

           }
         else
           { div_grid.innerHTML = valor_xml(arg, 'salida'); }

        // ---------------------
        // Mostrar el contenedor
        // ---------------------

        //$(div_grid).show('fast', 'linear', Quitar_Pantalla_Esperando());
        //if (!Hide_Menu_Superior()) { return false; }
        //$(div_grid).show('fast', 'linear');
        //$(div_grid).show();

        // -----------------------------
        // Levantar la Capa si procede
        // -----------------------------

        if (p_capa_entrada == 1 && document.getElementById(capa1).style.display=="none") { $get(bt_ed_1).click(); }
        else if (p_capa_entrada == 2 && document.getElementById(capa2).style.display == "none") { $get(bt_ed_2).click(); }
        else if (p_capa_entrada == 3 && document.getElementById(capa3).style.display == "none") { $get(bt_ed_3).click(); }
        else if (p_capa_entrada == 4 && document.getElementById(capa4).style.display == "none") { $get(bt_ed_4).click(); }
        else if (p_capa_entrada == 5 && document.getElementById(capa5).style.display == "none") { $get(bt_ed_5).click(); }
        else if (p_capa_entrada == 6 && document.getElementById(capa6).style.display == "none") { $get(bt_ed_6).click(); }
        else if (p_capa_entrada == 7 && document.getElementById(capa7).style.display == "none") { $get(bt_ed_7).click(); }
        else if (p_capa_entrada == 8 && document.getElementById(capa8).style.display == "none") { $get(bt_ed_8).click(); }
        else if (p_capa_entrada == 9 && document.getElementById(capa9).style.display == "none") { $get(bt_ed_9).click(); }

        // ------------------------------
        // Dar foco al campo de búsqueda
        // ------------------------------

        var campo_busqueda = document.getElementById("cl_busqueda_" + tc);
        if (campo_busqueda) { campo_busqueda.focus(); }

        // ---------------------------------
        // Analizar Ocupación del Navegador
        // ---------------------------------

        //var fechaHoraInicial = new Date();
        //var fechaHoraActual;

        //var startTime = fechaHoraInicial.getTime();
        //var actualTime;
        //var milipasados;

        //while (1 == 1) {
        //    if (document.readyState == "complete") { break }
        //    fechaHoraActual = new Date();
        //    actualTime = fechaHoraActual.getTime();
        //    milipasados = actualTime - startTime
        //    if (milipasados > 15000) { break }
        //}

        //if (document.readyState != "complete") { alert('Navegador Ocupado') }


        if (div_botones) { div_botones.disabled = false }
   
        // ---------------------------------------------

        if (!CargaIdioma())               {return false}
        if (!activar_boton_refrescar())   {return false}

        // ---------------------------------------------
        // Lanzar la Recarga de los Filtros en diferido
        // ---------------------------------------------

        if (!(local_solo_rejilla == "S" && (div_rejilla)))
           {
            var ultimo_frontal;

            var aFrontales = document.getElementsByClassName("filtro_frontal_" + tc);
            for (var i = 0; i < aFrontales.length; i++) {
                var filtro_frontal = aFrontales[i];
                if (filtro_frontal) {
                    if (filtro_frontal.id.substring(0, 4) == "fil_") { ultimo_frontal = filtro_frontal; }
                }
            }

            if (ultimo_frontal) {
                if (Recarga_DropDown_Filtros(ultimo_frontal)) {
                    Recarga_DropDown_Filtros(ultimo_frontal);
                }
           }
       }

       return true;
    }

    catch (e) {

        alert('Error ' + e.message);
        return false;
    }

    finally {

        p_grid_primera_vez = "N";
        p_solo_rejilla = "N";

        $get('refresco').className = 'refresco_normal';

        div_rejilla = document.getElementById("rejilla_" + tc);
        div_control = document.getElementById("div_control_" + tc);

        if (div_rejilla && div_control) {

            var h_screen = document.body.clientHeight;
            var h_div_control = div_control.offsetHeight;
            var y_div_rejilla = GetScreenCordinates(div_rejilla).y;
            var y_adicional = 20;

            if (p_capa_entrada != "0") {
                var h_padre = padre_div_grid.style.height;   // % Height Completo del Popup
                h_padre = replaceAll(h_padre, '%', '');
                h_padre = parseInt(h_padre);
                h_padre = h_padre / 100

                h_screen = Math.round(h_padre * h_screen)           // Es Height en pixeles del Popup
                h_div_control = div_control.offsetHeight;           // Es el Height del Div de Control inferior (el que contiene la Tabla y tiempos)
                y_div_rejilla = GetScreenCordinates(div_rejilla).y;
            }

            p = (h_screen - y_div_rejilla - h_div_control - y_adicional);
            p = Math.round(p).toString() + "px";
            div_rejilla.style.height = p;
        }

        if (!Quitar_Pantalla_Esperando()) { return false; }
    }
}

// --------------------------------
// --------------------------------
    function WImprimir_Tabla() {
// --------------------------------
// --------------------------------

    if (!Mostrar_Pantalla_Esperando()) { return; }

    p_impresion = 1;

    var campo_busqueda = document.getElementById("cl_busqueda_" + p_tabla_tratada + "_" + p_capa_entrada + "_" + p_tab);
    if (campo_busqueda) {
        p_texto_buscado = campo_busqueda.value;
    } else {
        p_texto_buscado = "";
    }

    var filtro_general = document.getElementById("filtro_" + p_tabla_tratada + "_" + p_capa_entrada + "_" + p_tab);
    var filtro_general_1 = document.getElementById("filtro_1_" + p_tabla_tratada + "_" + p_capa_entrada + "_" + p_tab);
    var filtro_general_2 = document.getElementById("filtro_2_" + p_tabla_tratada + "_" + p_capa_entrada + "_" + p_tab);

    if (filtro_general) {
        p_seleccion_filtrado = filtro_general.value;
        if (filtro_general_1) { p_seleccion_filtrado = p_seleccion_filtrado + " and 9=9 and " + filtro_general_1.value; }
        if (filtro_general_2) { p_seleccion_filtrado = p_seleccion_filtrado + " and 9=9 and " + filtro_general_2.value; }
    } else {
        p_seleccion_filtrado = "";
    }

    // ---------------------------

    var busquedas_directas = "";
    for (var bd = 1; bd < 10; bd++) {
        var busqueda_directa = document.getElementById("busqueda_directa_" + p_tabla_tratada + "_" + p_capa_entrada + "_" + p_tab + "_" + bd);
        if (busqueda_directa) {
            if (busqueda_directa.value != "") {   // Han introducido datos
                var where_busqueda_directa = document.getElementById("where_busqueda_directa_" + p_tabla_tratada + "_" + p_capa_entrada + "_" + p_tab + "_" + bd);
                if (where_busqueda_directa) {
                    var filtrado_por_busqueda_directa = replaceAll(where_busqueda_directa.value, '#parametro#', busqueda_directa.value)
                    if (p_seleccion_filtrado == "") {
                        p_seleccion_filtrado = p_seleccion_filtrado + filtrado_por_busqueda_directa + " and";
                    } else {
                        p_seleccion_filtrado = p_seleccion_filtrado + " and " + filtrado_por_busqueda_directa + " and";
                    }
                    busquedas_directas = busquedas_directas + "###" + "busqueda_directa_" + p_tabla_tratada + "_" + p_capa_entrada + "_" + p_tab + "_" + bd + '###' + busqueda_directa.value;
                }
            }
        }
    }

    p_busqueda_directa = busquedas_directas;

    // --------------------------
    // Captar Filtrados Frontales
    // --------------------------

    var filtros_frontales = "";
    if (mismo_registro == 1) {
        for (var bd = 1; bd < 251; bd++) {
            var filtro_frontal = document.getElementById("fil_" + p_tabla_tratada + "_" + p_capa_entrada + "_" + p_tab + "_" + bd);
            if (filtro_frontal) {
                if (filtro_frontal.value != "") {   // Han introducido datos
                    filtros_frontales += bd + "," + filtro_frontal.value;
                }
            }
        }
    }
    p_filtros_frontales = filtros_frontales;


    if (p_seleccion_filtrado != "") {
        if (Right(p_seleccion_filtrado, 4) == " and") {
            p_seleccion_filtrado = String(p_seleccion_filtrado).substring(0, p_seleccion_filtrado.length - 4);
        }
    }

    // --------------------------------------------

    if (!Regenerar_HTML_Filtros()) { return false; }      // Guarda los Filtros Emitidos en filtro_emitidos
    if (!Generar_Lista_Parametros()) {return false;}

    THERION.WSmantenimiento.Grid_Tabla(p_lista_parametros, RImprimir_Tabla, OnError, OnTimeOut);      

    p_datos_precargados = "";
}

// --------------------------------
// --------------------------------
    function RImprimir_Tabla(arg) {
// --------------------------------
// --------------------------------

    if (!Leer_Lista_Parametros(arg)) {return false;}

    p_impresion = 0;

    // -----------------------------
    // Extraer el html de impresión
    // -----------------------------

    var codhtml_grid = valor_xml(arg, 'salida');

    var codhtml_doc = "<!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Strict//EN' 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd'>"
    +"<html xmlns='http://www.w3.org/1999/xhtml' xml:lang='en'>"
    +"<head>"
    + document.head.innerHTML
    +"</head>"
    + "<body>"
    + codhtml_grid
    + "</body>"
    + "</html>";

    THERION.WSmantenimiento.Imprimir_html(codhtml_doc, RImprimir_html, OnError, OnTimeOut);
}

// --------------------------------
// --------------------------------
    function RImprimir_html(arg) {
// --------------------------------
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

    if (!Quitar_Pantalla_Esperando()) { return false; }


    return false;
}

// --------------------------------
// --------------------------------
    function WImprimir_Registro() {
// --------------------------------
// --------------------------------

    if (!Mostrar_Pantalla_Esperando()) { return; }

    var contenedor = document.getElementById("con_" + p_capa_entrada + "_1");
    var hilo = document.getElementById("hilo_" + p_capa_entrada);

    if (contenedor) {

        var codhtml_doc = ""
        +"<!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Strict//EN' 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd'>"
        +"<html xmlns='http://www.w3.org/1999/xhtml' xml:lang='en'>"
        +"<head>"+document.head.innerHTML+"</head><body>";
        
        hilo = document.getElementById("hilo_" + p_capa_entrada);
        if (hilo) {
            codhtml_doc=codhtml_doc + hilo.innerHTML;
        }

        codhtml_doc=codhtml_doc+contenedor.innerHTML+"</body></html>";

        THERION.WSmantenimiento.Imprimir_html(codhtml_doc, RImprimir_html, OnError, OnTimeOut);
    }
}

// -------------------------------------------------
// -------------------------------------------------
    function MRg(tabla, codigo) {Mostrar_Registro(tabla, codigo);}
// -------------------------------------------------
// -------------------------------------------------

// -------------------------------------------------
// -------------------------------------------------
    function Mostrar_Registro(tabla, codigo) {
// -------------------------------------------------
// -------------------------------------------------

        try {

            if (!Mostrar_Pantalla_Esperando()) { return; }
            if (!Sube_Capa()) { return false; }

            var new_con = 'con_' + p_capa_entrada + '_0';
            var new_tab = 'tab_' + p_capa_entrada + '_1';

            ultima_XML_Carga_Grabacion_Condicionar = "XXXX";
            p_tabla_tratada = tabla;
            p_codigo_tratado = codigo;
            p_contenedor = new_con;
            p_tab = new_tab;
            p_accion = "CONSULTA";
            p_tipo_informacion = "R";
            p_campo_ordenacion = "";
            p_seleccion_filtrado = "";
            p_filtros = "";
            p_orden_ordenacion = "";
            p_tipo_registros = "";

            p_hilo[p_capa_entrada] = p_codigo_tratado;
            p_tabla_hilo[p_capa_entrada] = p_tabla_tratada;

            if (!Generar_Lista_Parametros()) { return false; }
            THERION.WSmantenimiento.Registro_Tabla(p_lista_parametros, REditar_Registro, OnError, OnTimeOut);

            p_datos_precargados = "";
            
            return true;

        }
        catch (e) { alert('ERROR: ' + e.message); return false; }

}

// -------------------------------------------------
// -------------------------------------------------
    function Mostrar_Log(codigo_maestro) {
// -------------------------------------------------
// -------------------------------------------------

    if (!Mostrar_Pantalla_Esperando()) { return; }
    THERION.WSmantenimiento.Dame_Log(p_tabla_tratada, codigo_maestro, RMostrar_Log, OnError, OnTimeOut);
}

// --------------------------------
// --------------------------------
    function RMostrar_Log(arg) {
// --------------------------------
// --------------------------------

    if (!Sube_Capa()) { return false; }

    var new_con = 'con_' + p_capa_entrada + '_0';
    var new_tab = 'tab_' + p_capa_entrada + '_1';

    p_contenedor = new_con;
    p_tab = new_tab;
    p_tipo_informacion = "R";
    p_codigo_tratado = 0;

    valor_xml(arg, 'salida');

    p_tabla_maestra = valor_xml(arg, 'tabla_maestra');
    p_tabla_tratada = valor_xml(arg, 'tabla_detalle');
    p_codigo_maestra = valor_xml(arg, 'codigo_maestra');
    p_where = valor_xml(arg, 'where');
    p_campo_ordenacion = "";
    p_seleccion_filtrado = "";
    p_filtros = "";
    p_orden_ordenacion = "";
    p_tipo_registros = "";

    p_hilo[p_capa_entrada] = valor_xml(arg, 'hilo');
    p_tabla_hilo[p_capa_entrada] = valor_xml(arg, 'tabla_hilo');

    p_pagina = 0;

    var titulo_ventana = valor_xml(arg, 'titulo_ventana');
    var tituven = document.getElementById("titulo_ventana" + p_capa_entrada);
    if (tituven) {tituven.innerHTML = titulo_ventana;}

    if (!Refresca_Registro_Grid()) {return false;}
    
}

// -------------------------------------------------
// -------------------------------------------------
   function Mostrar_Detalle(tabla, codigo_maestro, filtro_detalle) {
// -------------------------------------------------
// -------------------------------------------------

    if (!Mostrar_Pantalla_Esperando()) { return; }
    codigo_maestro = replaceAll(codigo_maestro, "#$", "");
    THERION.WSmantenimiento.Dame_Enlace_Maestro_Detalle(p_tabla_tratada, tabla, codigo_maestro, filtro_detalle, RMostrar_Detalle, OnError, OnTimeOut);
}

// --------------------------------
// --------------------------------
   function RMostrar_Detalle(arg) {
// --------------------------------
// --------------------------------

    try {

        if (!Sube_Capa()) { return false; }

        var new_con = 'con_' + p_capa_entrada + '_0';
        var new_tab = 'tab_' + p_capa_entrada + '_1';
    
        p_contenedor = new_con;
        p_tab = new_tab;
        p_tipo_informacion = "R";
        p_codigo_tratado = 0;

        valor_xml(arg, 'salida');

        p_tabla_maestra = valor_xml(arg, 'tabla_maestra');
        p_tabla_tratada = valor_xml(arg, 'tabla_detalle');
        p_codigo_maestra = valor_xml(arg, 'codigo_maestra');
        p_where = valor_xml(arg, 'where');
        p_campo_ordenacion = "";
        p_seleccion_filtrado = "";
        p_filtros = "";
        p_orden_ordenacion = "";
        p_tipo_registros = "";

        p_hilo[p_capa_entrada] = valor_xml(arg, 'hilo');
        p_tabla_hilo[p_capa_entrada] = valor_xml(arg, 'tabla_hilo');

        p_pagina = 0;

        var titulo_ventana = valor_xml(arg, 'titulo_ventana');
        var tituven = document.getElementById("titulo_ventana" + p_capa_entrada);
        if (tituven) {
            tituven.innerHTML = titulo_ventana;
        }

        // --------------------------------------
        // Guardar el Código de Mostrar Detalle
        // --------------------------------------

        p_codigo_mostrar_detalle_previo[p_capa_entrada][p_num_tab] = p_codigo_mostrar_detalle[p_capa_entrada][p_num_tab];
        p_codigo_mostrar_detalle[p_capa_entrada][p_num_tab] = p_capa_entrada + "_" + p_tab + "_" + p_tabla_tratada + "_" + p_codigo_maestra;

        if (p_codigo_mostrar_detalle_previo[p_capa_entrada][p_num_tab] == "XX") {
            p_codigo_mostrar_detalle_previo[p_capa_entrada][p_num_tab] = p_codigo_mostrar_detalle[p_capa_entrada][p_num_tab];
        }

        if (!WGrid_Tabla()) { return false; };

    }
    catch (e) {
        alert('ERROR: ' + e.message);
    }
    finally {
    }

}

// -------------------------------------------------
// -------------------------------------------------
    function Mostrar_Filtrado(tabla, campo, codigo) {
// -------------------------------------------------
// -------------------------------------------------

    try {
        if (!Sube_Capa()) { return false; }

        var new_con = 'con_' + p_capa_entrada + '_0';
        var new_tab = 'tab_' + p_capa_entrada + '_1';

        p_contenedor = new_con;
        p_tab = new_tab;
        p_tipo_informacion = "R";

        p_filtros = "";
        p_campo_ordenacion = "";
        p_orden_ordenacion = "";
        p_codigo_tratado = 0;
        p_tabla_tratada = tabla;
        p_where = campo + "=" + codigo;
        p_pagina = 0;

        if (!WGrid_Tabla()) { return false; };
    }

    catch (e) { alert('ERROR: ' + e.message);}
    finally {}
}

// -------------------------------------------------
// -------------------------------------------------
   function Mostrar_Filtrado_2(tabla, condicion) {
// -------------------------------------------------
// -------------------------------------------------

    try {
        if (!Sube_Capa()) { return false; }

        var new_con = 'con_' + p_capa_entrada + '_0';
        var new_tab = 'tab_' + p_capa_entrada + '_1';

        p_contenedor = new_con;
        p_tab = new_tab;
        p_tipo_informacion = "R";

        p_filtros = "";
        p_campo_ordenacion = "";
        p_orden_ordenacion = "";
        p_codigo_tratado = 0;
        p_tabla_tratada = tabla;
        p_where = condicion;
        p_pagina = 0;

        if (!WGrid_Tabla()) { return false; };
    }

    catch (e) { alert('ERROR: ' + e.message); }
    finally { }
}

// ------------------------------------------
// -----------------------------------------
    function Nuevo_Registro(idDD, tabla) {
// -----------------------------------------
// ------------------------------------------

        try {

            if (!Mostrar_Pantalla_Esperando()) { return; }
           
            p_dd_recargar = document.getElementById(idDD);   // Lo pongo aquí para que Sube Capa lo guarde

            if (!p_dd_recargar) { p_dd_recargar_no_procede = 1 } else { p_dd_recargar_no_procede = 0 }

            var p_orden_actual = document.getElementById("orden_" + p_tabla_tratada + "_" + p_capa_entrada + "_" + p_tab);   // Lo pongo aquí para que Sube Capa lo guarde
            var p_filtrado_actual = document.getElementById("filtro_" + p_tabla_tratada + "_" + p_capa_entrada + "_" + p_tab);   // Lo pongo aquí para que Sube Capa lo guarde
            var p_filtrado_actual_1 = document.getElementById("filtro_1_" + p_tabla_tratada + "_" + p_capa_entrada + "_" + p_tab);   // Lo pongo aquí para que Sube Capa lo guarde
            var p_filtrado_actual_2 = document.getElementById("filtro_2_" + p_tabla_tratada + "_" + p_capa_entrada + "_" + p_tab);   // Lo pongo aquí para que Sube Capa lo guarde
            
            var valor_orden_actual = "";
            var valor_filtrado_actual = "";
            var valor_filtrado_actual_1 = "";
            var valor_filtrado_actual_2 = "";

            if (p_orden_actual) {valor_orden_actual = p_orden_actual.value;}

            if (p_filtrado_actual) { valor_filtrado_actual = p_filtrado_actual.value; }
            if (p_filtrado_actual_1) { valor_filtrado_actual_1 = p_filtrado_actual_1.value; }
            if (p_filtrado_actual_2) { valor_filtrado_actual_2 = p_filtrado_actual_2.value; }
    
            // ------------------------------------------------
            // Ver Campo de Ordenacion si lo tiene en esa Capa
            // ------------------------------------------------

            if (!Sube_Capa()) { return false; }

            if (p_tabla_tratada != tabla) {
                p_where="";
                p_where_tabla="";
                p_texto_buscado="";
                p_seleccion_filtrado="";
                p_filtros="";
            }

            var new_con = 'con_' + p_capa_entrada + '_0';
            var new_tab = 'tab_' + p_capa_entrada + '_1';

            // -------------------------
            // Nuevos datos para la capa
            // -------------------------

            ultima_XML_Carga_Grabacion_Condicionar = "XXXX";
            p_codigo_tratado = 0;
            p_contenedor = new_con;
            p_tab = new_tab;
            p_tipo_informacion = "R";
            p_tabla_tratada = tabla;
            p_campo_ordenacion = valor_orden_actual;
            p_seleccion_filtrado = valor_filtrado_actual;

            p_filtros = "";
            p_orden_ordenacion = "";
            p_tipo_registros = "";
            p_accion = "ALTA FORANEA";
    
            p_hilo[p_capa_entrada] = p_codigo_tratado;
            p_tabla_hilo[p_capa_entrada] = p_tabla_tratada;
        
            if (!Generar_Lista_Parametros()) {return false;}
            THERION.WSmantenimiento.Registro_Tabla(p_lista_parametros, REditar_Registro, OnError, OnTimeOut);
            
            p_datos_precargados = "";
        
        }
        catch (e) {
            alert('ERROR: ' + e.message);
        }
        finally {
        }
}


// --------------------------------------------------------------------------------
   function Mapa (direccion, ctabla, ccodigo) {
// --------------------------------------------------------------------------------

   var tipo_parametro = "direccion";

   $get(bt_ed_mapas).click();                    // Levanta la Capa de Mapas
   $get(capa_mapas).style.zIndex = 15004;

    document.getElementById('pac-input-lat').value = "";
    document.getElementById('pac-input-lng').value = "";
    document.getElementById('pac-input').value = "";

       var separador_latlon = direccion.indexOf("###");

       if (separador_latlon != -1) {
           var plat = direccion.substring(0, direccion.indexOf("###"))
           var plng = direccion.substring(direccion.indexOf("###") + 3, 1000)
           document.getElementById('pac-input-lat').value = plat;
           document.getElementById('pac-input-lng').value = plng;
           document.getElementById('pac-input').value = "";
           tipo_parametro = "coordenadas";
       }
       else {
           document.getElementById('pac-input').value = direccion;
           document.getElementById('pac-input-lat').value ="";
           document.getElementById('pac-input-lng').value = "";
           document.getElementById("direccion").value = direccion;
       }


   document.getElementById("direcciongps").value = "";

   // Cargar los datos de la tabla y los nombres de campo

   document.getElementById("ctabla").value = ctabla;
   document.getElementById("ccodigo").value = ccodigo;

   var padre_mapa = document.getElementById('datos_mapas').parentElement;
   var height_padre_mapa = padre_mapa.offsetHeight;
   var height_mapa = height_padre_mapa - document.getElementById('datos_coordenadas').offsetHeight - document.getElementById('botones_mapas').offsetHeight - 10 - 30;

   document.getElementById('datos_mapas').style.height = height_mapa + 'px';

   if (!map) { // Primera vez que se invoca al mapa

       // Crear la instancia MAPA

       map = new google.maps.Map(document.getElementById('datos_mapas'), { center: new google.maps.LatLng(0, 0), zoom: 17 });
       
       card_geo = document.getElementById('pac-card');
       input_geo = document.getElementById('pac-input');
       types_geo = document.getElementById('type-selector');
       strictBounds_geo = document.getElementById('strict-bounds-selector');

       map.controls[google.maps.ControlPosition.TOP_RIGHT].push(card_geo);

       // Crear la instancia AutoComplete

       autocompletegeo = new google.maps.places.Autocomplete(input_geo);
       autocompletegeo.bindTo('bounds', map);
       autocompletegeo.setFields(['address_components', 'geometry', 'icon', 'name']);

       infowindow = new google.maps.InfoWindow();
       infowindowContent = document.getElementById('infowindow-content');
       infowindow.setContent(infowindowContent);

       // ----------------------------------------------------------
       // -- Asignar evento a autocomplete geo cuando cambia el Dato
       // ----------------------------------------------------------

       autocompletegeo.addListener('place_changed', function () {
           infowindow.close();
           markerAuto.setVisible(false);

           var place = autocompletegeo.getPlace();
           if (place.name == "") { return }

           if (!place.geometry) {
               alert("Detalles no disponibles para: '" + place.name + "'");
               return;
           }

           if (place.geometry.viewport) {map.fitBounds(place.geometry.viewport);} else { map.setCenter(place.geometry.location); map.setZoom(17);}

           markerAuto.setPosition(place.geometry.location);
           markerAuto.setVisible(true);

           var address = '';
           if (place.address_components) {
               address = [
                   (place.address_components[0] && place.address_components[0].short_name || ''),
                   (place.address_components[1] && place.address_components[1].short_name || ''),
                   (place.address_components[2] && place.address_components[2].short_name || '')
               ].join(' ');
           }

           infowindowContent.children['place-icon'].src = place.icon;
           infowindowContent.children['place-name'].textContent = place.name;
           infowindowContent.children['place-address'].textContent = address;

           infowindow.open(map, markerAuto);

       });

       setupClickListener('changetype-all'          , []);
       setupClickListener('changetype-address'      , ['address']);
       setupClickListener('changetype-establishment', ['establishment']);
       setupClickListener('changetype-geocode'      , ['geocode']);

       // ----------------------------------------------------------
       // -- Asignar Option a autocompletegeo
       // ----------------------------------------------------------

       document.getElementById('use-strict-bounds')
           .addEventListener('click', function () {
               autocompletegeo.setOptions({ strictBounds: this.checked });
           });

      }

   // ----------------------------------------------------------

    if (tipo_parametro == "coordenadas") {
        var lat = document.getElementById("pac-input-lat").value;
        var lng = document.getElementById("pac-input-lng").value;
    }
    else {
        var lat = document.getElementById("lat").value;
        var lng = document.getElementById("lng").value;
    }

    // -------------------------
    // Tratamiento del Marcador
    // -------------------------

       var latLng_Inicial;

       if (lat != '' && lng != '') { latLng_Inicial = new google.maps.LatLng(lat, lng) } else { latLng_Inicial = new google.maps.LatLng(0, 0)}

       // ----------------------------------------------------------
       // -- Si existe el marcador borrarlo para crearlo de nuevo
       // ----------------------------------------------------------

       if (markerAuto) { markerAuto.setMap(null) }  // Borrar la Marca anterior

       // ----------------------
       // -- Crear el Marcador
       // ----------------------

       markerAuto = new google.maps.Marker({
           map: map
           , draggable: true
           , animation: google.maps.Animation.DROP
           , anchorPoint: new google.maps.Point(0, -29)
           , position: latLng_Inicial
       });

       // ----------------------------------
       // -- Asignar el Evento de Arrastre
       // ----------------------------------

       google.maps.event.addListener(markerAuto          // Listener cuando marcador termine arrastre
           , 'dragend'
           , function () {
               updatePosition(markerAuto.getPosition()); // Actualizar con nuevas coordenadas
               codeLatLng_Coordenadas();
           });

    if (!infowindow) { infowindow = new google.maps.InfoWindow(); }
    if (!geocoder) { geocoder = new google.maps.Geocoder(); }

    if (tipo_parametro == "coordenadas") { codeLatLng_Coordenadas() } else { codeAddress() }

    }

// --------------------------------------
    function updatePosition(latLng) {
// --------------------------------------

    jQuery('#lat').val(latLng.lat());
    jQuery('#lng').val(latLng.lng());
    codeLatLng();
}

// --------------------------------------------------------------------------------
   function setupClickListener(id, types) {
// --------------------------------------------------------------------------------

    var radioButton = document.getElementById(id);
    radioButton.addEventListener('click', function () {
        autocompletegeo.setTypes(types);
    });
}

// --------------------------------------------------------------------------------
   function Posiciona_Coordenadas_Mapa() {
// --------------------------------------------------------------------------------

    if (!map) { alert('No está iniciado el mapa'); return false; }

    var lat = parseFloat(document.getElementById("pac-input-lat").value);
    var lng = parseFloat(document.getElementById("pac-input-lng").value);

    var new_latLng = new google.maps.LatLng(lat, lng);

    markerAuto.setPosition(new_latLng);

    if (!markerAuto) {

        // ----------------------
        // -- Crear el Marcador
        // ----------------------

        markerAuto = new google.maps.Marker({
            map: map
            , draggable: true
            , animation: google.maps.Animation.DROP
            , anchorPoint: new google.maps.Point(0, -29)
            , position: latLng_Inicial
        });

        // ----------------------------------------------------------
        // -- Asignar el Evento de Arrastre
        // ----------------------------------------------------------

        google.maps.event.addListener(markerAuto          // Listener cuando marcador termine arrastre
            , 'dragend'
            , function () {
                updatePosition(markerAuto.getPosition()); // Actualizar con nuevas coordenadas
                codeLatLng_Coordenadas();
            });
    }

    codeLatLng_Coordenadas();

    return true
}

// ---------------------------
    function codeAddress() {
// ---------------------------

    var address = document.getElementById('pac-input').value;

    geocoder.geocode({'address': address}                       // llamada geodecode

    , function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            map.setCenter(results[0].geometry.location);            // centrar mapa en coordenadas obtenidas en el primer resultado
            markerAuto.setPosition(results[0].geometry.location);   // coloco el marcador en dichas coordenadas en el primer resultado
            updatePosition(results[0].geometry.location);           // Actualizar datos de Coordenadas en el primer resultado     
            codeLatLng();
        } else {
            alert("No podemos encontrar la dirección, error: " + status);   //si no es OK devuelvo error
        }
    });
    }

// -------------------------
    function codeLatLng() {
// -------------------------

    var lat = parseFloat(document.getElementById("lat").value);
    var lng = parseFloat(document.getElementById("lng").value);

    var new_latLng = new google.maps.LatLng(lat, lng)

    var calle;
    var numero;
    var municipio;
    var provincia;
    var region;
    var comunidad;
    var pais;
    var ISO_pais;
    var codpostal;

    geocoder.geocode({ 'latLng': new_latLng }, function (results, status) {

        if (status == google.maps.GeocoderStatus.OK) {

            if (results[0]) {

                // map.setZoom(17);
                map.setCenter(new_latLng);

                for (var f = 0; f < results[0].address_components.length; f++) {
                    if (results[0].address_components[f].types[0] == "street_number") { numero = results[0].address_components[f].long_name }
                    if (results[0].address_components[f].types[0] == "route") { calle = results[0].address_components[f].long_name }
                    if (results[0].address_components[f].types[0] == "locality") { municipio = results[0].address_components[f].long_name }
                    if (results[0].address_components[f].types[0] == "administrative_area_level_2") { provincia = results[0].address_components[f].long_name }
                    if (results[0].address_components[f].types[0] == "administrative_area_level_1") { comunidad = results[0].address_components[f].long_name }
                    if (results[0].address_components[f].types[0] == "country") { pais = results[0].address_components[f].long_name }
                    if (results[0].address_components[f].types[0] == "country") { ISO_pais = results[0].address_components[f].short_name }
                    if (results[0].address_components[f].types[0] == "postal_code") { codpostal = results[0].address_components[f].long_name }
                }

                for (f = 0; f < results[1].address_components.length; f++) {
                    if (results[1].address_components[f].types[0] == "administrative_area_level_3") { region = results[1].address_components[f].long_name }
                }

                infowindow.setContent(results[0].formatted_address);
                infowindow.open(map, marker);

                var direccion_completa = "";

                if (calle == "undefined") { calle = "" } else { direccion_completa += calle + " " }
                if (numero == "undefined") { numero = "" } else { direccion_completa += ", " + numero }
                if (codpostal == "undefined") { codpostal = "" } else { direccion_completa += " " + codpostal }
                if (municipio == "undefined") { municipio = "" } else { direccion_completa += "-" + municipio }
                if (comunidad == "undefined") { comunidad = "" } else { direccion_completa += " [" + comunidad + "]" }
                if (pais == "undefined") { pais = "" } else { direccion_completa += " (" + pais + ")" }
                if (ISO_pais == "undefined") { ISO_pais = "" }

                document.getElementById("direcciongps").value = direccion_completa
                document.getElementById("callegps").value = calle;
                document.getElementById("numerogps").value = numero;
                document.getElementById("municipiogps").value = municipio;
                document.getElementById("provinciagps").value = provincia;
                document.getElementById("regiongps").value = region;
                document.getElementById("comunidadgps").value = comunidad;
                document.getElementById("paisgps").value = pais;
                document.getElementById("ISO_paisgps").value = ISO_pais;
                document.getElementById("codpostalgps").value = codpostal;

            } else {
                alert('Resultado no encontrado');
                document.getElementById("direcciongps").value = "";
            }
        } else {
            document.getElementById("direcciongps").value = "";
        }
    });
}


// --------------------------------------
   function codeLatLng_Coordenadas() {
// --------------------------------------

   var lat = parseFloat(document.getElementById("pac-input-lat").value);
   var lng = parseFloat(document.getElementById("pac-input-lng").value);

    var new_latLng = new google.maps.LatLng(lat, lng)

    var calle;
    var numero;
    var municipio;
    var provincia;
    var region;
    var comunidad;
    var pais;
    var ISO_pais;
    var codpostal;

    geocoder.geocode({ 'latLng': new_latLng }, function (results, status) {

        if (status == google.maps.GeocoderStatus.OK) {

            if (results[0]) {

                // map.setZoom(17);
                map.setCenter(new_latLng);

                for (var f = 0; f < results[0].address_components.length; f++) {
                    if (results[0].address_components[f].types[0] == "street_number") { numero = results[0].address_components[f].long_name }
                    if (results[0].address_components[f].types[0] == "route") { calle = results[0].address_components[f].long_name }
                    if (results[0].address_components[f].types[0] == "locality") { municipio = results[0].address_components[f].long_name }
                    if (results[0].address_components[f].types[0] == "administrative_area_level_2") { provincia = results[0].address_components[f].long_name }
                    if (results[0].address_components[f].types[0] == "administrative_area_level_1") { comunidad = results[0].address_components[f].long_name }
                    if (results[0].address_components[f].types[0] == "country") { pais = results[0].address_components[f].long_name }
                    if (results[0].address_components[f].types[0] == "country") { ISO_pais = results[0].address_components[f].short_name }
                    if (results[0].address_components[f].types[0] == "postal_code") { codpostal = results[0].address_components[f].long_name }
                }

                for (f = 0; f < results[1].address_components.length; f++) {
                    if (results[1].address_components[f].types[0] == "administrative_area_level_3") { region = results[1].address_components[f].long_name }
                }

                infowindow.setContent(results[0].formatted_address);
                infowindow.open(map, marker);

                var direccion_completa = "";

                if (calle == "undefined") { calle = "" } else { direccion_completa += calle+ " "}
                if (numero == "undefined") { numero = "" } else { direccion_completa += ", "+numero } 
                if (codpostal == "undefined") { codpostal = "" } else { direccion_completa += " " + codpostal } 
                if (municipio == "undefined") { municipio = "" } else { direccion_completa += "-" + municipio } 
                if (comunidad == "undefined") { comunidad = "" } else { direccion_completa += " [" + comunidad + "]" } 
                if (pais == "undefined") { pais = "" } else { direccion_completa += " (" + pais + ")" } 
                if (ISO_pais == "undefined") { ISO_pais = "" }

                document.getElementById("direcciongps").value = direccion_completa
                document.getElementById("callegps").value = calle;
                document.getElementById("numerogps").value = numero;
                document.getElementById("municipiogps").value = municipio;
                document.getElementById("provinciagps").value = provincia;
                document.getElementById("regiongps").value = region;
                document.getElementById("comunidadgps").value = comunidad;
                document.getElementById("paisgps").value = pais;
                document.getElementById("ISO_paisgps").value = ISO_pais;
                document.getElementById("codpostalgps").value = codpostal;

            } else {
                alert('Resultado no encontrado');
                document.getElementById("direcciongps").value = "";
            }
        } else {
            document.getElementById("direcciongps").value = "";
        }
    });
}


// -----------------------------
    function WAcepta_Mapas() {
// -----------------------------
        
    var calle;
    var numero;
    var municipio;
    var provincia;
    var region;
    var comunidad;
    var pais;
    var ISO_pais;
    var codpostal;
    var ccodigo;

    var ctabla;
    var ccalle;
    var cnumero;
    var cmunicipio;
    var ccp;
    var clongitud;
    var clatitud;

    // Datos de la direccion

    calle=document.getElementById("callegps").value;
    numero=document.getElementById("numerogps").value;
    municipio=document.getElementById("municipiogps").value;
    codpostal = document.getElementById("codpostalgps").value;
    provincia=document.getElementById("provinciagps").value;
    region=document.getElementById("regiongps").value;
    comunidad=document.getElementById("comunidadgps").value;
    pais=document.getElementById("paisgps").value;
    ISO_pais=document.getElementById("ISO_paisgps").value;

    if (calle == "undefined") { calle = "" }
    if (numero == "undefined") { numero = "" }
    if (codpostal == "undefined") { codpostal = "" }
    if (municipio == "undefined") { municipio = "" }
    if (comunidad == "undefined") { comunidad = "" }
    if (pais == "undefined") { pais = "" }
    if (ISO_pais == "undefined") { ISO_pais = "" }
    

    // Nombre de la tabla y los campos

    ctabla = document.getElementById("ctabla").value;
    ccalle = document.getElementById("ccalle").value;
    cnumero = document.getElementById("cnumero").value;
    cmunicipio = document.getElementById("cmunicipio").value;
    ccp = document.getElementById("ccp").value;
    ccodigo = document.getElementById("ccodigo").value;

    clongitud = document.getElementById("lng").value;
    clatitud = document.getElementById("lat").value;

    if (!Mostrar_Pantalla_Esperando()) { return; }

    THERION.WSmantenimiento.Registro_Geolocalizacion(ctabla, ccodigo, clongitud, clatitud, calle, numero, municipio, codpostal, provincia, region, comunidad, pais, ISO_pais, RAcepta_Mapas, OnError, OnTimeOut);

}

// --------------------------------
    function RAcepta_Mapas(arg) {
// --------------------------------

    try {

        var resultado = valor_xml(arg, 'resultado');
        var error = valor_xml(arg, 'error');
        var salida = valor_xml(arg, 'salida');

        if (resultado == "OK") {
            $get(bt_ko_mapas).click();          // Quitar la capa de parametros
            $get(capa_mapas).style.zIndex = 0;
        } else if (resultado == "KO") { alert(error); }

        if (!Refresca_Registro_Grid()) { return false; }

    }
    catch (e) {
        alert('ERROR: ' + e.message);
    }
    finally { if (!Quitar_Pantalla_Esperando()) { return false; } }

    }

// -----------------------------
    function WCancela_Mapas() {
// -----------------------------

    $get(bt_ko_mapas).click();  // Quitar la capa de parametros
    $get(capa_mapas).style.zIndex = 0;
    if (!Quitar_Pantalla_Esperando()) { return false; }  // Quito espera
}


// -------------------------------------------------------------
   function Pide_Perfil() {
// -------------------------------------------------------------

       try {

        if (!Mostrar_Pantalla_Esperando()) { return; }

        THERION.WSmantenimiento.Muestra_Perfil(RMuestra_Perfil, OnError, OnTimeOut);

     }
       catch (e) { alert('ERROR: ' + e.message); }
}

// -----------------------------------
function RMuestra_Perfil(arg) {
// -----------------------------------

    try {

        var ok_RMuestra_Perfil = 0;

        var con_act = document.getElementById("datos_perfil");
        var con_bot = document.getElementById("botones_perfil");

        if (con_act) {

            var resultado = valor_xml(arg, 'resultado');
            var error = valor_xml(arg, 'error');
            var salida = valor_xml(arg, 'salida');
            var botones = valor_xml(arg, 'botones');
            var foco = valor_xml(arg, 'foco');   

            if (resultado == "OK") {

                con_act.innerHTML = salida;
                if (con_bot) { con_bot.innerHTML = botones; }

                $get("bt_ed_perfil").click();
                $get("capa_perfil").style.zIndex = 15004;

                var campo_perfil = document.getElementById(foco);
                if (campo_perfil) { campo_parametros.focus(); return false; }

            } else if (resultado == "KO") { alert(error); }
        }
    }
    catch (e) {
        +alert('ERROR: ' + e.message);
    }
    finally {

        if (!Quitar_Pantalla_Esperando()) { return false; }

    }
}

// --------------------------------------
   function WAcepta_Pide_Perfil() {
// --------------------------------------

    try {

        var dato;
        var parametro_value = document.getElementById("perfil_values"); // Captura valores

        var backslash = String.fromCharCode(92);
        var dbackslash = backslash + backslash;

        if (parametro_value) { dato = parametro_value.value; }

        $get("bt_ko_perfil").click();
        $get("capa_perfil").style.zIndex = 0;

    }
    catch (e) {
        alert('ERROR: ' + e.message);
        if (!Quitar_Pantalla_Esperando()) { return false; }  // Quito espera
    }

}


// --------------------------------------
   function WCancela_Pide_Perfil() {
// --------------------------------------

    $get("bt_ko_perfil").click();  // Quitar la capa de parametros
    $get("capa_perfil").style.zIndex = 0;
    if (!Quitar_Pantalla_Esperando()) { return false; }  // Quito espera
}


// -------------------------------------------------------------
    function Pide_Parametros(tipo_parametro, ws_postparametros) {
// -------------------------------------------------------------

        try {
            if (!Mostrar_Pantalla_Esperando()) { return; }
            tipo_parametro = replaceAll(tipo_parametro, '··', '"');
            tipo_parametro = replaceAll(tipo_parametro, '·', '\'');

            ws_postparametros = replaceAll(ws_postparametros, '··', '"');
            ws_postparametros = replaceAll(ws_postparametros, "·", "'");

            p_ws_postparametros = ws_postparametros       // Guardo en variable global el postparametro

            THERION.WSmantenimiento.Muestra_Parametro(tipo_parametro, RMuestra_Parametro, OnError, OnTimeOut);
        }
        catch (e) {alert('ERROR: ' + e.message);}
}

// -----------------------------------
    function RMuestra_Parametro(arg) {
// -----------------------------------

        try {

            var ok_RMuestra_Parametro = 0;
            var con_act = document.getElementById("datos_parametros");
            var con_bot = document.getElementById("botones_parametros");

            if (con_act) {

                var resultado = valor_xml(arg, 'resultado');
                var error = valor_xml(arg, 'error');
                var salida = valor_xml(arg, 'salida');
                var botones = valor_xml(arg, 'botones');

                if (resultado == "OK") {

                    con_act.innerHTML = salida;
                    if (con_bot) {con_bot.innerHTML = botones;}

                    ok_RMuestra_Parametro = 1;

                    $get(bt_ed_parametros).click();                    // Levanta la Capa de Parametros
                    $get(capa_parametros).style.zIndex = 15004;

                    var campo_parametros = document.getElementById("sch_parametro_value");
                    if (campo_parametros) { campo_parametros.focus(); return false; }

                    campo_parametros = document.getElementById("sch_parametro_value_1");
                    if (campo_parametros) { campo_parametros.focus(); return false; }

                    campo_parametros = document.getElementById("parametro_value");
                    if (campo_parametros) { campo_parametros.focus(); return false; }

                    campo_parametros = document.getElementById("parametro_value_1");
                    if (campo_parametros) { campo_parametros.focus(); return false; }

                } else if (resultado == "KO") {alert(error);}
            }
        }
        catch (e) {
            alert('ERROR: ' + e.message);
        }

        finally {
            
            if (ok_RMuestra_Parametro == 1) if (!desactivar_boton_refrescar()) { return false } 
            if (!Quitar_Pantalla_Esperando()) { return false; }  // Quito espera
        }
}

// --------------------------------------
    function WCancela_Pide_Parametros() {
// --------------------------------------

        $get(bt_ko_parametros).click();  // Quitar la capa de parametros
        $get(capa_parametros).style.zIndex = 0;
        if (!Quitar_Pantalla_Esperando()) { return false; }  // Quito espera
}

// --------------------------------------
    function WAcepta_Pide_Parametros() {
// --------------------------------------

    try {

        var dato;
        var parametro_value = document.getElementById("parametro_value");                                       // Captura el valor

        var backslash = String.fromCharCode(92);
        var dbackslash = backslash + backslash;

        if (parametro_value) {
            dato = parametro_value.value;
            if (parametro_value.type == "select-one") {if (dato == "-1") { dato="null"}}
            if (parametro_value.style.textAlign == "right") {dato = replaceAll(dato, ",", ".");}
            p_ws_postparametros = replaceAll(p_ws_postparametros, "#parametro_value#", dato);   // Suplantar el valor introducido por parametro
        }

        //----------------------------------------------
        // Nueva parte para recoger hasta 30 parámetros
        //----------------------------------------------

        var parametro_valueFor = null;
        for (i = 1; i < 30; i++) {
            if (p_ws_postparametros.indexOf("#parametro_value_" + i.toString() + "#") > 0) {
                parametro_valueFor = document.getElementById("parametro_value_" + i.toString());
                if (parametro_valueFor) {
                    dato = parametro_valueFor.value;
					if (parametro_valueFor.type == "date") { if (dato == "1") { dato = "null" } else {dato=dato.substring(8,10)+'/'+dato.substring(5,7)+'/'+dato.substring(0,4)} }
                    if (parametro_valueFor.type == "select-one") { if (dato == "-1") { dato = "null" } }
                    if (parametro_valueFor.style.textAlign == "right") { dato = replaceAll(dato, ",", "."); }
                    p_ws_postparametros = replaceAll(p_ws_postparametros, "#parametro_value_" + i.toString() + "#", dato);   // Suplantar el valor introducido por parametro                     
                }
            }
        }
        
        p_ws_postparametros = p_ws_postparametros.replace(/\\/g, dbackslash);
        p_ws_postparametros = replaceAll(p_ws_postparametros, "··", '"');
        p_ws_postparametros = replaceAll(p_ws_postparametros, "·", "'");
        p_ws_postparametros = replaceAll(p_ws_postparametros, "&quot", '"');
        p_ws_postparametros = replaceAll(p_ws_postparametros, "&#039", "'");

        p_ws_postparametros = replaceAll(p_ws_postparametros, String.fromCharCode(10), "_#10#_");
        p_ws_postparametros = replaceAll(p_ws_postparametros, String.fromCharCode(13), "_#13#_");
     // p_ws_postparametros += '; if (!Quitar_Pantalla_Esperando()) { return false; }'

        $get(bt_ko_parametros).click();                                                                  // Quitar la capa de parametro
        $get(capa_parametros).style.zIndex = 0;

        var Ejecutar_Grabacion_Parametros = new Function(p_ws_postparametros);
        Ejecutar_Grabacion_Parametros();

        //var cb = $.Callbacks();
        //cb.add('Mostrar_Pantalla_Esperando())');
        //cb.add(p_ws_postparametros);
        //cb.add('Quitar_Pantalla_Esperando())');
        //cb.fire(0);


        p_ws_postparametros = "";                                                                        // Vacío los postparametros

    }
    catch (e) {
        alert('ERROR: ' + e.message); 
        if (!Quitar_Pantalla_Esperando()) { return false; }  // Quito espera
        }
    
}

// ------------------------------------------------
// ------------------------------------------------
   function Editar_Registro_Otra_Tabla(codigo, otra_tabla) {
    p_otra_tabla = otra_tabla;
    Editar_Registro(codigo); }
// ------------------------------------------------
// ------------------------------------------------


// ------------------------------------------------
// ------------------------------------------------
   function ERg(codigo) {
       Editar_Registro(codigo);
    }
// ------------------------------------------------
// ------------------------------------------------

// ---------------------------------------
// ---------------------------------------
    function Editar_Registro(codigo) {
// ---------------------------------------
// ---------------------------------------

try {

    //--------------------------------------

    if (!Mostrar_Pantalla_Esperando()) { return false; }

    ultima_XML_Carga_Grabacion_Condicionar = "XXXX";
    
    var p_orden_actual = document.getElementById("orden_" + p_tabla_tratada + "_" + p_capa_entrada + "_" + p_tab);       // Lo pongo aquí para que Sube Capa lo guarde
    var p_filtrado_actual = document.getElementById("filtro_" + p_tabla_tratada + "_" + p_capa_entrada + "_" + p_tab);   // Lo pongo aquí para que Sube Capa lo guarde
    var p_filtrado_actual_1 = document.getElementById("filtro_1_" + p_tabla_tratada + "_" + p_capa_entrada + "_" + p_tab);   // Lo pongo aquí para que Sube Capa lo guarde
    var p_filtrado_actual_2 = document.getElementById("filtro_2_" + p_tabla_tratada + "_" + p_capa_entrada + "_" + p_tab);   // Lo pongo aquí para que Sube Capa lo guarde
    
    var valor_orden_actual = "";
    var valor_filtrado_actual = "";
    var valor_filtrado_actual_1 = "";
    var valor_filtrado_actual_2 = "";

    if (p_orden_actual) { valor_orden_actual = p_orden_actual.value; }
    
    if (p_filtrado_actual) { valor_filtrado_actual = p_filtrado_actual.value; }
    if (p_filtrado_actual_1) { valor_filtrado_actual_1 = p_filtrado_actual_1.value; }
    if (p_filtrado_actual_2) { valor_filtrado_actual_2 = p_filtrado_actual_2.value; }

    var capa_actual = p_capa_entrada
    if (!Sube_Capa()) { return false; }

    var ncomprobacion=1
    while (p_capa_entrada != capa_actual + 1) { ncomprobacion += 1 }

    
    if (p_otra_tabla != "") {
        p_tabla_tratada = p_otra_tabla;
    }

    var new_con = 'con_' + p_capa_entrada + '_0';
    var new_tab = 'tab_' + p_capa_entrada + '_1';

    p_codigo_tratado = codigo;
    p_contenedor = new_con;
    p_tab = new_tab;
    p_tipo_informacion = "R";
    p_campo_ordenacion = valor_orden_actual;
    p_seleccion_filtrado = valor_filtrado_actual;
    p_filtros = "";
    p_orden_ordenacion = "";
    p_tipo_registros = "";

    p_hilo[p_capa_entrada] = p_codigo_tratado;
    p_tabla_hilo[p_capa_entrada] = p_tabla_tratada;

    if (!Generar_Lista_Parametros()) { return false; }

    THERION.WSmantenimiento.Registro_Tabla(p_lista_parametros, REditar_Registro, OnError, OnTimeOut);
    
    p_datos_precargados = "";
    
    }

catch (e) {alert('ERROR: ' + e.message);}

finally { condicionando = 0; }

}

// -----------------------------------
// -----------------------------------
    function REditar_Registro(arg) {
// -----------------------------------
// -----------------------------------

        try {

            if (arg.toUpperCase().indexOf("EXPIRED") >= 0) {
                alert("El servidor de datos no ha respondido en tiempo. Por favor reintente en unos instantes");
                return false;
            }

            var resultado = valor_xml(arg, 'resultado');
            if (resultado != 'OK')
            {
                var error = valor_xml(arg, 'error');
                if (error == '') { error = arg;}
                alert(error);
                return false;
            }

            var con_act = document.getElementById(p_contenedor);
            if (con_act) {
                con_act.innerHTML = valor_xml(arg, 'salida');
            }
            else {
                alert("Ha expirado la Sesión.");
                window.location.href = "login.aspx";
                return false;
            }

            if (p_capa_entrada == 1 && document.getElementById(capa1).style.display == "none") { $get(bt_ed_1).click(); }
            else if (p_capa_entrada == 2 && document.getElementById(capa2).style.display == "none") { $get(bt_ed_2).click(); }
            else if (p_capa_entrada == 3 && document.getElementById(capa3).style.display == "none") { $get(bt_ed_3).click(); }
            else if (p_capa_entrada == 4 && document.getElementById(capa4).style.display == "none") { $get(bt_ed_4).click(); }
            else if (p_capa_entrada == 5 && document.getElementById(capa5).style.display == "none") { $get(bt_ed_5).click(); }
            else if (p_capa_entrada == 6 && document.getElementById(capa6).style.display == "none") { $get(bt_ed_6).click(); }
            else if (p_capa_entrada == 7 && document.getElementById(capa7).style.display == "none") { $get(bt_ed_7).click(); }
            else if (p_capa_entrada == 8 && document.getElementById(capa8).style.display == "none") { $get(bt_ed_8).click(); }
            else if (p_capa_entrada == 9 && document.getElementById(capa9).style.display == "none") { $get(bt_ed_9).click(); }

            if (p_codigo_tratado == 0) {Actualiza_Cascading();}

            if (!Ajusta_FieldSets()) {return false;}

            // ------------------------------
            // poner el título de la ventana
            // ------------------------------

            var titulo_ventana = valor_xml(arg, 'titulo_ventana');
            var tituven = document.getElementById("titulo_ventana" + p_capa_entrada);
            if (tituven) {
                tituven.innerHTML = titulo_ventana;
            }

            // ------------------------------
            // Dar foco al enviado como foco
            // ------------------------------

            var foco = valor_xml(arg, 'foco');
            var con_foco = document.getElementById(foco);
            if (con_foco) { con_foco.focus(); }

            // ---------------------------------
            // Pasar los métodos de Computación
            // --------------------------------

            //if (!WCondiciona_Registro()) {return false;}
            //if (!WComputar_Datos())      {return false;}
            //if (!WInformar_Datos())      {return false;}

            // ------------------------------

            iniciar_computacion();

        }

        catch (e) { alert('ERROR: ' + e.message); }

        finally {

            if (!CargaIdioma()) { return false; }
            if (!Quitar_Pantalla_Esperando()) { return false; }
            capa_posicionada = 0;
        }
}

// ---------------------------------------
// ---------------------------------------
    function Consultar_Dato(codigo) {
// ---------------------------------------
// ---------------------------------------

    if (!Mostrar_Pantalla_Esperando()) { return; }
    if (!Sube_Capa()) { return false; }

    var new_con = 'con_' + p_capa_entrada + '_0';
    var new_tab = 'tab_' + p_capa_entrada + '_1';

    ultima_XML_Carga_Grabacion_Condicionar = "XXXX";
    p_codigo_tratado = codigo;
    p_contenedor = new_con;
    p_tab = new_tab;
    p_tipo_informacion = "R";
    p_campo_ordenacion = "";
    p_seleccion_filtrado = "";
    p_filtros = "";
    p_orden_ordenacion = "";
    p_tipo_registros = "";

    p_hilo[p_capa_entrada] = p_codigo_tratado;
    p_tabla_hilo[p_capa_entrada] = p_tabla_tratada;

    if (!Generar_Lista_Parametros()) {return false;}
    THERION.WSmantenimiento.Consultar_Dato(p_lista_parametros, REditar_Registro, OnError, OnTimeOut);

    p_datos_precargados = "";

}


// ------------------------------------
// ------------------------------------
    function PulsaEnter_Busqueda(e) {
// ------------------------------------
// ------------------------------------

   var evtobj = window.event ? event : e;
   var unicode = evtobj.charCode ? evtobj.charCode : evtobj.keyCode;
   if (unicode == 13) {
        if (!Mostrar_Pantalla_Esperando()) { return; }
        if (!WGrid_Tabla()) { return false; };
    } else {
        if ((unicode >= 31 && unicode <= 126) || (unicode == 8)) {
            p_tipo_informacion = "X";
        } else {
           // alert(unicode);
        }
    }
}

// ---------------------------------------------------------------
// ---------------------------------------------------------------
    function PulsaEnter_IrPages(e, DD) {
// ---------------------------------------------------------------
// ---------------------------------------------------------------

    var evtobj = window.event ? event : e;
    var unicode = evtobj.charCode ? evtobj.charCode : evtobj.keyCode;
    if (unicode == 13) { p_pagina = DD.value; if (!WGrid_Tabla()) { return false; } }
}

// -------------------------------------------
// -------------------------------------------
    function Ordenar_Grid(comboorden, orden) {
// -------------------------------------------
// -------------------------------------------

    var combo_ordenacion = document.getElementById(comboorden);
	
    if (combo_ordenacion) {
        if (!Mostrar_Pantalla_Esperando()) { return; }
        p_campo_ordenacion = combo_ordenacion.value;
        p_orden_ordenacion = orden;
        if (!Generar_Lista_Parametros()) {return false;}
        if (!WGrid_Tabla()) { return false; };
        p_datos_precargados = "";
    }
	
}

// -------------------------------------------
// -------------------------------------------
    function Filtrar_Grid(combofiltrado, filtrado) {
// -------------------------------------------
// -------------------------------------------

    var combo_filtrado = document.getElementById(combofiltrado);
    if (combo_filtrado) {
        if (!Mostrar_Pantalla_Esperando()) { return; }
        p_seleccion_filtrado = combo_filtrado.value;
        if (!Generar_Lista_Parametros()) {return false;}
        if (!WGrid_Tabla()) { return false; };
        p_datos_precargados = "";
    }
}

// -------------------------------
// -------------------------------
    function WBorra_Registro_Grid(codigo) {
// -------------------------------
// -------------------------------

    if (!Mostrar_Pantalla_Esperando()) { return; }
    p_codigo_tratado_antes_borrado = p_codigo_tratado;
    p_bajar_capa_despues_borrado = 0;
    p_codigo_tratado=codigo
    var parametros = XML_Carga_Grabacion();
    if (!parametros) {return false;}
    THERION.WSmantenimiento.Borra_Registro(parametros, RBorra_Registro, OnError, OnTimeOut);
}

// -------------------------------
// -------------------------------
    function WBorra_Registro() {
// -------------------------------
// -------------------------------

   if (!Mostrar_Pantalla_Esperando()) { return; }
   p_codigo_tratado_antes_borrado = p_codigo_tratado;
   p_bajar_capa_despues_borrado = 1;
   var parametros = XML_Carga_Grabacion();
   if (!parametros) {return false;}
   THERION.WSmantenimiento.Borra_Registro(parametros, RBorra_Registro, OnError, OnTimeOut);

}

// -----------------------------------
    function RBorra_Registro(arg) {
// ----------------------------------

        try {

            p_codigo_tratado = p_codigo_tratado_antes_borrado;

            var resultado = valor_xml(arg, 'resultado');
            var codigo_borrado = valor_xml(arg, 'codigo_tratado');

            if (resultado == 'OK') {
                var p_accion_realizada = p_accion;
                if (p_bajar_capa_despues_borrado == 1) {

                    // --------------------

                    var marca_edicion = document.getElementById("marca_de_edicion_" + p_tabla_tratada);
                    if (marca_edicion) { marca_edicion.style.display = "none" }

                    // --------------------

                    hide_capa_completado = 0;
                    if (!Hide_Capa()) { return false; }
                    var ncomprobacion = 1; while (hide_capa_completado==0) { ncomprobacion += 1 }

                    baja_capa_completado = 0;
                    if (!Baja_Capa()) { return false; }
                    var ncomprobacion = 1; while (baja_capa_completado == 0) { ncomprobacion += 1 }

                }
                if (!HTML_Ocultar_Registro_Borrado(codigo_borrado)) { return false; }
            }
            else {
                var error = valor_xml(arg, 'error');
                alert(error);
            }

        } catch (e) { alert('ERROR:' + e.message); return false }

        finally { if (!Quitar_Pantalla_Esperando()) { return false; } }

}

// -------------------------------
// -------------------------------
   function WGraba_Registro() {
// -------------------------------
// -------------------------------

    try {

        if (!Mostrar_Pantalla_Esperando()) { return; }

        var parametros = XML_Carga_Grabacion();
        if (!parametros) { return false; }
        THERION.WSmantenimiento.Graba_Registro(parametros, RGraba_Registro, OnError, OnTimeOut);

        return true;

       } catch (e) { alert('ERROR:' + e.message); return false }

}
// -----------------------------------
    function RGraba_Registro(arg) {
// ----------------------------------

  try {

    var resultado = valor_xml(arg, 'resultado');
    if (resultado == 'OK') {
        
        var p_accion_realizada = p_accion;
        var refrescar_grid = 1
        var viene_de_otra_tabla=0;

        if (p_otra_tabla != "") { refrescar_grid = 1; viene_de_otra_tabla = 1;}

        p_otra_tabla = "";

        // --------------------

        var marca_edicion = document.getElementById("marca_de_edicion_" + p_tabla_tratada);
        if (marca_edicion) {marca_edicion.style.display = "none"}

        // --------------------

        hide_capa_completado = 0;
        if (!Hide_Capa()) { return false; }
        var ncomprobacion = 1; while (hide_capa_completado == 0) { ncomprobacion += 1 }

        baja_capa_completado = 0;
        if (!Baja_Capa()) { return false; }   // Se recuperan los datos de la anterior capa
        var ncomprobacion = 1; while (baja_capa_completado == 0) { ncomprobacion += 1 }
        
        if (tipo_grabacion == "INSERT") { var nuevo_codigo = valor_xml(arg, 'codigo_tratado');}

        if (p_accion_realizada == "CLONACION") {   // Alta de Nuevo Registro con Clonacion de Datos
            if (refrescar_grid == 1) {
                if (tipo_grabacion == "INSERT" && viene_de_otra_tabla==0) { if (!HTML_Mostrar_Registro_Nuevo(nuevo_codigo)) { return false; } }
                else { if (!Refresca_Registro_Grid()) { return false; } }
            }
        }
        else if (p_accion_realizada == "OTROS") {   // Alta de Nuevo Registro desde una Tabla diferente
            if (refrescar_grid == 1) {
                if (tipo_grabacion == "INSERT") { if (!Refresca_Registro_Grid()) { return false; } }
                else {if (!Refresca_Registro_Grid()) {return false;}}
            }

        } else if (p_accion_realizada != "ALTA FORANEA") {

            p_codigo_tratado = valor_xml(arg, 'codigo_tratado');  // Por si es un Alta
            p_pagina = valor_xml(arg, 'pagina');
            p_hilo[p_capa_entrada] = p_codigo_tratado;
            p_tabla_hilo[p_capa_entrada] = p_tabla_tratada;

            if (refrescar_grid == 1) {
                if (tipo_grabacion == "INSERT" && viene_de_otra_tabla == 0) {if (!HTML_Mostrar_Registro_Nuevo(nuevo_codigo)) { return false; } }
                else {if (!Refresca_Registro_Grid()) {return false;}}
            }

        } else {    // Es un Alta Foránea   

            if (p_dd_recargar) {
                
                var p_codigo_combo = valor_xml(arg, 'codigo_tratado');  // El código del Combo

                if (!AutoRecarga_DropDown(p_dd_recargar, p_codigo_combo)) { return false}
                p_dd_recargar.value = p_codigo_combo;

                // Recargar otros Combos que tengan la misma Tabla Foránea

                var obj_fk = document.getElementById("FK_" + p_dd_recargar.id);
                
                if (obj_fk) {
                    var selects = document.getElementsByTagName("select");
                    for (i = 0; i < selects.length; i++) {
                        var obj_fk_gemelo = document.getElementById("FK_" + selects[i].id);
                        if (obj_fk_gemelo) {
                            if (obj_fk_gemelo.innerHTML == obj_fk.innerHTML && selects[i].id != p_dd_recargar.id) {
                                p_codigo_combo = selects[i].value;
                                if (!AutoRecarga_DropDown(selects[i], p_codigo_combo)) { return false}
                                selects[i].value = p_codigo_combo;
                            }
                        }
                    }
                }
            }
            else {
                if (p_dd_recargar_no_procede == 0) { alert("No encuentro el combo que tengo que recargar") }
            }
        }
    }
    else {
        var error = valor_xml(arg, 'error');
		var idioma_code = Idioma_Code();
		var mostrar ="THERION_HTML_Mostrar_Errores_Validacion @lista_errores='"+error+"', @idioma='"+idioma_code+"', @debug=0";
		WHTML_General(mostrar,1);
    }

  } catch (e) { alert('ERROR:' + e.message); return false }

  finally {
      if (!Quitar_Pantalla_Esperando()) {
          iniciar_temporizador();
          return false;
      }
  }
  }

// ---------------------------------------
    function WValida_Registro() {
// ---------------------------------------

    var parametros = XML_Carga_Grabacion();
    if (!parametros) {return false;}
    THERION.WSmantenimiento.Valida_Registro(parametros, RValida_Registro, OnError, OnTimeOut);
}

// ---------------------------------------
    function RValida_Registro(arg) {
// ---------------------------------------

        try {

			var resultado = valor_xml(arg, 'resultado');

            if (resultado == 'OK') {
                var validacion = valor_xml(arg, 'salida');
                if (validacion == '') {
                    p_registro_validado = 1;
                }
                else {
                    p_registro_validado = 0;
                    alert(validacion);
                }
            }
            else {
                p_registro_validado = 0;
                var error = valor_xml(arg, 'error');
                alert(error);
            }
        }
        catch (e) { alert('ERROR:' + e.message); return false }
        finally {if (!Quitar_Pantalla_Esperando()) { return false; } }
}

// ------------------------------
    function WComputar_Datos() {
// ------------------------------

try {
        var parametros = XML_Carga_Grabacion();

        if (!parametros) { return false; }

        if (ultima_XML_Carga_Grabacion_Computar == parametros) {return false;}

        ultima_XML_Carga_Grabacion_Computar = parametros;

        var aFormulas = document.getElementsByClassName("FORMULA_COMPUTADO_" + p_tabla_tratada + "_" + p_capa_entrada);
        
        for (var f = 0; f < aFormulas.length; f++) {

            var formula = aFormulas[f].innerHTML;
            var campo_resultado = aFormulas[f].id.replace("cal_fun_", "cal_");

            // --------------
            // Pasa los datos
            // --------------

            aTag = new Array("input", "select", "textarea");

            for (var m = 0; m < aTag.length; m++) {
                var c = document.getElementById(p_contenedor);
                var d = c.getElementsByTagName(aTag[m]);
                for (var x = 0; x < d.length; x++) {
                    var o = d[x];
                    var v = "";
                    if (o.parentNode && o.id!="") {
                        if (o.parentNode.className == "saltoli") {
                            if (o.parentNode.id.indexOf("saltoli_" + p_capa_entrada) >= 0) {
								if (o.className=="Oculto") v="null";
                                else{
									// Tratamiento especial para los db
									var es_db = 0;
									var odb = document.getElementById("sch_" + o.id); 
									if (odb) {
										es_db = 1;
										if (odb.style.display == "none") {es_db = 0;}
									}
									
									if (o.style.display == "none" && es_db == 0) {
                                        if (o.type != "select-one") {v = ""} else {v = "-1"}
									} else {
										if (o.type == "checkbox") {
											if (o.checked) { v = "1"; } else { v = "0"; }
										}
										else {
											v = o.value;
											if ((es_db == 1) && (v == "")) { v = "-1"; }
										}
									}
								}
                                formula = replaceAll(formula, '#' + o.id + '#', v);
                            }
                        }
                    }
                }
            }

            // ----------------------------------------
            // llamar a la formula mediante Web Service
            // ----------------------------------------

            THERION.WSmantenimiento.Computa_Formula(formula, campo_resultado, RComputa_Formula, OnError, OnTimeOut);
        }

        return true;
    } catch (e) { alert('ERROR:' + e.message); return false }

}

// ------------------------------
   function WInformar_Datos() {
// ------------------------------

try {

        var parametros = XML_Carga_Grabacion();
        if (!parametros) {return false;}
        if (ultima_XML_Carga_Grabacion_Informar == parametros) {
            return false;
        }

        ultima_XML_Carga_Grabacion_Informar = parametros;

        var aFormulas = document.getElementsByClassName("FORMULA_INFORMATIVO_" + p_tabla_tratada + "_" + p_capa_entrada);

        for (var f = 0; f < aFormulas.length; f++) {

            var formula = aFormulas[f].innerHTML;
            var campo_resultado = aFormulas[f].id.replace("inf_fun_", "inf_");

            // --------------
            // Pasa los datos
            // --------------

            aTag = new Array("input", "select", "textarea");

            for (var m = 0; m < aTag.length; m++) {
                
				var c = document.getElementById(p_contenedor);
                var d = c.getElementsByTagName(aTag[m]);
				
                for (var x = 0; x < d.length; x++) {
					
                    var o = d[x];
                    var v = "";
					
                    if (o.parentNode && o.id!="") {
                        if (o.parentNode.className == "saltoli") {
                            if (o.parentNode.id.indexOf("saltoli_" + p_capa_entrada) >= 0) {
								if (o.className=="Oculto") v="null";
                                else{
									// Tratamiento especial para los db

									var es_db = 0;
									var odb = document.getElementById("sch_" + o.id);
									if (odb) {
										es_db = 1;
										if (odb.style.display == "none") {
											es_db = 0;
										}
									}
									
									if (o.style.display == "none" && es_db == 0) {
										if (o.type != "select-one") {v = ""} else {v = "-1"}
									} else {
										if (o.type == "checkbox") {
											if (o.checked) { v = "1"; } else { v = "0"; }
										}
										else {
											v = o.value;
											if ((es_db == 1) && (v=="")) {v = "-1";}
										}
									}
								}
								
								// alert ("o.id: "+o.id);
								
                                formula = replaceAll(formula, '#' + o.id + '#', v);
								
                            }
                        }
                    }
                }
            }
			
			// ----------------------------------------
            // llamar a la formula mediante Web Service
            // ----------------------------------------

            THERION.WSmantenimiento.Computa_Formula(formula, campo_resultado, RComputa_Formula, OnError, OnTimeOut);
        }

        return true;
    }
catch (e) { alert('ERROR:' + e.message); return false }
    }

// -----------------------------------
    function RComputa_Formula(arg) {
// ----------------------------------

        // -------------------------------------
        // Trabajar el resultado -> viene en XML
        // -------------------------------------

    try {

        var resultado = valor_xml(arg, 'resultado');

        if (resultado == 'OK') {
            var campo_resultado = valor_xml(arg, 'campo_resultado');
            var valor_resultado = valor_xml(arg, 'valor_resultado');
            var campo_computado = document.getElementById(campo_resultado);
            if (campo_computado) {
                if (campo_computado.parentNode.id.indexOf("saltoli_" + p_capa_entrada) >= 0) {
                    campo_computado.innerHTML = valor_resultado;
                    if (valor_resultado == "") {
                        campo_computado.style.display = "none";
                    } else {
                        campo_computado.style.display = "";
                    }
                }
            }
        }
        else {
            var error = valor_xml(arg, 'error');
            alert(error);   
        }

    }
       catch (e) { alert('ERROR:' + e.message); return false }

    }

// ---------------------------------------
   function WCondiciona_Registro() {
// ---------------------------------------

       try {

           if (condicionando == 1) { return true; }

           condicionando = 1;
           var parametros = XML_Carga_Grabacion();
           if (!parametros) { return false; }
           if (ultima_XML_Carga_Grabacion_Condicionar == parametros) {
               condicionando = 0;
               return false;
           }
           ultima_XML_Carga_Grabacion_Condicionar = parametros;
           THERION.WSmantenimiento.Condiciona_Registro(parametros, RCondiciona_Registro, OnError, OnTimeOut);
           return true;
       }
       catch (e) { alert('ERROR:' + e.message); return false }
}

// ---------------------------------------
    function RCondiciona_Registro(arg) {
// ---------------------------------------

try {

    var x;
    var y;
    var datosXML;
    var camposXML;
    var campo;
    var dato;

        // -------------------------------------
        // Trabajar el resultado -> viene en XML
        // -------------------------------------

        var resultado = valor_xml(arg, 'resultado');
        if (resultado != 'OK') { // Error en la ejecucion de la condicion
            var error = valor_xml(arg, 'error');
            if (error != "") {
                alert(error);
            }
            else {
                alert(arg) 
            }
            condicionando = 0;
            return false;
        }

        // -------------------------------------

        var validacion = valor_xml(arg, 'salida');  // La salida es un XML que contienen los campos a ocultar

        // ------------------------
        // Captura de Datos por XML
        // ------------------------

        validacion = "<parametros>"+validacion+"</parametros>";

        if (window.DOMParser) {
            parser = new DOMParser();
            doc = parser.parseFromString(validacion, "text/xml");
        }
        else {                                                   // Internet Explorer
            doc = new ActiveXObject("Microsoft.XMLDOM");
            doc.async = "false";
            doc.loadXML(validacion);
        }

        // ---------------------------------------------
        // Proceso de los Datos Condicionados por Tabla
        // ---------------------------------------------

        var ColeccionTablasXML = doc.getElementsByTagName("tablas");

        for (var xt = 0; xt < ColeccionTablasXML.length; xt++) {      // Recorrido de Tablas
            var tablaXML = ColeccionTablasXML[xt].childNodes;
            for (var yt = 0; yt < tablaXML.length; yt++) {
                var tabla = tablaXML[yt].nodeName;

                // ----------------------------------
                // Proceso de los Datos Condicionados
                // ----------------------------------

                datosXML = doc.getElementsByTagName("datos");

                for (x = 0; x < datosXML.length; x++) {

                    camposXML = datosXML[x].childNodes;
                        
                    for (y = 0; y < camposXML.length; y++) {

                        campo = camposXML[y].nodeName;

                        if (camposXML[y].childNodes[0]) {

                            dato = camposXML[y].childNodes[0].data;
                            var campo_condicionado = document.getElementById(campo + "_" + tabla);
                            if (campo_condicionado) {

                                if (dato == "0") { campo_condicionado.style.display = "none"; } else { campo_condicionado.style.display = ""; }

                                var etiqueta = document.getElementById('lb_' + campo + "_" + tabla);
                                if (etiqueta) { etiqueta.style.display = campo_condicionado.style.display }

                                var parrafo = document.getElementById('parrafo_' + campo + "_" + tabla);
                                if (parrafo) { parrafo.style.display = campo_condicionado.style.display }

                                var boton_fecha = document.getElementById('bf_' + campo + "_" + tabla);
                                if (boton_fecha) { boton_fecha.style.display = campo_condicionado.style.display }

                                var campo_condicionado_adyacente = document.getElementById("sch_" + campo + "_" + tabla);
                                if (campo_condicionado_adyacente) { campo_condicionado_adyacente.style.display = campo_condicionado.style.display }

                                var ico_obligatorio = document.getElementById("ico_obli_" + campo + "_" + tabla);
                                if (ico_obligatorio) { ico_obligatorio.style.display = campo_condicionado.style.display }

                                var ico_ojo = document.getElementById("ojo_" + campo + "_" + tabla);
                                if (ico_ojo) { ico_ojo.style.display = campo_condicionado.style.display }

                                var ico_alta_foranea = document.getElementById("alta_foranea_" + campo + "_" + tabla);
                                if (ico_alta_foranea) { ico_alta_foranea.style.display = campo_condicionado.style.display }

                                var ico_rejilla_foranea = document.getElementById("rejilla_foranea_" + campo + "_" + tabla);
                                if (ico_rejilla_foranea) { ico_rejilla_foranea.style.display = campo_condicionado.style.display }
								
                                var div_rejilla_foranea = document.getElementById("division_foranea_" + campo + "_" + tabla);
                                if (div_rejilla_foranea) { 
								    if (dato == "0") 
                                       {div_rejilla_foranea.style.display = "none"; } 
								      else 
									   { div_rejilla_foranea.style.display = "inline-block"; }
									}
									
                                var lbl_chk = document.getElementById("lbchk_" + campo + "_" + tabla);
                                if (lbl_chk) { 
								    if (dato == "0") 
                                       {lbl_chk.style.display = "none"; } 
								      else 
									   { lbl_chk.style.display = "inline-block"; }
									}									

                            }
                        }
                    }
                }

                // -------------------------------
                // Proceso de los Datos de Relleno
                // -------------------------------

                datosXML = doc.getElementsByTagName("rellenos");

                for (x = 0; x < datosXML.length; x++) {

                    camposXML = datosXML[x].childNodes;

                    for (y = 0; y < camposXML.length; y++) {

                        campo = camposXML[y].nodeName;

                        if (camposXML[y].childNodes[0]) {

                            if (camposXML[y].childNodes[0].data) {

                                dato = camposXML[y].childNodes[0].data;
                                var campo_relleno = document.getElementById(campo + "_" + tabla);
                                
                                if (campo_relleno) {

                                     if (campo_relleno != document.activeElement || campo_relleno.classList.contains("relleno")) {

                                        // -----------------------------------

                                        if (campo_relleno.type == "checkbox") {
                                            if (campo_relleno.classList.contains("relleno")) { if (dato == 1) { campo_relleno.checked == true; } else { campo_relleno.checked == false; }  }
                                            else if (campo_relleno.checked == false) {
                                                if (dato == 1) { campo_relleno.checked == true; } else { campo_relleno.checked == false; }
                                            }
                                        }

                                        // -----------------------------------

                                        else if (campo_relleno.type == "select-one") {

                                            if (campo_relleno.value != dato) {

                                                    var db = document.getElementById("sch_" + campo_relleno.id);  // buscar db asociado

                                                if (db) {   // tiene db asociado

                                                    var select_relleno = document.getElementById("relleno_" + campo_relleno.id);  // buscar la select de relleno del db esta entre "{}"
                                                    if (select_relleno) {
                                                        var sql_relleno = select_relleno.value;
                                                        sql_relleno = sql_relleno.replace("#value#", dato);
                                                        WDato_DB_Busqueda(sql_relleno, campo_relleno.id);
                                                    }

                                                    var select = document.getElementById("select_" + campo_relleno.id);  // buscar la select de relleno del db esta entre "{}"
                                                    if (select) {
                                                        var sql = select.value;
                                                        sql = sql.replace("[AUTOCOMPLETAR]", "");
                                                        sql = sql.replace("#value#", dato);
                                                        WDatos_Option_DB(sql, campo_relleno.id);
                                                    }

                                                }

                                                // ---------------------------------------

                                                if (campo_relleno.classList.contains("relleno")) {
                                                    campo_relleno.value = dato;
                                                    Recarga_DropDown(campo_relleno);   // Para que genere los cambios en los que éste afecta
                                                }

                                                else if (campo_relleno.value != dato) {
                                                    campo_relleno.value = dato;
                                                    Recarga_DropDown(campo_relleno);   // Para que genere los cambios en los que éste afecta
                                                }
                                            }

                                            // ---------------------------------------
                                        }
                                        // ----------------------------
                                        else {

                                            if (campo_relleno.classList.contains("relleno")) { campo_relleno.value = dato;}
                                            else if (campo_relleno.value == "") { campo_relleno.value = dato; }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        // -------------------- 
        // Ocultar los Legengs
        // -------------------
        var aLegend = document.getElementsByClassName("fds")
        for (var i = 0; i < aLegend.length; i++) {
            var oLegend = aLegend[i];
            var vis = 0;
            if (oLegend) {
                var idG = "[grupo_legend^=" + oLegend.id.replace("legend_", "") + "]"
                var mat = $(idG);
                for (x = 0; x < mat.length; x++) {
                    obj = mat[x];
                    if (obj.style.display != "none") { vis = 1 }
                }
                if (vis == 0) { oLegend.style.display = "none" } else { oLegend.style.display = "" }
            }
        }
    }
    catch (e) { alert('ERROR en Condicionado/Relleno ' + e.message); }
    finally { condicionando = 0; }
}

// --------------------------------
    function WCancela_Registro() {
// --------------------------------

    p_otra_tabla = "";

    // --------------------
    var marca_edicion = document.getElementById("marca_de_edicion_" + p_tabla_tratada);
    if (marca_edicion) { marca_edicion.style.display = "none" }
    // --------------------

    var con_act = document.getElementById(p_contenedor);
    if (con_act) {
        con_act.innerHTML="";
    }

    // --------------------

    hide_capa_completado = 0; 
    if (!Hide_Capa()) { return false; }
    var ncomprobacion = 1; while (hide_capa_completado == 0) { ncomprobacion += 1 }

    baja_capa_completado = 0;
    if (!Baja_Capa()) { return false; }
    var ncomprobacion = 1; while (baja_capa_completado == 0) { ncomprobacion += 1 }

}

// ----------------------------------------
    function Baja_Registro(tabla_bajas) {
// ----------------------------------------

        try {

            if (!Mostrar_Pantalla_Esperando()) { return; }

            var lista_chk = "";
            var tb = document.getElementById("tabla_" + tabla_bajas + "_tab_" + p_capa_entrada + "_" + p_num_tab);

            if (tb) {
                var rows = tb.rows;
                for (var i = 0; i < rows.length; i++) {
                    var numcell = rows[i].cells.length;
                    var cell = rows[i].cells[numcell - 1];
                    var chk = cell.firstChild;
                    if (chk) {
                        if (chk.id != "undefined") {
                            if (chk.checked) {
                                lista_chk = lista_chk + replaceAll(chk.id, "CHK", "") + ",";
                            }
                        }
                    }
                }
            }

            if (lista_chk != "") {
                WBajas_Registros(tabla_bajas, lista_chk)
            } else {
                if (!Quitar_Pantalla_Esperando()) { return false; }
            }
        }

        catch (e) {
            alert('ERROR en Baja_Registro ' + e.message);
            if (!Quitar_Pantalla_Esperando()) { return false; }
        }
}

// ---------------------------------------------------
    function WBajas_Registros(tabla_bajas, lista_chk) {
// ---------------------------------------------------

    THERION.WSmantenimiento.Bajas_Registros(tabla_bajas, lista_chk, RBajas_Registros, OnError, OnTimeOut);

}

// ---------------------------------------
    function RBajas_Registros(arg) {
// ---------------------------------------

        try {
            if (arg == 'OK') {
                alert('Registro de Baja OK')
            } else {
                alert(arg);
            }
        }

        catch (e) { alert('ERROR en RBajas_Registros ' + e.message); }

        finally { if (!WGrid_Tabla()) { return false; }; } 
}

// --------------------------------
    function Ajusta_FieldSets() {
// ---------------------------------

   try {
            var fieldsets = document.forms[0].getElementsByTagName('FIELDSET');
            for (var x = 0; x < fieldsets.length; x++) {
                var fieldset = fieldsets[x];
                var vacio = 1;

                var elmList = fieldset.getElementsByTagName('*');

                for (var i = 0; i < elmList.length; i++) {
                    if (elmList[i].nodeName=="INPUT" || elmList[i].nodeName=="SELECT" || elmList[i].nodeName=="TEXTAREA" ) {
                        if (elmList[i].className != "Oculto") {
                            vacio = 0;
                            break
                        }
                    }
                }
                if (vacio==1) {
                    fieldset.style.display = "none";
                }
            }

            return true;
   }
   catch (e) { alert('ERROR: ' + e.message); return false; }
}  

// -------------------------
    function Hide_Capa() {
// -------------------------

        try {

            if (p_capa_entrada == 1 && document.getElementById(capa1).style.display == "") { $get(bt_ko_1).click(); } 
            else if (p_capa_entrada == 2 && document.getElementById(capa2).style.display == "") { $get(bt_ko_2).click(); }
            else if (p_capa_entrada == 3 && document.getElementById(capa3).style.display == "") { $get(bt_ko_3).click(); }
            else if (p_capa_entrada == 4 && document.getElementById(capa4).style.display == "") { $get(bt_ko_4).click(); }
            else if (p_capa_entrada == 5 && document.getElementById(capa5).style.display == "") { $get(bt_ko_5).click(); }
            else if (p_capa_entrada == 6 && document.getElementById(capa6).style.display == "") { $get(bt_ko_6).click(); }
            else if (p_capa_entrada == 7 && document.getElementById(capa7).style.display == "") { $get(bt_ko_7).click(); }
            else if (p_capa_entrada == 8 && document.getElementById(capa8).style.display == "") { $get(bt_ko_8).click(); }
            else if (p_capa_entrada == 9 && document.getElementById(capa9).style.display == "") { $get(bt_ko_9).click(); }
            return true;
        }
        catch (e) { alert('ERROR: ' + e.message); return false; }
        finally { hide_capa_completado = 1;}
}

// ------------------------------------
   function XML_Carga_Grabacion() {
// ------------------------------------

    try {

        var idObj;

        // ------------------------------------------------------------------------
        // Buscar textArea "grabacion_tabla", que está la lista de campos a grabar
        // ------------------------------------------------------------------------

        var campo_grabacion = "";
        var arg = "<parametros></parametros>";
        campo_grabacion = document.getElementById("grabacion_" + p_tabla_tratada);

        if (campo_grabacion) { arg = campo_grabacion.value; }

        // --------------------
        // Tratamiento como XML
        // --------------------

        if (window.DOMParser) {
            parser = new DOMParser();
            doc = parser.parseFromString(arg, "text/xml");
        }
        else {                                                   // Internet Explorer
            doc = new ActiveXObject("Microsoft.XMLDOM");
            doc.async = "false";
            doc.loadXML(arg);
        }

        // -----------------------------
        // Montaje del XML de grabación
        // -----------------------------

        var parametros_grabacion = "<parametros>"

        if (!Generar_Lista_Parametros()) { return false }

        parametros_grabacion += valor_xml(p_lista_parametros, 'parametros');
        p_datos_precargados = "";

        // -------------------------
        // - Extracion de las Tablas
        // -------------------------

        var tablas = doc.getElementsByTagName("tablas");
        var nametabla = "";
        parametros_grabacion += "<tablas>"
        for (x = 0; x < tablas.length; x++) {

            idObj = tablas[x].getElementsByTagName("m")[0].childNodes[0].nodeValue;

            nametabla = idObj;

            // ----------------------------------
            // Ver si el registro ha sido anulado
            // ----------------------------------

            var se_graba = 1;

            var anulado = document.getElementById("anulado_zona_" + nametabla);
            if (anulado) {
                se_graba = 0;
                if (anulado.style.display == "none") {
                    se_graba = 1;
                }
            }

            if (se_graba == 1) {
                parametros_grabacion += "<" + nametabla + ">##tabla_mantenimiento##</" + nametabla + ">"
            }

        }
        parametros_grabacion += "</tablas>"

        // -------------------------
        // - Extracion de los Datos
        // -------------------------

        var datos = doc.getElementsByTagName("datos");
        var dato = "";
        var campo = "";
        var namecampo = "";

        parametros_grabacion += "<datos>"

        for (x = 0; x < datos.length; x++) {

            idObj = datos[x].getElementsByTagName("c")[0].childNodes[0].nodeValue;
            var obj = document.getElementById(idObj);

            if (obj) {

                if (obj.style.display != "none") {

                    // ----------------------------------------

                    dato = "";
                    if (obj.type == "checkbox") {
                        if (obj.checked == 1) { dato = "on"; } else { dato = "off"; }
                    }
                    else if (obj.type == "date") {
                        dato = document.getElementById(idObj).value;
						if (dato!="") {dato=dato.substring(8,10)+'/'+dato.substring(5,7)+'/'+dato.substring(0,4)}
                    }
                    else {
                        dato = document.getElementById(idObj).value;
                        if (document.getElementById(idObj).style.display == "none") { dato = ""; }
                    }

                    // ----------------------------------------

                    if (dato) {
                        dato = replaceAll(dato, "<", "&lt;");
                        dato = replaceAll(dato, ">", "&gt;");
                        namecampo = idObj;
                        parametros_grabacion += "<" + namecampo + ">" + dato + "</" + namecampo + ">"
                    }
                    else {
                        namecampo = idObj;
                        parametros_grabacion += "<" + namecampo + "></" + namecampo + ">"
                    }
                }

            } else {  // puede que sea un campo de ubicacion de fichero

                var ubi = document.getElementById("campo_fichero_" + p_capa_entrada);
                if (ubi) {
                    dato = $("#nombre_fichero_" + p_capa_entrada).text();
                    dato = replaceAll(dato, "<", "&lt;");
                    dato = replaceAll(dato, ">", "&gt;");
                    namecampo = $("#campo_fichero_" + p_capa_entrada).text();
                    parametros_grabacion += "<" + namecampo + ">" + dato + "</" + namecampo + ">"
                }
            }
        }

        parametros_grabacion += "</datos>"

        // --------------------------

        parametros_grabacion += "</parametros>";
		
        return (parametros_grabacion);

    }

    catch (e) { alert('ERROR: ' + e.message); return false; }

}

// ----------------------------------
    function Actualiza_Cascading() {
// ----------------------------------

try {

    // ------------------------------------------------------------------------
    // Buscar textArea "grabacion_tabla", que está la lista de campos a grabar
    // ------------------------------------------------------------------------

    var campo_grabacion = "";
    campo_grabacion = document.getElementById("grabacion_" + p_tabla_tratada);

    if (campo_grabacion) { 

        arg = campo_grabacion.value; 

        // --------------------
        // Tratamiento como XML
        // --------------------

        if (window.DOMParser) {
            parser = new DOMParser();
            doc = parser.parseFromString(arg, "text/xml");
        }
        else {                                                   // Internet Explorer
            doc = new ActiveXObject("Microsoft.XMLDOM");
            doc.async = "false";
            doc.loadXML(arg);
        }

        // -----------------------------
        // Montaje del XML de grabación
        // -----------------------------

        var datos = doc.getElementsByTagName("datos");

        for (x = 0; x < datos.length; x++) {

            var idObj = datos[x].getElementsByTagName("c")[0].childNodes[0].nodeValue;
            var obj = document.getElementById(idObj);
            if (obj) {
                Recarga_DropDown(obj);
            }
        }
    }

    return true;

    }

catch (e) { alert('ERROR: ' + e.message); return false; }

}

// ---------------------------------------------------------
    function Show_Capa_Fichero_Grid(tabla, campo, codigo) {
// ---------------------------------------------------------

try {
    
    if (!iniciar_panel_ficheros()) { return false; };

    aIdfichero = "";
    agrega_ficheros_desde_grid = 1;
    tabla_ficheros_desde_grid = tabla;
    campo_tabla_ficheros_desde_grid = campo;
    codigo_tabla_ficheros_desde_grid = codigo;

    var ocapa;
    var capa;
    var capa_sig;

    switch (p_capa_entrada) {
        case 0: ocapa = $get(ocapa1); break;
        case 1: ocapa = $get(ocapa2); break;
        case 2: ocapa = $get(ocapa3); break;
        case 3: ocapa = $get(ocapa4); break;
        case 4: ocapa = $get(ocapa5); break;
        case 5: ocapa = $get(ocapa6); break;
        case 6: ocapa = $get(ocapa7); break;
        case 7: ocapa = $get(ocapa8); break;
        case 8: ocapa = $get(ocapa9); break;
    }

    if (ocapa) {
        ocapa.style.height = "100%";
        ocapa.style.width = "100%";
        ocapa.style.top = "0px";
        ocapa.style.left = "0px";
        ocapa.style.zIndex = 15003;
    }

    var opanel_subida_fichero = $get(divsubefichero);
    if (opanel_subida_fichero) {
        opanel_subida_fichero.style.display = "";
        opanel_subida_fichero.style.zIndex = 15004;
    }

    var titulosubidaficheros = document.getElementById('titulosubidaficheros');
    if (titulosubidaficheros) { titulosubidaficheros.innerHTML = "Gestión de Subidas de Ficheros"}

    }
    catch (e) { alert('ERROR: ' + e.message); return false; }
}

// ------------------------------------------------
    function Show_Capa_Fichero(idobjeto, titulo) {
// ------------------------------------------------

try {

    if (!iniciar_panel_ficheros()) { return false; };

    aIdfichero = document.getElementById(idobjeto);
    agrega_ficheros_desde_grid = 0;

    var ocapa;
    var capa;
    var capa_sig;

    switch (p_capa_entrada) {
        case 0: ocapa = $get(ocapa1); break;
        case 1: ocapa = $get(ocapa2); break;
        case 2: ocapa = $get(ocapa3); break;
        case 3: ocapa = $get(ocapa4); break;
        case 4: ocapa = $get(ocapa5); break;
        case 5: ocapa = $get(ocapa6); break;
        case 6: ocapa = $get(ocapa7); break;
        case 7: ocapa = $get(ocapa8); break;
        case 8: ocapa = $get(ocapa9); break;
    }

    if (ocapa) {
        ocapa.style.height = "100%";
        ocapa.style.width = "100%";
        ocapa.style.top = "0px";
        ocapa.style.left = "0px";
        ocapa.style.zIndex = 15003;
    }

    var opanel_subida_fichero = $get(divsubefichero);
    if (opanel_subida_fichero) {
        opanel_subida_fichero.style.display = "";
        opanel_subida_fichero.style.zIndex = 15004;
    }

    if (titulo = "") { titulo = "Gestión de Subida de Ficheros" }
    var titulosubidaficheros = document.getElementById('titulosubidaficheros');
    if (titulosubidaficheros) { titulosubidaficheros.innerHTML = titulo }

}
catch (e) { alert('ERROR: ' + e.message); return false; }

}

// -------------------------------------
    function File_Upload(sender, args) {
// -------------------------------------

    try {

        var filename = args.get_fileName();
        var fileId = args._fileId;

        if (agrega_ficheros_desde_grid  == 1) {       // viene directamente del Grid
            aIdfichero += fileId + ";";
        }
        else {                                        // viene desde la ficha de mantenimiento
            aIdfichero.value += fileId + ";";
        }
    }

    catch (e) { alert('ERROR: ' + e.message); return false; }

}

// -----------------------------------------------------------------------------
    function File_Upload_Error(sender, args) {alert(args.get_errorMessage());}
// -----------------------------------------------------------------------------

// -------------------------------------
    function Hide_Capa_Fichero() {
// -------------------------------------

try {

    var ocapa;
    var capa;
    var capa_sig;

    switch (p_capa_entrada) {
        case 0: ocapa = $get(ocapa1); break;
        case 1: ocapa = $get(ocapa2); break;
        case 2: ocapa = $get(ocapa3); break;
        case 3: ocapa = $get(ocapa4); break;
        case 4: ocapa = $get(ocapa5); break;
        case 5: ocapa = $get(ocapa6); break;
        case 6: ocapa = $get(ocapa7); break;
        case 7: ocapa = $get(ocapa8); break;
        case 8: ocapa = $get(ocapa9); break;
    }

    if (ocapa) {
        ocapa.style.height = "0px";
        ocapa.style.width = "0px";
        ocapa.style.top = "0px";
        ocapa.style.left = "0px";
        ocapa.style.zIndex = 15002;
    }

    var opanel_subida_fichero = $get(divsubefichero);
    if (opanel_subida_fichero) {
        opanel_subida_fichero.style.display = "none";
        opanel_subida_fichero.style.zIndex = 0;
    }

    if (agrega_ficheros_desde_grid == 1) {
        if (!Mostrar_Pantalla_Esperando()) { return; }
        THERION.WSmantenimiento.Graba_Ristra_Fichero_en_Tabla(tabla_ficheros_desde_grid, campo_tabla_ficheros_desde_grid, codigo_tabla_ficheros_desde_grid, aIdfichero, RGraba_Ristra_Fichero_en_Tabla, OnError, OnTimeOut);
        agrega_ficheros_desde_grid = 0;
    } else {
        if (!Refresca_Registro_Grid()) { return false; }
    }
    }
    catch (e) { alert('ERROR: ' + e.message); return false; }
}

// ------------------------------------------------
    function RGraba_Ristra_Fichero_en_Tabla(arg) {
// ------------------------------------------------

        try {
            var resultado = valor_xml(arg, 'resultado');
            if (resultado != 'OK') { var error = valor_xml(arg, 'error'); alert(error); }
        }

        catch (e) { alert('ERROR: ' + e.message); return false; }

        finally {

            if (!Refresca_Registro_Grid()) { return false; }
            if (!Quitar_Pantalla_Esperando()) { return false; }
        }

}

// -----------------------------------------------------------------------------
    function Show_Lista_Ficheros_Ristra(aListaFichero, tabla, campo, registro) {
// -----------------------------------------------------------------------------

try {
        if (!WLista_Ficheros(aListaFichero, tabla, campo, registro, 0)) { return false; }

        var ocapa;
        var capa;
        var capa_sig;

        switch (p_capa_entrada) {
            case 0: ocapa = $get(ocapa1); break;
            case 1: ocapa = $get(ocapa2); break;
            case 2: ocapa = $get(ocapa3); break;
            case 3: ocapa = $get(ocapa4); break;
            case 4: ocapa = $get(ocapa5); break;
            case 5: ocapa = $get(ocapa6); break;
            case 6: ocapa = $get(ocapa7); break;
            case 7: ocapa = $get(ocapa8); break;
            case 8: ocapa = $get(ocapa9); break;
        }

        if (ocapa) {
            ocapa.style.height = "100%";
            ocapa.style.width = "100%";
            ocapa.style.top = "0px";
            ocapa.style.left = "0px";
            ocapa.style.zIndex = 15003;
        }

        var opanel_subida_fichero = $get(divverficheros);
        if (opanel_subida_fichero) {
            opanel_subida_fichero.style.display = "inline";
            opanel_subida_fichero.style.zIndex = 15004;
        }

    }
    catch (e) { alert('ERROR: ' + e.message); return false; }
}

// -------------------------------------------------------------------------------------------
   function Show_Lista_Ficheros_Ristra_Solo_Lectura(aListaFichero, tabla, campo, registro) {
// -------------------------------------------------------------------------------------------

try {

    if (!WLista_Ficheros(aListaFichero, tabla, campo, registro, 1)) { return false; }

    var ocapa;
    var capa;
    var capa_sig;

    switch (p_capa_entrada) {
        case 0: ocapa = $get(ocapa1); break;
        case 1: ocapa = $get(ocapa2); break;
        case 2: ocapa = $get(ocapa3); break;
        case 3: ocapa = $get(ocapa4); break;
        case 4: ocapa = $get(ocapa5); break;
        case 5: ocapa = $get(ocapa6); break;
        case 6: ocapa = $get(ocapa7); break;
        case 7: ocapa = $get(ocapa8); break;
        case 8: ocapa = $get(ocapa9); break;
    }

    if (ocapa) {
        ocapa.style.height = "100%";
        ocapa.style.width = "100%";
        ocapa.style.top = "0px";
        ocapa.style.left = "0px";
        ocapa.style.zIndex = 15003;
    }

    var opanel_subida_fichero = $get(divverficheros);
    if (opanel_subida_fichero) {
        opanel_subida_fichero.style.display = "inline";
        opanel_subida_fichero.style.zIndex = 15004;
    }
    }
    catch (e) { alert('ERROR: ' + e.message); return false; }
}

// -----------------------------------------------------------------------
   function Show_Lista_Ficheros(idobjeto, tabla, campo, registro) {
// -----------------------------------------------------------------------

try {

    aIdfichero = document.getElementById(idobjeto);   // Contiene la ristra de los ficheros -> pasarlo al Web Service para que los cargue

    if (aIdfichero) {

        var aListaFichero = aIdfichero.value;

        if (!WLista_Ficheros(aListaFichero, tabla, campo, registro, 0)) { return false; }

        var ocapa;
        var capa;
        var capa_sig;

        switch (p_capa_entrada) {
                case 0: ocapa = $get(ocapa1); break;
                case 1: ocapa = $get(ocapa2); break;
                case 2: ocapa = $get(ocapa3); break;
                case 3: ocapa = $get(ocapa4); break;
                case 4: ocapa = $get(ocapa5); break;
                case 5: ocapa = $get(ocapa6); break;
                case 6: ocapa = $get(ocapa7); break;
                case 7: ocapa = $get(ocapa8); break;
                case 8: ocapa = $get(ocapa9); break;
            }

        if (ocapa) {
            ocapa.style.height = "100%";
            ocapa.style.width = "100%";
            ocapa.style.top = "0px";
            ocapa.style.left = "0px";
            ocapa.style.zIndex = 15003;
           }

        var opanel_subida_fichero = $get(divverficheros);
        if (opanel_subida_fichero) {
            opanel_subida_fichero.style.display = "inline";
            opanel_subida_fichero.style.zIndex = 15004;
        }
       }

    else {
        alert("Error: no encuentro del Objeto " + idobjeto);
       }

    }
catch (e) { alert('ERROR: ' + e.message); return false; }

}

// ---------------------------------------------------------------------------------
    function Show_Lista_Ficheros_Solo_Lectura(idobjeto, tabla, campo, registro) {
// ---------------------------------------------------------------------------------

try {
    aIdfichero = document.getElementById(idobjeto);   // Contiene la ristra de los ficheros -> pasarlo al Web Service para que los cargue
    if (aIdfichero) {

        var aListaFichero = aIdfichero.value;

        if (!WLista_Ficheros(aListaFichero, tabla, campo, registro, 1)) { return false; }

        var ocapa;

        switch (p_capa_entrada) {
            case 0: ocapa = $get(ocapa1); break;
            case 1: ocapa = $get(ocapa2); break;
            case 2: ocapa = $get(ocapa3); break;
            case 3: ocapa = $get(ocapa4); break;
            case 4: ocapa = $get(ocapa5); break;
            case 5: ocapa = $get(ocapa6); break;
            case 6: ocapa = $get(ocapa7); break;
            case 7: ocapa = $get(ocapa8); break;
            case 8: ocapa = $get(ocapa9); break;
        }

        if (ocapa) {
            ocapa.style.height = "100%";
            ocapa.style.width = "100%";
            ocapa.style.top = "0px";
            ocapa.style.left = "0px";
            ocapa.style.zIndex = 15003;
        }

        var opanel_subida_fichero = $get(divverficheros);
        if (opanel_subida_fichero) {
            opanel_subida_fichero.style.display = "inline";
            opanel_subida_fichero.style.zIndex = 15004;
        }
    }
    else {alert("Error: no encuentro del Objeto " + idobjeto);}

    }
 catch (e) { alert('ERROR: ' + e.message); return false; }    
}

// -----------------------------------
    function Hide_Lista_Ficheros() {
// -----------------------------------

try {
    var ocapa;

    switch (p_capa_entrada) {
        case 0: ocapa = $get(ocapa1); break;
        case 1: ocapa = $get(ocapa2); break;
        case 2: ocapa = $get(ocapa3); break;
        case 3: ocapa = $get(ocapa4); break;
        case 4: ocapa = $get(ocapa5); break;
        case 5: ocapa = $get(ocapa6); break;
        case 6: ocapa = $get(ocapa7); break;
        case 7: ocapa = $get(ocapa8); break;
        case 8: ocapa = $get(ocapa9); break;
    }
    if (ocapa) {
        ocapa.style.height = "0px";
        ocapa.style.width = "0px";
        ocapa.style.top = "0px";
        ocapa.style.left = "0px";
        ocapa.style.zIndex = 15002;
    }
    var opanel_subida_fichero = $get(divverficheros);
    if (opanel_subida_fichero) {
        opanel_subida_fichero.style.display = "none";
        opanel_subida_fichero.style.zIndex = 0;
    }

    if (!Refresca_Registro_Grid()) { return false; }

    }
    catch (e) { alert('ERROR: ' + e.message); return false; }
}

// ----------------------------------------------------------------------------
    function WLista_Ficheros(parametros, tabla, campo, registro, solo_lectura) {
// ----------------------------------------------------------------------------

try {
    if (!Mostrar_Pantalla_Esperando()) { return; }
    var listafiles = document.getElementById("listaficherossubidos");
    if (listafiles) {listafiles.innerHTML = "";}
    THERION.WSmantenimiento.Lista_Ficheros(parametros, tabla, campo, registro, solo_lectura, RLista_Ficheros, OnError, OnTimeOut);
    return true;
    }
    catch (e) { alert('ERROR: ' + e.message); return false; }
}

// -----------------------------------
    function RLista_Ficheros(arg) {
// ----------------------------------

try {

    // -------------------------------------
    // Trabajar el resultado -> viene en XML
    // -------------------------------------

    var resultado = valor_xml(arg, 'resultado');
    var listafiles = document.getElementById("listaficherossubidos");
    var salida

    if (resultado == 'OK') {salida = valor_xml(arg, 'salida');}
    else { salida = valor_xml(arg, 'error'); }

    if (listafiles) {listafiles.innerHTML = salida}

}

  catch (e) { alert('ERROR: ' + e.message); return false; }

  finally { if (!Quitar_Pantalla_Esperando()) { return false } }

}

// -------------------------
    function Sube_Capa() {
// -------------------------

try {

        // ---------------------------------------
        // guardo datos anteriores por si cancela
        // ---------------------------------------

        p_capa_entrada_ant[p_capa_entrada] = p_capa_entrada;
        p_tabla_tratada_ant[p_capa_entrada] = p_tabla_tratada;
        p_tabla_maestra_ant[p_capa_entrada] = p_tabla_maestra;
        p_codigo_tratado_ant[p_capa_entrada] = p_codigo_tratado;
        p_codigo_maestra_ant[p_capa_entrada] = p_codigo_maestra;
        p_where_ant[p_capa_entrada] = p_where;
        p_where_tabla_ant[p_capa_entrada] = p_where_tabla;
        p_contenedor_ant[p_capa_entrada] = p_contenedor;
        p_tab_ant[p_capa_entrada] = p_tab;
        p_tipo_informacion_ant[p_capa_entrada] = p_tipo_informacion;
        p_pagina_ant[p_capa_entrada] = p_pagina;
        p_texto_buscado_ant[p_capa_entrada] = p_texto_buscado;
        p_campo_ordenacion_ant[p_capa_entrada] = p_campo_ordenacion;
        p_seleccion_filtrado_ant[p_capa_entrada] = p_seleccion_filtrado;
        p_filtros_ant[p_capa_entrada] = p_filtros;
        p_orden_ordenacion_ant[p_capa_entrada] = p_orden_ordenacion;
        p_tipo_registros_ant[p_capa_entrada] = p_tipo_registros;
        p_impresion_ant[p_capa_entrada] = p_impresion;
        p_accion_ant[p_capa_entrada] = p_accion;
        p_dd_recargar_ant[p_capa_entrada] = p_dd_recargar;

        // -----------------------------------
        // Desacopla el panel que está debajo
        // -----------------------------------

        var ocapa;
        var capa;
        var capa_sig;

        switch(p_capa_entrada) {
            case 1: ocapa = $get(ocapa1); capa = $get(capa1); capa_sig = $get(capa2); break;
            case 2: ocapa = $get(ocapa2); capa = $get(capa2); capa_sig = $get(capa3); break;
            case 3: ocapa = $get(ocapa3); capa = $get(capa3); capa_sig = $get(capa4); break;
            case 4: ocapa = $get(ocapa4); capa = $get(capa4); capa_sig = $get(capa5); break;
            case 5: ocapa = $get(ocapa5); capa = $get(capa5); capa_sig = $get(capa6); break;
            case 6: ocapa = $get(ocapa6); capa = $get(capa6); capa_sig = $get(capa7); break;
            case 7: ocapa = $get(ocapa7); capa = $get(capa7); capa_sig = $get(capa8); break;
            case 8: ocapa = $get(ocapa8); capa = $get(capa8); capa_sig = $get(capa9); break;
            }

        if (ocapa) {
            ocapa.style.height = "100%";
            ocapa.style.width = "100%";
            ocapa.style.top = "0px";
            ocapa.style.left = "0px";
        }

        p_capa_entrada++;           // Sube de capa
        
        if (!ordenar_capas()) { return false; }

        return true;

    }

    catch (e) { alert('ERROR: ' + e.message); return false; }

}

// ------------------------
    function Baja_Capa() {
// ------------------------

        try {
            var ocapa;
            var capa;
            var capa_ant;

            switch (p_capa_entrada) {
                case 2: ocapa = $get(ocapa1); capa = $get(capa2); capa_ant = $get(capa1); break;
                case 3: ocapa = $get(ocapa2); capa = $get(capa3); capa_ant = $get(capa2); break;
                case 4: ocapa = $get(ocapa3); capa = $get(capa4); capa_ant = $get(capa3); break;
                case 5: ocapa = $get(ocapa4); capa = $get(capa5); capa_ant = $get(capa4); break;
                case 6: ocapa = $get(ocapa5); capa = $get(capa6); capa_ant = $get(capa5); break;
                case 7: ocapa = $get(ocapa6); capa = $get(capa7); capa_ant = $get(capa6); break;
                case 8: ocapa = $get(ocapa7); capa = $get(capa8); capa_ant = $get(capa7); break;
                case 9: ocapa = $get(ocapa8); capa = $get(capa9); capa_ant = $get(capa8); break;
            }

            if (ocapa) {
                ocapa.style.height = "0px";
                ocapa.style.width = "0px";
                ocapa.style.top = "0px";
                ocapa.style.left = "0px";
                ocapa.style.display = "none";
            }

            // ---------------------------------------
            // guardo datos anteriores por si cancela
            // ---------------------------------------

            p_capa_entrada--;

            if (!ordenar_capas()) { return false; }

            p_capa_entrada = p_capa_entrada_ant[p_capa_entrada];
            p_tabla_tratada = p_tabla_tratada_ant[p_capa_entrada];
            p_tabla_maestra = p_tabla_maestra_ant[p_capa_entrada];
            p_codigo_tratado = p_codigo_tratado_ant[p_capa_entrada];
            p_codigo_maestra = p_codigo_maestra_ant[p_capa_entrada];
            p_where = p_where_ant[p_capa_entrada];
            p_where_tabla = p_where_tabla_ant[p_capa_entrada];
            p_contenedor = p_contenedor_ant[p_capa_entrada];
            p_tab = p_tab_ant[p_capa_entrada];
            p_tipo_informacion = p_tipo_informacion_ant[p_capa_entrada];
            p_pagina = p_pagina_ant[p_capa_entrada];
            p_texto_buscado = p_texto_buscado_ant[p_capa_entrada];
            p_campo_ordenacion = p_campo_ordenacion_ant[p_capa_entrada];
            p_seleccion_filtrado = p_seleccion_filtrado_ant[p_capa_entrada];
            p_filtros = p_filtros_ant[p_capa_entrada];
            p_orden_ordenacion = p_orden_ordenacion_ant[p_capa_entrada];
            p_tipo_registros = p_tipo_registros_ant[p_capa_entrada];
            p_impresion = p_impresion_ant[p_capa_entrada];
            p_accion = p_accion_ant[p_capa_entrada];
            p_dd_recargar = p_dd_recargar_ant[p_capa_entrada];

            // $get('refresco').innerHTML = p_codigo_mostrar_detalle[p_capa_entrada][p_num_tab] + " [" + p_codigo_mostrar_detalle_previo[p_capa_entrada][p_num_tab] + "]";

            for (var x = p_capa_entrada + 1; x < 8; x++) { p_hilo[x] = -1; p_tabla_hilo[x] = ".."; }

            if (!activar_boton_refrescar()) { return false; }
            if (!Refresca_Detalles_Asociados_Grid("")) { return false; }
            if (!Refresca_Registro_Grid()) { return false; }

            return true;

        }

        catch (e) { alert('ERROR: ' + e.message); return false; }
        finally { baja_capa_completado = 1;}

}

// ---------------------------------------
    function Generar_Lista_Parametros() {
// ---------------------------------------

try {

    p_lista_parametros = "<parametros>";
  //p_lista_parametros += "<llamada>" + Math.random() * 100000000000000000 + "</llamada>"
    p_lista_parametros += "<capa_entrada>" + p_capa_entrada + "</capa_entrada>";
    p_lista_parametros += "<grid_primera_vez>" + p_grid_primera_vez + "</grid_primera_vez>";
    p_lista_parametros += "<tabla_tratada>" + p_tabla_tratada + "</tabla_tratada>";
    p_lista_parametros += "<otra_tabla>" + p_otra_tabla + "</otra_tabla>";
    p_lista_parametros += "<solo_rejilla>" + p_solo_rejilla + "</solo_rejilla>";
    p_lista_parametros += "<tabla_maestra>" + p_tabla_maestra + "</tabla_maestra>";
    p_lista_parametros += "<codigo_tratado>" + p_codigo_tratado + "</codigo_tratado>";
    p_lista_parametros += "<codigo_maestra>" + p_codigo_maestra + "</codigo_maestra>";
    p_lista_parametros += "<where>" + p_where + "</where>";
    p_lista_parametros += "<contenedor>" + p_contenedor + "</contenedor>";
    p_lista_parametros += "<tab>" + p_tab + "</tab>";
    p_lista_parametros += "<tipo_informacion>" + p_tipo_informacion + "</tipo_informacion>";
    p_lista_parametros += "<texto_buscado>" + p_texto_buscado + "</texto_buscado>";
    p_lista_parametros += "<campo_ordenacion>" + p_campo_ordenacion + "</campo_ordenacion>";
    p_lista_parametros += "<busquedas_directas>" + p_busqueda_directa + "</busquedas_directas>";
    p_lista_parametros += "<filtros_frontales>" + p_filtros_frontales + "</filtros_frontales>";
    p_lista_parametros += "<seleccion_filtrado>" + p_seleccion_filtrado + "</seleccion_filtrado>";
    p_lista_parametros += "<orden_ordenacion>" + p_orden_ordenacion + "</orden_ordenacion>";
    p_lista_parametros += "<filtros>" + p_filtros + "</filtros>";
    p_lista_parametros += "<tipo_registros>" + p_tipo_registros + "</tipo_registros>";
    p_lista_parametros += "<impresion>" + p_impresion + "</impresion>";
    p_lista_parametros += "<accion>" + p_accion + "</accion>";
    p_lista_parametros += "<pagina>" + p_pagina + "</pagina>";
    p_lista_parametros += "<datos_precargados>" + p_datos_precargados + "</datos_precargados>";
    
    for (var x = 1; x < 8; x++) {
        p_lista_parametros += "<hilo" + x + ">" + p_hilo[x] + "</hilo" + x + ">";
        p_lista_parametros += "<tabla_hilo" + x + ">" + p_tabla_hilo[x] + "</tabla_hilo" + x + ">";
    }

    p_lista_parametros += "</parametros>";

    return (true);
}

catch (e) {

    alert('Error: '+e.message);
    return false;
}
    
}

// ---------------------------------------
    function Leer_Lista_Parametros(xml) {
// ---------------------------------------

try {

    p_capa_entrada = parseInt(valor_xml(xml, 'capa_entrada'));
    p_tabla_tratada = valor_xml(xml, 'tabla_tratada');
    p_tabla_maestra = valor_xml(xml, 'tabla_maestra');
    p_codigo_tratado = parseInt(valor_xml(xml, 'codigo_tratado'));
    p_codigo_maestra = parseInt(valor_xml(xml, 'codigo_maestra'));
    p_where = valor_xml(xml, 'where');
    p_contenedor = valor_xml(xml, 'contenedor');
    p_tab = valor_xml(xml, 'tab');
    p_tipo_informacion = valor_xml(xml, 'tipo_informacion');
    p_pagina = parseInt(valor_xml(xml, 'pagina'));
    p_texto_buscado = valor_xml(xml, 'texto_buscado');
    p_campo_ordenacion = valor_xml(xml, 'campo_ordenacion');
    p_seleccion_filtrado = valor_xml(xml, 'seleccion_filtrado');
    p_filtros = valor_xml(xml, 'filtros');
    p_orden_ordenacion = valor_xml(xml, 'orden_ordenacion');
    p_tipo_registros = valor_xml(xml, 'tipo_registros');
    p_impresion = valor_xml(xml, 'impresion');

    if (!p_impresion) {p_impresion = 0;}

    p_accion = valor_xml(xml, 'accion');

    for (var x = 1; x < 8; x++) {
        p_hilo[x] = valor_xml(xml, 'hilo' + x);
        p_tabla_hilo[x] = valor_xml(xml, 'tabla_hilo' + x);
    }

    return true;

    }

catch (e) {

    alert('Error: '+e.message);
    return false;
    }
}

// ---------------------------------------
    function Ver_Variables() {
// ---------------------------------------

    // return (true);

    var d = new Date();
    var t = d.toLocaleTimeString();

    var p_lista = "<table><tr><td>capa_entrada</td><td>" + p_capa_entrada + "</td></tr>";
    p_lista += "<tr><td>tabla_tratada</td><td>" + p_tabla_tratada + "</td></tr>";
    p_lista += "<tr><td>tabla_maestra</td><td>" + p_tabla_maestra + "</td></tr>";
    p_lista += "<tr><td>codigo_tratado</td><td>" + p_codigo_tratado + "</td></tr>";
    p_lista += "<tr><td>codigo_maestra</td><td>" + p_codigo_maestra + "</td></tr>";
    p_lista += "<tr><td>where</td><td>" + p_where + "</td></tr>";
    p_lista += "<tr><td>contenedor</td><td>" + p_contenedor + "</td></tr>";
    p_lista += "<tr><td>tab</td><td>" + p_tab + "</td></tr>";
    p_lista += "<tr><td>tipo_informacion</td><td>" + p_tipo_informacion + "</td></tr>";
    p_lista += "<tr><td>texto_buscado</td><td>" + p_texto_buscado + "</td></tr>";
    p_lista += "<tr><td>campo_ordenacion</td><td>" + p_campo_ordenacion + "</td></tr>";
    p_lista += "<tr><td>seleccion_filtrado</td><td>" + p_seleccion_filtrado + "</td></tr>";
    p_lista += "<tr><td>filtros</td><td>" + p_filtros + "</td></tr>";
    p_lista += "<tr><td>orden_ordenacion</td><td>" + p_orden_ordenacion + "</td></tr>";
    p_lista += "<tr><td>tipo_registros</td><td>" + p_tipo_registros + "</td></tr>";
    p_lista += "<tr><td>impresion</td><td>" + p_impresion + "</td></tr>";
    p_lista += "<tr><td>accion</td><td>" + p_accion + "</td></tr>";
    p_lista += "<tr><td>pagina</td><td>" + p_pagina + "</td></tr>";
    for (var x = 1; x < 8; x++) {
        p_lista += "<tr><td>hilo" + x + "</td><td>" + p_hilo[x] + "/" + p_tabla_hilo[x] + "</td></tr>"; 
    }
    p_lista += "<tr><td>Hora</td><td>" + t + "</td></tr></table>";

    $('#DivDebug').html(p_lista);

    return (true);
}

// ---------------------------------------
    function getElementPosition(el) {
// ---------------------------------------
    var l = 0, t = 0;
    while (el.offsetParent) {
        l += el.offsetLeft;
        t += el.offsetTop;
        el = el.offsetParent;
    }
    return { left: l, top: t };
}

// -------------------------------------------
    function iniciar_panel_ficheros() {
// ---------------------------------------

    try {

        // Vaciar el contenido de la cola previa

        var queueContainer = document.getElementsByClassName('ajax__fileupload_queueContainer')[0]

        if (queueContainer) {

            while (queueContainer.hasChildNodes()) { queueContainer.removeChild(queueContainer.lastChild); }
            queueContainer.style.overflowY = "scroll";

            // Preparar el height del contenedor de ficheros
            
            var opanel_subida_fichero = $get(divverficheros);
            var y_screen = document.body.clientHeight;
            var y_opanel_subida_fichero = GetScreenCordinates(opanel_subida_fichero).y;
            var y_adicional = 20;

            p = (y_screen - y_opanel_subida_fichero - y_adicional)/2;
            p = Math.round(p).toString() + "px";
            queueContainer.style.height = p;

        }

        // Vaciar el contenido de los controles file

        var uploads = document.getElementsByClassName('ajax__fileupload_selectFileContainer')
        for (var i = 0; i < uploads.length; i++) {
            for (var ch = 0; ch < uploads[i].children.length; ch++) {
                children = uploads[i].children[ch];
                if (children.type == "file") {
                    children.value = "";
                }
            }
        }

        // ------------------------------------------
        // Poner los controles en modo inicial
        // ------------------------------------------
        
        var s0 = $('.ajax__fileupload_uploadbutton');$.each(s0, function (i, val) { $(val).html("Subir"); });
        var s1 = $('.ajax__fileupload_selectFileButton'); $.each(s1, function (i, val) { $(val).html("Selección"); });
        var dropzones = $('.ajax__fileupload_dropzone');$.each(dropzones, function (i, val) { $(val).html("Arrastre archivo aquí"); $(val).hide(); }); 
        var files = $('.filename'); $.each(files, function (i, val) { $(val).hide(); });
        var status = $('.uploadstatus');  $.each(status, function (i, val) { $(val).hide(); });
        var colas = $('.ajax__fileupload_queueContainer');$.each(colas, function (i, val) {$(val).html(""); $(val).hide(); });
        var footer = $('.ajax__fileupload_footer');$.each(footer, function (i, val) { $(val).hide(); });
        var selector1 = $('.ajax__fileupload_selectFileContainer');$.each(selector1, function (i, val) {$(selector1).show();});  // Mostrar el Contenedor de Ficheros

        return true;

    } catch (e) { alert('ERROR: ' + e.message); return false; }

}

// -------------------------------------------
    function configurar_panel_ficheros() {
// --------------------------------------------

    var opanel_subida_fichero = $get(divsubefichero);
    if (opanel_subida_fichero) {
        if (opanel_subida_fichero.style.display == "none") { return true }
    }

    var dropzones = $('.ajax__fileupload_dropzone');                                             // ocultar la dropzone
        $.each(dropzones, function (i, val) { if ($(val).text() != "") { $(val).hide(); } });    // Invisible la division drop
    return true;

}

// ----------------------------
    function ordenar_capas() {
// ----------------------------
        try {

            var ocapa;
            var capa_act;
            var capa_ant;

            switch (p_capa_entrada) {
                case 1: ocapa = ""; capa_act = $get(capa1); capa_ant = ""; break;
                case 2: ocapa = $get(ocapa1); capa_act = $get(capa2); capa_ant = $get(capa1); break;
                case 3: ocapa = $get(ocapa2); capa_act = $get(capa3); capa_ant = $get(capa2); break;
                case 4: ocapa = $get(ocapa3); capa_act = $get(capa4); capa_ant = $get(capa3); break;
                case 5: ocapa = $get(ocapa4); capa_act = $get(capa5); capa_ant = $get(capa4); break;
                case 6: ocapa = $get(ocapa5); capa_act = $get(capa6); capa_ant = $get(capa5); break;
                case 7: ocapa = $get(ocapa6); capa_act = $get(capa7); capa_ant = $get(capa6); break;
                case 8: ocapa = $get(ocapa7); capa_act = $get(capa8); capa_ant = $get(capa7); break;
                case 9: ocapa = $get(ocapa8); capa_act = $get(capa9); capa_ant = $get(capa8); break;
            }

            if (capa_act) { capa_act.style.zIndex = 15002;}
            if (ocapa) { ocapa.style.zIndex = 15001; }
            if (capa_ant) {capa_ant.style.zIndex = 15000;}
            return true;
        } catch (e) { alert('ERROR: ' + e.message); return false; }
}

// ----------------------------
    function posicionar_capa() {
// ----------------------------

        try {

            if (capa_posicionada == 1) { return true; }

            var ocapa;
            var capa_act;
            var capa_ant;

            switch (p_capa_entrada) {
                case 1: ocapa = ""; capa_act = $get(capa1); capa_ant = ""; break;
                case 2: ocapa = $get(ocapa1); capa_act = $get(capa2); capa_ant = $get(capa1); break;
                case 3: ocapa = $get(ocapa2); capa_act = $get(capa3); capa_ant = $get(capa2); break;
                case 4: ocapa = $get(ocapa3); capa_act = $get(capa4); capa_ant = $get(capa3); break;
                case 5: ocapa = $get(ocapa4); capa_act = $get(capa5); capa_ant = $get(capa4); break;
                case 6: ocapa = $get(ocapa5); capa_act = $get(capa6); capa_ant = $get(capa5); break;
                case 7: ocapa = $get(ocapa6); capa_act = $get(capa7); capa_ant = $get(capa6); break;
                case 8: ocapa = $get(ocapa7); capa_act = $get(capa8); capa_ant = $get(capa7); break;
                case 9: ocapa = $get(ocapa8); capa_act = $get(capa9); capa_ant = $get(capa8); break;
            }

            if (capa_act && capa_ant) {

                if (capa_ant.offsetTop < 0) {
                    capa_ant.style.top = "0px";
                }

                if (capa_ant.offsetLeft < 0) {
                    capa_an.style.left = "0px";
                }

                var newpostop = capa_ant.offsetTop + 10;
                var newposleft = capa_ant.offsetLeft + 10;

                capa_act.style.top = newpostop + "px";
                capa_act.style.left = newposleft + "px";
                capa_posicionada = 1;
            }
            return true;
        }
        catch (e) { alert('ERROR: ' + e.message); return false; }
}

// -----------------------------------------------------------
    function Ver_Fichero_General(codigo) {
// ------------------------------------------------------------

    codigo_fichero_bajar = "fichero_" + codigo;
    THERION.WSmantenimiento.Ver_Fichero_General(codigo, RVer_Fichero_General, OnError, OnTimeOut);
}

// ------------------------------------------------------------------
    function WVer_Fichero_General(tabla, campo, extension, codigo) {
// ------------------------------------------------------------------
    THERION.WSmantenimiento.Ver_Fichero(tabla, campo, extension, codigo, RVer_Fichero_General, OnError, OnTimeOut);
}

// --------------------------------------
    function RVer_Fichero_General(arg) {
// --------------------------------------

try {

        var resultado = valor_xml(arg, 'resultado');

        if (resultado == 'OK') {
            var fichero = valor_xml(arg, 'fichero');
            if (fichero != '') {
                var path = window.location.href;
                var n = path.lastIndexOf("/");
                newURL = path.substring(0, n) + "/documentos/" + fichero;
                var descarga = document.getElementById(codigo_fichero_bajar);
                if (descarga) {descarga.style.display = "";}
                window.open(newURL, "Download");
                setTimeout(function () { WBorrar_Fichero_Servidor(fichero, codigo_fichero_bajar) }, 30000);
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

catch (e) { alert('ERROR: ' + e.message); return false; }

    }

// ---------------------------------------------------------------------
    function Borrar_Fichero_General(codigo, tabla, campo, registro) {
// ---------------------------------------------------------------------
    THERION.WSmantenimiento.Borrar_Fichero_General(codigo, tabla, campo, registro, RBorrar_Fichero_General, OnError, OnTimeOut);
}

// --------------------------------------------
    function WBorrar_Fichero_General(codigo) {
// --------------------------------------------
    THERION.WSmantenimiento.Borrar_Fichero_General(codigo, "", "", 0, RBorrar_Fichero_General, OnError, OnTimeOut);
}

// ----------------------------------------
    function RBorrar_Fichero_General(arg) {
// ----------------------------------------

    try {

            var resultado = valor_xml(arg, 'resultado');

        if (resultado == 'OK') {
            var codfic = valor_xml(arg, 'codfichero');
            var ROWFile = document.getElementById("RF" + codfic);
            if (ROWFile) {
                ROWFile.style.display = "none";
            }
        }
        else {
            var error = valor_xml(arg, 'error');
            alert(error);
        }

        return false;

    }

    catch (e) { alert('ERROR: ' + e.message); return false; }

    }

// ---------------------------------------
    function Minimiza_Zona(zona) {
// ---------------------------------------

    try {

        var todos = document.getElementsByClassName("tr_zona");
        for (var i = 0; i < todos.length; i++) {
            if (todos[i].id.slice(0, zona.length) == zona) {
                todos[i].style.display = "none";
            }
        }

    }

    catch (e) { alert('ERROR: ' + e.message); return false; }

    }

// ---------------------------------------
    function Maximiza_Zona(zona) {
// ---------------------------------------

    try {

        var todos = document.getElementsByClassName("tr_zona");
        for (var i = 0; i < todos.length; i++) {
            if (todos[i].id.slice(0, zona.length) == zona) {
                todos[i].style.display = "inline";
            }
        }

    }

    catch (e) { alert('ERROR: ' + e.message); return false; }

    }

// ----------------------------------------------------------------
    function Anula_Zona(zona, etiqueta, imagen_act, imagen_des) {
// ----------------------------------------------------------------

        try {

            var todos = document.getElementsByClassName("tr_zona");
            for (var i = 0; i < todos.length; i++) {
                if (todos[i].id.slice(0, zona.length) == zona) {
                    todos[i].style.display = "none";
                }
            }
            document.getElementById(imagen_act).style.display = "";
            document.getElementById(imagen_des).style.display = "none";
            document.getElementById(etiqueta).style.display = "";
        }
        catch (err) {
            txt = "ERROR: " + err.message + "\n\n";
            alert(txt);
        }
}

// -----------------------------------------------------------------
    function Recupera_Zona(zona, etiqueta, imagen_act, imagen_des) {
// -----------------------------------------------------------------

        try {
            var todos = document.getElementsByClassName("tr_zona");
            for (var i = 0; i < todos.length; i++) {
                if (todos[i].id.slice(0, zona.length) == zona) {
                    todos[i].style.display = "";
                }
            }

            document.getElementById(imagen_act).style.display = "";
            document.getElementById(imagen_des).style.display = "none";
            document.getElementById(etiqueta).style.display = "none";

        }
        catch (err) {
            txt = "ERROR: " + err.message + "\n\n";
            alert(txt);
        }

    }

// -----------------------------------------------------------------
   function Nueva_Zona(inicio_marca, final_marca) {
// -----------------------------------------------------------------

       if (!Mostrar_Pantalla_Esperando()) { return; }

       try {

            Guardar_Valores_Ficha();
            var con_act = document.getElementById(p_contenedor);
            if (con_act) {
                var cHtml = con_act.innerHTML;
                THERION.WSmantenimiento.Nueva_Zona_Detalle(cHtml, inicio_marca, final_marca, RNueva_Zona_Detalle, OnError, OnTimeOut);
            }
        }
        catch (err) {
            txt = "ERROR: " + err.message + "\n\n";
            alert(txt);
            if (!Quitar_Pantalla_Esperando()) { return false; }
        }
    }

 // ----------------------------------------
    function RNueva_Zona_Detalle(arg) {
 // ----------------------------------------

    var con_act = document.getElementById(p_contenedor);
    var con_dat = document.getElementById("con_" + p_capa_entrada + "_1");
    
    if (con_dat) {
        var scroll_position = con_dat.scrollTop;
        var height_dat = con_dat.scrollHeight; 
    }

    if (con_act) {
    
        var html = valor_xml(arg, 'html');
        con_act.innerHTML = html;

        var id = valor_xml(arg, 'id');
        var id_old = valor_xml(arg, 'id_old');
        var tabladetalle = valor_xml(arg, 'tabladetalle');
        var numero = valor_xml(arg, 'numero');

        // ----------------------------------
        // Recargar el TextArea de Grabacion
        // ----------------------------------

        var campo_grabacion_global = document.getElementById("grabacion_" + p_tabla_tratada);
        var contenido_global = campo_grabacion_global.value;

        var campo_grabacion_tabla = document.getElementById("grabacion_unitaria_" + id);
        var contenido_tabla = campo_grabacion_tabla.value;

        contenido_global = replaceAll(contenido_global, '</parametros>', contenido_tabla + '</parametros>');
        contenido_global = replaceAll(contenido_global, '<tablas><m>' + id_old + '</m></tablas>', '<tablas><m>' + id_old + '</m></tablas>' + '<tablas><m>' + id + '</m></tablas>');

        campo_grabacion_global.value = contenido_global;

        var etiqueta_zona_tabla = document.getElementById("etiqueta_zona_" + id);
        if (etiqueta_zona_tabla) {
            etiqueta_zona_tabla.innerHTML = tabladetalle + " " + numero;
        }

        var nueva_zona_tabla = document.getElementById("img_nueva_zona_" + id_old);
        if (nueva_zona_tabla) {
            nueva_zona_tabla.style.display="none";
        }

        // --------------------------------
        // Vaciar los valores de los campos
        // --------------------------------

            // --------------------
            // Tratamiento como XML
            // --------------------

            if (window.DOMParser) {
                parser = new DOMParser();
                doc = parser.parseFromString('<parametros>' + contenido_tabla + '</parametros>', "text/xml");
            }
            else {                                                   // Internet Explorer
                doc = new ActiveXObject("Microsoft.XMLDOM");
                doc.async = "false";
                doc.loadXML('<parametros>' + contenido_tabla + '</parametros>');
            }
    
            // ---------------------------
            // - Recorrido por los Campos
            // ---------------------------

            var datos = doc.getElementsByTagName("datos");

            for (x = 0; x < datos.length; x++) {
                var idObj = datos[x].getElementsByTagName("c")[0].childNodes[0].nodeValue;
                var obj = document.getElementById(idObj);
                if (obj) {
                    dato = "";
                    if (obj.type == "checkbox") {obj.checked=false;}
                    else if (obj.type == "select-one") {
                        obj.value = -1;
                        var sch = document.getElementById("sch_" + idObj);
                        if (sch) {sch.value = "";}
                    }
                    else {obj.value="";}
               }
            }

            Reponer_Valores_Ficha();
    }

    if (!Quitar_Pantalla_Esperando()) { return false; }

    con_dat = document.getElementById("con_" + p_capa_entrada + "_1");
    if (con_dat) {
        con_dat.scrollTop = scroll_position + (con_dat.scrollHeight - height_dat); 
    }

    return false;
}

// -----------------------------------------------------
    function WBorrar_Fichero_Servidor(fichero, codigo) {
// -----------------------------------------------------

    var descarga = document.getElementById(codigo);
    if (descarga) { descarga.style.display = "none"; }

    THERION.WSmantenimiento.Borrar_Fichero_Servidor(fichero, RBorrar_Fichero_Servidor, OnError, OnTimeOut);
}
    
// ----------------------------------------------
    function RBorrar_Fichero_Servidor(fichero) { return false; }
// ----------------------------------------------

// -------------------------------------
    function Regenerar_HTML_Filtros() {
// -------------------------------------
        return true;

        //try {

        //    var filtrado_adicional = "";
        //    var html_filtro = "";
        //    var eti = "";
        //    var row;
        //    var TxA;
        //    var campo_filtrado;
        //    var select_one_options;

        //    // ------------------------
        //    // Tabla de filtros de DD
        //    // ------------------------

        //    var divfiltros = document.getElementById("division_filtros_" + p_tabla_tratada + "_" + p_capa_entrada + "_" + p_tab);
        //    if (divfiltros && 1 == 2) { html_filtro = divfiltros.innerHTML }

        //    var tablafiltros = document.getElementById("filtros_" + p_tabla_tratada + "_" + p_capa_entrada + "_" + p_tab);

        //    if (tablafiltros && 1 == 1) {

        //        // -----------------
        //        // Linea de Título
        //        // -----------------

        //        html_filtro += '<table style="border-collapse:collapse;border:solid 0px #fff;width:100%;" id="filtros_' + p_tabla_tratada + '_' + p_capa_entrada + "_" + p_tab + '">';
        //        html_filtro += '<tr>'
        //                 + '<td colspan="2" style="border:solid 0px;text-align:left;padding-left:15px;">'
        //                 + '<a style="color:#FFF; text-shadow: black 0.1em 0.1em 0.2em;font-size:18pt;text-align:center" lang="TRADUCIR"><font lang="ES">Filtros</font></a>'
        //                 + '</td>'
        //               + '</tr>';

        //        // -----------------
        //        // Lineas de Combos
        //        // -----------------

        //        for (r = 1; r < tablafiltros.rows.length; r++) { // Recorrer cada row

        //            row = tablafiltros.rows[r];

        //            var a_onfocus;
        //            var sch_fil;
        //            var fil;
        //            var campo_fil;
        //            var campo_comun_fil;
        //            var select_fil;
        //            var nulo_fil;
        //            var nulo_campo_auto;
        //            var nulo_campo_combo;
        //            var select_one;

        //            var children

        //            for (var ch = 0; ch < row.cells[1].children.length; ch++) { // Recorrer cada hijo para encontrar cada control
        //                children = row.cells[1].children[ch];
        //                if (children.id.substring(0, 8) == "nulo_fil") { nulo_campo_combo = children; nulo_campo_auto = children }
        //            }

        //            // -------------------------------------
        //            // CAMPOS DEL SELECT (Están en CELL[2])
        //            // -------------------------------------

        //            for (ch = 0; ch < row.cells[2].children.length; ch++) { // Recorrer cada hijo para encontrar cada control
        //                children = row.cells[2].children[ch];
        //                if (children.id.substring(0, 9) == "a_onfocus") { a_onfocus = children }
        //                if (children.id.substring(0, 7) == "sch_fil") { sch_fil = children }
        //                if (children.id.substring(0, 3) == "fil") { fil = children }
        //                if (children.id.substring(0, 4) == "fil_") { select_one = children }
        //                if (children.id.substring(0, 9) == "campo_fil") { campo_fil = children }
        //                if (children.id.substring(0, 15) == "campo_comun_fil") { campo_comun_fil = children }
        //                if (children.id.substring(0, 10) == "select_fil") { select_fil = children }
        //            }
        //            html_filtro += '<tr style="height:30px;">';
        //            // ----------------------
        //            // Etiqueta 1 (CELL [0])
        //            // ----------------------
        //            eti = row.cells[0].children[0];  // Etiqueta
        //            html_filtro += '<td style="width:35%;border:solid 0px #000;margin:0px;text-align:right;padding-right:5px;">'
        //                  + '<a class="' + eti.className + '" lang="TRADUCIR" >' + eti.innerHTML + '</a></td>';
        //            // -----------------------------------------------------------
        //            // En la Classe de la Etiqueta se define el tipo de autocombo
        //            // -----------------------------------------------------------
        //            if (eti.className == 'autocombo') {
        //                // ---------------------------------
        //                // Celda para el campo Sin CELL [1]
        //                // ---------------------------------
        //                html_filtro +='<td style="width:5%;text-align:center;">'
        //                            + '<a id="' + nulo_campo_auto.id + '" lang="TRADUCIR" '
        //                            + ' style="border:solid ' + nulo_campo_auto.style.borderWidth + ' #eee;font-size:10pt;cursor:pointer;color:' + nulo_campo_auto.style.color + ';" '
        //                            + ' title="<font lang=\'ES\'>Activar/DesActivar</font>" '
        //                            + ' onclick="if (this.style.borderWidth==\'1px\') '
        //                                        + ' {this.style.borderWidth=\'0px\';'
        //                                            + ' this.style.color=\'#aaaaaa\';'
        //                                            + ' $(\'#' + sch_fil.id + '\').show();'
        //                                        + ' }'
        //                                        + ' else '
        //                                        + ' {this.style.borderWidth=\'1px\';'
        //                                            + ' this.style.color=\'#aa0000\';'
        //                                            + ' $(\'#' + sch_fil.id + '\').hide();'
        //                                        + ' }'
        //                                        + ' Recarga_DropDown_Filtros($(\'#' + fil.id + '\')[0]);" '
        //                            + '>' + nulo_campo_auto.innerHTML + '</a>'
        //                            + '</td>'
        //                // --------------------------
        //                // Celda para SELECT CELL [2]
        //                // --------------------------
        //                html_filtro += '<td style=";text-align:left;width:auto;border:solid 0px;" id="' + row.cells[2].id + '">'; // Celda para el AutoCombo 
        //                html_filtro += '<a id="' + a_onfocus.id + '" style="display:none;">' + a_onfocus.innerHTML + '</a>';      // Contenedor de onfocus
        //                // ------
        //                // input
        //                // ------
        //                html_filtro += '<input type="text" id="' + sch_fil.id + '" '
        //                           + ' class="filtro"'
        //                           + ' style="width:400px;border:solid 1px #000;border-bottom-style:dotted;margin-right:5px;margin-top:1px;font-size:10pt;'
        //                if (sch_fil.style.display == "none") { html_filtro += 'display:' + sch_fil.style.display + ';' }
        //                html_filtro += '"'
        //                html_filtro += a_onfocus.innerHTML;
        //                html_filtro += ' onblur="sale_foco_db(this);Recarga_DropDown_Filtros($(\'#' + fil.id + '\')[0]);" value="' + sch_fil.value + '" />';

        //                // --------
        //                // select
        //                // --------
        //                html_filtro += '<select class="filtro" '
        //                             + ' id="' + fil.id + '"'
        //                             + ' style="display:none;" ' + ' value="' + fil.value + '"'
        //                             + ' onchange="Recarga_DropDown_Filtros(this);" > ';

        //                campo_filtrado = fil.id;
        //                campo_filtrado = replaceAll(campo_filtrado, p_tabla_tratada + '_' + p_capa_entrada + '_' + p_tab + '_', "");
        //                campo_filtrado = replaceAll(campo_filtrado, 'fil_', "");

        //                if (sch_fil.style.display == "none") {
        //                    filtrado_adicional += " and tbp." + campo_filtrado + " is null";
        //                } else {
        //                    if (fil.value != "0" && fil.value != "" && fil.value != "-1") {
        //                        filtrado_adicional += " and tbp." + campo_filtrado + "=" + fil.value;
        //                    }
        //                }
        //                // Options del DD1
        //                    select_one_options = select_one.options;
        //                for (o = 0; o < select_one_options.length; o++) {
        //                    var seleccionado;
        //                    if (select_one_options[o].value == select_one.value) { seleccionado = 'selected' } else { seleccionado = '' }
        //                    html_filtro += '<option value="' + select_one_options[o].value + '" ' + seleccionado + ' >' + select_one_options[o].text + '</option>';
        //                }
        //                html_filtro += '</select>';
        //                // --------
        //                html_filtro += '<a id="' + campo_fil.id + '" style="display:none;">' + campo_fil.innerHTML + '</a>';              // Campo de Filtro
        //                html_filtro += '<textarea id="' + select_fil.id + '" style="display:none;">' + select_fil.value + '</textarea>';  // TextArea
        //                html_filtro += '<a id="' + campo_comun_fil.id + '" style="display:none;">' + campo_comun_fil.innerHTML + '</a>';  // Filtro Comun
        //                html_filtro += '</td>';                                                                                           // Cierre de Celda
        //            }
        //            //==================================================            
        //            if (eti.className == 'combo') {
        //                html_filtro +='<td style="width:5%;text-align:center;">'
        //                                + '<a id="' + nulo_campo_combo.id + '" lang="TRADUCIR"'
        //                                + ' style="border:solid ' + nulo_campo_combo.style.borderWidth + ' #eee;font-size:10pt;cursor:pointer;color:' + nulo_campo_combo.style.color + ';" '
        //                                + ' title="<font lang=\'ES\'>Activar/DesActivar</font>" '
        //                                + ' onclick="if (this.style.borderWidth==\'1px\') '
        //                                        + ' {this.style.borderWidth=\'0px\';'
        //                                            + ' this.style.color=\'#aaaaaa\';'
        //                                            + ' $(\'#' + select_one.id + '\').show();'
        //                                        + ' }'
        //                                        + ' else '
        //                                        + ' {this.style.borderWidth=\'1px\';'
        //                                            + ' this.style.color=\'#aa0000\';'
        //                                            + ' $(\'#' + select_one.id + '\').hide();'
        //                                        + ' }'
        //                                        + ' Recarga_DropDown_Filtros($(\'#' + select_one.id + '\')[0]);" '
        //                                + '>'
        //                                + nulo_campo_combo.innerHTML
        //                                + '</a>'
        //                            + '</td>';

        //                // ----------------
        //                // CELDA DEL SELECT
        //                // ----------------

        //                html_filtro += '<td style=";text-align:left;width:auto;border:solid 0px;" id="' + row.cells[2].id + '">';  // DD 1
        //                html_filtro += '<select class="filtro"'
        //                            + ' id="' + select_one.id + '"'
        //                            + ' style="margin-right:10px;margin-top:1px;padding-right:0px;font-size:10pt;border:solid 1px #000;'
        //                if (select_one.style.display == "none") { html_filtro += 'display:' + select_one.style.display + ';' }
        //                html_filtro += '"'
        //                    + ' value="' + select_one.value + '"'
        //                    + ' onchange="Recarga_DropDown_Filtros(this);"'
        //                    + ' onkeypress="PulsaEnter_Busqueda(event)  ;">';
        //                campo_filtrado = select_one.id;
        //                campo_filtrado = replaceAll(campo_filtrado, p_tabla_tratada + '_' + p_capa_entrada + '_' + p_tab + '_', "");
        //                campo_filtrado = replaceAll(campo_filtrado, 'fil_', "");
        //                if (select_one.style.display == "none") {
        //                    filtrado_adicional += " and tbp." + campo_filtrado + " is null";
        //                } else {
        //                    if (select_one.value != "0" && select_one.value != "" && select_one.value != "-1") {
        //                        filtrado_adicional += " and tbp." + campo_filtrado + "=" + select_one.value;
        //                    }
        //                }
        //                // Options del DD1
        //                select_one_options = select_one.options;
        //                for (o = 0; o < select_one_options.length; o++) {
        //                    if (select_one_options[o].value == select_one.value) { seleccionado = 'selected' } else { seleccionado = '' }
        //                    html_filtro += '<option value="' + select_one_options[o].value + '" ' + seleccionado + ' >' + select_one_options[o].text + '</option>';
        //                }
        //                html_filtro += '</select>';
        //                // ---------
        //                html_filtro += '<a id="' + campo_fil.id + '" style="display:none;">' + campo_fil.innerHTML + '</a>'               // Campo Filtro
        //                html_filtro += '<textarea id="' + select_fil.id + '" style="display:none;">' + select_fil.value + '</textarea>';  // TextArea
        //                html_filtro += '</td>';                                                                                           // Cierre de la Celda
        //            }
        //            html_filtro += '</tr>';  // Cierre de Row
        //        }
        //        html_filtro += '</table>';  // Cierre de Tabla
        //    }

        //    // ----------------------------------
        //    // ----------------------------------

        //    var tablafiltros_fechas = document.getElementById("filtros_fechas_" + p_tabla_tratada + "_" + p_capa_entrada + "_" + p_tab);

        //    if (tablafiltros_fechas && 1 == 1) {

        //        html_filtro += '<table style="border-collapse:collapse;border:solid 0px #fff;width:100%;" id="filtros_fechas_' + p_tabla_tratada + '_' + p_capa_entrada + "_" + p_tab + '">';

        //        for (r = 0; r < tablafiltros_fechas.rows.length; r++) { // Recorrer cada row

        //            row = tablafiltros_fechas.rows[r];

        //            html_filtro += '<tr style="height:30px;">';

        //            // ---------
        //            // Etiqueta 
        //            // ---------

        //            eti = row.cells[0].children[0];  // Etiqueta
        //            html_filtro += '<td style="width:35%;border:solid 0px #000;margin:0px;text-align:right;padding-right:5px;">'
        //                  + '<a lang="TRADUCIR">' + eti.innerHTML + '</a></td>';

        //            // -------------
        //            // Fecha desde
        //            // -------------

        //            var input_1 = row.cells[1].children[0];   // Input
        //            var img_1 = row.cells[1].children[1];     // Imagen
        //            var y_1 = row.cells[1].children[2];       // y
        //            var input_2 = row.cells[1].children[3];   // Input
        //            var img_2 = row.cells[1].children[4];     // Input

        //            html_filtro += '<td style=";text-align:left;width:auto;border:solid 0px #000;margin:0px;" id="' + row.cells[1].id + '">';
        //            html_filtro += '<input class="filtro" id="' + input_1.id + '" name="' + input_1.name + '" value="' + input_1.value + '"'
        //                        + ' style="width:100px;margin-top:1px;font-size:10pt;spacing:0px;vertical-align:top;border:solid 1px #000;" maxlenght="10" size="10" onkeypress="PulsaEnter_Busqueda(event);" />';
        //            html_filtro += '<img class="filtro" id="' + img_1.id + '" src="' + img_1.src + '" style="cursor:pointer;" lang="TRADUCIR" title="<font lang=\'ES\'>Acceso a Calendario</font>" onclick="displayDatePicker(\'' + input_1.id + '\');" />';

        //            html_filtro += '<a style="padding-left:5px;padding-right:5px;" lang="TRADUCIR"><font lang="ES">y</font></a>';

        //            html_filtro += '<input class="filtro" id="' + input_2.id + '" name="' + input_2.name + '" value="' + input_2.value + '"'
        //                        + ' style="width:100px;margin-top:1px;font-size:10pt;spacing:0px;vertical-align:top;border:solid 1px #000;" maxlenght="10" size="10" onkeypress="PulsaEnter_Busqueda(event);" />';
        //            html_filtro += '<img class="filtro" id="' + img_2.id + '" src="' + img_2.src + '" style="cursor:pointer;" lang="TRADUCIR" title="<font lang=\'ES\'>Acceso a Calendario</font>" onclick="displayDatePicker(\'' + input_2.id + '\');" />';

        //            var desde = input_1.value; desde = replaceAll(desde, 'undefined', '')
        //            var hasta = input_2.value;
        //            hasta = replaceAll(hasta, 'undefined', '')

        //            if (desde != "") {
        //                if (esFechaValida(desde)) {
        //                    campo_filtrado = input_1.id;
        //                    campo_filtrado = replaceAll(campo_filtrado, 'desde_', "");
        //                    campo_filtrado = replaceAll(campo_filtrado, p_tabla_tratada + '_' + p_capa_entrada + '_' + p_tab + '_', "");
        //                    filtrado_adicional += " and tbp." + campo_filtrado + "&gt;=convert(datetime,'" + desde + " 00:00:00',103)";
        //                } else {
        //                    alert(eti.innerHTML + " es fecha inválida");
        //                    return false;
        //                }
        //            }

        //            if (hasta != "") {
        //                if (esFechaValida(hasta)) {
        //                    campo_filtrado = input_2.id;
        //                    campo_filtrado = replaceAll(campo_filtrado, 'hasta_', "");
        //                    campo_filtrado = replaceAll(campo_filtrado, p_tabla_tratada + '_' + p_capa_entrada + '_' + p_tab + '_', "");
        //                    filtrado_adicional += " and tbp." + campo_filtrado + "&lt;=convert(datetime,'" + hasta + " 23:59:59',103)";
        //                } else {
        //                    alert(eti.innerHTML + " es fecha inválida");
        //                    return false;
        //                }
        //            }

        //            // ---------
        //            // TextArea
        //            // ---------

        //            TxA = row.cells[1].children[5];        // TextArea
        //            html_filtro += '<textarea id="' + TxA.id + '" style="display:none;font-family:Proxima Nova,Century Gothic;font-size:7pt;width:350px;height:40px;">' + TxA.value + '</textarea></td>'
        //            html_filtro += '</tr>';

        //        }
        //        html_filtro += '</table>';
        //    }

        //    // ----------------------------------
        //    // ----------------------------------

        //    var tablafiltros_numeros = document.getElementById("filtros_numeros_" + p_tabla_tratada + "_" + p_capa_entrada + "_" + p_tab);

        //    if (tablafiltros_numeros && 1 == 1) {

        //        html_filtro += '<table style="border-collapse:collapse;border:solid 0px #fff;width:100%;" id="filtros_numeros_' + p_tabla_tratada + '_' + p_capa_entrada + "_" + p_tab + '">';

        //        for (r = 0; r < tablafiltros_numeros.rows.length; r++) { // Recorrer cada row

        //            row = tablafiltros_numeros.rows[r];

        //            html_filtro += '<tr style="height:30px;">';

        //            // ---------
        //            // Etiqueta 
        //            // ---------

        //            eti = row.cells[0].children[0];  // Etiqueta
        //            html_filtro += '<td style="width:35%;border:solid 0px #000;margin:0px;text-align:right;padding-right:5px;">'
        //                  + '<a lang="TRADUCIR">' + eti.innerHTML + '</a></td>';

        //            // -------------
        //            // Numeros desde
        //            // -------------

        //            input_1 = row.cells[1].children[0];   // Input
        //            y_1 = row.cells[1].children[1];       // y
        //            input_2 = row.cells[1].children[2];   // Input

        //            html_filtro += '<td style=";text-align:left;width:auto;border:solid 0px #000;margin:0px;" id="' + row.cells[1].id + '">';
        //            html_filtro += '<input class="filtro" id="' + input_1.id + '" name="' + input_1.name + '" value="' + input_1.value + '"'
        //                 + ' style="width:' + input_1.style.width + ';margin-top:1px;font-size:10pt;spacing:0px;vertical-align:top;border:solid 1px #000;text-align:right;" maxlenght="12" size="12" onkeypress="keypressnum(event);PulsaEnter_Busqueda(event);" />';

        //            html_filtro += '<a style="padding-left:5px;padding-right:5px;">y</a>';

        //            html_filtro += '<input class="filtro" id="' + input_2.id + '" name="' + input_2.name + '" value="' + input_2.value + '"'
        //                + ' style="width:' + input_2.style.width + ';margin-top:1px;font-size:10pt;spacing:0px;vertical-align:top;border:solid 1px #000;text-align:right;" maxlenght="12" size="12" onkeypress="keypressnum(event);PulsaEnter_Busqueda(event);" />';

        //            desde = input_1.value; desde = replaceAll(desde, 'undefined', '')
        //            hasta = input_2.value; hasta = replaceAll(hasta, 'undefined', '')

        //            if (desde != "") {
        //                if (input_1.style.width == "100px") { if (!esEntero(desde)) { alert(eti.innerHTML + " es numero inválido"); return false; } }
        //                if (input_1.style.width == "101px") { if (!esDecimal(desde)) { alert(eti.innerHTML + " es numero inválido"); return false; } }
        //                campo_filtrado = input_1.id;
        //                campo_filtrado = replaceAll(campo_filtrado, 'desde_', "");
        //                campo_filtrado = replaceAll(campo_filtrado, ',', ".");
        //                campo_filtrado = replaceAll(campo_filtrado, p_tabla_tratada + '_' + p_capa_entrada + '_' + p_tab + '_', "");
        //                filtrado_adicional += " and tbp." + campo_filtrado + "&gt;=" + desde + "";
        //            }

        //            if (hasta != "") {
        //                if (input_2.style.width == "100px") { if (!esEntero(hasta)) { alert(eti.innerHTML + " es numero inválido"); return false; } }
        //                if (input_2.style.width == "101px") { if (!esDecimal(hasta)) { alert(eti.innerHTML + " es numero inválido"); return false; } }
        //                campo_filtrado = input_2.id;
        //                campo_filtrado = replaceAll(campo_filtrado, 'hasta_', "");
        //                campo_filtrado = replaceAll(campo_filtrado, ',', ".");
        //                campo_filtrado = replaceAll(campo_filtrado, p_tabla_tratada + '_' + p_capa_entrada + '_' + p_tab + '_', "");
        //                filtrado_adicional += " and tbp." + campo_filtrado + "&lt;=" + hasta + "";
        //            }

        //            // ---------
        //            // TextArea
        //            // ---------

        //            TxA = row.cells[1].children[3];        // TextArea
        //            html_filtro += '<textarea id="' + TxA.id + '" style="display:none;font-family:Proxima Nova,Century Gothic;font-size:7pt;width:350px;height:40px;">' + TxA.value + '</textarea></td>'
        //            html_filtro += '</tr>';

        //        }
        //        html_filtro += '</table>';
        //    }

        //    // ---------------------------------------

        //    if (html_filtro != "") {
        //        html_filtro += '<table style="border-collapse:collapse;border:solid 0px #fff;width:100%;"><tr><td colspan="2">&nbsp;</td></tr></table>';
        //    }

        //    filtros_adicionales = filtrado_adicional;
        //    filtros_emitidos = html_filtro;
        //    p_filtros = filtros_adicionales;

        //    return true;
        //}

        //catch (err) {
        //    alert(err.message);
        //    return false;
        //}
}


// -----------------------------
   function Borrar_Filtros() {
// -----------------------------

try {

    // --------------------
    // Vaciar los Filtros
    // --------------------

    var Ultima_Referencia;
    var aFrontales = document.getElementsByClassName("filtro_frontal_" + p_tabla_tratada + "_" + p_capa_entrada + "_" + p_tab);
    for (var i = 0; i < aFrontales.length; i++) {
        var filtro_frontal = aFrontales[i];
        if (filtro_frontal) {
            if (filtro_frontal.id.substring(0, 4) == "nulo" && filtro_frontal.style.borderWidth=="1px") {$get(filtro_frontal).click();}
            else if (filtro_frontal.id.substring(0, 6) == "desde_") { filtro_frontal.value = "" }
            else if (filtro_frontal.id.substring(0, 6) == "hasta_") { filtro_frontal.value = "" }
            else if (filtro_frontal.id.substring(0, 8) == "sch_fil_") { filtro_frontal.value = "" }
            else if (filtro_frontal.id.substring(0, 4) == "fil_") {
                filtro_frontal.value = "0"
                var value_asociado="value_" + filtro_frontal.id;
                var ovalue_asociado = document.getElementById(value_asociado);
                if (ovalue_asociado) {  
                    ovalue_asociado.value = "";
                }
                Ultima_Referencia = filtro_frontal
            }
            else { filtro_frontal.value = ""}
        }
    }

    if (Ultima_Referencia) { Recarga_DropDown_Filtros(Ultima_Referencia); }
    }

    catch (err) {
         txt = "ERROR en Borrar_Filtros() " + err.message + "\n\n";
         alert(txt);
         if (!Quitar_Pantalla_Esperando()) { return false; }
    }

    return true;
}

// ----------------------------------------------
    function Guardar_Valores_Ficha() {
// ----------------------------------------------

    try {

        valores_actuales = "";
        valores_actuales += "<?xml version='1.0' encoding='UTF-8'?>"
        valores_actuales += '<parametros>'

        aTag = new Array("input","select","textarea");

        for (var m = 0; m < aTag.length; m++) {

            var c = document.getElementById(p_contenedor);

            var d = c.getElementsByTagName(aTag[m]);

            for (var x = 0; x < d.length; x++) {

                var o = d[x];
                var v = "";

                if (o.parentNode) {
                    if (o.parentNode.className == "saltoli") {
                        if (o.type == "checkbox") {
                            if (o.checked) {v = "1"; } else {v = "0";}
                        }
                        else { v = o.value; }
                        v = replaceAll(v, "<", "&lt;");
                        v = replaceAll(v, ">", "&gt;");
                        valores_actuales += "<dato>";
                        valores_actuales += "<tag>" + aTag[m] + "</tag>";
                        valores_actuales += "<type>" + o.type + "</type>";
                        valores_actuales += "<campo>" + o.id + "</campo>";
                        valores_actuales += "<valor>" + v + "</valor>";
                        valores_actuales += "<valor_bruto>" + o.value + "</valor_bruto>";
                        valores_actuales += "</dato>";
                    }
                }
            }
        }

        valores_actuales += "</parametros>";
    }

     catch (err) {
         txt = "ERROR en Guardar_Valores_Ficha " + err.message + "\n\n";
         alert(txt);
         if (!Quitar_Pantalla_Esperando()) { return false; }
     }

    return true;
}

// ------------------------------------
    function Reponer_Valores_Ficha() {
// ------------------------------------

   try {

        if (window.DOMParser) {
            parser = new DOMParser();
            doc = parser.parseFromString(valores_actuales, "text/xml");
        }
        else {                                                   // Internet Explorer
            doc = new ActiveXObject("Microsoft.XMLDOM");
            doc.async = "false";
            doc.loadXML(valores_actuales);
        }
        var d = doc.getElementsByTagName("dato");
        for (var x = 0; x < d.length; x++) {

            var nodo_campo = d[x].getElementsByTagName("campo")[0];

            if (nodo_campo.childNodes.length > 0) {

                var i = nodo_campo.firstChild.nodeValue;
                var o = document.getElementById(i);

                if (o) {

                    var nodo_valor = d[x].getElementsByTagName("valor")[0];
                    var v = "";
                    if (nodo_valor.childNodes.length > 0) {
                        v = nodo_valor.firstChild.nodeValue;
                    }
                    v = replaceAll(v, "&lt;", "<");
                    v = replaceAll(v, "&gt;", ">");

                    var nodo_tipo = d[x].getElementsByTagName("type")[0];
                    var t = "";
                    if (nodo_tipo.childNodes.length > 0) {
                        t = nodo_tipo.firstChild.nodeValue;
                    }

                    if (t == "checkbox") {
                        if (v == "1") { o.checked = "true" } else { o.checked = "false" }
                    } else {
                        o.value = v;
                    }

                }
            }
        }
    }

    catch (err) {
        txt = "ERROR en Reponer_Valores_Ficha: " + err.message + "\n\n";
        alert(txt);
        if (!Quitar_Pantalla_Esperando()) { return false; }
    }

    return true;
}

// ----------------------
   function keybody(e) {
// ----------------------

    var F10_CODE = 121;

    var evtobj = window.event ? event : e;
    var code = evtobj.keyCode ? evtobj.keyCode : evtobj.which;

    if (code == F10_CODE) { 
        WGraba_Registro();
        return false;
    }
}

// --------------------------
    function keypressnum(e) {
// --------------------------

    var POINT_CODE = 46;
    var COMMA_CODE = 44;
    
    var evtobj = window.event ? event : e;
    var code = evtobj.keyCode ? evtobj.keyCode : (evtobj.which) ? evtobj.which : evtobj.charCode;

    if (code != POINT_CODE && code != COMMA_CODE)
        return true;

    try {

        var is_safari = navigator.userAgent.toLowerCase().indexOf("safari/") > -1;
        var is_chrome = navigator.userAgent.toLowerCase().indexOf("chrome/") > -1;
        var is_firefox = navigator.userAgent.toLowerCase().indexOf("firefox/") > -1;
        var is_ie = navigator.userAgent.toLowerCase().indexOf("msie ") > -1;
                
        if (is_ie) {
            window.event.keyCode = 0;
        } else {
            evtobj.preventDefault();
        }

        var focused = document.activeElement;
        var cadena = $(focused).val();
        var is_comma = cadena.indexOf(",") > -1;
        if (!is_comma) {
            var start = focused.selectionStart;
            var end = focused.selectionEnd;
            $(focused).val($(focused).val().substring(0, start) + "," + $(focused).val().substring(end, $(focused).val().length));
            focused.selectionStart = start + 1;
            focused.selectionEnd = start + 1;
        }

        return true;
    }

    catch (err) {
        alert(err);
        window.event.preventDefault(true);
        window.event.stopPropagation(true);
        window.event.stopped = true;
    }

    return true;
}

// -----------------------------
    function contenido_tr(tr) {
// -----------------------------
    // alert(tr.innerHTML);
}

// ------------------------
    function expande(tr) {
// ------------------------
    var tabla = tr.parentNode;
    // alert(tabla.innerHTML);
    for (r = 1; r < tabla.rows.length; r++) { // Recorrer cada row
        var row = tabla.rows[r];
        if (row.style.display == "none") {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    }
}

// ---------------------------------------------------
   function WBloquear_para_facturar(codigo_concepto) {
// ---------------------------------------------------

    if (!Mostrar_Pantalla_Esperando()) { return; }
    THERION.WSmantenimiento.Bloquear_para_facturar(codigo_concepto, RBloquear_para_facturar, OnError, OnTimeOut);
}

// -------------------------------------
   function RBloquear_para_facturar(arg) {
// -------------------------------------

   if (arg != 'OK') {alert(arg);}
   if (!Quitar_Pantalla_Esperando()) { return false; }
   if (!Refresca_Registro_Grid()) { return false; }
   return true;
}

// -------------------------------------------------
   function WDesBloquear_para_facturar(codigo_concepto) {
// -------------------------------------------------

    if (!Mostrar_Pantalla_Esperando()) { return; }
    THERION.WSmantenimiento.DesBloquear_para_facturar(codigo_concepto, RDesBloquear_para_facturar, OnError, OnTimeOut);
    return true;
}

// -------------------------------------
    function RDesBloquear_para_facturar(arg) {
// -------------------------------------

    if (arg != 'OK') { alert(arg); }
    if (!Quitar_Pantalla_Esperando()) { return false; }
    if (!Refresca_Registro_Grid()) { return false; }
    return true;
}

// --------------------------------------------------------------------------
    function WFacturar_Pendiente_Contrato(codigo_contrato, fecha_factura) {
// --------------------------------------------------------------------------

    if (!Mostrar_Pantalla_Esperando()) { return; }
    THERION.WSmantenimiento.Facturar_Pendiente_Contrato(codigo_contrato, fecha_factura, RFacturar_Pendiente_Contrato, OnError, OnTimeOut);
    return true;
}

// ----------------------------------------------
    function RFacturar_Pendiente_Contrato(arg) {
// ----------------------------------------------

    if (arg.slice(0, 2) == 'OK') {alert(arg);} else {alert(arg);}
    if (!Quitar_Pantalla_Esperando()) { return false; }
    if (!Refresca_Registro_Grid()) { return false; }
    return true;
}

// ----------------------------------------------
    function esEntero(dat) {
// ----------------------------------------------

    var er_num = /^(-)?[0-9]*$/;
    if (dat != undefined && dat != "") {
        if (!er_num.test(dat)) {
            return false;
        }
    }
    return true;
}

// ----------------------------------------------
   function esDecimal(dat) {
// ----------------------------------------------

    var er_num = /^([0-9])*[.]?[0-9]*$/;
    var valido;
    if (dat != undefined && dat != "") {
        if (!er_num.test(dat)) {
            return false;
        }
    }
    return true;
}

// ----------------------------------
    function esFechaValida(fecha) {
// ----------------------------------

    if (fecha != undefined && fecha.value != "") {
        fecha = fecha.replace(/-/g, '/');
        var expreg = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
        if (!expreg.test(fecha)) {
            return false;
        }
        var dia = fecha.substring(0, 2);
        var mes = fecha.substring(3, 5);
        var anio = parseInt(fecha.substring(6, 10));

        switch (mes) {
            case "01":
            case "03":
            case "05":
            case "07":
            case "08":
            case "10":
            case "12":
                numDias = 31;
                break;
            case "04":
            case "06":
            case "09":
            case "11":
                numDias = 30;
                break;
            case "02":
                if (comprobarSiBisisesto(anio)) { numDias = 29 } else { numDias = 28 };
                break;
            default:
                return false;
        }

        if (dia > numDias || dia == 0) {
            return false;
        }
        return true;
    }
}

// ----------------------------------------------
    function comprobarSiBisisesto(anio) {
// ----------------------------------------------
    if ((anio % 100 != 0) && ((anio % 4 == 0) || (anio % 400 == 0))) {
        return true;
    }
    else {
        return false;
    }
}

// ------------------------------------------------
    function WXLS_Tabla(tabla, lista, celda_td) {
// ------------------------------------------------
    objeto_man_cambiar_html = document.getElementById(celda_td);
    if (objeto_man_cambiar_html) {
        if (!Mostrar_Pantalla_Esperando()) { return; }
        THERION.WSmantenimiento.XLS_Tabla(tabla, lista, RXLS_Tabla, OnError, OnTimeOut);
    }
    return true;
}

// ------------------------------
    function RXLS_Tabla(arg) {
// ------------------------------
   if (objeto_man_cambiar_html) {objeto_man_cambiar_html.innerHTML = arg }
   if (!Quitar_Pantalla_Esperando()) { return false; }
   return true;
}

// -----------------------------------------------------
    function WXLS_General_Tabla(tabla, filtros, celda_td) {
// -----------------------------------------------------
    objeto_man_cambiar_html = document.getElementById(celda_td);
    if (objeto_man_cambiar_html) {
        if (!Mostrar_Pantalla_Esperando()) { return; }
        THERION.WSmantenimiento.XLS_General_Tabla(tabla, filtros, RXLS_General_Tabla, OnError, OnTimeOut);
    }
    return true;
}

// -----------------------------------
    function RXLS_General_Tabla(arg) {
// -----------------------------------

    var resultado = valor_xml(arg, 'resultado');
    if (resultado == 'OK') {
        var fichero = valor_xml(arg, 'salida');
        if (fichero != '') {
            if (objeto_man_cambiar_html) { objeto_man_cambiar_html.innerHTML = fichero; }
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
    return true;
}

// -----------------------------------------------------
    function WXLS_General_SQL(procedimiento, celda_td) {
// -----------------------------------------------------

    var objeto_sql = document.getElementById("xlssql_" + procedimiento);
    objeto_man_cambiar_html = document.getElementById(celda_td);

    if (!objeto_sql) {
        alert("Imposible generar el fichero ahora.");
        return;
    }

    var SQL = objeto_sql.value;

    if (objeto_man_cambiar_html) {
        if (!Mostrar_Pantalla_Esperando()) { return; }
        THERION.WSmantenimiento.XLS_General_SQL(SQL, RXLS_General_SQL, OnError, OnTimeOut);
    }
    return true;
}

// -----------------------------------
    function RXLS_General_SQL(arg) {
// -----------------------------------

    var resultado = valor_xml(arg, 'resultado');
    if (resultado == 'OK') {
        var fichero = valor_xml(arg, 'salida');
        if (fichero != '') {
            if (objeto_man_cambiar_html) { objeto_man_cambiar_html.innerHTML = fichero; }
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
    return true;
}

// -------------------------------------------------------------------
    function WPDF_General_Procedimiento(procedimiento, celda_td) {
// -------------------------------------------------------------------

    var objeto_html = document.getElementById("htmlpdf_" + procedimiento);
    objeto_man_cambiar_html = document.getElementById(celda_td);

    if (!objeto_html) {
        alert("Imposible generar el fichero ahora.");
        return;
    }

    var HTML = objeto_html.value;

    if (objeto_man_cambiar_html) {
        if (!Mostrar_Pantalla_Esperando()) { return; }
        THERION.WSmantenimiento.Imprimir_html(HTML, RPDF_General_Procedimiento, OnError, OnTimeOut);
    }
    return true;
}

// ---------------------------------------------
    function RPDF_General_Procedimiento(arg) {
// ---------------------------------------------

    var resultado = valor_xml(arg, 'resultado');
    if (resultado == 'OK') {
        var fichero = valor_xml(arg, 'fichero');
        if (fichero != '') {
            if (objeto_man_cambiar_html) { objeto_man_cambiar_html.innerHTML = "'<a href='documentos/" + fichero + "' target='_blank'>PDF Disponible</a>"; }
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
    return true;
}

// ---------------------------------------------------------------------------------
   function WGEO_Cercanos(mapa, Procedimiento, Latitud, Longitud, Radio, Opciones) {
// ---------------------------------------------------------------------------------
       mapaGEO = mapa;
       if (!mapaGEO) {alert("Error en acceso al Mapa"); return;}
       if (!Mostrar_Pantalla_Esperando()) { return; }
       THERION.WSmantenimiento.GEO_Cercanos(Procedimiento, Latitud, Longitud, Radio, Opciones, RGEO_Cercanos, OnError, OnTimeOut);
       return true;
}

// -----------------------------------
   function RGEO_Cercanos(arg) {
// -----------------------------------

    var resultado = valor_xml(arg, 'resultado');

    if (resultado == 'OK') 
        {

        var Punto_Geo_1 = L.icon({ iconUrl: 'data:image/png;base64,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', shadowAnchor: [22, 94] });
        var Punto_Geo_2 = L.icon({ iconUrl: 'data:image/png;base64,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', shadowAnchor: [22, 94] });
        var Punto_Geo_3 = L.icon({ iconUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAD7UlEQVRIS6WVX4gVVRzHv78zd1fS1EJ9mblXy0BIltVtZu69MynuhrSSWWBs+GAv5YPUQ5JJRW4R0S7SQn8IpLC3yMgiBaV0KTfRmXtn7iAoskFk6N69G0jWBoW6e84vZnbvcjfvH8J5O+d3zu/z+/7+nCG0+MbyZk4IsQtM3QCvnDmuroAxoogOZfxS0MwFNTL+2r3+nvab2seAeJqASYCGFfhnAoiBNQy1WUAsUYoOLwTtXlYs/lXPV11AOZtdBsEjRFhDzG9hit/Xo+ifWge/dXYuml604CUC+gEeVWjryfj+9f9CbgMwQJW8NQxil0Vqa/pc8XSzFJTd7CMk5QlA/GgUwy0tAeOutQNMhwHaZfjBp9UL5Q3ZdSTVo3GGFNTJjB9dnLPls7uJ+CAT96W90le1kNsUjOcsTwlemvajDgI4Pjzu2IMAXq1eVABrxAO6V9of7yWqc/Yoa3Qt7QUbGwLiwqZutl0npv50IXgnce5aT4LpKAOfMFKvkZTEmjogQM8x0eNpLzgxG8QbCnhzoRL31hZ8noIJ17YVI2DQtrQfHI8vVhz7SybkdS+8jwCVRNzXp1XKl6+AxFnDC3ckgLz1BIiOkRKWXixGVRXzAGU36xCzBxK9hlc8FR8qu/YpYlpi+EG+Vno5bwdM/EfGL/XOBJLtZfB3LISTPlcs1AVUTHM5t4trAPYZfjiUABx7gJXaB6TMTLF4YSYdVpdSHGokBvVC2D+TyuwrinmQJK1IB8HvdQHx5lXHjjTGLaMQOvF6YmPXCjUtzitgsWDxWTLHrJ4RApMstfVVZ7EiIibDL9lNu6jiWHsY9J5SYl014orbtQrcNiQVtgCShcC3mBYvG2E4lqQnbz7EJCIQXjS88MOmgF9Mc2l7SisLTR4zvGhnsyGr2sZd+wsl1WO3ppF5IIommwJi45hrHYDkvZpAh+5HPzWDTORya6eFuigY7xqFcG5WGtYgkWyay2UKl0mI4bQfPtUMMOZkjwKyh6S2ura4TQGz7bmfGG8TYZPuhWfqQcoP53pIqR+I+XW9UBqod6bhcz3mOHdByVFB8k89s9qkI0dkrQPu7k6N3/j7PEjdPbVg8YP3j4zc+F+Ame6wtzPhawL26H74wbxBc+29xBgi0HbdD75plMaGCqoXKo51XCqxSSheO9eWbtcqyalLgnHaKITbmtWoNWCDuVJOaZc0whm9EGxNusyxTkKxo7WhQz8bXb0jwOzT8AJAH4HwLJgEwIeY8Xy6EB5sNSctFcQO4vd+Im99L4nNeC0gSrofbq7+L+5YQVLwJO/iggbB0FRnq9S0nIN6UVVceyczKcMPPm+Vmqr9X58hsigHrp+WAAAAAElFTkSuQmCC', shadowAnchor: [22, 94] });
        var Punto_Geo_4 = L.icon({ iconUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEk0lEQVRYR8WWX0xbVRzHv7339raUQgulHdDxzwEbMMYYcw5D1D0sJgayZMmmDz4YJXvQ6YPyRPawxAiJ0RfmTETTSDJBMLLBNhwyApmiboAyR9gfYDjAld5SWtre9t62t9ccbA2aGEppxkl+SZOec76f8/397vkdBeIYruPnXpYonJSCUqnodsNnX53y+/1d+2c/7dzsdorNLOCPf5YVSlP2KvflHFSkaxC2riJodYKft8E59Qgel2s8GJTqnlu+YI1135gBuBfOa9lcdkJdV7GLOZAPmRcgTS0h9MAK39wS3HNWrEzPw+vjZ1naX1mz3OuJBSJ2gKMffqJ5fs9b7NG9oHRqyHYvpGkbQg85+B9xcC9ycD1chNvtBkCfP+JsP50wgOnCt1XJT5mdqU8XJTEVOVAwNORVP6Q/nQgtrMBnc8BjXYbrsQ1erwc0TQu8PkP/0sw5cSOImByY2fPus2y2fiSlKAdKow4KlobMBxB2eCGuuOFzuOCxOeB2uiAEBCjVajAKRU3147aRhABMFrxZx6RqelPyMsGmaECDhhwMIuQRILq98LlWwXs88PBehGUZKq0GlKw4Vr1g6U0IwOjONw7RNH1TY9CB1SSBpgiABEkQIAoBCD4/eJ8XwVAQFM1ArdNCFnG4erH1ZkIAunCCzjKyK2pWlapklaBoGpCBsBRGIChCEEWEpBBotQoURUOVrHb/8cCRfhLfSAkBIJsMpb/yPmT5DEVRoCmK6CMcDkMKh0FoGK0GybkmyL4AJJf3g2fmvjizkTj5P6YiJBPHcErJGzw/S3K4CjKRJ6sVoBgGbIYOyfkmKHVaeCfmfqU0wcMHx1uDCQVYc8F4Qqtk1BdA0ccQJhAyKJaBakcalGlaiAuOXlHyvVpz3xLTJbQpB9afZsT8erVfx7wWSFed4n1+6EWqVSfIbYdmP/8pllOvnxNzCv678Ufvnc3Ql+bYb42NI1tKMp5t/Xh5s+JxO0AWWiwWY35BATc0fANJKqWpsbHR/sQBCguLuOuDQ1Cr9KbGxneePEBx8W7u+4HB7QMoKSnhvrs2sH0AZWVl3NW+/u0DKC/fx12+0rd9AJWV+7mLl65sD0CXxWLcXVXFfdvds30AxQequO6LPQgG/Kbm5mbyGTIAlACoSJ+JNA2EAJDOSDoXiX9G3DchcWBXRQXXe7kPv/z+W3Z/dzcPQBsBIAJEiIhGg0CQCETi734Wz+0VvQn3lpdzfX39aPvyq/y5ubvk1MlrHerfwgQg6gDpkAIAX2Te1gBKS8u4a/0DuHqlJ3d0dJQI6yJpIL+JWFQ8evKoOHFh6w6Qq3jg+iBmpu9ndnR0kPe4IRJEkLRkAhEN8kKOQm29BlpaWox5efncjR9+xPjYrazh4WE/gMxIDZCCdEYcWHs8/V+q466BpqYmY3ZWNkfacefX7SUOh4NUP/kKbAC4SN43LLG4ARoaGkw7zWbbxO076OjofFEU+VUAixEAkoKYRtwA9fX1O8zZ5qW79+6hp+dSrSiKtyPiMb0Ft1yEtbW1ZoPB0D4/v0BPTt45bbfbJ2O1fb01fwFJ+xA/yZV9XgAAAABJRU5ErkJggg==', shadowAnchor: [22, 94] });
        var Punto_Geo_5 = L.icon({ iconUrl: 'data:image/png;base64,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', shadowAnchor: [22, 94] });
        var Punto_Geo_6 = L.icon({ iconUrl: 'data:image/png;base64,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', shadowAnchor: [22, 94] });
        var Punto_Geo_7 = L.icon({ iconUrl: 'data:image/png;base64,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', shadowAnchor: [22, 94] });
        
        var gps = valor_xml(arg, 'salida');   // Lista de Posiciones GPS
        var parser;
        var xmlDoc;

        xmlDoc = $.parseXML(gps);

        // -----------------------------------------------------------
        // Poner en GEODatosDiv el HTML que me envia el procedimiento
        // -----------------------------------------------------------

        var htmlGEODatosDiv ='';

        $('datoshtml', xmlDoc).each(
            function () {
                var Dato = $(this).find("datohtml").text();
                htmlGEODatosDiv=htmlGEODatosDiv+Dato;
                     }
            )

        GEODatosDiv.innerHTML=htmlGEODatosDiv;

        // -------------------------------------------------------------------
        // Vaciar los puntos anteriores por si no se han borrado anteriormente
        // -------------------------------------------------------------------

        var contador_geopuntos = 0;
        for (var x = 0; x < 10000; x++) {if (geopuntos[x]) {mapaGEO.removeLayer(geopuntos[x]); geopuntos[x] = null;} }

        // -----------------------------------------------
        // Poner los Puntos Nuevos con 7 tipos diferentes
        // -----------------------------------------------
        
        $('gps', xmlDoc).each(
            function () {
                            Lon = $(this).find("lon").text();
                            Lat = $(this).find("lat").text();
                            Tex = $(this).find("dat").text();
                            Tip = $(this).find("tip").text();

                            Tex = replaceAll(Tex, '{#13#}', '<br/>');

                            Tex = replaceAll(Tex, '{#b#}', '<b>'); Tex = replaceAll(Tex, '{#/b#}', '</b>');
                            Tex = replaceAll(Tex, '{#i#}', '<i>'); Tex = replaceAll(Tex, '{#/i#}', '</i>');
                            Tex = replaceAll(Tex, '{#u#}', '<u>'); Tex = replaceAll(Tex, '{#/u#}', '</u>');

                            if (Tip == "1") { geopuntos[contador_geopuntos] = L.marker([Lat, Lon], { icon: Punto_Geo_1 }).addTo(mapaGEO).bindPopup(Tex); }
                            else if (Tip == "2") { geopuntos[contador_geopuntos] = L.marker([Lat, Lon], { icon: Punto_Geo_2 }).addTo(mapaGEO).bindPopup(Tex); }
                            else if (Tip == "3") { geopuntos[contador_geopuntos] = L.marker([Lat, Lon], { icon: Punto_Geo_3 }).addTo(mapaGEO).bindPopup(Tex); }
                            else if (Tip == "4") { geopuntos[contador_geopuntos] = L.marker([Lat, Lon], { icon: Punto_Geo_4 }).addTo(mapaGEO).bindPopup(Tex); }
                            else if (Tip == "5") { geopuntos[contador_geopuntos] = L.marker([Lat, Lon], { icon: Punto_Geo_5 }).addTo(mapaGEO).bindPopup(Tex); }
                            else if (Tip == "6") { geopuntos[contador_geopuntos] = L.marker([Lat, Lon], { icon: Punto_Geo_6 }).addTo(mapaGEO).bindPopup(Tex); }
                            else if (Tip == "7") { geopuntos[contador_geopuntos] = L.marker([Lat, Lon], { icon: Punto_Geo_7 }).addTo(mapaGEO).bindPopup(Tex); }
                            else { geopuntos[contador_geopuntos] = L.marker([Lat, Lon], { icon: Punto_Geo_1 }).addTo(mapaGEO).bindPopup(Tex); }

                            contador_geopuntos += 1;
                     }
            )
        }
        else 
          {
            var error = valor_xml(arg, 'error');
            alert(error);
          }

    if (!Quitar_Pantalla_Esperando()) { return false; }
    return true;
}

// --------------------------------------
   function tempAlert(msg, duration) {
// --------------------------------------

    var el = document.createElement("div");
    el.setAttribute("style", "position:absolute;top:40%;left:20%;background-color:white;");
    el.innerHTML = msg;
    setTimeout(function () {
        el.parentNode.removeChild(el);
    }, duration);

    document.body.appendChild(el);
    return true;
}