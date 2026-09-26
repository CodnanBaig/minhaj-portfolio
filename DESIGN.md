---
name: Minhaj Gouda
description: A cinematic portfolio for live events and operations leadership
colors:
  stage-black: "#09070e"
  stage-raised: "#15101e"
  warm-white: "#f7f0ea"
  supporting-text: "#aca6b3"
  electric-blue: "#75dfff"
  amber-cue: "#f8b566"
typography:
  display:
    fontFamily: "Barlow Condensed, sans-serif"
    fontWeight: 800
    lineHeight: 0.79
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Barlow, sans-serif"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Barlow, sans-serif"
    fontWeight: 700
    letterSpacing: "0.17em"
---

# Design System: Minhaj Gouda

## Overview

**Creative North Star: "The live show before the first cue"**

The portfolio should feel like entering a concert venue: near-black space, clear light direction, bold type at architectural scale, and moments of color that arrive with purpose. The hero is typographic and image-free. Existing project photography takes over during the work sequence. The atmosphere is vivid, but the content remains legible and direct.

The site follows the owner's chosen direction of concert energy with bolder color and light. Its pace should evoke a live production without adding visual noise or replacing the actual project record.

## Colors

Electric blue is the primary lighting cue. Amber marks experience and the final invitation. Warm white holds headlines and essential text against stage black. Raised dark surfaces separate the profile, archive, and experience without card shadows.

Color is concentrated in section accents, image light, and the contact invitation. Long copy stays warm white or supporting gray.

## Typography

Barlow Condensed carries the hero, section headlines, project titles, navigation menu, and short labels. Barlow carries navigation labels, body copy, descriptions, and metadata. Display type is uppercase and tightly set; paragraph text keeps comfortable line height and a bounded reading width.

Eight shared size roles define the active interface. Components use these tokens instead of their own font sizes. Mobile overrides apply at 700px.

| Role | Desktop | Phone |
| --- | --- | --- |
| Label / metadata | 12px | 12px |
| Navigation / action | 14px | 14px |
| Body / experience bullets | 18px | 17px |
| Lead paragraph | 26px | 22px |
| Item heading | 44px | 34px |
| Section heading | 72–144px, fluid | 56–88px, fluid |
| Project / contact display | 80–160px, fluid | 52–88px, fluid |
| Hero identity | 140–360px, fluid | 88–116px, fluid |

The hero retains positive tracking of 0.025em. Project chapters have enough height on phones to accommodate full descriptions at the body size.

The largest type is reserved for identity, selected projects, and the final contact invitation. Body text is not forced into uppercase.

## Layout

Desktop sections use wide page gutters and asymmetric text grids. Six selected projects become sticky, full-viewport chapters with image parallax and a colored curtain. The three remaining projects form an offset archive. Capability rows and experience entries use visible horizontal rules instead of cards.

At 1050px the navigation changes to a full-screen menu. At 700px the hero offsets the two name lines across the phone screen, separates them with a small light cue, and renders Gouda in electric blue. Text grids become single column and project copy moves lower over a stronger image shade. Below 430px the four business pillars become single-column rows.

## Elevation & Depth

Depth comes from stage lighting, layered photographs, image shades, and tonal sections. The interface uses no floating-card shadow system. Blurred colored beams in the first viewport are abstract spotlights, not decorative content replacements.

## Shapes

The page is mostly square-edged. Lines divide content, while circular controls are reserved for scroll and gallery navigation. Project transitions reveal rectangular image planes like stage curtains.

## Components

- **Header:** fixed, transparent at the top and darkened with backdrop blur after scrolling.
- **Project chapter:** a sticky photograph with a scroll-driven color curtain, subtle image parallax, visible title and description, and archive action.
- **Archive card:** existing photography, metadata, and oversized title with an image scale response on hover.
- **Gallery:** full-screen image viewer with next/previous controls, count, tags, Escape and arrow-key support.
- **Contact:** oversized email invitation with an amber cue and direct social links.

## Do's and Don'ts

- Keep the established biography, project details, experience, gallery images, and contact links intact.
- Use movement to mark entrance, progression, and handoff between sections.
- Preserve readable contrast over photography.
- Honor reduced-motion settings by removing scroll transforms and shortening transitions.
- Avoid stock visual effects, glitch noise, generic icon cards, and a photo-led hero.
