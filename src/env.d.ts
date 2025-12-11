// env.d.ts

declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    // Este es el shim que dice a TS: "Trata los .vue como un componente definido"
    const component: DefineComponent<{}, {}, any>
    export default component
}

declare module '*.less' {
    const content: string;
    export default content;
}