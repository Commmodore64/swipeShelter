import Link from "next/link";
import type { FC } from "react";
import { GoPerson } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";

const TabBar: FC = () => {
  return (
    <div className="relative">
      {/* TabBar */}
      <div className="fixed bottom-0 left-0 right-0 flex h-16 items-center justify-around bg-[#18181B]">
        {/* Efecto de fondo borroso */}
        <div className="absolute left-1/2 top-32 h-32 w-32 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-[#DDDEDF] opacity-25 blur-3xl sm:h-[10rem] sm:w-[20rem] sm:blur-[64px] lg:h-[20rem] lg:w-[45rem] lg:blur-[40px]"></div>
        {/* Línea blanca con opacidad */}
        <div className="absolute left-0 right-0 top-0 mx-6 h-px">
          <div className="via-opacity-35 h-full w-full bg-gradient-to-r from-gray-500 to-transparent"></div>
        </div>

        <Link href="/dashboard">
          <div className="icon flex h-8 w-8 flex-row">
            <IoIosSearch className="text-3xl text-gray-200" />
          </div>
        </Link>
        <Link href="/location">
          <div className="icon flex h-8 w-8 flex-row">
            <IoLocationOutline className="text-3xl text-gray-200" />
          </div>
        </Link>
        <Link href="/account">
          <div className="icon flex h-8 w-8 flex-row">
            <GoPerson className="text-3xl text-gray-200" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default TabBar;
