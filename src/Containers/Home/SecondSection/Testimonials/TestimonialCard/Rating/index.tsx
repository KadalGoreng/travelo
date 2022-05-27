import Image from "next/image";

const Rating = () => {
  return (
    <div className="flex gap-1 align-middle">
      {Array.from({ length: 5 }).map((_, index) => {
        return (
          <Image
            key={index}
            src="/assets/icons/yellow-star.svg"
            width="20"
            height="20"
          />
        );
      })}
    </div>
  );
};

export default Rating;
