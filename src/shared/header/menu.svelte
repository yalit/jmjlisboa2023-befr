<script lang="ts">
    import './menu.scss';
    import {FontAwesomeIcon} from "@fortawesome/svelte-fontawesome";
    import {faAngleDoubleRight} from "@fortawesome/free-solid-svg-icons";

    export let opened: boolean;
    $: menuStatus = opened ? "opened" : "closed";


</script>

<div class="menu {menuStatus}">
    <div class="menu-container">
        <div class="text-green background-white">
            <a href="#">
                <span class="arrow-left"><FontAwesomeIcon icon={faAngleDoubleRight} /></span>
                <span>Les JMJ c'est quoi ?</span>
            </a>
        </div>
        <div class="text-white background-green full">
            <a href="#">
                <span>Historique Lisbonne 2023</span>
            </a>
        </div>
        <div class="text-red background-white">
            <a href="#">
                <span class="arrow-left"><FontAwesomeIcon icon={faAngleDoubleRight} /></span>
                <span>Différentes propositions</span>
            </a>
        </div>
        <div class="text-white full">
            <a href="#">
                <span>FAQ</span>
            </a>
        </div>
        <div class="text-orange background-white">
            <a href="#">
                <span class="arrow-left"><FontAwesomeIcon icon={faAngleDoubleRight} /></span>
                <span>Infos Church4You</span>
            </a>
        </div>
        <div class="text-white full">
            <a href="#">
                <span>Blog</span>
            </a>
        </div>
        <div class="text-white full">
            <a href="#">
                <span>D'autres groupes et activités</span>
            </a>
        </div>
        <div class="text-white full">
            <a href="#">
                <span>Contact</span>
            </a>
        </div>
    </div>
</div>