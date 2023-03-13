<script lang="ts">
    import './header.scss';
    import {FontAwesomeIcon} from "@fortawesome/svelte-fontawesome";
    import {faBars, faTimes} from "@fortawesome/free-solid-svg-icons";
    import {faFacebook, faInstagram, faYoutube} from "@fortawesome/free-brands-svg-icons";

    export let backColor;
    let menuOpened = false;
    const menuToggle = () => menuOpened = !menuOpened;
</script>


<section>
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

    <div class="main">
        <div class="action-buttons">
            <div class="action-button orange">
                <img src="/img/navbar/ticket.svg" alt="Ticket pour les JMJ">
            </div>
            <div class="action-button green" on:click={menuToggle}>
                {#if menuOpened}
                    <FontAwesomeIcon icon={faTimes} />
                {:else }
                    <FontAwesomeIcon icon={faBars} />
                {/if}
            </div>
        </div>

    </div>

    <div class="socials" style="--social-back: #fff; --social-color: {backColor}">
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
</section>
