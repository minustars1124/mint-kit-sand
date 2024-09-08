<template>
    <div class="header-title">
        <NuxtLink to="/" class="header-title__link">
            <picture>
                <img loading="lazy"
                     srcset="@/assets/images/logo/header.webp"
                     alt=""
                     type="img/webp"
                     class="header-title__link--image"/>
            </picture>
        </NuxtLink>
    </div>
</template>

<style scoped lang="scss">
.header-title {
    padding: 0 8px;
    &__link {
        text-decoration: none;
        &--image {
            height: 48px;
        }
    }
    &:hover {
        opacity: .6;
        transition: .2s;
    }
}

@media screen and (max-width: 480px) {
  .header-title {
    &__link {
        &--image {
            height: 36px;
        }
    }
  }
}
</style>