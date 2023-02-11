<script lang="ts">
    import './heroRed.scss'

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
            <div class="questions">
                <div class="question-list">
                    Qui peut s'inscrire aux JMJ? Quel est l'âge limite pour s'inscrire? Comment s'inscrire aux JMJ?
                    Comment trouver un groupe pour partir aux JMJ? Comment devenir bénévole / volontaire ? Quel est
                    l'impact écologique des JMJ? Je suis d'une autre religion ou communauté religieuse, puis-je participer?
                    C'est quoi les JMJ? Qui choisis le pays d'accueil des JMJ ? Quel est le but des JMJ? Quel est le thème des JMJ? des JMJ 2023?
                    Quels sont les symboles des JMJ? Quel est le programme sur place? Où puis-je dormir? Quels sont les transports?
                    Ques dois-je emporter dans mon sac? Si je tombe malade? Dois-je prendre une assurance personnelle? Qui contacter en cas de problème?
                    Y a-t-il un numéro vert pour les belges? Quelle est la monnaiée utilisée sur place? Lisbonne est-elle un ville sûre?
                    Et si je perds mon passeport?

                    Qui peut s'inscrire aux JMJ? Quel est l'âge limite pour s'inscrire? Comment s'inscrire aux JMJ?
                    Comment trouver un groupe pour partir aux JMJ? Comment devenir bénévole / volontaire ? Quel est
                    l'impact écologique des JMJ? Je suis d'une autre religion ou communauté religieuse, puis-je participer?
                    C'est quoi les JMJ? Qui choisis le pays d'accueil des JMJ ? Quel est le but des JMJ? Quel est le thème des JMJ? des JMJ 2023?
                    Quels sont les symboles des JMJ? Quel est le programme sur place? Où puis-je dormir? Quels sont les transports?
                    Ques dois-je emporter dans mon sac? Si je tombe malade? Dois-je prendre une assurance personnelle? Qui contacter en cas de problème?
                    Y a-t-il un numéro vert pour les belges? Quelle est la monnaiée utilisée sur place? Lisbonne est-elle un ville sûre?
                    Et si je perds mon passeport?

                    Qui peut s'inscrire aux JMJ? Quel est l'âge limite pour s'inscrire? Comment s'inscrire aux JMJ?
                    Comment trouver un groupe pour partir aux JMJ? Comment devenir bénévole / volontaire ? Quel est
                    l'impact écologique des JMJ? Je suis d'une autre religion ou communauté religieuse, puis-je participer?
                    C'est quoi les JMJ? Qui choisis le pays d'accueil des JMJ ? Quel est le but des JMJ? Quel est le thème des JMJ? des JMJ 2023?
                    Quels sont les symboles des JMJ? Quel est le programme sur place? Où puis-je dormir? Quels sont les transports?
                    Ques dois-je emporter dans mon sac? Si je tombe malade? Dois-je prendre une assurance personnelle? Qui contacter en cas de problème?
                    Y a-t-il un numéro vert pour les belges? Quelle est la monnaiée utilisée sur place? Lisbonne est-elle un ville sûre?
                    Et si je perds mon passeport?
                </div>
            </div>
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