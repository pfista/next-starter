import Link from 'next/link'

import { ArrowIcon } from 'components/icons'

export const revalidate = 60

export default function Home() {
  return (
    <>
      <section>
        <h1 className='font-bold text-3xl font-serif'>Michael Pfister</h1>
        <p className='my-5 max-w-[460px] text-neutral-800 dark:text-neutral-200'>
          Hey, I&apos;m Michael. I&apos;m the founder at <Link href='https://dawnpatrol.llc'>dawn patrol</Link>, a
          product studio and consultancy, building things like{' '}
          <Link href='https://sharecaster.xyz'>sharecaster.xyz</Link>,{' '}
          <Link href='https://farcast.club'>farcast.club</Link>, and <Link href='/projects'>more</Link>.
        </p>
        <p className='my-5 max-w-[460px] text-neutral-800 dark:text-neutral-200'>
          In a past life I was VP Product at <Link href='https://nylas.com'>nylas</Link> and have worked in a variety of
          roles across product, engineering, and customer success. I previously co-founded{' '}
          <Link href='https://gest.co'>gest.co</Link>, a human computer interaction company.
        </p>
        <ul className='flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-500 dark:text-neutral-400'>
          <li>
            <a
              className='flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all'
              rel='noopener noreferrer'
              target='_blank'
              href='https://warpcast.com/pfista/'
            >
              <ArrowIcon />
              <p className='h-7'>follow me on warpcast</p>
            </a>
          </li>
          <li>
            <a
              className='flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all'
              rel='noopener'
              target='_blank'
              href='https://leerob.io?ref=michaelpfister.com'
            >
              <ArrowIcon />
              <p className='h-7'>site by leerob.io</p>
            </a>
          </li>
        </ul>
      </section>
    </>
  )
}
