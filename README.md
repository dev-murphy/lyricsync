# LyricSync

I want to create a simple app to sync lyrics with instrumental loaded from either local audio file or audio URL that is added to the web app. This will be used to create a Spotify-like lyrics scroll effect.

## What will do?

I want it to...

1. Allow me to export a JSON file with the timestamp information for lyrics.
2. Allow me to possibly export a video of the lyrics highlight with instrumental background.

> [!IMPORTANT]
> You can track what is currently being worked on in the [.TODO file](.TODO)

## What did I use?

| Name                                   | Used for                        | URL                                                                                                                                         |
| -------------------------------------- | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Vue 3 with Typescript (Vite)           | The base framework              | [link](https://vite.dev/guide/)                                                                                                             |
| TailwindCSS v4                         | Used for UI framework           | [link](https://tailwindcss.com/docs/installation/using-vite)                                                                                |
| Vue Router v5                          | For file-based routing          | [link](https://router.vuejs.org/file-based-routing/)                                                                                        |
| Pinia                                  | For state management            | [link](https://pinia.vuejs.org/getting-started.html)                                                                                        |
| Unplugin (Auto Import & Vue Component) | For auto-import of common files | [link](https://github.com/unplugin/unplugin-auto-import) and [link](https://github.com/unplugin/unplugin-vue-components?tab=readme-ov-file) |

## How to run it?

I am using [pnpm package manager](https://pnpm.io/) for this project. Please use the following commands to do the different operations. Feel free to replace `pnpm` with your favorite package manager like yarn, bun, npm, etc.

### Install dependencies

```sh
pnpm install
```

### Start development server

```sh
pnpm dev
```

### Test & Build production assets

```sh
pnpm build
```

### Run production preview

```sh
pnpm preview
```
