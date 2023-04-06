<script>
	export let data;
	import { formTitle } from '$lib/utils';
	import { BlogList } from '$components/Blog';
	import { SearchBox } from '$components/SearchBox';
</script>

<svelte:head>
	<title>{formTitle('Blog')}</title>
</svelte:head>

<div class="mx-8 lg:w-1/2 lg:m-auto flex-grow">
	<SearchBox className="my-2" />
	<BlogList posts={data.posts} />
	<slot />
</div>
