<script setup type="ts">
const props = defineProps({
    id: {
        type: String,
        required: true,
    }
});
const click = () => {
    const url = 'https://nico.ms/mylist/' + props.id + '/';
    window.open(url, '_blank');
};
</script>

<template>
    <button class="link-niconico" @click="click">
        ニコニコ
    </button>
</template>

<style scoped lang="scss">
.link-niconico {
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
    &:hover {
        opacity: .6;
        transition: .2s;
    }
}
</style>