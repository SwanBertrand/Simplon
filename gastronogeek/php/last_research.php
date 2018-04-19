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
            echo '<p>Récemment recherché:<br/><p class="recent_research"">';
            foreach ($tab_search as $row){
              echo $row['research'].' ';
            }
            echo '</p>';

            ?>