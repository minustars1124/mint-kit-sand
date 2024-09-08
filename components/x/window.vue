<script setup lang="ts">
export interface TwitterWindow extends Window {
  twttr: any
  widgets: any
};
declare const window: TwitterWindow;

useHead({
  title: 'Contact',
  script: [
    {
        hid: 'twitter',
        type: 'text/javascript',
        src: 'https://platform.twitter.com/widgets.js',
        async: true,
        defer: true,
    }
  ]
}),
onMounted(() => {
  // js ファイルを読み込む前に実行しないよう setTimeout で実行する時刻を遅らせる
  setTimeout(() => {
    window.twttr.widgets.load();
  }, 1000)
});
</script>

<template>
    <blockquote class="x-window">
        <slot></slot>
    </blockquote>
</template>

<style scoped lang="scss">
</style>