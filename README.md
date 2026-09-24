# CFD Meshing Learning Lab

Interactive teaching tools for understanding mesh selection, mesh quality, boundary-layer resolution, and solution verification in computational fluid dynamics (CFD).

Developed by **Dr. Nuha Aljuneidi** for engineering education and independent study.

## Live resources

- [Mesh Strategy by Physics Type](https://nuhaaljuneidi.github.io/mesh/)
- [Seven CFD Meshing Mistakes](https://nuhaaljuneidi.github.io/mesh/mistakes/)
- [Course page](https://sites.google.com/view/dr-nuha-aljuneidi/teaching-resources/courses/meshing)

## Seven interactive lessons

| Lesson | Topic | Interactive page |
| --- | --- | --- |
| 01 | Poor cell quality | [Open lesson](https://nuhaaljuneidi.github.io/mesh/mistakes/lesson.html?lesson=1) |
| 02 | Insufficient refinement | [Open lesson](https://nuhaaljuneidi.github.io/mesh/mistakes/lesson.html?lesson=2) |
| 03 | Ignoring boundary layers | [Open lesson](https://nuhaaljuneidi.github.io/mesh/mistakes/lesson.html?lesson=3) |
| 04 | Abrupt size transitions | [Open lesson](https://nuhaaljuneidi.github.io/mesh/mistakes/lesson.html?lesson=4) |
| 05 | Chasing cell count | [Open lesson](https://nuhaaljuneidi.github.io/mesh/mistakes/lesson.html?lesson=5) |
| 06 | Skipping grid convergence | [Open lesson](https://nuhaaljuneidi.github.io/mesh/mistakes/lesson.html?lesson=6) |
| 07 | Trusting statistics alone | [Open lesson](https://nuhaaljuneidi.github.io/mesh/mistakes/lesson.html?lesson=7) |

Each lesson combines:

- An interactive before-and-after mesh visualization
- Engineering metrics that respond to user input
- A concise explanation of the numerical consequences
- A recommended correction strategy
- A short knowledge check

Lesson 6 also includes an animated refinement sweep that demonstrates how a reported quantity approaches a plateau as the mesh is refined.

## Engineering calculators

The lesson application includes educational calculators for:

- First-cell height from a target y-plus value
- External flat-plate and internal pipe-flow estimates
- Inflation-layer stack sizing
- Grid Convergence Index (GCI) and Richardson extrapolation
- Mesh-quality rules of thumb

These tools provide initial estimates for teaching and mesh planning. They do not replace solver documentation, solution verification, validation, or engineering judgment.

## Suggested learning pathway

1. Start with **Mesh Strategy by Physics Type** to connect the governing physics to an appropriate mesh family.
2. Work through **Seven CFD Meshing Mistakes** in order, using each interactive lesson to diagnose a common failure mode.
3. Use the engineering calculators to check near-wall resolution and refinement choices before running a solver.
4. Record the mesh metrics, refinement ratio, and quantity of interest for at least three systematically refined meshes.
5. Finish with a grid-convergence study and explain whether the result is mesh independent.

### Evidence to report

For each exercise, report the selected mesh strategy, key quality metrics, refinement decisions, and one engineering justification. Screenshots should support the reasoning rather than replace it.

## Run locally

The project uses plain HTML, CSS, and JavaScript and has no build step.

1. Clone or download the repository.
2. Start any local static web server in the repository folder.
3. Open `index.html` in the local server.

For example, with Python installed:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Accessibility and interaction

- Keyboard-accessible controls and lesson navigation
- Visible focus indicators
- Responsive layouts for desktop and mobile screens
- Reduced-motion behavior for users who prefer less animation
- Text explanations accompanying the visual demonstrations

## Project structure

```text
index.html                  Mesh-strategy tool
mesh.html                   Supporting mesh content
cfd-theme.css               Shared CFD styling
mistakes/index.html         Seven-lesson gallery
mistakes/lesson.html        Interactive lesson application
mistakes/lesson-theme.css   Lesson-specific styling
mistakes/assets/            Lesson images and thumbnails
```

## Author

**Dr. Nuha Aljuneidi**  
Assistant Professor of Mechanical Engineering  
[Academic website](https://sites.google.com/view/dr-nuha-aljuneidi) · [GitHub profile](https://github.com/nuhaaljuneidi)

## Use and attribution

Copyright © 2026 Dr. Nuha Aljuneidi. All rights reserved.

Please contact the author before redistributing or adapting the educational materials.
