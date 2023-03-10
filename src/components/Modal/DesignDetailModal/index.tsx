import { Fragment } from 'react'
import Image from 'next/image'
import { Dialog, Transition } from '@headlessui/react'

import { Modal } from '..'

import { getIconsById } from '../../../utils/icons'

import { FormattedDesign } from '../../../types/Design'

interface DesignDetailModalProps {
  isOpen: boolean
  onClose: () => void
  design: FormattedDesign
}

export const DesignDetailModal = ({ isOpen, onClose, design }: DesignDetailModalProps) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <div className="flex flex-col gap-8 lg:flex-row">
      <Image src={design.images[0].webp} alt={design.title} width={600} height={600} />

      <Transition.Child
        as={Fragment}
        enter="transition duration-[300ms] ease-in"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
      >
        <div className="flex flex-1 flex-col gap-3 md:gap-6">
          <div className="flex flex-wrap gap-2">
            {design.categories.map(category => (
              <span
                key={category.id}
                className="flex items-center gap-1 rounded-md bg-brand-200 px-3 py-1 text-brand-600"
              >
                {getIconsById(category.id).icon} {category.name}
              </span>
            ))}
          </div>
          <Dialog.Title className="text-2xl font-bold text-slate-800 line-clamp-3 md:text-3xl">
            {design.title}
          </Dialog.Title>
          <span className="mr-auto rounded-md bg-brand-600 px-3 py-1 text-white">
            ID: {design.id}
          </span>
        </div>
      </Transition.Child>
    </div>
  </Modal>
)
