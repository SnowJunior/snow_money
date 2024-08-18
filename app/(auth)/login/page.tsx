import Image from "next/image";
import logo from "@/public/images/M.png";

export default function LoginScreen() {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="flex flex-col items-center border-none rounded-md bg-white p-4 gap-3">
        <Image
          src={logo}
          alt="Logo"
          className="h-24 w-24 object-cover rounded-[50%]"
        />
        <h2 className="capitalize text-2xl">welcome back</h2>
        <div className="flex flex-col items-center">
          <p>Glad to see you again 👋🏽</p>
          <p>Login to your account</p>
        </div>
      </div>
    </div>
  );
}
