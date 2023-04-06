<script>
  import "@unocss/reset/tailwind.css";

  import DeviceDetector from "device-detector-js";
  import { onMount } from "svelte";

  const deviceDetector = new DeviceDetector();

  let os;

  onMount(() => {
    const userAgent = navigator.userAgent;

    const device = deviceDetector.parse(userAgent);

    console.log(device);

    os = device.os?.name;
  });
</script>

<slot />

<style uno:preflights uno:safelist global>
  :global(.color-picker .container .color) {
    border-radius: 3px;
  }
</style>
