import axios from "axios";
import { ReactNode } from "react";
import Image from "next/image";
import ReactCardCarousel from "react-card-carousel";

// custom components import
import Button from "../../../components/UI/button";
import ProductCard from "../../../components/UI/productCard";

// interfaces import
import { IProduct } from "../../../types/Product";

// import images
import StoryImage from "../../../public/images/story.jpg";
import JacketImage from "../../../public/images/jacket.webp";
import ShoeImage from "../../../public/images/shoes.jpg";
import AccessoryImage from "../../../public/images/accessories.jpg";
import MoneySvg from "../../../public/svg/money.svg";
import CustomerSvg from "../../../public/svg/customer.svg";
import ShippingSvg from "../../../public/svg/shipping.svg";

const Home = (props: ReactNode | any) => {
  const products = props?.data as IProduct[];

  return (
    <main className="w-full flex flex-col justify-center items-center overflow-y-auto relative">
      {/* Hero section */}

      <section className=" w-full bg-fixed">
        <div
          className="w-full h-[40vh] md:h-[65vh] bg-no-repeat bg-center bg-fixed flex flex-col items-center justify-center gap-20  font-poppins "
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://dbrain-studio.com/wp-content/uploads/2022/02/wardrobe-design-thumbnail-min.png')",
          }}
        >
          <p className="text-xl md:text-3xl font-normal text-white">
            Find New Collections
          </p>

          <Button isFilled={true} title="Shop now"></Button>
        </div>
      </section>

      {/* new arrivals section */}
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#514644"
          fill-opacity="1"
          d="M0,224L48,197.3C96,171,192,117,288,90.7C384,64,480,64,576,106.7C672,149,768,235,864,234.7C960,235,1056,149,1152,138.7C1248,128,1344,192,1392,224L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg> */}
      <section className="pt-10 px-20 min-h-screen bg-secondary bg-fixed text-white flex gap-10 justify-center items-center flex-col w-full">
        {/* header */}
        <header>
          <p className="text-3xl">New Arrivals</p>
        </header>
        {/* products */}
        <div className="flex flex-col justify-between items-center w-full md:flex-row h-[80vh] w-full relative">
          <ReactCardCarousel
            autoplay={true}
            autoplay_speed={2500}
            spread="wide"
          >
            {products.map((product: IProduct) => {
              return <ProductCard product={product} key={product?.id} />;
            })}
          </ReactCardCarousel>
        </div>
        {/* view more button */}
        <div className="w-full flex justify-center items-center ">
          <Button
            isFilled={true}
            title="Visit Store"
            background="bg-primary"
            border="border-primary"
            color="text-secondary"
          ></Button>
        </div>
      </section>
      {/* Story and blog section */}

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#514644"
          fill-opacity="1"
          d="M0,224L1440,160L1440,0L0,0Z"
        ></path>
      </svg>
      <section className=" min-h-screen w-full px-20 grid grid-rows-2">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {/* our story */}
          <div className="overflow-hidden h-[40vh]  relative flex items-center justify-center ">
            <div className="absolute -z-3 ">
              <Image src={StoryImage} />
            </div>
            <div className="absolute top-0 bottom-0 left-0 right-0 z-1 bg-black opacity-80"></div>
            <h3 className="relative z-1 text-white">Our Story</h3>
          </div>
          {/* out blogs */}
          {/* our story */}
          <div className="overflow-hidden h-[40vh]  relative flex items-center justify-center ">
            <div className="absolute -z-3 ">
              <Image src={StoryImage} />
            </div>
            <div className="absolute top-0 bottom-0 left-0 right-0 z-1 bg-black opacity-80"></div>
            <h3 className="relative z-1 text-white">Our Story</h3>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <div className="overflow-hidden h-[40vh]  relative flex items-center justify-center">
            <div className="absolute -z-3 ">
              <Image src={ShoeImage} />
            </div>
            <div className="absolute top-0 bottom-0 left-0 right-0 z-1 bg-black opacity-80"></div>
            <h3 className="relative z-1 text-white">Shoes</h3>
          </div>
          <div className="overflow-hidden h-[40vh]  relative flex items-center justify-center">
            <div className="absolute -z-3 ">
              <Image src={AccessoryImage} />
            </div>
            <div className="absolute top-0 bottom-0 left-0 right-0 z-1 bg-black opacity-80"></div>
            <h3 className="relative z-1 text-white">Accessories</h3>
          </div>
          <div className="overflow-hidden h-[40vh]  relative flex items-center justify-center">
            <div className="absolute -z-3 ">
              <Image src={JacketImage} />
            </div>
            <div className="absolute top-0 bottom-0 left-0 right-0 z-1 bg-black opacity-80"></div>
            <h3 className="relative z-1 text-white">Jackets</h3>
          </div>
        </div>
      </section>

      {/* categories section */}

      {/* most popular section */}

      {/* services section */}
      <header>
        <p className="text-3xl mb-20">Services</p>
      </header>
      <section className="w-full px-40 flex justify-around">
        <div className="flex flex-col justify-center items-center  rounded-md bg-tertiary h-48 w-60">
          {/* customer service icon */}
          <div className="flex justify-center items-center w-20 mb-10 ">
            <Image src={CustomerSvg} />
          </div>
          <p className="">24/7 Customer service</p>
        </div>
        <div className="flex flex-col justify-center items-center  rounded-md bg-tertiary h-48 w-60">
          <div className="flex justify-center items-center w-20 mb-10 ">
            <Image src={ShippingSvg} />
          </div>
          <p className="">Free Shipping</p>
        </div>
        <div className="flex flex-col justify-center items-center  rounded-md bg-tertiary h-48 w-60">
          <div className="flex justify-center items-center w-20 mb-10 ">
            <Image src={MoneySvg} />
          </div>
          <p className="">Secured payments</p>
        </div>
      </section>
    </main>
  );
};

// This gets called on every request
export async function getServerSideProps() {
  const { data } = await axios.get(`http://localhost:3000/products`);
  return { props: { data } };
}

export default Home;
