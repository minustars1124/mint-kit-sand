<script setup lang="ts">
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
    release: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    tracks: {
        type: Array,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    staff: {
        type: Object,
        required: true,
    }
})
const src = computed<string>(() => {
    return new URL("../../assets/images/disc/" + props.id + ".webp", import.meta.url).href
})
const alt = computed<string>(() => {
    return props.title + "ジャケット";
})
const click = (url: string) => {
    window.open(url, '_blank');
}
const router = useRouter();
const link = () => {
    router.push('/disc/' + props.id);
}
</script>

<template>
    <div class="disc-information">
        <div class="disc-information__image">
            <picture>
                <img loading="lazy"
                     :srcset="src"
                     :alt="alt"
                     type="img/webp"/>
            </picture>
        </div>
        <div class="disc-information__info">
            <div class="disc-information__info--release">{{ props.release }}</div>
            <div class="disc-information__info--title">{{ props.title }}</div>
            <div class="disc-information__info--tracks">
                収録曲
                <ol class="disc-information__track">
                    <template v-for="track in props.tracks">
                        <li>{{ track }}</li>
                    </template>
                </ol>
            </div>
            <div class="disc-information__info--price">頒布価格:¥{{ props.price }}</div>
            <div class="disc-information__info--staff">
                <div v-if="props.staff.illust" class="disc-information__person">
                    イラスト:{{ props.staff.illust.name }}
                    <button v-if="props.staff.illust.link"
                            @click="click(props.staff.illust.link)"
                            class="disc-information__person--button">
                        リンク
                    </button>
                </div>
                <div v-if="props.staff.photo" class="disc-information__person">
                    写真:{{ props.staff.photo.name }}
                    <button v-if="props.staff.photo.link"
                            @click="click(props.staff.photo.link)"
                            class="disc-information__person--button">
                        リンク
                    </button>
                </div>
                <div class="disc-information__person">
                    ジャケット・デザイン:{{ props.staff.design.name }}
                </div>
            </div>
            <button @click="link" class="disc-information__info--button">
                詳細
            </button>
        </div>
    </div>
</template>

<style scoped lang="scss">
.disc-information {
    display: grid;
    justify-content: start;
    align-items: center;
    grid-template-columns: 50% auto;
    width: 50vw;
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
        &--title {
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

@media screen and (max-width: 480px) {
  .disc-information {
    width: 90svw;
    gap: 16px;
    &__info {
      &--tracks {
        display: none;
      }
      &--price {
        display: none;
      }
      &--staff {
        display: none;
      }
    }
  }
}
</style>