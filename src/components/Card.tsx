const Card = ({
  children,
  title,
  image,
}: {
  children: JSX.Element;
  title: string;
  image: string;
}) => {
  return (
    <article className="h-[100dvh] mb-8 p-4 w-[300px] flex flex-col justify-center items-center gap-2 bg-neutral-300 rounded-xl">
      <div className="p-1 border-b-2 border-black gap-2 flex flex-col justify-center items-center h-[50%]">
        <figure
          className="aspect-square w-[80%] rounded-full border-2 border-neutral-800 bg-[#edf2f7]"
          style={{ shapeOutside: "circle(50%)" }}
        >
          <img
            src={image}
            alt="feature-img"
            className="w-[100%] object-scale-down rounded-full aspect-square"
          />
        </figure>
        <h3 className="text-3xl font-bold">{title}</h3>
      </div>
      <div className="h-[50%]">{children}</div>
    </article>
  );
};

export default Card;
