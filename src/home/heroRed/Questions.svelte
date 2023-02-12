<script lang="ts">
    import './questions.scss';

    export let height;
    let questions;
    let scrollY = 0;
    const scrollQuestions = () => {
      if (questions === undefined) {
        return;
      }
      const container = questions.getElementsByClassName('questions-container')[0];
      const questionLists = questions.getElementsByClassName('question-list');
      const lastList = questionLists[questionLists.length - 1];

      if (scrollY % 100 === 0) {
        let newList = document.createElement('div');
        newList.innerHTML = lastList.innerHTML
        newList.classList.add('question-list')

        container.appendChild(newList)
      }
      scrollY += 10;
      container.style.transform = `translateY(-${scrollY}px)`
    }

    setInterval(scrollQuestions, 1000)
</script>

<div class="questions" bind:this={questions}>
    <div class="questions-container">
        <div class="question-list">
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
