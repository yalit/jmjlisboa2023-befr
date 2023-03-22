<script lang="ts">
    import type { FAQ } from "./faqs";
    import './FAQQuestion.scss';
    import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
    import { faCaretDown, faCaretRight } from "@fortawesome/free-solid-svg-icons";

    export let opened = false;
    export let faq: FAQ;
    export let idx: number;
    export let switchQuestion: (idx) => void
    
</script>

<div class={"faq" + (opened ? ' opened' : '')} on:click={() => switchQuestion(idx)} on:keydown={() => switchQuestion(idx)}>
    <div class="question">
        {#if opened} 
            <FontAwesomeIcon icon={faCaretDown}/>
        {:else}
            <FontAwesomeIcon icon={faCaretRight}/>
        {/if}
        {faq.question}
    </div>
    <div class="answer">
        {@html faq.answer}
    </div>
</div>