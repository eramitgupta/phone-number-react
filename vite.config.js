import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const packageJson = JSON.parse(readFileSync(new URL('./package.json', import.meta.url), 'utf8'))
const peerDependencies = Object.keys(packageJson.peerDependencies ?? {})
const isExternal = (id) =>
    peerDependencies.some((dependency) => id === dependency || id.startsWith(`${dependency}/`))

export default defineConfig({
    build: {
        lib: {
            entry: fileURLToPath(new URL('./src/index.ts', import.meta.url)),
            formats: ['es'],
            fileName: 'index'
        },
        outDir: 'dist',
        emptyOutDir: true,
        rollupOptions: {
            external: isExternal,
            output: {
                exports: 'named'
            }
        },
        sourcemap: true,
        target: 'es2018'
    }
})
