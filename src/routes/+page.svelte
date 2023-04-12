<script>
	export let data;
	import { formTitle } from '$lib/utils';
	import { BlogList } from '$components/Blog';
	import { SearchBox } from '$components/SearchBox';
</script>

<svelte:head>
	<title>{formTitle('Blog')}</title>
</svelte:head>

<div class="mx-8 flex-grow lg:m-auto lg:w-1/2">
	<SearchBox class="my-2" />
	<BlogList posts={data.posts} />
	<slot />
</div>
