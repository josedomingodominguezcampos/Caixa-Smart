<%@ Page Title="Acerca de nosotros" Language="vb" MasterPageFile="~/VS.Master" AutoEventWireup="false" CodeBehind="About.aspx.vb" Inherits="THERION.About" %>
<%@ MasterType virtualpath="~/VS.master" %>
<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="ajaxtool" %>

<asp:Content ID="HeaderContent" runat="server" ContentPlaceHolderID="HeadContent">

    <script type="text/javascript">
       var im_wait = '<%=im_wait.ClientID %>'
       var div_wait = '<%=DivWait.ClientID %>'
   </script>

</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <%-- ************* --%>
    <!-- ScriptManager -->
    <%-- ************* --%>
    <asp:ScriptManager ID="ScriptManager1" runat="server" EnableScriptGlobalization="True" EnableScriptLocalization="True" ScriptMode="Release" EnablePageMethods="true">
       <Scripts>
            <asp:ScriptReference Path="~/js/_general.js" ScriptMode="Auto" />
       </Scripts>
       <Services>
            <asp:ServiceReference Path="~/WS/WS_general.asmx" />    
       </Services>
    </asp:ScriptManager>

    <!-- ****************** -->
    <!-- Division de Espera -->
    <!-- ****************** -->

    <div id='DivWait' runat="server" style="border:solid 0px #a00;display:none;position:absolute; width:100%; height:100%; left:0px; top:0px;background: rgba(0, 0, 0, 0.4);overflow:hidden;">
        <table style="width:100%;height:100%;border:solid 0px;">
           <tr>
             <td align="center" valign="middle">
               <asp:Image ID="im_wait" runat="server" ImageUrl="img/big-roller.gif" style="width:96px"/>
             </td>
           </tr>
        </table>
    </div>

    <div ID="Div1" runat="server" style="text-align:center">
        <p><font lang="ES">APLICACION de GESTION</font></p>
        <p>CopyRight</p>
        <p>Power by Zarentia S.L.</p>
    </div>

    <div ID="propiedades" runat="server" style="text-align:center"></div>

</asp:Content>
