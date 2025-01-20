import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1 >Next.js Caching</h1>
      <p>
        Next.js performs some pretty aggressive caching.<br/> Understanding how it
        works therefore is key to avoid issues.
      </p>
      <div className="responsiveImage">
        <Image
          src="https://media.geeksforgeeks.org/wp-content/uploads/20240110183740/Cache-Working.jpg"
          alt="How caching works"
          layout="responsive" // برای تطبیق خودکار اندازه
          width={600}
          height={400}
        />
      </div>
    </>
  );
}
