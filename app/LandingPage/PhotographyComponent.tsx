import Image from "next/image";

const PhotographyComponent = () => {
  return (
    <section className="relative min-h-[200vh]">
      <div className="w-full h-[200vh]">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 z-10" />

        {/* Images container */}
        <div className="w-full h-full flex flex-col">
          {/* Top row of images */}
          <div className="w-full flex">
            {/* First image */}
            <div className="relative flex-1 h-[100vh]">
              <Image
                src="/assets/lira1.jpg"
                alt="First performance photo"
                fill
                priority
                quality={100}
                className="object-cover"
                sizes="33vw"
              />
            </div>

            {/* Second image */}
            <div className="relative flex-1 h-[100vh]">
              <Image
                src="/assets/lira2.jpg"
                alt="Second performance photo"
                fill
                priority
                quality={100}
                className="object-cover"
                sizes="33vw"
              />
            </div>

            {/* Third image */}
            <div className="relative flex-1 h-[100vh]">
              <Image
                src="/assets/lira3.jpg"
                alt="Third performance photo"
                fill
                priority
                quality={100}
                className="object-cover"
                sizes="33vw"
              />
            </div>
          </div>

          {/* Fourth image */}
          <div className="flex flex-row">
            <div className="relative w-full h-[100vh]">
              <Image
                src="/assets/pink.jpg"
                alt="Fourth performance photo"
                fill
                priority
                quality={100}
                className=" object-scale-down"
                sizes="100vw"
              />
            </div>
            <div className="relative w-full h-[100vh]">
              <Image
                src="/assets/pink.jpg"
                alt="Fourth performance photo"
                fill
                priority
                quality={100}
                className=" object-scale-down"
                sizes="100vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotographyComponent;
