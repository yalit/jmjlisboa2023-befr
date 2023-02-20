<script lang="ts">
    import "./index.scss";

    import Page from "../../shared/page/page.svelte";
    import C4Y from './c4y.svelte';
    import { faArrowTurnDown } from "@fortawesome/free-solid-svg-icons";
    import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
</script>

<Page backColor="#d43425">
    <div class="back" slot="header_back"></div>
    <div class="main" slot="header_main">
        <C4Y />
    </div>

    <section class="page-content" slot="content">
        <div class="section-container">
            <div class="text-part">
                <div class="hookup">
                    <div>... to be done...</div>
                </div>
            </div>

            <div class="articles">
                <article></article>
                <article></article>
                <article></article>
                <article></article>
            </div>

            <div class="actions">
                <div class="action none"></div>
                <div class="action">
                    <span>Tu ne pars pas aux JMJ ? </span> <FontAwesomeIcon icon={faArrowTurnDown} />
                </div>
                <div class="action">
                    <a href="#">Découvre d'autres activités, groupes et outils sur Church4You.be</a>
                </div>
            </div>
        </div>
    </section>
</Page>