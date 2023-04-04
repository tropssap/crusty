<script lang="ts">
	import { onMount } from 'svelte';
	let activePage: string;

	onMount(() => {
		const path = window.location.pathname;
		activePage = path === '/' ? 'home' : path.slice(1);
	});
</script>

<header>
	<a href="/" class="logo">Crusty Crab</a>
	<nav class="nav">
		<a href="/" class="nav-item {activePage === 'home' ? 'active' : ''}">Home</a>
		<a href="/about" class="nav-item {activePage === 'about' ? 'active' : ''}">About</a>
		<a href="/items" class="nav-item {activePage === 'items' ? 'active' : ''}">Items</a>
	</nav>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem;
		background-color: #333;
	}

	.logo {
		font-size: 1.5rem;
		color: #fff;
		text-decoration: none;
	}

	.nav {
		display: flex;
	}

	.nav-item {
		margin-left: 1rem;
		color: #fff;
		text-decoration: none;
	}

	.nav-item.active {
		font-weight: bold;
	}
</style>
