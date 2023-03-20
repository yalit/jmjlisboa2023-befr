<script lang="ts">
    import './header.scss';
    import {FontAwesomeIcon} from '@fortawesome/svelte-fontawesome';
    import {faBars, faTimes} from '@fortawesome/free-solid-svg-icons'
    import Menu from "./menu.svelte";
    import Socials from '../socials/socials.svelte';
    import links, { CHURCH4YOU, LISBOA2023 } from '../../lib/data/links';

    export let backColor: string;

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

<nav style="--back-color: {backColor}">
    <div class="section-container">
        <slot name="back"></slot>
        <div class="halo"></div>
        <div class="top-white-banner">
            <div class="banner-container">
                <div class="logos">
                    <div class="logo-jmj">
                        <a href="{links[LISBOA2023]}" target="_blank" rel="noreferrer">
                            <img src="/img/navbar/JMJ.svg" alt="JMJ Libsoa 2023 logo">
                        </a>
                    </div>
                    <div class="logo-C4Y">
                        <a href="{links[CHURCH4YOU]}" target="_blank" rel="noreferrer">
                            <img src="/img/navbar/C4Y.svg" alt="Church4You.be Logo">
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom-right-banner"></div>
        <div class="bottom-left-banner"></div>

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

        <slot name="main"></slot>

        <slot name="secondary"></slot>

        <Socials />
        <div class="blank"></div>
    </div>
</nav>
