import { useState } from "react";
import { Separator } from "@/components/ui/separator.jsx";
import { useNavigate } from "react-router";
import {
  AuthEmailIcon,
  AuthFacebookIcon,
  AuthGoogleIcon,
  AuthMicrosoftIcon,
} from "@/components/icons/Icons.jsx";

export default function Socials() {
  const [authMethod, setAuthMethod] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col space-y-5 mb-6">
      <button
        onClick={() => setAuthMethod("google")}
        className="flex justify-center items-center py-2 space-x-2 w-full rounded-full cursor-pointer border-2 border-gray-300"
      >
        <AuthGoogleIcon className="w-6 h-6" />
        <span className="font-medium text-gray-800">Continue with Google</span>
      </button>
      <button
        onClick={() => setAuthMethod("facebook")}
        className="flex justify-center items-center py-2 space-x-2 w-full rounded-full cursor-pointer border-2 border-gray-300"
      >
        <AuthFacebookIcon className="w-6 h-6" />
        <span className="font-medium text-gray-800">
          Continue with Facebook
        </span>
      </button>
      <button
        onClick={() => setAuthMethod(authMethod)}
        className="flex justify-center items-center py-2 space-x-2 w-full rounded-full cursor-pointer border-2 border-gray-300"
      >
        <AuthMicrosoftIcon className="w-6 h-6" />
        <span className="font-medium text-gray-800">
          Continue with Microsoft
        </span>
      </button>
      <div className="flex items-center space-x-4">
        <Separator className="flex-1" />
        <span className="text-md font-semibold text-gray-800">or</span>
        <Separator className="flex-1" />
      </div>

      <button
        onClick={() => navigate("/auth/signin")}
        className="flex justify-center items-center py-2 space-x-2 w-full rounded-full cursor-pointer border-2 border-gray-300"
      >
        <AuthEmailIcon className="w-6 h-6 text-neutral-800" />
        <span className="font-medium text-gray-800">Continue with email</span>
      </button>
    </div>
  );
}
