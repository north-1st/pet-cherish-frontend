import StarFillIcon from '@/icons/star-fill.svg';
import StarOutlineIcon from '@/icons/star-outline.svg';

const NewRating = ({ rating }: { rating: number }) => {
  const ratingArray = new Array(Math.floor(rating)).fill(0);
  const emptyRating = new Array(5 - ratingArray.length).fill(0);

  return (
    <>
      {ratingArray.map((_, index) => {
        return <StarFillIcon key={index} width={20} height={20} />;
      })}

      {emptyRating.map((_, index) => {
        return <StarOutlineIcon key={index} width={20} height={20} />;
      })}
    </>
  );
};

export default NewRating;
