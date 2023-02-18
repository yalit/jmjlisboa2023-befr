<script lang="ts">
    import "./cestquoi.scss";
    import Header from '../shared/header/header.svelte';
    import Madrid from "./madrid.svelte";
    import Footer from "../shared/footer/footer.svelte";
    import Content from "./content.svelte";
</script>

<Header backColor="#00893e">
    <div class="back" slot="back"></div>
    <div class="main" slot="main">
        <Madrid />
    </div>
</Header>

<Content />

<Footer />
