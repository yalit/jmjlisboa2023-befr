<script lang="ts">
    import './nav.scss';
    import {FontAwesomeIcon} from '@fortawesome/svelte-fontawesome';
    import {faBars, faQuestion} from '@fortawesome/free-solid-svg-icons'
    import {faInstagram, faYoutube, faFlickr} from '@fortawesome/free-brands-svg-icons'

</script>

<nav>
    <div class="halo"></div>
    <div class="top-white-banner">
        <div class="banner-container">
            <div class="logos">
                <div class="logo-jmj">
                    <img src="/img/JMJ.svg" alt="JMJ Libsoa 2023 logo">
                </div>
                <div class="logo-C4Y">
                    <img src="/img/C4Y.svg" alt="Church4You.be Logo">
                </div>
            </div>
        </div>
    </div>
    <div class="bottom-right-banner"></div>
    <div class="bottom-left-banner"></div>

    <div class="menus">
        <div class="green"><FontAwesomeIcon icon={faBars} /></div>
        <div class="yellow"><FontAwesomeIcon icon={faQuestion} /></div>
    </div> 
    <div class="main-title">
        <p>en route</p>
        <p>pour les JMJ</p>
        <p>avec la belgique</p>
    </div>
    <div class="secondary-title">
        <div class="text-green">Les JMJ c'est quoi ?</div>
        <div class="text-red">Différentes propositions</div>
        <div class="text-orange">Infos Church4You</div>
    </div>
    <div class="socials">
        <div class="social">
            <FontAwesomeIcon icon={faInstagram} />
        </div>
        <div class="social">
            <FontAwesomeIcon icon={faYoutube} />
        </div>
        <div class="social">
            <FontAwesomeIcon icon={faFlickr} />
        </div>
    </div>
    <div class="nav-footer">
        <div class="top-border"></div>
    </div>
</nav>