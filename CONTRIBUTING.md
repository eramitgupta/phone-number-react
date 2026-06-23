# Contributing

Thanks for helping improve `@erag/phone-number-react`.

## Setup

```bash
cd /Users/zonvoir_minimac/www/vue/phone-number-react
npm install
```

## Development

```bash
npm run lint
npm run type-check
npm run build
```

## Guidelines

- Keep the package standalone; do not add Laravel or Inertia dependencies.
- Keep public APIs typed and backward compatible when possible.
- Add or update README examples when changing user-facing behavior.
- Run the minimum relevant verification commands before opening a pull request.

## Pull Requests

Use a focused branch and include a clear summary:

```bash
git checkout -b feature/your-change
git commit -m "feat: describe your change"
```

Open a pull request with the problem, solution, and verification commands.

## Issues

When reporting a bug, include package version, runtime version, a minimal data sample, expected output, and actual output.
