
function Cambia_Tab(capa, solapa) {

    for (var i = 1; i < 100; i++) {
        var tab = document.getElementById("tab_" + capa +'_' + i);
        var con = document.getElementById("Ctab_" + capa + '_' + i);
        if (tab) { tab.className = ''; }
        if (con) { con.style.display = 'none'; }
    }
    document.getElementById("tab_" + capa + '_' + solapa).className = 'active';
    document.getElementById("Ctab_" + capa + '_' + solapa).style.display = 'block';

    // Ocultar el boton de grabación cuando la solapa no es la 1

    var bt_grabar = document.getElementById("grabar_capa" + capa);
    if (bt_grabar) {
        if (solapa == 1) { bt_grabar.style.display = 'none' } else { bt_grabar.style.display = 'hidden' }
    }

    // Ocultar el boton de borrado cuando la solapa no es la 1

    var bt_borrar = document.getElementById("borrar_capa" + capa);
    if (bt_borrar) {
        if (solapa == 1) { bt_borrar.style.display = 'none' } else { bt_borrar.style.display = 'hidden' }
    }
}
