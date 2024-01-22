import Link from "next/link";
import susu1 from "../../../public/susu1.jpeg";
import susu from "../../../public/susu.png";
import sehat from "../../../public/sehat.png";
import Marquee from "react-fast-marquee";
import alpukat from "../../../public/alpukat.png";
import banana from "../../../public/banana.png";
import taro from "../../../public/taro.png";
import visi from "../../../public/visi.jpg";
import lok from "../../../public/lok.jpg";
import grab from "../../../public/grab.png";
import gojek from "../../../public/gojek.png";
import shopee from "../../../public/shopee.png";
import Image from "next/image";

function BannerComponent() {
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="text-white text-center w-full  max-w-screen-2xl">
          <div className="flex flex-col justify-center  w-full bg-red-400 relative top-0 ">
            <Image src={susu1} alt="" className="w-full " />

            <div className="absolute w-full lg:pb-40 top-5">
              <div className="lg:text-4xl w-full">
                <h1>ORGANIC NUT MILKS</h1>
                <h1>{`WE MAKE 'EM FRESH MILK`}</h1>
                <h1>FROM MBOK DARMI FACTORY</h1>
              </div>
              <Marquee>
                <p>
                  Happy delivering to doorsteps in your room, Jakarta, Bogor,
                  Tanggerang, Bekasi. Made in Indonesia.
                </p>
              </Marquee>
            </div>

            <div className=" absolute flex justify-center items-center lg:bottom-10 bottom-5 lg:top-5 right-5 left-5">
              <Image src={susu} alt="" className=" w-1/4" />
            </div>
          </div>

          <div className=" flex lg:p-16 text-center text-black">
            <p className=" text-center lg:text-xl p-10">
              PT Sumoda Tama Berkah merupakan perusahaan yang bergerak di bidang
              Food & Beverage asal Kota Bogor dan dikenal dengan brand Susu Mbok
              Darmi. Mbok Darmi merupakan produk minuman olahan susu
              pasteurisasi yang bahan bakunya berasal dari peternak lokal di
              sekitar Kota Bogor dan disajikan dengan konsep lokal “jadul” yang
              berdiri sejak tahun 2013. Outlet Susu Mbok Darmi biasa disebut
              menggunakan istilah “gubuk”. Tampilan setiap gubuk Susu Mbok Darmi
              menceritakan ciri khas lokal namun juga tetap elegan. Susu Mbok
              Darmi biasa menyapa konsumen setianya dengan istilah “Cucu si
              Mbok”
            </p>
          </div>

          <div className="flex justify-center text-center p-10 lg:pr-80 lg:pl-80">
            <Image src={sehat} alt="" />
          </div>

          <div className="text-black text-4xl lg:text-6xl p-10 text-left font-extrabold font-serif">
            PRODUK
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center px-8 md:px-16 lg:px-20">
            <Image src={alpukat} alt="" className="rounded-3xl" />
            <Image src={banana} alt="" className="rounded-3xl" />
            <Image src={taro} alt="" className="rounded-3xl" />
          </div>

          <div className="text-center lg:p-20 p-10 lg:text-2xl text-2xl">
            <Link
              href={"/product"}
              className="bg-green-800 text-white rounded-full p-5"
            >
              Semua Menu
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-10 text-left items-center px-8 md:px-16 lg:px-20">
            <Image
              src={lok}
              alt=""
              className="flex aspect-square rounded-3xl"
            />
            <div className="text-black lg:text-6xl text-4xl font-serif text-center ">
              Visi Kami
              <div className="text-black text-2xl font-serif lg:p-10 p-3">
                Menjadi brand minuman susu pasteurisasi terbaik dan terbesar di
                Indonesia
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 text-left items-center px-8 md:px-16 lg:px-20 p-10">
            <div className="text-black lg:text-6xl text-4xl font-serif text-center">
              Lokasi Gubuk
              <div className="text-black text-center text-2xl font-serif lg:p-10 p-3">
                Saat ini Susu Mbok Darmi memiliki 57 gubuk yang telah tersebar
                di Jakarta, Bogor, Depok, Tangerang, dan Bekasi
              </div>
              <div className="text-center lg:p-5 lg:text-4xl text-2xl p-3">
                <Link
                  href={"/contact"}
                  className="bg-green-800 text-white rounded-full p-5"
                >
                  Lihat Lokasi
                </Link>
              </div>
            </div>

            <Image
              src={visi}
              alt=""
              className="flex aspect-square rounded-3xl"
            />
          </div>

          <Marquee>
            <div className=" flex text-black font-extrabold lg:text-4xl text-2xl font-serif justify-center">
              PESAN SEKARANG DI
            </div>
          </Marquee>

          <div className="grid lg:grid-cols-3 lg:gap-8  justify-center items-center lg:pr-52 pr-32 lg:pl-52 pl-32">
            <Image src={grab} alt="" className="" />
            <Image src={gojek} alt="" className="" />
            <Image src={shopee} alt="" className="" />
          </div>

          <div className="flex justify-center text-center lg:text-2xl p-10 lg:pr-52 lg:pl-52 text-black">
            PT Sumoda Tama Berkah Jl. Achmad Adnawijaya No.65, RT.02/RW.16,
            Tegal Gundil, Kec. Bogor Utara, Kota Bogor, Jawa Barat 16152
            halo@susumbokdarmi.com
          </div>
        </div>
      </div>
    </>
  );
}

export default BannerComponent;
