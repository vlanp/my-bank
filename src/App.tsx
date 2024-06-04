import "./App.css";
import accountsDatas from "./assets/accounts-datas";
import Header from "./components/header/Header";
import Accounts from "./components/accounts/Accounts";

function App() {
  return (
    <>
      <Header userName="Etienne" />
      <main>
        <Accounts accounts={accountsDatas} />
      </main>
    </>
  );
}

export default App;
