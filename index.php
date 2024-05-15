<?php include 'component/header.php'; ?>

<section id="home">
    <video src="images/train.mp4" autoplay loop muted></video>
    <div class="find_trip">
        <form action="">
            
            <div>
                <label>Ville</label>
                <input type="text" placeholder="Entrez une ville">
            </div>
            <div>
                <label>Région</label>
                <input type="text" placeholder="Entrez une région">
            </div>
            <input type="submit" value="voir">
        </form>
    </div>
</section>

<section id="a-propos">
    <h1 class="title">à propos</h1>
    <div class="img-desc">
       <div class="left">
            <video src="" autoplay loop></video>
       </div>
        <div class="right">
            <h3>Nous voyageons pour chercher d'autres états, d'autres vies, d'autres, âmes.</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ipsam officiis atque, doloremque eos reprehenderit deleniti ipsum dicta aliquid .</p>
            <a href="#">Lire Plus</a>
        </div>
    </div>
</section>

<!-- section départ -->
<section id="popular-destination">
    <h1 class="title">départs populaires</h1>
    <div class="content" id='departures'>
        
    </div>
</section>

<section id="contact">
    <h1 class="title">Contact</h1>
    <form action="">
        <div class="left-right">
            <div class="left">
                <label>Nom Complet</label>
                <input type="text">
                <label>Objet</label>
                <input type="text">
                <label>Email</label>
                <input type="text">
                <label>Message</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <div class="right">
                <label>Numéro</label>
                <input type="text">
                <label>Date</label>
                <input type="text">
                <label>Autres Details</label>
                <input type="text">
                <label>Adresse</label>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.292292615509614!3d48.85837007928746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1647531560805!5m2!1sfr!2sfr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            </div>
        </div>
        <button>Envoyer</button>
    </form>
</section>

<?php include 'component/footer.php'; ?>