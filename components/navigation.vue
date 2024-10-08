<script setup lang="ts">
// 変数定義
const CLASS = "active";
let flg = false;
let accordionFlg = false;

var hamburger = ref<HTMLInputElement>();
var focusTrap = ref<HTMLInputElement>();
var menu = ref<HTMLInputElement>();
var accordionTrigger = ref<NodeListOf<HTMLInputElement>>();
var accordion = ref<NodeListOf<HTMLInputElement>>();

onMounted(() => {
  hamburger.value = <HTMLInputElement>document.getElementById("js-hamburger");
  focusTrap.value = <HTMLInputElement>document.getElementById("js-focus-trap");
  menu.value = <HTMLInputElement>document.querySelector(".navigation__menu");
  accordionTrigger.value = document.querySelectorAll<HTMLInputElement>(".js-sp-accordion-trigger");
  accordion.value = document.querySelectorAll<HTMLInputElement>(".js-sp-accordion");

  if (typeof hamburger.value === "undefined") {
    return;
  }
  // メニュー開閉制御
  if (hamburger.value) {
    hamburger.value.addEventListener("click", (e: MouseEvent) => { //ハンバーガーボタンが選択されたら
      (e.currentTarget as Element).classList.toggle(CLASS);
      menu.value?.classList.toggle(CLASS);
      if (flg) {// flgの状態で制御内容を切り替え
        backgroundFix(false);
        hamburger.value?.setAttribute("aria-expanded", "false");
        hamburger.value?.focus();
        flg = false;
      } else {
        backgroundFix(true);
        hamburger.value?.setAttribute("aria-expanded", "true");
        flg = true;
      }
    });
  }
  window.addEventListener("keydown", (e: KeyboardEvent) => {　//escキー押下でメニューを閉じられるように
    if (e.key === "Escape") {
      hamburger.value?.classList.remove(CLASS);
      menu.value?.classList.remove(CLASS);

      backgroundFix(false);
      hamburger.value?.focus();
      hamburger.value?.setAttribute("aria-expanded", "false");
      flg = false;
    }
  });

  // メニュー内アコーディオン制御
  accordionTrigger.value.forEach((item) => {
    item.addEventListener("click", (e: MouseEvent) => {
      (e.currentTarget as Element).classList.toggle(CLASS);
      (e.currentTarget as Element).nextElementSibling?.classList.toggle(CLASS);
      if (accordionFlg) {
        (e.currentTarget as Element).setAttribute("aria-expanded", "false");
        accordionFlg = false;
      } else {
        (e.currentTarget as Element).setAttribute("aria-expanded", "true");
        accordionFlg = true;
      }
    });
  });

  if (focusTrap.value) {
    // フォーカストラップ制御
    focusTrap.value.addEventListener("focus", (e) => {
      hamburger.value?.focus();
    });
  }
});

/**
 * メニューを表示した際の背景を固定する設定を切り替えます。
 */
const backgroundFix = (flg: boolean) => {
  const scrollingElement = () => {
    const browser = window.navigator.userAgent.toLowerCase();
    if ("scrollingElement" in document) return document.scrollingElement!;
    return (document as Document).documentElement;
  };

  const scrollY = flg
    ? scrollingElement().scrollTop
    : parseInt(document.body.style.top || "0");

  document.body.style.height = flg ? "100svh" : "";
  document.body.style.position = flg ? "fixed": "";
  document.body.style.top = flg ? `${scrollY * -1}px` : "";
  document.body.style.left = flg ? "0" : "";
  document.body.style.width = flg ? "100svw" : "";

  if (!flg) {
    window.scrollTo(0, scrollY * -1);
  }
};

/**
 * メニューを閉じる際の処理を実行します。
 */
const closeMenu = () => {
  hamburger.value?.classList.remove(CLASS);
  menu.value?.classList.remove(CLASS);
  backgroundFix(false);
  hamburger.value?.setAttribute("aria-expanded", "true");
  flg = true;
};
</script>

<template>
  <div class="navigation">
    <button id="js-hamburger"
          type="button"
          class="navigation__hamburger"
          aria-controls="navigation"
          aria-expanded="false"
          aria-label="メニューを開く">
      <span class="navigation__hamburger--line"></span>
      <span class="navigation__hamburger--text"></span>
    </button>
    <nav class="navigation__menu">
      <ul class="navigation__ul">
        <li class="navigation__li">
          <NuxtLink to="/about" event="" @click.native="closeMenu" class="navigation__link">About</NuxtLink>
        </li>
        <li class="navigation__li">
          <NuxtLink to="/disc" event="" @click.native="closeMenu" class="navigation__link">Discography</NuxtLink>
        </li>
        <li class="navigation__li">
          <NuxtLink to="/music" event="" @click.native="closeMenu" class="navigation__link">Music</NuxtLink>
        </li>
        <li class="navigation__li">
          <NuxtLink to="/events" event="" @click.native="closeMenu" class="navigation__link">Events</NuxtLink>
        </li>
        <li class="navigation__li">
          <NuxtLink to="/contact" event="" @click.native="closeMenu" class="navigation__link">Contact</NuxtLink>
        </li>
      </ul>
      <LinkOfficial/>
    </nav>
  </div>
</template>

<style scoped lang="scss">
.navigation {
  &__hamburger {
    display: none;
    height: 48px;
    margin-left: auto;
    position: relative;
    z-index: 10;
    width: 48px;
    border: none;
    background-color: transparent;
    &--line {
      display: block;
      height: 1px;
      position: absolute;
      top: 19px;
      left: 50%;
      transform: translateX(-50%);
      width: 20px;
      background-color: var(--white);
      transition: 0.4s;
      &:before, &:after {
        content: "";
        display: block;
        height: 100%;
        position: absolute;
        width: 100%;
        background-color: var(--white);
        transition: inherit;
      }
      &:before {
        top: -6px;
      }
      &:after {
        top: 6px;
      }
    }
    &--text {
      position: absolute;
      bottom: 0px;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      &::before {
        content: "メニュー";
        text-align: center;
        color: var(--white);
        font-size: 0.6em;
      }
    }
    &.active {
      .navigation__hamburger {
        &--line {
          background-color: transparent;
          &::before {
            top: 0;
            transform: rotate(45deg);
          }
          &::after {
            top: 0;
            transform: rotate(-45deg);
          }
        }
        &--text {
          &::before {
            content: '閉じる';
          }
        }
      }
    }
  }
  &__menu {
    display: flex;
    justify-content: center;
    gap: 16px;
  }
  &__ul {
    display: flex;
    gap: 16px;
    list-style-type: none;
    margin-block: 0;
    padding-inline-start: 0;
  }
  &__li {
    width: 10svw;
    max-width: 128px;
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

@media screen and (max-width: 959px) {
  .navigation {
    &__hamburger {
      display: block;
      cursor: pointer;
      &:hover {
        opacity: .6;
      }
    }
    &__menu {
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      position: fixed;
      top: 0;
      left: -100%;
      z-index: 1000;
      height: 100svh;
      width: 300px;
      visibility: visible;
      padding-top: 60px;
      background-color: var(--primary-color);
      transition: 0.4s;
      &.active {
        left: 0;
        visibility: visible;
      }
    }
    &__ul {
      flex-direction: column;
    }
    &__li {
      width: 128px;
      max-width: none;
    }
  }
}
</style>