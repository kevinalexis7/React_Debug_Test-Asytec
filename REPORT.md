# Informe de Challenge Técnico – React

## 📌 Introducción
Este proyecto corresponde al challenge técnico de **Asytec System**.  
El objetivo fue identificar y corregir errores en una aplicación React, además de realizar refactorizaciones y proponer mejoras para aumentar la calidad y mantenibilidad del código.

---

## 🐞 Errores encontrados y soluciones

### Error 1 – Bucle en Historial de Items
- **Descripción:** El contador de items del historial se acrecentaba en bucle infinito.  
- **Causa:** Un error implementación del hook `useEffect` generaba que se montara el componente en bucle infinito ejecutando la función setHistory cada vez.  
- **Solución:** Se agregó el segundo parámetro para que este solo se ejecutara cundo cambiara el estado `count`.  
- **Resultado:** El contador de Items del historial ahora funciona correctamente.  

### Error 2 – Contador de Pasos
- **Descripción:** Al cambiar la cantidad de pasos(steps) se rompe el contador, de manera que comienza a concatenar en lugar de sumar.  
- **Causa:** En la función `setStep` se le pasa como parámetro el valor del input en cuestión como un tipo `string` en lugar de un tipo `number`.  
- **Solución:** Se utiliza el método `Number()` para pasear el valor del input y convertirlo al tipo `number`.  
- **Resultado:** Al cambiar la cantidad de pasos el contador sigue sumando de manera correcta.

