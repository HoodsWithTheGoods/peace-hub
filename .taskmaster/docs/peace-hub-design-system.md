# Peace Hub Design System & Implementation Guide

## Overview
This document serves as the definitive styling reference for the Peace Hub frontend application. All styling decisions, component implementations, and design iterations must follow this guide to ensure consistency across the entire application.

## Integration with 21st.edv MCP
**CRITICAL**: All design implementations must be created using the 21st.edv MCP. This ensures:
- Consistent component generation
- Proper design system adherence
- Automated styling validation
- Standardized development workflow

## Brand Identity
- **Name**: PeaceHub
- **Tagline**: "Incubating Peace Across Sectors"
- **Mission**: Cultivating grassroots peace through structured collaboration and community engagement
- **Metaphor**: "Peace Garden" - where intentional design and care create harmony from diversity

## Color System

### Primary Colors
```css
/* Primary Brand Colors */
--blue: #4A7FFF;      /* Primary brand color */
--yellow: #FFD748;    /* Accent and emphasis */
--orange: #FF5733;    /* Secondary brand color */
--beige: #FFF8E7;     /* Background and neutral */
```

### Background Colors
```css
--background-primary: #FFF8E7;    /* Main page backgrounds */
--background-secondary: #4A7FFF;  /* Section backgrounds */
--background-tertiary: #FF5733;   /* Accent backgrounds */
--background-white: #FFFFFF;      /* Card backgrounds */
--background-overlay: rgba(255, 255, 255, 0.95); /* Modal overlays */
```

### Text Colors
```css
--text-primary: #1A1A1A;     /* Main text */
--text-secondary: #4A7FFF;    /* Links and emphasis */
--text-inverse: #FFFFFF;      /* Text on colored backgrounds */
--text-muted: #666666;        /* Secondary text */
--text-emphasis: #FFD748;     /* Highlighted text */
```

### Interactive Colors
```css
--button-primary: #4A7FFF;    /* Primary buttons */
--button-secondary: #FFFFFF;   /* Secondary buttons */
--button-hover: #3A6FEF;      /* Button hover states */
--link: #4A7FFF;              /* Links */
--link-hover: #3A6FEF;        /* Link hover states */
```

### Accent Colors
```css
--grid-lines: #4A7FFF;        /* Grid patterns */
--borders: #E5E5E5;           /* Borders */
--shadows: rgba(0, 0, 0, 0.1); /* Shadows */
```

## Typography

### Font Family
```css
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-display: 'Inter', sans-serif;
```

### Type Scale
```css
/* H1 - Hero headlines */
--h1-font-size: 120px;
--h1-line-height: 0.9;
--h1-font-weight: 900;
--h1-text-transform: uppercase;
--h1-letter-spacing: -2px;

/* H2 - Section headlines */
--h2-font-size: 80px;
--h2-line-height: 1;
--h2-font-weight: 900;
--h2-text-transform: uppercase;

/* H3 - Subsection headlines */
--h3-font-size: 48px;
--h3-line-height: 1.1;
--h3-font-weight: 700;

/* H4 - Card titles */
--h4-font-size: 32px;
--h4-line-height: 1.2;
--h4-font-weight: 700;

/* Body text */
--body-font-size: 16px;
--body-line-height: 1.6;
--body-font-weight: 400;

/* Small text */
--small-font-size: 14px;
--small-line-height: 1.5;
--small-font-weight: 400;
```

## Spacing System
```css
--spacing-unit: 8px;
--spacing-xs: 4px;
--spacing-sm: 8px;
--spacing-md: 16px;
--spacing-lg: 24px;
--spacing-xl: 32px;
--spacing-xxl: 48px;
--spacing-xxxl: 80px;
```

## Layout System

### Container
```css
--max-width: 1440px;
--container-padding: 40px;
--grid-columns: 12;
--grid-gap: 24px;
```

### Responsive Breakpoints
```css
--mobile: 375px;
--tablet: 768px;
--desktop: 1024px;
--wide: 1440px;
```

## Component Specifications

### Navigation
```css
/* Container */
.navigation {
  background: var(--background-primary);
  padding: 20px 40px;
  border-bottom: none;
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: background 0.3s ease;
}

/* Links */
.nav-link {
  color: var(--text-primary);
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: var(--text-secondary);
}

/* Logo */
.logo {
  color: var(--blue);
  font-size: 24px;
  font-weight: 900;
}

/* CTA Button */
.nav-cta {
  background: var(--button-primary);
  color: var(--text-inverse);
  border-radius: 50px;
  padding: 12px 32px;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  transition: all 0.3s ease;
}

.nav-cta:hover {
  background: var(--button-hover);
  transform: scale(1.05);
}
```

### Hero Section
```css
/* Container */
.hero {
  background: var(--background-primary);
  padding: 80px 40px;
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
}

/* Headline */
.hero-headline {
  font-size: var(--h1-font-size);
  font-weight: var(--h1-font-weight);
  line-height: var(--h1-line-height);
  color: var(--blue);
  text-transform: var(--h1-text-transform);
  letter-spacing: var(--h1-letter-spacing);
}

/* Subheadline */
.hero-subheadline {
  font-size: var(--h2-font-size);
  font-weight: var(--h2-font-weight);
  color: transparent;
  -webkit-text-stroke: 2px var(--blue);
  text-transform: uppercase;
}

/* Grid Overlay */
.hero-grid {
  stroke: var(--grid-lines);
  stroke-width: 2px;
  opacity: 0.3;
  position: absolute;
}
```

### Cards
```css
/* Container */
.card {
  background: var(--background-white);
  border-radius: 20px;
  padding: 0;
  overflow: hidden;
  box-shadow: 0 10px 30px var(--shadows);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

/* Image */
.card-image {
  width: 100%;
  height: auto;
  object-fit: cover;
}

/* Content */
.card-content {
  padding: 24px;
  background: var(--background-white);
}

/* Title */
.card-title {
  font-size: 24px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 12px;
  text-transform: uppercase;
}

/* Description */
.card-description {
  font-size: 14px;
  color: var(--text-muted);
  line-height: 1.6;
}
```

### Buttons
```css
/* Primary Button */
.btn-primary {
  background: var(--button-primary);
  color: var(--text-inverse);
  border-radius: 50px;
  padding: 16px 40px;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  border: none;
  box-shadow: 0 4px 12px rgba(74, 127, 255, 0.3);
  transition: all 0.3s ease;
  cursor: pointer;
}

.btn-primary:hover {
  background: var(--button-hover);
  box-shadow: 0 6px 16px rgba(74, 127, 255, 0.4);
  transform: translateY(-2px);
}

/* Secondary Button */
.btn-secondary {
  background: var(--button-secondary);
  color: var(--button-primary);
  border-radius: 50px;
  padding: 16px 40px;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  border: 2px solid var(--button-primary);
  transition: all 0.3s ease;
  cursor: pointer;
}

.btn-secondary:hover {
  background: var(--button-primary);
  color: var(--text-inverse);
}
```

### Forms
```css
/* Container */
.form-container {
  background: var(--button-primary);
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 20px 40px rgba(74, 127, 255, 0.2);
}

/* Title */
.form-title {
  color: var(--text-inverse);
  font-size: 32px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 32px;
}

/* Input */
.form-input {
  background: var(--background-white);
  border: none;
  border-radius: 12px;
  padding: 16px 20px;
  font-size: 16px;
  color: var(--text-primary);
  width: 100%;
  transition: outline 0.3s ease;
}

.form-input:focus {
  outline: 2px solid var(--yellow);
  outline-offset: 2px;
}

.form-input::placeholder {
  color: #999999;
}

/* Textarea */
.form-textarea {
  background: var(--background-white);
  border: none;
  border-radius: 12px;
  padding: 16px 20px;
  font-size: 16px;
  min-height: 120px;
  resize: vertical;
  width: 100%;
}

/* Label */
.form-label {
  color: var(--text-inverse);
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 8px;
}
```

### Footer
```css
/* Container */
.footer {
  background: var(--orange);
  padding: 40px;
  color: var(--text-inverse);
}

/* Links */
.footer-link {
  color: var(--text-inverse);
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  text-decoration: none;
  transition: text-decoration 0.3s ease;
}

.footer-link:hover {
  text-decoration: underline;
}

/* Copyright */
.footer-copyright {
  font-size: 12px;
  color: var(--text-inverse);
  opacity: 0.8;
}
```

### Social Icons
```css
/* Container */
.social-icon {
  background: var(--background-white);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.social-icon:hover {
  background: var(--button-primary);
}

.social-icon:hover i {
  color: var(--text-inverse);
}

/* Icon */
.social-icon i {
  color: var(--button-primary);
  font-size: 20px;
  transition: color 0.3s ease;
}
```

### Badges
```css
/* Container */
.badge {
  background: var(--yellow);
  color: var(--text-primary);
  border-radius: 50%;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  padding: 10px;
}

/* Variants */
.badge-blue {
  background: var(--blue);
  color: var(--text-inverse);
}

.badge-orange {
  background: var(--orange);
  color: var(--text-inverse);
}
```

## Effects & Animations

### Shadows
```css
--shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 12px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 30px rgba(0, 0, 0, 0.15);
--shadow-xl: 0 20px 40px rgba(0, 0, 0, 0.2);
--shadow-colored: 0 10px 30px rgba(74, 127, 255, 0.3);
```

### Border Radius
```css
--radius-sm: 8px;
--radius-md: 12px;
--radius-lg: 20px;
--radius-full: 50px;
--radius-circle: 50%;
```

### Transitions
```css
--transition-fast: 150ms ease;
--transition-normal: 250ms ease;
--transition-slow: 350ms ease;
```

## Critical Design Rules

### DO NOT
- Apply gradients to any elements - use solid colors only
- Use card background colors on button elements
- Apply button colors to text elements directly
- Mix primary blue (#4A7FFF) with orange (#FF5733) in same component
- Use shadows on text elements
- Apply border radius to images unless specified
- Use lowercase text in navigation or CTAs
- Apply text stroke effects to body text

### ALWAYS
- Use uppercase for navigation, buttons, and headings
- Apply border-radius: 50px to primary buttons
- Keep card backgrounds white (#FFFFFF)
- Use blue (#4A7FFF) for primary actions
- Apply shadow to floating elements only
- Use beige (#FFF8E7) for main page backgrounds
- Maintain high contrast between text and backgrounds

## Implementation with 21st.edv MCP

### Component Generation
When creating components using the 21st.edv MCP:
1. Reference this design system for all styling decisions
2. Use the exact color values, typography, and spacing defined above
3. Follow the component specifications for structure and behavior
4. Implement responsive design using the defined breakpoints
5. Ensure accessibility compliance with proper contrast ratios

### Styling Validation
The 21st.edv MCP will validate:
- Color usage against the defined palette
- Typography scale adherence
- Spacing consistency
- Component structure compliance
- Accessibility standards

### Development Workflow
1. **Design Review**: Before implementation, review component design against this system
2. **Component Creation**: Use 21st.edv MCP to generate components following these specifications
3. **Styling Application**: Apply the exact CSS classes and variables defined above
4. **Validation**: Use 21st.edv MCP to validate styling compliance
5. **Testing**: Ensure responsive behavior and accessibility across devices

## Accessibility Standards

### Color Contrast
- Text on colored backgrounds must meet WCAG AA standards
- Primary text: minimum 4.5:1 contrast ratio
- Large text: minimum 3:1 contrast ratio
- Interactive elements: minimum 3:1 contrast ratio

### Focus Indicators
- All interactive elements must have visible focus indicators
- Use the yellow accent color (#FFD748) for focus outlines
- Ensure focus indicators are at least 2px thick

### Keyboard Navigation
- All interactive elements must be keyboard accessible
- Logical tab order must be maintained
- Skip links should be provided for main content areas

## Performance Guidelines

### Animation Performance
- Use CSS transforms and opacity for animations
- Target 60fps for all animations
- Use `will-change` property sparingly
- Implement lazy loading for images and heavy components

### Asset Optimization
- Optimize images for web delivery
- Use appropriate image formats (WebP, AVIF)
- Implement responsive images with srcset
- Minimize CSS and JavaScript bundle sizes

## Version Control

### Design System Updates
- All changes to this design system must be documented
- Version numbers should be incremented for significant changes
- Migration guides should be provided for breaking changes
- Component libraries should be updated simultaneously

### Implementation Tracking
- Track which components have been implemented
- Document any deviations from the design system
- Maintain a component inventory with implementation status
- Regular audits to ensure design system compliance

---

**This document is the single source of truth for all Peace Hub styling decisions. All developers must reference this document before implementing any visual components.** 