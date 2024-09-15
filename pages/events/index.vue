<script setup lang="ts">
useHead({
  title: 'Event'
})
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
const eventList: Array<Event> = [
  {
    type: 'live',
    date: '2024/10/05（土）',
    name: 'Guitar Pop Restaurant vol.51',
    place: '京王堀之内time Tokyo',
    openTime: '12:20',
    startTime: '12:45',
    performers: ['three-weeks-old lovesick puppy', 'humming parlour', 'ポプリ', '杉本清隆'],
    advancePrice: 2800,
    sameDayPrice: 3300,
    link: 'https://gprofficial.net/live51',
  },
  {
    type: 'live',
    date: '2024/08/04（日）',
    name: 'Mint flavor meeting vol.1',
    place: '代々木Barbara',
    openTime: '17:40',
    startTime: '18:00',
    performers: ['薄塩指数', 'ライナスの青い毛布'],
    advancePrice: 2500,
    sameDayPrice: 2500,
    link: '',
  },
  {
    type: 'live',
    date: '2024/05/26（日）',
    name: 'Metcha Pop Chotto Rock',
    place: '下北沢Waver',
    openTime: '11:20',
    startTime: '11:50',
    performers: ['Capitan', 'fedress', 'abenie'],
    advancePrice: 2500,
    sameDayPrice: 2500,
    link: '',
  },
  {
    type: 'distribution',
    date: '2024/04/28（日）',
    name: 'M3春 2024',
    place: '東京流通センター',
    boothNumber: '第一展示場P-09a',
    link: '',
  },
]
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