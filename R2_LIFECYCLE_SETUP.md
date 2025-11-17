# Configurar Lifecycle Policy en Cloudflare R2

**Documento**: Guía para eliminar automáticamente imágenes antiguas del bucket R2
**Fecha**: 2025-11-16
**Proyecto**: Manos De Capa
**Bucket**: manos-decapa-images

---

## 📋 Tabla de Contenidos

1. [¿Qué es una Lifecycle Policy?](#qué-es-una-lifecycle-policy)
2. [Acceso al Dashboard](#acceso-al-dashboard)
3. [Crear la política](#crear-la-política)
4. [Verificar la configuración](#verificar-la-configuración)
5. [Ejemplos de políticas](#ejemplos-de-políticas)

---

## ¿Qué es una Lifecycle Policy?

Una **Lifecycle Policy** es una regla automática que:
- ✅ Elimina archivos después de X días
- ✅ Se ejecuta automáticamente sin intervención
- ✅ No requiere código adicional
- ✅ Ahorra costos de almacenamiento

**En tu caso:**
- Imágenes de contacto se suben diariamente
- Después de 30-90 días, se eliminan automáticamente
- Los emails siguen mostrando las imágenes mientras existan

---

## Acceso al Dashboard

### Paso 1: Abre Cloudflare Dashboard
```
1. Ve a https://dash.cloudflare.com
2. Login con tu cuenta Cloudflare
3. Lado izquierdo → R2
```

### Paso 2: Selecciona tu bucket
```
1. Click en "manos-decapa-images"
2. Verás la pantalla del bucket
```

---

## Crear la política

### Paso 3: Accede a Lifecycle Rules

```
1. En la pantalla del bucket, click en "Settings"
2. Busca la sección "Lifecycle rules"
3. Click en "Add lifecycle rule" o "Create rule"
```

### Paso 4: Configura la regla

**Opción A - Eliminar después de 30 días (Recomendado)**

| Campo | Valor |
|-------|-------|
| **Rule name** | `Delete old contact images` |
| **Apply to** | All objects in bucket |
| **Action** | Delete object |
| **Days after upload** | `30` |

**Opción B - Eliminar después de 90 días (Más tiempo)**

| Campo | Valor |
|-------|-------|
| **Rule name** | `Delete old contact images` |
| **Apply to** | All objects in bucket |
| **Action** | Delete object |
| **Days after upload** | `90` |

### Paso 5: Guardar

```
Click en "Save" o "Create rule"
```

---

## Verificar la configuración

### Confirmar que funciona

```
1. En Settings, debes ver tu regla listada
2. Estado: "Active" o "Enabled" (verde ✅)
3. Descripción: "Delete object after X days"
```

**Ejemplo:**
```
Rule Name: Delete old contact images
Status: ✅ Active
Action: Delete
Days: 30
Apply to: All objects in bucket
```

---

## Ejemplos de políticas

### Política 1: Limpiar cada mes
```
Rule: "Monthly cleanup"
Days: 30
Action: Delete
```
**Uso**: Elimina imágenes mensualmente. Bueno si hay pocos contactos.

### Política 2: Limpiar cada trimestre
```
Rule: "Quarterly cleanup"
Days: 90
Action: Delete
```
**Uso**: Mantiene imágenes por más tiempo. Más espacio de almacenamiento.

### Política 3: Limpiar archivos grandes
```
Rule: "Delete large old images"
Days: 60
Size filter: > 2 MB
Action: Delete
```
**Uso**: Solo elimina imágenes grandes después de 60 días.

---

## 📊 Recomendación para Manos De Capa

**Política sugerida:**
```
Rule name: Delete contact form images
Days after upload: 30
Apply to: All objects
Action: Delete
```

**Razones:**
- ✅ Las imágenes de contacto no son críticas a largo plazo
- ✅ 30 días es suficiente para leer el email
- ✅ Ahorra costos de almacenamiento
- ✅ Automático, sin mantenimiento manual

---

## 🔍 Monitorear eliminaciones

### Ver logs de eliminaciones

En el Dashboard:
```
1. R2 → manos-decapa-images
2. Analytics (si está disponible)
3. Verás objetos eliminados automáticamente
```

### Via Cloudflare API (Avanzado)

```bash
# Ver objetos restantes en bucket
wrangler r2 object list manos-decapa-images --env production
```

---

## ⚠️ Consideraciones importantes

### ✅ Ventajas
- Automático (sin código)
- Gratuito
- Ahorra espacio
- Reduce costos

### ⚠️ Cosas a tener en cuenta
- **Una vez eliminadas, no se pueden recuperar** (excepto si tienes backups)
- Los emails antiguos mostrarán imágenes rotas si las miras después de 30 días
- No puedes hacer excepciones por archivo (o todos o ninguno)

### 💡 Solución alternativa
Si necesitas mantener algunas imágenes:
```
1. Descarga las imágenes importantes antes de que se eliminen
2. Guárdalas en un storage local o Google Drive
3. Mantén el R2 solo para imágenes recientes
```

---

## 📞 Solucionar problemas

### "No veo la opción Lifecycle Rules"
**Solución:**
1. Asegúrate de estar en tu bucket (no en la lista principal)
2. Click en "Settings" tab
3. Scroll hacia abajo

### "La regla no se aplica"
**Solución:**
1. Verifica que esté "Active" (no "Disabled")
2. Espera 24 horas (tarda un poco en aplicarse)
3. Crea un objeto de test para verificar

### "Quiero deshabilitar la regla"
**Solución:**
1. Settings → Lifecycle rules
2. Click en tu regla
3. Click "Disable" o "Delete rule"

---

## 🎯 Checklist de implementación

- [ ] Acceder a https://dash.cloudflare.com
- [ ] Seleccionar bucket "manos-decapa-images"
- [ ] Click en Settings
- [ ] Crear nueva regla (Add lifecycle rule)
- [ ] Nombre: "Delete old contact images"
- [ ] Días: 30
- [ ] Aplicar a: All objects
- [ ] Guardar cambios
- [ ] Verificar que el estado sea ✅ Active
- [ ] Probar: Enviar un contacto y esperar a que se procese

---

**Última actualización**: 2025-11-16
**Autor**: Claude Code
**Estado**: ✅ Listo para implementar
