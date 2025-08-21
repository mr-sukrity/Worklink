import { Link, useSearchParams } from "react-router-dom"
import { Button } from "./ui/button";
import { SignedIn, SignedOut, SignIn, SignInButton, UserButton, useUser } from '@clerk/clerk-react';
import { BriefcaseBusiness, Heart, PenBox } from "lucide-react";
import { useEffect, useState } from "react";


const Header = () => {

  const [showSignIn, setShowSignIn] = useState(false);

  const [search, setSearch] = useSearchParams();

  useEffect(() => {
    if(search.get('sign-in')){
      setShowSignIn(true)
    }
  }, [search]);

  const overlayClick = (e) => {
    if(e.target === e.currentTarget) {
      setShowSignIn(false);
      setSearch({});
    }
  };

  const { user } = useUser();

  return (
    <>
        <nav className="py-2 flex justify-between items-center">
            <Link>
            <img src="/logo.png" className="h-20"/>
            </Link>

            <div className="flex gap-8 items-center">

            <SignedOut>
              <Button variant="outline" onClick={() => setShowSignIn(true) }>Login</Button>
            </SignedOut>
            <SignedIn>
              
            { user?.unsafeMetadata?.role === "recruiter" && (
              <Link to="/post/jobs">
              <Button variant="destructive" className="rounded-full">
                <PenBox size={20} className="mr-2"/>
                Post a Job
              </Button>
              </Link>
            ) }
              <UserButton
              appearance={{
                elements: {
                  avatarBox: {
                    width: "35px",
                    height: "35px"
                  }
                },

              }}>
                <UserButton.MenuItems>
                  <UserButton.Link
                    label="My Jobs"
                    labelIcon={<BriefcaseBusiness size={15} />}
                    href="/my-jobs"
                  />
                  <UserButton.Link
                    label="Saved Jobs"
                    labelIcon={<Heart size={15} />}
                    href="/saved"
                  />
                </UserButton.MenuItems>
              </UserButton>
            </SignedIn>

            </div>
        </nav>

        {showSignIn && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.5)]" onClick={overlayClick}>
    <SignIn
      signUpForceRedirectUrl="/onboarding"
      fallbackRedirectUrl="/onboarding"
    />
  </div>
)}

    </>
  )
}
export default Header