// import { useState } from "preact/hooks";

// export default function Newsletter({ subscribeFunc }: any) {
//     const [email, setEmail] = useState("");

//     function handleInput(e: any) {
//         setEmail(e.target.value);
//     }

//     function subscribe(e: any, email: string) {
//         e.preventDefault();
//         subscribeFunc(e, email);
//     }

//     return (
//         <div class="w-full flex flex-col items-center">
//             <form
//                 onSubmit={(e) => subscribe(e, email)}
//                 class="
//                     w-full border-2 border-navy dark:border-khaki
//                     p-10 flex flex-col gap-y-12">
//                 <h2 class="text-center text-xl font-bold">Subscribe Newsletter Now</h2>
//                 <input
//                     type="text"
//                     value={email}
//                     placeholder="example@example.com"
//                     onInput={(e) => handleInput(e)}
//                     class="
//                         bg-navy dark:bg-khaki outline-none p-2
//                         text-lg text-khaki dark:text-navy font-bold"
//                 />
//                 <input
//                     type="submit"
//                     value="Subscribe"
//                     class="
//                         w-2/3 md:w-1/2
//                         border-2 border-navy dark:border-khaki
//                         hover:bg-navy dark:hover:bg-khaki
//                         py-2
//                         text-navy dark:text-khaki hover:text-khaki dark:hover:text-navy
//                         cursor-pointer"
//                 />
//             </form>
//         </div>
//     )
// }