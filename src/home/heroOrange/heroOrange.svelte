<script>
    import './heroOrange.scss';
    import { onMount } from 'svelte';
    import { findLastNews } from '../../lib/newsRepository';

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
                <img src="/img/heroYellow/angryWindow.svg" alt="Internet tab and angry icons and emoticons">
            </div>
    
            <div class="whilewaiting hookup">
                <p>
                    En attendant notre <br />rencontre, découvre <br />sur <a href="https://church4you.be" class="emphasized red">church4you.be</a><br /> un coin d'internet<br /> <span class="emphasized red">bienveillant et spi</span>
                </p>
            </div>
        </div>

        <div class="lastnews">
            {#each news as article}
                <div class="news">
                    <img src="{article.img.src}" alt="{article.img.title}">
                    <span class="news-title">
                        <a href="{article.url}">{@html article.title}</a>
                    </span>
                </div>
            {/each}
        </div>

        <div class="actions">
            <div class="action">
                <a href="#">En savoir plus sur les JMJ</a>
            </div>
            <div class="action">
                <a href="#">Tu ne pars pas aux JMJ ?</a>
            </div>
            <div class="action">
                <a href="#">Découvre pleins d'activités, groupes et outils sur C4Y.be</a>
            </div>
        </div>
    </div>
</section>