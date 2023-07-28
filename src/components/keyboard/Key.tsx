import classnames from 'classnames'
import { ReactNode } from 'react'

import { REVEAL_TIME_MS } from '../../constants/settings'
import { getStoredIsHighContrastMode } from '../../lib/localStorage'
import { CharStatus } from '../../lib/statuses'
import { solution } from '../../lib/words'

type Props = {
  children?: ReactNode
  value: string
  width?: number
  status?: CharStatus
  onClick: (value: string) => void
  isRevealing?: boolean
}

export const Key = ({
  children,
  status,
  width = 40,
  value,
  onClick,
  isRevealing,
}: Props) => {
  const keyDelayMs = REVEAL_TIME_MS * solution.length
  const isHighContrast = getStoredIsHighContrastMode()

  const classes = classnames(
    'xxshort:h-8 xxshort:w-8 xxshort:text-xxs xshort:w-10 xshort:h-10 flex short:h-12 h-14 items-center justify-center rounded mx-[3px] text-xl font-bold font-2xl cursor-pointer select-none dark:text-white',
    {
      'transition ease-in': isRevealing,
      'bg-[rgb(211,214,218)] dark:bg-[rgb(128,131,132)] hover:bg-slate-300 active:bg-slate-400':
        !status,
      'absent bg-[rgb(120,124,126)] dark:bg-[rgb(58,58,60)] text-white  border-transparent dark:border-transparent':
        status === 'absent',

      'correct bg-[rgb(106,169,100)] dark:bg-[rgb(83,141,78)] text-white  border-transparent dark:border-transparent':
        status === 'correct' && !isHighContrast,

      'present bg-[rgb(201,180,88)] dark:bg-[rgb(180,159,58)] text-white  border-transparent dark:border-transparent':
        status === 'present' && !isHighContrast,
      'enter-key': value === 'ENTER' || value === 'DELETE',
    }
  )

  const styles = {
    transitionDelay: isRevealing ? `1.5s` : 'unset',
    width: `${width}px`,
  }

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    onClick(value)
    event.currentTarget.blur()
  }

  return (
    <button
      style={styles}
      aria-label={`${value}${status ? ' ' + status : ''}`}
      className={classes}
      onClick={handleClick}
    >
      {children || value}
    </button>
  )
}
