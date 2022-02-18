import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import algorithm from '../algorithm';
import backgroundImage from '../assets/background2.png';
import buttonImage from '../assets/button.png';
import Header from '../components/Header';

const Draw = () => {
  // La data récupérer va être stocker en utilisant useState
  const [gifts, setGifts] = useState({});

  // On va récupérer lorsque notre component va être monté en utilisant useEffect
  useEffect(() => {
    const getGifts = async () => {
      const data = await algorithm();
      setGifts(data);
    };
    getGifts();
  }, []);

  // Le temps qu'on récupére la data
  if (gifts.length === undefined) {
    return <Wrapper></Wrapper>;
  }

  return (
    <Wrapper>
      <div className='center'>
        <Header text='Tadaaaaaaaa !!!!!' />
        <table>
          <thead>
            <tr>
              <td>cette personne offre</td>
              <td>à cette personne</td>
            </tr>
          </thead>
          <tbody>
            {gifts.map((gift, index) => {
              const { offre, receveur } = gift;
              return (
                <tr key={index}>
                  <td>
                    {offre.firstName} {offre.lastName}
                  </td>
                  <td>
                    {receveur.firstName} {receveur.lastName}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Link className='btn' to='/'>
          <img src={buttonImage} alt='button-image' />
          <h1>evoyer le mail</h1>
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  background-image: url(${backgroundImage});

  table {
    width: 100%;
    max-width: 800px;
    border-collapse: collapse;
    text-align: center;
  }

  thead {
    background: #ff5c5c;
    color: #fff;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 700;
  }

  td {
    padding: 1rem 0;
    font-size: 14px;
  }

  tbody {
    position: relative;

    tr {
      background: #fff;
      color: #ff8a8a;

      &:nth-child(even) {
        background: #ff8a8a;
        color: #fff;
      }
    }
  }

  .btn {
    position: relative;
    border-radius: 50%;
    background: 0;
    border: 0;
    cursor: pointer;
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

  @media (min-width: 780px) {
    td {
      font-size: 20px;
    }
  }
`;
export default Draw;
