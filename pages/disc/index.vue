<script setup lang="ts">
import DiscList from '@/assets/json/discs.json';
useHead({
  title: 'Discography'
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