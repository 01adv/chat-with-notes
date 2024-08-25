import { SignUp } from "@clerk/nextjs";
import { Metadata } from "next";

export const metadata: Metadata= {
  title: "Sign-up Notes"
}

const SignUpPage = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <SignUp appearance={{variables: {colorPrimary:"#0F177A"}}}/>
    </div>
  );
};

export default SignUpPage;
