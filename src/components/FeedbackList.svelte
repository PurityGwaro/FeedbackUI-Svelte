<script>
  import FeedbackItem from "./FeedbackItem.svelte";

    export let feedback = []
</script>

{#each feedback as fb (fb.id)}
<!-- through event forwarding we forward the delete-feedback event to the App file where the data is -->
    <FeedbackItem item = {fb} on:delete-feedback/>
{/each}