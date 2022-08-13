<script>
	import { goto } from '$app/navigation';
	import { Button } from '$lib/ui/core/Button';
</script>

<div class="w-full text-center flex-grow py-32">
	<h1 class="text-4xl lg:text-8xl my-8 lg:my-16">404 Not Found</h1>
	<Button
		on:click={() => goto('/')}
		className="text-md lg:text-2xl text-secondary-with-dark bg-secondary-with-dark"
		hoverColor="opacity"
	>
		Back to home
	</Button>
</div>
