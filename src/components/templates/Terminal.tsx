import React from 'react';

import { TerminalHeader } from '@/components/organisms';

export const Terminal: React.FC = () => (
  <div className='w-full max-w-lg md:max-w-xl'>
    <div className='coding inverse-toggle px-2 sm:px-5 pt-4 shadow-lg text-gray-100 text-xs sm:text-sm font-mono subpixel-antialiased bg-gray-800 pb-6 rounded-lg leading-normal overflow-hidden'>
      <div className='top mb-2 flex'>
        <TerminalHeader />
      </div>
      <div className='mt-4 '>
        <span className='text-blue-400'>~/Work/Dev/jcoulaud</span>
        <p className='flex-1 typing items-center'>
          <span className='text-green-400'>❯ cat</span> me.json
        </p>
      </div>
      <div className='flex mt-1'>
        <div className='flex-1 typing items-center'>
          <pre className='whitespace-pre-wrap'>
            {'{'}
            {renderJsonObject(ME, 1)}
            {'}'}
          </pre>
        </div>
      </div>
    </div>
  </div>
);

/*
 * Utils
 */

interface JsonObject {
  [key: string]: any;
}

const renderJsonValue = (value: any, indentLevel: number): JSX.Element => {
  if (typeof value === 'object') {
    return (
      <>
        {'{'}
        {renderJsonObject(value, indentLevel + 1)}
        {'}'.padStart(indentLevel * 2 + 1)}
      </>
    );
  }
  return <span className='text-yellow-200'>&quot;{value}&quot;</span>;
};

const renderJsonObject = (obj: JsonObject, indentLevel = 1): JSX.Element => {
  const subIndent = ' '.repeat(indentLevel * 2);
  const entries = Object.entries(obj).map(([key, value], index, array) => (
    <div key={index}>
      <span className='text-cyan-200'>
        {subIndent}&quot;{key}&quot;
      </span>
      : {renderJsonValue(value, indentLevel)}
      {index !== array.length - 1 ? ',' : ''}
    </div>
  ));
  return <div>{entries}</div>;
};

/*
 * JSON object representing me
 */

const ME: JsonObject = {
  firstName: 'Julien',
  lastName: 'Coulaud',
  email: 'hello@thisDomain',
  job: {
    role: 'Senior Full Stack Engineer',
    company: 'MoonPay',
  },
  life: {
    sideProject: 'https://recapbot.xyz',
    sport: 'Tennis',
  },
};
