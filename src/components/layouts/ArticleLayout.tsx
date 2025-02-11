interface Props {
  children: React.ReactNode;
};

export const ArticleLayout = ({ children }: Props) => {
  return (
    <div>
      <p>Article Layout</p>
      {children}
    </div>
  );
};