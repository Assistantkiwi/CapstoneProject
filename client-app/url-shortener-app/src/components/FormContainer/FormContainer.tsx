import * as React from 'react';

type IFormContainerProps = object

const FormContainer: React.FunctionComponent<IFormContainerProps> = () => {
  return (
    <div className='container mx-auto p-2'>
        <div className='bg-slate-400 my-8 rounded-xl bg-cover bg-center'>
            <div className='w-full h-full rounded-xl p-20 backdrop-brightness-50'>
            <h2 className='text-white text-4xl text-center pb-4'>URL Shortener</h2>
            <p className='text-white text-center pb-2 text-xl font-extralight'>
                Link too long?. Paste!!!
            </p>
            <p className='text-white text-center pb-4 text-sm font-extralight'>
               Free tool to shorten your URL.  Use URLShortener to create a simpler link.
            </p>
            <form>
                <div className='flex'>
                    <div className='relative w-full'>
                        <div className='absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none text-slate-800'>
                            urlshortener.link /
                        </div>
                        <input type='text' placeholder='Add your link' required className='block w-full p-4 ps-36 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500' />
                        <button type='submit' className=''></button>
                    </div>
                </div>
            </form>
            </div>
        </div>
    </div>
  );
};

export default FormContainer;
