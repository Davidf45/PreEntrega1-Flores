import cart from "../assets/CARRITO.png";

const CartWidget = () => {
    return (
        <>
            <button type="button" className="btn btn-light position-relative">
                <img src={cart} alt="Carrito" width={50} />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-white text-black">1</span>
            </button>
        </>
    )
}

export default CartWidget;