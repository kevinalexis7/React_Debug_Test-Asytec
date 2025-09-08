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

### Error 3 – Botón de limpiar historial
- **Descripción:** Al hacer click en el botón "clear history" no pasa nada.
- **Causa:** La función `clearHistory` intenta cambiar el array `history`, de esta manera react lo detecta como si fuese el mismo elemento por lo que no re-renderiza.
- **Solución:** asignarle un nuevo array vacío `setHistory([])`, para que detecte el cambio.
- **Resultado:** El componente se re-renderiza con normalidad limpiando el historial del contador.

### Error 4 – Mínimo de pasos
- **Descripción:** El input de pasos(steps) se puede setear con números menores a 1, por lo que el los botones comienzan a sumar/restar cero o números negativos.
- **Causa:** El input de pasos no tiene un mínimo establecido.
- **Solución:** Se establece un mínimo en la etiqueta input de que setea los pasos. También se interpreta como 1 cualquier valor menor a 1 en la función `setStep`.
- **Resultado:** El contador de pasos funciona solo con números mayores a cero y previene un mal uso del mismo.

### Error 5 – Historial con elementos de más
- **Descripción:** Al recargar la página el historial empieza con dos items.
- **Causa:** Al ejecutarse en useEffect, el componente se renderiza dos veces y carga el array de history dos veces el valor por defecto del estado `count` que es cero.
- **Solución:** Eliminar el useEffect y hacer que SetHistory cambie solo cuando se ejecutan las funciones de incremento/decremento del contador.
- **Resultado:** El historial comienza correctamente con 0 elementos.

### Refactor – Orden de historial incomodo
- **Descripción:** Al ir sumando elementos al historial estos se muestran último en la lista por lo que incomoda el seguimiento de los mismos.
- **Solución:** Invertir el orden de aparición de los cambios(que los últimos cambios en el contador se muestren Primeros en la lista).
- **Resultado:** El usuario ya no debería scrollear para ver los últimos cambios.

