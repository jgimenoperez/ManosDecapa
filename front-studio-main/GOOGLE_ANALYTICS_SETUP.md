# Configuración de Google Analytics 4 para Manos Decapa

## Paso 1: Crear o Seleccionar Propiedad en Google Analytics

1. Ve a [Google Analytics](https://analytics.google.com)
2. Haz clic en "Administrador" (engranaje en la esquina inferior izquierda)
3. En la columna de Propiedad, selecciona tu propiedad o crea una nueva:
   - Nombre de propiedad: `Manos Decapa`
   - URL: `https://www.manosdecapa.es`
   - Zona horaria: `Europa/Madrid` (Spain)
   - Moneda: `EUR`

## Paso 2: Crear un Stream Web

1. En Admin > Propiedad > Streams, haz clic en "Crear stream"
2. Selecciona "Web"
3. Completa los datos:
   - URL del sitio web: `https://www.manosdecapa.es`
   - Nombre del stream: `Manos Decapa Web`
4. Copia el **ID de medición** (formato: `G-XXXXXXXXXX`)

## Paso 3: Configurar Variables de Entorno

1. Abre o crea el archivo `.env.local` en la raíz del proyecto:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```
   (Reemplaza `G-XXXXXXXXXX` con tu ID de medición)

2. Si usas variables de entorno en producción, asegúrate de agregarlas en tu plataforma de hosting (Vercel, Firebase Hosting, etc.)

## Paso 4: Verificar la Instalación

1. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

2. Abre [Google Analytics en tiempo real](https://analytics.google.com/analytics/web/) y ve a Informes > Tiempo real
3. Abre `http://localhost:3000` en tu navegador
4. Deberías ver una sesión activa en Google Analytics dentro de 1-2 minutos

## Paso 5: Configurar Eventos de Conversión

Los siguientes eventos se rastrean automáticamente:

### 1. **generate_lead** - Envío de formulario de contacto
- Se dispara cuando un usuario envía el formulario de contacto
- Utilidad: Medir clientes potenciales

### 2. **click** - Clics en WhatsApp
- Se dispara cuando un usuario hace clic en el botón de WhatsApp
- Event label: `whatsapp_contact`

### 3. **click** - Clics en teléfono
- Se dispara cuando un usuario hace clic en el enlace de teléfono
- Event label: `phone_contact`

### 4. **view_item_list** - Visualización de galería
- Se dispara cuando un usuario ve la galería
- Event label: `gallery_view`

### 5. **view_item** - Expansión de preguntas FAQ
- Se dispara cuando un usuario expande una pregunta frecuente
- Event label: `faq_expanded`

## Paso 6: Crear Conversiones en Google Analytics

1. Ve a Admin > Propiedad > Conversiones
2. Haz clic en "Crear conversión"
3. Para cada evento importante, crea una conversión:

### Conversión 1: Contacto Realizado
- **Nombre**: Contact Form Submission
- **Descripción**: Usuario envió el formulario de contacto
- **Evento**: `generate_lead`

### Conversión 2: Contacto WhatsApp
- **Nombre**: WhatsApp Contact
- **Descripción**: Usuario hizo clic en WhatsApp
- **Evento**: `click` con parámetro `event_label` = `whatsapp_contact`

### Conversión 3: Contacto Teléfono
- **Nombre**: Phone Contact
- **Descripción**: Usuario hizo clic en teléfono
- **Evento**: `click` con parámetro `event_label` = `phone_contact`

## Paso 7: Configurar Google Analytics en Production

En tu plataforma de hosting (Vercel, Firebase, etc.):

1. Agrega la variable de entorno:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

2. Despliega y verifica que funciona en Google Analytics > Tiempo real

## Paso 8: Crear Cuadro de Mando Personalizado

Para monitorizar las métricas clave:

1. Ve a Informes > Customización > Cuadro de mando
2. Crea un nuevo cuadro de mando llamado "Manos Decapa KPIs"
3. Agrega los siguientes widgets:

- **Sesiones orgánicas** (filtro: canal = Organic)
- **Usuarios nuevos** (métrica clave)
- **Tasa de conversión de contactos** (generate_lead)
- **Tiempo promedio en página**
- **Tasa de rebote**
- **Clic en WhatsApp** (event_label = whatsapp_contact)
- **Clic en teléfono** (event_label = phone_contact)

## Paso 9: Configurar Alertas

1. Ve a Admin > Propiedad > Alertas
2. Crea alertas para:
   - Caída de sesiones orgánicas > 50%
   - Aumento de tasa de rebote > 70%
   - Disminución de conversiones de contacto

## Paso 10: Integración con Search Console (Opcional)

1. Ve a Admin > Propiedad > Vinculaciones de Search Console
2. Haz clic en "Vincular Search Console"
3. Selecciona tu propiedad de Search Console
4. Esto agregará datos de búsqueda a Google Analytics

## Cómo Disparar Eventos Personalizados Manuales

Si necesitas disparar un evento personalizado desde el código:

```typescript
import { trackEvent } from '@/components/analytics/google-analytics';

// En un componente
trackEvent('custom_event', {
  'event_category': 'engagement',
  'event_label': 'custom_action',
  'value': 10,
});
```

## Recursos Útiles

- [Google Analytics 4 Documentation](https://support.google.com/analytics)
- [Event measurement in GA4](https://support.google.com/analytics/answer/12229021)
- [Create and manage conversions](https://support.google.com/analytics/answer/9267568)
- [Real-time reporting](https://support.google.com/analytics/answer/1638635)

## Troubleshooting

### Google Analytics no muestra datos
- Verifica que `NEXT_PUBLIC_GA_ID` esté correctamente configurado
- Abre la consola del navegador (F12) y busca errores
- Espera 24-48 horas para datos históricos

### Los eventos no se disparan
- Verifica que el ID de medición sea correcto
- Revisa la consola del navegador para errores
- Utiliza Google Analytics Debugger (extensión de Chrome)

### El sitio en localhost no aparece en Google Analytics
- Asegúrate de que `NEXT_PUBLIC_GA_ID` esté configurado en `.env.local`
- Los datos de localhost pueden filtrar automáticamente; desactiva este filtro en Admin > Propiedad > Filtros de datos

---

**Última actualización**: 2025-11-19
**Versión**: 1.0
