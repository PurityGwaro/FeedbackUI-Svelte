<script>
    import {FeedbackStore} from '../stores'

    $: count = $FeedbackStore.length
	$: average =  $FeedbackStore.reduce((a,{rating})=>a + rating,0) /$FeedbackStore.length

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