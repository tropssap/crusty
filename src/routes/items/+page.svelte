<script lang="ts">
	import { onMount } from 'svelte';
	import ItemCard from '../../lib/components/ItemCard.svelte';
	import type { Item } from './item';
	// import { getAllItems } from '../../lib/services/ItemAPI';

	// let items: Array<Item> = [];
	const items: Item[] = [
		{
			id: '1',
			name: 'Item 1',
			description: 'This is item 1',
			price: 10,
			imageUrl: 'https://example.com/item1.jpg'
		},
		{
			id: '2',
			name: 'Item 2',
			description: 'This is item 2',
			price: 20,
			imageUrl: 'https://example.com/item2.jpg'
		},
		{
			id: '3',
			name: 'Item 3',
			description: 'This is item 3',
			price: 30,
			imageUrl: 'https://example.com/item3.jpg'
		},
		{
			id: '4',
			name: 'Item 4',
			description: 'This is item 4',
			price: 40,
			imageUrl: 'https://example.com/item4.jpg'
		},
		{
			id: '5',
			name: 'Item 5',
			description: 'This is item 5',
			price: 50,
			imageUrl: 'https://example.com/item5.jpg'
		}
	];

	// onMount(async () => {
	// 	items = await getAllItems();
	// });
</script>

<main>
	<div class="container">
		{#each items as item (item.id)}
			<ItemCard {item} />
		{/each}
	</div>
</main>

<style>
	.container {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 2rem;
		padding: 2rem;
	}
</style>
