<script>
  import FeedbackList from "./components/FeedbackList.svelte";

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
	const deleteFeedback=(e)=>{
		const itemId = e.detail
		feedback = feedback.filter((item) => item.id != itemId)
	}
</script>

<main class="container">
	<!-- <FeedbackList feedback={feedback}/> -->
	<FeedbackList {feedback} on:delete-feedback={deleteFeedback}/>
</main>