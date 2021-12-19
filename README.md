### Example of nextjs project using Cypress.io

<!---Start place for the badge -->
RESULTADO DE LOS ÚLTIMOS TESTS [![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)
<!---End place for the badge -->

## Que son las Github Actions ?

GitHub Actions permite crear workflows que se puedan utilizar para compilar, testear y desplegar código. Además, da la posibilidad de crear flujos de integración y despliegue continuo dentro de nuestro repositorio.

Actions utiliza paquetes de códigos en los contenedores de Docker, los cuales se ejecutan en los servidores de GitHub y que, a su vez, son compatibles con cualquier lenguaje de programación. Esto hace que puedan funcionar con servidores locales y nubes públicas.

### Documentación del proyecto

Primero inicamos el proyecto y realizamos el clone del repositorio de ejemplo.
![1](https://user-images.githubusercontent.com/79716922/146690083-ccb13a61-ff16-4047-87a9-d855e7f5f9c6.png)

El segundo paso es realizar el commit inicial y subirla a nuestro repositorio.
![2](https://user-images.githubusercontent.com/79716922/146690085-093cc70b-30e2-4217-b4f1-6bfeca308746.png)

Lo siguiente es crear el workflow, primero añadiremos un job que se encargará de revisar los archivos js en busca de algun error.
![linter_job](https://user-images.githubusercontent.com/79716922/146690608-055150c7-cca4-4949-a598-da81b36b0cc5.png)

Al realizar un push, podremos ver que hay algunos errores.
![3](https://user-images.githubusercontent.com/79716922/146690086-c9664f29-476d-4246-8432-c25d0f784a04.png)

Una vez corregidos los errores, realizamos un nuevo push y podemos comprobar que se ha ejecutado correctamente.
![4](https://user-images.githubusercontent.com/79716922/146690087-6d0fdfd8-81a0-4755-827c-dd23c3223004.png)

Ahora, añadiremos un nuevo job, que se encargará de realizar test utilizando cypress. Este job tendrá diversos steps:
  * El primero realiza un checkout del código.
  * El segundo realiza el test con cypress.
  * El tercero introduce el resultado a un archivo.
  * El cuarto y último, realiza un upload de un artifact con el archivo del resultado.
![5](https://user-images.githubusercontent.com/79716922/146690089-76a388d1-f3b5-46a0-82f3-c224d7729a20.png)

Al realizar un push podemos ver que la action se ha realizado correctamente.
![6](https://user-images.githubusercontent.com/79716922/146690091-aa1f59fa-2614-4972-91fb-5d814df68c0a.png)

Antes de seguir con el siguiente job, crearemos un nuevo secreten el repositorio que contendrá el token de developer de GitHub que utilizaremos posteriormente.
![8](https://user-images.githubusercontent.com/79716922/146690094-ed9bb6f8-bb0e-4025-ab5a-d66992c0f8e6.png)

Lo siguiente que debemos hacer es crear la app que cambiará el readme añadiendo un badge dependiendo del resultado del test de cypress.
![10 (abans q 8)](https://user-images.githubusercontent.com/79716922/146690096-828d650f-1b86-42ee-a23a-4aa1d8f7008f.png)

Una vez tengamos la aplicación, crearemos el nuevo job, con los siguientes steps:
 * El primero realiza un checkout del código.
 * El segundo realiza la descarga del artifact que hemos subido en el job anterior.
 * El tercero genera un output utilizando el contenido del archivo del artifact.
 * El cuarto se encarga de modificar el readme utilizando la aplicación de la captura anterior. Utilzaremos una action custom que tendrá un input "result" que almacenará el contenido del output generado en el step anterior.
 * Por último, el quinto, realiza el commit de los cambios en el README en caso de haberlos.
![add_badge_workflow](https://user-images.githubusercontent.com/79716922/146691354-acd7fe97-574a-4015-80a8-be0f0116aea1.png)


![11](https://user-images.githubusercontent.com/79716922/146690097-4dc7dabf-e68e-4a10-a4fd-15de2bb2eb1c.png)
![12](https://user-images.githubusercontent.com/79716922/146690098-b89edec9-5e33-4c32-bd1f-ee412e586f70.png)
![check_deploy_vercel](https://user-images.githubusercontent.com/79716922/146690099-53249a42-4b75-4349-8a21-7752334654ce.png)
![resultado_send_mail](https://user-images.githubusercontent.com/79716922/146690101-fdd3db9d-612c-4a32-b47e-39538de2d80d.png)
![secrets_mail](https://user-images.githubusercontent.com/79716922/146690103-193477f2-292d-4f84-8e72-e84d617db159.png)
![test_action_deploy_action_gh](https://user-images.githubusercontent.com/79716922/146690105-d0962a43-43fd-42f1-895f-b64502c44f47.png)
![tokens_vercel](https://user-images.githubusercontent.com/79716922/146690106-b0b36706-245b-4966-baaf-d4e38e1fa39b.png)
![vercel_link](https://user-images.githubusercontent.com/79716922/146690107-804960c4-08ab-402d-84ab-c86cc46049d6.png)
