<script>
	let date = new Date();
	const year = date.getFullYear();
</script>

<footer class="flex flex-col gap-2 justify-center items-center w-full h-24 bg-gray-100 z-10">
	<a href="https://www.linkedin.com/in/andrewchang17/" title="Follow on LinkedIn" target='_blank'
		 class='flex justify-center items-center w-8 h-8 bg-black bg-opacity-60 rounded-full hover:bg-opacity-100 hover:shadow'>
		<i class="fa fa-linkedin" style='color:white'></i>
	</a>
	<div class="font-quicksand text-xs font-semibold text-center">
		© {year} Andrew Chang
	</div>
</footer>
