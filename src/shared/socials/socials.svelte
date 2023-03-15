<script lang="ts">
    import "./socials.scss"
    import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
    import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";


    export let backColor: string = '#d43425' ;
    export let color: string = '#fff';
</script>

<div class="socials" style="--social-back: {backColor}; --social-color: {color}">
    <div class="social">
        <a href="https://www.instagram.com/church4you.be/?hl=fr" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
        </a>
    </div>
    <div class="social">
        <a href="https://www.youtube.com/JMJbelgique" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faYoutube} />
        </a>
    </div>
    <div class="social">
        <a href="https://www.facebook.com/Church4you.be/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
        </a>
    </div>
</div>

