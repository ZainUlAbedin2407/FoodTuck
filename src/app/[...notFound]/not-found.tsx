// "use client";
// import Link from "next/link";
// import { useRouter } from "next/navigation";

// export default function NotFoundPage() {
//   const router = useRouter();

//   return (
//     <div >
//       <div className="flex flex-col p-20 items-center max-w-[630px] max-h-[400px] mx-auto">
//         <div>
//           <h1 className="text-[#FF9F0D] text-[96px] font-bold">404</h1>
//         </div>
//         <div>
//           <p className="text-[32px] text-[#333333] ">
//             Oops! Look likes something going wrong
//           </p>
//         </div>
//         <div>
//           <p className="text-[18px] text-[#4f4f4f] text-center">
//             Page Cannot be found! we’ll have it figured out in no time.
//             Menwhile, cheek out these fresh ideas:
//           </p>
//         </div>
//         <div className=" bg-[#FF9F0D] px-4 py-2">
//           <button onClick={() => router.push("/")} className="">
//             Go to home
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFoundPage() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center h-screen bg-[#f5f5f5]">
      <div className="flex flex-col items-center max-w-[630px] mx-auto">
        <div>
          <h1 className="text-[#FF9F0D] text-[120px] font-bold">404</h1>
        </div>
        <div>
          <p className="text-[24px] text-[#333333] font-medium mb-4">
            Oops! Looks like something went wrong.
          </p>
        </div>
        <div>
          <p className="text-[16px] text-[#4f4f4f] text-center mb-6">
            The page cannot be found! We'll have it figured out in no time.
            Meanwhile, check out these fresh ideas:
          </p>
        </div>
        <div className="bg-[#FF9F0D] rounded-md shadow-md hover:bg-[#FF7F00] transition-all">
          <button
            onClick={() => router.push("/")}
            className="px-8 py-2 text-white text-[18px] font-bold rounded-md"
          >
            Go to Home
          </button>
        </div>
      </div>
    </div>
  );
}
