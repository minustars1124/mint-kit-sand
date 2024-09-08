<script setup lang="ts">
const props = defineProps({
    type: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    place: {
        type: String,
        required: true,
    },
    boothNumber: {
        type: String,
        required: false,
    },
    openTime: {
        type: String,
        required: false,
    },
    startTime: {
        type: String,
        required: false,
    },
    performers: {
        type: Array,
        required: false,
    },
    advancePrice: {
        type: Number,
        required: false,
    },
    sameDayPrice: {
        type: Number,
        required: false,
    },
    link: {
        type: String,
        required: false,
    },
    reservation: {
        type: String,
        required: false,
    },
})
const router = useRouter();
const advancePriceWithLocale = computed(() => {
    return "¥" + props.advancePrice?.toLocaleString();
})
const sameDayPrice = computed(() => {
    return "¥" + props.sameDayPrice?.toLocaleString();
})
</script>

<template>
    <div class="events-information">
        <div class="events-information__event">
            <div class="events-information__event--date">
                {{ date }}
            </div>
            <div class="events-information__event--name">
                {{ props.name }}
            </div>
            <div class="events-information__event--place">
                会場 {{ props.place }}
            </div>
            <div v-if="type === 'live'" class="event-information__time">
                開場時間 {{ openTime }} / 開演時間 {{ startTime }}
            </div>
        </div>
        <div class="events-information__info">
            <div v-if="type === 'distribution'" class="events-information__info--booth">
                ブース番号 {{ props.boothNumber }}
            </div>
            <div v-else-if="type === 'live'" class="events-information__info--performers">
                出演
                <ul class="events-information__performer">
                    <template v-for="performer in props.performers">
                        <li>{{ performer }}</li>
                    </template>
                </ul>
            </div>
            <div v-if="type === 'live'" class="event-information__price">
                前売料金 {{ advancePriceWithLocale }} / 当日料金 {{ sameDayPrice }}
            </div>
            <div class="events-information__buttons">
                <a v-if="link" :href="link" target="_blank">
                    <button class="events-information__buttons--button">
                        詳細
                    </button>
                </a>
                <a v-if="reservation" :href="reservation" target="_blank">
                    <button class="events-information__buttons--button">
                        予約フォーム
                    </button>
                </a>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.events-information {
    display: grid;
    justify-content: start;
    align-items: center;
    grid-template-columns: 50% auto;
    width: 50vw;
    padding: 8px;
    box-sizing: border-box;
    gap: 32px;
    border: 1px solid var(--primary-color);
    border-radius: 4px;
    &__event {
        grid-column: 1 / 2;
        &--date {
            font-size: 1.2em;
            font-weight: bold;
        }
        &--name {
            color: var(--primary-color);
            font-size: 1.5em;
            font-weight: bold;
        }
        &--place {
            font-size: 1.1em;
        }
    }
    &__info {
        grid-column: 2 / 3;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
        &--performers {
            display: flex;
        }
    }
    &__performer {
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
    &__buttons {
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
</style>