<%@ Page Title="Iniciar sesión" Language="vb" MasterPageFile="~/VS.Master" AutoEventWireup="false"  CodeBehind="login.aspx.vb" Inherits="THERION.Login" %>

<asp:Content ID="HeaderContent" runat="server" ContentPlaceHolderID="HeadContent">
    
    <style type="text/css">
        .sublt  {font-variant:small-caps; font-size:13px; font-weight:400; color:Blue}
        .butt   {font-variant:small-caps; font-size:13px; font-weight:400; color:Black}
        .prilt  {font-variant:small-caps; font-size:13px; font-weight:400; color:Blue}
        .bldato {border: 1px solid #dddddd; background-color: #eeeeee; color: #000000}
    </style>
    
   <script type="text/javascript">
       var LoginButton = '<%=LoginButton.ClientID %>';
       var im_wait = '<%=im_wait.ClientID %>';
       var div_wait = '<%=DivWait.ClientID %>';
       // ---------------------
          function Logear() {
       // ---------------------
          var boton = document.getElementById(LoginButton);
          if (boton) { boton.click()} else { alert("No encuentro el botón")}
        }
   </script>

</asp:Content>

<asp:Content ID="cuerpologin" runat="server" ContentPlaceHolderID="MainContent" style="height:99%;width:100%;margin:auto;border:solid 0px #a00">

        <!-- ****************** -->
        <!-- ScriptManager      -->
        <!-- ****************** -->

        <asp:ScriptManager ID="ScriptManager1" runat="server" EnableScriptGlobalization="True" EnableScriptLocalization="True" ScriptMode="Release">
            <Scripts><asp:ScriptReference Path="~/js/mantenimiento.js"  ScriptMode="Auto" /></Scripts>
            <Scripts><asp:ScriptReference Path="~/js/JSnego.js"         ScriptMode="Auto" /></Scripts>
            <Scripts><asp:ScriptReference Path="~/js/_general.js"       ScriptMode="Auto" /></Scripts>
            <Scripts><asp:ScriptReference Path="~/js/dpicker.js"        ScriptMode="Auto" /></Scripts>
            <Scripts><asp:ScriptReference Path="~/js/cascading.js"      ScriptMode="Auto" /></Scripts>
            <Scripts><asp:ScriptReference Path="~/js/descargarfiles.js" ScriptMode="Auto" /></Scripts>
            <Scripts><asp:ScriptReference Path="~/js/login.js"          ScriptMode="Auto" /></Scripts>
            <Services><asp:ServiceReference Path="~/WS/WSmantenimiento.asmx" /></Services>
            <Services><asp:ServiceReference Path="~/WS/WSnego.asmx" /></Services>
            <Services><asp:ServiceReference Path="~/WS/WS_general.asmx" /></Services>
            <Services><asp:ServiceReference Path="~/WS/WSlogin.asmx" /></Services>
        </asp:ScriptManager>

		<!-- ****************** -->
		<!-- Division de Espera -->
		<!-- ****************** -->

		<div id='DivWait' runat="server" style="border:solid 0px #a00;display:none;position:absolute;width:100%;height:100%;left:0px;top:0px;background:rgba(0,0,0,0.4);overflow:hidden;">
			<table style="width:100%;height:100%;border:solid 0px;margin:auto">
			<tr>
				<td align="center" valign="middle">
					<asp:Image ID="im_wait" runat="server" ImageUrl="img/big-roller.gif" style="width:5vw;height:auto;"/>
				</td>
			</tr>
			</table>
		</div>

		<!-- ****************** -->
		<!-- Login y Dashboard  -->
		<!-- ****************** -->

        <div id="LoginFondo" style="height:98%;width:100%;margin:auto;border:solid 0px #a00">
			<div id="login" runat="server" style="padding-bottom:2vw;padding-top:4vw;width:100%;height:auto;text-align:center;margin:auto;border:solid 0px #a00">
				<div style=" width                :35vw
							;margin-left          :3%
							;padding-bottom       :2vw
							;padding-top          :2vw
							;border               :solid 1px #eee
							;background-color     :rgba(220,220,220,0.7)
							;border-radius        :10px 10px 10px 10px
							;-ms-border-radius    :10px 10px 10px 10px
							;-moz-border-radius   :10px 10px 10px 10px
							;-webkit-border-radius:10px 10px 10px 10px
							;-khtml-border-radius :10px 10px 10px 10px
							;box-shadow           :5px 15px 15px 0px rgba(0,0,0,0.3)
							;-webkit-box-shadow   :5px 15px 15px 0px rgba(0,0,0,0.3)
							;-moz-box-shadow      :5px 15px 15px 0px rgba(0,0,0,0.3)
							;-ms-box-shadow       :5px 15px 15px 0px rgba(0,0,0,0.3)
							;-o-box-shadow        :5px 15px 15px 0px rgba(0,0,0,0.3)
							">

					    <asp:Label lang="TRADUCIR" runat="server" style="vertical-align:middle;font-size:2vh;font-weight:bold;"><font lang='ES'>Introducir Credenciales Acceso</font></asp:Label>
						<p style="height:0.5vw;border:solid 0px #000"></p>
						<table style="border-collapse:collapse;text-align:center;width:100%;border:solid 0px #e00;margin:auto">
							<tr>
								<td style="width:10%;text-align:right;" rowspan="2">
									<img alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAEa0lEQVRoQ9WZP3bbRhDGvyFURE4h+gRROossTBd5ASsBN6BOYPsEpk8g6gSWTxD7BOENAFVkXgpTBel0Vk4QqnDiQuDkzQILQRQgLIiFRaIkF4v9YWa++QOC4RX80u219vCSGT0QtwHqxbfyDExLIsxWN/jo/zmfGW5pdRmV7Xbhdk6ZaAigXbY2+X9JzOfH08WZ4XorywpBgv7RgJjegehQvXfw3wDG4NUYkbPUb14sBSdqg1oDAAMC/RQbiq+Y+K0/+Ty2ctKSTXJBEiuM4vPgAohG/vSv0ORAgfvMA5wREY5lPTGPvod17oGEbuc3EL2KrbCSN3puArC+JugfDQmtd4l1PnjTxetN9jG95w5I4HZGRHTKjGtE8OoGbmKdMREOmPnMny6UlZu4UhAVE2j9rixxgxd1IfRhBYbICRILnzQVMylI6Ha+SGAXuVMcNxjEssszYoxNfT91M+Yrb7r4uTGLZFzqwp/OvfUHhf3Op9u8kf2XZ95k8cLkYIHbDUUAmnIxZZGw3/1H8gRz5K+rUwbyEoiG8v8mvp9xsaU3mT81ga+yhiQP0B4+SZ7wJwuVM7KXtsY6pI4pkec8K+YdIuh3riTP2IxB/RwK+p1zAr1h8Ht/spAMvgbSZfnBm8zvS3W/+L8CkAefVcUC62vp1nfvu5UsDtzujAjPrVgkUbAqVjSFo9R1CiRXx4gqObB6rWOEyBGpblcJXu3GonqmIlEBpNw9tFXWN2XGpT+dJ1Ww2SPDiu5otitAphuLZQDyYgmV+ovDTTK16fNMAW6DXceAxWxedIgyhax6+Oz60mCvs/n6vTqXNBLsZfJrFURLfQMFZJoQRZWaqoP0y0jruZwKou4LU0kucLvScx/klSh1H6Dvz1bBIr/837++P7ta2to/AYn7EDBCbzr3bW1+p9RxuwEInvQ68tJsw2T6kaQOqtEVFqpV0i2qvp9X0gpLs/XcJsz3bayS2Ah6h2388KOU9dZgcltdAEu+gV+3S0ziIi5l1opS2zD3KtrA7X4gwktxE1qthsd/fH6/Scxc/Hr0hlstNbhgxkd/OlcDjexlEyZ3HJQWiuoUCBnRWZVxEME5lcCOIR4eOtiCeXBAB5D0D+nAjYjGhGgc3TjX2QGdsxcdMJwBMw/uDvR4WDRsUAAARIJtwJSOTJNicRhLptlV1KSlOaV32Kb9J/FkJckndWFKQdKHy2h0j1+B1fC6HSuO8v9rADOphgEamChR0aHrwBiDmNiiykFsw1gFUeVOhRxhE8Y6yGPBNAJyHybfMfVkxoZlGgMxgcmOmOrCNApSJBBFfXsdmK0CeSi+ykRk60A2hXlUkDzXqyoAetC3tSClltl/MssOxB8FJM8SlQUgaTf0h6mtBymyDPb3PflUqGdkOwGSC8OrEyLnS1xBf326dSCVBICJ1CcPrE52CqSoWpBWemtANhcAdedyJ0GUZdxnh2mMMC53EkTKlbhVpp58bMK3r95OgBQVnxpCBhg7C5KFEND/ASWRAuVXSOeNAAAAAElFTkSuQmCC" style="height:auto; width:1.5vw" />
								</td>
								<td style="width:20%;text-align:right;padding-right:0.3vw;">
									<asp:Label ID="UserNameLabel" lang="TRADUCIR" runat="server" style="vertical-align:middle;font-size:1vh" AssociatedControlID="UserName" ><font lang='ES'>Nombre Usuario</font>: </asp:Label>
								</td>
								<td style="width:auto;text-align:left">
								   <asp:TextBox ID="UserName" runat="server" TextMode="SingleLine" MaxLength="150" style="vertical-align:middle;width:15vw;font-size:1.5vh"
										onkeyup=" var evtobj = window.event ? event : e; 
												  var unicode = evtobj.charCode ? evtobj.charCode : evtobj.keyCode; 
												  if (unicode == 13) { Logear() }" > 
								   </asp:TextBox>
								</td>
							</tr>
							<tr>
								<td style="text-align:right;padding-right:0.3vw">
									<asp:Label ID="PasswordLabel" lang="TRADUCIR" runat="server" style="vertical-align:middle;font-size:1vh"  AssociatedControlID="Password" > <font lang='ES'>Contraseña</font>:</asp:Label>
								</td>
								<td style="text-align:left">
									<asp:TextBox ID="Password" runat="server" TextMode="Password" MaxLength="150" style="vertical-align:middle;width:15vw;font-size:1.5vh"
										onkeyup=" var evtobj = window.event ? event : e; 
												  var unicode = evtobj.charCode ? evtobj.charCode : evtobj.keyCode; 
												  if (unicode == 13) { Logear()}" > 
									</asp:TextBox>
								</td>
							</tr>
						</table>
						<table style="padding-top:1.3vh;text-align:center;width:100%;border:solid 0px #e00;margin:auto">
							<tr>
							   <td>
									<asp:Button ID="LoginButton" CssClass="butt" runat="server" lang="TRADUCIR" alt="<font lang='ES'>Iniciar sesión</font>" 
										CommandName="Login" 
										Text="Iniciar Sesión" 
										style="vertical-align:middle;width:auto;font-size:1.5vh"
										ValidationGroup="LoginUserValidationGroup" 
										onclick="LoginButton_Click" >
									</asp:Button>
							   </td>
							</tr>
						</table>
				</div>
			</div>

			<div id="dashboard" runat="server" visible="false" style="padding-top:4vh;text-align:center;width:100%;height:97%;margin:auto;border:solid 0px #0a0"></div>

        </div>

</asp:Content>