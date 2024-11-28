import Image from 'next/image'

interface ProductProps {
  title: string;
  description: string;
  imageUrl: string;
}

export default function Product({ title, description, imageUrl }: ProductProps) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden">
      <Image
        src={imageUrl}
        alt={title}
        width={500}
        height={500}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  )
}

