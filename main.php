<?php
include_once("Personagem.php");
$DragonBall = new Personagem("", "", "", "", "", "", "", "","", "", "", "", "", "", "", "" );
$DB = json_encode($DragonBall);
echo($DB);
