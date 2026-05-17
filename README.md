# Analizador de Agenda con ANTLR4 y JavaScript

**Alumno:** Victoria Arca
**Legajo:** 53298

---

## Descripción

Este proyecto implementa un analizador léxico y sintáctico utilizando ANTLR4 en JavaScript para procesar una agenda de eventos.

---

## Requisitos

* Node.js
* Java

---

## Instalación

```bash
npm install
```

---

## Ejecución

```bash
npm start
```

---

## Ejemplo de entrada válida

```txt
agenda {
  25/12/2025 18:30: "Cena navidad";
}
```

---

## Salida esperada

* Validación sintáctica
* Árbol de análisis
* Lista de eventos interpretados

---

## Archivos de prueba

### Correctos

* input1.txt
* input2.txt

### Incorrectos

* input_error1.txt
* input_error2.txt
