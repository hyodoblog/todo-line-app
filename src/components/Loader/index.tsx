import Image from 'next/image'

type Props = {
  text?: string
}

export const Loader: React.FC<Props> = ({ text }) => (
  <div className="fixed inset-0 mx-auto flex h-full w-full max-w-md items-center justify-center">
    <div className="flex flex-col justify-center text-center">
      <Image className="mx-auto" src="/LINE_spinner.svg" width={40} height={40} alt="" />
      {text && <div className="text-bold mt-4 text-base">{text}</div>}
    </div>
  </div>
)
