# Spec Led Dev

[![Spec 1.0](https://img.shields.io/badge/spec-1.0-353535)](./CHANGELOG.md)
[![Docs](https://img.shields.io/badge/docs-specled.dev-727272)](https://specled.dev)
[![GitHub Repo stars](https://img.shields.io/github/stars/specleddev/specleddev?style=social)](https://github.com/specleddev/specleddev)

Developer landing page for Spec Led Development and source for [specled.dev](https://specled.dev).

The current stable spec release is `1.0`.

Spec Led Development gives a repo a small current-truth layer plus a verification loop. It keeps intent, code, tests, docs, and review pointed at the same contract so drift stays visible.

At the core, the repo keeps authored specs in `.spec/specs/*.spec.md` and derived state in `.spec/state.json`.

If this project is useful to you, please [star `specleddev/specleddev`](https://github.com/specleddev/specleddev).

## Why It Exists

Software changes faster than shared understanding.

That gap shows up as drift:

- code that technically passes but misses the point
- tests that only cover part of the behavior
- docs that go stale
- agent output with weak context

## What Spec Led Development Does

Spec Led Development keeps four things tied together:

1. intent
2. code
3. tests and docs
4. verification

The spec is not the whole system. It is the small contract layer that keeps those pieces aligned.

## The Loop

1. Write current truth in the repo.
2. Build code, tests, and docs against it.
3. Verify that the effects match the spec.
4. Keep the same check in CI so drift does not stay hidden.

## Start Here

- Website: [specled.dev](https://specled.dev)
- Overview: [What Spec Led Development is](https://specled.dev)
- Getting started: [specled.dev/getting-started](https://specled.dev/getting-started)
- Tooling: [specled.dev/tooling](https://specled.dev/tooling)
- Changelog: [CHANGELOG.md](./CHANGELOG.md)

## CLI Packages

- JavaScript and TypeScript: [`specled`](https://github.com/specleddev/specled), run with `npx specled`
- Elixir: [`specled_ex`](https://github.com/specleddev/specled_ex), with `mix spec.init`, `mix spec.verify`, and `mix spec.check`

## This Repo

- Hosts the public docs site for [specled.dev](https://specled.dev)
- Keeps the Mintlify config in `docs.json`
- Stores docs pages at the repo root as `*.mdx`
- Includes concrete examples in `examples/`
- Includes implementation guidance in `implementation/`

## Local Preview

```bash
mise exec node@20 -- npm run dev
```
