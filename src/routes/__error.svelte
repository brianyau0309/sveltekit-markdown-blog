<script>
	import { goto } from '$app/navigation';
	import { Button } from '$lib/ui/core/Button';
</script>

<div class="w-full text-center">
	<h1 class="text-3xl lg:text-8xl my-5 lg:my-10">404 Not Found</h1>
	<Button on:click={() => goto('/blog')} className="text-xl lg:text-2xl">
		Back to home
	</Button>
</div>
