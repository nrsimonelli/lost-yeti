import Image from 'next/image'
import yeti from '@/assets/yeti.png'

export default function Home() {
  return (
    <main className='p-24 flex flex-col justify-center items-center space-y-12'>
      <div>
        <p className={'text-4xl sm:text-6xl font-bold'}>Coming soon!</p>
      </div>
      <Image
        src={yeti}
        alt={'Lost yeti design company logo'}
        className={'w-auto h-[400px]'}
      />
    </main>
  )
}
