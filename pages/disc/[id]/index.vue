<script setup lang="ts">
import images from '@/lib/images';
import DiscList from '@/assets/json/discs.json';
const disc = ref<Disc>();
const src = ref<string>();
const alt = ref<string>();
useHead({
  title: 'Release'
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
interface Shop {
  name: string,
  link: string,
}
interface Disc {
  id: string,
  release: string,
  title: string,
  tracks: Array<string>,
  price: number,
  staff: Staff,
  detail: string,
  shops: Array<Shop>
}
const route = useRoute();
const discList: Array<Disc> = DiscList.items;
  const click = (url: string) => {
    window.open(url, '_blank');
}
const router = useRouter();

onMounted(() => {
  const idList = discList.map(disc => disc.id);
  if (!idList.some(id => route.params.id)) {
    navigateTo('/disc');
  }
  disc.value = discList.find(disc => route.params.id === disc.id);
  src.value =  images[disc.value.id];
  alt.value = disc.value?.title + "ジャケット";
});
</script>

<template>
  <div v-if="disc" class="disc-id-index">
    <section class="disc-id-index__introduction">
      <h1 class="disc-id-index__introduction--title">Discography</h1>
    </section>
    <h2>{{ disc.release }} {{ disc.title }}</h2>
    <div class="disc-id-index__detail">
      <div class="disc-id-index__detail__image">
        <picture>
          <img loading="lazy"
               :srcset="src"
               :alt="alt"
               type="img/webp"/>
        </picture>
      </div>
      <div class="disc-id-index__detail__info">
        <div class="disc-id-index__detail__info--detail">{{ disc.detail }}</div>
        <div class="disc-id-index__detail__info--tracks">
          収録曲
          <ol class="disc-id-index__detail__track">
            <template v-for="track in disc.tracks">
              <li>{{ track }}</li>
            </template>
          </ol>
        </div>
        <div class="disc-id-index__detail__info--price">頒布価格:¥{{ disc.price }}</div>
        <div class="disc-id-index__detail__info--staff">
          <div v-if="disc.staff.illust" class="disc-id-index__detail__person">
            イラスト:{{ disc.staff.illust.name }}
            <button v-if="disc.staff.illust.link"
                    @click="click(disc.staff.illust.link)"
                    class="disc-id-index__detail__person--button">
              リンク
            </button>
          </div>
          <div v-if="disc.staff.photo" class="disc-id-index__detail__person">
            写真:{{ disc.staff.photo.name }}
            <button v-if="disc.staff.photo.link"
                    @click="click(disc.staff.photo.link)"
                    class="disc-id-index__detail__person--button">
              リンク
            </button>
          </div>
          <div class="disc-id-index__detail__person">
            ジャケット・デザイン:{{ disc.staff.design.name }}
          </div>
          <div class="disc-id-index__shopping">
            通販:
            <div v-for="shop in disc.shops">
              <button @click="click(shop.link)"
                      class="disc-id-index__detail__person--button">
                {{ shop.name }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.disc-id-index {
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
  &__detail {
    display: grid;
    justify-content: start;
    align-items: center;
    grid-template-columns: 50% auto;
    width: 70svw;
    min-width: 460px;
    gap: 32px;
    &__image {
      grid-column: 1 / 2;
    }
    &__info {
      grid-column: 2 / 3;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 8px;
      &--detail {
        font-weight: bold;
      }
      &--tracks {
        display: flex;
      }
      &--staff {
        display: flex;
        flex-direction: column;
        gap: 4px;
      }
      &--button {
        color: var(--white);
        background-color: var(--primary-color);
        border: none;
        border-radius: 6px;
        cursor: pointer;
        &:hover {
          opacity: .6;
          transition: .2s;
        }
      }
    }
    &__track {
      margin: 0;
    }
    &__person {
      display: flex;
      align-items: center;
      gap: 8px;
      &--button {
        color: var(--white);
        background-color: var(--primary-color);
        border: none;
        border-radius: 6px;
        cursor: pointer;
        &:hover {
          opacity: .6;
          transition: .2s;
        }
      }
    }
  }
  &__shopping {
    display: flex;
    align-items: center;
    gap: 8px;
  }
}

@media screen and (max-width: 480px) {
  .disc-id-index {
    &__introduction {
      margin: 0 16px;
      &--title {
        font-size: 1.5em;
      }
    }
    &__detail {
      grid-template-columns: auto;
      width: 90svw;
      gap: 16px;
      &__info {
        grid-column: 1;
      }
    }
  }
}
</style>