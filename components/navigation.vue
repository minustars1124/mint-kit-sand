<template>
    <nav class="navigation">
        <ul class="navigation__ul">
            <li class="navigation__li">
                <NuxtLink to="/about" class="navigation__link">About</NuxtLink>
            </li>
            <li class="navigation__li">
                <NuxtLink to="/disc" class="navigation__link">Discography</NuxtLink>
            </li>
            <li class="navigation__li">
                <NuxtLink to="/music" class="navigation__link">Music</NuxtLink>
            </li>
            <li class="navigation__li">
                <NuxtLink to="/events" class="navigation__link">Events</NuxtLink>
            </li>
            <li class="navigation__li">
                <NuxtLink to="/contact" class="navigation__link">Contact</NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<style scoped lang="scss">
.navigation {
    display: flex;
    justify-content: center;
    &__ul {
        display: flex;
        gap: 16px;
        list-style-type: none;
        margin-block: 0;
        padding-inline-start: 0;
    }
    &__li {
        width: 128px;
        font-size: 16px;
        text-align: center;
        cursor: pointer;
    }
    &__link {
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--white);
        text-decoration: none;
        &:hover {
          background-color: var(--white);
          color: var(--primary-color);
          transition: .2s;
        }
    }
}

@media screen and (max-width: 480px) {
  .navigation {
    display: none;
  }
}
</style>