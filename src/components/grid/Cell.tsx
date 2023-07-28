import classnames from 'classnames'

import { REVEAL_TIME_MS } from '../../constants/settings'
import { getStoredIsHighContrastMode } from '../../lib/localStorage'
import { CharStatus } from '../../lib/statuses'

type Props = {
  value?: string
  status?: CharStatus
  isRevealing?: boolean
  isCompleted?: boolean
  position?: number
}

export const Cell = ({
  value,
  status,
  isRevealing,
  isCompleted,
  position = 0,
}: Props) => {
  const isFilled = value && !isCompleted
  const shouldReveal = isRevealing && isCompleted
  const animationDelay = `${position * REVEAL_TIME_MS}ms`
  const isHighContrast = getStoredIsHighContrastMode()

  const classes = classnames(
    'xxshort:w-11 xxshort:h-11 short:text-2xl short:w-14 short:h-14 w-[62px] h-[62px]  border-solid border-2 flex items-center justify-center mx-0.5 text-4xl font-bold dark:text-white',
    {
      'border-gray-300 dark:border-[rgb(58,58,60)]': !status,
      'border-gray-400 dark:border-[#565758]': value && !status,

      'absent bg-[rgb(120,124,126)] dark:bg-[rgb(58,58,60)] text-white  border-transparent dark:border-transparent':
        status === 'absent',

      'correct bg-[rgb(106,169,100)] dark:bg-[rgb(83,141,78)] text-white  border-transparent dark:border-transparent':
        status === 'correct' && !isHighContrast,

      'present bg-[rgb(201,180,88)] dark:bg-[rgb(180,159,58)] text-white  border-transparent dark:border-transparent':
        status === 'present' && !isHighContrast,

      'cell-fill-animation': isFilled,
      'cell-reveal': shouldReveal,
    }
  )

  return (
    <div className={classes} style={{ animationDelay }}>
      <div className="letter-container" style={{ animationDelay }}>
        {value}
      </div>
    </div>
  )
}
