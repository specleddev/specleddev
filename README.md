# Spec Led Dev

Public docs site for `specled.dev`.

## Stack

- Plain Mintlify source content in `docs/`
- Mintlify-hosted frontend
- GitHub-backed docs configuration

## Local Preview

```bash
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
