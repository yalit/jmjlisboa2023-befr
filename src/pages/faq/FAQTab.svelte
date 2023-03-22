<script lang="ts">
    import FaqQuestion from "./FAQQuestion.svelte";
    import { getFaqs, tags, type TagId } from "./faqs";

    export let tagID: TagId;
    export let visible: boolean = false;

    let currentQuestion: number = 0;

    const faqs = getFaqs(tagID)
    
</script>

{#if visible}
    <div class="tab">
        {#each faqs as faq, idx}
            <FaqQuestion faq={faq} opened={idx == currentQuestion} idx={idx} switchQuestion={(idx => currentQuestion = idx)}/>
        {/each}
    </div>
{/if}