<script setup type="ts">
const props = defineProps({
    name: {
        type: String,
        required: true,
    }
});
const click = () => {
    const url = 'https://x.com/' + props.name + '/';
    window.open(url, '_blank');
};
</script>

<template>
    <button class="link-x" @click="click">
        <img loading="lazy"
             src="../../assets/images/logo/x.svg"
             alt="X(Twitter)のアイコン"
             class="link-x__icon"/>
        @{{ props.name }}
    </button>
</template>

<style scoped lang="scss">
.link-x {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    padding: 0 4px;
    box-sizing: border-box;
    background-color: var(--primary-color);
    border: none;
    border-radius: 6px;
    color: var(--white);
    font-size: 14px;
    cursor: pointer;
    &__icon {
        width: 14px;
        height: auto;
    }
    &:hover {
        opacity: .6;
        transition: .2s;
    }
}
</style>