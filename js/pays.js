// (function () {
//     // CODE CONSOLE POUR TESTER LE FONCTIONNEMENT DE CE FICHIER !!!
//     //=====================//
//     console.log("rest API")
//     //=====================//


//     // URL de l'API REST de WordPress
//     // Récupère les boutons de catégories
//     let lien__categorie = document.querySelectorAll(".lien__categorie");

//     //Définir URL de API REST de WordPress 
//     //Par défault catégorie 3 
//     let url = `https://gftnth00.mywhc.ca/tim29/wp-json/wp/v2/posts?categories=3`;

//     //Appeler la fonction myFetch
//     myFetch(url);

//       for (let lien of lien__categorie) {
//         lien.addEventListener("click", function(){

//           //console.log("click" + lien.id);

//           //Récupérer l'id de la catégorie
//           // Utiliser split pour séparer le _ de l'id
//           const id = lien.id.split("_")[1];


//           //console.log(id);
//           //Définir URL en implémenter id qui vient d'être récupéré 
//           //Utiliser ${} ajouter la variable
//           let url = `https://gftnth00.mywhc.ca/tim29/wp-json/wp/v2/posts?categories=${id}`

//           //Appeler la fonction myFetch
//           myFetch(url);
//         });
//       }

  
  
//     // Effectuer la requête HTTP en utilisant fetch()
//     //Ensuite on utilise la méthode then() pour traiter la réponse
    

//     //Définir la fonction myFetch
//     function myFetch(url){

//         //1. fetchURL
//         //2. Si la réponse est OK, donner function(response)
//         fetch(url).then(function (response) {

//             // Vérifier si la réponse est OK (statut HTTP 200)
//             if (!response.ok) {

//               // Si la réponse n'est pas OK, lancer une erreur
//               throw new Error(
//                 "La requête a échoué avec le statut " + response.status
//               );
//             }
      
//             // SI oui
//             // Analyser la réponse JSON
//             return response.json();
//             console.log(response.json());
//           })

//           //3. SI la réponse est OK, donner function(data)
//           .then(function (data) {

//             // La variable "data" contient la réponse JSON
//             //console.log(data);

//             //Ou mettre les donnees de REST API
//             let restapi = document.querySelector(".contenu__restapi");


//             // Maintenant, vous pouvez traiter les données comme vous le souhaitez
//             // Par exemple, extraire les titres des articles comme dans l'exemple précédent

//             //vider le contenu de restapi
//             restapi.innerHTML = ""; 

//             //===============Boucle pour afficher les articles==========//
//               data.forEach(function (article) {
//               let titre = article.title.rendered;

//             //console.log("article", article.guid.rendered);

//               /// On limite le nombre de caractères à 500
//               let contenu = article.excerpt.rendered;
//               contenu = contenu.substring(0, 500);


//               //******AJOUTER la classe restapi__carte **********/

//               //Nouveau variable pour la carte de l'article
//               console.log(titre);
//               let carte = document.createElement("div");
//               carte.classList.add("restapi__carte");

//               // On récupère l'url de l'article et mettre a href
//               let url = article.guid.rendered;
//               let lien = document.createElement("a");
//               lien.classList.add("restapi__carte");

//               //Ajouter image de l'article
//               // let image = document.createElement("img");

//               //NOUVEAU !!!!! 
//               // image.src = article.fimg_url;
//               // image.alt =article.fimg_alt;


//               /*********************************************** */

//               //====================================================================//
            
//             //Ajouter le titre, le contenu et le lien de l'article à la carte
//             carte.innerHTML = `
//               <h2>${titre}</h2>
//               <p>${contenu}</p>
//               <a href="${url}" class="lien__article">LIRE LA SUITE</a>
//               `;
            
//               //Oublie pas appendChild
//             restapi.appendChild(carte);

//             //Ajouter l'image à la carte
//             // restapi.appendChild(image);
//             });
//           })



//           //4. Si la réponse n'est pas OK, donner function(error)
//           //APRES : fetch(url).then(function (response) {function. catch(function(error){})}
          
//           .catch(function (error) {
//             // Gérer les erreurs
//             console.error("Erreur lors de la récupération des données :", error);
//           })
//         };


//   })();