/// <reference types="vite/client" />
/// <reference types="three" />
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*.glsl' {
  const content: string
  export default content
}
