<script lang="ts">
    import { faArrowTurnDown } from "@fortawesome/free-solid-svg-icons";
    import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
    import "./content.scss";
</script>

<section class="content">
    <div class="section-container">
        <div class="text-part">
            <div class="hookup">
                <div>Découvre</div>
                <div class="emphasized red">Tout sur les jmj</div>
                <div>et en particulier</div>
                <div>sur celle de cette année</div>
                <div class="emphasized red">à Lisbonne</div>
            </div>
        </div>

        <div class="articles">
            <article></article>
            <article></article>
            <article></article>
            <article></article>
        </div>

        <div class="actions">
            <div class="action none"></div>
            <div class="action">
                <span>Tu ne pars pas aux JMJ ? </span> <FontAwesomeIcon icon={faArrowTurnDown} />
            </div>
            <div class="action">
                <a href="#">Découvre d'autres activités, groupes et outils sur Church4You.be</a>
            </div>
        </div>
    </div>
</section>