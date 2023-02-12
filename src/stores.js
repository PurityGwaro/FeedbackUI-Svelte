import {writable} from 'svelte/store'

export const FeedbackStore = writable(
    [
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
)