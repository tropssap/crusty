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
	<p class="item-price">{item.price.toFixed(2)}</p>
	<a href={`/items/${item.id}`}>View Details</a>
</div>

<style>
	.item-card {
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: #fff;
		border-radius: 10px;
		padding: 1rem;
		max-width: 300px;
		max-height: 350px;
		box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
		transition: box-shadow 0.3s ease-in-out;
	}

	.item-card:hover {
		box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
	}

	.item-image {
		width: 100%;
		height: 200px;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		border-radius: 10px 10px 0 0;
		margin-bottom: 1rem;
	}

	.item-name {
		font-size: 1.5rem;
		font-weight: 700;
		margin-bottom: 0.5rem;
		color: #233b6c;
		text-align: center;
	}

	.item-price {
		font-size: 1.3rem;
		color: #233b6c;
		margin-bottom: 1rem;
		font-weight: 600;
		text-align: center;
	}

	.item-price::before {
		content: '$';
	}

	a {
		font-size: 1.2rem;
		text-decoration: none;
		background-color: #233b6c;
		color: #fff;
		padding: 0.5rem 1rem;
		border-radius: 4px;
		transition: background-color 0.3s ease-in-out;
	}

	a:hover {
		color: #fff;
		background-color: #e74c3c;
	}

	@media screen and (max-width: 768px) {
		.item-card {
			max-width: 100%;
			max-height: none;
			box-shadow: none;
			margin-bottom: 2rem;
			border-radius: 10px;
		}

		.item-image {
			height: 180px;
			border-radius: 10px 10px 0 0;
		}

		.item-name {
			font-size: 1.3rem;
			font-weight: 700;
			margin-bottom: 0.5rem;
			color: #233b6c;
			text-align: center;
		}

		.item-price {
			font-size: 1.1rem;
			color: #233b6c;
			margin-bottom: 1rem;
			font-weight: 600;
			text-align: center;
		}
	}
</style>
