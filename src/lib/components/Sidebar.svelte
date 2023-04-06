<script>
  import SidebarListCategory from "./SidebarListCategory.svelte";
  import SidebarListItem from "./SidebarListItem.svelte";
</script>

<div
  class="bg-[#2b2d31] h-full flex justify-end text-[#AFB2B5] overflow-scroll pt-14 px-1"
>
  <div class="w-[27.5%] space-y-2">
    <SidebarListCategory categoryName="ユーザー設定">
      <SidebarListItem>マイアカウント</SidebarListItem>
      <SidebarListItem isActive={true}>プロフィール</SidebarListItem>
      <SidebarListItem>プライバシー・安全</SidebarListItem>
      <SidebarListItem>連帯済みアプリケーション</SidebarListItem>
      <SidebarListItem>
        <div class="flex items-center">
          <div class="flex-1">デバイス</div>
          <div
            class="flex-none bg-red rounded-full px-2 text-sm text-white fw-bold h-[min-content]"
          >
            新規
          </div>
        </div>
      </SidebarListItem>
      <SidebarListItem>接続</SidebarListItem>
      <SidebarListItem>フレンド申請</SidebarListItem>
    </SidebarListCategory>
    <SidebarListCategory categoryName="請求設定">
      <SidebarListItem>
        <div class="flex items-center">
          <div class="flex-1 tracking-normal">Nitro</div>
          <div class="flex-none text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="rgb(167, 139, 250)"
              viewBox="0 0 256 256"
              ><path
                d="M240,96a8,8,0,0,1-8,8H216v16a8,8,0,0,1-16,0V104H184a8,8,0,0,1,0-16h16V72a8,8,0,0,1,16,0V88h16A8,8,0,0,1,240,96ZM144,56h8v8a8,8,0,0,0,16,0V56h8a8,8,0,0,0,0-16h-8V32a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16Zm72.77,97a8,8,0,0,1,1.43,8A96,96,0,1,1,95.07,37.8a8,8,0,0,1,10.6,9.06A88.07,88.07,0,0,0,209.14,150.33,8,8,0,0,1,216.77,153Zm-19.39,14.88c-1.79.09-3.59.14-5.38.14A104.11,104.11,0,0,1,88,64c0-1.79,0-3.59.14-5.38A80,80,0,1,0,197.38,167.86Z"
              /></svg
            >
          </div>
        </div>
      </SidebarListItem>
      <SidebarListItem>サーバーブースト</SidebarListItem>
      <SidebarListItem>購読</SidebarListItem>
      <SidebarListItem>
        <div class="flex items-center">
          <div class="flex-1">ギフトインベントリ</div>
          <div
            class="flex-none bg-indigo-500 rounded-full px-2 text-sm text-white fw-bold h-[min-content]"
          >
            ベータ
          </div>
        </div>
      </SidebarListItem>
      <SidebarListItem>請求</SidebarListItem>
    </SidebarListCategory>
    <SidebarListCategory categoryName="アプリの設定">
      <SidebarListItem>テーマ</SidebarListItem>
      <SidebarListItem>ユーザー補助</SidebarListItem>
      <SidebarListItem>音声・ビデオ</SidebarListItem>
      <SidebarListItem>テキスト・画像</SidebarListItem>
      <SidebarListItem>通知</SidebarListItem>
      <SidebarListItem>キー割り当て</SidebarListItem>
      <SidebarListItem>言語</SidebarListItem>
      <SidebarListItem>配信モード</SidebarListItem>
      <SidebarListItem>詳細設定</SidebarListItem>
    </SidebarListCategory>
    <SidebarListCategory categoryName="アクティビティ設定">
      <SidebarListItem>アクティビティのプライバシー</SidebarListItem>
      <SidebarListItem>登録済みのゲーム</SidebarListItem>
    </SidebarListCategory>
    <SidebarListCategory categoryName="">
      <SidebarListItem>新着情報</SidebarListItem>
      <SidebarListItem>Hypesquad</SidebarListItem>
    </SidebarListCategory>
    <SidebarListCategory categoryName="">
      <SidebarListItem>ログアウト</SidebarListItem>
    </SidebarListCategory>
  </div>
</div>
