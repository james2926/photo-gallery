import { motion } from "framer-motion";
import Image from "next/image";

interface WorkCardProps {
  src: string;
  category: string;
  title: string;
}

const WorkCard: React.FC<WorkCardProps> = ({ src, category, title }) => {
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
          src={src}
          alt={title}
          width={800}
          height={800}
          className="w-full object-cover md:h-[800px] h-[560px]"
          unoptimized
        />
        <div className="absolute inset-x-0 bottom-0 h-150 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </div>
      <div className="absolute bottom-8 md:left-8 left-4 md:right-8 right-4 text-white w-full flex md:flex-row flex-col items-start justify-between pr-16">
        <h3 className="md:text-[30px] text-2xl font-semibold">{title}</h3>
        <p className="md:text-2xl text-base opacity-80 text-gray-500">
          {category}
        </p>
      </div>
    </motion.div>
  );
};

export default WorkCard;
