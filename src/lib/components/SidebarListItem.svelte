<script>
  export let isActive = false;
</script>

{#if isActive}
  <li class="mt-[3px]">
    <button
      class="px-2 py-1 text-[1rem] bg-[#34363b] text-[#e9ebf0] hover:bg-[#313338] hover:text-[#bcbfc2] active:bg-[#34363b] active:text-[#e9ebf0] block w-full text-left rounded-lg truncate"
    >
      <slot />
    </button>
  </li>
{:else}
  <li class="mt-[3px]">
    <button
      class="px-2 py-1 text-[1rem] hover:bg-[#313338] hover:text-[#bcbfc2] active:bg-[#34363b] active:text-[#e9ebf0] block w-full text-left rounded-lg truncate"
    >
      <slot />
    </button>
  </li>
{/if}
