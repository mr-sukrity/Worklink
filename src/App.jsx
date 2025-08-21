import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layouts/app.layout";
import LandingPage from "./pages/LandingPage";
import OnboardingPage from "./pages/OnboardingPage";
import Job from "./pages/Job";
import JobListing from "./pages/JobListing";
import MyJob from "./pages/MyJob";
import PostJob from "./pages/PostJob";
import SavedJob from "./pages/SavedJob";
import { ThemeProvider } from "./components/theme-provider";
import "./App.css";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
        {
          path: "/onboarding",
          element: (
            <ProtectedRoute>
              <OnboardingPage />
            </ProtectedRoute>
          ),
        },
        {
          path: "/jobs",
          element: (
            <ProtectedRoute>
              <JobListing />
            </ProtectedRoute>
          ),
        },
        {
          path: "/job/:id",
          element: (
            <ProtectedRoute>
              {" "}
              <Job />
            </ProtectedRoute>
          ),
        },
        {
          path: "/post/jobs",
          element: (
            <ProtectedRoute>
              <PostJob />
            </ProtectedRoute>
          ),
        },
        {
          path: "/saved",
          element: (
            <ProtectedRoute>
              {" "}
              <SavedJob />
            </ProtectedRoute>
          ),
        },
        {
          path: "/my-jobs",
          element: (
            <ProtectedRoute>
              <MyJob />
            </ProtectedRoute>
          ),
        },
      ],
    },
  ]);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
