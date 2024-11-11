import Image from "next/image";

export default function Introduction() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        <div>
          <Image
            src="/images/profile-pic.jpg"
            alt="A description of the image"
            width={500}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}
