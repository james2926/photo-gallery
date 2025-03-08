import Image from "next/image";

interface WorkCardProps {
  title: string;
  imageSrc: string;
  description: string;
}

const WorkCard: React.FC<WorkCardProps> = ({
  title,
  imageSrc,
  description,
}) => {
  return (
    <div className="relative w-full overflow-hidden rounded-xl shadow-lg">
      <div className="relative">
        <Image
          src={imageSrc}
          alt={title}
          width={800}
          height={800}
          className="w-full object-cover"
          unoptimized
        />
        <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
      </div>
      <div className="absolute bottom-8 left-8 right-8 text-white w-full flex items-start justify-between pr-16">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm opacity-75">{description}</p>
      </div>
    </div>
  );
};

export default WorkCard;
