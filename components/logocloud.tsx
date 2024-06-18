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

const logos = [
  {
    name: "Vercel",
    url: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715881430/vercel_wordmark_dark_mhv8u8.svg",
  },
  {
    name: "Nextjs",
    url: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715881475/nextjs_logo_dark_gfkf8m.svg",
  },
  {
    name: "Prime",
    url: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/t2awrrfzdvmg1chnzyfr.svg",
  },
  {
    name: "Trustpilot",
    url: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/tkfspxqmjflfllbuqxsi.svg",
  },
];

export default function AnimatedLogoCloud({ animated }: { animated: boolean }) {
  return (
    <>
      <div className="w-full py-12 hidden sm:block">
        <div className="flex w-full flex-col items-center justify-center px-4 md:px-8">
          {/* grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6  */}
          <div className=" grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6  gap-x-6 ">
            {logos.map((logo, key) => (
              <img
                key={key}
                src={logo.url}
                className="h-10 w-28 px-2 brightness-0  dark:invert"
                alt={`${logo.name}`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="w-full pb-6 sm:hidden ">
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
              .map((index) => (
                <div
                  key={index}
                  className="flex shrink-0 animate-logo-cloud flex-row justify-around gap-6"
                >
                  {logos.map((logo, key) => (
                    <img
                      key={key}
                      src={logo.url}
                      className="h-10 w-28 px-2 brightness-0  dark:invert"
                      alt={`${logo.name}`}
                    />
                  ))}
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
