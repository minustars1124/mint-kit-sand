<script setup lang="ts">
useHead({
  title: 'Music'
})
</script>

<template>
    <div class="music-index">
        <section class="music-index__introduction">
            <h1 class="music-index__introduction--title">Music</h1>
        </section>
        <section class="music-index__tracks">
            <iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/30ISoblAMXMD7ysWNDhnwP?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="false" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            <iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/16b309gS3CRT4oMWch5CRo?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="false" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            <iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/1dgm1oW1NnF9VzhjLdK4fF?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="false" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </section>
    </div>
</template>

<style scoped lang="scss">
.music-index {
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
  &__tracks {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
    width: 100%;
  }
  &__track {
    width: 100%;
  }
  &__subject {
        font-size: 10px;
        color: #cccccc;
        line-break: anywhere;
        word-break: normal;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;
        font-weight: 100;
        &--link {
            color: #cccccc;
            text-decoration: none;
        }
    }
}

@media screen and (max-width: 480px) {
  .music-index {
    &__introduction {
      margin: 0 16px;
      &--title {
        font-size: 1.5em;
      }
    }
    &__tracks {
      width: 90svw;
      gap: 16px;
    }
  }
}
</style>