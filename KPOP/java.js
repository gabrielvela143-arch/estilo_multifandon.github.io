let cart = [];
let cartCount = 0;

function addToCart(product, price) {
  cart.push({ product, price });
  cartCount++;
  document.getElementById('cart-count').innerText = cartCount;
  alert(`Agregado: ${product} - Bs. ${price}`);
}

document.getElementById('buy-button').addEventListener('click', () => {
  if (cart.length === 0) {
    alert("Tu carrito está vacío.");
    return;
  }

  // mensaje inicial predeterminado
  let mensaje = "Hola, quiero hacer este pedido:%0A";
  let total = 0;

  // recorrer carrito
  cart.forEach((item) => {
    mensaje += `• ${item.product} - Bs. ${item.price}%0A`;
    total += item.price;
  });

  mensaje += `%0A🔹 Total: Bs. ${total.toFixed(2)}`;

  // tu número real de WhatsApp
  const numeroWhatsApp = "59162049683";  
  const url = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;

  window.open(url, '_blank');
});
