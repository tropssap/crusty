<script lang="ts">
	import { loginUser } from '../../lib/auth/auth';
	import { goto } from '$app/navigation';

	let email = '';
	let password = '';
	let errorMessage = '';

	async function handleSubmit(event: Event) {
		event.preventDefault();
		try {
			await loginUser(email, password);
			goto('/');
		} catch (error) {
			errorMessage = (error as Error).message || 'An error occurred during authentication.';
		}
	}
</script>

<main>
	<div class="form-container">
		<h1>Login</h1>
		{#if errorMessage}
			<div class="error-message">{errorMessage}</div>
		{/if}
		<form on:submit={handleSubmit}>
			<label for="email">Email:</label>
			<input type="email" id="email" bind:value={email} required />

			<label for="password">Password:</label>
			<input type="password" id="password" bind:value={password} required />

			<button type="submit" disabled={!password || !email}>Login</button>
		</form>
	</div>
</main>

<svelte:head>
	<title>Login - Crusty Crab</title>
	<meta name="description" content="Log in to access exclusive features at Crusty Crab." />
</svelte:head>

<style>
	.form-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 2rem;
		max-width: 600px;
		margin: 0 auto;
	}

	form {
		display: flex;
		flex-direction: column;
		width: 100%;
	}

	input {
		font-size: 1rem;
		padding: 0.5rem;
		margin-bottom: 1rem;
		border: 1px solid #ccc;
		border-radius: 4px;
	}

	button {
		font-size: 1rem;
		padding: 0.5rem 1rem;
		background-color: #007bff;
		border: none;
		border-radius: 4px;
		color: white;
		cursor: pointer;
	}

	button:hover {
		background-color: #0056b3;
	}

	button:disabled {
		background-color: #ccc;
		cursor: not-allowed;
	}

	.error-message {
		color: #d9534f;
		margin-bottom: 1rem;
	}
</style>
