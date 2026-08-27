# CosmicFabri — Portfolio

Software engineering portfolio. **Nuxt 4** (universal rendering) · **TypeScript** · **Tailwind CSS v4** · **@nuxt/content**.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run preview  # preview the production build
```

## Where things live

| What | File |
| --- | --- |
| Home text, name, intro, social links | [app/data/profile.ts](app/data/profile.ts) |
| Accomplishments carousel items | [app/data/accomplishments.ts](app/data/accomplishments.ts) |
| Projects grid (order, `span`, tags, card image) | [app/data/projects.ts](app/data/projects.ts) |
| Contact blocks | [app/data/contact.ts](app/data/contact.ts) |
| Individual project articles | [content/projects/](content/projects/) |
| Design tokens (colors, fonts) | [app/assets/css/main.css](app/assets/css/main.css) |
| Icon catalogue | [app/components/AppIcon.vue](app/components/AppIcon.vue) |
| Images (served from `/`) | [public/](public/) |

### Add an accomplishment

Drop an image in `public/accomplishments/`, then append an object to the array in
`app/data/accomplishments.ts`. The carousel wraps back to the first item after
the last. Remove one by deleting its object.

### Add a project

1. Append an object to `app/data/projects.ts`. Set `span: 2` for a full-width
   card or `span: 1` for a half-width card that pairs with the next `span: 1`.
2. Create `content/projects/<slug>.md` (copy an existing file). `slug` must match.
3. Add a card image to `public/projects/`.

Inside a project article you can use:

```md
::article-paragraph{image="/projects/foo/diagram.svg" side="right" alt="..."}
Paragraph text. Markdown works here. Omit `image` for a plain block.
::

::article-image{src="/projects/foo/hero.png" caption="Optional caption"}
::
```

Links under the article come from the `links:` list in the front-matter
(`label`, `href`, `icon`, optional `borderColor`). Icon names are in
`app/components/AppIcon.vue`.

### Add a contact method

Append to `app/data/contact.ts` and pick an icon name from `AppIcon.vue`.
