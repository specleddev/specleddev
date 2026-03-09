# Spec Led Dev

Public docs site for `specled.dev`.

## Stack

- Plain Mintlify source content at repo root
- Mintlify-hosted frontend
- GitHub-backed docs configuration

## Local Preview

```bash
mise exec node@20 -- npm run dev
```

## Structure

- `docs.json`
  - Mintlify site configuration
- `*.mdx`
  - top-level docs pages
- `examples/`
  - concrete examples
- `implementation/`
  - guidance for tool builders
