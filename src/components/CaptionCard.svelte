<script>
	export let src;
</script>

<article class="mx-auto w-64 bg-white rounded shadow-xl transition duration-300 hover:scale-105">
	<div class='flex justify-center items-center p-4'>
		<img src='{src}' alt='' class='object-contain'>
	</div>

	<div class='flex flex-col gap-2 p-4'>
		<h3 class="text-xl font-semibold text-center">
			<slot name="title">Title</slot>
		</h3>

		<p class="text-center">
			<slot name="content">Content</slot>
		</p>
	</div>
</article>
