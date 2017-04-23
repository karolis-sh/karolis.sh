import ReactGA from 'react-ga';


const config = {
  ga: 'UA-97822720-1',
};


export const init = () => {
  ReactGA.initialize(config.ga, {
    debug: process.env.NODE_ENV === 'development',
  });
};


export default config;
