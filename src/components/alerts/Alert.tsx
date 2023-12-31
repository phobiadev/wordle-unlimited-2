import { Transition } from '@headlessui/react'
import classNames from 'classnames'
import { Fragment } from 'react'

type Props = {
  isOpen: boolean
  message: string
  variant?: 'success' | 'error'
  topMost?: boolean
}

export const Alert = ({
  isOpen,
  message,
  variant = 'error',
  topMost = false,
}: Props) => {
  const classes = classNames(
    'fixed z-20 top-14 left-1/2 transform -translate-x-1/2 max-w-sm rounded-[5px] pointer-events-auto text-white bg-black dark:text-black dark:bg-white overflow-hidden'
  )

  return (
    <Transition
      show={isOpen}
      as={Fragment}
      enter="ease-out duration-300 transition"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition ease-in duration-100"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className={classes}>
        <div className="p-2">
          <p className="text-center text-sm font-medium">{message}</p>
        </div>
      </div>
    </Transition>
  )
}
