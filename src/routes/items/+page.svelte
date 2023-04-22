<script lang="ts">
	import { onMount } from 'svelte';
	import ItemCard from '../../lib/components/ItemCard.svelte';
	import type { Item } from './item';
	import { getAllItems } from '../../lib/services/ItemAPI';

	let items: Array<Item> = [];

	onMount(async () => {
		items = await getAllItems();
	});
</script>

<svelte:head>
	<title>Items - Crusty Crab</title>
	<meta
		name="description"
		content="Explore our mouthwatering menu of seafood dishes at Crusty Crab. Order now for an unforgettable dining experience!"
	/>
</svelte:head>

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
		min-height: calc(100vh - 12rem); /* Subtract header and footer height */
	}
</style>
