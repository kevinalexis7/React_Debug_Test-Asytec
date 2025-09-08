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

### Error 6 – Sintaxis incrementAsync
- **Descripción:** un error de sintaxis en la función `incrementAsync`.
- **Causa:** La función en cuestión no es una función asíncrona.
- **Solución:** Eliminar el async.
- **Resultado:** Sintaxis más simples y concisa.

### Error 7 – Eliminar Usuarios
- **Descripción:** En el listado de usuarios, al darle al botón de "delete" no ocurre nada.
- **Causa:** La función `deleteUser` intenta modificar directamente la variable user por lo que React no detecta el cambio en el array.
- **Solución:** Se crea un array nuevo con en usuario en cuestión filtrado y se setea con SetUsers.
- **Resultado:** El usuario se elimina de la lista, React lo detecta y re-renderiza una lista nueva sin el usuario en cuestión.

### Error 9 – Buscador de usuarios
- **Descripción:** la pagina se actualiza cada vez que detecta un cambio en la barra de busqueda.
- **Causa:** Un UseEffect que se ejecuta cada vez que cambia el estado `searchTerm`.
- **Solución:** Hacer que el useCase solo se ejecute cundo se monta el componente, quitando searchTerm del segundo parámetro.
- **Resultado:** El buscador funciona con normalidad sin recargar la pagina.

### Error 10 – No se mantiene la tabla
- **Descripción:** Al actualizar la pagina siempre vuelve a la tab counter.
- **Causa:** El estado activeTab tiene seteado por defecto la 'counter', lo que hace que siempre que recargues la página se cargue la tab counter.
- **Solución:** Aprovechando el custom hook `useLocalStorage`, guardar la ultima tab que visita el usuario y tomar de ahí el valor inicial de activeTab.
- **Resultado:** Independientemente de en que tab se encuentre el usuario, al recargar la pagina, seguirá en la misma tab.

### Error 11 – Modo oscuro no funciona
- **Descripción:** Al interactuar con el botón de modo oscuro(DarkMode) este no surge ningún efecto.
- **Causa:** falta los estilos de css para la clase `dark`.
- **Solución:** agregar los estilos pertinentes, a demás se movió la clase dark a la etiqueta body para que abarque todos los elementos html.
- **Resultado:** El botón funciona correctamente haciendo toggle entre "dark" y "light" mode.

### Refactor - Modo oscuro
- **Descripción:** La lógica de `theme` está mezclada con la de app, lo que satura al componente.
- **Solución:** Mover la lógica de theme a un custom hook.
- **Resultado:** El código tanto en el componente `app` como en el hook `useTheme` quedo mucho más limpio, eficiente y escalable.`

### Error 12 – Tabs activas
- **Descripción:** con una tabla no sabes en cual estas parado.
- **Causa:** falta los estilos de css para la clase `active`.
- **Solución:** agregar los estilos pertinentes.
- **Resultado:** Dependiendo de en que tabla esté parado el usuario, esta tendrá un color diferente, azul más oscuro.

### Error 13 – Todos guardados
- **Descripción:** La lista de todos no se guardaba correctamente y al recargar la pagina ésta desaparecía.
- **Causa:** La lista se guardaba en un estado que el recargar la pagina tomaba su valor inicial.
- **Solución:** Reutilizando el custom hook `useLocalHost` se setea como valor inicial un array vacío hasta que guarde algo dentro del local storage, entonces tomar como valor inicial su contenido.
- **Resultado:** Ahora la lista de todos se guarda correctamente.


