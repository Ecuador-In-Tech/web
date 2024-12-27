# **Ecuador In Tech**

**¡Únete a la meta-comunidad que impulsa el futuro de la tecnología en Ecuador!**

Somos un espacio colaborativo donde desarrolladores, diseñadores, emprendedores y entusiastas de la tecnología se unen para compartir conocimientos, construir proyectos y fomentar el crecimiento del ecosistema tecnológico ecuatoriano.

## **Nuestra Visión**

Ser la referencia en Ecuador para conectar, fortalecer y ampliar el impacto de las comunidades tecnológicas.

## **Nuestra Misión**

* **Unir fuerzas:** Crear puentes entre las diferentes comunidades tecnológicas.
* **Amplificar el impacto:** Potenciar el alcance y visibilidad de las iniciativas locales.
* **Crear oportunidades:** Generar espacios para el aprendizaje, networking y desarrollo profesional.

## ¿Cómo contribuir en este repositorio?

Usamos `nix` para gestionar las dependencias de este repositorio. Específicamente, el archivo `shell.nix`.

El flujo de trabajo intencionado es invocar `nix-shell` en el directorio raíz de este repositorio. Luego de aquello, se descargarán e iniciarán las dependencias declaradas en el archivo mencionado.

Estas son:

- `pnpm`, wrapper alrededor de npm, enfocado en el rendimiento.
- `biome`, un linter y formatter escrito en Rust, diseñado para ser compatible con ESLint y Prettier.

Actualmente (2024-12-09T22:47:06-03:00), tenemos esta implementación cómo prueba. En caso de que los voluntarios se acostumbren a este flujo de trabajo, se expanderá el toolkit para diseñar una tubería de Integración Continua que sea desplegable localmente.

### Instalando Nix, administrador de paquetes

#### Arch Linux

``` sh
sudo pacman -Syu && \
sudo pacman -S nix
```

#### Debian (Bookworm)

``` sh
sudo apt update && \
sudo apt install nix-setup-systemd
```

> # ATENCIÓN (!!!)
>Se han reportado [inconvenientes en la instalación de nix a través
de apt](https://github.com/Ecuador-In-Tech/web/pull/20).
> La solución es agregar el usuario al grupo
`nix-users`(https://discourse.nixos.org/t/nix-var-nix-daemon-socket-socket-permission-denied/39142);
en caso la instalación `nix-setup-systemd` no haya funcionado
correctamente.
>En caso que el problema persista, por favor, instale de acuerdo a las
instrucciones oficiales.

#### Otros

En caso tu distribución, o sistema operativo, no soporta nativamente Nix, el administrador de paquete, puedes [instalar `nix` con las instrucciones oficiales](https://nixos.org/download/).

> # ATENCIÓN (!!!)
>La documentación oficial asume bash como shell; y luego, hace
una tubería UNIX hacia el shell, usando curl. **ESTO ES CONSIDERADO
INSEGURO**. Revisa todo script antes de ejecutarlo.

Alternativamente, estamos considerando usar un dockerfile para inicializar el shell con las dependencias. Envíen issues y PR.

## **Valores**

* **Colaboración**
* **Diversidad**
* **Inclusión**
* **Sostenibilidad**

## **Cómo Participar**

* **Eventos:** Asiste a nuestros meetups, conferencias y talleres.
* **Proyectos:** Colabora en proyectos open-source o crea los tuyos.
* **Comunidades:** Únete a nuestros grupos de estudio y foros de discusión.
* **Mentoría:** Ofrece o recibe mentoría de otros miembros de la comunidad.
* **Contenido:** Comparte tus conocimientos a través de blog posts, tutoriales o podcasts.

## **Código de Conducta**

Creemos en un entorno seguro y respetuoso para todos. Adherimos a los siguientes principios:

* **Respeto:** Trata a todos con dignidad y cortesía.
* **Inclusión:** Fomenta un ambiente donde todos se sientan bienvenidos.
* **Colaboración:** Trabaja en equipo y comparte conocimientos.
* **Integridad:** Actúa con honestidad y ética.

[nuestro código de conducta](CODE_OF_CONDUCT.md)

## **Únete a Nosotros**

* **GitHub:** [\[Ecuador In Tech\]](https://github.com/Ecuador-In-Tech)

**¡Juntos construiremos un futuro tecnológico más próspero para Ecuador!*

## How to run the project

### 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

### 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

