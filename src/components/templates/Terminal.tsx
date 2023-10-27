import { TerminalHeader } from '@/components/organisms';

export const Terminal = () => {
  return (
    <div className='w-full max-w-lg md:max-w-xl'>
      <div className='coding inverse-toggle px-2 sm:px-5 pt-4 shadow-lg text-gray-100 text-xs sm:text-sm font-mono subpixel-antialiased bg-gray-800 pb-6 rounded-lg leading-normal overflow-hidden'>
        <div className='top mb-2 flex'>
          <TerminalHeader />
        </div>
        <div className='mt-4 flex'>
          <span className='text-green-400'>jcoulaud:~$</span>
          <p className='flex-1 typing items-center pl-2'>cat me.json</p>
        </div>
        <div className='mt-1 flex'>
          <div className='flex-1 typing items-center'>
            <pre>{JSON}</pre>
          </div>
        </div>
      </div>
    </div>
  );
};

const JSON = `{
  "firstName": "Julien",
  "lastName": "Coulaud",
  "email": "hello",
  "job": {
    "role": "Senior Full Stack Engineer",
    "company": "Solcial"
  },
  "life": {
    "sideProject": "https://recapbot.xyz",
    "sport": "Tennis"
  }
}`;
