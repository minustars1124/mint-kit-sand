<script setup lang="ts">
import EventList from '@/assets/json/events.json';
useHead({
  title: 'Event',
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
  ogTitle: 'Mint kit sandの参加するイベント一覧',
  ogDescription: '新宿発渋谷系アイドルポップロックシューゲイザーバンドMint kit sand（ミント・キット・サンド）の公式ウェブサイトです。バンド活動の最新情報を発信しています。',
  ogImage: 'https://mintkitsand.com/static/images/logo.png',
  twitterCard: 'summary_large_image',
  twitterImage: 'https://mintkitsand.com/static/images/logo.png',
  twitterSite: '@Mintkitsand',
  twitterTitle: 'Mint kit sandの参加するイベント一覧',
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
}
interface Event {
  type: string,
  date: string,
  name: string,
  place: string,
  boothNumber?: string,
  openTime?: string,
  startTime?: string,
  performers?: Array<string>,
  advancePrice?: number,
  sameDayPrice?: number,
  link?: string,
  reservation?: string,
}
const eventList: Array<Event> = EventList.items;
</script>

<template>
  <div class="events-index">
    <section class="events-index__introduction">
      <h1 class="events-index__introduction--title">Events</h1>
    </section>
    <section class="events-index__list">
      <template v-for="disc in eventList">
        <EventInformation :type="disc.type"
                          :date="disc.date"
                          :name="disc.name"
                          :place="disc.place"
                          :boothNumber="disc.boothNumber"
                          :openTime="disc.openTime"
                          :startTime="disc.startTime"
                          :performers="disc.performers"
                          :advancePrice="disc.advancePrice"
                          :sameDayPrice="disc.sameDayPrice"
                          :link="disc.link"/>
      </template>
    </section>
  </div>
</template>

<style scoped lang="scss">
.events-index {
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
  .events-index {
    &__introduction {
      margin: 0 16px;
      &--title {
        font-size: 1.5em;
      }
    }
  }
}
</style>