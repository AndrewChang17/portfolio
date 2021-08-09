<script>
    let loaded = false;
</script>

<svelte:window on:load="{() => loaded = true}" />

<header class="sticky top-0 px-16 py-2 z-50 bg-white bg-opacity-25">
    <nav class="flex justify-between items-center">
        <a href="/">
            <img src='static/logo.png' alt='' class='w-12 h-12'>
        </a>
        <div class="flex justify-between items-center gap-8">
            <a href="/">Home</a>
            <a href="/about">About</a>
        </div>
    </nav>
</header>
