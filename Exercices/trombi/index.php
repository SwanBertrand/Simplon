<?php

	require 'php/script.php';

?>

<!DOCTYPE html>

<html lang="fr">
<meta charset="utf-8">
<link rel="stylesheet" href="css/style.css" />
<link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Quicksand" rel="stylesheet">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<body>
	<section class="trombinoscope"> <!-- Conteneur -->
		<div class="cercle" id="trombiDiv">
			<img id="franck" src="img/Barland_Franck_small.jpg" alt="franck" >
			<img id="ali" src="img/Ben_Ali_small.jpg" alt="ali" >
			<img id="michel" src="img/Bra_Michel_small.jpg" alt="michel" >
			<img id="marvin_w" src="img/Wort_Marvin_small.jpg" alt="marvin_w" >
			<img id="celia" src="img/DeFr_Célia_small.jpg" alt="celia" >
			<img id="gary" src="img/Der_Gary_small.jpg" alt="gary" >
			<img id="fanny" src="img/Duf_Fanny_small.jpg" alt="fanny" >
			<img id="michael" src="img/Dup_Michael_small.jpg" alt="michael" >
			<img id="anne" src="img/Tab_Anne_small.jpg" alt="anne" >
			<img id="valerie" src="img/Baron_Valérie_small.jpg" alt="valerie" >
			<img id="jean-louis" src="img/Jean-Louis_small.jpg" alt="jean-louis" >
			<img id="thibaut" src="img/Khe_Thibaut_small.jpg" alt="thibaut" >
			<img id="lucas" src="img/Lor_Lucas_small.jpg" alt="lucas" >
			<img id="mathieu" src="img/Money_Mathieu_small.jpg" alt="mathieu" >	
			<img id="lucie" src="img/Nej_Lucie_small.jpg" alt="lucie" >
			<img id="nicolas" src="img/Pie_Nicolas_small.jpg" alt="nicolas" >
			<img id="marvin_p" src="img/Poti_Marvin_small.jpg" alt="marvin_p" >
			<img id="floriane" src="img/Mura_Floriane_small.jpg" alt="floriane" >
			<img id="tendry" src="img/Rasa_Tendry_small.jpg" alt="tenders" > <!-- KFC -->
			<img id="swan" src="img/Ber_Swan_small.jpg" alt="swan" >
			<img id="benoit" src="img/Par_Benoit_small.jpg" alt="benoit" >
			<img id="maelie" src="img/Len_Maélie_small.jpg" alt="maelie" >
			<img id="julien" src="img/Rey_Julien_small.jpg" alt="julien" >
			<img id="anna" src="img/Scib_Anna_small.jpg" alt="anna" >
			<img id="jan" src="img/Verm_Jan_small.jpg" alt="jan" >
			<img id="jeremy" src="img/Cin_Jérémy_small.jpg" alt="jeremy" >
			<img id="remi" src="img/Lan_Remi_small.jpg" alt="remi" >
			<img id="cyril" src="img/Enr_Cyril_very_small.png" alt="cyril" > <!-- The most wanted -->
		</div>
		<hr/>
		<div id="individuelle">
			<div class="descriptif">
				<img id="imageDetail" src="img/And_Laurent_small.jpg" alt="une photo" >
			</div>
			<div class="pedigree">
				<h3 id="nomPrenom"></h3>
				<p id="textePerso"></p>
			</div>
		</div>
	</section>
	<script type="text/javascript" src="js/trombi.js"></script>
	<script type="text/javascript" src="js/ajax.js"></script>
</body>
</html>