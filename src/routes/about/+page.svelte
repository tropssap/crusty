<main>
	<div class="container">
		<h1>About Crusty Crab</h1>
		<p>
			Crusty Crab is a family-owned restaurant that has been serving delicious seafood dishes since
			2005. We pride ourselves on using the freshest ingredients, and our chefs are constantly
			experimenting with new recipes and flavors to bring a unique dining experience to our
			customers.
		</p>
		<p>
			Our menu offers a wide range of seafood options, from classic fish and chips to our signature
			crab dishes. We also cater to non-seafood lovers, offering a selection of salads, burgers, and
			other mouth-watering alternatives.
		</p>
		<p>
			We are dedicated to providing excellent service and a friendly atmosphere to ensure that every
			guest feels welcome and leaves satisfied. Come join us at Crusty Crab for an unforgettable
			seafood dining experience!
		</p>
	</div>
</main>

<svelte:head>
	<title>About - Crusty Crab</title>
	<meta
		name="description"
		content="Learn more about Crusty Crab, the best seafood restaurant in town. Our commitment to quality and taste ensures an unforgettable dining experience!"
	/>
</svelte:head>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 2rem;
		max-width: 800px;
		margin: 0 auto;
		min-height: calc(100vh - 12rem); /* Subtract header and footer height */
	}

	h1 {
		font-size: 2.5rem;
		margin-bottom: 1rem;
	}

	p {
		font-size: 1.2rem;
		margin-bottom: 1rem;
		text-align: justify;
	}
</style>
