<%@ Page Title="Modulo No Operativo" Language="vb" AutoEventWireup="false" MasterPageFile="~/VS.Master" CodeBehind="nooperativo.aspx.vb" Inherits="THERION.nooperativo" %>
<%@ MasterType virtualpath="~/VS.master" %>
<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="ajaxtool" %>

<asp:Content ID="HeaderContent" runat="server" ContentPlaceHolderID="HeadContent"></asp:Content>

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

    <div ID="Div1" runat="server" style="text-align:center">
        <h2>APLICACION DE GESTION</h2>
        <p>El módulo no está operativo actualmente</p>
    </div>
    <div ID="propiedades" runat="server" style="text-align:center"></div>
</asp:Content>
