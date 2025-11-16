<!-- @format -->

# LA Plant Hire Website

A modern, responsive website for LA Plant Hire - a construction equipment rental and materials supply company. Built with Next.js 15, React, and TypeScript.

## 🚀 Features

- **Equipment Hire**: Browse and inquire about construction equipment rentals
- **Materials Supply**: Sand, gravel, recycled concrete, and soil products
- **Truck Fleet**: Comprehensive truck and tipper services
- **Soil Register**: Clean fill registration and volume calculator
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop
- **Modern UI**: Built with Shadcn UI components and Tailwind CSS
- **Performance Optimized**: Server-side rendering with Next.js App Router

## 📁 Project Structure

```
la-plant-hire/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx           # Homepage
│   │   ├── equipment/         # Equipment hire page
│   │   ├── materials/         # Materials supply page
│   │   ├── truck-fleet/       # Truck fleet page
│   │   └── soil-register/     # Soil register page
│   ├── components/            # React components
│   │   ├── CommonComponents/  # Shared components (navbar, footer, etc.)
│   │   ├── HomeComponents/    # Homepage-specific components
│   │   ├── EquipmentComponents/
│   │   ├── MaterialsComponents.tsx/
│   │   ├── TruckFleetComponents/
│   │   └── ui/               # Shadcn UI components
│   ├── data/                 # Static data and content
│   ├── types/                # TypeScript type definitions
│   ├── lib/                  # Utility functions
│   └── redux/                # State management (Redux Toolkit)
└── public/                   # Static assets (images, logos, banners)
```

## 🛠️ Tech Stack

- **Framework**: [Next.js 15.5.6](https://nextjs.org/) (App Router)
- **UI Library**: [React 19.1.0](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/) with [Radix UI](https://www.radix-ui.com/)
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/)
- **Icons**: [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Utilities**: [clsx](https://github.com/lukeed/clsx), [tailwind-merge](https://github.com/dcastil/tailwind-merge)

## 🚦 Getting Started

### Prerequisites

- Node.js 20+ and npm/yarn/pnpm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/rahul3507/La-Plant-Hire.git
cd la-plant-hire
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Key Features & Components

### Homepage

- Hero section with call-to-action
- Services overview
- Featured truck fleet
- Company statistics
- Contact form

### Equipment Hire

- Equipment catalog with filtering
- Detailed equipment cards
- Hire terms and conditions
- Inquiry form

### Materials Supply

- Material categories (sand, gravel, concrete)
- Soil products section
- Material specifications
- About section with company information

### Truck Fleet

- Fleet showcase
- Service descriptions
- Call-to-action sections

### Soil Register

- Clean fill registration form
- Volume calculator for tipper loads
- Interactive calculator modal

## 🎨 Styling & Theme

The project uses a custom color palette with Tailwind CSS:

- **Primary**: Dark theme color
- **Custom Orange**: `#FF8E04` (brand accent)
- **Background**: Light background colors
- Responsive breakpoints: `sm`, `md`, `lg`, `xl`, `2xl`

## 🔧 Configuration

### Git Configuration

The project uses case-sensitive file paths for cross-platform compatibility:

```bash
git config core.ignorecase false
```

## 📱 Responsive Design

All components are fully responsive with mobile-first design:

- Mobile: Base styles
- Tablet: `md:` breakpoint (768px+)
- Desktop: `lg:` breakpoint (1024px+)
- Large Desktop: `xl:` and `2xl:` breakpoints

## 🚀 Deployment

The project is optimized for deployment on [Vercel](https://vercel.com):

```bash
npm run build
```

Ensure all environment variables are configured in your deployment platform.

## 📄 License

This project is private and proprietary.

## 👥 Contributing

This is a private project. For contributions, please contact the repository owner.

## 📞 Contact

For inquiries about LA Plant Hire services, visit the website or use the contact forms provided.
