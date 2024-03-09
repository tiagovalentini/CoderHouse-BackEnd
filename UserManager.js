class UserManager {
  static cant = 0;
  static #array = [];
  create(data) {
    const Usuario = {
      id:
        UserManager.cant === 0
          ? 1
          : UserManager.#array[UserManager.#array.length - 1].id + 1,
      photo: data.photo || "Sin foto",
      email: data.email || "Email sin ingresar",
      password: data.password || "Contraseña sin ingresar",
      role: data.role || "Rol sin ingresar",
    };
    UserManager.#array.push(Usuario);
    UserManager.cant++;
  }
  read() {
    return UserManager.#array;
  }
}

const claseUsarios = new UserManager();

claseUsarios.create({
  photo:
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.es%2Ffotos-vectores-gratis%2Fpersonas&psig=AOvVaw1nVxzGciFkDPQ_N2e-p3vX&ust=1710104432714000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCNj__9CJ6IQDFQAAAAAdAAAAABAR",
  email: "Empresa123@yahoo.com",
  password: "monitoreo56",
  role: "Sistemas",
});

claseUsarios.create({
  photo:
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fconcepto.de%2Fpersona-2%2F&psig=AOvVaw1nVxzGciFkDPQ_N2e-p3vX&ust=1710104432714000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCNj__9CJ6IQDFQAAAAAdAAAAABAa",
  email: "EmpresaFinanzas@yahoo.com",
  password: "Economia777",
  role: "Finanzas",
});

console.log(claseUsarios.read());
