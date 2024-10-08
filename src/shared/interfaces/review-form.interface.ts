export interface IReviewForm {
  name: string;
  email: string;
  review: string;
  rating: number;
}

export interface IReviewSentResponce {
  success: boolean;
  message: string;
}
