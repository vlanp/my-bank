import AccountInterface from "../../../interfaces/Account";

const Account = ({ account }: { account: AccountInterface }) => {
  const { name, balance, color, operations } = account;
  const balanceString: string = balance.toFixed(2).replace(".", ",");
  const className =
    color === "#1976D2"
      ? "bg-blue"
      : color === "#C2185B"
      ? "bg-red"
      : undefined;
  return (
    <section className="account">
      <div className={className}>
        <p>{name}</p>
        <p>{balanceString} €</p>
      </div>
      {operations.map((operation, index) => {
        const { date, description, amount } = operation;
        const amountString: string = amount.toFixed(2).replace(".", ",");
        return (
          <div key={index}>
            <div>
              <p>{date}</p>
              <p>{description}</p>
            </div>
            <p>{amountString}</p>
          </div>
        );
      })}
    </section>
  );
};

export default Account;
