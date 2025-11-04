# Pizzaria Frontend

Frontend application for the pizzaria website built with React, TypeScript, and Tailwind CSS.

## Features

- 🍕 Digital menu display
- 📱 Responsive design
- 🎨 Modern UI with Tailwind CSS
- ⚡ Fast performance with Vite
- 🔒 Type-safe with TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Create environment file:
```bash
cp .env.example .env
```

3. Start development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── app/              # Application setup and routing
├── assets/           # Static assets and global styles
├── core/             # Core components and utilities
│   ├── components/   # Reusable UI components
│   ├── lib/          # Library configurations
│   └── utils/        # Utility functions
├── domain/           # Business domain modules
└── pages/            # Page components
    └── layouts/      # Layout components
```

## Technologies

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **React Router** - Routing
- **TanStack Query** - Data fetching
- **Axios** - HTTP client
- **Zustand** - State management
- **React Hook Form** - Form handling
- **Zod** - Schema validation

## Contributing

Please follow the established code structure and naming conventions when contributing to this project.

## License

Private project - All rights reserved