## Saturday, January 29, 2022 @ 12:19:10 PM

Using this fabulous repo 👍
https://github.com/web2033/vite-vue3-tailwind-starter

Starting a new starter template with Vite, Vue, and TailwindCSS

---

## To Do:
- learn to use HeroIcons
- - https://unpkg.com/browse/@heroicons/react/outline/
- - https://github.com/tailwindlabs/heroicons#vue
- - https://heroicons.com/
- - https://heroicons.dev/?query=more
- learn to use HeadlessUI
- - https://headlessui.dev/vue/menu
- Making a Site Work Offline Using the VitePWA Plugin
	https://css-tricks.com/vitepwa-plugin-offline-service-worker/


### Wednesday, February 9, 2022 @ 01:06:11 AM

Trying to get the page title to reflect the current navigated page but I can't get anything to work.
https://www.youtube.com/watch?v=W6qpsmkuJ8c
Not even that one.


### Wednesday, February 9, 2022 @ 09:27:25 AM

Filed an Issue with the repo maintainer 'web2033' and he replied how to fix the navigation issue I was having. [Simple solution](https://github.com/web2033/vite-vue3-tailwind-starter/issues/247#issuecomment-1033577225).

He also recommends this 3rd party addon:
- https://github.com/vueuse/head
> Document head manager for Vue 3.
>
> @vueuse/head is a Vue composition API that helps you manage <title>, <meta> and other elements inside document head, it has no dependencies and we always try to keep it as slim as possible.
>

## Thursday February 10 @ 00:49

Was reading about [UnCSS](https://github.com/unocss/unocss) and it was mentioned that TailwindCSS stole some of their ideas from WindiCSS.

So now I really want to switch from TailwindCSS to WindiCSS.

Also, the Lead Developer of UnoCSS is Anthony Fu, who also is a Developer of Vite (he also made Vitesse).


MIGRATION GUIDE HERE!
https://windicss.org/guide/migration.html
https://windicss.org/integrations/vite.html

This keeps getting fucking sweeter and sweeter!!!
https://windicss.org/features/analyzer.html

OH SHIT, ICONS!
https://windicss.org/posts/v31.html#icon-library-for-windi

## Thursday, February 10, 2022 @ 09:34:36 PM

SOLUTION!

[Reddit commentor](https://www.reddit.com/r/vuejs/comments/soxgxm/i_need_help_learning_strapi_vue/hwgfchd/?utm_source=reddit&utm_medium=web2x&context=3) suggest `axios`, as it's easier to work with. So I re-followed the [guide](https://docs.strapi.io/developer-docs/latest/developer-resources/content-api/integrations/vue-js.html#get-request-your-collection-type) and it's working!

:D
