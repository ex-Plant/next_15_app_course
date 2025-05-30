import Image from "next/image";
import cn from "@/app/lib/utils/restParameter_cn";

const dummyList = Array.from({ length: 120 });

const AnimatedImagesList = () => {
  console.log(dummyList);
  return (
    <div
      className={`h-full grow flex flex-1  flex-wrap gap-4 justify-center py-10`}
    >
      {dummyList.map((_, i) => (
        <AnimatedImg key={i} />
      ))}
    </div>
  );
};

export default AnimatedImagesList;

export function AnimatedImg() {
  return (
    <div
      className={cn(
        ` border border-white relative aspect-square min-h-[200px]
         hover:scale-[105%] transition active:scale-[95%]
     `,
        // `basis-[200px] flex-1 `,
        // `basis-[200px] flex-0 min-h-[100px]`,
        `w-[200px]`,
      )}
    >
      <Image
        fill
        src={`/images/dummyImg.jpg`}
        alt={`img`}
        className={`object-cover
         
         `}
      />
    </div>
  );
}
