<script lang="ts">
    import './modal.scss'
    import {FontAwesomeIcon} from "@fortawesome/svelte-fontawesome";
    import {faTimes} from "@fortawesome/free-solid-svg-icons";

    export let shown: boolean;
    export let close;
    $: hidden = shown ? "" : "hidden"

    const on_key_up = (e) => {
      switch (e.key) {
        case "Escape":
          e.preventDefault();
          close();
      }
    }

</script>

<svelte:window on:keyup={on_key_up}/>

<div class="relative z-10 {hidden}" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" on:click={close}></div>
    <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-0 text-center sm:items-center sm:p-0">
            <div class="modal relative w-10/12 transform overflow-hidden rounded-lg bg-white p-0 text-left shadow-xl transition-all sm:my-8 md:w-8/12">
                <div class="modal-close" on:click={close}><FontAwesomeIcon icon={faTimes} /></div>
                <slot name="content"></slot>
            </div>
        </div>
    </div>
</div>
