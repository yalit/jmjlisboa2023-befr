<script lang="ts">
    import './nav.scss';
    import {FontAwesomeIcon} from '@fortawesome/svelte-fontawesome';
    import {faBars, faTimes, faAngleDoubleRight} from '@fortawesome/free-solid-svg-icons'
    import {faInstagram, faYoutube, faFacebook} from '@fortawesome/free-brands-svg-icons'
    import Menu from "./Menu.svelte";

    let menuOpened = false
    const menuToggle = () => menuOpened = !menuOpened

    const on_key_up = (event) => {
      switch (event.key) {
        case "Escape":
          menuOpened = false;
          event.preventDefault();
          break;
      }
    }

</script>

<svelte:window on:keyup={on_key_up} />

<Menu bind:opened={menuOpened} />

<nav>
    <div class="section-container">
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

        <div class="action-buttons">
            <div class="action-button green" on:click={menuToggle}>
                {#if menuOpened}
                    <FontAwesomeIcon icon={faTimes} />
                {:else }
                    <FontAwesomeIcon icon={faBars} />
                {/if}
            </div>
            <div class="action-button orange">
                <img src="/img/navbar/ticket.svg" alt="Ticket pour les JMJ">
            </div>
        </div> 
        <div class="main-title">
            <p>en route</p>
            <p>pour les JMJ</p>
            <p>avec la belgique</p>
        </div>

        <div class="main-menu">
            <div class="text-green background-white">
                <a href="#">
                    <span class="arrow-left"><FontAwesomeIcon icon={faAngleDoubleRight} /></span>
                    <span>Les JMJ c'est quoi ?</span>
                </a>
            </div>
            <div class="text-red background-white">
                <a href="#">
                    <span class="arrow-left"><FontAwesomeIcon icon={faAngleDoubleRight} /></span>
                    <span>Différentes propositions</span>
                </a>
            </div>
            <div class="text-orange background-white">
                <a href="#">
                    <span class="arrow-left"><FontAwesomeIcon icon={faAngleDoubleRight} /></span>
                    <span>Infos Church4You</span>
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
    </div>
</nav>