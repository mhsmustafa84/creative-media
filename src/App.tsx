import { MediaCard } from './components/MediaCard';
import { data } from './data/staticData';
import { DataItem } from './types/staticData';

function App() {
  return (
    <div className='container mx-auto py-10 px-5 lg:px-12 lg:py-20'>
      <h1 className='w-7/12 mx-auto md:text-3xl lg:text-5xl text-center font-bold mb-10'>
        We make creative media that{' '}
        <span className='text-special'>adds value</span>
      </h1>
      <div className='flex flex-wrap'>
        {data.map((item: DataItem) => (
          <MediaCard key={item.title} item={item} />
        ))}
      </div>
      <div className='text-center mt-10'>
        <button className='uppercase bg-main text-white text-base font-bold px-14 py-2 rounded-md'>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;
