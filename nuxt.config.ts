// https://nuxt.com/docs/api/configuration/nuxt-config
import DiscList from './assets/json/discs.json';
const discList : Array<Disc> = DiscList.items;
interface Disc {
  id: string,
}

export default defineNuxtConfig({
  app: {
    head: {
      link: [{
        rel: 'icon',
        href: '/favicon.ico'
      }]
    }
  },
  css: [
    '/assets/css/reset.css',
    '/assets/css/style.css'
  ],
  devtools: { enabled: true },
  hooks: {
    // 動的ルーティングを行っている disc/[id] の静的ファイル生成を実施
    async "nitro:config"(nitroConfig) {
      if (nitroConfig.prerender?.routes == undefined) {
        return;
      }
      nitroConfig.prerender.routes = discList.map(disc => '/disc/' + disc.id);
    }
  }
})
