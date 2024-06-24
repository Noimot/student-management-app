import Image from "next/image";
import Link from "next/link";
import Button from "./component/Button";

export default function Home() {
  return (
    <main className="bg-custom-gradient text-white h-screen">
      <div className="pt-6 px-6 ">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/student-management-logo.png"
              alt="Student management"
              width={50}
              height={50}
            />
            <h1 className="text-2xl font-bold">Stumag</h1>
          </Link>
          <div>
            <ul className="flex items-center gap-x-5">
              <li>
                <Link href="/">About</Link>
              </li>
              <li>
                <Link href="/">Contact</Link>
              </li>
              <li>
                <Link href="/">Courses</Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex items-center gap-x-5">
              <li>
                <Link href="/">Login</Link>
              </li>
              <li>
                <Link href="/register">
                  <Button text="Register" />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="flex">
          <div className="flex-[1/2] h-[calc(100vh-200px)] flex justify-center items-center flex-col">
            <div className="px-20">
              <div className="space-y-3">
                <h2 className="font-bold text-2xl">
                  Register with us at{" "}
                  <span className="text-light-red">Tech Impact Academy</span> to
                  be part of those who make an impact using technology.
                </h2>
                <p>
                  Don’t miss your chance to embark on a transformative journey
                  into software development
                </p>
              </div>
              <div className="mt-10">
                <Link href="/register">
                  <Button text="Register" />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex-[1/2] h-[calc(100vh-200px)] flex justify-center items-center">
            <img
              src="/student-management-system2.png"
              alt="Student management"
              className="w-4/5 h-full object-contain relative "
            />
          </div>
        </div>
      </div>
    </main>
  );
}
