<?
##########################################################
/////////////////////////////////////////////////////  ###
/// Autor: Mateus Campos                         ////  ###
/// E-mail: mateuscampos@globo.com               ////  ###
/// Site: www.centralwarez.com                   ////  ###
/// Msn: mateus@centralwarez.com                 ////  ###
/// Obs: favor não retirar os nossos créditos!!! ////  ###
/////////////////////////////////////////////////////  ###
##########################################################

header("Location: http://leonardomaia.com.br/contato/reply.php");

// aqui começa o script
//pega as variaveis por POST
$nome      = $_POST["nome"];
$email   = $_POST["email"];
$assunto   = $_POST["assunto"];
$mensagem  = $_POST["mensagem"];

global $email; //função para validar a variável $email no script todo

$data      = date("d/m/y");                     //função para pegar a data de envio do e-mail

//aqui envia o e-mail para você
mail ("contato@leonardomaia.com.br",                       //email aonde o php vai enviar os dados do form
      "$assunto",
      "Nome: $nome\nData: $data\nE-mail: $email\n\nMensagem: $mensagem",
      "From: $email"
     );

//aqui são as configurações para enviar o e-mail para o visitante
$site   = "leonardomaia.com.br";                    //o e-mail que aparecerá na caixa postal do visitante
$titulo = "Contato Pelo Site";                  //titulo da mensagem enviada para o visitante
$msg    = "$nome, obrigado pelo contato. Já já te retorno. Abs";

//aqui envia o e-mail de auto-resposta para o visitante
mail("$email",
     "$titulo",
     "$msg",
     "From: $site"
    );
?>
