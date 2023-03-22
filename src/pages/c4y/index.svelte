<script lang="ts">
    import "./index.scss";

    import Page from "../page/page.svelte";
    import C4Y from './c4y.svelte';
    import links, { PROPOSALS_PAGE, REGISTER } from "../../lib/data/links";
</script>

<Page backColor="#fbc200">
    <C4Y slot="image" />

    <svelte:fragment slot="header_text">
        <div>Rejoindre l'organisation</div>
        <div> de <span class="emphasized red">Church4You</span></div>
        <div>c'est découvrir la diversité</div>
        <div>de l'église de Belgique</div>
    </svelte:fragment>

    <section class="page-content" slot="content">
        <div class="section-container">
            
            <div class="inscription background-white text-red">
                <a href="{links[REGISTER]}" target="_blank" rel="noreferrer">Formulaire d'inscription</a>
            </div>

            <div class="text">
                <div>
                    Cette route est organisée par CHURCH4YOU (les équipes des Pastorales des Jeunes des diocèses
                    francophones de Belgique). Elle est destinée principalement aux jeunes entre 18 et 30 ans, pour
                    tous les groupes de paroisse, d'unité pastorale, aumônerie étudiante, Pôles Jeunes...
                </div>
                <div>
                    Les jeunes qui ont entre 16 et 17 ans peuvent également se joindre à cette route mais devront obligatoirement
                    être accompagné d'une personne majeure. Par ailleurs, une route adaptée à leur âge est proposée par la
                    Communauté de l'Emmanuel.
                </div>
                <div class="sub-title">
                    Plusieurs communautés ou mouvemeents participeront à la route Church4you
                </div>
                <div>
                    Communauté du Chemin Neuf, Emmanuel Belgique, la Fraternité de Tibériade, les Assomptionnistes, les
                    religieuses de l'Assomption, Fondacio, les Serviteurs de l'Amour et les
                    Chercheurs de Dieu et la Famille MArie-Jeunesse.
                </div>
                <div class="sub-title">
                    <a href="{links[PROPOSALS_PAGE]}">Différentes formules sont proposées par CHURCH4YOU</a>
                </div>
            </div>

            <div class="inscription background-white text-red">
                <a href="{links[REGISTER]}" target="_blank" rel="noreferrer">Formulaire d'inscription</a>
            </div>
        </div>
    </section>
</Page>
