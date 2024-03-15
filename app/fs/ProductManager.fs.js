const fs = require("fs");
const crypto = require("crypto");

class ProductManagerfs {
  constructor() {
    this.path = "./app/fs/archivo1.json";
    this.init();
  }
  init() {
    const exist = fs.existsSync(this.path);
    if (!exist) {
      fs.writeFileSync(this.path, JSON.stringify([], null, 2));
      console.log("archivo creado");
    }else{
        console.log('el archivo ya esta creado')
    }
  }
  async create(data) {
    try {
      if (!data) {
        const error = new Error("el objeto esta vacio");
        throw error;
      } else {
        const Prodcuto = {
          id: crypto.randomBytes(12).toString("hex"),
          photo:
            data.photo ||
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftienda.dianaperfumerias.com%2Fproductos%2F%3Fcodigo_articulo%3D7796851813083&psig=AOvVaw0nFc7h5Fp1fbfMgTYW1Ydl&ust=1710605223612000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCNCx_5zT9oQDFQAAAAAdAAAAABAE",
          title: data.title || "Titulo sin ingresar",
          category: data.category || "Categoria sin ingresar",
          price: data.price || "Precio sin ingresar",
          stock: data.stock > 1 ? data.stock : "sin stock",
        };
        let array = await fs.promises.readFile(this.path, "utf-8");
        array = JSON.parse(array);
        array.push(Prodcuto);
        array = JSON.stringify(array, null, 2);
        await fs.promises.writeFile(this.path, array);
      }
    } catch (error) {
      throw error;
    }
  }
  async readOne(id) {
    try {
      let array = await fs.promises.readFile(this.path, "utf-8");
      array = JSON.parse(array);
      const one = array.find((each) => each.id === id);
      if (!one) {
        throw new Error("no se encontro el id");
      } else {
        console.log(one);
        return one;
      }
    } catch (error) {
      throw error;
    }
  }
  async read() {
    try {
      let array = await fs.promises.readFile(this.path, "utf-8");
      array = JSON.parse(array);
      if (array.length === 0) {
        const error = new Error("el objeto esta vacio");
        throw error;
      } else {
        console.log(array);
        return array;
      }
    } catch (error) {
      throw error;
    }
  }
  async destroy(id) {
    try {
      let array = await fs.promises.readFile(this.path, "utf-8");
      array = JSON.parse(array);
      if (array.length === 0) {
        const error = new Error("el objeto esta vacio");
        throw error;
      } else {
        const final = array.filter((each) => each.id !== id);
        await fs.promises.writeFile(this.path, JSON.stringify(final, null, 2));
        console.log("se ha eliminado el objeto");
        return final;
      }
    } catch (error) {
      throw error;
    }
  }
}

async function test() {
  try {
    const productosfs = new ProductManagerfs();
    productosfs.create({
        title: "Lampara",
        photo:
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.boutiquedeluz.com%2Fproducto%2Flampara-colgante-onion-disponible-en-varios-colores-y-tamanos%2F&psig=AOvVaw1LyobtV4K254mWE4xdlAtq&ust=1710104163467000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCIj629CI6IQDFQAAAAAdAAAAABAI",
        category: "Hogar",
        price: 30000,
        stock: 70000,
      });
    
  } catch (error) {
    console.log(error);
  }
}
test();
