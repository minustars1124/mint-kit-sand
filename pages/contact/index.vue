<script setup lang="ts">
useHead({
  title: 'Contact',
  meta: [
    {
      name: 'title',
      content: 'Mint kit sand Official Website'
    },
    {
      name: 'keyword',
      content: '渋谷系,アイドル,ポップス,ロック,シューゲイザー'
    },
    {
      name: 'viewport',
      content: 'width=device-width,initial-scale=1.0'
    }
  ]
})
useSeoMeta({
  title: 'Mint kit sand Official Website',
  description: '新宿発渋谷系アイドルポップロックシューゲイザーバンドMint kit sand（ミント・キット・サンド）の公式ウェブサイトです。バンド活動の最新情報を発信しています。',
  ogSiteName: 'Mint kit sand Official Website',
  ogUrl: 'https://mintkitsand.com/',
  ogType: 'article',
  ogTitle: 'Mint kit sandに連絡する',
  ogDescription: '新宿発渋谷系アイドルポップロックシューゲイザーバンドMint kit sand（ミント・キット・サンド）の公式ウェブサイトです。バンド活動の最新情報を発信しています。',
  ogImage: 'https://mintkitsand.com/static/images/logo.png',
  twitterCard: 'summary_large_image',
  twitterImage: 'https://mintkitsand.com/static/images/logo.png',
  twitterSite: '@Mintkitsand',
  twitterTitle: 'Mint kit sandに連絡する',
  twitterDescription: '新宿発渋谷系アイドルポップロックシューゲイザーバンドMint kit sand（ミント・キット・サンド）の公式ウェブサイトです。バンド活動の最新情報を発信しています。',
});
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

@media screen and (max-width: 480px) {
  .contact-index {
    &__introduction {
      margin: 0 16px;
      &--title {
        font-size: 1.5em;
      }
    }
    &__twitter {
      grid-template-columns: auto;
      width: 90svw;
    }
  }
}
</style>
