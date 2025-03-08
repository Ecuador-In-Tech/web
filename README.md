# **Ecuador In Tech**

**¡Únete a la meta-comunidad que impulsa el futuro de la tecnología en Ecuador!**

Somos un espacio colaborativo donde desarrolladores, diseñadores, emprendedores y entusiastas de la tecnología se unen para compartir conocimientos, construir proyectos y fomentar el crecimiento del ecosistema tecnológico ecuatoriano.

### **Nuestra Visión**

Ser la referencia en Ecuador para conectar, fortalecer y ampliar el impacto de las comunidades tecnológicas.

### **Nuestra Misión**

* **Unir fuerzas:** Crear puentes entre las diferentes comunidades tecnológicas.
* **Amplificar el impacto:** Potenciar el alcance y visibilidad de las iniciativas locales.
* **Crear oportunidades:** Generar espacios para el aprendizaje, networking y desarrollo profesional.

## ¿Cómo contribuir en este repositorio?

Este repositorio tiene instalado:

- Un linter, `biome`

Además de usar `pnpm` cómo administrador de paquetes para JS y amigos.

### Biome

`biome` es una alternativa a ESLint + Prettier, que está escrita en Rust. Es una excelente herramienta, que acorta considerablemente el tiempo de desarrollo. Aunque esta herramienta tiene un [paquete distribuído a través de `npm`](https://www.npmjs.com/package/@biomejs/biome), la invocación a través de `npm` / `pnpm` es un cuello de botella para su rendimiento.

### Instalación

#### pnpm

Preferimos una instalación global usando `pnpm`

```sh
pnpm install --global @biomejs/biome dprint
```

Sin embargo, tanto `biome` como `dprint` están declarados cómo dependencias de desarrollo dentro del `package.json`.

>[Estamos a la mitad de una implementación de Nix, como administrador de paquete.](https://github.com/Ecuador-In-Tech/web/pull/20)

### Desarrollo

La tubería UNIX intencionada para el desarrollo de este proyecto es:

```sh
pnpm check && pnpm dev
```

>Se está ponderando qué task runner se implementará para mejorar la experiencia de desarrollo

### **Valores**

* **Colaboración**
* **Diversidad**
* **Inclusión**
* **Sostenibilidad**

### **Cómo Participar**

* **Eventos:** Asiste a nuestros meetups, conferencias y talleres.
* **Proyectos:** Colabora en proyectos open-source o crea los tuyos.
* **Comunidades:** Únete a nuestros grupos de estudio y foros de discusión.
* **Mentoría:** Ofrece o recibe mentoría de otros miembros de la comunidad.
* **Contenido:** Comparte tus conocimientos a través de blog posts, tutoriales o podcasts.

### **Código de Conducta**

Creemos en un entorno seguro y respetuoso para todos. Adherimos a los siguientes principios:

* **Respeto:** Trata a todos con dignidad y cortesía.
* **Inclusión:** Fomenta un ambiente donde todos se sientan bienvenidos.
* **Colaboración:** Trabaja en equipo y comparte conocimientos.
* **Integridad:** Actúa con honestidad y ética.

[nuestro código de conducta](CODE_OF_CONDUCT.md)

### **Únete a Nosotros**

* **GitHub:** [\[Ecuador In Tech\]](https://github.com/Ecuador-In-Tech)

**¡Juntos construiremos un futuro tecnológico más próspero para Ecuador!*
