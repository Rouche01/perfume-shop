import { FC, useState } from "react";
import {
  GalleryImage,
  ProductGallery,
  ProductImageGallery,
  ProductMainImage,
} from "../styles";
import { ProductVariant } from "@/types/product";
import config from "@/configs";

interface Props {
  productImages: {
    url: string | undefined;
    formats: any;
  }[];
}

const ProductGalleryPartial: FC<Props> = ({ productImages }) => {
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(
    productImages[0]
  );

  return (
    <ProductGallery>
      <ProductMainImage
        src={`${config.strapiServerUrl}${selectedVariant?.url}`}
      />
      <ProductImageGallery>
        {productImages.map((image) => (
          <GalleryImage
            key={image.url}
            onClick={() => setSelectedVariant(image)}
            selected={image.url === selectedVariant?.url}
            src={`${config.strapiServerUrl}${image.url}`}
          />
        ))}
      </ProductImageGallery>
    </ProductGallery>
  );
};

export default ProductGalleryPartial;
