<script lang="ts">
    import './heroRoutes.scss';
    import Carousel from 'svelte-carousel';

    const images = [
        {
            url: '/img/heroRoutes/routeX.svg',
            alt: "Logo de la route X",
            link: 'church4you.be'
        },
        {
            url: '/img/heroRoutes/routeX.svg',
            alt: "Logo de la route X",
            link: 'church4you.be'
        },
        {
            url: '/img/heroRoutes/routeX.svg',
            alt: "Logo de la route X",
            link: 'church4you.be'
        },
        {
            url: '/img/heroRoutes/routeX.svg',
            alt: "Logo de la route X",
            link: 'church4you.be'
        },
        {
            url: '/img/heroRoutes/routeX.svg',
            alt: "Logo de la route X",
            link: 'church4you.be'
        }
    ]

</script>

<section id="heroRoutes">
    <div class="section-container">

        <div class="allroads">
            En 2023, tous les chemins mènent à Lisbonne
        </div>

        <div class="carousel">
            <Carousel
                particlesToShow={5}
                particlesToScroll={1}
                dots={false}
                arrows={false}
            >
                {#each images as image}
                    <a href="{image.link}">
                        <img src="{image.url}" alt="{image.alt}" />
                    </a>  
                {/each}
            </Carousel>
        </div>

        <div class="action">
            <p>Voir les différentes routes belges</p>
        </div>
    </div>
</section>
