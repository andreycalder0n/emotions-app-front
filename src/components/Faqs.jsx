export default function Faqs() {
  return (
    <section className="w-full h-full md:px-20" id="faqs">
      <div className="w-full h-full px-6 flex flex-col space-y-3 pb-3 md:px-0">
        <p className="text-xl font-semibold text-primary mt-6 dark:text-white dark:font-extrabold">FAQS</p>
        <div>
          <p className="text-lg text-primary font-medium dark:text-white dark:font-bold">Política de Cancelación</p>
          <p className="text-md pt-2 ">Para estancias menores a una semana es importante avisar con 3 días de anticipación, de caso contario será sancionado.</p>
        </div>
        <div>
          <p className="text-lg text-primary font-medium dark:text-white dark:font-bold">Métodos de pago</p>
          <p className="text-md pt-2 ">Aceptamos distintos métodos de pago: VISA, MasterCard, American Express, Paypal y Binance</p>
        </div>
        <div>
          <p className="text-lg text-primary font-medium dark:text-white dark:font-bold">Mascotas</p>
          <p className="text-md pt-2 ">El tema de las mascotas dependerá directamente del anfitrión.</p>
        </div>
        <div>
          <p className="text-lg text-primary font-medium dark:text-white dark:font-bold">Información de Seguridad</p>
          <p className="text-md pt-2">Todas nuestras estancias cuentan con seguro en caso de accidentes</p>
        </div>
        <div>
          <p className="text-lg text-primary font-medium dark:text-white dark:font-bold">Estancias Largas</p>
          <p className="text-md pt-2">Contamos con estancias de hasta 3 meses, en este caso es requerido un anticipo con un monto del 50% del valor de la renta</p>
        </div>
      </div>
    </section>
  );
}
