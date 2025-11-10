export const productos = await fetch("https://vmef1980.github.io/guatecocina/data/GuateCocina-v2.json")
  .then(res => res.json())
  .catch(err => {
    console.error("Error al cargar inventario:", err);
    return [];
  });

