# Changelog

All notable changes to the published Spec Led Development spec are documented here.

## 1.0.0 - 2026-03-12

The 1.0 release marks the first stable public version of the portable Spec Led Development core.

### Added

- A stable portable core with five claim types: `subject`, `requirement`, `scenario`, `verification`, and `exception`
- The repo contract built around authored specs in `.spec/specs/*.spec.md` and derived state in `.spec/state.json`
- A normative processing model for `initialize`, `verify`, and `check`
- Human-in-the-loop and CI requirements that keep drift visible in daily development
- Public docs that explain the method, the core model, use cases, and implementation tracks

### Clarified

- The spec is a small contract layer, not a replacement for code, tests, docs, or review
- The method is language-agnostic even when tooling maturity differs by implementation
- Authored current truth and derived verification state are separate on purpose

### Release Notes

- `.spec/state.json` uses `specification_version: "1.0"` for the portable core release
- [`specled_ex`](https://github.com/specleddev/specled_ex) is the most complete current implementation of the 1.0 spec
- [`specled`](https://github.com/specleddev/specled) is the JavaScript and TypeScript implementation track for the same model
