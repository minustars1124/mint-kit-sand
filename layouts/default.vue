<script setup lang="ts">
useHead({
  titleTemplate: (title) => {
    return title ? `${title} | Mint kit sand` : 'Mint kit sand Official Website'
  },
})
</script>

<template>
  <div class="layouts-default">
    <header class="layouts-default__header">
      <HeaderTitle/>
      <Navigation/>
    </header>
    <main class="layouts-default__main">
      <slot></slot>
    </main>
    <footer class="layouts-default__footer">
      (c)2018-2024 Mint kit sand all rights reserved.
    </footer>
  </div>
</template>

<style scoped lang="scss">
.layouts-default {
  &__header {
    display: flex;
    padding: 16px 32px;
    justify-content: space-between;
    align-items: center;
    background-color: var(--primary-color);
  }
  &__main {
    width: 1024px;
    margin: 0 auto;
  }
  &__footer {
    padding: 8px 0;
    text-align: center;
    font-size: 12px;
  }
}

@media screen and (max-width: 480px) {
  .layouts-default {
    &__header {
        justify-content: center;
    }
    &__main {
        width: 100%;
    }
  }
}
</style>