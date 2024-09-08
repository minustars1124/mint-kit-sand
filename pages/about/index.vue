<script setup lang="ts">
useHead({
  title: 'About'
})
</script>

<template>
  <div class="about-index">
    <section class="about-index__introduction">
      <h1 class="about-index__introduction--title">About Mint kit sand</h1>
      <h2 class="about-index__introduction--name">Mint kit sand（ミント・キット・サンド）</h2>
      <div>東京都内やインターネット上で活動する新宿発渋谷系アイドルポップロックシューゲイザーバンド</div>
      <div>爽やかな甘さをあなたに。</div>
    </section>
    <picture>
        <img loading="lazy"
             srcset="../../assets/images/mks_bgr.webp"
             alt="Mint kit sandメンバー横並び"
             type="img/webp"/>
    </picture>
    <section class="about-index__member">
      <h3 class="about-index__member--title">Member of Mint kit sand（左から）</h3>
      <ul class="about-index__member--ul">
        <li class="about-index__list">
          須藤ストラ（ギター）
          <LinkX name="sudostrat"/>
          <LinkNiconico id="25513944"/>
        </li>
        <li class="about-index__list">
          スーパーマエハマ（ベース）
          <LinkX name="MhamYsk"/>
        </li>
        <li class="about-index__list">
          すのほわ（ボーカル）
          <LinkX name="sn_white51"/>
          <LinkNiconico id="14921289"/>
        </li>
        <li class="about-index__list">
          いのっぴ（ギター）
          <LinkX name="inoppippi"/>
          <LinkNiconico id="6279575"/>
        </li>
        <li class="about-index__list">
          八河のなめ（ドラム）
          <LinkX name="NO_NAME_POEM"/>
          <LinkNiconico id="57045858"/>
        </li>
      </ul>
    </section>
  </div>
</template>

<style scoped lang="scss">
.about-index {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  &__introduction {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &--title {
      color: var(--primary-color);
      font-size: 48px;
    }
    &--name {
      font-size: 20px;
    }
  }
  &__member {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    &--title {
      font-weight: bold;
      font-size: 18px;
    }
    &--ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
      list-style-type: none;
      margin-block: 0;
      padding-inline-start: 0;
    }
  }
  &__list {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
  }
}
</style>
