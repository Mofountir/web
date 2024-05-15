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


    


<section id="dashboard">
    <div class="gares-list" id="garesList">
        <!-- La liste des gares sera chargée ici -->
    </div>
</section>
<section>
    <div id="dashboardContent">
        <!-- Le tableau de bord sera chargé ici -->
    </div>
</section>


<?php include 'component/footer.php'; ?>
