import Image from 'next/image'
import Link from 'next/link'

import logo from '../../../public/images/logo-black.svg'

export const Footer = () => {
  return (
    <footer className="mt-16 border-t-[1px] border-slate-100 py-8">
      <div className="mx-auto flex max-w-[1760px] flex-col items-start justify-between gap-8 px-8 md:flex-row md:items-center">
        <Image src={logo} alt="Logo da Tribalismo" />
        <div>
          <p>Tribalismo | Produtos Personalizados</p>
          <p>Milhares de opções de artes e frases para você e seu grupo se inspirarem!</p>
        </div>
        <Link href="https://www.tribalismo.com.br/">
          <a
            target="_blank"
            className=" whitespace-nowrap rounded-lg bg-brand-600 p-4 font-[600] text-white"
          >
            Compre agora
          </a>
        </Link>
      </div>
    </footer>
  )
}
