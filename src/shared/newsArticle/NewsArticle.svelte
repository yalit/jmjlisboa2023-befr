<script lang="ts">
    import type { News } from '../../lib/newsRepository';
    import './newsArticle.scss';
    export let article: News;

    export let targetBlank = true;

    const clickOnImg = (e) => {
        const img = e.target;
        const target = img.parentNode.children[1].children[0].getAttribute("href");
        window.open(target, '_blank').focus();
    }
</script>

{#if article}
    <article class="news">
        <img src="{article.img.src}" alt="{article.img.title}" on:click={clickOnImg} on:keydown={clickOnImg}>
        <span class="news-title article_title">
            {#if targetBlank}
                <a href="{article.url}" target="_blank" rel="noreferrer">{@html article.title}</a>
            {:else}
                <a href="{article.url}">{@html article.title}</a>
            {/if}
        </span>
    </article>
{/if}