import React from 'react'

const Legal = () => {
  return (
    <section id="legal" className="mx-auto max-w-7xl px-4 pb-16 pt-4 sm:px-6 lg:px-8">
      <div className="grid gap-6 border-t border-[#dfcdbd] pt-10 md:grid-cols-3">
        <div id="privacidad">
          <h2 className="text-xl font-black text-[#201711]">Política de privacidad</h2>
          <p className="mt-3 text-sm leading-6 text-[#5d4d45]">
            Usamos el nombre, email y mensaje enviados en el formulario únicamente para responder consultas. No pedimos datos de pago ni información innecesaria. El formulario se procesa mediante el endpoint configurado por el sitio y no se usa para publicidad.
          </p>
        </div>
        <div id="condiciones">
          <h2 className="text-xl font-black text-[#201711]">Términos y condiciones</h2>
          <p className="mt-3 text-sm leading-6 text-[#5d4d45]">
            Este sitio muestra productos y canales de contacto; no realiza cobros ni confirma pedidos automáticamente. Disponibilidad, precios, entrega y condiciones se acuerdan antes de confirmar cada pedido por WhatsApp.
          </p>
        </div>
        <div id="cambios">
          <h2 className="text-xl font-black text-[#201711]">Cambios y reclamos</h2>
          <p className="mt-3 text-sm leading-6 text-[#5d4d45]">
            Como no hay checkout online, cualquier cambio, cancelación o reclamo debe consultarse antes de confirmar el pedido. Escribinos por WhatsApp para revisar cada caso y encontrar una solución.
          </p>
        </div>
        <div id="cookies">
          <h2 className="text-xl font-black text-[#201711]">Cookies y servicios externos</h2>
          <p className="mt-3 text-sm leading-6 text-[#5d4d45]">
            No usamos cookies propias de análisis o publicidad. El mapa de Google y los enlaces a servicios externos pueden procesar datos cuando los utilizás, según las políticas de cada proveedor.
          </p>
        </div>
      </div>
      <p className="mt-8 text-xs leading-5 text-[#796457]">
        El sitio no utiliza cookies propias de seguimiento. El mapa de Google es un servicio de terceros y puede procesar datos según sus propias políticas cuando se carga. La identidad legal, domicilio constituido y datos fiscales deben ser completados por la titular del negocio antes de usar este sitio como única referencia legal.
      </p>
    </section>
  )
}

export default Legal