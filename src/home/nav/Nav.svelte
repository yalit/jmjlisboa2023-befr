<script lang="ts">
    import './nav.scss';
    import {FontAwesomeIcon} from '@fortawesome/svelte-fontawesome';
    import {faAngleDoubleRight} from '@fortawesome/free-solid-svg-icons'
    import Header from '../../shared/header/header.svelte';
    import links, { C4Y_PAGE, CESTQUOI_PAGE, PROPOSALS_PAGE } from '../../lib/data/links';

    let backImage = '/img/navbar/back_crowd.png';
</script>

<Header backColor="#fff">
    <div class="back" slot="back" style="--back-image: url({backImage})"></div>
    <div class="main-title" slot="main">
        <p>en route</p>
        <p>pour les JMJ</p>
        <p>avec la belgique</p>
    </div>

    <div class="main-menu" slot="secondary">
        <div class="text-green background-white">
            <a href="{links[CESTQUOI_PAGE]}">
                <span class="arrow-left"><FontAwesomeIcon icon={faAngleDoubleRight} /></span>
                <span>Les JMJ c'est quoi ?</span>
            </a>
        </div>
        <div class="text-red background-white">
            <a href="{links[PROPOSALS_PAGE]}">
                <span class="arrow-left"><FontAwesomeIcon icon={faAngleDoubleRight} /></span>
                <span>Différentes propositions</span>
            </a>
        </div>
        <div class="text-orange background-white">
            <a href="{links[C4Y_PAGE]}">
                <span class="arrow-left"><FontAwesomeIcon icon={faAngleDoubleRight} /></span>
                <span>Infos Church4You</span>
            </a>
        </div>
    </div>
</Header>
