export const getUrl = (src, transformation) =>
  `https://res.cloudinary.com/karolis/image/upload/${
    transformation && `${transformation}/`
  }v1/karolis.sh/${src}`;
