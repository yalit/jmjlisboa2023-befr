<script lang="ts">
    import './page.scss';
    import Header from '../header/header.svelte';
    import Footer from "../../shared/footer/footer.svelte";

    export let backColor: string;
</script>

<Header backColor={backColor}>
    <div class="back" slot="back">
        <slot name="header_back"></slot>
    </div>
    <div class="main" slot="main">
        <slot name="header_main"></slot>
    </div>
</Header>

<slot name="content"></slot>

<Footer />
