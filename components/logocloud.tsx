// Instructions for integrating continuous logo animation in Tailwind CSS:
// Add the following configurations to the `extend` section of your `tailwind.config.js`:
// 1. Keyframes for 'logo-cloud' animation that continuously moves logos from right to left:
//    keyframes: {
//      'logo-cloud': {
//        from: { transform: 'translateX(0)' },
//        to: { transform: 'translateX(calc(-100% - 4rem))' },
//      },
//    }
// 2. Animation utility to apply this keyframe:
//    animation: {
//      'logo-cloud': 'logo-cloud 30s linear infinite', // Adjust duration and timing as needed for your design.
//    }
import Link from "next/link";
import Image from "next/image";
const logos = [
  {
    name: "Yetkin Gencler",
    url: "/logos/YetkinGencler.svg",
    site: "https://yetkingencler.com",
  },
  {
    name: "Turkish Entrepreneurship Foundation",
    url: "/logos/TurkishEntrepreneurshipFoundation.svg",
    site: "https://girisimcilikvakfi.org",
  },
  {
    name: "PublicSquare",
    url: "/logos/PublicSquare.svg",
    site: "https://publicsquare.com.au",
  },
  {
    name: "Google Game and Application academy",
    url: "/logos/GoogleGameandApplicationAcademy.svg",
    site: "https://oyunveuygulamaakademisi.com",
  },
  {
    name: "Genclig Foundation",
    url: "/logos/GencligFoundation.svg",
    site: "https://gencligvakfi.org",
  },
];

export default function AnimatedLogoCloud({ animated }: { animated: boolean }) {
  return (
    <>
      <div className="w-full py-12 hidden lg:block overflow-hidden">
        <div className="w-full">
          {/* grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6  */}
          <div className=" flex justify-center items-center gap-x-8 ">
            {logos.map((logo, key) => (
              <Image
                key={key}
                width={300}
                height={200}
                src={logo.url}
                className=" w-[180px] h-fit max-h-[100px] brightness-0  dark:invert dark:hover:invert-0 hover:brightness-100 transition-all duration-300 ease-in-out"
                alt={`${logo.name}`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="w-full pb-6 lg:hidden ">
        <div className="mx-auto w-full px-4 md:px-8 ">
          <div
            className="group relative  flex gap-6 overflow-hidden p-2"
            style={{
              maskImage:
                "linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 100%)",
            }}
          >
            {Array(5)
              .fill(null)
              .map((index,key) => (
                <div
                  key={key}
                  className="flex shrink-0 items-center animate-logo-cloud flex-row justify-around gap-8"
                >
                  {logos.map((logo, key) => (
                    <Image
                      key={key}
                      width={0}
                      height={0}
                      src={logo.url}
                      className="h-[50px] w-auto brightness-0  dark:invert dark:hover:invert-0 hover:brightness-100 transition-all duration-300 ease-in-out"
                      alt={`${logo.name} - ${logo.site}`}
                    ></Image>
                  ))}
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
