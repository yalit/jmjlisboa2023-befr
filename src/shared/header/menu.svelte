<script lang="ts">
    import './menu.scss';
    import {FontAwesomeIcon} from "@fortawesome/svelte-fontawesome";
    import {faAngleDoubleRight} from "@fortawesome/free-solid-svg-icons";
    import links, { BLOG_PAGE, C4Y_PAGE, CESTQUOI_PAGE, CHURCH4YOU, FAQ_PAGE, PROPOSALS_PAGE } from '../../lib/data/links';

    export let opened: boolean;
    $: menuStatus = opened ? "opened" : "closed";

    const triggerContactMail = () => {
        document.location.href = "mailto:jmjbelgique@gmail.com?subject=Demande d'informations concernant les JMJ 2023 à Lisbonne en Belgique";
    }

</script>

<div class="menu {menuStatus}">
    <div class="menu-container">
        <div class="text-white background-green full">
            <a href="/">
                <span>Accueil</span>
            </a>
        </div>
        <div class="text-green background-white">
            <a href="{links[CESTQUOI_PAGE]}">
                <span class="arrow-left"><FontAwesomeIcon icon={faAngleDoubleRight} /></span>
                <span>Les JMJ c'est quoi ?</span>
            </a>
        </div>
        <div class="text-white full">
            <a href="{links[BLOG_PAGE]}">
                <span>Blog</span>
            </a>
        </div>
        <div class="text-orange background-white">
            <a href="{links[C4Y_PAGE]}">
                <span class="arrow-left"><FontAwesomeIcon icon={faAngleDoubleRight} /></span>
                <span>Infos Church4You</span>
            </a>
        </div>
        <div class="text-white full">
            <a href="{links[FAQ_PAGE]}">
                <span>FAQ</span>
            </a>
        </div>
        <div class="text-red background-white">
            <a href="{links[PROPOSALS_PAGE]}">
                <span class="arrow-left"><FontAwesomeIcon icon={faAngleDoubleRight} /></span>
                <span>Différentes propositions</span>
            </a>
        </div>
        <div class="text-white full">
            <a href="{links[CHURCH4YOU]}">
                <span>D'autres groupes et activités</span>
            </a>
        </div>
        <div class="text-white full" on:click={triggerContactMail} on:keydown={triggerContactMail}>
            <p class="contact">
                <span>Contact</span>
            </p>
        </div>
    </div>
</div>