<%@ Page Title="" Language="vb" AutoEventWireup="false" MasterPageFile="~/VS.Master" CodeBehind="UpFiles.aspx.vb" Inherits="THERION.UpFiles" %>
<%@ MasterType virtualpath="~/VS.master" %>
<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="ajaxtool" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">

    <style type="text/css">
        
        .FondoAplicacion { border: solid 0px #000000
                          ;background-color: Gray
                          ;opacity:.20
                          ;-moz-opacity: 0.2
                          ;-khtml-opacity: 0.2
                          ;-ms-filter: "alpha(opacity=20)"
                          ;filter: alpha(opacity=20)
                          ;filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=20)"
}
        .modalbackground  {background-color:Gray; opacity: 0.5; filter:Alpha(opacity=50); }
        .modalpopup {background-color:White; padding:6px 6px 6px 6px; }
        td.axxes {border:solid #555 1px;}
                
    </style>

    <script type="text/javascript">

        var im_wait = '<%=im_wait.ClientID %>'
        var div_wait = '<%=DivWait.ClientID %>'
        var ocapa = '<%=ocapa.ClientID %>';

        var asyncupload = '<%=asyncupload.ClientID %>';
        var btncancel = '<%=btncancel.ClientID %>';
        var cb_formato_fichero = '<%=cb_formato_fichero.ClientID %>';

        var extension_formato = "xxx";
        var fileuploaded;

        // ------------------------------------------
            function uploadcomplete(sender, args) {
        // ------------------------------------------

            fileuploaded = args.get_fileName();

            $get("img1").style.display = "block";
            $get('img1').src = "img/ok_fichero_subido.png";

            var fileInputElement = sender.get_inputFile();
            fileInputElement.value = "";

            $get(asyncupload).style.display = "none";
            $get(btncancel).style.display = "none";
            $get(cb_formato_fichero).style.display = "none";
            $get("subiendo").style.display = "none";

            $get("lbestadofichero").innerHTML = "Fichero Subido OK";

        }

        // ---------------------------------------
            function uploadStart(sender, args) {
        // ---------------------------------------
            
            var filename = args.get_fileName();
            var filext = filename.substring(filename.lastIndexOf(".") + 1);

            if (filext == extension_formato) {
                $get("subiendo").style.display = "block";
                return true;
            }
            else {
                var err = new Error();
                err.name = 'Error';
                err.message = 'Debe seleccionar un fichero con extension ' + extension_formato;
                throw (err);
                return false;
            }
        }

        // --------------------------------------
            function uploaderror(sender, args) {
        // --------------------------------------
            $get("subiendo").style.display = "none";
            alert(args.get_errorMessage());
        }

        // ---------------------------------------------------------------------
            function _ok() { window.location.reload(); }
        // ---------------------------------------------------------------------

        // -----------------------
            function _cancel() {
        // -----------------------
            if (fileuploaded != "") {
                $get("subiendo").style.display = "none";
                THERION.WS_Files.cancelupload('<%= Server.Mappath("~/documentos").Replace("\","/") %>' + '/' + fileuploaded);
            }
        }

    </script>

</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

    <%-- ************* --%>
    <!-- ScriptManager -->
    <%-- ************* --%>

    <asp:ScriptManager ID="ScriptManager1" runat="server" EnableScriptGlobalization="True" EnableScriptLocalization="True" ScriptMode="Release">

       <Scripts>
            <asp:ScriptReference Path="~/js/_general.js" ScriptMode="Auto" />
            <asp:ScriptReference Path="~/js/Upfiles.js" ScriptMode="Auto" />
       </Scripts>

       <Services>
            <asp:ServiceReference Path="~/WS/WSmantenimiento.asmx" />    
            <asp:ServiceReference Path="~/WS/WS_Files.asmx" />    
       </Services>

    </asp:ScriptManager>

    <div id="ocapa" class="FondoAplicacion" runat="server" style="position:absolute;width:100px;height:100px;top:-10000px;left:0px;">
        <table style="width:100%;height:100%;border:solid 0px;">
              <tr>
                 <td align="center" valign="middle">
                     <asp:Image ID="Image1" runat="server" ImageUrl="img/big-roller.gif" style="width:96px" />
                 </td>
              </tr>
        </table>
    </div>

    <div>

        <asp:Button ID="btnadd" runat="server" Text="Subir nuevo Fichero de Proceso" />

        <asp:CheckBox ID="chk_procesados" runat="server" Text="Mostrar también Ficheros Procesados" AutoPostBack="True" />

        <div style=" max-height:500px
                    ;overflow:auto
                    ;border-width:1px 3px 3px 1px
                    ;border-style:solid
                    ;border-color:#555
                    
                    /* ;border-radius:         10px 10px 10px 4px
                       ;-ms-border-radius:     10px 10px 10px 4px
                       ;-moz-border-radius:    10px 10px 10px 4px
                       ;-webkit-border-radius: 10px 10px 10px 4px
                       ;-khtml-border-radius:  10px 10px 10px 4px */
                             
                    ;box-shadow:         3px 3px 3px 0px rgba(0,0,0,0.3) /* CSS3 */                    
                    ;-webkit-box-shadow: 3px 3px 3px 0px rgba(0,0,0,0.3) /* Safari and Chrome */
                    ;-moz-box-shadow:    3px 3px 3px 0px rgba(0,0,0,0.3) /* Firefox */
                    ;-ms-box-shadow:     3px 3px 3px 0px rgba(0,0,0,0.3) /* Internet Explorer */
                    ;-o-box-shadow:      3px 3px 3px 0px rgba(0,0,0,0.3) /* Opera */
                    "
        >
        
<%--        <asp:Table ID="Table1" runat="server" GridLines="Both" BorderStyle="Solid" 
                BorderWidth="1" Height="500" Caption="Lista de Ficheros Disponibles">
                <asp:TableHeaderRow BackColor="GrayText" >
                    <asp:TableHeaderCell ForeColor="White"></asp:TableHeaderCell>
                    <asp:TableHeaderCell ForeColor="White">Documento Excel</asp:TableHeaderCell>
                    <asp:TableHeaderCell ForeColor="White">Fecha Subida</asp:TableHeaderCell>
                    <asp:TableHeaderCell ForeColor="White">Fecha Fichero</asp:TableHeaderCell>
                </asp:TableHeaderRow>
            </asp:Table>
--%>            

            <div style="z-index:1
                       ;width:100%
                       ;border:solid #0ff 0px
                       ;padding:0px
                       ;margin:0px;font-family:Proxima Nova, Century Gothic
                       ;font-size:8pt
                       ;font-weight:normal
                       ;text-align:left
                       ;background-color:#fff
                       
                       /*;border-radius:         10px 10px 10px 4px
                       ;-ms-border-radius:     10px 10px 10px 4px
                       ;-moz-border-radius:    10px 10px 10px 4px
                       ;-webkit-border-radius: 10px 10px 10px 4px
                       ;-khtml-border-radius:  10px 10px 10px 4px*/
                             
                       ;box-shadow:         3px 3px 3px 0px rgba(0,0,0,0.3) /* CSS3 */                    
                       ;-webkit-box-shadow: 3px 3px 3px 0px rgba(0,0,0,0.3) /* Safari and Chrome */
                       ;-moz-box-shadow:    3px 3px 3px 0px rgba(0,0,0,0.3) /* Firefox */
                       ;-ms-box-shadow:     3px 3px 3px 0px rgba(0,0,0,0.3) /* Internet Explorer */
                       ;-o-box-shadow:      3px 3px 3px 0px rgba(0,0,0,0.3) /* Opera */
                       
                       ">

                <table style="table-layout:fixed
                             ;border-collapse:collapse
                             ;border:solid #000000 0px
                             ;padding: 0px
                             ;width:100%;
                             ">
                    <tr>
                        <td style="width:15%;border:solid #000 0px;"></td>
                        <td style="width:30%;border:solid #fff 1px;background-color:#baa;color:#fff;text-align:center;">Fichero</td>
                        <td style="width:10%;border:solid #fff 1px;background-color:#baa;color:#fff;text-align:center;">Fecha</td>
                        <td style="width: 5%;border:solid #fff 1px;background-color:#baa;color:#fff;text-align:center;">Cód.Db</td>
                        <td style="width:15%;border:solid #fff 1px;background-color:#baa;color:#fff;text-align:center;">Formato</td>
                        <td style="width:10%;border:solid #fff 1px;background-color:#baa;color:#fff;text-align:center;">Estado</td>
                        <td style="width: 5%;border:solid #000 0px;"></td>
                        <td style="width: 5%;border:solid #000 0px;"></td>
                        <td style="width: 5%;border:solid #000 0px;"></td>
                        <td style="width:15px;background-color:#fff;color:#fff;border:solid #000 0px"></td>
                    </tr>
                </table>

            </div>

            <div id="lista_ficheros" runat="server" 
                 style="overflow:scroll
                       ;z-index:1
                       ;width:100%
                       ;border:solid #ff0 0px
                       ;padding:0px
                       ;margin:0px
                       ;font-family:Proxima Nova, Century Gothic
                       ;font-size:8pt
                       ;font-weight:normal
                       ;text-align:left
                       ;min-height:200px
                       ;max-height:400px
                       ;background-color:#fff">
            </div>
            <p></p>

        </div>  
        
        <asp:Panel ID="panel_de_subida" 
            runat="server" 
            Style="
                 background-color:#fff
                ;color:Black
                ;border-width:1px 3px 3px 1px
                ;border-style:solid
                ;border-color:#555
                    
                /*;border-radius:         10px 10px 10px 10px
                ;-ms-border-radius:     10px 10px 10px 10px
                ;-moz-border-radius:    10px 10px 10px 10px
                ;-webkit-border-radius: 10px 10px 10px 10px
                ;-khtml-border-radius:  10px 10px 10px 10px*/
                             
                ;box-shadow:         3px 3px 3px 0px rgba(0,0,0,0.3) /* CSS3 */                    
                ;-webkit-box-shadow: 3px 3px 3px 0px rgba(0,0,0,0.3) /* Safari and Chrome */
                ;-moz-box-shadow:    3px 3px 3px 0px rgba(0,0,0,0.3) /* Firefox */
                ;-ms-box-shadow:     3px 3px 3px 0px rgba(0,0,0,0.3) /* Internet Explorer */
                ;-o-box-shadow:      3px 3px 3px 0px rgba(0,0,0,0.3) /* Opera */
            " 
            CssClass="modalpopup">
            
            <asp:Panel ID="panelsubir" runat="server"  
                 Style="cursor:move;background-color:#fff;border:solid 0px Gray;color:Black">
                <div id="lbestadofichero">Seleccionar Tipo Fichero:</div>
                <asp:DropDownList ID="cb_formato_fichero" runat="server" onchange="WExtension_Formato();"></asp:DropDownList>
                <br />
            </asp:Panel>

            <ajaxtool:AsyncFileUpload 
                ID="asyncupload" 
                runat="server" 
                OnClientUploadComplete="uploadcomplete"
                OnClientUploadError="uploaderror" 
                OnClientUploadStarted="uploadStart"
                ThrobberID="subiendo"
            />

            <br />
            <img alt="" src="" id="img1" style="width:60px;display:none" /> 
            <br />
            <img alt="" id="subiendo" src="img/transmision.gif" style="display:none" />
            <br />
            <asp:Button ID="btnok" runat="server" Text="OK" />
            <asp:Button ID="btncancel" runat="server" Text="Cancelar" />

        </asp:Panel>
 

        <ajaxtool:ModalPopupExtender 
           id="modalpopup" 
           runat="server" 
           Drag="true" 
           BackgroundCssClass="modalbackground" 
           Y="100" 
           X="250"
           TargetControlID="btnadd" 
           PopupControlID="panel_de_subida" 
           PopupDragHandleControlID="panelsubir"
           OkControlID="btnok" 
           OnOkScript="_ok()" 
           CancelControlID="btncancel" 
           OnCancelScript="_cancel()" >
        </ajaxtool:ModalPopupExtender>
          
    </div>

    <div id="resultado_proceso"
         style="overflow:auto
                ;z-index:1
                ;position:relative
                ;top:10px 
                ;width:90%
                ;border-width:1px 3px 3px 1px
                ;border-style:solid
                ;border-color:#555
                ;padding:10px
                ;margin:0px
                ;font-family:Proxima Nova, Century Gothic
                ;font-size:8pt
                ;font-weight:normal
                ;text-align:left
                ;min-height:200px
                ;max-height:400px
                ;background-color:#ffa

                /*;border-radius:         10px 10px 10px 4px
                ;-ms-border-radius:     10px 10px 10px 4px
                ;-moz-border-radius:    10px 10px 10px 4px
                ;-webkit-border-radius: 10px 10px 10px 4px
                ;-khtml-border-radius:  10px 10px 10px 4px*/
                             
                ;box-shadow:         3px 3px 3px 0px rgba(0,0,0,0.3) /* CSS3 */                    
                ;-webkit-box-shadow: 3px 3px 3px 0px rgba(0,0,0,0.3) /* Safari and Chrome */
                ;-moz-box-shadow:    3px 3px 3px 0px rgba(0,0,0,0.3) /* Firefox */
                ;-ms-box-shadow:     3px 3px 3px 0px rgba(0,0,0,0.3) /* Internet Explorer */
                ;-o-box-shadow:      3px 3px 3px 0px rgba(0,0,0,0.3) /* Opera */
                "
                >
    </div>

    <%-- ****************** --%>
    <!-- Division de Espera -->
    <%-- ****************** --%>

    <div id='DivWait' runat="server" style="display:none;position:absolute; width:100%; height:100%; left:0px; top:0px;background: rgba(0, 0, 0, 0.3);">
        <table style="width:100%;height:100%;border:solid 0px;">
            <tr>
                <td align="center" valign="middle">
                    <asp:Image ID="im_wait" runat="server" ImageUrl="img/big-roller.gif" style="width:96px" />
                </td>
            </tr>
        </table>
    </div>

</asp:Content>
