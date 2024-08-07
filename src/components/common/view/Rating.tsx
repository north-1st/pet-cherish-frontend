import StarFillIcon from '../Icon/StarFillIcon';
import StarOutlineIcon from '../Icon/StarOutlineIcon';

const Rating = ({ rating }: { rating: number | null }) => {
  const ratingArray = new Array(Math.floor(rating ?? 0)).fill(0);
  const emptyRating = new Array(5 - ratingArray.length).fill(0);

  return (
    <div className='flex items-center gap-1'>
      {ratingArray.map((item, index) => {
        return <StarFillIcon key={index} color='#FFC702' width='16px' height='15px' />;
      })}

      {emptyRating.map((item, index) => {
        return <StarOutlineIcon key={index} width='16px' height='15px' color='#FFC702' />;
      })}
    </div>
  );
};

export default Rating;
