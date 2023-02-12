<script>
  import FeedbackForm from "./components/FeedbackForm.svelte";
  import FeedbackList from "./components/FeedbackList.svelte";
  import FeedbackStats from "./components/FeedbackStats.svelte";

	let feedback = [
		{
			id: 1,
			rating: 10,
			text:"lorem ipsum lorem ipsum lorem ipsum",
		},
		{
			id: 2,
			rating: 5,
			text:"lorem ipsum lorem ipsum lorem ipsum",
		},
		{
			id: 3,
			rating: 8,
			text:"lorem ipsum lorem ipsum lorem ipsum",
		},
	]
	$: count = feedback.length
	$: average =  feedback.reduce((a,{rating})=>a + rating,0) /feedback.length
	const deleteFeedback=(e)=>{
		const itemId = e.detail
		feedback = feedback.filter((item) => item.id != itemId)
	}
</script>

<main class="container">
	<FeedbackForm/>
	<FeedbackStats {count} {average}/>
	<!-- <FeedbackList feedback={feedback}/> -->
	<FeedbackList {feedback} on:delete-feedback={deleteFeedback}/>
</main>