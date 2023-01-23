import { useParams } from "react-router-dom";

const Review = () => {

  const {reviewId} = useParams();

  return <h1>{reviewId}</h1>
}

export default Review;