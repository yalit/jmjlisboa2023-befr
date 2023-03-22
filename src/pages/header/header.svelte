<script lang="ts">
    import './header.scss';
    import {FontAwesomeIcon} from "@fortawesome/svelte-fontawesome";
    import {faBars, faTimes} from "@fortawesome/free-solid-svg-icons";
    import Menu from '../../shared/header/menu.svelte';
    import links, { CHURCH4YOU, LISBOA2023, REGISTER } from '../../lib/data/links';
    import Socials from '../../shared/socials/socials.svelte';

    export let backColor: string;
    let menuOpened = false;
    const menuToggle = () => menuOpened = !menuOpened;
</script>

<Menu bind:opened={menuOpened} />

<nav style="--back-color: {backColor}">
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
    
    <div class="action-buttons">
        <div class="action-button orange">
            <a href={links[REGISTER]} target="_blank" rel="noreferrer">
                <img src="/img/navbar/ticket.svg" alt="Ticket pour les JMJ" />
            </a>
        </div>
        <div class="action-button green" on:click={menuToggle} on:keydown={menuToggle}>
            {#if menuOpened}
                <FontAwesomeIcon icon={faTimes} />
            {:else }
                <FontAwesomeIcon icon={faBars} />
            {/if}
        </div>
    </div>

    <div class="main">
        <div class='image'>
            <div class="arrow"><img src="/img/pages/fleche_fond.svg" alt=""></div>
            <slot name="header_image" />
        </div>
       
        <Socials backColor="#fff" color={backColor} />
    </div>

    <div class="text_part">
        <div class="hookup">
            <slot name="text" />
        </div>
    </div>
</nav>
