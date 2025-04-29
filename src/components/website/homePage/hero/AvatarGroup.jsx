import avatar_1 from "@/assets/images/homePage/hero/avatar_1.webp";
import avatar_2 from "@/assets/images/homePage/hero/avatar_2.webp";
import avatar_3 from "@/assets/images/homePage/hero/avatar_3.webp";
import avatar_4 from "@/assets/images/homePage/hero/avatar_4.webp";

export default function AvatarGroup() {
  return (
    <div className="flex justify-center md:justify-start items-center space-x-4">
      <div className="flex items-center -space-x-3">
        <img
          src={avatar_1}
          alt="Client avatar 1"
          className="w-10 h-10 rounded-full shadow-sm border-2 border-white"
        />
        <img
          src={avatar_2}
          alt="Client avatar 2"
          className="w-10 h-10 rounded-full shadow-sm border-2 border-white"
        />
        <img
          src={avatar_3}
          alt="Client avatar 3"
          className="w-10 h-10 rounded-full shadow-sm border-2 border-white"
        />
        <img
          src={avatar_4}
          alt="Client avatar 4"
          className="w-10 h-10 rounded-full shadow-sm border-2 border-white"
        />
        <div className="flex items-center justify-center w-10 h-10 rounded-full shadow-sm border-2 border-white bg-stone-800 text-xs text-white">
          +99
        </div>
      </div>
      <span className="text-sm text-stone-500">+1.200 satisfied clients</span>
    </div>
  );
}
