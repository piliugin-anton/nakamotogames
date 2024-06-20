<script lang="ts">
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import "../app.css";
	import './styles.css';
</script>

<svelte:head>
  	<link href="https://fonts.googleapis.com/css?family=Lora" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Spartan" rel="stylesheet">
</svelte:head>

<div class="flex flex-column flex-wrap min-h-full">
	<Header />

	<main class="min-w-full">
		<slot />
	</main>

	<Footer />
</div>