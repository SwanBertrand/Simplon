<!DOCTYPE html>
<html>
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
				<div class="wrapper">
					<form action="recettes.php" method="post" class="formulaire_recherche">
							<label for="research" id="label_recherche">Recherche :</label>
							<input type="text" id="research" name="research" class="form-control" style="width: 50%">
							<input type="submit" value="Rechercher" id="btn_research">
							<!-- <button type="submit" value="envoyer" id="btn_research" class="btn btn-default">Rechercher</button> -->
					</form>
					<div class="recherche">
					<?php
						$tab_search=array();
						$longeur_tableau;
						$id;
						$research;
						
						try{
							$bdd = new PDO('mysql:host=localhost;dbname=gastronogeek;charset=utf8', 'root', 'gastronogeek');
						}
						catch(Exception $e){
 					       die('Erreur : '.$e->getMessage());
						}
						
						//Si j'ai une recher de faite
						//je l'insère dans la BDD
						if (isset($_POST['research'])){  
    						if (!empty($_POST['research'])){
    							$req = $bdd->prepare('INSERT INTO tab_search(research) VALUES(:research)');
    							$req->execute(array(
								'research' => $_POST['research'],
								));
    						}
    					}					

    					//Affichage des 5 dernières recherches à l'arrivée sur la page
						$reponse = $bdd->query('SELECT research FROM tab_search ORDER BY id DESC LIMIT 5');
						$tab_search = $reponse->fetchAll();
						//var_dump($tab_search);
						//exit;
						echo '<div><p class="recent_research">Récemment recherché :<br/><p class="recent_research">';
						foreach ($tab_search as $row){
							echo $row['research'].' ';
						}
						echo '</p></div>';

						?>
					</div>
				</div>
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
					<div>
				</div>
			<footer>
	</body>
</html>