<script lang="ts">
    import "./socials.scss"
    import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
    import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
    import links, { FACEBOOK, INSTAGRAM, YOUTUBE } from "../../lib/data/links";


    export let backColor: string = '#d43425' ;
    export let color: string = '#fff';
</script>

<div class="socials" style="--social-back: {backColor}; --social-color: {color}">
    <div class="social">
        <a href="{links[INSTAGRAM]}" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
        </a>
    </div>
    <div class="social">
        <a href="{links[YOUTUBE]}" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faYoutube} />
        </a>
    </div>
    <div class="social">
        <a href="{links[FACEBOOK]}" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
        </a>
    </div>
</div>

