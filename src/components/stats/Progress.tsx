import classNames from 'classnames'

type Props = {
  index: number
  size: number
  label: string
  isCurrentDayStatRow: boolean
}

export const Progress = ({
  index,
  size,
  label,
  isCurrentDayStatRow,
}: Props) => {
  const currentRowClass = classNames(
    'text-xs font-medium text-blue-100 text-center p-0.5',
    {
      'bg-[rgb(105,168,100)] dark:bg-[rgb(83,141,78)]': isCurrentDayStatRow,
      'bg-[rgb(120,124,126)] dark:bg-[rgb(75,85,99)]': !isCurrentDayStatRow,
    }
  )
  return (
    <div className="justify-left m-1 flex">
      <div className="w-2 items-center justify-center">{index + 1}</div>
      <div className="ml-2 w-full">
        <div style={{ width: `${8 + size}%` }} className={currentRowClass}>
          {label}
        </div>
      </div>
    </div>
  )
}
