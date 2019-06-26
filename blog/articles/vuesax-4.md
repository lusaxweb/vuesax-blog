---
sidebar: auto
title: Vuesax 4.0
date: 2019-5-20 9:32:00
excerpt: Vuesax is a radically new framework and with an idea of ​​being different from other frameworks, we love what we have achieved so far in v3.x but now we want to give a total change in many features and improve the internal code as in the design.
autor: luisDanielRoviraContreras
type: post
blog: true
tags:
  - Announcements
---

## Why a New Major version?

Vuesax is a radically new framework and with an idea of ​​being different from other frameworks, we love what we have achieved so far in v3.x but now we want to totally change many features and improve the internal code and design.

## What Are The Most Important Changes

We want to improve the structure and logic of our components, variables, classes (css), design and other things.

### Change The Logic In The Components

Our goal is for the components to have similar logic and reusable code. This will make support and management musch easier. We want to divide up the code and make it more global, with mixins for characteristics that are repeated in the components.

We will change the design to give the components a more unified and attractive appearance overall.

We want better documentation. More thorough documentation will empower the community to solve any bug or add functionality without code or logic clashes.

### Changes In Documents

In v4.0 we will change the documents and redo them as much as possible for a better understanding, create a blog for more specific topics and be able to go deeper in tutorials.

The documents will be more intuitive, with examples on pages like CodeSandbox or CodePen, giving users the chance to experiment with features.

We will have an API of all the most important properties and global functions, so we will be able to understand the framework better.

We will change the documents to the latest version of Vuepress giving funcionalities and improvements to the reader.

### Responsive Components

The components will have great responsive support so that they can be used in any type of project

### CSS Variables

We are going to implement CSS Variables as the main variables of the framework, providing better management of the themes and colors in real-time, such as the ability to change the subject from light to dark with just one click.

With this change the components can be much more customizable in colors. This also simplifies their manipulation with js for only css treatment, eliminating code and adding fluency.

###  Syntax

The components are going to have a not very drastic change in the syntax as variable properties clobal (data) but we do not want to change this aspect too much, since the migration would not be very complicated from v3.x to v4.0

### Design

A design system will be implemented for a better visual experience, documents will be implemented on how to use the components so that they have a visual coherence.

We will create files for designers and some adventurous programmers who want to design before programming to see what the final product will look like with the components of vuesax.

Files (Vuesax.xd)


### Stylus Variables

Global stylus variables are going to be created to change the whole aspect of the framework, like `$ vs-text-color` or` $ vs-border-radius`. This will allow you to make global styling changes to your project by just changing top-level variables.

There will also be more specific variables for each component like `$ vs-button-border-radius` and thus you will be able to manipulate the components without having to add your own style (of course there are some cases in which we need our own style).

### New Components

The components that are already created will be improved, and in some cases redone, so that they are optimized for the new design and code system.

We want to create new components that we know we still need as **datePicker** or **slide** but first we want to focus on changing and adjusting the entire framework to start off on the right foot and have everything as we expect.

### Components Pro

We are going to create a line of Pro Components. These will not simply be your typical buttons or selects, but more focused on complex components.These will be flashy and functional, for example something like a ** slide ** or a ** list of social networks **.

These components are going to be included in vuesax core but we believe that it can be divided into something like vuesax@pro, so they can be included only if they are necessary for the project.

### Themes

We are implementing support for completely different themes and not only in colors but in design, figures, functionality and ux. Themes will be optimized for various uses, whether website or app.

### Vuesax-pugins

We are going to create plugins for the community and thus be able to implement vuesax easier through the Vuejs CLI or use it, for example, in VS Code with snippets.

### Support For Various Languages

Support for different languages ​​will be implemented and you will be able to change key text in the components with a single process.

### Much More

There are many more changes that we are going to implement and that will greatly improve Vuesax and all its ecosystem. We want to be a great framework within the community and help all programmers to achieve that great idea!

## Final Release

In all honesty, we don’t know when this will happen yet, but likely in 2019. Again, we care more about shipping something that is solid and stable rather than hitting specific dates. There is a lot of work to be done, but we are excited for what’s coming next!


