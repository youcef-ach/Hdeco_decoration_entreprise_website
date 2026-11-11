# Hdeco Luxury Interior & Furniture Showcase

[![React 19](https://img.shields.io/badge/React-19.1.1-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![React Router 7](https://img.shields.io/badge/React_Router-v7.9-CA4245?logo=reactrouter&logoColor=white)](https://reactrouter.com/)
[![Vite](https://img.shields.io/badge/Bundler-Vite_7-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tests](https://img.shields.io/badge/Tests-Node_Built--In_Test_Runner-brightgreen)](https://nodejs.org/api/test.html)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A modern, responsive e-commerce catalogue and brand showcase for **Hdeco**, a boutique interior decoration and bespoke furniture enterprise. Built with React 19, React Router v7, and custom ClashDisplay typography to deliver an elevated, tactile luxury shopping experience.

---

## Architecture & System Design

The application implements a decoupled, component-driven client architecture optimized for high-resolution visual merchandising, instant route transitions, and responsive multi-device accessibility.

```mermaid
flowchart TD
    subgraph Client Application
        Router[React Router v7 Pipeline]
        Router --> Landing["/ (Landing Showcase)"]
        Router --> Catalog["/all (Categorized Catalog)"]
        Router --> Details["/details/:id (Item Deep-Dive)"]
    end

    subgraph Showcase Components
        Landing --> Hero[Hero Brand Manifesto]
        Landing --> Tendance[Curated Collections]
        Landing --> Brand[Craftsmanship & Standards]
        Landing --> Started[Consultation CTA]
    end

    subgraph Catalog Engine
        Catalog --> FilterEngine[Category Filter & Parser]
        Catalog --> ProductGrid[Adaptive Card Grid]
        Details --> SpecViewer[Material & Dimension Inspector]
    end

    subgraph Design System
        Tokens[ClashDisplay Type Hierarchy]
        Icons[Ant Design Vectors + Custom SVGs]
        Palettes[Warm Earth Tones & Minimalist Neutrals]
    end

    Client Application -.-> Design System
```

---

## Key Features

1. **Editorial Merchandising & Storytelling:**
   - Hero banner with typographic hierarchy powered by custom font weights (`ClashDisplay` light to bold).
   - "Tendance" trending product spotlights with smooth transitions and localized pricing in Algerian Dinars (DZD).

2. **Full Catalog & Filtering Pipeline:**
   - Dynamic category segmentation (living room, bedroom, accent chairs, decor items).
   - Real-time catalog navigation and state management.

3. **High-Resolution Detail Views (`/details/:id`):**
   - Rich product specifications, dimensions, color swatches, and material descriptions.
   - Deep-linkable routing with dynamic parameter resolution.

4. **Lean, Zero-Bloat Performance:**
   - Bundled with Vite 7 and React 19 for rapid HMR in development and sub-second cold starts.
   - Zero heavyweight runtime dependencies—styling maintained with modular, scoped CSS.

---

## Directory Structure

```plaintext
Hdeco_decoration_entreprise_website/
├── main/
│   ├── public/               # Public assets and favicon
│   ├── src/
│   │   ├── assets/           # High-resolution media, custom ClashDisplay fonts, SVG icons
│   │   │   ├── fonts/        # ClashDisplay font family (OTF)
│   │   │   ├── icons/        # Custom SVG iconography
│   │   │   └── images/       # Curated editorial photography
│   │   ├── components/       # Shared UI blocks (Header, Footer, ProductCard, Brand)
│   │   ├── sections/         # Route views (Landing, AllProducts, ProductDetails, About)
│   │   ├── App.jsx           # Root layout and route definitions
│   │   ├── index.css         # Typography @font-face declarations and global resets
│   │   └── main.jsx          # React DOM root hydration
│   ├── .env.example          # Client environment template
│   ├── package.json          # Vite scripts and dependencies
│   └── vite.config.js        # Vite bundler configuration
├── tests/
│   └── catalog_model.test.js # Catalog schema validation, filtering & price parser tests
├── .gitignore                # Workspace git exclusion rules
└── README.md                 # Technical documentation
```

---

## Getting Started

### Prerequisites
- **Node.js**: v18.0.0 or later (tested on Node.js v24)
- **npm** or **yarn**

### 1. Installation
Clone the repository and install dependencies in the `main` application folder:
```bash
git clone https://github.com/youcef-ach/Hdeco_decoration_entreprise_website.git
cd Hdeco_decoration_entreprise_website/main
npm install
```

### 2. Environment Configuration
Copy the sample environment file:
```bash
cp .env.example .env
```

### 3. Development Server
Start the Vite development server:
```bash
npm run dev
```
The application will be accessible at `http://localhost:5173`.

### 4. Running the Test Suite
The repository includes automated test coverage for catalog schema integrity, category isolation, and price parsing via the native Node.js test runner:
```bash
# Run tests from the main application folder
npm test

# Or run directly from repository root
node --test tests/catalog_model.test.js
```

### 5. Production Build
Generate an optimized production build:
```bash
npm run build
npm run preview
```

---

## Quality & Engineering Standards

- **Asset Hygiene:** Heavy `node_modules` and transient lock files are excluded from version control via `.gitignore`.
- **Strict Linting:** ESLint 9 configuration enforcing React Hooks and refresh safety rules.
- **Continuous Validation:** Standalone test suite ensuring pricing logic and catalog categories never fail at runtime.
