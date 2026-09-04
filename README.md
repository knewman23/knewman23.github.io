knewman23.github.io
===================

A static index of projects that are actually running.

No framework and no build step: index.html, styles.css, theme.js.
Open index.html, or serve the directory, and that is the site.

The previous Create React App blog is preserved untouched on the
"newSite" and "master" branches.

Colour is a token system. Every value lives on :root in styles.css and
is overridden in exactly three places -- [data-theme="dark"], the
prefers-color-scheme block, and nowhere else. The inline SVG schematics
reference the same var(--...) tokens, which is why they invert with the
page instead of vanishing into it.
