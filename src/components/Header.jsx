import titleImage from '../assets/title.png';

const Header = ({ text }) => {
  return (
    <header>
      <img src={titleImage} alt='title-img' />
      <p>{text}</p>
    </header>
  );
};

export default Header;
