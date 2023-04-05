<script>
  export let categoryName;
</script>

<p class="fw-bold text-sm px-2 select-none">{categoryName}</p>
<ul class="border-b-1 border-b-[#313338] pb-3">
  <slot />
</ul>
