<?php
session_start();
// S'il n'éxiste pas  de variable de session $_SESSION["commentaires"] (!isset($_SESSION["commentaires"]) )
// on va en créer une avec des fakes infos
if (!isset($_SESSION["commentaires"])) { 
	$_SESSION["commentaires"] = array(
		array("Pata_Pizza06", "img/user.png", "Trop bien tes recettes ! Moi je suis fan de la fanitude de ta page et même avec du beurre ! Continue comme ça c'est top classe ça déchire !"),
		array("Unicorn789", "img/user2.jpg", "C'est super simple quand tu expliques, c'est magique ! Tu pourras faire une recette sur Mon Petit Poney ou Lego Friends ? Ce serait vraiment cooool !"),
		array("Topito", "img/user3.png", "J'ai réalisé le crumble il est vraiment top ! Attention à votre grill s'il est fort ! J'ai presque brûlé moi ouf !")
	);
}
// on crée une variable $commentaires qu'on réutilisera plus tard
$commentaires = $_SESSION["commentaires"]
?>

<!DOCTYPE html>
<html>
<head>
<title>Le Livre d'Or</title>
	<head>
        <title>Gastronogeek</title>
        <meta charset="utf-8">
        <link rel="stylesheet" type="text/css" href="css/styles.css">
        <link rel="stylesheet" href="css/coin-slider-styles.css" type="text/css" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">        
        <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>        
        <script type="text/javascript" src="js/script.js"></script>
        <script type="text/javascript" src="js/nav.js"></script>
        <script type="text/javascript" src="js/search.js"></script>
        <script type="text/javascript" src="js/contact-script.js"></script>
        <script type="text/javascript" src="js/fct2.js"></script>
        <script type="text/javascript" src="js/coin-slider.js"></script>
        <link href="https://fonts.googleapis.com/css?family=Baumans" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Orbitron" rel="stylesheet">
    </head>
	<body>
		<header>
			<div id="top_image" class="wrapper">
				<a href="index.html"><img src="img/gastronogeek.png"></a>
			</div>
			<div class="wrapper">
				<nav class="navbar">
					<ul class="nav nav-justified">
						<li class="nav-item"><button class="btn"><a href="index.html">Accueil</a></button></li>
						<li class="nav-item">
							<div class="dropdown">
								<div class="btn-group">
									<button class="btn"><a href="recettes.php">Recettes</a></button>
									<button type="button" class="btn dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" style="color: white"></button>
									<ul class="dropdown-menu multi-column columns-2">
							            <div class="row">
								            <div class="col-sm-6">
									            <ul class="multi-column-dropdown">
										            <li><a href="#">Entrées</a></li>
													<li><a href="#">Plats</a></li>
													<li><a href="sconespecan.html">Desserts</a></li>
													<li><a href="#">Potions</a></li>
									            </ul>
								            </div>
								            <div class="col-sm-6">
									            <ul class="multi-column-dropdown">
										            <li><a href="#">Fantaisie</a></li>
													<li><a href="#">Fantastique</a></li>
													<li><a href="#">Mangas</a></li>
													<li><a href="#">Science-Fiction</a></li>
									            </ul>
								            </div>
							            </div>
							        </ul>
								</div>
							</div>
						</li>
						<li class="nav-item"><button class="btn"><a href="videos.html">Videos</a></button></li>
						<li class="nav-item"><button class="btn"><a href="boutique.html">Boutique</a></button></li>
						<li class="nav-item"><button class="btn"><a href="livre.php">Livre d'Or</a></button></li>
						<li class="nav-item"><button class="btn"><a href="evenements.html">Evenements</a></button></li>
						<li class="nav-item"><button class="btn"><a href="contact.html">Contact</a></button></li>
					</ul>
				</nav>
			</div>
	


<!--début deLIVRE-->


			<div class="wrapper"><br>
					<!--formulaires pseudo image et comm-->
					<br>
					<br>
					<br>
				<div class="bilform">

					<!--Début de mon formulaire-->
					<form method="post" class="psd" action="livre.php"  enctype="multipart/form-data">
						<!--Pseudo-->
						<label for="pseudo">Pseudo</label><br />
						<input type="text" name="pseudo" id="pseudo" placeholder="Ex: BenduLuc" maxlength="8" /><br />

						<!--Image à télécharger-->
						<i class="glyphicon glyphicon-plus"></i><br /><br />
        				<label for="fileupload">Image</label><br />
        				<input id="file" type="file" name="file" height="20"><br /><br />

						<!--La zone Commentaire-->
						<label for="Comment">Commentaire</label><br />
						<textarea name="Comment" id="Comment" rows="10" cols="75" placeholder="Saisir un commentaire ici..."></textarea><br />

						<!--Mon bouton "valider"-->
						<input type="submit" name="valider" id="valider" value="Valider">
					</form>
				</div>
				<hr><br>
				
					<?php 

						// // Test si le formulaire a été posté
						
						// 	// Récupération du chemin de l'image
						// 	$image = "img/" . basename($_FILES["file"]["name"]);
						// // 	// On déplace l'image dans le dossier d'images 
						// 	move_uploaded_file($_FILES["file"]["tmp_name"], $image);
							if(isset($_POST["valider"])) { 
							// Création d'un tableau avec les informations qui ont été postées (le pseudo, l'image, le commentaire)
							$com = array($_POST["pseudo"], "", $_POST["Comment"]);
							// Ajout du commentaire posté dans le tableau des commentaires sauvegardés en session
							array_unshift($_SESSION["commentaires"], $com);
							$commentaires = $_SESSION["commentaires"];
							// Affichage du commentaire posté
						}

						// Parcours les commentaires sauvegardés en session
						// Démarre de 0 ($i = 0)
						// Tant que le compte des commentaires est inférieur à $i (count($commentaires) - 1)
						// 
						// Si on a 3 commentaires dans $commentaires
						// count($commentaires) sera égal à 3
						// Les index de l'array vont de 0 à 2
						// Si on laisse $i < count($commentaires) sans rajouter le - 1
						// On aura une erreur lors du dernier passage dans la boucle puisque l'index 3 n'éxiste pas dans le tableau
						//
						// Et on incrémente de 1 à chaque boucle ($i++)
						for ($i=0; $i <= count($commentaires) - 1; $i++) {
							// Affichage du commentaire correspondant à l'index en cours
							displayCommentaire($commentaires[$i]);
						}

						// Fonction Affiche un commentaire
						// Les fonctions permettent d'effectuer un traitement qui peuvent être plusieurs fois
						// Ca evite de faire des copier/coller avec les mêmes portions de code partout
						function displayCommentaire($com) {
							?>
							<div class="billet">
							<img src="<?php echo $com[1]; ?>" width="80" class="bilimage">
							<h6 class="biltitre"> <?php echo $com[0]; ?> </h6>
							<p class="biltext"> <?php echo $com[2]; ?> </p>
							</div>
							<?php
						}

// session_destroy();

					?>

			</div>
		</header>
		<footer>
			<div class="wrapper">
				<div class="footer">
					<ul>
						<li><a href="https://www.facebook.com/gastronogeek/?fref=ts"><img src="img/facebook.png"></a></li>
						<li><a href="https://twitter.com/gastronogeek?lang=fr"><img src="img/twitter.png"></a></li>
						<li><a href="https://www.instagram.com/gastronogeek/"><img src="img/insta.png"></a></li>
						<li><a href="https://www.youtube.com/channel/UCfI1q93ZYNR_mJYKFEqxfrA"><img src="img/youtube.png"></a></li>
					</ul>
					<div class="copyright">
				<p>2016 © GASTRONOGEEK</p>
				</div>	
				<div class="mentions_legales">
					<p><a href="mentions.html">Mentions Légales</a></p>
				</div>
			</div>
		<footer>
	</body>
</html>



