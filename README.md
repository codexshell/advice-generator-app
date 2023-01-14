# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Source Code](https://github.com/codexshell/advice-generator-app)
- Live Site URL: [Live Site](https://advice-generator-app-12k.pages.dev/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Svelte](https://svelte.dev/) - JS library
- [Astro](https://astro.build/) - Web framework
- [tailwindcss](https://tailwindcss.com/) - CSS framework

### What I learned

Adding commitlint to a project and reinforcing its use by employing git hooks. This process involved several stages, first of all ensuring that your project is get up to use version control.

After configuring version control, next is to create a git hook that will allow you to tap into the git lifecycle. I employed the use of an automated tool - husky

After completion commitlint was able to intercept my commits and lint them before allowing the process to complete. In the event of any violations, the commit would fail altogether with useful information on why so

### Continued development

- [Astro](https://astro.build/)
- [Commit message guidelines](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines)

### Useful resources

- [How to define the node runtime version using a .nvmrc](https://stackoverflow.com/questions/57110542/how-to-write-a-nvmrc-file-which-automatically-change-node-version) - This helped me to setup a default runtime node version for each applications on an individual level. I really liked this pattern and will use it going forward.
- [Deploy your Astro Site to Cloudflare Pages](https://docs.astro.build/en/guides/deploy/cloudflare/) - This is an amazing article which helped me to identify that Astro works best with node version 16.x.x

## Author

- Website - [Silvanos Eric](https://codexshell.github.io/)
- Frontend Mentor - [@codexshell](https://www.frontendmentor.io/profile/codexshell)
- Twitter - [@codexshell](https://www.twitter.com/codexshell)
