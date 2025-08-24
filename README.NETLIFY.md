Netlify notes

This project uses pnpm with a local workspace package `packages/oxc-parser` which is a JS stub to avoid native bindings during CI. Netlify is configured to run `pnpm install --frozen-lockfile` in `netlify.toml`.

If Netlify still fails on native bindings, ensure the site build settings use Node 20 and that Corepack/pnpm are available on the build image.
