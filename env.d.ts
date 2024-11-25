/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_RIOT_API_KEY: string
    readonly VITE_DATA_DRAGON_URL: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
} 