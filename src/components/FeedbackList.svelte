<script>
  import {fade,scale} from 'svelte/transition'
  import FeedbackItem from "./FeedbackItem.svelte";

    export let feedback = []
</script>

{#each feedback as fb (fb.id)}
<!-- through event forwarding we forward the delete-feedback event to the App file where the data is -->
<div in:scale out:fade="{{duration: 500}}">
  <FeedbackItem item = {fb} on:delete-feedback/>
</div>
{/each}