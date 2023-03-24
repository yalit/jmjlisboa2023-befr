<script lang="ts">
    import "./index.scss";

    import Page from "../page/page.svelte";
    import links, {CHURCH4YOU} from "../../lib/data/links";
    import { faArrowTurnDown } from "@fortawesome/free-solid-svg-icons";
    import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
    import { findLastNews, type News } from "../../lib/newsRepository";
    import { onMount } from "svelte";
    import NewsArticle from "../../shared/newsArticle/NewsArticle.svelte";
    import Blog from "./blog.svelte";

    // is a News
    let articles: News[] = [];

    onMount(() => {
        findLastNews()
        .then(data => articles = data)
    });
</script>

<Page backColor="#00893e"> 
    <Blog slot="image" />
    
    <svelte:fragment slot="header_text">
        <div>TBD</div>
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
