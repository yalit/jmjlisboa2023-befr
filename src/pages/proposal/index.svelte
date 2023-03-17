<script lang="ts">
    import "./index.scss";

    import Page from "../page/page.svelte";
    import Perso from "./perso.svelte";
    import links, {CHURCH4YOU} from "../../lib/data/links";
    import { faArrowTurnDown } from "@fortawesome/free-solid-svg-icons";
    import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
</script>

<Page backColor="#d43425">
    <Perso slot="image"/>

    <svelte:fragment slot="header_text">
        <div>Tous les <span class="emphasized orange">chemins</span></div>
        <div>mènent au Christ,</div>
        <div>à toi de choisir</div>
        <div>celui qui te plaît</div>
    </svelte:fragment>
    <section class="page-content" slot="content">
        <div class="section-container">
           
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
                    <a href={links[CHURCH4YOU]} target="_blank">Découvre d'autres activités, groupes et outils sur Church4You.be</a>
                </div>
            </div>
        </div>
    </section>
</Page>
