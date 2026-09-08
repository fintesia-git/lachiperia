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
        <div id="produccion">
          <h2 className="text-xl font-black text-[#201711]">Producción</h2>
          <p className="mt-3 text-sm leading-6 text-[#5d4d45]">
            Todo nuestro catálogo se elabora en un único sitio de producción 100% libre de gluten. Todo lo que ingresa a ese sitio también es libre de gluten, y la operación se verifica periódicamente mediante inspecciones y controles.
          </p>
        </div>
        <div id="fotografias">
          <h2 className="text-xl font-black text-[#201711]">Fotografías</h2>
          <p className="mt-3 text-sm leading-6 text-[#5d4d45]">
            Las fotografías de productos, local y producción publicadas en este sitio fueron tomadas por La Chipería y son material propio.
          </p>
        </div>
        <div id="faq">
          <h2 className="text-xl font-black text-[#201711]">Preguntas frecuentes</h2>
          <div className="mt-3 space-y-3 text-sm leading-6 text-[#5d4d45]">
            <details>
              <summary className="cursor-pointer font-bold text-[#201711]">¿Todo lo que elaboran es libre de gluten?</summary>
              <p className="mt-2">Sí. Todo el catálogo se elabora en nuestro único sitio de producción 100% libre de gluten.</p>
            </details>
            <details>
              <summary className="cursor-pointer font-bold text-[#201711]">¿Puedo retirar mi pedido?</summary>
              <p className="mt-2">Sí, el pick-up es gratis. El horario y los detalles de retiro se coordinan al confirmar el pedido.</p>
            </details>
            <details>
              <summary className="cursor-pointer font-bold text-[#201711]">¿Hacen envíos?</summary>
              <p className="mt-2">El delivery se coordina a convenir según cada pedido. Consultanos por WhatsApp para conocer la disponibilidad y el costo.</p>
            </details>
            <details>
              <summary className="cursor-pointer font-bold text-[#201711]">¿Dónde están?</summary>
              <p className="mt-2">Estamos en Tigre, Buenos Aires. La ubicación exacta está disponible en el mapa del inicio.</p>
            </details>
            <details>
              <summary className="cursor-pointer font-bold text-[#201711]">¿Cómo hago un pedido?</summary>
              <p className="mt-2">Por el momento, escribinos por WhatsApp para consultar productos, disponibilidad y condiciones del pedido. No realizamos ventas online desde este sitio.</p>
            </details>
            <details>
              <summary className="cursor-pointer font-bold text-[#201711]">¿Con cuánta anticipación tengo que pedir?</summary>
              <p className="mt-2">Depende del producto y la temporada. Consultanos por WhatsApp para conocer los plazos de anticipación.</p>
            </details>
            <details>
              <summary className="cursor-pointer font-bold text-[#201711]">¿Qué medios de pago aceptan?</summary>
              <p className="mt-2">Todos menos tarjeta de crédito directa.</p>
            </details>
          </div>
        </div>
      </div>
      <p className="mt-8 text-xs leading-5 text-[#796457]">
        El sitio no utiliza cookies propias de seguimiento. El mapa de Google es un servicio de terceros y puede procesar datos según sus propias políticas cuando se carga.
      </p>
      <p className="mt-4 text-xs leading-5 text-[#796457]">
        La información sobre precios, disponibilidad, anticipación, medios de pago, delivery y condiciones de cada pedido se confirma por WhatsApp antes de la compra.
      </p>
    </section>
  )
}

export default Legal