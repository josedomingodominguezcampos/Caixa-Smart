<%@ Page Title="" Language="vb" AutoEventWireup="false" MasterPageFile="~/VS.Master" CodeBehind="principal.aspx.vb" Inherits="THERION.principal" %>
<%@ MasterType virtualpath="~/VS.master" %> 
<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="ajaxtool" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
       
    <script type="text/javascript">

        var capa_parametros = '<%=capa_parametros.ClientID %>';
        var capa_mapas = '<%=capa_mapas.ClientID %>';
        var capa1 = '<%=capa1.ClientID %>';
        var capa2 = '<%=capa2.ClientID %>';
        var capa3 = '<%=capa3.ClientID %>';
        var capa4 = '<%=capa4.ClientID %>';
        var capa5 = '<%=capa5.ClientID %>';
        var capa6 = '<%=capa6.ClientID %>';
        var capa7 = '<%=capa7.ClientID %>';
        var capa8 = '<%=capa8.ClientID %>';
        var capa9 = '<%=capa9.ClientID %>';

        var dcapa_parametros = '<%=dcapa_parametros.ClientID %>';
        var dcapa_mapas = '<%=dcapa_mapas.ClientID %>';
        var dcapa1 = '<%=dcapa1.ClientID %>';
        var dcapa2 = '<%=dcapa2.ClientID %>';
        var dcapa3 = '<%=dcapa3.ClientID %>';
        var dcapa4 = '<%=dcapa4.ClientID %>';
        var dcapa5 = '<%=dcapa5.ClientID %>';
        var dcapa6 = '<%=dcapa6.ClientID %>';
        var dcapa7 = '<%=dcapa7.ClientID %>';
        var dcapa8 = '<%=dcapa8.ClientID %>';
        var dcapa9 = '<%=dcapa9.ClientID %>';

        var ocapa_parametros = '<%=ocapa_parametros.ClientID %>';
        var ocapa_mapas = '<%=ocapa_mapas.ClientID %>';
        var ocapa1 = '<%=ocapa1.ClientID %>';
        var ocapa2 = '<%=ocapa2.ClientID %>';
        var ocapa3 = '<%=ocapa3.ClientID %>';
        var ocapa4 = '<%=ocapa4.ClientID %>';
        var ocapa5 = '<%=ocapa5.ClientID %>';
        var ocapa6 = '<%=ocapa6.ClientID %>';
        var ocapa7 = '<%=ocapa7.ClientID %>';
        var ocapa8 = '<%=ocapa8.ClientID %>';
        var ocapa9 = '<%=ocapa9.ClientID %>';

        var bt_ok_parametros = '<%=bt_ok_parametros.ClientID %>';
        var bt_ko_parametros = '<%=bt_ko_parametros.ClientID %>';
        var bt_ed_parametros = '<%=bt_ed_parametros.ClientID %>';

        var bt_ok_mapas = '<%=bt_ok_mapas.ClientID %>';
        var bt_ko_mapas = '<%=bt_ko_mapas.ClientID %>';
        var bt_ed_mapas = '<%=bt_ed_mapas.ClientID %>';

        var bt_ok_1 = '<%=bt_ok_1.ClientID %>';
        var bt_ko_1 = '<%=bt_ko_1.ClientID %>';
        var bt_ed_1 = '<%=bt_ed_1.ClientID %>';

        var bt_ok_2 = '<%=bt_ok_2.ClientID %>';
        var bt_ko_2 = '<%=bt_ko_2.ClientID %>';
        var bt_ed_2 = '<%=bt_ed_2.ClientID %>';

        var bt_ok_3 = '<%=bt_ok_3.ClientID %>';
        var bt_ko_3 = '<%=bt_ko_3.ClientID %>';
        var bt_ed_3 = '<%=bt_ed_3.ClientID %>';

        var bt_ok_4 = '<%=bt_ok_4.ClientID %>';
        var bt_ko_4 = '<%=bt_ko_4.ClientID %>';
        var bt_ed_4 = '<%=bt_ed_4.ClientID %>';

        var bt_ok_5 = '<%=bt_ok_5.ClientID %>';
        var bt_ko_5 = '<%=bt_ko_5.ClientID %>';
        var bt_ed_5 = '<%=bt_ed_5.ClientID %>';

        var bt_ok_6 = '<%=bt_ok_6.ClientID %>';
        var bt_ko_6 = '<%=bt_ko_6.ClientID %>';
        var bt_ed_6 = '<%=bt_ed_6.ClientID %>';

        var bt_ok_7 = '<%=bt_ok_7.ClientID %>';
        var bt_ko_7 = '<%=bt_ko_7.ClientID %>';
        var bt_ed_7 = '<%=bt_ed_7.ClientID %>';

        var bt_ok_8 = '<%=bt_ok_8.ClientID %>';
        var bt_ko_8 = '<%=bt_ko_8.ClientID %>';
        var bt_ed_8 = '<%=bt_ed_8.ClientID %>';

        var bt_ok_9 = '<%=bt_ok_9.ClientID %>';
        var bt_ko_9 = '<%=bt_ko_9.ClientID %>';
        var bt_ed_9 = '<%=bt_ed_9.ClientID %>';

        var im_wait = '<%=im_wait.ClientID %>'
        var div_wait = '<%=DivWait.ClientID %>'

        var divsubefichero = '<%=divsubefichero.ClientID %>'
        var divverficheros = '<%=divverficheros.ClientID %>'

        // -------------------------------------

        $(document).ready(function () { AjaxFileUpload_change_text(); });

        function AjaxFileUpload_change_text() {
            Sys.Extended.UI.Resources.AjaxFileUpload_SelectFile = "Seleccionar Ficheros";
            Sys.Extended.UI.Resources.AjaxFileUpload_DropFiles = "Soltar Ficheros aquí";
            Sys.Extended.UI.Resources.AjaxFileUpload_Pending = "PENDIENTE";
            Sys.Extended.UI.Resources.AjaxFileUpload_Remove = "Borrar";
            Sys.Extended.UI.Resources.AjaxFileUpload_Upload = "SUBIR";
            Sys.Extended.UI.Resources.AjaxFileUpload_Uploaded = "SUBIDO";
            Sys.Extended.UI.Resources.AjaxFileUpload_UploadedPercentage = "Subido {0} %";
            Sys.Extended.UI.Resources.AjaxFileUpload_Uploading = "Subiendo";
            Sys.Extended.UI.Resources.AjaxFileUpload_FileInQueue = "{0} Fic(s) en cola .";
            Sys.Extended.UI.Resources.AjaxFileUpload_AllFilesUploaded = "Todo Subido";
            Sys.Extended.UI.Resources.AjaxFileUpload_FileList = "Lista de Subidos:";
            Sys.Extended.UI.Resources.AjaxFileUpload_SelectFileToUpload = "Selecciona Fic. a Subir";
            Sys.Extended.UI.Resources.AjaxFileUpload_Cancelling = "Cancelando...";
            Sys.Extended.UI.Resources.AjaxFileUpload_UploadError = "Error durante subida";
            Sys.Extended.UI.Resources.AjaxFileUpload_CancellingUpload = "Cancelando subida...";
            Sys.Extended.UI.Resources.AjaxFileUpload_UploadingInputFile = "Subiendo fichero: {0}.";
            Sys.Extended.UI.Resources.AjaxFileUpload_Cancel = "Cancelar";
            Sys.Extended.UI.Resources.AjaxFileUpload_Canceled = "CANCELADO";
            Sys.Extended.UI.Resources.AjaxFileUpload_UploadCanceled = "Fic. subido cancelado";
            Sys.Extended.UI.Resources.AjaxFileUpload_DefaultError = "ERROR Fic. subido";
            Sys.Extended.UI.Resources.AjaxFileUpload_UploadingHtml5File = "Subiendo fic: {0} de {1} bytes.";
            Sys.Extended.UI.Resources.AjaxFileUpload_error = "error";
        }

    </script>

    <link href="Styles/jquery.autocomplete.css" rel="stylesheet" type="text/css" />
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />

</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server" >

    <%-- ************* --%>
    <%-- ScriptManager --%>
    <%-- ************* --%>

    <asp:ScriptManager ID="ScriptManager1" runat="server" EnableScriptGlobalization="True" EnableScriptLocalization="True" ScriptMode="Release" EnablePageMethods="true">

        <Scripts><asp:ScriptReference Path="~/js/mantenimiento.js?ver=5.3"  ScriptMode="Auto" /></Scripts>
        <Scripts><asp:ScriptReference Path="~/js/JSnego.js?ver=5.3"         ScriptMode="Auto" /></Scripts>
        <Scripts><asp:ScriptReference Path="~/js/_general.js?ver=5.3"       ScriptMode="Auto" /></Scripts>
        <Scripts><asp:ScriptReference Path="~/js/dpicker.js?ver=5.3"        ScriptMode="Auto" /></Scripts>
        <Scripts><asp:ScriptReference Path="~/js/cascading.js?ver=5.3"      ScriptMode="Auto" /></Scripts>
        <Scripts><asp:ScriptReference Path="~/js/descargarfiles.js?ver=5.3" ScriptMode="Auto" /></Scripts>

        <Services><asp:ServiceReference Path="~/WS/WSmantenimiento.asmx" /></Services>
        <Services><asp:ServiceReference Path="~/WS/WSnego.asmx" /></Services>
        <Services><asp:ServiceReference Path="~/WS/WS_general.asmx" /></Services>

    </asp:ScriptManager>
	
    <%-- ****************** --%>
    <%-- Division de Espera --%>
    <%-- ****************** --%>

    <div id='DivWait' runat="server" style="z-index:30000;border:solid 0px #a00;display:none;position:absolute;width:100%;height:100%;left:0px;top:0px;background:rgba(0,0,0,0.4);overflow:hidden;">
        <table style="table-layout:fixed;width:100%;height:100%;border:solid 0px;">
            <tr>
               <td align="center" valign="middle">
                 <asp:Image ID="im_wait" runat="server" ImageUrl="img/big-roller.gif" style="width:8vw;height:auto;"/>
               </td>
            </tr>
        </table>
    </div>

    <%-- ****************** --%>
    <%-- Division Principal --%>
    <%-- ****************** --%>

    <div id='acceso' runat="server" class="acceso">

        <%-- ***************** --%>        
        <%-- Panel Principal   --%>        
        <%-- ***************** --%>
        
        <ajaxtool:DragPanelExtender ID="DPExt1" runat="server" TargetControlID="capa1" DragHandleID="dcapa1"></ajaxtool:DragPanelExtender>
        <ajaxtool:DragPanelExtender ID="DPExt2" runat="server" TargetControlID="capa2" DragHandleID="dcapa2"></ajaxtool:DragPanelExtender>
        <ajaxtool:DragPanelExtender ID="DPExt3" runat="server" TargetControlID="capa3" DragHandleID="dcapa3"></ajaxtool:DragPanelExtender>
        <ajaxtool:DragPanelExtender ID="DPExt4" runat="server" TargetControlID="capa4" DragHandleID="dcapa4"></ajaxtool:DragPanelExtender>
        <ajaxtool:DragPanelExtender ID="DPExt5" runat="server" TargetControlID="capa5" DragHandleID="dcapa5"></ajaxtool:DragPanelExtender>
        <ajaxtool:DragPanelExtender ID="DPExt6" runat="server" TargetControlID="capa6" DragHandleID="dcapa6"></ajaxtool:DragPanelExtender>
        <ajaxtool:DragPanelExtender ID="DPExt7" runat="server" TargetControlID="capa7" DragHandleID="dcapa7"></ajaxtool:DragPanelExtender>
        <ajaxtool:DragPanelExtender ID="DPExt8" runat="server" TargetControlID="capa8" DragHandleID="dcapa8"></ajaxtool:DragPanelExtender>
        <ajaxtool:DragPanelExtender ID="DPExt9" runat="server" TargetControlID="capa9" DragHandleID="dcapa9"></ajaxtool:DragPanelExtender>

        <ajaxtool:DragPanelExtender ID="DPExt_parametros" runat="server" TargetControlID="capa_parametros" DragHandleID="dcapa_parametros"></ajaxtool:DragPanelExtender>
        <ajaxtool:DragPanelExtender ID="DrExt_mapas" runat="server" TargetControlID="capa_mapas" DragHandleID="dcapa_mapas"></ajaxtool:DragPanelExtender>

        <asp:Button ID="bt_ed_1" Style="display:none" runat="server" Text="Ed" />
        <asp:Button ID="bt_ed_2" Style="display:none" runat="server" Text="Ed" />
        <asp:Button ID="bt_ed_3" Style="display:none" runat="server" Text="Ed" />
        <asp:Button ID="bt_ed_4" Style="display:none" runat="server" Text="Ed" />
        <asp:Button ID="bt_ed_5" Style="display:none" runat="server" Text="Ed" />
        <asp:Button ID="bt_ed_6" Style="display:none" runat="server" Text="Ed" />
        <asp:Button ID="bt_ed_7" Style="display:none" runat="server" Text="Ed" />
        <asp:Button ID="bt_ed_8" Style="display:none" runat="server" Text="Ed" />
        <asp:Button ID="bt_ed_9" Style="display:none" runat="server" Text="Ed" />
        <asp:Button ID="bt_ed_parametros" Style="display:none" runat="server" Text="Ed" />
        <asp:Button ID="bt_ed_mapas" Style="display:none" runat="server" Text="Ed" />

        <%-- ************************* --%>        
        <%-- Panel de Solapas          --%>        
        <%-- ************************* --%>        

        <div id="solapas" class="solapas" runat="server" style="border:solid 0px #a00;"></div>

        <%-- ************************* --%>        
        <%-- Panel de Registro Nivel 1 --%>        
        <%-- ************************* --%>

        <asp:Panel ID="capa1" runat="server" style="display:none">

            <ajaxtool:modalpopupextender id="MP1" 
                runat="server" 
                TargetControlID="bt_ed_1" 
                PopupControlID="capa1" 	
                CancelControlID="bt_ko_1" 
                DropShadow="false" 
                BackgroundCssClass="FondoAplicacion"
                RepositionMode="None"> 
                
                <%-- <Animations><OnShown><FadeIn Duration=".3" Fps="30" /></OnShown></Animations> --%>

            </ajaxtool:modalpopupextender>

            <table style="width:100%;margin:auto;" >
                <tr>
                    <td style="text-align:center;width:30px">
                        <img alt="Cerrar" 
						     src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAADXElEQVRYhe2XS2xUVRjHf9+5d6bYWKSTJkUcY0QWroqmtLWuJu1MJCTYpD524864ERNS2EhkQYOaAKLWha5Zo2maoNZSiQsexUJx4c4QY6GER7WApvO453Mx7869w207Xek/mWTynfOd3//c+53Hhf+6ZC1J9xPdHcZxt4kljniqJjJv1bu5+ezMvQ0zsJTo32GcfFqQIWBnQLc5FcY9653aMj37W1MMPBzs6xQ4rOjbQCSk35wIX1njjrZNnr+9ZgP/DPb2W/ga2BoSvFJ3VfW1tunLPwV1MEEND5I9b1r4cR1wgA4RmXww0PtGUAffJ3B/oOdlIzINtKwDXq2sqqb8nkSdgYeDfZ2g14DOJsFLuqXRXFfbt1fvVAfrXoHA4Q2AA2w1mcgHK4M1BpYS/TuK1e4raY/hJlKBBDeRQtpjge0qvLOc7NkeaMA49i0ClppsaWfTsS9oOTRK5NXX6+G799Jy6AibPvkSiXUEeYh6VtKBBgQdCsp0XtiFeeZZECG6bwR3T6Wru2eIlpH3QQwm/jRO14tBw6BCDaNchIXt1blTn1KRu3tvGYQq2bHjaDZTG/v8GLmJ042GUc91Op74/sIigFuKmoiJYxvlQf67CYAyMPreQVAFkbBwAHHyNg4sQtUrEE+ffFRmyUTmxIcFMKwWXpTdVvpXNqAiGjK7XiKFX/j+ZValCK0shMmt1EFh5qUnEd13wHd1+Mu5WWfAGubDwysFlzlxFNQWV0coE+o53KgzULxMzAXCE6kquCVz8iNyE6cLNXHy4yoTIw03K4QrpRVQYwBAhfGgPG/uZ+zv14szP07+TKVr/sx4sTAtdv4PvF+uBvNVaxg1lfPXQPdzrji/AlHf5PYYzs5u8ud+8B3cTaTwrs2ify76tgNZx+H5xyZnrvsaAPg72TumyruBU1iPRD99fOry/upQ3WlojTsK3NoA/ILN26Mrg3UG2ibP3zYwDGSaCF82IsObz83efaQBgNazMxdUSTfJxLIi6dapSxf9GhtfSpN9L1nVb1j7vXDBiAwHwaHBpRSgderSRY3mukQZA7KrAGdBP7Oe19UIDqv4MFlO9mz3rKSL53nAga9XBDNuHD1VvdSaYqBaS6/0xxyPp8Tm4gBqIvOew43qHe5/hdW/dfxGq1OsGFAAAAAASUVORK5CYII=" 
							 style="cursor:pointer;vertical-align:middle;width:1vw;height:auto" 
							 onclick="WCancela_Registro();" />
					</td>
                    <td style="width:auto">
                        <asp:Panel id="dcapa1" runat="server" CssClass="dragPanel" Style="width:100%;margin:auto;cursor:-webkit-grab;cursor:grab;background:black;color:white;" >
                            <table class="tituventana">
                                <tr>
                                    <td style="width:auto;text-align:left;vertical-align:middle;margin:auto;background:black;color:white">
                                        <a lang="TRADUCIR" id="titulo_ventana1"></a>
                                    </td>
                                </tr>
                            </table>
                        </asp:Panel>
                    </td>
                    <td style="text-align:center;width:30px">
                        <img alt="Cerrar" 
						     src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAADXElEQVRYhe2XS2xUVRjHf9+5d6bYWKSTJkUcY0QWroqmtLWuJu1MJCTYpD524864ERNS2EhkQYOaAKLWha5Zo2maoNZSiQsexUJx4c4QY6GER7WApvO453Mx7869w207Xek/mWTynfOd3//c+53Hhf+6ZC1J9xPdHcZxt4kljniqJjJv1bu5+ezMvQ0zsJTo32GcfFqQIWBnQLc5FcY9653aMj37W1MMPBzs6xQ4rOjbQCSk35wIX1njjrZNnr+9ZgP/DPb2W/ga2BoSvFJ3VfW1tunLPwV1MEEND5I9b1r4cR1wgA4RmXww0PtGUAffJ3B/oOdlIzINtKwDXq2sqqb8nkSdgYeDfZ2g14DOJsFLuqXRXFfbt1fvVAfrXoHA4Q2AA2w1mcgHK4M1BpYS/TuK1e4raY/hJlKBBDeRQtpjge0qvLOc7NkeaMA49i0ClppsaWfTsS9oOTRK5NXX6+G799Jy6AibPvkSiXUEeYh6VtKBBgQdCsp0XtiFeeZZECG6bwR3T6Wru2eIlpH3QQwm/jRO14tBw6BCDaNchIXt1blTn1KRu3tvGYQq2bHjaDZTG/v8GLmJ042GUc91Op74/sIigFuKmoiJYxvlQf67CYAyMPreQVAFkbBwAHHyNg4sQtUrEE+ffFRmyUTmxIcFMKwWXpTdVvpXNqAiGjK7XiKFX/j+ZValCK0shMmt1EFh5qUnEd13wHd1+Mu5WWfAGubDwysFlzlxFNQWV0coE+o53KgzULxMzAXCE6kquCVz8iNyE6cLNXHy4yoTIw03K4QrpRVQYwBAhfGgPG/uZ+zv14szP07+TKVr/sx4sTAtdv4PvF+uBvNVaxg1lfPXQPdzrji/AlHf5PYYzs5u8ud+8B3cTaTwrs2ify76tgNZx+H5xyZnrvsaAPg72TumyruBU1iPRD99fOry/upQ3WlojTsK3NoA/ILN26Mrg3UG2ibP3zYwDGSaCF82IsObz83efaQBgNazMxdUSTfJxLIi6dapSxf9GhtfSpN9L1nVb1j7vXDBiAwHwaHBpRSgderSRY3mukQZA7KrAGdBP7Oe19UIDqv4MFlO9mz3rKSL53nAga9XBDNuHD1VvdSaYqBaS6/0xxyPp8Tm4gBqIvOew43qHe5/hdW/dfxGq1OsGFAAAAAASUVORK5CYII=" 
							 style="cursor:pointer;vertical-align:middle;width:1vw;height:auto" 
							 onclick="WCancela_Registro();" />
					</td>
                </tr>
            </table>

            <div id="con_1_0" style="height:95%;width:100%;border:solid 0px #ddd;"></div>
            
            <div style="text-align: center;">
                <asp:Button ID="bt_ok_1" runat="server" Text="OK-Virtual" Style="display:none;" />
                <asp:Button ID="bt_ko_1" runat="server" Text="KO-Virtual" Style="display:none;" />
            </div>
            <asp:Label ID="lb_1" runat="server" Text=""></asp:Label>
        </asp:Panel>

        <%-- ************************* --%>
        <%-- Panel de Registro Nivel 2 --%>        
        <%-- ************************* --%>

        <asp:Panel ID="capa2" runat="server" style="display:none;">
            <ajaxtool:modalpopupextender id="MP2" 
                runat="server" 
                TargetControlID="bt_ed_2" 
                PopupControlID="capa2" 
                CancelControlID="bt_ko_2"  
                DropShadow="false" 
                BackgroundCssClass="FondoAplicacion" 
                RepositionMode="None"> 
                
                <%-- <Animations><OnShown><FadeIn Duration=".3" Fps="30" /></OnShown></Animations> --%>

            </ajaxtool:modalpopupextender>
                
            <table style="width:100%;margin:auto;" >
                <tr>
                    <td style="text-align:center;width:30px">
                        <img alt="Cerrar" 
						     src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAADXElEQVRYhe2XS2xUVRjHf9+5d6bYWKSTJkUcY0QWroqmtLWuJu1MJCTYpD524864ERNS2EhkQYOaAKLWha5Zo2maoNZSiQsexUJx4c4QY6GER7WApvO453Mx7869w207Xek/mWTynfOd3//c+53Hhf+6ZC1J9xPdHcZxt4kljniqJjJv1bu5+ezMvQ0zsJTo32GcfFqQIWBnQLc5FcY9653aMj37W1MMPBzs6xQ4rOjbQCSk35wIX1njjrZNnr+9ZgP/DPb2W/ga2BoSvFJ3VfW1tunLPwV1MEEND5I9b1r4cR1wgA4RmXww0PtGUAffJ3B/oOdlIzINtKwDXq2sqqb8nkSdgYeDfZ2g14DOJsFLuqXRXFfbt1fvVAfrXoHA4Q2AA2w1mcgHK4M1BpYS/TuK1e4raY/hJlKBBDeRQtpjge0qvLOc7NkeaMA49i0ClppsaWfTsS9oOTRK5NXX6+G799Jy6AibPvkSiXUEeYh6VtKBBgQdCsp0XtiFeeZZECG6bwR3T6Wru2eIlpH3QQwm/jRO14tBw6BCDaNchIXt1blTn1KRu3tvGYQq2bHjaDZTG/v8GLmJ042GUc91Op74/sIigFuKmoiJYxvlQf67CYAyMPreQVAFkbBwAHHyNg4sQtUrEE+ffFRmyUTmxIcFMKwWXpTdVvpXNqAiGjK7XiKFX/j+ZValCK0shMmt1EFh5qUnEd13wHd1+Mu5WWfAGubDwysFlzlxFNQWV0coE+o53KgzULxMzAXCE6kquCVz8iNyE6cLNXHy4yoTIw03K4QrpRVQYwBAhfGgPG/uZ+zv14szP07+TKVr/sx4sTAtdv4PvF+uBvNVaxg1lfPXQPdzrji/AlHf5PYYzs5u8ud+8B3cTaTwrs2ify76tgNZx+H5xyZnrvsaAPg72TumyruBU1iPRD99fOry/upQ3WlojTsK3NoA/ILN26Mrg3UG2ibP3zYwDGSaCF82IsObz83efaQBgNazMxdUSTfJxLIi6dapSxf9GhtfSpN9L1nVb1j7vXDBiAwHwaHBpRSgderSRY3mukQZA7KrAGdBP7Oe19UIDqv4MFlO9mz3rKSL53nAga9XBDNuHD1VvdSaYqBaS6/0xxyPp8Tm4gBqIvOew43qHe5/hdW/dfxGq1OsGFAAAAAASUVORK5CYII=" 
							 style="cursor:pointer;vertical-align:middle;width:1vw;height:auto" 
							 onclick="WCancela_Registro();" />
					</td>
                    <td style="width:auto">
                        <asp:Panel id="dcapa2" runat="server" CssClass="dragPanel" Style="width:100%;margin:auto;cursor: -webkit-grab; cursor: grab;background:black;color:white;" >
                            <table class="tituventana">
                                <tr>
                                    <td style="width:auto;text-align:left;vertical-align:middle;margin:auto;">
                                        <a lang="TRADUCIR" id="titulo_ventana2"></a>
                                    </td>
                                </tr>
                            </table>
                        </asp:Panel>
                    </td>
                    <td style="text-align:center;width:30px">
                        <img alt="Cerrar" 
						     src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAADXElEQVRYhe2XS2xUVRjHf9+5d6bYWKSTJkUcY0QWroqmtLWuJu1MJCTYpD524864ERNS2EhkQYOaAKLWha5Zo2maoNZSiQsexUJx4c4QY6GER7WApvO453Mx7869w207Xek/mWTynfOd3//c+53Hhf+6ZC1J9xPdHcZxt4kljniqJjJv1bu5+ezMvQ0zsJTo32GcfFqQIWBnQLc5FcY9653aMj37W1MMPBzs6xQ4rOjbQCSk35wIX1njjrZNnr+9ZgP/DPb2W/ga2BoSvFJ3VfW1tunLPwV1MEEND5I9b1r4cR1wgA4RmXww0PtGUAffJ3B/oOdlIzINtKwDXq2sqqb8nkSdgYeDfZ2g14DOJsFLuqXRXFfbt1fvVAfrXoHA4Q2AA2w1mcgHK4M1BpYS/TuK1e4raY/hJlKBBDeRQtpjge0qvLOc7NkeaMA49i0ClppsaWfTsS9oOTRK5NXX6+G799Jy6AibPvkSiXUEeYh6VtKBBgQdCsp0XtiFeeZZECG6bwR3T6Wru2eIlpH3QQwm/jRO14tBw6BCDaNchIXt1blTn1KRu3tvGYQq2bHjaDZTG/v8GLmJ042GUc91Op74/sIigFuKmoiJYxvlQf67CYAyMPreQVAFkbBwAHHyNg4sQtUrEE+ffFRmyUTmxIcFMKwWXpTdVvpXNqAiGjK7XiKFX/j+ZValCK0shMmt1EFh5qUnEd13wHd1+Mu5WWfAGubDwysFlzlxFNQWV0coE+o53KgzULxMzAXCE6kquCVz8iNyE6cLNXHy4yoTIw03K4QrpRVQYwBAhfGgPG/uZ+zv14szP07+TKVr/sx4sTAtdv4PvF+uBvNVaxg1lfPXQPdzrji/AlHf5PYYzs5u8ud+8B3cTaTwrs2ify76tgNZx+H5xyZnrvsaAPg72TumyruBU1iPRD99fOry/upQ3WlojTsK3NoA/ILN26Mrg3UG2ibP3zYwDGSaCF82IsObz83efaQBgNazMxdUSTfJxLIi6dapSxf9GhtfSpN9L1nVb1j7vXDBiAwHwaHBpRSgderSRY3mukQZA7KrAGdBP7Oe19UIDqv4MFlO9mz3rKSL53nAga9XBDNuHD1VvdSaYqBaS6/0xxyPp8Tm4gBqIvOew43qHe5/hdW/dfxGq1OsGFAAAAAASUVORK5CYII=" 
							 style="cursor:pointer;vertical-align:middle;width:1vw;height:auto" 
							 onclick="WCancela_Registro();" />
					</td>
                </tr>
            </table>

            <div id="con_2_0" style="height:95%;border:solid 0px #ddd;overflow:auto;"></div>
            <div style="text-align: center;">
                <asp:Button ID="bt_ok_2" runat="server" Text="OK-Virtual" Style="display:none;" />
                <asp:Button ID="bt_ko_2" runat="server" Text="KO-Virtual" Style="display:none;" />
            </div>
            <asp:Label ID="lb_2" runat="server" Text=""></asp:Label>

        </asp:Panel>

        <%-- ************************* --%>
        <%-- Panel de Registro Nivel 3 --%>        
        <%-- ************************* --%>

        <asp:Panel ID="capa3" runat="server" style="display:none;">
            <ajaxtool:modalpopupextender id="MP3" 
                runat="server" 
                TargetControlID="bt_ed_3" 
                PopupControlID="capa3" 
                CancelControlID="bt_ko_3"  
                DropShadow="false" 
                BackgroundCssClass="FondoAplicacion" 
                RepositionMode="None"> 
                
                <%-- <Animations><OnShown><FadeIn Duration=".3" Fps="30" /></OnShown></Animations> --%>

            </ajaxtool:modalpopupextender>

            <table style="width:100%;margin:auto;" >
                <tr>
                    <td style="text-align:center;width:30px">
                        <img alt="Cerrar" 
						     src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAADXElEQVRYhe2XS2xUVRjHf9+5d6bYWKSTJkUcY0QWroqmtLWuJu1MJCTYpD524864ERNS2EhkQYOaAKLWha5Zo2maoNZSiQsexUJx4c4QY6GER7WApvO453Mx7869w207Xek/mWTynfOd3//c+53Hhf+6ZC1J9xPdHcZxt4kljniqJjJv1bu5+ezMvQ0zsJTo32GcfFqQIWBnQLc5FcY9653aMj37W1MMPBzs6xQ4rOjbQCSk35wIX1njjrZNnr+9ZgP/DPb2W/ga2BoSvFJ3VfW1tunLPwV1MEEND5I9b1r4cR1wgA4RmXww0PtGUAffJ3B/oOdlIzINtKwDXq2sqqb8nkSdgYeDfZ2g14DOJsFLuqXRXFfbt1fvVAfrXoHA4Q2AA2w1mcgHK4M1BpYS/TuK1e4raY/hJlKBBDeRQtpjge0qvLOc7NkeaMA49i0ClppsaWfTsS9oOTRK5NXX6+G799Jy6AibPvkSiXUEeYh6VtKBBgQdCsp0XtiFeeZZECG6bwR3T6Wru2eIlpH3QQwm/jRO14tBw6BCDaNchIXt1blTn1KRu3tvGYQq2bHjaDZTG/v8GLmJ042GUc91Op74/sIigFuKmoiJYxvlQf67CYAyMPreQVAFkbBwAHHyNg4sQtUrEE+ffFRmyUTmxIcFMKwWXpTdVvpXNqAiGjK7XiKFX/j+ZValCK0shMmt1EFh5qUnEd13wHd1+Mu5WWfAGubDwysFlzlxFNQWV0coE+o53KgzULxMzAXCE6kquCVz8iNyE6cLNXHy4yoTIw03K4QrpRVQYwBAhfGgPG/uZ+zv14szP07+TKVr/sx4sTAtdv4PvF+uBvNVaxg1lfPXQPdzrji/AlHf5PYYzs5u8ud+8B3cTaTwrs2ify76tgNZx+H5xyZnrvsaAPg72TumyruBU1iPRD99fOry/upQ3WlojTsK3NoA/ILN26Mrg3UG2ibP3zYwDGSaCF82IsObz83efaQBgNazMxdUSTfJxLIi6dapSxf9GhtfSpN9L1nVb1j7vXDBiAwHwaHBpRSgderSRY3mukQZA7KrAGdBP7Oe19UIDqv4MFlO9mz3rKSL53nAga9XBDNuHD1VvdSaYqBaS6/0xxyPp8Tm4gBqIvOew43qHe5/hdW/dfxGq1OsGFAAAAAASUVORK5CYII=" 
							 style="cursor:pointer;vertical-align:middle;width:1vw;height:auto" 
							 onclick="WCancela_Registro();" />
					</td>
                    <td style="width:auto">
                        <asp:Panel id="dcapa3" runat="server" CssClass="dragPanel" Style="width:100%;margin:auto;cursor: -webkit-grab; cursor: grab;background:black;color:white;" >
                            <table class="tituventana">
                                <tr>
                                    <td style="width:auto;text-align:left;vertical-align:middle;margin:auto;">
                                        <a lang="TRADUCIR" id="titulo_ventana3"></a>
                                    </td>
                                </tr>
                            </table>
                        </asp:Panel>
                    </td>
                    <td style="text-align:center;width:30px">
                        <img alt="Cerrar" 
						     src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAADXElEQVRYhe2XS2xUVRjHf9+5d6bYWKSTJkUcY0QWroqmtLWuJu1MJCTYpD524864ERNS2EhkQYOaAKLWha5Zo2maoNZSiQsexUJx4c4QY6GER7WApvO453Mx7869w207Xek/mWTynfOd3//c+53Hhf+6ZC1J9xPdHcZxt4kljniqJjJv1bu5+ezMvQ0zsJTo32GcfFqQIWBnQLc5FcY9653aMj37W1MMPBzs6xQ4rOjbQCSk35wIX1njjrZNnr+9ZgP/DPb2W/ga2BoSvFJ3VfW1tunLPwV1MEEND5I9b1r4cR1wgA4RmXww0PtGUAffJ3B/oOdlIzINtKwDXq2sqqb8nkSdgYeDfZ2g14DOJsFLuqXRXFfbt1fvVAfrXoHA4Q2AA2w1mcgHK4M1BpYS/TuK1e4raY/hJlKBBDeRQtpjge0qvLOc7NkeaMA49i0ClppsaWfTsS9oOTRK5NXX6+G799Jy6AibPvkSiXUEeYh6VtKBBgQdCsp0XtiFeeZZECG6bwR3T6Wru2eIlpH3QQwm/jRO14tBw6BCDaNchIXt1blTn1KRu3tvGYQq2bHjaDZTG/v8GLmJ042GUc91Op74/sIigFuKmoiJYxvlQf67CYAyMPreQVAFkbBwAHHyNg4sQtUrEE+ffFRmyUTmxIcFMKwWXpTdVvpXNqAiGjK7XiKFX/j+ZValCK0shMmt1EFh5qUnEd13wHd1+Mu5WWfAGubDwysFlzlxFNQWV0coE+o53KgzULxMzAXCE6kquCVz8iNyE6cLNXHy4yoTIw03K4QrpRVQYwBAhfGgPG/uZ+zv14szP07+TKVr/sx4sTAtdv4PvF+uBvNVaxg1lfPXQPdzrji/AlHf5PYYzs5u8ud+8B3cTaTwrs2ify76tgNZx+H5xyZnrvsaAPg72TumyruBU1iPRD99fOry/upQ3WlojTsK3NoA/ILN26Mrg3UG2ibP3zYwDGSaCF82IsObz83efaQBgNazMxdUSTfJxLIi6dapSxf9GhtfSpN9L1nVb1j7vXDBiAwHwaHBpRSgderSRY3mukQZA7KrAGdBP7Oe19UIDqv4MFlO9mz3rKSL53nAga9XBDNuHD1VvdSaYqBaS6/0xxyPp8Tm4gBqIvOew43qHe5/hdW/dfxGq1OsGFAAAAAASUVORK5CYII=" 
							 style="cursor:pointer;vertical-align:middle;width:1vw;height:auto" 
							 onclick="WCancela_Registro();" />
					</td>
                </tr>
            </table>


            <div id="con_3_0" style="height:95%;border:solid 0px #ddd;overflow:auto;"></div>
            <div style="text-align: center;">
                <asp:Button ID="bt_ok_3" runat="server" Text="OK-Virtual" Style="display:none;" />
                <asp:Button ID="bt_ko_3" runat="server" Text="KO-Virtual" Style="display:none;" />
            </div>
            <asp:Label ID="lb_3" runat="server" Text=""></asp:Label>

        </asp:Panel>

        <%-- ************************* --%>
        <%-- Panel de Registro Nivel 4 --%>        
        <%-- ************************* --%>

        <asp:Panel ID="capa4" runat="server" style="display:none;">
            <ajaxtool:modalpopupextender id="MP4" 
                runat="server" 
                TargetControlID="bt_ed_4" 
                PopupControlID="capa4" 
                CancelControlID="bt_ko_4"  
                DropShadow="false" 
                BackgroundCssClass="FondoAplicacion" 
                RepositionMode="None"> 
                
                <%-- <Animations><OnShown><FadeIn Duration=".3" Fps="30" /></OnShown></Animations> --%>
            
            </ajaxtool:modalpopupextender>

            <table style="width:100%;margin:auto;" >
                <tr>
                    <td style="text-align:center;width:30px">
                        <img alt="Cerrar" 
						     src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAADXElEQVRYhe2XS2xUVRjHf9+5d6bYWKSTJkUcY0QWroqmtLWuJu1MJCTYpD524864ERNS2EhkQYOaAKLWha5Zo2maoNZSiQsexUJx4c4QY6GER7WApvO453Mx7869w207Xek/mWTynfOd3//c+53Hhf+6ZC1J9xPdHcZxt4kljniqJjJv1bu5+ezMvQ0zsJTo32GcfFqQIWBnQLc5FcY9653aMj37W1MMPBzs6xQ4rOjbQCSk35wIX1njjrZNnr+9ZgP/DPb2W/ga2BoSvFJ3VfW1tunLPwV1MEEND5I9b1r4cR1wgA4RmXww0PtGUAffJ3B/oOdlIzINtKwDXq2sqqb8nkSdgYeDfZ2g14DOJsFLuqXRXFfbt1fvVAfrXoHA4Q2AA2w1mcgHK4M1BpYS/TuK1e4raY/hJlKBBDeRQtpjge0qvLOc7NkeaMA49i0ClppsaWfTsS9oOTRK5NXX6+G799Jy6AibPvkSiXUEeYh6VtKBBgQdCsp0XtiFeeZZECG6bwR3T6Wru2eIlpH3QQwm/jRO14tBw6BCDaNchIXt1blTn1KRu3tvGYQq2bHjaDZTG/v8GLmJ042GUc91Op74/sIigFuKmoiJYxvlQf67CYAyMPreQVAFkbBwAHHyNg4sQtUrEE+ffFRmyUTmxIcFMKwWXpTdVvpXNqAiGjK7XiKFX/j+ZValCK0shMmt1EFh5qUnEd13wHd1+Mu5WWfAGubDwysFlzlxFNQWV0coE+o53KgzULxMzAXCE6kquCVz8iNyE6cLNXHy4yoTIw03K4QrpRVQYwBAhfGgPG/uZ+zv14szP07+TKVr/sx4sTAtdv4PvF+uBvNVaxg1lfPXQPdzrji/AlHf5PYYzs5u8ud+8B3cTaTwrs2ify76tgNZx+H5xyZnrvsaAPg72TumyruBU1iPRD99fOry/upQ3WlojTsK3NoA/ILN26Mrg3UG2ibP3zYwDGSaCF82IsObz83efaQBgNazMxdUSTfJxLIi6dapSxf9GhtfSpN9L1nVb1j7vXDBiAwHwaHBpRSgderSRY3mukQZA7KrAGdBP7Oe19UIDqv4MFlO9mz3rKSL53nAga9XBDNuHD1VvdSaYqBaS6/0xxyPp8Tm4gBqIvOew43qHe5/hdW/dfxGq1OsGFAAAAAASUVORK5CYII=" 
							 style="cursor:pointer;vertical-align:middle;width:1vw;height:auto" 
							 onclick="WCancela_Registro();" />
					</td>
                    <td style="width:auto">
                        <asp:Panel id="dcapa4" runat="server" CssClass="dragPanel" Style="width:100%;margin:auto;cursor: -webkit-grab; cursor: grab;background:black;color:white;" >
                            <table class="tituventana">
                                <tr>
                                    <td style="width:auto;text-align:left;vertical-align:middle;margin:auto;">
                                        <a lang="TRADUCIR" id="titulo_ventana4"></a>
                                    </td>
                                </tr>
                            </table>
                        </asp:Panel>
                    </td>
                    <td style="text-align:center;width:30px">
                        <img alt="Cerrar" 
						     src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAADXElEQVRYhe2XS2xUVRjHf9+5d6bYWKSTJkUcY0QWroqmtLWuJu1MJCTYpD524864ERNS2EhkQYOaAKLWha5Zo2maoNZSiQsexUJx4c4QY6GER7WApvO453Mx7869w207Xek/mWTynfOd3//c+53Hhf+6ZC1J9xPdHcZxt4kljniqJjJv1bu5+ezMvQ0zsJTo32GcfFqQIWBnQLc5FcY9653aMj37W1MMPBzs6xQ4rOjbQCSk35wIX1njjrZNnr+9ZgP/DPb2W/ga2BoSvFJ3VfW1tunLPwV1MEEND5I9b1r4cR1wgA4RmXww0PtGUAffJ3B/oOdlIzINtKwDXq2sqqb8nkSdgYeDfZ2g14DOJsFLuqXRXFfbt1fvVAfrXoHA4Q2AA2w1mcgHK4M1BpYS/TuK1e4raY/hJlKBBDeRQtpjge0qvLOc7NkeaMA49i0ClppsaWfTsS9oOTRK5NXX6+G799Jy6AibPvkSiXUEeYh6VtKBBgQdCsp0XtiFeeZZECG6bwR3T6Wru2eIlpH3QQwm/jRO14tBw6BCDaNchIXt1blTn1KRu3tvGYQq2bHjaDZTG/v8GLmJ042GUc91Op74/sIigFuKmoiJYxvlQf67CYAyMPreQVAFkbBwAHHyNg4sQtUrEE+ffFRmyUTmxIcFMKwWXpTdVvpXNqAiGjK7XiKFX/j+ZValCK0shMmt1EFh5qUnEd13wHd1+Mu5WWfAGubDwysFlzlxFNQWV0coE+o53KgzULxMzAXCE6kquCVz8iNyE6cLNXHy4yoTIw03K4QrpRVQYwBAhfGgPG/uZ+zv14szP07+TKVr/sx4sTAtdv4PvF+uBvNVaxg1lfPXQPdzrji/AlHf5PYYzs5u8ud+8B3cTaTwrs2ify76tgNZx+H5xyZnrvsaAPg72TumyruBU1iPRD99fOry/upQ3WlojTsK3NoA/ILN26Mrg3UG2ibP3zYwDGSaCF82IsObz83efaQBgNazMxdUSTfJxLIi6dapSxf9GhtfSpN9L1nVb1j7vXDBiAwHwaHBpRSgderSRY3mukQZA7KrAGdBP7Oe19UIDqv4MFlO9mz3rKSL53nAga9XBDNuHD1VvdSaYqBaS6/0xxyPp8Tm4gBqIvOew43qHe5/hdW/dfxGq1OsGFAAAAAASUVORK5CYII=" 
							 style="cursor:pointer;vertical-align:middle;width:1vw;height:auto" 
							 onclick="WCancela_Registro();" />
					</td>
                </tr>
            </table>

            <div id="con_4_0" style="height:95%;border:solid 0px #ddd;overflow:auto;"></div>
            <div style="text-align: center;">
                <asp:Button ID="bt_ok_4" runat="server" Text="OK-Virtual" Style="display:none;" />
                <asp:Button ID="bt_ko_4" runat="server" Text="KO-Virtual" Style="display:none;" />
            </div>
            <asp:Label ID="lb_4" runat="server" Text=""></asp:Label>

        </asp:Panel>

        <%-- ************************* --%>
        <%-- Panel de Registro Nivel 5 --%>        
        <%-- ************************* --%>

        <asp:Panel ID="capa5" runat="server" style="display:none;">
            <ajaxtool:modalpopupextender id="MP5" 
                runat="server" 
                TargetControlID="bt_ed_5" 
                PopupControlID="capa5" 
                CancelControlID="bt_ko_5"  
                DropShadow="false" 
                BackgroundCssClass="FondoAplicacion" 
                RepositionMode="None">
                
            <%-- <Animations><OnShown><FadeIn Duration=".3" Fps="30" /></OnShown></Animations> --%>
            
            </ajaxtool:modalpopupextender>

            <table style="width:100%;margin:auto;" >
                <tr>
                    <td style="text-align:center;width:30px">
                        <img alt="Cerrar" 
						     src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAADXElEQVRYhe2XS2xUVRjHf9+5d6bYWKSTJkUcY0QWroqmtLWuJu1MJCTYpD524864ERNS2EhkQYOaAKLWha5Zo2maoNZSiQsexUJx4c4QY6GER7WApvO453Mx7869w207Xek/mWTynfOd3//c+53Hhf+6ZC1J9xPdHcZxt4kljniqJjJv1bu5+ezMvQ0zsJTo32GcfFqQIWBnQLc5FcY9653aMj37W1MMPBzs6xQ4rOjbQCSk35wIX1njjrZNnr+9ZgP/DPb2W/ga2BoSvFJ3VfW1tunLPwV1MEEND5I9b1r4cR1wgA4RmXww0PtGUAffJ3B/oOdlIzINtKwDXq2sqqb8nkSdgYeDfZ2g14DOJsFLuqXRXFfbt1fvVAfrXoHA4Q2AA2w1mcgHK4M1BpYS/TuK1e4raY/hJlKBBDeRQtpjge0qvLOc7NkeaMA49i0ClppsaWfTsS9oOTRK5NXX6+G799Jy6AibPvkSiXUEeYh6VtKBBgQdCsp0XtiFeeZZECG6bwR3T6Wru2eIlpH3QQwm/jRO14tBw6BCDaNchIXt1blTn1KRu3tvGYQq2bHjaDZTG/v8GLmJ042GUc91Op74/sIigFuKmoiJYxvlQf67CYAyMPreQVAFkbBwAHHyNg4sQtUrEE+ffFRmyUTmxIcFMKwWXpTdVvpXNqAiGjK7XiKFX/j+ZValCK0shMmt1EFh5qUnEd13wHd1+Mu5WWfAGubDwysFlzlxFNQWV0coE+o53KgzULxMzAXCE6kquCVz8iNyE6cLNXHy4yoTIw03K4QrpRVQYwBAhfGgPG/uZ+zv14szP07+TKVr/sx4sTAtdv4PvF+uBvNVaxg1lfPXQPdzrji/AlHf5PYYzs5u8ud+8B3cTaTwrs2ify76tgNZx+H5xyZnrvsaAPg72TumyruBU1iPRD99fOry/upQ3WlojTsK3NoA/ILN26Mrg3UG2ibP3zYwDGSaCF82IsObz83efaQBgNazMxdUSTfJxLIi6dapSxf9GhtfSpN9L1nVb1j7vXDBiAwHwaHBpRSgderSRY3mukQZA7KrAGdBP7Oe19UIDqv4MFlO9mz3rKSL53nAga9XBDNuHD1VvdSaYqBaS6/0xxyPp8Tm4gBqIvOew43qHe5/hdW/dfxGq1OsGFAAAAAASUVORK5CYII=" 
							 style="cursor:pointer;vertical-align:middle;width:1vw;height:auto" 
							 onclick="WCancela_Registro();" />
					</td>
                    <td style="width:auto">
                        <asp:Panel id="dcapa5" runat="server" CssClass="dragPanel" Style="width:100%;margin:auto;cursor: -webkit-grab; cursor: grab;background:black;color:white;" >
                            <table class="tituventana">
                                <tr>
                                    <td style="width:auto;text-align:left;vertical-align:middle;margin:auto;">
                                        <a lang="TRADUCIR" id="titulo_ventana5"></a>
                                    </td>
                                </tr>
                            </table>
                        </asp:Panel>
                    </td>
                    <td style="text-align:center;width:30px">
                        <img alt="Cerrar" 
						     src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAADXElEQVRYhe2XS2xUVRjHf9+5d6bYWKSTJkUcY0QWroqmtLWuJu1MJCTYpD524864ERNS2EhkQYOaAKLWha5Zo2maoNZSiQsexUJx4c4QY6GER7WApvO453Mx7869w207Xek/mWTynfOd3//c+53Hhf+6ZC1J9xPdHcZxt4kljniqJjJv1bu5+ezMvQ0zsJTo32GcfFqQIWBnQLc5FcY9653aMj37W1MMPBzs6xQ4rOjbQCSk35wIX1njjrZNnr+9ZgP/DPb2W/ga2BoSvFJ3VfW1tunLPwV1MEEND5I9b1r4cR1wgA4RmXww0PtGUAffJ3B/oOdlIzINtKwDXq2sqqb8nkSdgYeDfZ2g14DOJsFLuqXRXFfbt1fvVAfrXoHA4Q2AA2w1mcgHK4M1BpYS/TuK1e4raY/hJlKBBDeRQtpjge0qvLOc7NkeaMA49i0ClppsaWfTsS9oOTRK5NXX6+G799Jy6AibPvkSiXUEeYh6VtKBBgQdCsp0XtiFeeZZECG6bwR3T6Wru2eIlpH3QQwm/jRO14tBw6BCDaNchIXt1blTn1KRu3tvGYQq2bHjaDZTG/v8GLmJ042GUc91Op74/sIigFuKmoiJYxvlQf67CYAyMPreQVAFkbBwAHHyNg4sQtUrEE+ffFRmyUTmxIcFMKwWXpTdVvpXNqAiGjK7XiKFX/j+ZValCK0shMmt1EFh5qUnEd13wHd1+Mu5WWfAGubDwysFlzlxFNQWV0coE+o53KgzULxMzAXCE6kquCVz8iNyE6cLNXHy4yoTIw03K4QrpRVQYwBAhfGgPG/uZ+zv14szP07+TKVr/sx4sTAtdv4PvF+uBvNVaxg1lfPXQPdzrji/AlHf5PYYzs5u8ud+8B3cTaTwrs2ify76tgNZx+H5xyZnrvsaAPg72TumyruBU1iPRD99fOry/upQ3WlojTsK3NoA/ILN26Mrg3UG2ibP3zYwDGSaCF82IsObz83efaQBgNazMxdUSTfJxLIi6dapSxf9GhtfSpN9L1nVb1j7vXDBiAwHwaHBpRSgderSRY3mukQZA7KrAGdBP7Oe19UIDqv4MFlO9mz3rKSL53nAga9XBDNuHD1VvdSaYqBaS6/0xxyPp8Tm4gBqIvOew43qHe5/hdW/dfxGq1OsGFAAAAAASUVORK5CYII=" 
							 style="cursor:pointer;vertical-align:middle;width:1vw;height:auto" 
							 onclick="WCancela_Registro();" />
					</td>
                </tr>
            </table>

            <div id="con_5_0" style="height:95%;border:solid 0px #ddd;overflow:auto;"></div>
            <div style="text-align: center;">
                <asp:Button ID="bt_ok_5" runat="server" Text="OK-Virtual" Style="display:none;" />
                <asp:Button ID="bt_ko_5" runat="server" Text="KO-Virtual" Style="display:none;" />
            </div>
            <asp:Label ID="lb_5" runat="server" Text=""></asp:Label>

        </asp:Panel>

        <%-- ************************* --%>
        <%-- Panel de Registro Nivel 6 --%>        
        <%-- ************************* --%>

        <asp:Panel ID="capa6" runat="server" style="display:none;">
            <ajaxtool:modalpopupextender id="MP6" 
                runat="server" 
                TargetControlID="bt_ed_6" 
                PopupControlID="capa6" 
                CancelControlID="bt_ko_6"  
                DropShadow="false" 
                BackgroundCssClass="FondoAplicacion" 
                RepositionMode="None"> 
            </ajaxtool:modalpopupextender>

            <table style="width:100%;margin:auto;" >
                <tr>
                    <td style="text-align:center;width:30px">
                        <img alt="Cerrar" 
						     src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAADXElEQVRYhe2XS2xUVRjHf9+5d6bYWKSTJkUcY0QWroqmtLWuJu1MJCTYpD524864ERNS2EhkQYOaAKLWha5Zo2maoNZSiQsexUJx4c4QY6GER7WApvO453Mx7869w207Xek/mWTynfOd3//c+53Hhf+6ZC1J9xPdHcZxt4kljniqJjJv1bu5+ezMvQ0zsJTo32GcfFqQIWBnQLc5FcY9653aMj37W1MMPBzs6xQ4rOjbQCSk35wIX1njjrZNnr+9ZgP/DPb2W/ga2BoSvFJ3VfW1tunLPwV1MEEND5I9b1r4cR1wgA4RmXww0PtGUAffJ3B/oOdlIzINtKwDXq2sqqb8nkSdgYeDfZ2g14DOJsFLuqXRXFfbt1fvVAfrXoHA4Q2AA2w1mcgHK4M1BpYS/TuK1e4raY/hJlKBBDeRQtpjge0qvLOc7NkeaMA49i0ClppsaWfTsS9oOTRK5NXX6+G799Jy6AibPvkSiXUEeYh6VtKBBgQdCsp0XtiFeeZZECG6bwR3T6Wru2eIlpH3QQwm/jRO14tBw6BCDaNchIXt1blTn1KRu3tvGYQq2bHjaDZTG/v8GLmJ042GUc91Op74/sIigFuKmoiJYxvlQf67CYAyMPreQVAFkbBwAHHyNg4sQtUrEE+ffFRmyUTmxIcFMKwWXpTdVvpXNqAiGjK7XiKFX/j+ZValCK0shMmt1EFh5qUnEd13wHd1+Mu5WWfAGubDwysFlzlxFNQWV0coE+o53KgzULxMzAXCE6kquCVz8iNyE6cLNXHy4yoTIw03K4QrpRVQYwBAhfGgPG/uZ+zv14szP07+TKVr/sx4sTAtdv4PvF+uBvNVaxg1lfPXQPdzrji/AlHf5PYYzs5u8ud+8B3cTaTwrs2ify76tgNZx+H5xyZnrvsaAPg72TumyruBU1iPRD99fOry/upQ3WlojTsK3NoA/ILN26Mrg3UG2ibP3zYwDGSaCF82IsObz83efaQBgNazMxdUSTfJxLIi6dapSxf9GhtfSpN9L1nVb1j7vXDBiAwHwaHBpRSgderSRY3mukQZA7KrAGdBP7Oe19UIDqv4MFlO9mz3rKSL53nAga9XBDNuHD1VvdSaYqBaS6/0xxyPp8Tm4gBqIvOew43qHe5/hdW/dfxGq1OsGFAAAAAASUVORK5CYII=" 
							 style="cursor:pointer;vertical-align:middle;width:1vw;height:auto" 
							 onclick="WCancela_Registro();" />
					</td>
                    <td style="width:auto">
                        <asp:Panel id="dcapa6" runat="server" CssClass="dragPanel" Style="width:100%;margin:auto;cursor: -webkit-grab; cursor: grab;background:black;color:white;" >
                            <table class="tituventana">
                                <tr>
                                    <td style="width:auto;text-align:left;vertical-align:middle;margin:auto;">
                                        <a lang="TRADUCIR" id="titulo_ventana6"></a>
                                    </td>
                                </tr>
                            </table>
                        </asp:Panel>
                    </td>
                    <td style="text-align:center;width:30px">
                        <img alt="Cerrar" 
						     src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAADXElEQVRYhe2XS2xUVRjHf9+5d6bYWKSTJkUcY0QWroqmtLWuJu1MJCTYpD524864ERNS2EhkQYOaAKLWha5Zo2maoNZSiQsexUJx4c4QY6GER7WApvO453Mx7869w207Xek/mWTynfOd3//c+53Hhf+6ZC1J9xPdHcZxt4kljniqJjJv1bu5+ezMvQ0zsJTo32GcfFqQIWBnQLc5FcY9653aMj37W1MMPBzs6xQ4rOjbQCSk35wIX1njjrZNnr+9ZgP/DPb2W/ga2BoSvFJ3VfW1tunLPwV1MEEND5I9b1r4cR1wgA4RmXww0PtGUAffJ3B/oOdlIzINtKwDXq2sqqb8nkSdgYeDfZ2g14DOJsFLuqXRXFfbt1fvVAfrXoHA4Q2AA2w1mcgHK4M1BpYS/TuK1e4raY/hJlKBBDeRQtpjge0qvLOc7NkeaMA49i0ClppsaWfTsS9oOTRK5NXX6+G799Jy6AibPvkSiXUEeYh6VtKBBgQdCsp0XtiFeeZZECG6bwR3T6Wru2eIlpH3QQwm/jRO14tBw6BCDaNchIXt1blTn1KRu3tvGYQq2bHjaDZTG/v8GLmJ042GUc91Op74/sIigFuKmoiJYxvlQf67CYAyMPreQVAFkbBwAHHyNg4sQtUrEE+ffFRmyUTmxIcFMKwWXpTdVvpXNqAiGjK7XiKFX/j+ZValCK0shMmt1EFh5qUnEd13wHd1+Mu5WWfAGubDwysFlzlxFNQWV0coE+o53KgzULxMzAXCE6kquCVz8iNyE6cLNXHy4yoTIw03K4QrpRVQYwBAhfGgPG/uZ+zv14szP07+TKVr/sx4sTAtdv4PvF+uBvNVaxg1lfPXQPdzrji/AlHf5PYYzs5u8ud+8B3cTaTwrs2ify76tgNZx+H5xyZnrvsaAPg72TumyruBU1iPRD99fOry/upQ3WlojTsK3NoA/ILN26Mrg3UG2ibP3zYwDGSaCF82IsObz83efaQBgNazMxdUSTfJxLIi6dapSxf9GhtfSpN9L1nVb1j7vXDBiAwHwaHBpRSgderSRY3mukQZA7KrAGdBP7Oe19UIDqv4MFlO9mz3rKSL53nAga9XBDNuHD1VvdSaYqBaS6/0xxyPp8Tm4gBqIvOew43qHe5/hdW/dfxGq1OsGFAAAAAASUVORK5CYII=" 
							 style="cursor:pointer;vertical-align:middle;width:1vw;height:auto" 
							 onclick="WCancela_Registro();" />
					</td>
                </tr>
            </table>

            <div id="con_6_0" style="height:95%;border:solid 0px #ddd;overflow:auto;"></div>
            <div style="text-align: center;">
                <asp:Button ID="bt_ok_6" runat="server" Text="OK-Virtual" Style="display:none;" />
                <asp:Button ID="bt_ko_6" runat="server" Text="KO-Virtual" Style="display:none;" />
            </div>
            <asp:Label ID="lb_6" runat="server" Text=""></asp:Label>
        </asp:Panel>
       
        <%-- ************************* --%>
        <%-- Panel de Registro Nivel 7 --%>        
        <%-- ************************* --%>

        <asp:Panel ID="capa7" runat="server" style="display:none;">
            <ajaxtool:modalpopupextender id="MP7" 
                runat="server" 
                TargetControlID="bt_ed_7" 
                PopupControlID="capa7" 
                CancelControlID="bt_ko_7"  
                DropShadow="false" 
                BackgroundCssClass="FondoAplicacion" 
                RepositionMode="None"> 
                
                <%-- <Animations><OnShown><FadeIn Duration=".3" Fps="30" /></OnShown></Animations> --%>
            
            </ajaxtool:modalpopupextender>

            <table style="width:100%;margin:auto;" >
                <tr>
                    <td style="text-align:center;width:30px">
                        <img alt="Cerrar" 
						     src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAADXElEQVRYhe2XS2xUVRjHf9+5d6bYWKSTJkUcY0QWroqmtLWuJu1MJCTYpD524864ERNS2EhkQYOaAKLWha5Zo2maoNZSiQsexUJx4c4QY6GER7WApvO453Mx7869w207Xek/mWTynfOd3//c+53Hhf+6ZC1J9xPdHcZxt4kljniqJjJv1bu5+ezMvQ0zsJTo32GcfFqQIWBnQLc5FcY9653aMj37W1MMPBzs6xQ4rOjbQCSk35wIX1njjrZNnr+9ZgP/DPb2W/ga2BoSvFJ3VfW1tunLPwV1MEEND5I9b1r4cR1wgA4RmXww0PtGUAffJ3B/oOdlIzINtKwDXq2sqqb8nkSdgYeDfZ2g14DOJsFLuqXRXFfbt1fvVAfrXoHA4Q2AA2w1mcgHK4M1BpYS/TuK1e4raY/hJlKBBDeRQtpjge0qvLOc7NkeaMA49i0ClppsaWfTsS9oOTRK5NXX6+G799Jy6AibPvkSiXUEeYh6VtKBBgQdCsp0XtiFeeZZECG6bwR3T6Wru2eIlpH3QQwm/jRO14tBw6BCDaNchIXt1blTn1KRu3tvGYQq2bHjaDZTG/v8GLmJ042GUc91Op74/sIigFuKmoiJYxvlQf67CYAyMPreQVAFkbBwAHHyNg4sQtUrEE+ffFRmyUTmxIcFMKwWXpTdVvpXNqAiGjK7XiKFX/j+ZValCK0shMmt1EFh5qUnEd13wHd1+Mu5WWfAGubDwysFlzlxFNQWV0coE+o53KgzULxMzAXCE6kquCVz8iNyE6cLNXHy4yoTIw03K4QrpRVQYwBAhfGgPG/uZ+zv14szP07+TKVr/sx4sTAtdv4PvF+uBvNVaxg1lfPXQPdzrji/AlHf5PYYzs5u8ud+8B3cTaTwrs2ify76tgNZx+H5xyZnrvsaAPg72TumyruBU1iPRD99fOry/upQ3WlojTsK3NoA/ILN26Mrg3UG2ibP3zYwDGSaCF82IsObz83efaQBgNazMxdUSTfJxLIi6dapSxf9GhtfSpN9L1nVb1j7vXDBiAwHwaHBpRSgderSRY3mukQZA7KrAGdBP7Oe19UIDqv4MFlO9mz3rKSL53nAga9XBDNuHD1VvdSaYqBaS6/0xxyPp8Tm4gBqIvOew43qHe5/hdW/dfxGq1OsGFAAAAAASUVORK5CYII=" 
							 style="cursor:pointer;vertical-align:middle;width:1vw;height:auto" 
							 onclick="WCancela_Registro();" />
					</td>
                    <td style="width:auto">
                        <asp:Panel id="dcapa7" runat="server" CssClass="dragPanel" Style="width:100%;margin:auto;cursor: -webkit-grab; cursor: grab;background:black;color:white;" >
                            <table class="tituventana">
                                <tr>
                                    <td style="width:auto;text-align:left;vertical-align:middle;margin:auto;">
                                        <a lang="TRADUCIR" id="titulo_ventana7"></a>
                                    </td>
                                </tr>
                            </table>
                        </asp:Panel>
                    </td>
                    <td style="text-align:center;width:30px">
                        <img alt="Cerrar" 
						     src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAADXElEQVRYhe2XS2xUVRjHf9+5d6bYWKSTJkUcY0QWroqmtLWuJu1MJCTYpD524864ERNS2EhkQYOaAKLWha5Zo2maoNZSiQsexUJx4c4QY6GER7WApvO453Mx7869w207Xek/mWTynfOd3//c+53Hhf+6ZC1J9xPdHcZxt4kljniqJjJv1bu5+ezMvQ0zsJTo32GcfFqQIWBnQLc5FcY9653aMj37W1MMPBzs6xQ4rOjbQCSk35wIX1njjrZNnr+9ZgP/DPb2W/ga2BoSvFJ3VfW1tunLPwV1MEEND5I9b1r4cR1wgA4RmXww0PtGUAffJ3B/oOdlIzINtKwDXq2sqqb8nkSdgYeDfZ2g14DOJsFLuqXRXFfbt1fvVAfrXoHA4Q2AA2w1mcgHK4M1BpYS/TuK1e4raY/hJlKBBDeRQtpjge0qvLOc7NkeaMA49i0ClppsaWfTsS9oOTRK5NXX6+G799Jy6AibPvkSiXUEeYh6VtKBBgQdCsp0XtiFeeZZECG6bwR3T6Wru2eIlpH3QQwm/jRO14tBw6BCDaNchIXt1blTn1KRu3tvGYQq2bHjaDZTG/v8GLmJ042GUc91Op74/sIigFuKmoiJYxvlQf67CYAyMPreQVAFkbBwAHHyNg4sQtUrEE+ffFRmyUTmxIcFMKwWXpTdVvpXNqAiGjK7XiKFX/j+ZValCK0shMmt1EFh5qUnEd13wHd1+Mu5WWfAGubDwysFlzlxFNQWV0coE+o53KgzULxMzAXCE6kquCVz8iNyE6cLNXHy4yoTIw03K4QrpRVQYwBAhfGgPG/uZ+zv14szP07+TKVr/sx4sTAtdv4PvF+uBvNVaxg1lfPXQPdzrji/AlHf5PYYzs5u8ud+8B3cTaTwrs2ify76tgNZx+H5xyZnrvsaAPg72TumyruBU1iPRD99fOry/upQ3WlojTsK3NoA/ILN26Mrg3UG2ibP3zYwDGSaCF82IsObz83efaQBgNazMxdUSTfJxLIi6dapSxf9GhtfSpN9L1nVb1j7vXDBiAwHwaHBpRSgderSRY3mukQZA7KrAGdBP7Oe19UIDqv4MFlO9mz3rKSL53nAga9XBDNuHD1VvdSaYqBaS6/0xxyPp8Tm4gBqIvOew43qHe5/hdW/dfxGq1OsGFAAAAAASUVORK5CYII=" 
							 style="cursor:pointer;vertical-align:middle;width:1vw;height:auto" 
							 onclick="WCancela_Registro();" />
					</td>
                </tr>
            </table>

            <div id="con_7_0" style="height:95%;border:solid 0px #ddd;overflow:auto;"></div>
            <div style="text-align: center;">
                <asp:Button ID="bt_ok_7" runat="server" Text="OK-Virtual" Style="display:none;" />
                <asp:Button ID="bt_ko_7" runat="server" Text="KO-Virtual" Style="display:none;" />
            </div>
            <asp:Label ID="lb_7" runat="server" Text=""></asp:Label>
        </asp:Panel>
        
        <%-- ************************* --%>
        <%-- Panel de Registro Nivel 8 --%>        
        <%-- ************************* --%>

        <asp:Panel ID="capa8" runat="server" style="display:none;">
            <ajaxtool:modalpopupextender id="MP8" 
                runat="server" 
                TargetControlID="bt_ed_8" 
                PopupControlID="capa8" 
                CancelControlID="bt_ko_8"  
                DropShadow="false" 
                BackgroundCssClass="FondoAplicacion" 
                RepositionMode="None">
                
                <%-- <Animations><OnShown><FadeIn Duration=".3" Fps="30" /></OnShown></Animations> --%>
            
            </ajaxtool:modalpopupextender>

            <table style="width:100%;margin:auto;" >
                <tr>
                    <td style="text-align:center;width:30px">
                        <img alt="Cerrar" 
						     src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAADXElEQVRYhe2XS2xUVRjHf9+5d6bYWKSTJkUcY0QWroqmtLWuJu1MJCTYpD524864ERNS2EhkQYOaAKLWha5Zo2maoNZSiQsexUJx4c4QY6GER7WApvO453Mx7869w207Xek/mWTynfOd3//c+53Hhf+6ZC1J9xPdHcZxt4kljniqJjJv1bu5+ezMvQ0zsJTo32GcfFqQIWBnQLc5FcY9653aMj37W1MMPBzs6xQ4rOjbQCSk35wIX1njjrZNnr+9ZgP/DPb2W/ga2BoSvFJ3VfW1tunLPwV1MEEND5I9b1r4cR1wgA4RmXww0PtGUAffJ3B/oOdlIzINtKwDXq2sqqb8nkSdgYeDfZ2g14DOJsFLuqXRXFfbt1fvVAfrXoHA4Q2AA2w1mcgHK4M1BpYS/TuK1e4raY/hJlKBBDeRQtpjge0qvLOc7NkeaMA49i0ClppsaWfTsS9oOTRK5NXX6+G799Jy6AibPvkSiXUEeYh6VtKBBgQdCsp0XtiFeeZZECG6bwR3T6Wru2eIlpH3QQwm/jRO14tBw6BCDaNchIXt1blTn1KRu3tvGYQq2bHjaDZTG/v8GLmJ042GUc91Op74/sIigFuKmoiJYxvlQf67CYAyMPreQVAFkbBwAHHyNg4sQtUrEE+ffFRmyUTmxIcFMKwWXpTdVvpXNqAiGjK7XiKFX/j+ZValCK0shMmt1EFh5qUnEd13wHd1+Mu5WWfAGubDwysFlzlxFNQWV0coE+o53KgzULxMzAXCE6kquCVz8iNyE6cLNXHy4yoTIw03K4QrpRVQYwBAhfGgPG/uZ+zv14szP07+TKVr/sx4sTAtdv4PvF+uBvNVaxg1lfPXQPdzrji/AlHf5PYYzs5u8ud+8B3cTaTwrs2ify76tgNZx+H5xyZnrvsaAPg72TumyruBU1iPRD99fOry/upQ3WlojTsK3NoA/ILN26Mrg3UG2ibP3zYwDGSaCF82IsObz83efaQBgNazMxdUSTfJxLIi6dapSxf9GhtfSpN9L1nVb1j7vXDBiAwHwaHBpRSgderSRY3mukQZA7KrAGdBP7Oe19UIDqv4MFlO9mz3rKSL53nAga9XBDNuHD1VvdSaYqBaS6/0xxyPp8Tm4gBqIvOew43qHe5/hdW/dfxGq1OsGFAAAAAASUVORK5CYII=" 
							 style="cursor:pointer;vertical-align:middle;width:1vw;height:auto" 
							 onclick="WCancela_Registro();" />
					</td>
                    <td style="width:auto">
                        <asp:Panel id="dcapa8" runat="server" CssClass="dragPanel" Style="width:100%;margin:auto;cursor: -webkit-grab; cursor: grab;background:black;color:white;" >
                            <table class="tituventana">
                                <tr>
                                    <td style="width:auto;text-align:left;vertical-align:middle;margin:auto;">
                                        <a lang="TRADUCIR" id="titulo_ventana8"></a>
                                    </td>
                                </tr>
                            </table>
                        </asp:Panel>
                    </td>
                    <td style="text-align:center;width:30px">
                        <img alt="Cerrar" 
						     src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAADXElEQVRYhe2XS2xUVRjHf9+5d6bYWKSTJkUcY0QWroqmtLWuJu1MJCTYpD524864ERNS2EhkQYOaAKLWha5Zo2maoNZSiQsexUJx4c4QY6GER7WApvO453Mx7869w207Xek/mWTynfOd3//c+53Hhf+6ZC1J9xPdHcZxt4kljniqJjJv1bu5+ezMvQ0zsJTo32GcfFqQIWBnQLc5FcY9653aMj37W1MMPBzs6xQ4rOjbQCSk35wIX1njjrZNnr+9ZgP/DPb2W/ga2BoSvFJ3VfW1tunLPwV1MEEND5I9b1r4cR1wgA4RmXww0PtGUAffJ3B/oOdlIzINtKwDXq2sqqb8nkSdgYeDfZ2g14DOJsFLuqXRXFfbt1fvVAfrXoHA4Q2AA2w1mcgHK4M1BpYS/TuK1e4raY/hJlKBBDeRQtpjge0qvLOc7NkeaMA49i0ClppsaWfTsS9oOTRK5NXX6+G799Jy6AibPvkSiXUEeYh6VtKBBgQdCsp0XtiFeeZZECG6bwR3T6Wru2eIlpH3QQwm/jRO14tBw6BCDaNchIXt1blTn1KRu3tvGYQq2bHjaDZTG/v8GLmJ042GUc91Op74/sIigFuKmoiJYxvlQf67CYAyMPreQVAFkbBwAHHyNg4sQtUrEE+ffFRmyUTmxIcFMKwWXpTdVvpXNqAiGjK7XiKFX/j+ZValCK0shMmt1EFh5qUnEd13wHd1+Mu5WWfAGubDwysFlzlxFNQWV0coE+o53KgzULxMzAXCE6kquCVz8iNyE6cLNXHy4yoTIw03K4QrpRVQYwBAhfGgPG/uZ+zv14szP07+TKVr/sx4sTAtdv4PvF+uBvNVaxg1lfPXQPdzrji/AlHf5PYYzs5u8ud+8B3cTaTwrs2ify76tgNZx+H5xyZnrvsaAPg72TumyruBU1iPRD99fOry/upQ3WlojTsK3NoA/ILN26Mrg3UG2ibP3zYwDGSaCF82IsObz83efaQBgNazMxdUSTfJxLIi6dapSxf9GhtfSpN9L1nVb1j7vXDBiAwHwaHBpRSgderSRY3mukQZA7KrAGdBP7Oe19UIDqv4MFlO9mz3rKSL53nAga9XBDNuHD1VvdSaYqBaS6/0xxyPp8Tm4gBqIvOew43qHe5/hdW/dfxGq1OsGFAAAAAASUVORK5CYII=" 
							 style="cursor:pointer;vertical-align:middle;width:1vw;height:auto" 
							 onclick="WCancela_Registro();" />
					</td>
                </tr>
            </table>

            <div id="con_8_0" style="height:95%;border:solid 0px #ddd;overflow:auto;"></div>
            <div style="text-align: center;">
                <asp:Button ID="bt_ok_8" runat="server" Text="OK-Virtual" Style="display:none;" />
                <asp:Button ID="bt_ko_8" runat="server" Text="KO-Virtual" Style="display:none;" />
            </div>
            <asp:Label ID="lb_8" runat="server" Text=""></asp:Label>
        </asp:Panel>
        
        <%-- ************************* --%>
        <%-- Panel de Registro Nivel 9 --%>        
        <%-- ************************* --%>

        <asp:Panel ID="capa9" runat="server" style="display:none;">
            <ajaxtool:modalpopupextender 
                id="MP9" 
                runat="server" 
                TargetControlID="bt_ed_9" 
                PopupControlID="capa9" 
                CancelControlID="bt_ko_9"  
                DropShadow="false" 
                BackgroundCssClass="FondoAplicacion"
                RepositionMode="None"> 
                <%-- <Animations><OnShown><FadeIn Duration=".3" Fps="30" /></OnShown></Animations> --%>
            </ajaxtool:modalpopupextender>

            <table style="width:100%;margin:auto;" >
                <tr>
                    <td style="text-align:center;width:30px">
                        <img alt="Cerrar" 
						     src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAADXElEQVRYhe2XS2xUVRjHf9+5d6bYWKSTJkUcY0QWroqmtLWuJu1MJCTYpD524864ERNS2EhkQYOaAKLWha5Zo2maoNZSiQsexUJx4c4QY6GER7WApvO453Mx7869w207Xek/mWTynfOd3//c+53Hhf+6ZC1J9xPdHcZxt4kljniqJjJv1bu5+ezMvQ0zsJTo32GcfFqQIWBnQLc5FcY9653aMj37W1MMPBzs6xQ4rOjbQCSk35wIX1njjrZNnr+9ZgP/DPb2W/ga2BoSvFJ3VfW1tunLPwV1MEEND5I9b1r4cR1wgA4RmXww0PtGUAffJ3B/oOdlIzINtKwDXq2sqqb8nkSdgYeDfZ2g14DOJsFLuqXRXFfbt1fvVAfrXoHA4Q2AA2w1mcgHK4M1BpYS/TuK1e4raY/hJlKBBDeRQtpjge0qvLOc7NkeaMA49i0ClppsaWfTsS9oOTRK5NXX6+G799Jy6AibPvkSiXUEeYh6VtKBBgQdCsp0XtiFeeZZECG6bwR3T6Wru2eIlpH3QQwm/jRO14tBw6BCDaNchIXt1blTn1KRu3tvGYQq2bHjaDZTG/v8GLmJ042GUc91Op74/sIigFuKmoiJYxvlQf67CYAyMPreQVAFkbBwAHHyNg4sQtUrEE+ffFRmyUTmxIcFMKwWXpTdVvpXNqAiGjK7XiKFX/j+ZValCK0shMmt1EFh5qUnEd13wHd1+Mu5WWfAGubDwysFlzlxFNQWV0coE+o53KgzULxMzAXCE6kquCVz8iNyE6cLNXHy4yoTIw03K4QrpRVQYwBAhfGgPG/uZ+zv14szP07+TKVr/sx4sTAtdv4PvF+uBvNVaxg1lfPXQPdzrji/AlHf5PYYzs5u8ud+8B3cTaTwrs2ify76tgNZx+H5xyZnrvsaAPg72TumyruBU1iPRD99fOry/upQ3WlojTsK3NoA/ILN26Mrg3UG2ibP3zYwDGSaCF82IsObz83efaQBgNazMxdUSTfJxLIi6dapSxf9GhtfSpN9L1nVb1j7vXDBiAwHwaHBpRSgderSRY3mukQZA7KrAGdBP7Oe19UIDqv4MFlO9mz3rKSL53nAga9XBDNuHD1VvdSaYqBaS6/0xxyPp8Tm4gBqIvOew43qHe5/hdW/dfxGq1OsGFAAAAAASUVORK5CYII=" 
							 style="cursor:pointer;vertical-align:middle;width:1vw;height:auto" 
							 onclick="WCancela_Registro();" />
					</td>
                    <td style="width:auto">
                        <asp:Panel id="dcapa9" runat="server" CssClass="dragPanel" Style="width:100%;margin:auto;cursor: -webkit-grab; cursor: grab;background:black;color:white;" >
                            <table class="tituventana">
                                <tr>
                                    <td style="width:auto;text-align:left;vertical-align:middle;margin:auto;">
                                        <a lang="TRADUCIR" id="titulo_ventana2"></a>
                                    </td>
                                </tr>
                            </table>
                        </asp:Panel>
                    </td>
                    <td style="text-align:center;width:30px">
                        <img alt="Cerrar" 
						     src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAADXElEQVRYhe2XS2xUVRjHf9+5d6bYWKSTJkUcY0QWroqmtLWuJu1MJCTYpD524864ERNS2EhkQYOaAKLWha5Zo2maoNZSiQsexUJx4c4QY6GER7WApvO453Mx7869w207Xek/mWTynfOd3//c+53Hhf+6ZC1J9xPdHcZxt4kljniqJjJv1bu5+ezMvQ0zsJTo32GcfFqQIWBnQLc5FcY9653aMj37W1MMPBzs6xQ4rOjbQCSk35wIX1njjrZNnr+9ZgP/DPb2W/ga2BoSvFJ3VfW1tunLPwV1MEEND5I9b1r4cR1wgA4RmXww0PtGUAffJ3B/oOdlIzINtKwDXq2sqqb8nkSdgYeDfZ2g14DOJsFLuqXRXFfbt1fvVAfrXoHA4Q2AA2w1mcgHK4M1BpYS/TuK1e4raY/hJlKBBDeRQtpjge0qvLOc7NkeaMA49i0ClppsaWfTsS9oOTRK5NXX6+G799Jy6AibPvkSiXUEeYh6VtKBBgQdCsp0XtiFeeZZECG6bwR3T6Wru2eIlpH3QQwm/jRO14tBw6BCDaNchIXt1blTn1KRu3tvGYQq2bHjaDZTG/v8GLmJ042GUc91Op74/sIigFuKmoiJYxvlQf67CYAyMPreQVAFkbBwAHHyNg4sQtUrEE+ffFRmyUTmxIcFMKwWXpTdVvpXNqAiGjK7XiKFX/j+ZValCK0shMmt1EFh5qUnEd13wHd1+Mu5WWfAGubDwysFlzlxFNQWV0coE+o53KgzULxMzAXCE6kquCVz8iNyE6cLNXHy4yoTIw03K4QrpRVQYwBAhfGgPG/uZ+zv14szP07+TKVr/sx4sTAtdv4PvF+uBvNVaxg1lfPXQPdzrji/AlHf5PYYzs5u8ud+8B3cTaTwrs2ify76tgNZx+H5xyZnrvsaAPg72TumyruBU1iPRD99fOry/upQ3WlojTsK3NoA/ILN26Mrg3UG2ibP3zYwDGSaCF82IsObz83efaQBgNazMxdUSTfJxLIi6dapSxf9GhtfSpN9L1nVb1j7vXDBiAwHwaHBpRSgderSRY3mukQZA7KrAGdBP7Oe19UIDqv4MFlO9mz3rKSL53nAga9XBDNuHD1VvdSaYqBaS6/0xxyPp8Tm4gBqIvOew43qHe5/hdW/dfxGq1OsGFAAAAAASUVORK5CYII=" 
							 style="cursor:pointer;vertical-align:middle;width:1vw;height:auto" 
							 onclick="WCancela_Registro();" />
					</td>
                </tr>
            </table>

            <div id="con_9_0" style="height:95%;border:solid 0px #ddd;overflow:auto;"></div>
            <div style="text-align: center;">
                <asp:Button ID="bt_ok_9" runat="server" Text="OK-Virtual" Style="display:none;" />
                <asp:Button ID="bt_ko_9" runat="server" Text="KO-Virtual" Style="display:none;" />
            </div>
            <asp:Label ID="lb_9" runat="server" Text=""></asp:Label>
        </asp:Panel>

        <%-- ************************************ --%>        
        <%-- Panel de Peticion de Pide Parametros --%>        
        <%-- ************************************ --%>

        <asp:Panel ID="capa_parametros" runat="server" style="display:none" >
            <ajaxtool:modalpopupextender 
                id="MP_parametros" 
                runat="server" 
                TargetControlID="bt_ed_parametros" 
                PopupControlID="capa_parametros" 
                CancelControlID="bt_ko_parametros" 
                DropShadow="false" 
                BackgroundCssClass="FondoAplicacion"
                RepositionMode="None"> 
            </ajaxtool:modalpopupextender>

            <table style="width:100%;margin:auto;" >
                <tr>
                    <td style="text-align:center;width:30px">
                        <img alt="Cerrar" 
						     src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAADXElEQVRYhe2XS2xUVRjHf9+5d6bYWKSTJkUcY0QWroqmtLWuJu1MJCTYpD524864ERNS2EhkQYOaAKLWha5Zo2maoNZSiQsexUJx4c4QY6GER7WApvO453Mx7869w207Xek/mWTynfOd3//c+53Hhf+6ZC1J9xPdHcZxt4kljniqJjJv1bu5+ezMvQ0zsJTo32GcfFqQIWBnQLc5FcY9653aMj37W1MMPBzs6xQ4rOjbQCSk35wIX1njjrZNnr+9ZgP/DPb2W/ga2BoSvFJ3VfW1tunLPwV1MEEND5I9b1r4cR1wgA4RmXww0PtGUAffJ3B/oOdlIzINtKwDXq2sqqb8nkSdgYeDfZ2g14DOJsFLuqXRXFfbt1fvVAfrXoHA4Q2AA2w1mcgHK4M1BpYS/TuK1e4raY/hJlKBBDeRQtpjge0qvLOc7NkeaMA49i0ClppsaWfTsS9oOTRK5NXX6+G799Jy6AibPvkSiXUEeYh6VtKBBgQdCsp0XtiFeeZZECG6bwR3T6Wru2eIlpH3QQwm/jRO14tBw6BCDaNchIXt1blTn1KRu3tvGYQq2bHjaDZTG/v8GLmJ042GUc91Op74/sIigFuKmoiJYxvlQf67CYAyMPreQVAFkbBwAHHyNg4sQtUrEE+ffFRmyUTmxIcFMKwWXpTdVvpXNqAiGjK7XiKFX/j+ZValCK0shMmt1EFh5qUnEd13wHd1+Mu5WWfAGubDwysFlzlxFNQWV0coE+o53KgzULxMzAXCE6kquCVz8iNyE6cLNXHy4yoTIw03K4QrpRVQYwBAhfGgPG/uZ+zv14szP07+TKVr/sx4sTAtdv4PvF+uBvNVaxg1lfPXQPdzrji/AlHf5PYYzs5u8ud+8B3cTaTwrs2ify76tgNZx+H5xyZnrvsaAPg72TumyruBU1iPRD99fOry/upQ3WlojTsK3NoA/ILN26Mrg3UG2ibP3zYwDGSaCF82IsObz83efaQBgNazMxdUSTfJxLIi6dapSxf9GhtfSpN9L1nVb1j7vXDBiAwHwaHBpRSgderSRY3mukQZA7KrAGdBP7Oe19UIDqv4MFlO9mz3rKSL53nAga9XBDNuHD1VvdSaYqBaS6/0xxyPp8Tm4gBqIvOew43qHe5/hdW/dfxGq1OsGFAAAAAASUVORK5CYII=" 
							 style="cursor:pointer;vertical-align:middle;width:1vw;height:auto" 
							 onclick="WCancela_Pide_Parametros();" />
					</td>
                    <td style="width:auto">
                        <asp:Panel id="dcapa_parametros" runat="server" CssClass="dragPanel" Style="width:100%;margin:auto;cursor: -webkit-grab;cursor:grab;background:black;color:white;" >
                            <table class="tituventana">
                                <tr>
                                    <td style="width:auto;text-align:left;vertical-align:middle;margin:auto;">
                                        <a lang="TRADUCIR" id="titulo_ventana_parametros">Petición de Datos</a>
                                    </td>
                                </tr>
                            </table>
                        </asp:Panel>
                    </td>
                    <td style="text-align:center;width:30px">
                        <img alt="Cerrar" 
						     src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAADXElEQVRYhe2XS2xUVRjHf9+5d6bYWKSTJkUcY0QWroqmtLWuJu1MJCTYpD524864ERNS2EhkQYOaAKLWha5Zo2maoNZSiQsexUJx4c4QY6GER7WApvO453Mx7869w207Xek/mWTynfOd3//c+53Hhf+6ZC1J9xPdHcZxt4kljniqJjJv1bu5+ezMvQ0zsJTo32GcfFqQIWBnQLc5FcY9653aMj37W1MMPBzs6xQ4rOjbQCSk35wIX1njjrZNnr+9ZgP/DPb2W/ga2BoSvFJ3VfW1tunLPwV1MEEND5I9b1r4cR1wgA4RmXww0PtGUAffJ3B/oOdlIzINtKwDXq2sqqb8nkSdgYeDfZ2g14DOJsFLuqXRXFfbt1fvVAfrXoHA4Q2AA2w1mcgHK4M1BpYS/TuK1e4raY/hJlKBBDeRQtpjge0qvLOc7NkeaMA49i0ClppsaWfTsS9oOTRK5NXX6+G799Jy6AibPvkSiXUEeYh6VtKBBgQdCsp0XtiFeeZZECG6bwR3T6Wru2eIlpH3QQwm/jRO14tBw6BCDaNchIXt1blTn1KRu3tvGYQq2bHjaDZTG/v8GLmJ042GUc91Op74/sIigFuKmoiJYxvlQf67CYAyMPreQVAFkbBwAHHyNg4sQtUrEE+ffFRmyUTmxIcFMKwWXpTdVvpXNqAiGjK7XiKFX/j+ZValCK0shMmt1EFh5qUnEd13wHd1+Mu5WWfAGubDwysFlzlxFNQWV0coE+o53KgzULxMzAXCE6kquCVz8iNyE6cLNXHy4yoTIw03K4QrpRVQYwBAhfGgPG/uZ+zv14szP07+TKVr/sx4sTAtdv4PvF+uBvNVaxg1lfPXQPdzrji/AlHf5PYYzs5u8ud+8B3cTaTwrs2ify76tgNZx+H5xyZnrvsaAPg72TumyruBU1iPRD99fOry/upQ3WlojTsK3NoA/ILN26Mrg3UG2ibP3zYwDGSaCF82IsObz83efaQBgNazMxdUSTfJxLIi6dapSxf9GhtfSpN9L1nVb1j7vXDBiAwHwaHBpRSgderSRY3mukQZA7KrAGdBP7Oe19UIDqv4MFlO9mz3rKSL53nAga9XBDNuHD1VvdSaYqBaS6/0xxyPp8Tm4gBqIvOew43qHe5/hdW/dfxGq1OsGFAAAAAASUVORK5CYII=" 
							 style="cursor:pointer;vertical-align:middle;width:1vw;height:auto" 
							 onclick="WCancela_Pide_Parametros();" />
					</td>
                </tr>
            </table>

            <div id="datos_parametros"   style="text-align:center;border:solid 0px #0a0"></div>
            <div id="botones_parametros" style="margin:10% 10% 10% 10%;text-align:center;width:30wv"></div>

            <div style="text-align: center;">
                <asp:Button ID="bt_ok_parametros" runat="server" Text="OK-Virtual" Style="display:none;" />
                <asp:Button ID="bt_ko_parametros" runat="server" Text="KO-Virtual" Style="display:none;" />
            </div>
			
            <asp:Label ID="lb_parametros" runat="server" Text=""></asp:Label>

        </asp:Panel>

        <%-- ************************************ --%>        
        <%-- Panel de Peticion de Mapas de Google --%>        
        <%-- ************************************ --%>

        <asp:Panel ID="capa_mapas" runat="server" style="display:none" >

            <ajaxtool:modalpopupextender id="MP_mapas" 
                runat="server" 
                TargetControlID="bt_ed_mapas" 
                PopupControlID="capa_mapas" 
                CancelControlID="bt_ko_mapas" 
                DropShadow="false" 
                BackgroundCssClass="FondoAplicacion"
                RepositionMode="None"> 
            </ajaxtool:modalpopupextender>

            <table style="width:100%;margin:auto;" >
                <tr>
                    <td style="text-align:center;width:30px">
                        <img alt="Cerrar" 
						     src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAADXElEQVRYhe2XS2xUVRjHf9+5d6bYWKSTJkUcY0QWroqmtLWuJu1MJCTYpD524864ERNS2EhkQYOaAKLWha5Zo2maoNZSiQsexUJx4c4QY6GER7WApvO453Mx7869w207Xek/mWTynfOd3//c+53Hhf+6ZC1J9xPdHcZxt4kljniqJjJv1bu5+ezMvQ0zsJTo32GcfFqQIWBnQLc5FcY9653aMj37W1MMPBzs6xQ4rOjbQCSk35wIX1njjrZNnr+9ZgP/DPb2W/ga2BoSvFJ3VfW1tunLPwV1MEEND5I9b1r4cR1wgA4RmXww0PtGUAffJ3B/oOdlIzINtKwDXq2sqqb8nkSdgYeDfZ2g14DOJsFLuqXRXFfbt1fvVAfrXoHA4Q2AA2w1mcgHK4M1BpYS/TuK1e4raY/hJlKBBDeRQtpjge0qvLOc7NkeaMA49i0ClppsaWfTsS9oOTRK5NXX6+G799Jy6AibPvkSiXUEeYh6VtKBBgQdCsp0XtiFeeZZECG6bwR3T6Wru2eIlpH3QQwm/jRO14tBw6BCDaNchIXt1blTn1KRu3tvGYQq2bHjaDZTG/v8GLmJ042GUc91Op74/sIigFuKmoiJYxvlQf67CYAyMPreQVAFkbBwAHHyNg4sQtUrEE+ffFRmyUTmxIcFMKwWXpTdVvpXNqAiGjK7XiKFX/j+ZValCK0shMmt1EFh5qUnEd13wHd1+Mu5WWfAGubDwysFlzlxFNQWV0coE+o53KgzULxMzAXCE6kquCVz8iNyE6cLNXHy4yoTIw03K4QrpRVQYwBAhfGgPG/uZ+zv14szP07+TKVr/sx4sTAtdv4PvF+uBvNVaxg1lfPXQPdzrji/AlHf5PYYzs5u8ud+8B3cTaTwrs2ify76tgNZx+H5xyZnrvsaAPg72TumyruBU1iPRD99fOry/upQ3WlojTsK3NoA/ILN26Mrg3UG2ibP3zYwDGSaCF82IsObz83efaQBgNazMxdUSTfJxLIi6dapSxf9GhtfSpN9L1nVb1j7vXDBiAwHwaHBpRSgderSRY3mukQZA7KrAGdBP7Oe19UIDqv4MFlO9mz3rKSL53nAga9XBDNuHD1VvdSaYqBaS6/0xxyPp8Tm4gBqIvOew43qHe5/hdW/dfxGq1OsGFAAAAAASUVORK5CYII=" 
							 style="cursor:pointer;vertical-align:middle;width:1vw;height:auto" 
							 onclick="WCancela_Mapas();" />
					</td>				
                    <td style="width:auto">
                        <asp:Panel id="dcapa_mapas" runat="server" CssClass="dragPanel" Style="width:100%;margin:auto;cursor: -webkit-grab; cursor: grab;background:black;color:white;" >
                            <table class="tituventana">
                                <tr>
                                    <td style="width:auto;text-align:left;vertical-align:middle;margin:auto;">
                                        <a lang="TRADUCIR" id="titulo_ventana_mapas">Gestión de Mapas y Geolocalización</a>
                                    </td>
                                </tr>
                            </table>
                        </asp:Panel>
                    </td>
                    <td style="text-align:center;width:30px">
                        <img alt="Cerrar" 
						     src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAADXElEQVRYhe2XS2xUVRjHf9+5d6bYWKSTJkUcY0QWroqmtLWuJu1MJCTYpD524864ERNS2EhkQYOaAKLWha5Zo2maoNZSiQsexUJx4c4QY6GER7WApvO453Mx7869w207Xek/mWTynfOd3//c+53Hhf+6ZC1J9xPdHcZxt4kljniqJjJv1bu5+ezMvQ0zsJTo32GcfFqQIWBnQLc5FcY9653aMj37W1MMPBzs6xQ4rOjbQCSk35wIX1njjrZNnr+9ZgP/DPb2W/ga2BoSvFJ3VfW1tunLPwV1MEEND5I9b1r4cR1wgA4RmXww0PtGUAffJ3B/oOdlIzINtKwDXq2sqqb8nkSdgYeDfZ2g14DOJsFLuqXRXFfbt1fvVAfrXoHA4Q2AA2w1mcgHK4M1BpYS/TuK1e4raY/hJlKBBDeRQtpjge0qvLOc7NkeaMA49i0ClppsaWfTsS9oOTRK5NXX6+G799Jy6AibPvkSiXUEeYh6VtKBBgQdCsp0XtiFeeZZECG6bwR3T6Wru2eIlpH3QQwm/jRO14tBw6BCDaNchIXt1blTn1KRu3tvGYQq2bHjaDZTG/v8GLmJ042GUc91Op74/sIigFuKmoiJYxvlQf67CYAyMPreQVAFkbBwAHHyNg4sQtUrEE+ffFRmyUTmxIcFMKwWXpTdVvpXNqAiGjK7XiKFX/j+ZValCK0shMmt1EFh5qUnEd13wHd1+Mu5WWfAGubDwysFlzlxFNQWV0coE+o53KgzULxMzAXCE6kquCVz8iNyE6cLNXHy4yoTIw03K4QrpRVQYwBAhfGgPG/uZ+zv14szP07+TKVr/sx4sTAtdv4PvF+uBvNVaxg1lfPXQPdzrji/AlHf5PYYzs5u8ud+8B3cTaTwrs2ify76tgNZx+H5xyZnrvsaAPg72TumyruBU1iPRD99fOry/upQ3WlojTsK3NoA/ILN26Mrg3UG2ibP3zYwDGSaCF82IsObz83efaQBgNazMxdUSTfJxLIi6dapSxf9GhtfSpN9L1nVb1j7vXDBiAwHwaHBpRSgderSRY3mukQZA7KrAGdBP7Oe19UIDqv4MFlO9mz3rKSL53nAga9XBDNuHD1VvdSaYqBaS6/0xxyPp8Tm4gBqIvOew43qHe5/hdW/dfxGq1OsGFAAAAAASUVORK5CYII=" 
							 style="cursor:pointer;vertical-align:middle;width:1vw;height:auto" 
							 onclick="WCancela_Mapas();" />
					</td>				
                </tr>
            </table>

            <div class="pac-card" id="pac-card">
              <div>

                <div id="titlegeo">Buscar Dirección</div>
                <div id="type-selector" class="pac-controls">
                  <input type="radio" name="type" id="changetype-all" checked="checked" /> <label for="changetype-all">Todo</label>
                  <input type="radio" name="type" id="changetype-establishment" />         <label for="changetype-establishment">Establecimientos</label>
                  <input type="radio" name="type" id="changetype-address" />               <label for="changetype-address">Direcciones</label>
                  <input type="radio" name="type" id="changetype-geocode" />               <label for="changetype-geocode">Cod. Geos</label>
                </div>

                <div id="strict-bounds-selector" class="pac-controls">
                  <input type="checkbox" id="use-strict-bounds" value="" />
                  <label for="use-strict-bounds">Lim. Estrictos</label>
                </div>
        
              </div>
              
              <div id="pac-container">
                <input id="pac-input" type="text" placeholder="Introducir Dirección" />
                <br/><br/>
                <input id="pac-input-lat" type="text" placeholder="Introducir Latitud" />
                <input id="pac-input-lng" type="text" placeholder="Introducir Longitud" />
                <img alt="" style="padding-left:10px;cursor:pointer;width:20px;vertical-align:middle;" 
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA/ZJREFUeNq0VW1sU1UYfs9pu9KigpvAFiMLsdsChPBx8WMfzEUHy6RgYVnMoomJaOIP/0hj+LOYmIw/BtB/hB/yS+OvaWemMXF+QBAm2YjoRggd3UbBus6uH7ftbXvvuYf33Nt2H103Mdlp3nu2933P85738xDOOazlorDGyyo+hJBHO/WaA+CY0/ybFKkBv1+CDn3AuA80DvzduSUeNNgAjjjMvRzw55UAR3FnfJ50eArpXNeB4ztA572o6SkcISIHRAC68dB2dEikREe6rQIMZgAmNBNYgC63CNiRLrTsau6s31q/WbAuDlwcRZw+9MBnGjj/JGYD/bTAvAF0EVQkK/Lty4RQhNUMzena6trXX9rb+mwikQBKqchs9usf+8f4e9H91lXjrYswlCkPCicqH6v0NO1q3BaLxUBVVVTX9eGb1+7imU+LSf6f62WH1fF+675Wl5yQaSaTMZjj/rHJeCzWbyT8PxkQSdRKwtJg4bSvZU9znZbTKmRZNsQPZu7/HQo9+A3lfYvKdMUlckFgviQpVgyBc407G+vtun19YDIAOtMhk01Hp4OT4yj7EClXrtE8mOQR3L1lzNlRfmZrde3uzes2VQ3/9TuEZkMwOxdWgsFpP2f8JHocNi6l8RIDHgxFb3d7t4RKPYuMsEJ18Y8qN1S1tLkOPH0lcBWYhQG1UU2OxiZYTjuN8jEzpKUGPCjo7WrvkgKBAHheOSahwrwRs5m8znVOT+fuQ9uGpn8FlapAKghPR+KBnJL9ArW+LTsqBLjn4HFpamrK+DcYDIK7/ag0+MNAQS9lo9Y3j7zgrrs8c5UqXBHgkJtR7iux9C8oP7PysGPwle/7/tGampqi4F7oHjzX9qIZLo2/425yNwzLI7aknhSZAC2Z+zcZjP2B8lP51iw/7DC+Z0UYBr/zQcehw1I4EoYwCUM2noWdB/dI2x11cCPxJ8hMNsB5nKXkscgdYPpJsJA40PIj3xwVn23EsaCLxHjxLj3Pv9os+dP+opLT5gRFVfAeCJThauKn8C2WUgX4z0WlYayEa9oicIG9uA+EJ5j9674r4OreIUUyEYOdxp+4OWHA5cuzd1k0dwFsefBlgEs96MyPXzF3WnCyKsyLJdvzzIl6Kakli8rKUHQyc0v+BhvJC7PIGNBW7FED2/gsfXCa0LG91CtKtfoDl5TVs5AblWdSQ3OX4B/+NtzkKdxXHQLGc7zkTRaWKpAeR6qCDvoxvGUZqfK7OHmDXoItZJ/BB9iY13Ea3Q1gy1ckWc0DoSRelieKAG2kG7ZAB4zyT2ACxpGHL5ExaxaSmqdCz5c1QPK3sec9KdyML3iK2DKkLwAvNbCW66EAAwDlc+gHkhQiowAAAABJRU5ErkJggg=="
                            title ="Posicionar en estas coordenadas"
                            onclick ="Posiciona_Coordenadas_Mapa();" />
              </div>

            </div>

            <div id="datos_coordenadas" class="mapagoogle_coordenadas">
                 <table> 
                 <tr>
                 <td><a>Dirección:</a></td>
                 <td><input style="width:450px;font-size:130%;color:#a00;padding:5px;" type="text" id="direccion" name="direccion" value="" readonly="readonly" /></td>
                 
		         <td><a>Lat.: </a><input type="text" style="width:130px;font-size:100%;color:#a00;padding:5px;" readonly="readonly" name="lat" id="lat"/></td>
                 <td><a>Lon.: </a><input type="text" style="width:130px;font-size:100%;color:#a00;padding:5px;" readonly="readonly" name="lng" id="lng"/></td>
                 <td><a>Dir. GPS </a><input type="text" style="width:450px;font-size:100%;font-weight:bold;color:#a00;padding:5px;" readonly="readonly" name="direcciongps" id="direcciongps"/></td>
                 
                 <td><img alt="" 
				          style="padding:10px;cursor:pointer;width:2vw;height:auto;vertical-align:middle;" 
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA/ZJREFUeNq0VW1sU1UYfs9pu9KigpvAFiMLsdsChPBx8WMfzEUHy6RgYVnMoomJaOIP/0hj+LOYmIw/BtB/hB/yS+OvaWemMXF+QBAm2YjoRggd3UbBus6uH7ftbXvvuYf33Nt2H103Mdlp3nu2933P85738xDOOazlorDGyyo+hJBHO/WaA+CY0/ybFKkBv1+CDn3AuA80DvzduSUeNNgAjjjMvRzw55UAR3FnfJ50eArpXNeB4ztA572o6SkcISIHRAC68dB2dEikREe6rQIMZgAmNBNYgC63CNiRLrTsau6s31q/WbAuDlwcRZw+9MBnGjj/JGYD/bTAvAF0EVQkK/Lty4RQhNUMzena6trXX9rb+mwikQBKqchs9usf+8f4e9H91lXjrYswlCkPCicqH6v0NO1q3BaLxUBVVVTX9eGb1+7imU+LSf6f62WH1fF+675Wl5yQaSaTMZjj/rHJeCzWbyT8PxkQSdRKwtJg4bSvZU9znZbTKmRZNsQPZu7/HQo9+A3lfYvKdMUlckFgviQpVgyBc407G+vtun19YDIAOtMhk01Hp4OT4yj7EClXrtE8mOQR3L1lzNlRfmZrde3uzes2VQ3/9TuEZkMwOxdWgsFpP2f8JHocNi6l8RIDHgxFb3d7t4RKPYuMsEJ18Y8qN1S1tLkOPH0lcBWYhQG1UU2OxiZYTjuN8jEzpKUGPCjo7WrvkgKBAHheOSahwrwRs5m8znVOT+fuQ9uGpn8FlapAKghPR+KBnJL9ArW+LTsqBLjn4HFpamrK+DcYDIK7/ag0+MNAQS9lo9Y3j7zgrrs8c5UqXBHgkJtR7iux9C8oP7PysGPwle/7/tGampqi4F7oHjzX9qIZLo2/425yNwzLI7aknhSZAC2Z+zcZjP2B8lP51iw/7DC+Z0UYBr/zQcehw1I4EoYwCUM2noWdB/dI2x11cCPxJ8hMNsB5nKXkscgdYPpJsJA40PIj3xwVn23EsaCLxHjxLj3Pv9os+dP+opLT5gRFVfAeCJThauKn8C2WUgX4z0WlYayEa9oicIG9uA+EJ5j9674r4OreIUUyEYOdxp+4OWHA5cuzd1k0dwFsefBlgEs96MyPXzF3WnCyKsyLJdvzzIl6Kakli8rKUHQyc0v+BhvJC7PIGNBW7FED2/gsfXCa0LG91CtKtfoDl5TVs5AblWdSQ3OX4B/+NtzkKdxXHQLGc7zkTRaWKpAeR6qCDvoxvGUZqfK7OHmDXoItZJ/BB9iY13Ea3Q1gy1ckWc0DoSRelieKAG2kG7ZAB4zyT2ACxpGHL5ExaxaSmqdCz5c1QPK3sec9KdyML3iK2DKkLwAvNbCW66EAAwDlc+gHkhQiowAAAABJRU5ErkJggg=="
                          title="Acepta la Geolocalización."
                          onclick="WAcepta_Mapas();" /></td>
                 </tr>
                 </table>

                 <input style="display:none;" type="text" readonly="readonly" name="callegps"       id="callegps"/>
                 <input style="display:none;" type="text" readonly="readonly" name="numerogps"      id="numerogps"/>
                 <input style="display:none;" type="text" readonly="readonly" name="municipiogps"   id="municipiogps"/>
                 <input style="display:none;" type="text" readonly="readonly" name="provinciagps"   id="provinciagps"/>
                 <input style="display:none;" type="text" readonly="readonly" name="regiongps"      id="regiongps"/>
                 <input style="display:none;" type="text" readonly="readonly" name="comunidadgps"   id="comunidadgps"/>
                 <input style="display:none;" type="text" readonly="readonly" name="paisgps"        id="paisgps"/>
                 <input style="display:none;" type="text" readonly="readonly" name="ISO_paisgps"    id="ISO_paisgps"/>
                 <input style="display:none;" type="text" readonly="readonly" name="codpostalgps"   id="codpostalgps"/>

                 <input style="display:none;" type="text" readonly="readonly" name="ccodigo"    id="ccodigo"/>
                 <input style="display:none;" type="text" readonly="readonly" name="ctabla"     id="ctabla"/>
                 <input style="display:none;" type="text" readonly="readonly" name="ccalle"     id="ccalle"/>
                 <input style="display:none;" type="text" readonly="readonly" name="cnumero"    id="cnumero"/>
                 <input style="display:none;" type="text" readonly="readonly" name="cmunicipio" id="cmunicipio"/>
                 <input style="display:none;" type="text" readonly="readonly" name="ccp"        id="ccp"/>

            </div>

            <div id="datos_mapas" class="mapagoogle_mapa"></div>

            <div id="infowindow-content">
			  <img alt="" src="" width="16" height="16" id="place-icon" />
			  <span id="place-name"  class="title"></span>
			  <span id="place-address"></span>
            </div>
            
            <div id="botones_mapas" class="mapagoogle_botones"></div>

            <div style="text-align: center;">
                <asp:Button ID="bt_ok_mapas" runat="server" Text="OK-Virtual" Style="display:none;" />
                <asp:Button ID="bt_ko_mapas" runat="server" Text="KO-Virtual" Style="display:none;" />
            </div>

            <asp:Label ID="lb_mapas" runat="server" Text=""></asp:Label>

        </asp:Panel>
        
    </div>

    <div id="ocapa_parametros" class="FondoAplicacion" runat="server" style="position:absolute;width:100px;height:100px;top:-10000px;left:0px;"></div>
    <div id="ocapa_mapas" class="FondoAplicacion" runat="server" style="position:absolute;width:100px;height:100px;top:-10000px;left:0px;"></div>

    <div id="ocapa1" class="FondoAplicacion" runat="server" style="position:absolute;width:100px;height:100px;top:-10000px;left:0px;"></div>
    <div id="ocapa2" class="FondoAplicacion" runat="server" style="position:absolute;width:100px;height:100px;top:-10000px;left:0px;"></div>
    <div id="ocapa3" class="FondoAplicacion" runat="server" style="position:absolute;width:100px;height:100px;top:-10000px;left:0px;"></div>
    <div id="ocapa4" class="FondoAplicacion" runat="server" style="position:absolute;width:100px;height:100px;top:-10000px;left:0px;"></div>
    <div id="ocapa5" class="FondoAplicacion" runat="server" style="position:absolute;width:100px;height:100px;top:-10000px;left:0px;"></div>
    <div id="ocapa6" class="FondoAplicacion" runat="server" style="position:absolute;width:100px;height:100px;top:-10000px;left:0px;"></div>
    <div id="ocapa7" class="FondoAplicacion" runat="server" style="position:absolute;width:100px;height:100px;top:-10000px;left:0px;"></div>
    <div id="ocapa8" class="FondoAplicacion" runat="server" style="position:absolute;width:100px;height:100px;top:-10000px;left:0px;"></div>
    <div id="ocapa9" class="FondoAplicacion" runat="server" style="position:absolute;width:100px;height:100px;top:-10000px;left:0px;"></div>


    <%-- ****************************** --%>
    <%-- Division de Subida de Ficheros --%>
    <%-- ****************************** --%>
    
    <asp:Panel ID="divsubefichero" runat="server" class="FondoSubeFicheros" Style="display:none" >
        <table style="width:99%;margin:auto;">
            <tr>
                <td style="text-align:left;font-size:130%;font-weight:bold;width:auto;color:black" >
                    <font lang="ES">Ventana de Gestión Ficheros</font>
                </td>
                <td style="text-align:center;width:15%">
                    <img alt="salir_upload" 
                         src="data:image/png;base64,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" 
                         style="cursor:pointer;vertical-align:middle;width:3vw;height:auto" 
                         title="Salir de la Gestión de Ficheros" 
                         onclick="Hide_Capa_Fichero();" />
                </td>
            </tr>
        </table>
        <div id="titulosubidaficheros" style="text-align:center;padding:2px;height:1hv;border:solid 0px #a00"></div>
        <table style="width:99%;margin:auto;">
            <tr>
                <td style="width:95%;">
                    <ajaxtool:AjaxFileUpload ID="AjaxFileUpLoad1"  OnClientUploadComplete="File_Upload" OnClientUploadError="File_Upload_Error" runat="server"/>
                </td>
            </tr>
        </table>
    </asp:Panel>

    <%-- ************************************* --%>
    <%-- Division de Lista de Ficheros Subidos --%>
    <%-- ************************************* --%>

    <asp:Panel ID="divverficheros" runat="server" class="FondoSubeFicheros" Style="display:none" >
		<table style="width:99%;margin:auto;">
			<tr>
				<td style="text-align:left;font-size:130%;font-weight:bold;width:auto;color:black" >
					<font lang="ES">Ventana de Visualización de Ficheros Subidos</font>
				</td>
				<td style="text-align:center;width:15%">
					<img alt="salir_upload" 
						 src="data:image/png;base64,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" 
						 style="cursor:pointer;vertical-align:middle;width:3vw;height:auto" 
						 title="Salir de lang Ventana de Visualización de Ficheros"  
						 onclick="Hide_Lista_Ficheros();" />
				</td>
			</tr>
		</table>
		<div id="listaficherossubidos" style="height:90%;padding:10px;">NO EXISTEN FICHEROS SUBIDOS</div>
    </asp:Panel>

    <%-- ****************** --%>
    <%-- Division Debug     --%>
    <%-- ****************** --%>

    <div id='DivDebug' style="display:none;font-size:120%;width:200px;height:400px;left:0px;top:0px;color:#fff;background:#f00"></div>

</asp:Content>
