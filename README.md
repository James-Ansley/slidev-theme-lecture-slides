# SliDev Lecture Slides

[![NPM version](https://img.shields.io/npm/v/slidev-theme-lecture-slides?color=3AB9D4&label=)](https://www.npmjs.com/package/slidev-theme-lecture-slides)

A no-nonsense lecture slide theme for [Slidev](https://github.com/slidevjs/slidev).

## Examples

### Cover Layout

![title slide](assets/title.png?raw=true)

### General Styling

![overview slide](assets/overview.png?raw=true)

### Two-Col layout

![two-col slide](assets/two-col.png?raw=true)

### Diagram CSS class

Use the `diagram` class to make diagram colours invert in dark mode

<div style="display: flex">
<img src="assets/diagram_light.png" width="49%"/>
<img src="assets/diagram_dark.png" width="49%"/>
</div>

## Install

Add the following frontmatter to your `slides.md`.
Start Slidev then it will prompt you to install the theme automatically.

<pre><code>---
theme: <b>lecture-slides</b>
---</code></pre>

Learn more about [how to use a theme](https://sli.dev/themes/use).

## Layouts

This theme provides the following layouts:

- **two-col**: for two columns of content with a title and footer

## Contributing

- `npm install`
- `npm run dev` to start theme preview of `example.md`
- Edit the `example.md` and style to see the changes
- `npm run export` to generate the preview PDF
- `npm run screenshot` to generate the preview PNG
