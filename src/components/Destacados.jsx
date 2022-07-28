export default function Destacados() {
  return (
    <section className="px-2 h-full w-full md:px-20" id="rentas_destacadas">
      <p className="text-2xl font-semibold text-primary pb-2 mt-6 dark:text-white">Rentas destacadas</p>
      <div className="w-full h-full flex flex-col space-y-4 items-center justify-center md:grid md:grid-cols-5 md:gap-4 md:p-5 md:space-y-0 md:px-0">
        <div className="w-full h-96 bg-europe bg-cover bg-center rounded-xl md:row-span-2 md:h-full md:col-span-2 md:text-right">
          <p className="Card--content__title">Chicago</p>
          <p className="Card--content__description">Ciudad muy bonita</p>
        </div>

        <div className="w-full h-96 bg-bali bg-cover bg-center rounded-xl md:row-span-1 md:col-span-3 md:text-right">
          <p className="Card--content__title">Bali</p>
          <p className="Card--content__description">La mejor ciudad y muy bonita</p>
        </div>

        <div className="w-full h-96 bg-yosemite bg-center bg-cover rounded-xl md:row-span-1 md:col-span-3 md:text-right">
          <p className="Card--content__title">Europa</p>
          <p className="Card--content__description">La mejor ciudad y muy bonita</p>
        </div>
      </div>
    </section>
  );
}
