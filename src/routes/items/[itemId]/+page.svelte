<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import type { Item } from '../item';
	// import { getItemById } from '../../../lib/services/ItemAPI';

	let itemId: string;
	let item: Item;

	$: itemId = $page.params.itemId;

	// onMount(async () => {
	// 	item = await getItemById(itemId);
	// });
</script>

<main>
	<div class="container">
		{#if item}
			<div class="item-image" style="background-image: url({item.imageUrl})" />
			<h2 class="item-name">{item.name}</h2>
			<p class="item-price">${item.price.toFixed(2)}</p>
			<p class="item-description">{item.description}</p>
			<a href="/items">Back to Items</a>
		{:else}
			<p>Loading...</p>
		{/if}
	</div>
</main>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 2rem;
	}

	.item-image {
		width: 100%;
		max-width: 500px;
		height: 300px;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		border-radius: 5px;
		margin-bottom: 1rem;
	}

	.item-name {
		font-size: 2rem;
		font-weight: bold;
		margin-bottom: 1rem;
	}

	.item-price {
		font-size: 1.5rem;
		color: #333;
		margin-bottom: 1rem;
	}

	.item-description {
		font-size: 1.2rem;
		margin-bottom: 2rem;
		text-align: center;
	}

	a {
		font-size: 1rem;
		text-decoration: none;
		color: #fff;
		background-color: #333;
		padding: 0.5rem 1rem;
		border-radius: 4px;
	}

	a:hover {
		background-color: #555;
	}
</style>
