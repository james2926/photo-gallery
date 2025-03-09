import { motion } from "framer-motion";
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
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative w-full overflow-hidden rounded-xl shadow-lg"
    >
      <div className="relative">
        <Image
          src={imageSrc}
          alt={title}
          width={800}
          height={800}
          className="w-full object-cover md:h-[800px] h-[560px]"
          unoptimized
        />
        <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
      </div>
      <div className="absolute bottom-8 md:left-8 left-4 md:right-8 right-4 text-white w-full flex md:flex-row flex-col items-start justify-between pr-16">
        <h3 className="md:text-[30px] text-2xl font-semibold">{title}</h3>
        <p className="md:text-2xl text-base opacity-80 text-gray-500">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default WorkCard;
