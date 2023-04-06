<script>
  import MainTab from "$lib/components/MainTab.svelte";
  import Sidebar from "$lib/components/Sidebar.svelte";

  import UserProfileItem from "$lib/components/UserProfileItem.svelte";
  import ColorPicker from "svelte-awesome-color-picker";

  let mainTextareaValue = "";
</script>

<div class="grid grid-cols-[1fr_2fr] mx-auto h-full">
  <Sidebar />

  <div class="bg-[#313338] h-full">
    <div class="w-[60%] px-12 pt-14">
      <h1 class="text-white text-xl fw-bold">プロフィール</h1>
      <div class="flex border-b-1 border-[#444447] mt-4 space-x-xl select-none">
        <MainTab isActive={true}>ユーザープロフィール</MainTab>
        <MainTab>サーバープロフィール</MainTab>
      </div>
      <div class="grid grid-cols-2">
        <div>
          <div class="py-5 border-b border-[#444447]">
            <UserProfileItem itemName="アバター">
              <div class="space-x-4 text-sm mt-2">
                <button
                  class="bg-indigo-5 text-white px-4 py-1.5 hover:bg-indigo-5/70 duration-200 rounded"
                  >アバターを変更</button
                >
                <a href="/" class="text-white hover:underline">アバター削除</a>
              </div>
            </UserProfileItem>
          </div>
          <div class="py-5 border-b border-[#444447]">
            <UserProfileItem itemName="バナーカラー" />
            <div class="relative top-5 mb-6 w-[30px]">
              <div class="inline-block h-full">
                <ColorPicker label="" isAlpha={false} />
                <div class="i-ph-pen absolute top-[1px] right-[-2px]" />
              </div>
            </div>
          </div>
          <div class="py-5 border-b border-[#444447]">
            <UserProfileItem itemName="自己紹介" />
            <p class="text-[#afb2b5] py-3">
              マークダウンやリンクを使ってもＯＫです。
            </p>
            <div class="relative">
              <textarea
                class="resize-none bg-[#202023] rounded w-full h-32 focus:outline-none focus:border-none text-white px-4 py-3"
                bind:value={mainTextareaValue}
              />
              {#if mainTextareaValue.length >= 191}
                <span class="absolute bottom-4 right-4 text-red">
                  {190 - mainTextareaValue.length}
                </span>
              {:else}
                <span class="absolute bottom-4 right-4 text-[#afb2b5]">
                  {190 - mainTextareaValue.length}
                </span>
              {/if}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
