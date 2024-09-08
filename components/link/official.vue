<script setup lang="ts">
const linkToX = () => {
    window.open('https://x.com/Mintkitsand/', '_blank')
}
const linkToYouTube = () => {
    window.open('https://youtube.com/@mintkitsand', '_blank');
}
</script>

<template>
    <div class="link-official">
        <button class="link-official__button" @click="linkToX">
            <img loading="lazy"
                 src="../../assets/images/logo/x.svg"
                 alt="X(Twitter)のアイコン"
                 class="link-official__button--icon"/>
        </button>
        <button class="link-official__button" @click="linkToYouTube">
            <img loading="lazy"
                 src="../../assets/images/logo/youtube.png"
                 alt="YouTubeのアイコン"
                 class="link-official__button--youtube"/>
        </button>
    </div>
</template>

<style scoped lang="scss">
.link-official {
    display: flex;
    justify-content: center;
    gap: 16px;
    &__button {
        padding: 0;
        box-sizing: border-box;
        background-color: initial;
        border: none;
        cursor: pointer;
        &--icon {
            width: 18px;
            height: auto; 
        }
        &--youtube {
            width: auto;
            height: 18px;
        }
        &:hover {
            opacity: .6;
            transition: .2s;
        }
    }
}

@media screen and (max-width: 480px) {
  .link-official {
    display: none;
  }
}
</style>