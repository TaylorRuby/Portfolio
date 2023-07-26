import Link from 'next/link';
import Card from '@/common/components/elements/Card';
import Image from '@/common/components/elements/Image';
import Tooltip from '@/common/components/elements/Tooltip';
import { STACKS } from '@/common/constant/stacks';
import { ProjectItemProps } from '@/common/types/projects';

const ProjectCard = ({
  title,
  link,
  image,
  stacks,
  is_featured,
}: ProjectItemProps) => {
  return (
    <Link href={link}>
      <Card className='relative border dark:bg-neutral-800 border-neutral-200 dark:border-neutral-800 lg:hover:scale-[102%] cursor-pointer'>
        {is_featured && (
          <div className='absolute top-0 right-0 bg-emerald-300 text-emerald-950 text-[13px] font-medium py-1 px-2 rounded-bl-xl rounded-tr-xl z-[2]'>
            Featured
          </div>
        )}
        <Image
          src={image}
          width={400}
          height={200}
          alt={title}
          className='rounded-t-xl h-48 object-cover object-left'
        />
        <div className='p-5 space-y-2'>
          <div className='flex justify-between'>
            <div className='text-lg font-sora cursor-pointer text-neutral-700 dark:text-neutral-300 lg:hover:text-teal-800 dark:hover:text-teal-400 transition-all duration-300'>
              {title}
            </div>
          </div>
          <div className='flex flex-wrap items-center gap-3 pt-2'>
            {stacks?.map((stack: string, index: number) => (
              <div key={index}>
                <Tooltip title={stack}>{STACKS[stack]}</Tooltip>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default ProjectCard;
