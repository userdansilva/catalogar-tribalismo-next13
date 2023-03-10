import { Fragment, ReactChild } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { FiX } from 'react-icons/fi'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: ReactChild
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => (
  <Transition show={isOpen}>
    <Dialog onClose={() => onClose()} className="relative z-50">
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-slate-900/30" aria-hidden="true" />
      </Transition.Child>

      <Transition.Child
        as={Fragment}
        enter="transition duration-300 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-200 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="relative mx-auto max-h-full max-w-[1120px] overflow-x-scroll rounded-xl bg-white p-10 lg:min-w-full xl:min-w-[1120px]">
            {children}
            <button
              onClick={() => onClose()}
              className="absolute top-3 right-3 outline-brand-600 focus:text-brand-600 md:top-6 md:right-6"
            >
              <FiX size={24} />
            </button>
          </Dialog.Panel>
        </div>
      </Transition.Child>
    </Dialog>
  </Transition>
)
