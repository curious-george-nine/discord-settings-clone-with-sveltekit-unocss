<script>
  export let isActive = false;
</script>

{#if isActive}
  <div class="text-white py-4 border-b-2 border-indigo"><slot /></div>
{:else}
  <div
    class="text-[#afb2b5] hover:text-[#bcbfc2] py-4 cursor-pointer hover:border-b-2 hover:border-indigo-5"
  >
    <slot />
  </div>
{/if}
