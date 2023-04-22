<script lang="ts">
	export let item: {
		id: string;
		name: string;
		description: string;
		price: number;
		imageUrl: string;
	};
</script>

<div class="item-card">
	<div class="item-image" style="background-image: url({item.imageUrl})" />
	<h3 class="item-name">{item.name}</h3>
	<p class="item-price">${item.price.toFixed(2)}</p>
	<a href={`/items/${item.id}`}>View Details</a>
</div>

<style>
	.item-card {
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: #f0f0f0;
		border-radius: 5px;
		padding: 1rem;
		max-width: 300px;
		max-height: 300px;
	}

	.item-image {
		width: 100%;
		height: 200px;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		border-radius: 5px;
		margin-bottom: 1rem;
	}

	.item-name {
		font-size: 1.2rem;
		font-weight: bold;
		margin-bottom: 0.5rem;
	}

	.item-price {
		font-size: 1.1rem;
		color: #333;
		margin-bottom: 1rem;
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
