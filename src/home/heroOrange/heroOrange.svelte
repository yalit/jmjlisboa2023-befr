<script>
    import './heroOrange.scss';
    import { onMount } from 'svelte';
    import { findLastNews } from '../../lib/newsRepository';
    import {FontAwesomeIcon} from "@fortawesome/svelte-fontawesome";
    import {faArrowTurnDown} from "@fortawesome/free-solid-svg-icons";
    import links, { CESTQUOI_PAGE, CHURCH4YOU } from '../../lib/data/links';

    // is a News
    let news = [];

    onMount(() => {
        findLastNews(3)
        .then(data => {
            news = data
        })
    });
</script>

<section id="heroYellow">
    <div class="section-container">
        <div class="intro">
            <div class="top-image">
                <img src="/img/heroYellow/happyWindow.svg" alt="Internet tab and angry icons and emoticons">
            </div>
    
            <div class="whilewaiting hookup">
                <p>
                    En attendant notre <br />rencontre, découvre <br />sur <a href="{links[CHURCH4YOU]}" class="emphasized red" target="_blank" rel="noreferrer">church4you.be</a><br /> un coin d'internet<br /> <span class="emphasized red">bienveillant et spi</span>
                </p>
            </div>
        </div>

        <div class="lastnews articles">
            {#each news as article}
                <article class="news">
                    <img src="{article.img.src}" alt="{article.img.title}">
                    <span class="news-title article_title">
                        <a href="{article.url}" target="_blank" rel="noreferrer">{@html article.title}</a>
                    </span>
                </article>
            {/each}
        </div>

        <div class="actions">
            <div class="action">
                <a href="{links[CESTQUOI_PAGE]}">En savoir plus sur les JMJ</a>
            </div>
            <div class="action">
                <span>Tu ne pars pas aux JMJ ?</span><FontAwesomeIcon icon={faArrowTurnDown} />
            </div>
            <div class="action">
                <a href="{links[CHURCH4YOU]}" target="_blank" rel="noreferrer">Découvre pleins d'activités, groupes et outils sur C4Y.be</a>
            </div>
        </div>
    </div>
</section>
