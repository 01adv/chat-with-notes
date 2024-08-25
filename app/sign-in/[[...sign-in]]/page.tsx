import { SignIn } from "@clerk/nextjs";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Sign-in Notes"
}


const SignInPage = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <SignIn appearance={{variables: {colorPrimary:"#0F177A"}}}/>
    </div>
  );
};

export default SignInPage;
