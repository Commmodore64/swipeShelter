// Types
import type { GetServerSideProps, NextPage } from "next";

// Utils
import { getServerAuthSession } from "~/server/auth";

// Components
//import Account from "~/components/dashboard/Account";
import Home from "~/components/dashboard/home";
import TabBar from "~/components/dashboard/tabbar";
// import Sidebar from "~/components/dashboard/Sidebar";

const Dashboard: NextPage = () => {
  //   const [selectedOption, setSelectedOption] = useState("Home");

  //   const handleSidebarOptionClick = (option: string) => {
  //     setSelectedOption(option);
  //   };

  return (
    <div>
      <div className=" h-full w-full">
        <Home />
        {/* {selectedOption === "Home" && <Home />}
        {selectedOption === "Account" && <Account />}
        {selectedOption === "Family" && <Family />}
        {selectedOption === "Card" && <Card />} */}
      </div>
      <TabBar />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getServerAuthSession(ctx);
  if (!session) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  }
  return {
    props: {
      session: {
        user: {
          name: session.user.name ?? "",
          email: session.user.email ?? "",
          image: session.user.image ?? "",
        },
      },
    },
  };
};

export default Dashboard;
