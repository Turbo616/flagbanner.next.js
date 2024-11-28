import Image from 'next/image'

export default function Banner() {
  return (
    <div className="relative h-96">
      <Image
        src="/placeholder.svg"
        alt="Banner"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
          Welcome to Our Website
        </h1>
      </div>
    </div>
  )
}

