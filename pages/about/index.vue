<script setup lang="ts">
useHead({
  title: 'About',
  meta: [
    {
      name: 'title',
      content: 'Mint kit sand Official Website'
    },
    {
      name: 'keyword',
      content: '渋谷系,アイドル,ポップス,ロック,シューゲイザー'
    },
    {
      name: 'viewport',
      content: 'width=device-width,initial-scale=1.0'
    }
  ]
});
useSeoMeta({
  title: 'Mint kit sand Official Website',
  description: '新宿発渋谷系アイドルポップロックシューゲイザーバンドMint kit sand（ミント・キット・サンド）の公式ウェブサイトです。バンド活動の最新情報を発信しています。',
  ogSiteName: 'Mint kit sand Official Website',
  ogUrl: 'https://mintkitsand.com/',
  ogType: 'article',
  ogTitle: 'Mint kit sandとは',
  ogDescription: '新宿発渋谷系アイドルポップロックシューゲイザーバンドMint kit sand（ミント・キット・サンド）の公式ウェブサイトです。バンド活動の最新情報を発信しています。',
  ogImage: 'https://mintkitsand.com/static/images/logo.png',
  twitterCard: 'summary_large_image',
  twitterImage: 'https://mintkitsand.com/static/images/logo.png',
  twitterSite: '@Mintkitsand',
  twitterTitle: 'Mint kit sandとは',
  twitterDescription: '新宿発渋谷系アイドルポップロックシューゲイザーバンドMint kit sand（ミント・キット・サンド）の公式ウェブサイトです。バンド活動の最新情報を発信しています。',
});
</script>

<template>
  <div class="about-index">
    <section class="about-index__introduction">
      <h1 class="about-index__introduction--title">About Mint kit sand</h1>
      <h2 class="about-index__introduction--name"><ruby>Mint kit sand<rt>ミント・キット・サンド</rt></ruby></h2>
      <div>2017年に須藤ストラが音楽活動をしていた友人たちに声をかけて結成</div>
      <div>2018年から音源制作、東京都内を中心にライブ活動を開始</div>
      <div>各々のやりたいことから「新宿発渋谷系アイドルポップロックシューゲイザーバンド」をテーマに明るく無理せず楽しく活動中</div>
    </section>
    <picture>
        <img loading="lazy"
             srcset="../../assets/images/mks_bgr3.webp"
             alt="Mint kit sandメンバー横並び"
             type="img/webp"/>
    </picture>
    <section class="about-index__member">
      <h3 class="about-index__member--title">Member of Mint kit sand（左から）</h3>
      <ul class="about-index__member--ul">
        <li class="about-index__list">
          スーパーマエハマ（ベース）
          <div class="about-index__buttons">
            <LinkX name="MhamYsk"/>
          </div>
        </li>
        <li class="about-index__list">
          <div>
            <ruby>須<rt>ス</rt>藤<rt>ドウ</rt></ruby>ストラ（ギター）
          </div>
          <div class="about-index__buttons">
            <LinkX name="sudostrat"/>
            <LinkNiconico id="25513944"/>
          </div>
        </li>
        <li class="about-index__list">
          すのほわ（ボーカル）
          <div class="about-index__buttons">
            <LinkX name="sn_white51"/>
            <LinkNiconico id="14921289"/>
          </div>
        </li>
        <li class="about-index__list">
          いのっぴ（ギター）
          <div class="about-index__buttons">
            <LinkX name="inoppippi"/>
            <LinkYoutube id="inoppippi"/>
            <LinkNiconico id="6279575"/>
          </div>
        </li>
        <li class="about-index__list">
          <div>
            <ruby>八<rt>ハチ</rt>河<rt>カワ</rt></ruby>のなめ（ドラム）
          </div>
          <div class="about-index__buttons">
            <LinkX name="NO_NAME_POEM"/>
            <LinkYoutube has-channel id="UCCP604ISRYKJd8l-822WeGA"/>
            <LinkNiconico id="57045858"/>
          </div>
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
    align-items: flex-end;
    gap: 4px;
  }
  &__buttons {
    display: flex;
    align-items: center;
    gap: 4px;
  }
}

@media screen and (max-width: 480px) {
  .about-index {
    &__introduction {
      margin: 0 16px;
      &--title {
        font-size: 1.5em;
      }
      &--name {
        font-size: 1.2em;
      }
    }
    &__list {
      flex-direction: column;
      align-items: center;
    }
  }
}
</style>
