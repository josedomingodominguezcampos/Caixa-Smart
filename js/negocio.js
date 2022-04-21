

// -------------------------------------------------
    function WPDF_Facturas_Remesa(codigo, celda) {
// -------------------------------------------------
    objeto_cambiar_html = document.getElementById(celda);
    if (objeto_cambiar_html) {
        THERION.WSnegocio.PDF_Facturas_Remesa(codigo, RPDF_Facturas_Remesa, OnError, OnTimeOut);
    }
}

// -------------------------------------
    function RPDF_Facturas_Remesa(arg) {
// -------------------------------------
    if (objeto_man_cambiar_html) { objeto_cambiar_html.innerHTML = arg; }
}
