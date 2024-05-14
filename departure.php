<?php
// Démarrer la session PHP
//session_start();

// Vérifier si l'utilisateur est connecté
//if (!isset($_SESSION['logged_in'])) {
//    // Rediriger vers la page de connexion
//    header("Location: login.php");
//    exit();
//}
?>

<?php include 'component/header.php'; ?>



<?php
// Charger le fichier JSON contenant les informations sur les gares
$gares_json = file_get_contents("data/gares.json");
$gares = json_decode($gares_json, true);

// Obtenir la liste des villes disponibles
$villes = array_keys($gares);

// Vérifier si le paramètre 'ville' est défini dans l'URL
if (isset($_GET['ville'])) {
    $ville_selectionnee = $_GET['ville'];
} else {
    // Si aucune ville n'est spécifiée dans l'URL, utiliser la première ville du fichier JSON comme valeur par défaut
    $ville_selectionnee = reset($villes);
}

// Afficher un bouton pour chaque ville
echo '<section classe="villes">';
foreach ($villes as $ville) {
    $classe_bouton = ($ville == $ville_selectionnee) ? 'gare active' : 'gare';
    echo "<button class='$classe_bouton' data-ville='$ville'>$ville</button>";
}
echo '</section>';

// Afficher les gares de la ville sélectionnée
if (isset($gares[$ville_selectionnee])) {
    echo '<div class="gares">';
    foreach ($gares[$ville_selectionnee] as $nom_gare => $identifiant) {
        echo "<button class='gare'>$nom_gare</button>";
    }
    echo '</div>';
} else {
    echo "Aucune information sur les gares pour cette ville.";
}
?>

<?php include 'component/footer.php'; ?>