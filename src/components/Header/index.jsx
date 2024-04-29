import logoImage from "../../assets/quiz-logo.png";

const Header = () => {
  return (
    <header>
      <img src={logoImage} alt="Quiz logo" />
      <h1>Quiz App</h1>
    </header>
  );
};

export default Header;
