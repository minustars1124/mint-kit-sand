<script setup lang="ts">
useHead({
  title: 'Contact'
})
</script>

<template>
    <div class="contact-index">
        <section class="contact-index__introduction">
            <h1 class="contact-index__introduction--title">Contact</h1>
        </section>
        <section class="contact-index__contact">
            ご連絡は<a href="mailto:mintkitsand@gmail.com" class="contact-index__contact--link">メール</a>もしくはXにてお願いいたします。
        </section>
        <section class="contact-index__twitter">
            <XWindow>
                <a class="twitter-timeline" href="https://twitter.com/Mintkitsand?ref_src=twsrc%5Etfw">Tweets by Mintkitsand</a>
            </XWindow>
        </section>
    </div>
</template>

<style scoped lang="scss">
.contact-index {
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
      font-size: 3em;
    }
  }
  &__contact {
    &--link {
        color: var(--primary-color);
        &:hover {
            opacity: .6;
        }
    }
  }
  &__twitter {
    width: 50%;
    height: 70svh;
    padding: 0 0 0 1em;
    box-sizing: border-box;
    overflow-y: scroll;
    scrollbar-width: thin;
  }
}
</style>
