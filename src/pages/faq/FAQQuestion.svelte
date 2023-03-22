<script lang="ts">
    import type { FAQ } from "./faqs";

    export let opened = false;
    export let faq: FAQ
</script>

<div class="faq">
    <div class="question">
        {faq.question}
    </div>
    <div class="answer">
        {@html faq.answer}
    </div>
</div>