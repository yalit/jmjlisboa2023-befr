<script lang="ts">
    import "./index.scss";

    import Page from "../page/page.svelte";
    import { faArrowTurnDown } from "@fortawesome/free-solid-svg-icons";
    import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
    import links, { CHURCH4YOU, REGISTER } from "../../lib/data/links";
    import Faq from "./faq.svelte";
    import FaqTab from "./FAQTab.svelte";
    import { tagIDs, tags, type TagId } from "../../lib/data/faqs";

    let currentTag: TagId = 'general';

    const switchTag = (e) => {
        currentTag = e.target.dataset.tag;
    }
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
            
            <div class="filters">
                {#each tagIDs as tagID}
                    <div class="tag" data-tag={tagID} on:click={switchTag} on:keydown={switchTag}>
                        {tags[tagID]}
                    </div>
                {/each}
            </div>

            {#each tagIDs as tagID}
                <FaqTab tagID={tagID} visible={tagID === currentTag}/>
            {/each}

            <div class="actions">
                <div class="action none"></div>
                <div class="action">
                    <span>Tu n'as plus de questions ? </span> <FontAwesomeIcon icon={faArrowTurnDown} />
                </div>
                <div class="action">
                    <a href="{links[REGISTER]}" target="_blank" rel="noreferrer">Enregistre-toi directement !</a>
                </div>
            </div>
        </div>
    </section>
</Page>
