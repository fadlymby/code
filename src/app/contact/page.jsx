import LokasiImage from "../../../public/lokasi.png";
import grab from "../../../public/grab.png";
import gojek from "../../../public/gojek.png";
import shopee from "../../../public/shopee.png";
import { FaLocationDot } from "react-icons/fa6";
import Image from "next/image";
import Marquee from "react-fast-marquee";

function ContactPage() {
  return (
    <>
      <div className="grid lg:grid-cols-2 gap-10 text-left items-center lg:px-12 md:px-8 sm:px-6">
        <div className="text-black text-2xl font-serif p-10">
          Monggo kamu bisa mampir ke 74 gubuk Susu Mbok Darmi yang tersebar di
          wilayah Bogor, Jakarta, Depok, Tangerang, dan Bekasi
        </div>
        <Image
          src={LokasiImage}
          alt=""
          className="flex aspect-auto rounded-3xl"
        />
      </div>

      <div className="grid lg:grid-cols-2 justify-center text-left text-2xl p-10">
        <ul className=" p-5">
          <FaLocationDot />
          <div className=" text-2xl font-serif font-bold">Bogor</div>
          <li className=" list-disc">AEON Mall Sentul City - Lt. 2</li>
          <li className=" list-disc">Botani Square - Lt. 2</li>
          <li className=" list-disc">Transmart Yasmin - Lt. GF</li>
          <li className=" list-disc">Cibinong City Mall - Lt. 2</li>
          <li className=" list-disc">Metropolitan Mall Cibubur - Lt. 1</li>
          <li className=" list-disc">Plaza Indah Bogor - Lt. GF</li>
          <li className=" list-disc">Pusat Grosir Bogor - Area Parkir</li>
          <li className=" list-disc">
            Kampus IPB Dramaga - Kantin Blue Corner
          </li>
          <li className=" list-disc">
            Jl. Sudirman No. 28 (Air Mancur) - Bogor Tengah
          </li>
          <li className=" list-disc">Jl. Raya Ciomas - Kab. Bogor</li>
          <li className=" list-disc">Jl. Raya Babakan Dramaga - Kab. Bogor</li>
          <li className=" list-disc">Jl. Ciheleut - Bogor Timur</li>
          <li className=" list-disc">Jl. Dramaga Raya No.7 - Kab. Bogor</li>
          <li className=" list-disc">Jl. Pakuan - Bogor Timur</li>
          <li className=" list-disc">Jl. Achmad Sobana - Bogor Utara</li>
          <li className=" list-disc">
            Jl. Brigjen Saptadji Cilendek - Bogor Barat
          </li>
          <li className=" list-disc">
            Jl. Achmad Adnawijaya, Pandu Raya - Bogor Utara
          </li>
          <li className=" list-disc">
            Jl. Taman Cimanggu Raya Ruko No. 12 - Tanah Sereal
          </li>
          <li className=" list-disc">Jl. Selang - Bogor Tengah</li>
          <li className=" list-disc">Stasiun Bogor</li>
          <li className=" list-disc">
            Living World Kota Wisata - Lt. 3 (Opening Soon)
          </li>
        </ul>

        <ul className=" p-5">
          <FaLocationDot />
          <div className=" text-2xl font-serif font-bold">Jakarta</div>

          <li className=" list-disc">Blok M Plaza - Lt. G</li>
          <li className=" list-disc">Pejaten Village - Lt. LG</li>
          <li className=" list-disc">Mall Bassura - Lt. LG</li>
          <li className=" list-disc">Mall Cipinang Indah - Lt. 1</li>
          <li className=" list-disc">Stasiun Gondangdia - Pintu Selatan</li>
          <li className=" list-disc">Tamini Square - Lt. GF</li>
          <li className=" list-disc">Mall Ambassador - Lt. 4</li>
          <li className=" list-disc">Lippo Mall Kemang - Lt. LG</li>
          <li className=" list-disc">AEON Mall JGC - Lt. 3</li>
          <li className=" list-disc">Kantin FE, Univ Pancasila - Jakarta</li>
          <li className=" list-disc">AEON Mall Tanjung Barat - Lt. 3A</li>
          <li className=" list-disc">Plaza Kalibata - Lt. GF</li>
          <li className=" list-disc">Green Pramuka Square - Lt. LG</li>
          <li className=" list-disc">Mall Artha Gading - Lt. 1</li>
          <li className=" list-disc">MRT Lebak Bulus</li>
          <li className=" list-disc">Pusat Grosir Cililitan - Lt. Dasar</li>
          <li className=" list-disc">Plaza Atrium - Lt. 2</li>
          <li className=" list-disc">
            Halte Transjakarta Juanda (Opening Soon)
          </li>
          <li className=" list-disc">Stasiun Tebet</li>
          <li className=" list-disc">Stasiun Duri (Opening Soon)</li>
          <li className=" list-disc">Stasiun Jakarta Kota (Opening Soon)</li>
        </ul>

        <ul className=" p-5">
          <FaLocationDot />
          <div className=" text-2xl font-serif font-bold">Depok</div>

          <li className=" list-disc">Mall Pesona Square - Lt. LG</li>
          <li className=" list-disc">Margo City Depok - Lt. B1</li>
          <li className=" list-disc">Jl. H. Asmawi- Kukusan, Beji</li>
          <li className=" list-disc">Jl. Raya Sawangan - Sawangan, Depok</li>
          <li className=" list-disc">Jl. Sentosa Raya - Sukmajaya, Depok</li>
          <li className=" list-disc">Kelapa Dua - Gunadarma Kampus E</li>
          <li className=" list-disc">
            ITC Depok - Lt. Dasar, Food Street Zone
          </li>
          <li className=" list-disc">The Park Sawangan - Lt. LG</li>
          <li className=" list-disc">
            Apartemen Samesta Mahata Margonda - Lt. 3 (Opening Soon)
          </li>
          <li className=" list-disc">Stasiun Citayam</li>
          <li className=" list-disc">Trans Studio Mall Cibubur - Lt. LG</li>
        </ul>

        <ul className=" p-5">
          <FaLocationDot />
          <div className=" text-2xl font-serif font-bold">Bekasi</div>

          <li className=" list-disc">Grand Galaxy Park - Lt. 2</li>
          <li className=" list-disc">Plasa Cibubur - Lt. GF</li>
          <li className=" list-disc">Mall Ciputra Cibubur - Lt. 1</li>
          <li className=" list-disc">Mega Bekasi Hypermall - Lt. 3</li>
          <li className=" list-disc">Lagoon Avenue - Lt. GF</li>
          <li className=" list-disc">Jl. Bintara Raya - Bekasi Barat</li>
          <li className=" list-disc">Jl. Jatibening Raya No. 93 - Caman</li>
          <li className=" list-disc">
            Jl. Raya Candrabaga - Pondok Ungu, Bekasi
          </li>
          <li className=" list-disc">Mall Plaza Pondok Gede - Lt. G</li>
          <li className=" list-disc">Transpark Juanda - Lt. GF</li>
          <li className=" list-disc">Living Plaza Jababeka - Lt. G</li>
          <li className=" list-disc">Stasiun Bekasi</li>
        </ul>
      </div>

      <Marquee>
        <div className=" flex text-black font-extrabold lg:text-4xl text-2xl font-serif justify-center">
          PESAN SEKARANG DI
        </div>
      </Marquee>

      <div className="grid lg:grid-cols-3 lg:gap-8 justify-center items-center lg:pr-52 pr-32 lg:pl-52 pl-32">
        <Image src={grab} alt="" className="" />
        <Image src={gojek} alt="" className="" />
        <Image src={shopee} alt="" className="" />
      </div>
    </>
  );
}
export default ContactPage;
