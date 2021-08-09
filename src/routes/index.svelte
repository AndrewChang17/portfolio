<script>
    import CaptionCard from '../components/CaptionCard.svelte';
    import { onMount } from 'svelte';

    onMount(() => {
        // Remove the transition class
        const fadeout = document.querySelector('.fade-out');

        // Create the observer, same as before:
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    fadeout.classList.add('opacity-100');
                    fadeout.classList.remove('opacity-0');
                }
                else {
                    fadeout.classList.add('opacity-0');
                    fadeout.classList.remove('opacity-100');
                }
            });
        });
        observer.observe(fadeout);
    });
</script>

<svelte:head>
    <title>Andrew Chang</title>
</svelte:head>


<section id="hero" class="relative w-full h-[720px]">
    <div class="absolute inset-x-0 top-[20%] px-4 m-auto space-y-8 w-full md:w-[700px] text-4xl text-white transition-opacity duration-700 h-max font-quicksand fade-out">
        <p class="">Hello world</p>
        <h1 class=""
            data-aos='fade-up' data-aos-duration='1000'>
            I'm <span class="font-semibold text-green-300">Andrew Chang</span>
        </h1>
        <p class="text-2xl font-semibold text-cyan-300"
           data-aos='fade-up' data-aos-duration='1000' data-aos-delay='500'>
            Frontend web developer
        </p>
        <p class="text-xl font-semibold text-yellow-200"
           data-aos='fade-up' data-aos-duration='1000' data-aos-delay='1000'>
            <span class="mr-2">Vancouver, Canada</span> 🇨🇦
        </p>
    </div>
</section>

<section class='flex flex-col gap-4 items-center py-8 bg-gray-100'>
    <h2 class='my-8 text-3xl font-semibold'>What I do.</h2>
    <div class='container grid grid-cols-1 gap-8 max-w-screen-lg md:grid-cols-3' data-aos='fade-up' data-aos-duration="750">
        <CaptionCard src={'static/coding.png'}>
            <span slot='title'>Web Development</span>
            <span slot='content'>I build</span>
        </CaptionCard>

        <CaptionCard src={'static/devices.png'}>
            <span slot='title'>UI / UX</span>
            <span slot='content'>I improve</span>
        </CaptionCard>

        <CaptionCard src={"static/graphics.png"}>
            <span slot='title'>Graphics</span>
            <span slot='content'>I design</span>
        </CaptionCard>
    </div>
</section>

<section class=''></section>


<style>
    #hero {
        background-image: url("../../static/jessy-smith-zFOm6KzA-7g-unsplash.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }
</style>
