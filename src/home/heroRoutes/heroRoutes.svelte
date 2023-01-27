<script lang="ts">
    import './heroRoutes.scss';
    import Carousel from 'svelte-carousel';
    import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
    import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

    const images = [
        {
            url: '/img/heroRoutes/routeX.svg',
            alt: "Logo de la route X",
            link: 'https://church4you.be'
        },
        {
            url: '/img/heroRoutes/routeX.svg',
            alt: "Logo de la route X",
            link: 'https://church4you.be'
        },
        {
            url: '/img/heroRoutes/routeX.svg',
            alt: "Logo de la route X",
            link: 'https://church4you.be'
        },
        {
            url: '/img/heroRoutes/routeX.svg',
            alt: "Logo de la route X",
            link: 'https://church4you.be'
        },
        {
            url: '/img/heroRoutes/routeX.svg',
            alt: "Logo de la route X",
            link: 'https://church4you.be'
        }
    ]

    let nbImagesToDisplay = getNbImageToDisplay();
    const handleResize = () => {
            nbImagesToDisplay = getNbImageToDisplay();
    }

    function getNbImageToDisplay() {
        if (window.innerWidth < 640) {
            return 3;
        } else if (window.innerWidth < 960) {
            return 4;
        } else {
            return 5;
        }
    }
</script>

<svelte:window on:resize={handleResize}/>

<section id="heroRoutes">
    <div class="section-container">

        <div class="allroads">
            En 2023, tous les chemins mènent à Lisbonne
        </div>

        <div class="carousel">
            <Carousel
                particlesToShow={nbImagesToDisplay}
                particlesToScroll={1}
                dots={false}
                swiping={true}
                let:showPrevPage
                let:showNextPage
            >
                {#each images as image}
                    <a href="{image.link}" target="_blank" rel="noreferrer">
                        <img src="{image.url}" alt="{image.alt}" />
                    </a>  
                {/each}
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <div slot="prev" on:click={showPrevPage} class="dot prev">
                    <FontAwesomeIcon icon={faAngleLeft}/>
                </div>
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <div slot="next" on:click={showNextPage} class="dot next">
                    <FontAwesomeIcon icon={faAngleRight}/>
                  </div>
            </Carousel>
        </div>

        <div class="action">
            <p><a href="#">Voir les différentes routes belges</a></p>
        </div>
    </div>
</section>
