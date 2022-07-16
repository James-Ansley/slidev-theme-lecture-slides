# SliDev Lecture Slides

[![NPM version](https://img.shields.io/npm/v/slidev-theme-lecture-slides?color=3AB9D4&label=)](https://www.npmjs.com/package/slidev-theme-lecture-slides)

A no-nonsense lecture slide theme
for [Slidev](https://github.com/slidevjs/slidev).

## Examples

### Cover Layout

![title slide](https://media.githubusercontent.com/media/James-Ansley/slidev-theme-lecture-slides/main/assets/title.png)

### General Styling

![overview slide](https://media.githubusercontent.com/media/James-Ansley/slidev-theme-lecture-slides/main/assets/overview.png)

### Two-Col layout

![two-col slide](https://media.githubusercontent.com/media/James-Ansley/slidev-theme-lecture-slides/main/assets/two-col.png)

### Diagram CSS class

Use the `diagram` class to make diagram colours invert in dark mode

<div style="display: flex">
<img src="https://media.githubusercontent.com/media/James-Ansley/slidev-theme-lecture-slides/main/assets/diagram_light.png" width="49%"/>
<img src="https://media.githubusercontent.com/media/James-Ansley/slidev-theme-lecture-slides/main/assets/diagram_dark.png" width="49%"/>
</div>

## Components

A `<PageNumber/>` component has been provided that will add page numbers to the
bottom right of pages. Currently, page numbers are only included on default
layouts. If you want page numbers on a non-default layout, just include
the `<PageNumber/>` component somewhere on the slide you want to add page
numbers to.

Page numbers are 0-indexed.

## Install

Add the following frontmatter to your `slides.md`.
Start Slidev then it will prompt you to install the theme automatically.

<pre><code>---
theme: <b>lecture-slides</b>
---</code></pre>

Learn more about [how to use a theme](https://sli.dev/themes/use).
