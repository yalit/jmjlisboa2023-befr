<script lang="ts">
    import './heroRoutes.scss';
    import Carousel from 'svelte-carousel';
    import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
    import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
    import links, { ALL_ROADS_C4Y, C4Y_PAGE, FESTIVAL_JMJ, PROPOSALS_PAGE } from '../../lib/data/links';

    const images = [
        {
            url: '/img/heroRoutes/fete.jpg',
            alt: "Logo du WE des JMJ",
            link: links[FESTIVAL_JMJ],
            target: "_blank"
        },
        {
            url: '/img/heroRoutes/velo.jpg',
            alt: "Logo de la route à vélo",
            link: links[ALL_ROADS_C4Y],
            target: "_blank"
        },
        {
            url: '/img/heroRoutes/c4y.jpg',
            alt: "Logo de la route C4Y",
            link: links[C4Y_PAGE],
            target: "_self"
        },
        {
            url: '/img/heroRoutes/stj.jpg',
            alt: "Logo de la route de St Jacques",
            link: links[ALL_ROADS_C4Y],
            target: "_blank"
        },
        {
            url: '/img/heroRoutes/mej.jpg',
            alt: "Logo de la route du MEJ",
            link: links[ALL_ROADS_C4Y],
            target: "_blank"
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

    let carousel;
    function goToPrev() {
        carousel.goToPrev()
    }
    function goToNext() {
        carousel.goToNext()
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
                bind:this={carousel}
                particlesToShow={nbImagesToDisplay}
                particlesToScroll={1}
                arrows={false}
                dots={false}
                swiping={true}
            >
                {#each images as image}
                    <a href="{image.link}" target="{image.target}" rel="noreferrer">
                        <img src="{image.url}" alt="{image.alt}" />
                    </a>  
                {/each}
            </Carousel>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div on:click={goToPrev} class="dot left">
                <FontAwesomeIcon icon={faAngleLeft}/>
            </div>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div on:click={goToNext} class="dot right">
                <FontAwesomeIcon icon={faAngleRight}/>
              </div>
        </div>

        <div class="action">
            <p><a href="{links[ALL_ROADS_C4Y]}">Voir les différentes routes belges</a></p>
        </div>
    </div>
</section>
