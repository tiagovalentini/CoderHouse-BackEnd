const fs = require("fs");
const crypto = require("crypto");

class UserManagerfs {
  constructor() {
    this.path = "./app/fs/archivo2.json";
    this.init();
  }
  init() {
    const exist = fs.existsSync(this.path);
    if (!exist) {
      fs.writeFileSync(this.path, JSON.stringify([], null, 2));
      console.log("archivo creado");
    }
  }
  async create(data) {
    try {
      if (!data) {
        const error = new Error("el objeto esta vacio");
        throw error;
      } else {
        const Usuario = {
          id: crypto.randomBytes(12).toString("hex"),
          photo: data.photo || "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpublicdomainvectors.org%2Fes%2Fvectoriales-gratuitas%2FFoto-de-perfil-por-defecto%2F44905.html&psig=AOvVaw1AQvfRN3L_pxtvVDosFiAi&ust=1710605101757000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCPDM3uLS9oQDFQAAAAAdAAAAABAS",
          email: data.email || "Email sin ingresar",
          password: data.password || "Contraseña sin ingresar",
          role: data.role || "Rol sin ingresar",
        };
        let array = await fs.promises.readFile(this.path, "utf-8");
        array = JSON.parse(array);
        array.push(Usuario);
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
      array = JSON.parse(array)
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
  async destroy(id){
    try {
        let array = await fs.promises.readFile(this.path, "utf-8");
        array = JSON.parse(array)
        if (array.length === 0) {
          const error = new Error("el objeto esta vacio");
          throw error;
        } else {
            const final = array.filter((each) => each.id !== id);
            await fs.promises.writeFile(this.path,JSON.stringify(final, null, 2))
            console.log('se ha eliminado el objeto')
            return final;
        }
      } catch (error) {
        throw error;
      }
  }
}

async function test() {
  try {
    const usuariosfs = new UserManagerfs();
    usuariosfs.create();
    usuariosfs.readOne();
    usuariosfs.read();
    usuariosfs.destroy();
  } catch (error) {
    console.log(error);
  }
}
test();
