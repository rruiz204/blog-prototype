interface Props {
  title: string;
  cover: string;
  posted: string;
  children: React.ReactNode;
};

export const ArticleLayout = ({ children, title, posted, cover }: Props) => {
  return (
    <div className="bg-ternary-200">
      <div className="min-h-screen flex justify-center">
        <div className="w-full md:w-[800px] flex flex-col bg-primary">
          <div className="pt-16 px-10">
            <p className="font-inter-bold text-6xl underline mb-5">{title}</p>
            <p className="font-inter-semi text-details-100">{posted} / Content score: 87</p>

            <div className="mt-8">
              <img src={cover} className="w-full max-h-[500px] rounded-xl" />
            </div>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
};