import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import RightSidebar from "./components/RightSidebar";

export default function Home() {
  const loggedInUser = {
    firstName: "Ajmal",
    lastName: "Ali",
    email: "ajmal@gmail.com",
  };

  return (
    <section className="home">
      <header className="home-content">
        <HeaderBox
          type="greeting"
          title="Welcome"
          user={loggedInUser.firstName || "Guest"}
          subtext="Access and manage your account and transactions efficiently."
        />

        <TotalBalanceBox
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={25000}
        />
      </header>

      {/* RECENT TRANSACTIONS */}

      <RightSidebar user={loggedInUser} transactions={[]} banks={[]} />
    </section>
  );
}
