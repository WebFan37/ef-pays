<?php 
/**
 * Package Voyage
 * Version 1.0.0
 */
/*
Plugin name: pays
Version: 1.0.0
Description: Permet d'afficher les pays qui répondent à certains critères
*/
function janne_enqueue()
{
// filemtime // retourne en milliseconde le temps de la dernière modification
// plugin_dir_path // retourne le chemin du répertoire du plugin
// __FILE__ // le fichier en train de s'exécuter
// wp_enqueue_style() // Intègre le link:css dans la page
// wp_enqueue_script() // intègre le script dans la page
// wp_enqueue_scripts // le hook

$version_css = filemtime(plugin_dir_path( __FILE__ ) . "style.css");
$version_js = filemtime(plugin_dir_path(__FILE__) . "js/pays.js");
wp_enqueue_style(   'em_plugin_pays_css',
                     plugin_dir_url(__FILE__) . "style.css",
                     array(),
                     $version_css);

wp_enqueue_script(  'em_plugin_pays_js',
                    plugin_dir_url(__FILE__) ."js/pays.js",
                    array(),
                    $version_js,
                    true);
}
add_action('wp_enqueue_scripts', 'janne_enqueue');
/* Création de la liste des destinations en HTML */



function creationBoutonPays(){
      // Récupérer toutes les pays
      $categories = get_categories();

        $contenu = '';
        
      // Parcourir chaque pays
      foreach ($categories as $category) {

          // Récupérer les informations du pays
          $cat_name = $category->name;
         $id = $category->term_id;
         $contenu .= '<button id="cat_'.$id.'" class="lien__pays">'.$cat_name.'</button>';
      }

      // Retourner le contenu de bouton et les destinations
      return $contenu;
}



function creation_description(){


    //Nouveau variable pour le contenu
    // contient la fonction pour creation des les boutons  et la div pour les destinations
    $contenu = creationBoutonPays(). '<div class="contenu__restapi__pays"></div>';

    //retourne le contenu de bouton et les destinations
    return $contenu;
}
// Ajouter SHORTCODE [em_destination] pour afficher les destinations
// C'EST EN EFFET UN HOOK ! POUR appeller la fonction creation_description
add_shortcode('em_pays', 'creation_description');
?>