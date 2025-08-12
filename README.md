# Peace Hub Frontend Application

A modern, single-page landing application for Peace Hub, a non-profit organization that cultivates grassroots peace through structured collaboration and community engagement.

## 🎨 Design Philosophy

The application embodies the metaphor of a "Peace Garden" - where intentional design and care create harmony from diversity. Every interaction reinforces the message that peace is cultivated through intentional collaboration.

## 🚀 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom Design System
- **Animations**: Framer Motion
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## 🎯 Features

### Core Pages
- **Home Page**: Hero section, vision, approach, programs, testimonials
- **About Us**: Founder's story, team grid, organization timeline
- **Contact**: Form with validation, map integration, FAQ
- **Legal Pages**: Impressum and Datenschutz (GDPR compliant)

### Design System
- **Colors**: Blue (#4A7FFF), Yellow (#FFD748), Orange (#FF5733), Beige (#FFF8E7)
- **Typography**: Inter font family with comprehensive scale
- **Components**: Reusable UI components with consistent styling
- **Responsive**: Mobile-first design with defined breakpoints
- **Accessibility**: WCAG 2.1 AA compliance

### Interactive Features
- Smooth scroll navigation
- Parallax effects
- Hover animations
- Form validation
- Modal components
- Newsletter subscription

## 🛠️ Development Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd peace-hub
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🎨 Design System

### Color Palette
```css
--blue: #4A7FFF;      /* Primary brand color */
--yellow: #FFD748;    /* Accent and emphasis */
--orange: #FF5733;    /* Secondary brand color */
--beige: #FFF8E7;     /* Background and neutral */
```

### Typography Scale
- **H1**: 120px (Hero headlines)
- **H2**: 80px (Section headlines)
- **H3**: 48px (Subsection headlines)
- **H4**: 32px (Card titles)
- **Body**: 16px (Main text)
- **Small**: 14px (Secondary text)

### Component Classes
- `.btn-primary` - Primary action buttons
- `.btn-secondary` - Secondary action buttons
- `.card` - Content cards with hover effects
- `.nav-link` - Navigation links
- `.hero-headline` - Large hero text
- `.form-container` - Form styling

## 📁 Project Structure

```
peace-hub/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── globals.css      # Global styles
│   │   └── page.tsx         # Home page
│   ├── components/          # Reusable components
│   │   └── Layout.tsx       # Main layout component
│   └── styles/              # Design system
│       └── design-system.css # CSS custom properties
├── public/                  # Static assets
├── .taskmaster/             # Task management
└── package.json
```

## 🎯 Development Workflow

### Using 21st.edv MCP
All design implementations must be created using the 21st.edv MCP to ensure:
- Consistent component generation
- Proper design system adherence
- Automated styling validation
- Standardized development workflow

### Task Management
The project uses Task Master for organized development:
- 25 structured tasks covering all development phases
- Dependencies and priorities clearly defined
- Progress tracking and milestone management

## 🚀 Deployment

### Production Build
```bash
npm run build
npm run start
```

### Environment Variables
Create a `.env.local` file for environment-specific configuration:
```env
NEXT_PUBLIC_SITE_URL=your-site-url
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your-maps-api-key
```

## 📊 Performance Goals

- **Page Load Time**: < 3 seconds
- **Mobile Performance Score**: > 90
- **Accessibility Score**: 100%
- **SEO Score**: > 95

## 🔧 Configuration Files

### Tailwind Config
Customized to work with the design system colors and spacing.

### TypeScript Config
Strict type checking enabled for better code quality.

### ESLint Config
Next.js recommended rules with custom configurations.

## 🤝 Contributing

1. Follow the design system guidelines
2. Use the 21st.edv MCP for component generation
3. Ensure accessibility compliance
4. Test across all device sizes
5. Follow TypeScript best practices

## 📝 License

This project is developed for Peace Hub organization.

---

**Built with ❤️ for cultivating peace through intentional collaboration**
