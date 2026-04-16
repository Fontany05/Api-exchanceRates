# Api-exchanceRates - External Data

## 📌 Descripción

Esta API REST fue desarrollada con node.js,express,typescript,typeOrm y sqlite
Consume la API externa de ExchangeRate API y transforma los datos en la siguiente estructura un id,currency,rate y base antes de mostrar la data.

---

## 🚀 Endpoint

**GET /external-data**

Este endpoint:

* Consume una API externa de Exchange Rate API(conversión de divisas)
* Transforma la respuesta
* Devuelve un JSON simplificado y personalizado

---

## 🛠️ Tecnologías utilizadas

* Node.js
* Express
* TypeScript
* TypeORM
* SQLite

---

## ▶️ Cómo ejecutar el proyecto

```bash
npm install
npm run dev
```

---

## 🌐 API externa utilizada

https://www.exchangerate-api.com



## ☁️ Despliegue en Azure (concepto)

La API puede desplegarse usando Azure App Service,conectando al repositorio de GitHub para despligue continuo,desde la web se configuran manualmente variables de entorno,hay que autenticarse,seleccionar el repositoiro y rama y la aplicación quedara accesible mediante una URL pública

Hay otras manera de realizar desde y github y desde nuestro editor de codigo ejemplo vscode,ademas hay una configuracion extra despues del deploy la cual es una clave de api,la cadena de conexion,etc

En el caso de node debemos asegurarnos de que el servidor escuche en process.env.PORT

