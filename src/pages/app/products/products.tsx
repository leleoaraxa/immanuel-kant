import { ProductsCard } from './products-card'
import { ProductsFilter } from './products-filter'

export function ProductsPage() {
  return (
    <main>
      <header className="mb-10">
        <h2 className="mb-2 font-bold text-title-md text-gray-500">
          Seus produtos
        </h2>

        <p className="text-body-sm text-gray-300">
          Acesse gerencie a sua lista de produtos à venda
        </p>
      </header>

      <div className="relative grid grid-cols-[330px_1fr] items-start gap-6">
        <div className="sticky top-4 rounded-2.5xl bg-white p-6">
          <ProductsFilter />
        </div>

        <div className="grid grid-cols-2 gap-4">
          {Array.from({ length: 1 }).map((_, index) => (
            <ProductsCard
              key={index}
              product={{
                category: 'Vestuário',
                description: 'Aqui vai a imagem de um produto qualquer.',
                img: 'https://plus.unsplash.com/premium_photo-1661963780999-6712fcb46eec?q=80&w=2102&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                status: 'advised',
                title: 'Um produto qualquer',
                value: 578650,
              }}
            />
          ))}
        </div>
      </div>
    </main>
  )
}
