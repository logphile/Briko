/// <reference types="node" />

declare module '*.svg?url' {
  const src: string
  export default src
}

declare module '*.png' {
  const src: string
  export default src
}

declare module '*.ico' {
  const src: string
  export default src
}
