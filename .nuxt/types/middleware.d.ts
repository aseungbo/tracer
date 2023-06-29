import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/Users/anseungbo/workspace/landing/tracer/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}