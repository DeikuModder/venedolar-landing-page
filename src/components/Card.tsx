const Card = ({
  children,
  title,
}: {
  children: JSX.Element;
  title: string;
}) => {
  return (
    <article className="border-2 md:min-h-[8rem] border-[#112e4e] w-full p-4 flex flex-col items-center gap-2 bg-white rounded-lg md:flex-row">
      <div className="p-1 gap-2 flex flex-col justify-center items-center w-[20%]">
        <h3 className="md:text-3xl font-bold text-center">{title}</h3>
      </div>
      <div className="w-[80%]">{children}</div>
    </article>
  );
};

export default Card;
