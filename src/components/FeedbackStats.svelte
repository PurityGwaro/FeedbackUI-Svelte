<script>
    export let count;
    export let average;
</script>
<div class="feedback-stats">
    <h4>{count} Reviews</h4>
    <h5>Ratings Average: {average}</h5>
</div>
<style>
    .feedback-stats{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>