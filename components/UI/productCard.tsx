import { IProduct } from "../../types/Product";
import Image from "next/image";

const ProductCard = (props: any) => {
  const product = props?.product as IProduct;

  return (
    <div className="flex flex-col gap-2 justify-center items-start p-5 text-secondary  rounded-3xl bg-white">
      {/* img */}
      <div>
        <Image
          src={`${product.image}`}
          alt="product image"
          width="220"
          height="300"
        />
      </div>
      {/* product info */}
      <div>
        <p>{product.name}</p>
        <p className="">Rs.{product.price.toString()}</p>
      </div>
    </div>
  );
};

export default ProductCard;
