<script lang="ts">
    import './page.scss';
    import Header from '../header/header.svelte';
    import Footer from "../../shared/footer/footer.svelte";

    export let backColor: string;
</script>

<Header backColor={backColor}>
    <slot name="image" slot="header_image" />
    <slot name="header_text" slot="text" />
</Header>

<slot name="content" />

<Footer />
