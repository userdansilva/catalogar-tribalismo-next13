import Image from 'next/image'

import { Design } from './Design'

import notResultImage from '../../../public/images/no_result.svg'

import { FormattedDesign } from '../../types/Design'

interface DesingnsProps {
  data: FormattedDesign[]
}

export const Designs = ({ data: designs }: DesingnsProps) => {
  const isDesignsEmpty = designs.length === 0

  return (
    <main className="mt-12">
      <div className="mx-auto max-w-[1760px] px-8">
        {isDesignsEmpty ? (
          <div className="flex items-center justify-center text-2xl">
            <div className="w-60">
              <Image src={notResultImage} alt="Imagem de mulher procurando algo" />
            </div>
            Nenhum item foi encontrado nessa busca!
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {designs.map(design => (
              <Design data={design} key={design.id} />
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
