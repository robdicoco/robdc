# Roberto Pavusa Junior - Professional Profile App

A React Native mobile application showcasing Roberto Pavusa Junior's professional profile with linktree, skills, experience, and education sections.

## About Roberto

With over 15 years of experience in technology-driven environments, Roberto brings a unique blend of technical expertise and client-centric strategic thinking to elevate customer success. His career spans roles in systems development, project management, and consulting, with a focus on aligning technical solutions with business objectives.

**Key Expertise:**
- Payment Systems & PCI Compliance
- Blockchain & Smart Contracts
- Industrial Automation (PLC/SCADA)
- Full-Stack Development
- C-level Communication
- Strategic Project Management

## Features

- **Profile Header**: Displays profile picture, name, and title at the top of each screen
- **Linktree**: Professional social and contact links with clickable buttons
- **Skills Section**: Categorized skills with star ratings (1-5 stars)
- **Experience Section**: Professional experience with detailed descriptions
- **Education Section**: Academic background and certifications
- **Modern UI**: Clean, professional design with consistent styling
- **Responsive Design**: Optimized for mobile devices

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── MyPic.tsx       # Profile picture and header component
│   ├── StarRating.tsx  # Star rating component for skills
│   └── index.ts        # Component exports
├── data/               # Data files for better maintainability
│   ├── links.ts        # Linktree data
│   ├── skills.ts       # Skills data with ratings
│   ├── experience.ts   # Experience data
│   └── education.ts    # Education and certifications data
├── routes/             # Navigation configuration
│   └── bottom-tsb.routes.tsx
├── screens/            # Main app screens
│   ├── HomeScreen.tsx  # Linktree and about section
│   ├── SkillsScreen.tsx # Skills with star ratings
│   ├── ExperienceScreen.tsx # Professional experience
│   └── EducationScreen.tsx # Education and certifications
└── styles/             # Global styling
    └── globalStyles.ts # Shared styles and theme
```

## Screens

### Home Screen
- Profile picture and header
- Linktree with social media and professional links
- About me section with key expertise
- Professional summary

### Skills Screen
- Profile picture and header
- Skills organized by categories:
  - Programming Languages (Rust, Python, Node.js, C++, Java, PL/SQL)
  - Blockchain & Web3 (Blockchain, Smart Contracts, Cryptography, Web3 Development)
  - Cloud & Infrastructure (AWS, Cloud Platforms)
  - Industrial Automation (PLC Programming, SCADA Systems, Allen-Bradley, Siemens)
  - Full-Stack Development (System Architecture, Database Design, API Development)
  - Project Management (Strategic Communications, C-level Communication)
  - Languages (Portuguese, English, Spanish, French, Japanese)
  - Other Skills (PCI Compliance, ISO 8583, Payment Systems, Biomedical Engineering)
- Star ratings from 1 to 5 for each skill

### Experience Screen
- Profile picture and header
- Professional experience with company details:
  - TSYS - Business Technical Services Specialist
  - Roberto Pavusa Junior - Researcher and Developer Specialist
  - TMEIC - System Analyst
  - Universidade de Mogi das Cruzes - University Lecturer & Biomedical Researcher
  - Portugal Telecom - Systems Analyst
  - Industrial Automation roles at various companies

### Education Screen
- Profile picture and header
- Education section with degrees and institutions
- Certifications section with professional certifications

## Technologies Used

- React Native
- Expo
- TypeScript
- React Navigation
- Expo Vector Icons

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Expo CLI

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd robdc
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Run on your preferred platform:
```bash
# For iOS
npm run ios

# For Android
npm run android

# For web
npm run web
```

## Customization

### Profile Information
Update the profile information in the `MyPic` component:
- Name and title in `src/components/MyPic.tsx`
- Profile picture in `assets/me.png`

### Links
Modify the linktree in `src/data/links.ts`:
- Add/remove social media links
- Update URLs and icons

### Skills
Update skills and ratings in `src/data/skills.ts`:
- Add new skills with ratings (1-5)
- Organize by categories
- Modify existing ratings

### Experience
Update professional experience in `src/data/experience.ts`:
- Add new job positions
- Update company information
- Modify descriptions and technologies

### Education
Update education and certifications in `src/data/education.ts`:
- Add new degrees or certifications
- Update institutions and dates
- Modify descriptions

### Styling
Customize the app appearance in `src/styles/globalStyles.ts`:
- Colors and themes
- Typography
- Layout and spacing

## Data Structure

### Skills Data
```typescript
interface Skill {
  name: string;
  rating: number; // 1-5
  category: string;
}
```

### Experience Data
```typescript
interface Experience {
  title: string;
  company: string;
  date: string;
  description: string;
  technologies: string[];
}
```

### Education Data
```typescript
interface Education {
  degree: string;
  institution: string;
  date: string;
  description?: string;
  type: 'degree' | 'certification';
}
```

### Links Data
```typescript
interface LinkItem {
  title: string;
  url: string;
  icon?: string;
}
```

## Contact

For questions or support, please contact:
- Email: pavusa@gmail.com
- LinkedIn: https://www.linkedin.com/in/roberto-pavusa-junior
- Portfolio: https://roberto-pavusa.dev

## License

This project is licensed under the MIT License. 