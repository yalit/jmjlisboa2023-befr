<script lang="ts">
    import FaqQuestion from "./FAQQuestion.svelte";
    import { getFaqs, tags, type TagId } from "./faqs";

    export let tagID: TagId;
    export let visible: boolean = false;

    const faqs = getFaqs(tagID)
    console.log(tagID);
</script>

{#if visible}
    <div class="tab">
        {tagID}
        {#each faqs as faq}
            <FaqQuestion faq={faq} />
        {/each}
    </div>
{/if}