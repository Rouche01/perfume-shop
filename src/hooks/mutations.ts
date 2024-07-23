import {
  CreateReviewMutation,
  GetProductReviewsByProductIdDocument,
  useCreateReviewMutation,
} from "@/graphql/generated/graphql";
import { toast } from "react-toastify";

export const useCreateReview = ({
  onReviewCreated,
}: {
  onReviewCreated: (data: CreateReviewMutation) => void;
}) => {
  const [createReview, { loading: isCreatingReview }] = useCreateReviewMutation(
    {
      refetchQueries: [GetProductReviewsByProductIdDocument],
      onError: (error) => {
        toast(error.message, {
          type: "error",
          position: "top-center",
          theme: "colored",
        });
      },
      onCompleted: (data) => {
        onReviewCreated?.(data);
      },
    }
  );

  return { createReview, isCreatingReview };
};
