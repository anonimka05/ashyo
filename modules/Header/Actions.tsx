import { BagIcon, CompareIcon, LikeIcon, ProfileIcon } from "@/icons";

function Actions() {
  const actionList = [
    {
      id: 1,
      bageCount: 2,
      icon: <CompareIcon />,
    },
    {
      id: 2,
      bageCount: 11,
      icon: <LikeIcon />,
    },
    {
      id: 3,
      bageCount: 7,
      icon: <BagIcon />,
    },
    {
      id: 4,
      bageCount: null,
      icon: <ProfileIcon />,
    },
  ];

  return (
    <div className="hidden sm:flex gap-[15px]">
      {actionList.map((item) => (
        <div
          key={item.id}
          className="w-[50px] h-[48px] relative cursor-pointer bg-[#EBEFF3] rounded-[6px] flex items-center justify-center "
        >
          {item.icon}
          {item.bageCount && (
            <div className="absolute w-[20px] h-[20px] bg-[#E81504] text-white font-bold text-[10px] flex items-center justify-center rounded-full -top-[10px] -right-[10px]  ">
              {item.bageCount}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Actions;
