<script lang="ts">
    import './herogreen.scss'
    import {FontAwesomeIcon} from "@fortawesome/svelte-fontawesome";
    import {faArrowDown, faArrowTurnDown, faCaretRight} from "@fortawesome/free-solid-svg-icons";
    import Modal from "../../shared/modal/Modal.svelte";

    let perso; //dom node of img
    let y: number; //scroll Y
    let vh: number = visualViewport.height;
    let persoInitialRight;
    let movePerso: number = 0;
    let persoAnimationBounds = {start: vh / 3, end: 0}

    $: { //handling move of perso on screen to the left
      if (perso !== undefined) {
        y = y
        let persoSizes: DOMRect = perso.getBoundingClientRect();
        if (persoInitialRight === undefined) {
          persoInitialRight = perso.getBoundingClientRect().right;
        }

        if (persoSizes.top < persoAnimationBounds.start) {
          movePerso = (persoAnimationBounds.start-persoSizes.top)/(persoAnimationBounds.start - persoAnimationBounds.end) * (persoSizes.width / 3);
          if (persoSizes.top < persoAnimationBounds.end) {
            movePerso = persoSizes.width
          }
        }
        perso.style.transform = `rotateY(180deg) translateX(${movePerso}px)`
      }
    }

    let popeMessageShown =
      false;

    const showPopeMessage = (e) => {
      e.preventDefault();
      popeMessageShown = true;
    }
    const closePopeMessage = () => popeMessageShown = false;
</script>

<svelte:window bind:scrollY={y} />


<section id="herogreen">
    <div class="section-container">
        <div class="text-part">
            <div class="youtoo hookup">
                <div class="div">Si toi aussi comme <br /> <span class="emphasized red">le pape François</span><br /> tu as soif d'horizon</div>
                <div class="div">Alors quitte tes 4 murs !</div>
            </div>
            
            <div class="actions">
                <div class="action">
                    <a href="#">Découvre les JMJ</a>
                </div>
                <div class="action">
                    <span>Déjà inscrit⸱e ?</span> <FontAwesomeIcon icon={faArrowTurnDown} />
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
            <div class="perso">
                <a href="#">
                    <img bind:this={perso} src="/img/heroGreen/perso.svg" alt="Un personnage qui marche vers la droite de l'écran" />
                </a> <!-- put a link to the inscription form -->
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

