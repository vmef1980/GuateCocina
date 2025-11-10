let productos = [];
try {
  const res = await fetch("../data/GuateCocina-v2.json");
  productos = await res.json();
} catch (err) {
  console.error("Error al cargar inventario:", err);
}
export { productos };
