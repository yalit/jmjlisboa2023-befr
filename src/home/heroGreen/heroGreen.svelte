<script lang="ts">
    import './herogreen.scss'
    import {FontAwesomeIcon} from "@fortawesome/svelte-fontawesome";
    import {faArrowDown} from "@fortawesome/free-solid-svg-icons";
    import { inview } from 'svelte-inview';
    import type { ObserverEventDetails, Options } from 'svelte-inview';
    import Modal from "../../shared/modal/Modal.svelte";

    let isInView;
    let delta: number = 0;
    const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
        isInView = detail.inView
        delta = detail.entry.intersectionRatio / 2
    };

    const options: Options = {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
    };

    let popeMessageShown = false;

    const showPopeMessage = (e) => {
      e.preventDefault();
      popeMessageShown = true;
    }
    const closePopeMessage = () => popeMessageShown = false;
</script>



<section id="herogreen">
    <div class="section-container">
        <div class="text-part">
            <div class="youtoo hookup">
                <div class="div">Si toi aussi comme le dit<br /> <span class="emphasized red">le pape François</span><br /> tu as soif d'horizon</div>
                <div class="div">Alors quitte tes 4 murs !</div>
            </div>
            
            <div class="actions">
                <div class="action">
                    <a href="#">Découvre les JMJ</a>
                </div>
                <div class="action">
                    <a href="#">Je suis déjà inscrit⸱e</a>
                </div>
                <div class="action" on:click={showPopeMessage}>
                    <a href="#">Regarde le message du Page aux jeunes inscrits</a>
                </div>
            </div>
        
            <a href="#" class="knowmore">
                    <FontAwesomeIcon icon={faArrowDown} />
                    <p>En savoir plus sur les JMJ depuis la Belgique</p>
            </a>
        </div>
    
        <div class="nerestepasici">
            <div class="white-back"></div>
            <div class="border-white-bottom"></div>
            <div class="pasici">
                <img src="/img/heroGreen/pasici.svg" alt="Ne reste pas ici, bouge !">
            </div>
            <div class="canape">
                <img src="/img/heroGreen/canape.svg" alt="Ne reste pas dans ton canapé!">
            </div>
            <div class="perso" use:inview={options} on:change="{handleChange}" style="transform: translateX(calc(200px * {delta}))">
                <a href="#"><img src="/img/heroGreen/perso.svg" alt="Un personnage qui marche vers la droite de l'écran"></a> <!-- put a link to the inscription form -->
            </div>
        </div>
    </div>

    {#if popeMessageShown}
        <Modal shown={true} close={closePopeMessage}>
            <div slot="content">
                <iframe width="100%" style="aspect-ratio: calc(560/315)" src="https://www.youtube.com/embed/rJi4iqdA1-w" title="YouTube video player" allow="accelerometer; autoplay; encrypted-media; gyroscope;" allowfullscreen></iframe>
            </div>
        </Modal>
    {/if}
</section>

