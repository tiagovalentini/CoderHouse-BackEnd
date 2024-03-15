class ProductManager {
  static cant = 0;
  static #array = [];
  create(data) {
    try {
      const Producto = {
        id:
          ProductManager.cant === 0
            ? 1
            : ProductManager.#array[ProductManager.#array.length - 1].id + 1,
        title: data.title || "Titulo sin ingresar",
        photo: data.photo || "Sin foto",
        category: data.category || "Categoria sin ingresar",
        price: data.price || "Precio sin ingresar",
        stock: data.stock > 1 ? data.stock : "sin stock",
      };
      ProductManager.#array.push(Producto);
      ProductManager.cant++;
    } catch (error) {
      throw error;
    }
  }
  readOne(id) {
    try {
      one = ProductManager.#array.find((each) => each.id === id);
      console.log(one);
    } catch (error) {
      throw error;
    }
  }
  read() {
    return ProductManager.#array;
  }
  destroy(id) {
    try {
      one = ProductManager.#array.find((each) => each.id === id);
      ProductManager.#array.remove(one);
      console.log("el archivo fue eliminado");
    } catch (error) {
      throw error;
    }
  }
}

const claseProductos = new ProductManager();

claseProductos.create({
  title: "Lapicera",
  photo:
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcasalalapicera.com%2Fproductos%2Flapicera-de-pluma-kaweco-student-azul%2F&psig=AOvVaw0M3BLvAlB-8Up292MNyW1k&ust=1710103919960000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCNj0x9yH6IQDFQAAAAAdAAAAABAn",
  category: "Escolar",
  price: 1500,
  stock: 4000,
});

claseProductos.create({
  title: "Lampara",
  photo:
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.boutiquedeluz.com%2Fproducto%2Flampara-colgante-onion-disponible-en-varios-colores-y-tamanos%2F&psig=AOvVaw1LyobtV4K254mWE4xdlAtq&ust=1710104163467000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCIj629CI6IQDFQAAAAAdAAAAABAI",
  category: "Hogar",
  price: 30000,
  stock: 70000,
});

claseProductos.create({
  title: "Cartas Españolas",
  photo:
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Farticulo.mercadolibre.com.ar%2FMLA-1143738520-cartas-naipes-baraja-espanola-50-cartas-timba-_JM&psig=AOvVaw17JzLh5RCgKs-VyoZOfQHh&ust=1710104191047000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCICr692I6IQDFQAAAAAdAAAAABAF",
  category: "Juego de mesa",
  price: 2700,
  stock: 200,
});

claseProductos.create({
  title: "Ventilador",
  photo:
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tienda.electrolux.com.ar%2Fventilador_de_pie_electrolux_vp20c_95w_3_velocidades_con_ionizador%2Fp&psig=AOvVaw39OW-syUUEjdwWegg6gSJR&ust=1710104296870000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCOizpZCJ6IQDFQAAAAAdAAAAABAE",
  category: "Refrigeracion",
  price: 40000,
  stock: 6000,
});

claseProductos.create({
  title: "Espejo",
  photo:
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.adahome.com.ar%2Fproductos%2Fespejo-cuerpo-completo%2F&psig=AOvVaw2JKt4oHIki4brt4MvKmvYu&ust=1710104319973000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCMi3opuJ6IQDFQAAAAAdAAAAABAT",
  category: "Hogar",
  price: 80000,
  stock: 80000,
});

console.log(claseProductos.read());
