<script setup lang="ts">
import NewsList from '@/assets/json/news.json';
useHead({
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
  ogType: 'website',
  ogTitle: 'Mint kit sand 公式ウェブサイトトップページ',
  ogDescription: '新宿発渋谷系アイドルポップロックシューゲイザーバンドMint kit sand（ミント・キット・サンド）の公式ウェブサイトです。バンド活動の最新情報を発信しています。',
  ogImage: 'https://mintkitsand.com/static/images/logo.png',
  twitterCard: 'summary_large_image',
  twitterImage: 'https://mintkitsand.com/static/images/logo.png',
  twitterSite: '@Mintkitsand',
  twitterTitle: 'Mint kit sand 公式ウェブサイトトップページ',
  twitterDescription: '新宿発渋谷系アイドルポップロックシューゲイザーバンドMint kit sand（ミント・キット・サンド）の公式ウェブサイトです。バンド活動の最新情報を発信しています。',
});
interface News {
  date: string,
  text: string,
}
const newsList = NewsList.items;
</script>

<template>
  <div class="index">
    <div class="index__picture">
      <picture>
        <img loading="lazy"
           srcset="../assets/images/mks_bgr2.webp"
           alt="Mint kit sandメンバー横並び"
           type="img/webp"/>
      </picture>
    </div>
    <div class="index__news">
      <div class="index__news--title">NEWS</div>
      <ul class="index__news--line-up">
        <li v-for="news in newsList" class="index__news--list">
          {{ news.date }} {{ news.text }}
        </li>
      </ul>
    </div>
    <div class="index__top-tracks">
      <iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/5kyOw2diEub2x4dKLvjALa?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="false" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
  </div>
</template>

<style scoped lang="scss">
.index {
  &__news {
    &--title {
      padding: 0 16px;
      color: var(--primary-color);
      font-size: 1.2em;
      font-weight: bold;
    }
    &--line-up {
      margin: 16px;
      padding: 0;
    }
    &--list {
      list-style-type: none;
    }
  }
}

@media screen and (max-width: 480px) {
  .index {
    &__news {
      &--title {
        text-align: center;
      }
    }
    &__top-tracks {
      margin: 0 5svw;
    }
  }
}
</style>