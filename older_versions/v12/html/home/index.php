<?php include('../includes/head.php'); ?>

<!-- easySlider --> 
<script type="text/javascript" src="../js/jquery.js"></script> 
<script type="text/javascript" src="../js/easySlider1.7.js"></script> 
<script type="text/javascript"> 
	$(document).ready(function(){	
		$("#slider").easySlider({
			auto: true, 
			continuous: true
		});
	});	
</script> 
<link href="../css/easyslider.css" rel="stylesheet" type="text/css" media="screen" /> 
<!-- easySlider --> 

<title>Leonardo Maia - design / web / interface / ilustração</title>

</head> 

<body class="home">

<div id="wrapper">

	<?php include('../includes/header.php'); ?>
	
	<div id="content">
		
		<div id="slider"> 
			<ul>
            	<li><a href="http://www.deverasbacana.com.br/" title="Deveras Bacana" target="_blank">
                <span><strong>Deveras Bacana</strong> / site em html5 + css</span>
                <img src="../portfolio/destaques/deveras-bacana.jpg" width="700" height="528" alt="Deveras Bacana" /></a></li>
				<li><a href="http://www.alunes.com.br/" title="Alunes" target="_blank">
                <span><strong>Alunes</strong> / site em html5 + css</span>
                <img src="../portfolio/destaques/alunes.jpg" width="700" height="528" alt="Alunes" /></a></li>
                <li><a href="http://www.petz.com.br/" title="Petz" target="_blank">
                <span><strong>Petz</strong> / site em html5 + css</span>
                <img src="../portfolio/destaques/petz.jpg" width="700" height="528" alt="Petz" /></a></li>
                <li><a href="http://www.telelistas.net/mobile" title="TeleListas.net Mobile" target="_blank">
                <span><strong>TeleListas.net Mobile</strong> / design de aplicativo para iPhone</span>
                <img src="../portfolio/destaques/telelistas-mobile.jpg" width="700" height="528" alt="TeleListas.net Mobile" /></a></li>
			</ul> 
		</div><!-- slider --> 
		
	</div><!--/content-->
	
</div><!--/wrapper-->

<?php include('../includes/google-analytics.php'); ?>

</body>
</html>