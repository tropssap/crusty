<script lang="ts">
</script>

<svelte:head>
	<title>Welcome to Crusty Crab</title>
	<meta
		name="description"
		content="Crusty Crab offers the finest seafood dining experience. Discover our delicious menu and order your favorite dishes now!"
	/>
</svelte:head>

<div class="container" style="background-image: url({'/images/bgimg.jpg'})">
	<h1>Welcome to Crusty Crab</h1>
	<p>Discover our delicious items and enjoy a unique dining experience.</p>
	<a href="/items">View Items</a>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: calc(100vh - 12rem); /* Subtract header and footer height */
		padding: 2rem;
		text-align: center;
	}

	h1 {
		font-size: 3rem;
		margin-bottom: 1rem;
	}

	p {
		font-size: 1.2rem;
		margin-bottom: 2rem;
	}

	a {
		font-size: 1.1rem;
		text-decoration: none;
		color: #e5e5e5;
		background-color: #233b6c;
		padding: 0.5rem 1rem;
		border-radius: 4px;
	}

	a:hover {
		background-color: #e5e5e5;
		color: #233b6c;
	}
</style>
