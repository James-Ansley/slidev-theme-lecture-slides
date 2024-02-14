---
theme: ./
layout: cover
---

# SliDev Lecture Slides

## Lecture 01 -- Introduction

---

# Introduction

A no-nonsense theme perfect for lecture slides

- Overrides the default layout to allow for optional two columns and a footer
- Includes page numbers for default-layout pages
- Adds a `diagram` css class that inverts diagram colours in dark mode
- Has modified list spacing for clear lecture slides
  - Top-level bullets are spaced apart to get the main concepts across
  - Sub-lists are more tightly packed to keep related content together

---

# Two-Col Default Layout

::left::

- The default layout now allows for you to divide the page into four sections:
  - The title (or the main content) at the top of the frame
  - A left panel marked with `::left::`
  - A right panel marked with `::right::`
  - A bottom panel marked with `::bottom::`$^1$
- left, right and bottom are all optional, if they are not included the page
  will render as normal

::right::

![cat](/cat.png)

<p style="text-align: center">A very cute cat</p>

::bottom::

$^1$ Footers are a good place to put links for
example: [slidev](https://sli.dev/)

---

# Diagrams

The `diagram` class allows for diagrams to invert in dark mode making for easier
reading.
<img alt="an explanation of an HTML element" src="/html_element.svg" class="diagram m-auto w-md my-0"/>

This doesn't work for all images:
<img alt="a cute cat" src="/cat.png" class="diagram m-auto w-50 my-0"/>

---
pageNumber: false
---

# Page Numbers

Providing the metadata field `pageNumber: false` will disable Page numbers for a
page.

A `<PageNumber/>` component has been provided that will add page numbers to the
bottom right of pages. Currently, page numbers are only included on default
layouts. If you want page numbers on a non-default layout, just include
the `<PageNumber/>` component somewhere on the slide you want to add page
numbers to.

Page numbers are 0-indexed.
