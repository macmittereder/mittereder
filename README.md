# Mackenzie Mittereder Portfolio Website

This is my personal portfolio website showcasing my work experience, education, and various projects I've developed.

## About

This portfolio website has been converted from a React application to Next.js for improved performance, SEO, and modern development practices.

## Features

- **Home Page**: Displays work experience and education with company logos and detailed information
- **Projects Page**: Grid layout showcasing all projects with clickable cards
- **Individual Project Pages**: Detailed pages for each project with screenshots and descriptions
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Google Analytics**: Integrated with React GA4 for tracking

## Technologies Used

- **Next.js 14**: React framework with App Router
- **React 18**: Latest version with modern features
- **Tailwind CSS**: Utility-first CSS framework
- **Moment.js**: Date/time manipulation
- **React GA4**: Google Analytics integration

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── layout.js          # Root layout component
│   ├── page.js            # Home page
│   ├── projects/          # Projects pages
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Nav/              # Navigation components
│   ├── Pages/            # Page components
│   ├── Projects/         # Project detail components
│   ├── Tile/             # Content tile components
│   └── Card/             # Project card component
├── public/               # Static assets
│   └── images/           # All images and logos
└── package.json          # Dependencies and scripts
```

## Getting Started

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Run development server**:

   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run export` - Export static site

## Projects Showcased

- **Mittereder.com** - This portfolio website
- **Gradez** - Android grade tracking app
- **Franklin Regional** - School district mobile app
- **Life Counter** - Magic: The Gathering life counter
- **Frame It** - iOS photo framing app
- **Cuz** - React Native chat app
- **Fast Movie Photos** - Movie photo app
- **Graph Game** - Educational graph game
- **Words and Music** - Music app
- **Vehicle App** - Vehicle management app
- **Rock Paper Scissors** - Game app
- **Pinball Price** - Pinball pricing app

## Deployment

This site can be deployed to various platforms:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **GitHub Pages**
- **AWS Amplify**

## Conversion Notes

This website was successfully converted from a React application using:

- React Router → Next.js App Router
- Create React App → Next.js
- Static image imports → Next.js Image component
- Manual routing → File-based routing

The conversion maintains all original functionality while providing:

- Better SEO with server-side rendering
- Improved performance with Next.js optimizations
- Modern development experience
- Better image optimization
- Automatic code splitting

## Contact

- **GitHub**: [macmittereder](https://github.com/macmittereder)
- **LinkedIn**: [Mackenzie Mittereder](https://www.linkedin.com/in/mackenzie-mittereder/)
