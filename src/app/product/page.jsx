function ProductPage({ username, imgUrl }) {
  return (
    <div className="w-9/12 m-auto">
      <img
        className=" aspect-square object-cover rounded-t-lg"
        src={imgUrl}
        alt=""
      />
      <div className=" flex font-serif text-lg justify-center border-2 text-center gap-[10px] py-5">
        {username}
      </div>
    </div>
  );
}

export default function ProductList() {
  const card = [
    {
      imgUrl: "https://susumbokdarmi.com/wp-content/uploads/2022/08/banana.png",
      username: "Darmi Banana",
    },
    {
      imgUrl:
        "https://susumbokdarmi.com/wp-content/uploads/2022/08/alpukat.png",
      username: "Darmi Alpukat",
    },
    {
      imgUrl: "https://susumbokdarmi.com/wp-content/uploads/2022/08/plain.png",
      username: "Darmi Plain",
    },
    {
      imgUrl: "https://susumbokdarmi.com/wp-content/uploads/2022/08/taro.png",
      username: "Darmi Taro",
    },
    {
      imgUrl:
        "https://susumbokdarmi.com/wp-content/uploads/2022/08/strawberry.png",
      username: "Darmi Stawberry",
    },
    {
      imgUrl: "https://susumbokdarmi.com/wp-content/uploads/2022/08/grape.png",
      username: "Darmi Grape",
    },
    {
      imgUrl: "https://susumbokdarmi.com/wp-content/uploads/2022/08/almond.png",
      username: "Darmi Almond",
    },
    {
      imgUrl: "https://susumbokdarmi.com/wp-content/uploads/2022/08/melon.png",
      username: "Darmi Melon",
    },
    {
      imgUrl: "https://susumbokdarmi.com/wp-content/uploads/2022/08/cheese.png",
      username: "Darmi Cheese",
    },
    {
      imgUrl: "https://susumbokdarmi.com/wp-content/uploads/2022/08/lychee.png",
      username: "Darmi Lychee",
    },
    {
      imgUrl:
        "https://susumbokdarmi.com/wp-content/uploads/2022/08/cadburry.png",
      username: "Darmi Cadburry",
    },
    {
      imgUrl:
        "https://susumbokdarmi.com/wp-content/uploads/2022/08/cookies.png",
      username: "Darmi Cookie",
    },
    {
      imgUrl:
        "https://susumbokdarmi.com/wp-content/uploads/2022/08/chocooat.png",
      username: "Darmi Choco Oat",
    },
    {
      imgUrl:
        "https://susumbokdarmi.com/wp-content/uploads/2022/08/chocolate.png",
      username: "Darmi Chocolate",
    },
    {
      imgUrl: "https://susumbokdarmi.com/wp-content/uploads/2022/08/mocca.png",
      username: "Darmi Mocca",
    },
    {
      imgUrl:
        "https://susumbokdarmi.com/wp-content/uploads/2022/08/greentea.png",
      username: "Darmi Greentea",
    },
  ];

  return (
    <>
      <div className=" flex justify-center text-center text-4xl font-serif font-bold p-5 mt-5">
        PRODUCT
      </div>
      <div className="  grid md:grid-cols-4 lg:grid-col-3 gap-6 md:px-28 lg:p-7 hover:scale-100">
        {card.map((card, index) => (
          <ProductPage key={index} {...card} />
        ))}
      </div>
    </>
  );
}
