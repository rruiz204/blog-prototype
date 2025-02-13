interface Props {
  name: string;
  example?: string;
  description: string;
}

export const LanguageViceItem = ({ name, description }: Props) => {
  return (
    <div>
      <div>
        <p className="font-inter-semi text-2xl underline mb-2">{name}</p>
        <p>{description}</p>
      </div>

      <div>

      </div>
    </div>
  );
};