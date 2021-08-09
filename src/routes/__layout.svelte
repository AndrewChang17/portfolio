<script>
import "../app.postcss";
import Header from "../components/Header.svelte";
import Footer from '../components/Footer.svelte';
import ScrollUp from '../components/ScrollUp.svelte';

let loaded = false;
</script>

<svelte:window on:load="{() => loaded = true}" />

{#if loaded}
	<Header/>

	<slot></slot>

	<ScrollUp/>

	<Footer/>
{/if}
