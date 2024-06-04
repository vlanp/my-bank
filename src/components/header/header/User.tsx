import profilUtilisateur from "../../../assets/img/profil-utilisateur.jpg";

const User = ({ userName }: { userName: string }) => {
  return (
    <div className="user">
      <p>{userName}</p>
      <img src={profilUtilisateur} alt="profile" />
    </div>
  );
};

export default User;
