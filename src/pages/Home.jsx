import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import backgroundImage from '../assets/background.png';
import santaImage from '../assets/santa.png';
import buttonImage from '../assets/button.png';

const Home = () => {
  return (
    <Wrapper>
      <div className='center'>
        <Header
          text={'Clique sur <<lancer le tirage>> pour savoir qui offre à qui!'}
        />
        <div className='container'>
          <img src={santaImage} alt='santa-img' />
          <Link to='/draw' className='btn'>
            <img src={buttonImage} alt='button-image' />
            <h1>lancer le tirage</h1>
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  background-image: url(${backgroundImage});

  .center {
    gap: 4rem;
  }

  .container {
    position: relative;
  }

  .btn {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background: 0;
    border: 0;
  }

  h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 17px;
    text-transform: uppercase;
    text-align: center;
    color: #fff;
  }
`;
export default Home;
