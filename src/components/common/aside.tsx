import Link from "next/link";
import { PiBowlSteamBold } from "react-icons/pi";

const Aside = () => {
  return (
    <aside className="min-h-screen p-4 border-r-2 border-r-gray-100">
      <Link href="/" className="flex place-items-center gap-2">
        <PiBowlSteamBold size={34} />
        <h1 className="text-3xl">Meals4u</h1>
      </Link>
      <nav className="mt-4 flex flex-col gap-2 text-lg">
        <Link
          href="/"
          className="hover:bg-gray-200 px-3 p-1 rounded-md transition-colors duration-150"
        >
          All Meals
        </Link>
        <Link
          href="/featured"
          className="hover:bg-gray-200 px-3 p-1 rounded-md transition-colors duration-150"
        >
          Featured Meals
        </Link>
      </nav>
    </aside>
  );
};

export default Aside;
