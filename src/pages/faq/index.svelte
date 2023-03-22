<script lang="ts">
    import "./index.scss";

    import Page from "../page/page.svelte";
    import { faArrowTurnDown } from "@fortawesome/free-solid-svg-icons";
    import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
    import links, { CHURCH4YOU } from "../../lib/data/links";
    import Faq from "./faq.svelte";
</script>

<Page backColor="#d43425">
    <Faq slot="image" />

    <svelte:fragment slot="header_text">
        <div class="big">FAQ</div>
        <div>Questions</div>
        <div>Récurrentes</div>
    </svelte:fragment>

    <section class="page-content" slot="content">
        <div class="section-container">
            
            <div class="filters"></div>

            
            <div class="actions">
                <div class="action none"></div>
                <div class="action">
                    <span>Tu ne pars pas aux JMJ ? </span> <FontAwesomeIcon icon={faArrowTurnDown} />
                </div>
                <div class="action">
                    <a href="{links[CHURCH4YOU]}" target="_blank" rel="noreferrer">Découvre d'autres activités, groupes et outils sur Church4You.be</a>
                </div>
            </div>
        </div>
    </section>
</Page>
