import Script from 'next/script';

export function GoogleAnalytics() {
  // Reemplaza G-XXXXXXXXXX con tu ID de Google Analytics 4
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-PLACEHOLDER';

  if (GA_MEASUREMENT_ID === 'G-PLACEHOLDER') {
    console.warn('Google Analytics ID not configured. Set NEXT_PUBLIC_GA_ID environment variable.');
    return null;
  }

  return (
    <>
      {/* Google Analytics Script */}
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
        onLoad={() => {
          window.dataLayer = window.dataLayer || [];
          function gtag(...args: unknown[]) {
            window.dataLayer?.push(arguments);
          }
          gtag('js', new Date());
          gtag('config', GA_MEASUREMENT_ID, {
            page_path: window.location.pathname,
            // Track clicks on key elements
            send_page_view: true,
            // Configurar búsqueda de sitio
            search_enabled: true,
          });
        }}
      />
      {/* Event tracking for conversions */}
      <Script
        id="ga-events"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.gtag = window.gtag || function() { window.dataLayer?.push(arguments); };

            // Track contact form submission
            document.addEventListener('contactFormSubmitted', function() {
              gtag('event', 'generate_lead', {
                'currency': 'EUR',
                'value': 0,
                'event_category': 'engagement',
                'event_label': 'contact_form_submission'
              });
            });

            // Track WhatsApp clicks
            document.addEventListener('whatsappClicked', function() {
              gtag('event', 'click', {
                'event_category': 'engagement',
                'event_label': 'whatsapp_contact'
              });
            });

            // Track phone clicks
            document.addEventListener('phoneClicked', function() {
              gtag('event', 'click', {
                'event_category': 'engagement',
                'event_label': 'phone_contact'
              });
            });

            // Track gallery views
            document.addEventListener('galleryViewed', function() {
              gtag('event', 'view_item_list', {
                'event_category': 'engagement',
                'event_label': 'gallery_view'
              });
            });

            // Track FAQ interactions
            document.addEventListener('faqAccordionToggled', function() {
              gtag('event', 'view_item', {
                'event_category': 'engagement',
                'event_label': 'faq_expanded'
              });
            });
          `,
        }}
      />
    </>
  );
}

// Función auxiliar para disparar eventos personalizados
export function trackEvent(eventName: string, eventData: Record<string, unknown>) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventData);
  }
}

// Extend window type for TypeScript
declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}
