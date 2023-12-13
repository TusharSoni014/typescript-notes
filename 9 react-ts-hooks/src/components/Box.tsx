import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

export default function Box() {
  const { toggleTheme, theme } = useContext(ThemeContext);
  return (
    <div
      className={`flex flex-col p-3 transition gap-2 ${
        theme === "light" ? "bg-green-50" : "bg-black text-white"
      }`}
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
      reprehenderit. Laudantium nobis iure sint ad ab deleniti atque cupiditate
      quae adipisci, sequi repellendus a facere explicabo facilis, dolor quia
      exercitationem.
      <button
        onClick={toggleTheme}
        className={`${
          theme === "light" ? "bg-black text-white" : "bg-white text-black"
        } p-3 rounded active:scale-[0.95] transition shadow-sm`}
      >
        Change Theme
      </button>
    </div>
  );
}
