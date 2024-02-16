import CardPedido from "./CardPedido"
import arrayEjemplo from "./data/pedidos"
CardPedido
const PanelPrincipal = () => {
  return (
    <main className="max-w-screen-2xl">
    <h1 className="text-indigo-700 font-bold text-5xl mb-10">Gestiona tus pedidos</h1> 
    <section className="grid gap-3 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3">{/*aqui sera el grid para cada una de las tarjetas de pedidos*/}
       {/*zona de geenracion de los pedidos */}
       {arrayEjemplo.map((pedido,index)=>(
            <CardPedido key={index} pedido={pedido}/>
        )
        )}
    </section>
    </main>
  )
}

export default PanelPrincipal
