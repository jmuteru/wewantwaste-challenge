# We Want Waste - Skip Hire Platform

A modern, responsive web application for skip hire services built with Next.js 14, React, and Tailwind CSS.

## Overview

This platform provides an intuitive interface for users to:
- Browse and select skip sizes
- View detailed skip information and pricing
- Get instant quotes
- Book skip hire services

## Key Features

- 🎨 Modern, clean UI with responsive design
- 📱 Mobile-first approach with adaptive layouts
- 🌓 Dark mode support with elegant transitions
- 🎯 Step-by-step booking process
- 💨 Smooth animations and transitions
- 🛠️ Component-based architecture

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with shadcn/ui
- **Icons**: Lucide Icons
- **Animations**: CSS transitions and transforms
- **State Management**: React hooks and context

## Project Structure

```
src/
├── app/                # Next.js app router pages
├── components/         # Reusable UI components
│   ├── ui/            # Base UI components
│   └── skip/          # Skip-related components
├── hooks/             # Custom React hooks
├── lib/               # Utility functions
└── types/             # TypeScript type definitions
```

## Design System

### Components
- **SkipCard**: Displays individual skip options with hover effects
- **ProgressTracker**: Shows current step in booking process
- **NavigationButtons**: Responsive navigation controls
- **SelectedSkipSummary**: Detailed view of selected skip

### Responsive Design
- Mobile-first approach
- Breakpoint system:
  - Mobile: < 640px
  - Tablet: 640px - 1024px
  - Desktop: > 1024px

### Dark Mode
- System preference detection
- Smooth transitions between modes
- Carefully selected color palette for both modes

## Getting Started

1. Clone the repository:
```bash
git clone [repository-url]
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view the application

## Development Approach

### 1. Mobile-First Design
- Started with mobile layout
- Enhanced for larger screens
- Slide-out menu for mobile navigation
- Fixed navigation buttons on mobile

### 2. Component Architecture
- Modular, reusable components
- Clear separation of concerns
- Consistent props interface
- TypeScript for type safety

### 3. Performance Optimization
- Image optimization with Next.js
- Lazy loading where appropriate
- Minimized re-renders
- Efficient state management

### 4. Accessibility
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Focus management

### 5. User Experience
- Clear visual hierarchy
- Intuitive navigation
- Immediate feedback
- Smooth transitions

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Design inspiration from modern web applications
- Built with Next.js and Tailwind CSS
- Icons from Lucide Icons
- UI components inspired by shadcn/ui

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
