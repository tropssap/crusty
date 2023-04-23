<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import type { Item } from '../item';
	import { getItemById } from '../../../lib/services/ItemAPI';
	import { addItemToCart } from '../../../lib/stores/cart';
	let itemId: string;
	let item: Item;
	$: itemId = $page.params.itemId;
	onMount(async () => {
		item = await getItemById(itemId);
	});
</script>

<svelte:head>
	{#if item}
		<title>{item.name} - Crusty Crab</title>
		<meta
			name="description"
			content="Discover our delicious {item.name}: {item.description}. Order now at Crusty Crab for an unforgettable seafood experience!"
		/>
		<!-- Open Graph Tags -->
		<meta property="og:title" content="{item.name} - Crusty Crab" />
		<meta
			property="og:description"
			content="Discover our delicious {item.name}: {item.description}. Order now at Crusty Crab for an unforgettable seafood experience!"
		/>
		<meta property="og:image" content={item.imageUrl} />
		<meta property="og:type" content="website" />
		<meta property="og:url" content={`https://e2b23c98.crusty.pages.dev/items/${itemId}`} />
	{:else}
		<title>Loading Item - Crusty Crab</title>
		<meta
			name="description"
			content="Loading item details. Explore our mouthwatering menu and order your favorite seafood dishes from Crusty Crab!"
		/>
	{/if}
</svelte:head>

<main>
	<div class="container">
		{#if item}
			<div class="item-image" style="background-image: url({item.imageUrl})" />
			<h2 class="item-name">{item.name}</h2>
			<p class="item-price">${item.price.toFixed(2)}</p>
			<p class="item-description">{item.description}</p>

			<button on:click={() => addItemToCart(item)}>Add to Cart</button>
			<!-- <a href="/items">Back to Items</a> -->
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
		min-height: calc(100vh - 12rem); /* Subtract header and footer height */
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

	button {
		font-size: 1rem;
		text-decoration: none;
		color: #fff;
		background-color: #333;
		padding: 0.5rem 1rem;
		border-radius: 4px;
	}

	button:hover {
		background-color: #555;
	}
</style>
