<script>
	let y;
	export let minHeight = 300;

	function scrollUp() {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}
</script>

<svelte:window bind:scrollY={y}/>

<div class="hidden md:block fixed right-8 bottom-8 transition duration-700
						{y > minHeight ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-20 opacity-0 scale-0'}"
		 on:click={scrollUp}>
	<button type='button'
					class="flex justify-center items-center w-12 h-12 bg-white bg-opacity-50 rounded-full shadow transition duration-200 hover:scale-110">
		<span class='text-xl font-bold'>^</span>
	</button>
</div>
