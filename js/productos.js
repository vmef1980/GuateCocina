export const productos = fetch("../data/GuateCocina-v2.json")
  .then(res => res.json())
  .catch(err => {
    console.error("Error al cargar inventario:", err);
    return [];
  });

