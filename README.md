# Spec Led Dev

Public docs site for `specled.dev`.

## Stack

- Mintlify for docs authoring and navigation
- Mintlify-hosted site infrastructure on Vercel

## Local Preview

```bash
npm run dev
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
