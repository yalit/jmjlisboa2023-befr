<script lang="ts">
    import "./index.scss";

    import Page from "../page/page.svelte";
    import Madrid from "./madrid.svelte";
    import links, {CHURCH4YOU} from "../../lib/data/links";
    import { faArrowTurnDown } from "@fortawesome/free-solid-svg-icons";
    import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
    import { findAllPresentations as findAllJMJPresentations, type News } from "../../lib/newsRepository";
    import { onMount } from "svelte";
    import NewsArticle from "../../shared/newsArticle/NewsArticle.svelte";

    // is a News
    let articles: News[] = [];

    onMount(() => {
        findAllJMJPresentations()
        .then(data => articles = data)
    });
</script>

<Page backColor="#00893e"> 
    <Madrid slot="image" />

    <svelte:fragment slot="header_text">
        <div>Découvre</div>
        <div class="emphasized red">Tout sur les jmj</div>
        <div>et en particulier</div>
        <div>sur celle de cette année</div>
        <div class="emphasized red">à Lisbonne</div>
    </svelte:fragment>
    
    <section class="page-content" slot="content">
        <div class="section-container">
            

            <div class="articles">
                {#each articles as article}
                    <NewsArticle article={article} />
                {/each}
            </div>

            <div class="actions">
                <div class="action none"></div>
                <div class="action">
                    <span>Tu ne pars pas aux JMJ ? </span> <FontAwesomeIcon icon={faArrowTurnDown} />
                </div>
                <div class="action">
                    <a href={links[CHURCH4YOU]} target="_blank" rel="noreferrer">Découvre d'autres activités, groupes et outils sur Church4You.be</a>
                </div>
            </div>
        </div>
    </section>
</Page>
