# Informe de Challenge Técnico – React

## 📌 Introducción
Este proyecto corresponde al challenge técnico de **Asytec System**.  
El objetivo fue identificar y corregir errores en una aplicación React, además de realizar refactorizaciones y proponer mejoras para aumentar la calidad y mantenibilidad del código.

---

## 🐞 Errores encontrados y soluciones

### Error 1 – Bucle en Historial de Items
- **Descripción:** El contador de items del historial se acrecentaba en bucle infinito.  
- **Causa:** Un error de sintaxis en el hook `useEffect` generaba que se montara el componente en bucle infinito ejecutando la función setHistory cada vez.  
- **Solución:** Se agregó el segundo parámetro para que este solo se ejecutara cundo cambiara el estado `count`.  
- **Resultado:** El contador de Items del historial ahora funciona correctamente.  

---