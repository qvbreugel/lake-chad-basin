import Link from "next/link";

export default function Issue({
  title,
  embedSrc,
  embedId,
  readMore,
  imageSrc,
  children,
}) {
  return (
    <>
      <h1 className="text-6xl font-bold text-primary">{title}</h1>

      <div className="mt-8">
        {embedSrc ? (
          <iframe
            allowFullScreen
            style={{ width: "960px", height: "560px" }}
            frameBorder="0"
            src={embedSrc}
            id={embedId}
          ></iframe>
        ) : (
          <img style={{ width: "960px", height: "560px" }} src={imageSrc} />
        )}
      </div>

      {children}

      <Link href="/">
        <div className="mt-12 flex w-2/3 justify-evenly pb-16">
          <p className="text-4xl text-primary cursor-pointer hover:underline">
            &#8592; Back to home
          </p>
        </div>
      </Link>
    </>
  );
}
