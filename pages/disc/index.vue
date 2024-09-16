<script setup lang="ts">
import DiscList from '@/assets/json/discs.json';
useHead({
  title: 'Discography',
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
})
useSeoMeta({
  title: 'Mint kit sand Official Website',
  description: '新宿発渋谷系アイドルポップロックシューゲイザーバンドMint kit sand（ミント・キット・サンド）の公式ウェブサイトです。バンド活動の最新情報を発信しています。',
  ogSiteName: 'Mint kit sand Official Website',
  ogUrl: 'https://mintkitsand.com/',
  ogType: 'article',
  ogTitle: 'Mint kit sandのリリースした楽曲一覧',
  ogDescription: '新宿発渋谷系アイドルポップロックシューゲイザーバンドMint kit sand（ミント・キット・サンド）の公式ウェブサイトです。バンド活動の最新情報を発信しています。',
  ogImage: 'https://mintkitsand.com/static/images/logo.png',
  twitterCard: 'summary_large_image',
  twitterImage: 'https://mintkitsand.com/static/images/logo.png',
  twitterSite: '@Mintkitsand',
  twitterTitle: 'Mint kit sandのリリースした楽曲一覧',
  twitterDescription: '新宿発渋谷系アイドルポップロックシューゲイザーバンドMint kit sand（ミント・キット・サンド）の公式ウェブサイトです。バンド活動の最新情報を発信しています。',
});
interface Person {
  name: string,
  link?: string,
}
interface Staff {
  illust?: Person,
  photo?: Person,
  design: Person,
}
interface Disc {
  id: string,
  release: string,
  title: string,
  tracks: Array<string>,
  price: number,
  staff: Staff,
  detail: string,
}
const discList: Array<Disc> = DiscList.items;
</script>

<template>
    <div class="disc-index">
        <section class="disc-index__introduction">
            <h1 class="disc-index__introduction--title">Discography</h1>
        </section>
        <section class="disc-index__list">
          <template v-for="disc in discList">
            <DiscInformation :id="disc.id"
                             :release="disc.release"
                             :title="disc.title"
                             :tracks="disc.tracks"
                             :price="disc.price"
                             :staff="disc.staff"/>
          </template>
        </section>
    </div>
</template>

<style scoped lang="scss">
.disc-index {
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
  }
  &__list {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
}

@media screen and (max-width: 480px) {
  .disc-index {
    &__introduction {
      margin: 0 16px;
      &--title {
        font-size: 1.5em;
      }
      &--name {
        font-size: 1.2em;
      }
    }
  }
}
</style>