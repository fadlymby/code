function TeamPage({ username, imgUrl, title, desc }) {
  return (
    <div className="m-auto w-full">
      <img
        className=" aspect-square object-cover rounded-lg"
        src={imgUrl}
        alt=""
      />
      <div className=" flex font-semibold text-lg justify-center text-center gap-[10px] py-5">
        {username}
      </div>
      <div className=" flex text-lg justify-center text-center underline">
        {title}
      </div>
      <div className=" flex text-lg justify-center text-center py-3">
        {desc}
      </div>
    </div>
  );
}

export default function TeamList() {
  const card = [
    {
      imgUrl:
        "https://i.pinimg.com/736x/0f/e6/ee/0fe6eeaff883a54330ab32c5fc559d9f.jpg",
      username: "Spongebob Squarepants",
      title: "Office Manager",
      desc: "Handles office administration, and runs the company fantasy football",
    },
    {
      imgUrl:
        "https://s3.amazonaws.com/colorslive/png/128563-dosQ5wtwK8gM2gc6.png",
      username: "Patrick Star",
      title: "Technical Assistant",
      desc: "Can fix anything from crashed computer to a broken heart",
    },
    {
      imgUrl: "https://www.sosyncd.com/wp-content/uploads/2022/07/23.png",
      username: "Mr Eugene Krab",
      title: "Financial Advisor",
      desc: "Keeps the money coming in, and the muffin tray stocked",
    },
    {
      imgUrl:
        "https://assetsio.reedpopcdn.com/nickelodeon-all-star-brawl-2-header.jpg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp",
      username: "Squidward Tentacles",
      title: "Graphic Designer",
      desc: "Lead designer on project Alpha, and office prankster",
    },
  ];

  return (
    <>
      <div className=" flex justify-center text-center text-4xl font-serif font-bold p-5 mt-5">
        TEAM MEMBER
      </div>
      <div className=" grid md:grid-cols-4 lg:grid-col-3 gap-6 md:px-28 lg:p-7">
        {card.map((card, index) => (
          <TeamPage key={index} {...card} />
        ))}
      </div>
    </>
  );
}
