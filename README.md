# Worklink - Full-Stack Job Portal Application

A modern, feature-rich job portal application built with React, connecting job seekers with recruiters through an intuitive and secure platform.

## 🚀 Features

### For Job Seekers
- **Job Search & Discovery**: Advanced search with multiple filters (location, salary, job type, company)
- **Application Management**: Track application status and history
- **Resume Upload**: Secure document storage and management
- **Profile Management**: Complete candidate profiles with skills and experience
- **Real-time Updates**: Get notified about application status changes

### For Recruiters
- **Job Posting**: Create and manage job listings with detailed requirements
- **Application Tracking**: Review and manage candidate applications
- **Company Profiles**: Showcase company information and culture
- **Candidate Management**: Filter and sort applications efficiently
- **Analytics Dashboard**: Track job posting performance

### General Features
- **Secure Authentication**: User registration and login with role-based access
- **Responsive Design**: Mobile-first approach with modern UI components
- **Real-time Data**: Live updates for job postings and applications
- **Search Functionality**: Intelligent search with auto-suggestions
- **Data Security**: Comprehensive security policies and data protection

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **Vite** - Fast build tool and development server
- **ShadCN UI** - Modern, accessible UI components
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **React Hook Form** - Form handling and validation
- **Lucide React** - Beautiful icons

### Backend & Database
- **Supabase** - Backend-as-a-Service with PostgreSQL database
- **Supabase Auth** - Authentication and user management
- **Supabase Storage** - File storage for resumes and documents
- **Row Level Security** - Database security policies

### Authentication
- **Clerk** - Complete authentication solution
- **Role-based Access Control** - Separate access for candidates and recruiters

### Development Tools
- **ESLint** - Code linting and quality
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v16 or higher)
- npm or yarn package manager
- Git

## 🚀 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/its-bismay/Worklink.git
   cd Worklink
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   
   Create a `.env.local` file in the root directory and add your environment variables:
   ```env
   # Supabase Configuration
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   
   # Clerk Configuration
   VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   ```

4. **Database Setup**
   
   Set up your Supabase database with the following tables:
   - `companies` - Company information
   - `jobs` - Job listings
   - `applications` - Job applications
   - `users` - User profiles
   
   Configure Row Level Security (RLS) policies for data protection.

5. **Start the development server**
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:5173`

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues automatically

## 🔐 Security Features

- **Authentication**: Secure user authentication with Clerk
- **Authorization**: Role-based access control (RBAC)
- **Data Protection**: Row Level Security policies in Supabase
- **Input Validation**: Client and server-side validation
- **File Upload Security**: Secure resume and document handling

## 🎨 UI/UX Features

- **Modern Design**: Clean, professional interface
- **Responsive Layout**: Works seamlessly on all devices
- **Accessibility**: WCAG compliant with keyboard navigation
- **Dark Mode**: Optional dark theme support
- **Loading States**: Smooth loading indicators and skeletons

## 📊 Database Schema

### Key Tables
- **users**: User profiles and authentication data
- **companies**: Company information and branding
- **jobs**: Job listings with requirements and descriptions
- **applications**: Application tracking and status management

## 🚀 Deployment

### Vercel Deployment
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on every push to main branch

### Manual Deployment
1. Build the project: `npm run build`
2. Upload the `dist` folder to your hosting service
3. Configure environment variables on your hosting platform

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - Frontend framework
- [Vite](https://vitejs.dev/) - Build tool
- [Supabase](https://supabase.com/) - Backend platform
- [Clerk](https://clerk.com/) - Authentication service
- [ShadCN UI](https://ui.shadcn.com/) - UI components
- [Tailwind CSS](https://tailwindcss.com/) - Styling framework

## 📞 Support

For questions or support, reach out via:
- Email: bismaybibhabasu33@gmail.com
- GitHub Issues: [Create an issue](https://github.com/its-bismay/Worklink/issues)
- Instagram: [Connect with me](https://www.instagram.com/bismay_11)

## 🔗 Links

- [GitHub Repository](https://github.com/its-bismay/Worklink)
- [Live Demo](https://worklink-ten.vercel.app/)

---

**Built with ❤️ by [Bismay](https://github.com/its-bismay)**

