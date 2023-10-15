import { DataItem } from '../types/staticData';
import { formatParagraph } from '../utils/formatPragrapgh';

interface IMediaCardProps {
  item: DataItem;
}

export function MediaCard({ item }: IMediaCardProps) {
  const hasSecondImage = !!item.image2;
  return (
    <div className='w-full md:w-1/2 lg:w-1/3 flex px-3 py-5'>
      <div className='w-[40%] overflow-hidden'>
        <img
          className={`w-full ${hasSecondImage ? 'h-1/2' : 'h-full'}`}
          src={item.image}
          alt={item.title}
        />
        {hasSecondImage && (
          <img className='w-full h-1/2' src={item.image2} alt={item.title} />
        )}
      </div>
      <div className='w-[60%] px-4 py-5 lg:py-8 bg-white rounded-e-md'>
        <h3 className='text-secondary lg:text-xl font-bold mb-2'>
          {item.title}
        </h3>
        {!!item.subItems?.length && (
          <ul className='list-disc list-inside'>
            {item.subItems.map((subItem) => (
              <li key={subItem} className='text-listDisc'>
                <span className='text-secondary text-xs lg:text-sm'>
                  {subItem}
                </span>
              </li>
            ))}
          </ul>
        )}
        <p className='mt-2 text-xs lg:text-sm whitespace-pre-line'>
          {formatParagraph(item.description)}
        </p>
      </div>
    </div>
  );
}
