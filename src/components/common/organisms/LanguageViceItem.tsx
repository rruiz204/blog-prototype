interface Props {
  name: string;
  example?: string;
  description: string;
}

export const LanguageViceItem = ({ name, description, example }: Props) => {
  return (
    <div className="flex flex-col gap-3">
      <div>
        <p className="font-inter-semi text-2xl underline mb-2">{name}</p>
        <p>{description}</p>
      </div>

      <div>
        <img src={example} className="w-full" />
      </div>
    </div>
  );
};