<script>
    import {FeedbackStore} from '../stores'
    import Card from "./Card.svelte";
    export let item


    const handleDelete = (itemId) =>{
        FeedbackStore.update((currentFeedback)=>{
            return currentFeedback.filter(item => item.id != itemId)
        })
    }

</script>

<Card>
    <!-- anything we want in the card goes here, we use slots to achieve this functionality -->
    <div class="num-display">
        {item.rating}
    </div>
    <button class="close" on:click={()=>handleDelete(item.id)}>X</button>
    <div class="text-display">
        {item.text}
    </div>
</Card>

<style>
    .num-display{
        position: absolute;
        top: -10px;
        left: -10px;
        width: 50px;
        height: 50px;
        background: #ff6a95;
        color: #fff;
        border: 1px #eee solid;
        border-radius: 50%;
        padding: 10px;
        text-align: center;
        font-size: 19px;
    }
    .close{
        width: 25px;
        height: 25px;
        position: absolute;
        top: 10px;
        right: 20px;
        cursor: pointer;
        background: none;
        border: none;
    }
    .close:hover{
        background: #333;
        color: #fff;
        /* padding: 3px 8px; */
        border: 1px dotted #ff6a95;
        border-radius: 8px;
    }
</style>