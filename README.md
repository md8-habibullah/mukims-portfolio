# Modern Developer Portfolio

A high-performance, accessible, and visually stunning developer portfolio built with the latest web technologies. This project leverages **Next.js**, **React**, and **Tailwind CSS** to deliver a cutting-edge user experience.

## Features

* **Cutting-Edge Core:** Built on Next.js and React for maximum performance and server-side rendering capabilities.
* **Modern Styling:** Utilizes Tailwind CSS v4 for rapid, utility-first styling with a smaller bundle size.
* **Accessible UI:** Implements Headless UI primitives via **Radix UI** (Dialogs, Tooltips, Accordions, etc.) ensuring full keyboard navigation and screen reader support.
* **Smooth Animations:** Powered by **Framer Motion** and **AOS** (Animate On Scroll) for engaging interactions.
* **Type Safety:** Written entirely in **TypeScript** for robust and maintainable code.
* **Form Validation:** Integrated **React Hook Form** with **Zod** schema validation for contact forms.
* **Data Visualization:** Includes **Recharts** for displaying skills or data in graphical format.
* **Theme Ready:** Built-in support for Dark/Light mode via `next-themes`.

## Tech Stack

### Core
* [Next.js](https://nextjs.org/) - The React Framework for the Web.
* [React](https://react.dev/) - The library for web and native user interfaces.
* [TypeScript](https://www.typescriptlang.org/) - Static type checking.

### UI & Styling
* [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework.
* [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible components (basis for Shadcn UI).
* [Lucide React](https://lucide.dev/) - Beautiful & consistent icons.
* [Class Variance Authority](https://cva.style/) - for creating component variants.

### Animation
* [Framer Motion](https://www.framer.com/motion/) - Production-ready motion library.
* [AOS](https://michalsnik.github.io/aos/) - Animate On Scroll library.

### Forms & Validation
* [React Hook Form](https://react-hook-form.com/) - Performant, flexible and extensible forms.
* [Zod](https://zod.dev/) - TypeScript-first schema declaration and validation.

## Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

* **Node.js** (Latest LTS recommended)
* **npm** or **yarn** or **pnpm**

### Installation

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
    cd your-repo-name
    ```

2.  **Install dependencies**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Run the development server**
    ```bash
    pnpm run dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Scripts

* `pnpm run dev`: Starts the development server.
* `pnpm run build`: Builds the application for production usage.
* `pnpm run start`: Starts the production server (after building).
* `pnpm run lint`: Runs ESLint to check for code quality issues.

## 📂 Project Structure

```text
├── components/       # Reusable UI components (Radix/Shadcn)
├── app/              # Next.js App Router pages and layouts
├── lib/              # Utility functions (utils.ts) and schemas
├── public/           # Static assets (images, fonts)
├── styles/           # Global styles
└── ...