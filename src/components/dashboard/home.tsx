import type { FC } from "react";
import { DotPattern } from "../DotPattern";
const Home: FC = () => {
  //const session = useSession();
  return (
    <div className=" flex h-screen bg-[#18181B]">
      <h1 className="swipe text-white">Home</h1>
      <DotPattern
        size={32}
        radius={1.5}
        offset-x={0}
        offset-y={0}
        className="absolute inset-0 h-full w-full fill-white/10 [mask-image:radial-gradient(white,transparent_85%)]"
      />

      <div className="font-display relative text-4xl font-bold">
        <div className="absolute inset-0 rounded-full bg-white/25 blur-2xl"></div>
      </div>
    </div>
  );
};

export default Home;
