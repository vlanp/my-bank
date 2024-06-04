import Logo from "./header/Logo";
import User from "./header/User";

const Header = ({ userName }: { userName: string }) => {
  return (
    <header>
      <div className="container">
        <Logo />
        <User userName={userName} />
      </div>
    </header>
  );
};

export default Header;
