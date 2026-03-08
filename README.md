# Spec Led Dev

Public docs site for `specled.dev`.

## Stack

- Mintlify content model in `docs/`
- Astro frontend using the official Mintlify headless starter
- Vercel for deployment at the root domain

## Local Preview

```bash
mise exec node@20 -- npm install
mise exec node@20 -- npm run dev
```

## Structure

- `docs/docs.json`
  - Mintlify site configuration
- `docs/*.mdx`
  - top-level docs pages
- `docs/examples/`
  - concrete examples
- `docs/implementation/`
  - guidance for tool builders
- `src/`
  - Astro site runtime and Mintlify-powered docs shell
