# About

<script type="text/javascript">
  import Box from "./Box.svelte"
  let count = 5
</script>

{count}

<button on:click={() => count += 1}>Increment {count}</button>
<Box />
