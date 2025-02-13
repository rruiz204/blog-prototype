interface Props {
  name: string;
  example?: string;
  description: string;
}

export const LnaguageViceItem = ({ name, description }: Props) => {
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