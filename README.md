# Adrian's Astro Stack

## 🍔 Tech-Stack

This project is setup as a [devcontainer](https://containers.dev) so you can get started developing right away.

### 🕸️ App

- [Bun](http://bun.sh)
- [Astro](http://astro.build)
- [Tailwind](http://tailwindcss.com)
- [Vue](https://vuejs.org)

### 📐Testing / Linting

- [Biome](https://biomejs.dev)
- [Playwright](https://playwright.dev)

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                                      |
| :------------------------ | :---------------------------------------------------------- |
| `bun install`             | Installs dependencies                                       |
| `bun run dev`             | Starts local dev server at `localhost:4321`                 |
| `bun run build`           | Build your production site to `./dist/`                     |
| `bun run preview`         | Preview your build locally, before deploying                |
| `bun run check`           | Type-check `.astro`, `.vue` and `.ts` files (`astro check`) |
| `bun run test`            | Builds the site and runs the Playwright tests against it    |
| `bun run lint-all`        | Lint and format the whole project with Biome                |
| `bunx playwright install` | Installs the browsers Playwright needs (first run only)     |
| `bunx astro ...`          | Run CLI commands like `astro add`, `astro info`             |

> Requires Node.js >= 22.23.4 (or Bun). Tailwind CSS v4 is wired in through `@tailwindcss/vite` and `src/styles/global.css`; there is no `tailwind.config` file anymore — configure the theme with `@theme` in CSS.

## 📝 Contribution Notes

We want to use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) to keep commit messages in an easy to read structure for everyone.
