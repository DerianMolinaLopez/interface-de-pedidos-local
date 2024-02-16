
function generacionColores(){
    let colores = ["bg-red-500","bg-yellow-500","bg-green-500","bg-blue-500","bg-indigo-500","bg-purple-500","bg-pink-500"]
    let color = colores[Math.floor(Math.random() * colores.length)]
    return color

}

const CardPedido = ({pedido}) => {
    const{id,nombre,productos} = pedido
    const color = generacionColores()
      return (
    <div className="bg-white rounded-lg shadow-2xl">
        <div className= {`${color} h-auto rounded-lg w-full p-2`}>
        <span className="font-bold text-white text-2xl">Pedido:{id}</span>
        </div>
        <div className="flex flex-col pb-2">
          <article>
            <h2 className="font-bold mb-2 p-2 ">{nombre} </h2>
            <div>
                {productos.map((producto,index) => (
                    <p className="border-t-2 my-2" key={index}>{producto.nombre} <span>{producto.cantidad}</span></p>
                ))}
            </div>
            <button className={`text-white w-full text-center border-t-2 ${color} p-1 rounded-2xl mt-2`}>Ver detalle</button>
          </article>

        </div>
      
    </div>
  )
}

export default CardPedido


