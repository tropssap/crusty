<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import Icon from '@iconify/svelte';

	import { auth } from '../lib/firebase';

	let isLoggedIn = false;

	auth.onAuthStateChanged((user) => {
		isLoggedIn = !!user;
	});

	async function handleLogout() {
		await auth.signOut();
	}
	let activePage: string;

	$: path = $page.url.pathname;
	onMount(() => {
		activePage = path === '/' ? 'home' : path.slice(1);
	});
</script>

<header>
	<a href="/" class="logo">Crusty Crab</a>
	<nav class="nav">
		<a href="/" class="nav-item {activePage === 'home' ? 'active' : ''}">Home</a>
		<a href="/about" class="nav-item {activePage === 'about' ? 'active' : ''}">About</a>
		<a href="/items" class="nav-item {activePage === 'items' ? 'active' : ''}">Menu</a
		>{#if isLoggedIn}
			<a href="/add" class="nav-item {activePage === 'items' ? 'active' : ''}"
				><Icon icon={'mdi:add'} color="white" /></a
			>
			<button on:click={handleLogout} title="Log Out">
				<Icon icon={'mdi:logout'} color="white" />
			</button>
		{:else}
			<a href="/login" class="nav-item {activePage === 'items' ? 'active' : ''}"
				><Icon icon={'mdi:login'} color="white" /></a
			>
		{/if}
		<a href="/cart" class="nav-item {activePage === 'items' ? 'active' : ''}"
			><Icon icon={'mdi:cart'} color="white" /></a
		>
	</nav>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem;
		background-color: #233b6c;
	}

	.logo {
		font-size: 2rem;
		font-weight: bold;
		color: #fff;
		text-decoration: none;
	}

	.nav {
		display: flex;
		align-items: center;
	}

	.nav-item {
		margin-left: 1.5rem;
		color: #fff;
		text-decoration: none;
		font-size: 1.2rem;
	}

	.nav-item:hover {
		color: #f1c40f;
	}

	.nav-item.active {
		font-weight: bold;
	}

	button {
		background: #f1c40f;
		border: none;
		cursor: pointer;
		padding: 0.5rem;
		margin-left: 1.5rem;
		color: #fff;
		font-size: 1.2rem;
	}

	button:hover {
		background: #e67e22;
	}
</style>
