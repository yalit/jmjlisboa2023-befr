<script lang="ts">
    import './heroRed.scss'
    import Questions from "./Questions.svelte";
    import {FontAwesomeIcon} from "@fortawesome/svelte-fontawesome";
    import {faArrowDown, faArrowTurnDown} from "@fortawesome/free-solid-svg-icons";

    let vh = visualViewport.height;
    let heartAnimationBounds = {start: vh / 2, end: vh / 10}; //start must be higher than end as we go from bottom
    let y: number;
    let heart;
    let opacity = 0;

    $: {
      y=y;
      if (heart !== undefined) {
        const heartPos: DOMRect = heart.getBoundingClientRect();

        if (heartPos.top < heartAnimationBounds.start){ 
          opacity = (heartAnimationBounds.start-heartPos.top)/(heartAnimationBounds.start - heartAnimationBounds.end);
          if (heartPos.top < heartAnimationBounds.end) {
            opacity = 1;
          }
          heart.style.opacity = opacity;
        }
      }
    }
</script>

<svelte:window bind:scrollY={y} />

<section id="heroRed">
    <div class="section-container">
        <div class="animated-questions">
            <div class="white-back"></div>
            <div class="brain">
                <img src="/img/heroRed/cerveau.png" alt="brain with cogs|cerveau avec engrenages">
            </div>
            <Questions />
            <div class="heart" bind:this={heart}>
                <img src="/img/heroRed/coeur.png" alt="heart behind brain|coeur derrière un cerveau">
            </div>
        </div>

        <div class="static-text">
            <div class="askingquestions hookup">
                Tu te poses <br /><span class="emphasized orange">1000 questions</span><br /> sur ce périple ?
            </div>

            <div class="actions">
                <div class="action"><a href="#">Consulte notre FAQ</a></div>
                <div class="action jemelance"><span>On verra cela après, je me lance</span><FontAwesomeIcon icon={faArrowTurnDown} /></div>
                <div class="action"><a href="#">S'inscrire à la route Church4You</a></div>
            </div>
        </div>
    </div>
</section>
