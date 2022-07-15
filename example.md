---
theme: ./
layout: cover
---

# SliDev Lecture Slides

## Lecture 01 -- Introduction

---

# Introduction

A no-nonsense theme perfect for lecture slides

- Introduces a new layout `two-col` (as opposed to two-cols) to allow for titles and footers to be added to two column
  slides
- Adds a `diagram` css class that inverts diagram colours in dark mode
- Has modified list spacing for clear lecture slides
    - Top-level bullets are spaced apart to get the main concepts across
    - Sub-lists are more tightly packed to keep related content together

---
layout: two-col
---

# Two-Col layout

::left::

- The two col content divides the page into four sections:
    - The title (or any other conent) at the top of the frame
    - A left panel marked with `::left::`
    - A right panel marked with `::right::`
    - A bottom panel marked with `::bottom::`$^1$
- left, right and bottom are all optional

::right::

![cat](/cat.png)

<p style="text-align: center">A very cute cat</p>

::bottom::

$^1$ Footers are a good place to put links for example: [slidev](https://sli.dev/)

---

# Diagrams

The `diagram` class allows for diagrams to invert in dark mode making for easier reading.
<img alt="an explanation of an HTML element" src="/html_element.svg" class="diagram m-auto w-md my-0"/>

This doesn't work for all images:
<img alt="a cute cat" src="/cat.png" class="diagram m-auto w-50 my-0"/>
