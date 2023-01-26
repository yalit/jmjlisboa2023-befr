<script lang="ts">
    import './nav.scss';
    import {FontAwesomeIcon} from '@fortawesome/svelte-fontawesome';
    import {faBars, faQuestion, faAngleDoubleRight} from '@fortawesome/free-solid-svg-icons'
    import {faInstagram, faYoutube, faFacebook} from '@fortawesome/free-brands-svg-icons'

</script>

<nav>
    <div class="halo"></div>
    <div class="top-white-banner">
        <div class="banner-container">
            <div class="logos">
                <div class="logo-jmj">
                    <a href="https://www.lisboa2023.org/fr" target="_blank" rel="noreferrer">
                        <img src="/img/navbar/JMJ.svg" alt="JMJ Libsoa 2023 logo">
                    </a>
                </div>
                <div class="logo-C4Y">
                    <a href="https://church4you.be" target="_blank" rel="noreferrer">
                        <img src="/img/navbar/C4Y.svg" alt="Church4You.be Logo">
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="bottom-right-banner"></div>
    <div class="bottom-left-banner"></div>

    <div class="menus">
        <div>
            <img src="/img/navbar/ticket.svg" alt="Ticket pour les JMJ">
        </div>
    </div> 
    <div class="main-title">
        <p>en route</p>
        <p>pour les JMJ</p>
        <p>avec la belgique</p>
    </div>
    <div class="secondary-title">
        <div class="text-green">
            <a href="#">
                <span class="arrow-left"><FontAwesomeIcon icon={faAngleDoubleRight} /></span>
                Les JMJ c'est quoi ?
            </a>
        </div>
        <div class="text-red">
            <a href="#">
                <span class="arrow-left"><FontAwesomeIcon icon={faAngleDoubleRight} /></span>
                Différentes propositions
            </a>
        </div>
        <div class="text-orange">
            <a href="#">
                <span class="arrow-left"><FontAwesomeIcon icon={faAngleDoubleRight} /></span>
                Infos Church4You
            </a>
        </div>
    </div>
    <div class="socials">
        <div class="social">
            <a href="https://www.instagram.com/church4you.be/?hl=fr" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
            </a>
        </div>
        <div class="social">
            <a href="https://www.youtube.com/JMJbelgique" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faYoutube} />
            </a>
        </div>
        <div class="social">
            <a href="https://www.facebook.com/Church4you.be/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faFacebook} />
            </a>
        </div>
    </div>
    <div class="nav-footer">
        <div class="top-border"></div>
    </div>
</nav>