import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";

export default function Home() {
  const loggedInUser = { firstName: "Ajmal", lastName: "Ali" };

  return (
    <section className="home">
      <div className="home-content">
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
      </div>
    </section>
  );
}
