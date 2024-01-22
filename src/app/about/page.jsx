import sehat from "../../../public/sehat.png";
import Image from "next/image";

function AboutPage() {
  return (
    <>
      <div className="flex p-16 text-center flex-col m-auto text-black">
        <div className=" text-4xl p-5">About Us</div>
        <p>
          PT Sumoda Tama Berkah merupakan perusahaan yang bergerak di bidang
          Food & Beverage asal Kota Bogor dan dikenal dengan brand Susu Mbok
          Darmi. Mbok Darmi merupakan produk minuman olahan susu pasteurisasi
          yang bahan bakunya berasal dari peternak lokal di sekitar Kota Bogor
          dan disajikan dengan konsep lokal “jadul” yang berdiri sejak tahun
          2013. Outlet Susu Mbok Darmi biasa disebut menggunakan istilah
          “gubuk”. Tampilan setiap gubuk Susu Mbok Darmi menceritakan ciri khas
          lokal namun juga tetap elegan. Susu Mbok Darmi biasa menyapa konsumen
          setianya dengan istilah “Cucu si Mbok”{" "}
        </p>
        <div className=" flex justify-center items-center lg:p-20 p-6">
          <Image src={sehat} alt="" className=" w-max" />
        </div>
      </div>
    </>
  );
}
export default AboutPage;
