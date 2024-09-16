import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LoginForm } from "./form";
import { GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { LoginBanner } from "./banner";

export default function page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl w-full flex">
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold text-primary mb-6">Welcome back</h2>
          <LoginForm />
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>
            <div className="mt-6 flex gap-4">
              <Button variant="outline" className="w-full">
                <GitHubLogoIcon className="mr-2 h-4 w-4" />
                Github
              </Button>
              <Button variant="outline" className="w-full">
                <TwitterLogoIcon className="mr-2 h-4 w-4" />
                Twitter
              </Button>
            </div>
          </div>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            {"Don't"} have an account?{" "}
            <Link href="/signup" className="text-primary hover:underline">
              Sign up
            </Link>
          </p>
        </div>
        <LoginBanner />
      </div>
    </div>
  );
}
