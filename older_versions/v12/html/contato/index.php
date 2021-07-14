<?php include('../includes/head.php'); ?>

<title>Leonardo Maia &gt; Contato</title>

</head> 

<body class="contato">

<div id="wrapper">

	<?php include('../includes/header.php'); ?>
	
	<div id="content">
		<h2 class="titulo-secao">Contato</h2>
		
		<form id="formContato" method="post" action="enviar.php" name="formcheck" onSubmit="return formCheck(this);"> 
			<input type=hidden name="recipient" value="contato@leonardomaia.com.br">
			<input type="hidden" name="redirect" value="http://www.leonardomaia.com.br/contato/reply.php" />
			<input type="hidden" name="subject" value="contato pelo site" />
			
            <p><label>Nome</label>
            <input type="text" id="nome" name="nome" /></p> 
            
            <p><label>E-mail</label>
            <input type="text" id="email" name="email" /></p>
			
			<p><label>Assunto</label>
            <input type="text" id="assunto" name="assunto" /></p>
            
            <p><label>Mensagem</label>
            <textarea name="mensagem" cols="20" rows="10"></textarea></p>
    		<p><input type="submit" name="submit" value="enviar"></p> 
		</form> 
        
        <div id="iM">
            <h3>Outras formas</h3>
            
            <ul>
            	<li><strong>gtalk:</strong> megaestupido@gmail.com</li>
        		<li><strong>skype:</strong> leommaia</li>
            	<li><strong>facebook:</strong> <a href="http://www.facebook.com/leommaia" target="_blank">@leommaia</a></li>
            	<li><strong>twitter:</strong> <a href="http://www.twitter.com/leommaia" target="_blank">@leommaia</a></li>
            </ul>
        </div><!--/iM-->
        
        <br class="clear" />
		
	</div><!--/content-->
	
</div><!--/wrapper-->

<?php include('../includes/google-analytics.php'); ?>

</body>
</html>