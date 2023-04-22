<script lang="ts">
	import { onDestroy } from 'svelte';
	import cart, { updateItemQuantity, clearCart } from '../../lib/stores/cart';
	import type { CartItem } from '../../lib/stores/cart';

	let cartItems: CartItem[] = [];

	const unsubscribe = cart.subscribe((value) => {
		cartItems = value;
	});

	onDestroy(() => {
		unsubscribe();
	});

	function handleChangeQuantity(itemId: string, event: Event) {
		const target = event.target as HTMLInputElement;
		const quantity = parseInt(target.value, 10);
		updateItemQuantity(itemId, quantity);
	}
</script>

<main>
	<div class="container">
		<h1>Cart</h1>
		<ul>
			{#each cartItems as item (item.id)}
				<li>
					<img src={item.imageUrl} alt={item.name} />
					<h3>{item.name}</h3>
					<p>${item.price.toFixed(2)}</p>
					<label>
						Quantity:
						<input
							type="number"
							min="1"
							value={item.quantity}
							on:input={(event) => handleChangeQuantity(item.id, event)}
						/>
					</label>
				</li>
			{/each}
		</ul>
		<button on:click={clearCart}>Clear</button>
	</div>
</main>

<svelte:head>
	<title>Cart - Crusty Crab</title>
	<meta name="description" content="View and manage your cart items at Crusty Crab." />
</svelte:head>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 2rem;
		min-height: calc(100vh - 12rem); /* Subtract header and footer height */
	}

	h1 {
		font-size: 2rem;
		margin-bottom: 2rem;
	}

	ul {
		list-style-type: none;
		padding: 0;
		margin: 0;
		width: 100%;
		max-width: 800px;
	}

	li {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid #ccc;
		padding: 1rem 0;
	}

	img {
		width: 100px;
		height: auto;
		margin-right: 1rem;
	}

	h3 {
		font-size: 1.5rem;
		margin: 0;
	}

	p {
		font-size: 1.2rem;
		margin: 0 1rem;
	}

	label {
		font-size: 1.1rem;
	}

	input[type='number'] {
		width: 4rem;
		margin-left: 0.5rem;
	}

	button {
		font-size: 1rem;
		text-decoration: none;
		color: #fff;
		background-color: #333;
		padding: 0.5rem 1rem;
		border-radius: 4px;
		margin-top: 2rem;
	}

	button:hover {
		background-color: #555;
	}
</style>
