// import { TypingAnimation } from "@/components/magicui/typing-animation";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/magicui/terminal";

// export default function Hero() {
//   return (
//     <div className="hero bg-base-200 min-h-screen">
//       <div className="hero-content flex-col lg:flex-row-reverse">
//         <img
//           src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
//           className="max-w-sm rounded-lg shadow-2xl"
//         />
//         <div>
//           {/* <TypingAnimation>Hai, My Name is Rahman Umardi👋</TypingAnimation> */}
//           {/* <h1 className="text-5xl font-bold">Software Developer</h1> */}
//           {/* <p className="py-6">
//             Saya adalah software engineer yang berfokus pada menciptakan
//             aplikasi dan solusi digital yang elegan, efisien, dan berdampak,
//             mengubah ide-ide menjadi produk yang dapat digunakan sehari-hari,
//             sambil terus belajar dan menghadirkan inovasi melalui kode yang
//             bersih dan terstruktur.
//           </p> */}
//           <Terminal>
//             <TypingAnimation>
//               &gt; npx create-dev rahmanumardi@latest init
//             </TypingAnimation>

//             <AnimatedSpan className="text-green-500">
//               ✔ Setting up environment.
//             </AnimatedSpan>

//             <AnimatedSpan className="text-green-500">
//               ✔ Setting up clean architecture.
//             </AnimatedSpan>

//             <AnimatedSpan className="text-green-500">
//               ✔ Loading skills: Go, Java, JavaScript.
//             </AnimatedSpan>

//             <AnimatedSpan className="text-green-500">
//               ✔ Connected to PostgreSQL · MySQL · Redis.
//             </AnimatedSpan>

//             <AnimatedSpan className="text-green-500">
//               ✔ Enabling REST API.
//             </AnimatedSpan>

//             <AnimatedSpan className="text-green-500">
//               ✔ Configuring Docker & Nginx Gateway.
//             </AnimatedSpan>

//             <AnimatedSpan className="text-green-500">
//               ✔ Experienced with Linux (Ubuntu) · CLI · Bash.
//             </AnimatedSpan>

//             <TypingAnimation className="text-muted-foreground">
//               Success! Software Developer profile initialized.
//             </TypingAnimation>
//           </Terminal>

//           <InteractiveHoverButton>Download CV</InteractiveHoverButton>
//         </div>
//       </div>
//     </div>
//   );
// }
export default function Hero() {
  return (
    <div className="hero bg-transparent min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <Terminal>
            <TypingAnimation>
              &gt; npx create-dev rahmanumardi@latest init
            </TypingAnimation>

            <AnimatedSpan className="text-green-500">
              ✔ Setting up environment.
            </AnimatedSpan>

            <AnimatedSpan className="text-green-500">
              ✔ Setting up clean architecture.
            </AnimatedSpan>

            <AnimatedSpan className="text-green-500">
              ✔ Loading skills: Go, Java, JavaScript.
            </AnimatedSpan>

            <AnimatedSpan className="text-green-500">
              ✔ Connected to PostgreSQL · MySQL · Redis.
            </AnimatedSpan>

            <AnimatedSpan className="text-green-500">
              ✔ Enabling REST API.
            </AnimatedSpan>

            <AnimatedSpan className="text-green-500">
              ✔ Configuring Docker & Nginx Gateway.
            </AnimatedSpan>

            <AnimatedSpan className="text-green-500">
              ✔ Experienced with Linux (Ubuntu) · CLI · Bash.
            </AnimatedSpan>

            <TypingAnimation className="text-muted-foreground">
              Success! Software Developer profile initialized.
            </TypingAnimation>
          </Terminal>

          <InteractiveHoverButton>Download CV</InteractiveHoverButton>
        </div>
      </div>
    </div>
  );
}
