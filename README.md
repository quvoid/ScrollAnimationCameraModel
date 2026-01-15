# hypersense Optics - Cinematic Scrollytelling Experience

A high-end, award-winning level landing page for "HyperSense Optics," a fictional cinematic camera lens. This project features an immersive scrollytelling experience where a camera lens mechanically explodes and reassembles as the user scrolls, driven by a 240-frame high-fidelity image sequence.

🔗 **Live Demo:** [Run locally to view]

## ✨ Features

- **Cinematic Scrollytelling**: 240-frame scroll-linked animation rendering at 60fps using HTML5 Canvas.
- **Precision Typography**: Huge, impactful typography (Inter font family) with scroll-triggered fade-in animations.
- **Seamless Blending**: "Pure Dark" aesthetic (#2a2a2a) where the canvas background blends perfectly with the UI.
- **Performance Optimized**: Batch image pre-loading and efficient canvas rendering logic.
- **Interactive Storytelling**: Content sections (Features, Specs, Use Cases) that reveal themselves cinematically.

## 🎨 The Creative Process

The core visual component of this project—the exploding lens animation—was crafted using a cutting-edge Generative AI workflow:

1.  **Concept Generation**: The initial (assembled) and final (fully exploded) keyframes were generated using **Google ImageFX**, establishing the visual fidelity and mechanical detail of the lens.
2.  **Motion Synthesis**: Utilized **Google Veo/Flow** technology to interpolate and animate the transition between the two keyframes, creating a mechanically accurate and smooth 3D-like disassembly.
3.  **Sequence Extraction**: The generated video animation was processed into a high-resolution sequence of **240 frames**, optimized for web performance.
4.  **Vibe Coding**: The entire web experience was "Vibe Coded" with **Antigravity**, transforming the raw image sequence into a polished, interactive web application.

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion (Scroll hooks & Layout animations)
- **Rendering**: HTML5 Canvas API
- **Language**: JavaScript/React

## 🚀 Getting Started

1.  Clone the repository:
    ```bash
    git clone https://github.com/quvoid/ScrollAnimationCameraModel.git
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Run the development server:
    ```bash
    npm run dev
    ```
4.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

*Built with precision. Vibe coded with Antigravity.*
