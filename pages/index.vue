<script setup lang="ts">
useHead({
  meta: [
    {
      name: 'description',
      content: '新宿発渋谷系アイドルポップロックシューゲイザーバンドMint kit sand（ミント・キット・サンド）の公式ウェブサイトです。バンド活動の最新情報を発信しています。'
    }
  ]
});
</script>

<template>
  <div class="index">
    <div class="index__picture">
      <picture>
        <img loading="lazy"
           srcset="../assets/images/mks_bgr.webp"
           alt="Mint kit sandメンバー横並び"
           type="img/webp"/>
      </picture>
      <div class="index__picture--band">
        <img loading="lazy"
           srcset="../assets/images/logo/mks.webp"
           alt="Mint kit sandロゴマーク"
           type="img/webp" class="index__picture--logo"/>
      </div>
    </div>
    <div class="index__news">
      <div class="index__news--title">NEWS</div>
      <ul>
        <li class="index__news--list">
          2024-06-26 自主企画ライブ「Mint flavor meeting」開催決定！
        </li>
        <li class="index__news--list">
          2024-06-19 「Guitar Pop Restaulant Vol.51」に出演決定！
        </li>
      </ul>
    </div>
    <div>
      <iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/5kyOw2diEub2x4dKLvjALa?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="false" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
  </div>
</template>

<style scoped lang="scss">
.index {
  &__picture {
    position: relative;
    &--band {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 30%;
      line-height: 30%;
      background-color: var(--white);
      opacity: .8;
      position: absolute;
      top: 50%;
    }
    &--logo {
      height: 100%;
    }
  }
  &__news {
    &--title {
      color: var(--primary-color);
      font-size: 1.2em;
      font-weight: bold;
    }
    &--list {
      list-style-type: none;
    }
  }
}
</style>