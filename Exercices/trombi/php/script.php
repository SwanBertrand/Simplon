<?php

	$host_name = 'db734916633.db.1and1.com';
	$database = 'db734916633';
	$user_name = 'dbo734916633';
	$password = 'Simplon_Cannes06';

	$bdd = null;
	try {
	  $bdd = new PDO("mysql:host=$host_name; dbname=$database;", $user_name, $password);
	} catch (PDOException $e) {
	  echo "Erreur!: " . $e->getMessage() . "<br/>";
	  die();
	}

	if(isset($_GET["id"])){

		$maReponse = array();

		$reponse = $bdd->query('SELECT `name`, `parcours` FROM `trombinoscope` WHERE `id` = "'.$_GET["id"].'"');
		$donnees = $reponse->fetchAll();
		$row = $donnees[0];
				$maReponse = array('name'=>$row["name"], 'parcours'=>$row["parcours"]);

		echo json_encode($maReponse);

	}

	$reponse = null;
	$bdd = null;

?>