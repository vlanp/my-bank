import AccountInterface from "../../interfaces/Account";
import Account from "./accounts/Account";
import Button from "./accounts/Button";

const Accounts = ({ accounts }: { accounts: Array<AccountInterface> }) => {
  return (
    <section className="accounts container">
      {accounts.map((account, index) => {
        return (
          <div key={index} className="account-and-button">
            <Account account={account} />
            <Button children={account.name} />
          </div>
        );
      })}
    </section>
  );
};

export default Accounts;
