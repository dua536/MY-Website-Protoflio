<div align="center">

# ✦ Dua Memon — Portfolio

**A stunning personal developer portfolio** built with pure HTML, CSS & Vanilla JavaScript.
Custom 3D avatar · Animated particle canvas · Glassmorphism UI — zero frameworks.

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Three.js](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)

![Status](https://img.shields.io/badge/status-live-brightgreen?style=flat-square)
![Responsive](https://img.shields.io/badge/responsive-yes-blue?style=flat-square)
![Dependencies](https://img.shields.io/badge/dependencies-none-orange?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)

<br/>

> *"Building real-world solutions with Python, JavaScript, Node.js & UiPath RPA."*

</div>

---

## 🌟 Overview

This is my personal developer portfolio — a fully hand-coded, production-quality website that showcases my skills, projects, experience, and contact information. Built entirely without any CSS framework or JS library (except Three.js for the 3D avatar), every detail from the custom cursor to the orbiting 3D character was crafted from scratch.

---

## 🎬 Features

| Feature | Details |
|---|---|
| 🖱️ **Custom Cursor** | Pink dot + lagging ring cursor with hover-expand effect across all interactive elements |
| 🎆 **Particle Canvas** | 120 coloured floating particles + 7 rotating geometric shapes (triangles, squares, hexagons) on `<canvas>` |
| 👩‍💻 **3D Character (Three.js)** | Fully built 3D avatar using `THREE.js` — custom geometry head, hair, suit, laptop, orbiting stars, reacts to mouse movement |
| ⌨️ **Typewriter Role** | Cycles through *Full-Stack Developer · RPA Specialist · Problem Solver* with type & delete animation |
| 🪪 **3D Tilt ID Card** | Interactive identity card with CSS `perspective` + `rotateX/Y` on mouse move |
| 📊 **Animated Skill Bars** | Progress bars animate to exact percentages (Python 90%, JS 82%, etc.) on scroll via `IntersectionObserver` |
| 🎴 **Scroll Reveal** | Skill cards, timeline items, project cards, tools, achievements, and contact links all fade/slide in on scroll |
| 🌈 **Gradient Design System** | Pink → Purple → Teal gradients across text, buttons, bars, borders, and glows |
| 🌐 **Background Layers** | Radial blob gradients + 80px CSS grid overlay + animated canvas particles — all layered |
| 📱 **Responsive** | Collapses cleanly to mobile — nav links hidden, hero stacks, 3D canvas hidden on small screens |

---

## 🗂️ File Structure

```
portfolio/
├── index.html      ← Full page structure & content
├── style.css       ← Design system, animations, responsive layout
├── script.js       ← Cursor, particles, Three.js avatar, typewriter, tilt card, scroll reveal
└── README.md       ← This file
```

---

## 🎨 Design System

**Fonts** — [Syne](https://fonts.google.com/specimen/Syne) (headings · 700, 800) · [DM Sans](https://fonts.google.com/specimen/DM+Sans) (body) · [Raleway](https://fonts.google.com/specimen/Raleway) (light labels)

**Colour Palette**

```css
--pk:  #ff6b9d   /* Pink — primary accent         */
--pu:  #c77dff   /* Purple — secondary accent      */
--te:  #72efdd   /* Teal — highlight               */
--go:  #f8c537   /* Gold — certifications          */
--dk:  #07060f   /* Deep black background          */
--dk2: #0d0b1e   /* Slightly lighter sections      */
--cd:  #130f2a   /* Card surface                   */
--tx:  #e8e0ff   /* Primary text                   */
--mt:  #7b6fa0   /* Muted / secondary text         */
```

---

## 📐 Page Sections

```
┌────────────────────────────────────────────┐
│  NAV           Fixed glassmorphism bar     │
│  HERO          3D avatar · Typewriter      │
│  ABOUT         Bio · ID card · Stats       │
│  SKILLS        7 animated progress bars    │
│  EXPERIENCE    Timeline — NED · Google AI  │
│  PROJECTS      CartZen · Student Mgmt Sys  │
│  TOOLS         11 tool pills               │
│  CERTIFICATIONS  Google AI Essentials      │
│  ACHIEVEMENTS  4 key wins                  │
│  CONTACT       Phone · Email · LinkedIn · GitHub │
│  FOOTER        Logo · Location             │
└────────────────────────────────────────────┘
```

---

## 🛠️ Projects Showcased

### 🛒 CartZen
Full-stack smart grocery management web app. RESTful APIs with **Express.js**, persistent storage with **Oracle Database**, live item browsing and cart management.
- **Stack:** Node.js · Express.js · Oracle DB · HTML/CSS
- **Link:** [dua536.github.io/CARTZEN](https://dua536.github.io/CARTZEN/)

### 📚 Student Management System
Data-driven student records app applying core DSA concepts — linked lists, sorting, search. Visualises grades and attendance with **Matplotlib** and **Pandas**.
- **Stack:** Python · DSA · Matplotlib · Pandas
- **Link:** [github.com/dua536](https://github.com/dua536)

---

## 🏅 Certifications

- **Google AI Essentials** — Professional Certificate · 2026 · Verified ✓

---

## 📱 Responsive Breakpoints

| Breakpoint | Changes |
|---|---|
| `> 960px` | Full layout — side-by-side hero, nav links visible, 3D canvas shown |
| `≤ 960px` | Nav links hidden, hero stacks vertically, 3D canvas hidden, single-column grids |

---

## 🚀 Run Locally

```bash
python -m http.server 8000
```

Open **http://localhost:8000** in your browser.

> Three.js is loaded from CDN — an internet connection is required for the 3D avatar to render.

---

## 🌐 Browser Support

| Browser | Support |
|---|---|
| Chrome / Edge 90+ | ✅ Full |
| Firefox 88+ | ✅ Full |
| Safari 14+ | ✅ Full |
| Internet Explorer | ❌ Not supported |

---

## 📄 License

MIT — free for personal use and inspiration.

---

<div align="center">

**Made with 💜 in Karachi, Pakistan · Dua Memon · NED University · 2024**

</div>
