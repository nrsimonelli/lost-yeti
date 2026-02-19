'use client'

import { Button } from '@/components/ui/button'

interface ContactButtonProps {
  className?: string
  children?: React.ReactNode
}

export function ContactButton({
  className,
  children = 'Contact us',
}: ContactButtonProps) {
  const handleClick = () => {
    window.open(
      'mailto:lostyetidesignco@gmail.com?subject=Contact%20from%20Lost%20Yeti%20Website',
      '_blank'
    )
  }

  return (
    <Button variant={'cta'} className={className} onClick={handleClick}>
      {children}
    </Button>
  )
}
