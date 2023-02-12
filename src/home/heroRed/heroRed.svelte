<script lang="ts">
    import './heroRed.scss'
    import Questions from "./Questions.svelte";

    let vh = visualViewport.height;
    let heartAnimationBounds = {start: vh / 2, end: vh / 8}
    let y: number;
    let heart;
    let opacity = 0;

    $: {
      y=y;
      if (heart !== undefined) {
        const heartPos: DOMRect = heart.getBoundingClientRect();

        if (heartPos.top < heartAnimationBounds.start) {
          opacity = (heartAnimationBounds.start-heartPos.top)/heartAnimationBounds.end;
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
            <div class="heart" bind:this={heart}>
                <img src="/img/heroRed/coeur.png" alt="heart behind brain|coeur derrière un cerveau">
            </div>
            <div class="brain">
                <img src="/img/heroRed/cerveau.png" alt="brain with cogs|cerveau avec engrenages">
            </div>
            <Questions />
        </div>

        <div class="static-text">
            <div class="askingquestions hookup">
                Tu te poses <br /><span class="emphasized orange">1000 questions</span><br /> sur ce périple ?
            </div>

            <div class="actions">
                <div class="action"><a href="#">Consulte notre FAQ</a></div>
                <div class="action"><a href="#">On verra cela après, je me lance</a></div>
                <div class="action"><a href="#">S'inscrire à la route Church4You</a></div>
            </div>
        </div>
    </div>
</section>