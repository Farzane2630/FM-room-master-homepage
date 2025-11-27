# Frontend Mentor - Room homepage solution

This is a solution to the [Room homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/room-homepage-BtdBY_ENq). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Navigate the slider using either their mouse/trackpad or keyboard

### Screenshot

![lighthouse score](./images/Screenshot%20from%202025-11-25%2019-03-44.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- SASS

### What I learned

1. Accessibility Note:
   `<button>` Must Have Accessible Text

Example of problematic code:

```
<button type="button" class="nav__menu__icon"></button>

```

\*The name="" attribute does not count toward accessibility.

#### How to fix it

✔ Option 1 — Add an aria-label (recommended)

```
<button
  type="button"
  class="nav__menu__icon"
  aria-label="Open navigation menu"
>
  <img src="images/icon-hamburger.svg" alt="" />
</button>
```

✔ Option 2 — Add visually hidden text

```
<button type="button" class="nav__menu__icon">
  <span class="sr-only">Open menu</span>
  <img src="images/icon-hamburger.svg" alt="" />
</button>
```

✔ Option 3 — Use an SVG with a `<title>`

```
<button type="button" class="nav__menu__icon">
  <svg aria-labelledby="menuTitle">
    <title id="menuTitle">Open menu</title>
    <path ... />
  </svg>
```

### Continued development

### Useful resources

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

## Acknowledgments
