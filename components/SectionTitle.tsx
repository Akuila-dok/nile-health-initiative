// components/SectionTitle.tsx
type Props = {
    title: string;
    description?: string;
  };
  
  export default function SectionTitle({ title, description }: Props) {
    return (
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2" style={{ fontFamily: "'Wallpoet', cursive" }}>{title}</h2>
        {description && <p className="text-lg text-gray-600">{description}</p>}
      </div>
    );
  }
  