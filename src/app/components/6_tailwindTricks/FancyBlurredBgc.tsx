import Image from "next/image";

function FancyBlurredBgc() {
  return (
    <>
      <div className={` fixed inset-0 blur-2xl`}>
        <Image
          className={`object-contain`}
          src={`/images/dummyImg.jpg`}
          fill
          alt={`bg`}
        />
      </div>
    </>
  );
}

export default FancyBlurredBgc;
