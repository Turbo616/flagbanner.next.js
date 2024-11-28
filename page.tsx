import Image from 'next/image'
import Header from './components/Header'
import Banner from './components/Banner'
import Product from './components/Product'
import ScrollToTop from './components/ScrollToTop'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <Banner />
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Product 
            title="Product 1" 
            description="This is a description for product 1." 
            imageUrl="/placeholder.svg"
          />
          <Product 
            title="Product 2" 
            description="This is a description for product 2." 
            imageUrl="/placeholder.svg"
          />
          <Product 
            title="Product 3" 
            description="This is a description for product 3." 
            imageUrl="/placeholder.svg"
          />
        </div>
      </section>
      <ScrollToTop />
    </main>
  )
}

