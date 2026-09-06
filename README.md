# Green Nova Energy & Environment Solutions

> **Engineering India's Net-Zero Future.**  
> Multi-vertical clean energy & environmental infrastructure company delivering engineered solutions across Renewable Hybrid Energy, Green Hydrogen, Compressed Biogas (CBG), Waste-to-Energy, Environmental Engineering, and Sustainability Advisory.

---

## ⚡ Overview

Green Nova Energy & Environment Solutions Private Limited provides bankable, end-to-end EPC, engineering, and lifecycle operation solutions calibrated for institutional standards across India:

- **Green Hydrogen**: Alkaline & PEM electrolysis, balance of plant, hydrogen storage, and safety integration.
- **Compressed Biogas (CBG / Bio-CNG)**: SATAT-compliant turnkey biomethane facilities utilizing agricultural residue, pressmud, and municipal waste.
- **Waste-to-Energy (WtE)**: High-efficiency mass-burn incineration, RDF gasification, and waste heat recovery.
- **Environmental Engineering**: Zero Liquid Discharge (ZLD), industrial effluent treatment, and air quality compliance.
- **Renewable Hybrid Energy**: Utility-scale Solar PV, wind turbines, and Battery Energy Storage Systems (BESS).
- **Sustainability Advisory**: ESG reporting, carbon accounting, BRSR compliance, and decarbonisation roadmaps.

---

## 🛠️ Technology Stack

- **Framework**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Tooling**: [Vite 5](https://vitejs.dev/)
- **Routing**: [React Router 7](https://reactrouter.com/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/) with a custom design system ("Nordic Spruce & Quantum Aurum" theme)
- **Typography**: Inter (sans-serif) & Outfit (display)

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/)

### Installation

```bash
# Clone the repository
git clone https://github.com/ElevateDynasty/green-nova.git

# Navigate into the project directory
cd green-nova

# Install dependencies
npm install
```

### Development

```bash
# Start the Vite development server with HMR
npm run dev
```

The application will be accessible at `http://localhost:5173/`.

### Production Build

```bash
# Type-check and compile production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 📂 Project Structure

```
├── public/                 # Static assets, branding logos, and photography
├── src/
│   ├── components/
│   │   ├── blocks/         # Page sections (Hero, Services, Roadmap, CTA, etc.)
│   │   ├── layout/         # Shell, Navbar, Footer, Navigation
│   │   ├── primitives/     # Buttons, Icons, Cards, Badges
│   │   └── section/        # Section headers and layout wrappers
│   ├── data/               # Structured data, practice vertical blueprints, site config
│   ├── hooks/              # Custom hooks (useSeo, useReveal, etc.)
│   ├── pages/              # Route pages (Home, About, Services, Detail, Contact, etc.)
│   ├── styles/             # Design tokens, index.css, Tailwind configurations
│   ├── types/              # TypeScript definitions and architecture models
│   ├── App.tsx             # Root router and application shell
│   └── main.tsx            # Application entrypoint
├── index.html              # HTML template with SEO meta tags
├── tailwind.config.ts      # Tailwind configuration with corporate palette
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite configuration
```

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
