<script lang="ts">
    import "./index.scss";

    import Page from "../page/page.svelte";
    import Perso from "./perso.svelte";
    import links, {C4Y_PAGE, CHURCH4YOU} from "../../lib/data/links";
    import { faArrowTurnDown } from "@fortawesome/free-solid-svg-icons";
    import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
    import { findOne, type News } from "../../lib/newsRepository";
    import { onMount } from "svelte";
    import NewsArticle from "../../shared/newsArticle/NewsArticle.svelte";

    let jmjRoute: News = {
        id: 1,
        title: "La route Church4You - C4Y",
        url: links[C4Y_PAGE],
        img: {
            src: '/img/pages/LES_JMJ_AVEC_CHURCH4YOU.png',
            title: ""
        },
        date: new Date()
    } 
    let allRoutesNews: News = null;
    onMount(() => {
        findOne(45629) //id of article here : https://church4you.be/news/jmj-les-differentes-routes/
        .then(data => {
            allRoutesNews = data
        })
    });
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
                <NewsArticle article={jmjRoute} targetBlank={false}/>
                <NewsArticle article={allRoutesNews} />
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
