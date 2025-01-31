"use client";
import Modal from "@/components/Modal";
import { Context } from "@/context/Context";
import { BagIcon, CompareIcon, LikeIcon, ProfileIcon } from "@/icons";
import Image from "next/image";
import { FormEvent, useContext, useState } from "react";
import { Toaster } from "react-hot-toast";
import SignIn from "./Auth/SignIn";
import SignUp from "./Auth/SignUp";
import { auth } from "@/service/auth";

function Actions() {
  const [profileModal, setProfileModal] = useState<boolean>(false);
  const { setToken } = useContext(Context);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [authStatus, setAuthStatus] = useState<"sign_in" | "sign_up">(
    "sign_in"
  );

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

  function handleActionClick(id: number) {
    if (id == 4) {
      setProfileModal(true);
    }
  }

  async function handleAuthSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (authStatus == "sign_in") {
      setIsLoading(true);
      const data = {
        email: (e.target as HTMLFormElement).email.value,
        password: (e.target as HTMLFormElement).password.value,
      };
      const result = await auth("sign_in", data, setToken);
      if (result?.status == 201 || result?.status == 200) {
        setProfileModal(false);
        (e.target as HTMLFormElement).reset();
        setIsLoading(false);
      }
    } else if (authStatus == "sign_up") {
      const data = {
        fullName: (e.target as HTMLFormElement).fullName.value,
        email: (e.target as HTMLFormElement).email.value,
        password: (e.target as HTMLFormElement).password.value,
      };
      const result = await auth("sign_up", data);
      if (result?.status == 201 || result?.status == 200) {
        setAuthStatus("sign_in");
        (e.target as HTMLFormElement).reset();
      }
    }
  }

  return (
    <>
      {" "}
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="hidden sm:flex gap-[15px]">
        {actionList.map((item) => (
          <div
            onClick={() => handleActionClick(item.id)}
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
      <Modal
        modalClass={`!h-[390px]`}
        open={profileModal}
        setOpen={setProfileModal}
      >
        <div className="flex items-center justify-center mt-[20px]">
          {/* 
          <Image
            className="scale-[1.6]"
            src={"/logoo.svg"}
            alt="Site Logo"
            width={50}
            height={80}
            priority
          /> */}
          <Image
            style={{ width: "80px", height: "80px" }}
            className="scale-[1.6]"
            src={"/logoo.svg"}
            alt="Site Logo"
            width={80}
            height={80}
            priority
          />
          console.log(
          {
            <Image
              style={{ width: "80px", height: "80px" }}
              className="scale-[1.6]"
              src={"/logoo.svg"}
              alt="Site Logo"
              width={80}
              height={80}
              priority
            />
          }
          );
          <span className="text-[#0F4A97] font-bold text-[29px]">Ashyo</span>
        </div>
        <ul className="flex mt-2 items-center justify-center gap-5">
          <li
            onClick={() => setAuthStatus("sign_in")}
            className={`cursor-pointer text-[20px] text-[#0F4A97] font-semibold border-b-[2px] ${
              authStatus == "sign_in"
                ? "border-[#0F4A97]"
                : "border-transparent"
            } `}
          >
            Sign Up
          </li>
        </ul>
        <form onSubmit={handleAuthSubmit} className="px-5 space-y-2">
          {authStatus == "sign_in" && <SignIn isLoading={isLoading} />}
          {authStatus == "sign_up" && <SignUp isLoading={isLoading} />}
        </form>
      </Modal>
    </>
  );
}

export default Actions;
