import s from "./ImageCard.module.css";

const ImageCard = ({ setSelectedImage, image }) => {
  const handleClick = () => {
    setSelectedImage(image);
  };
  return (
    <li className={s.card} onClick={handleClick}>
      <img src={image.urls.small} alt={image.alt_description} />
    </li>
  );
};

export default ImageCard;
