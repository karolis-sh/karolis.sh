import styled from 'styled-components';


const Container = styled.div`
  margin: 1rem;
  display: flex;
  align-items: center;
`;


const Kode = styled.div`
  margin-top: 1rem;
  font-size: 20px;
  font-family: 'Varela Round', sans-serif;
  flex: 1;
  position: relative;
  letter-spacing: 5px;

  &:before {
    content: 'K';
    position: absolute;
    top: -.85em;
  }

  &:after {
    content: '';
    position: absolute;
    left: -.04em;
    bottom: .18em;
    height: .9em;
    border-radius: 3px;
    background: rgba(0, 0, 0, .2);
    width: .82em;
  }
`;


const Header = () =>
  <Container>
    <Kode>CODE</Kode>
    <div>CV</div>
  </Container>;

export default Header;
