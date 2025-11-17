'use client';

import { useEffect, useState } from 'react';
import { X, Settings } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';

type CookiePreference = {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
};

const COOKIE_NAME = 'manos-decapa-cookie-consent';
const COOKIE_EXPIRY_DAYS = 365;

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreference>({
    essential: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already given consent
    const savedConsent = localStorage.getItem(COOKIE_NAME);
    if (!savedConsent) {
      setShowBanner(true);
    } else {
      try {
        const parsed = JSON.parse(savedConsent);
        setPreferences(parsed);
      } catch (e) {
        setShowBanner(true);
      }
    }
  }, []);

  const saveCookieConsent = (prefs: CookiePreference) => {
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + COOKIE_EXPIRY_DAYS);
    localStorage.setItem(COOKIE_NAME, JSON.stringify(prefs));
    setPreferences(prefs);
    setShowBanner(false);
    setShowSettings(false);

    // Here you would load/unload scripts based on preferences
    loadScripts(prefs);
  };

  const loadScripts = (prefs: CookiePreference) => {
    if (prefs.analytics) {
      // Load Google Analytics or other analytics scripts
      loadGoogleAnalytics();
    }
    if (prefs.marketing) {
      // Load marketing/advertisement scripts
      loadMarketingScripts();
    }
  };

  const loadGoogleAnalytics = () => {
    if (window.gtag) return; // Already loaded
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID';
    document.head.appendChild(script);
  };

  const loadMarketingScripts = () => {
    // Load marketing/advertising scripts here
  };

  const handleAcceptAll = () => {
    saveCookieConsent({
      essential: true,
      analytics: true,
      marketing: true,
    });
  };

  const handleRejectAll = () => {
    saveCookieConsent({
      essential: true,
      analytics: false,
      marketing: false,
    });
  };

  const handleSavePreferences = () => {
    saveCookieConsent(preferences);
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Cookie Consent Banner */}
      {!showSettings && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-foreground text-background p-4 md:p-6 shadow-lg border-t-4 border-accent">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              <div className="flex-1">
                <h3 className="font-bold font-headline text-lg mb-2">
                  Consentimiento de Cookies
                </h3>
                <p className="text-sm text-background/80 mb-3 md:mb-0">
                  Utilizamos cookies para mejorar tu experiencia en nuestro sitio web. Al continuar navegando, aceptas nuestra{' '}
                  <Link href="/politica-cookies" className="text-accent font-semibold hover:underline">
                    Política de Cookies
                  </Link>
                  .
                </p>
              </div>

              <div className="flex gap-2 w-full md:w-auto flex-wrap">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowSettings(true)}
                  className="bg-transparent border-background text-background hover:bg-background/10"
                >
                  <Settings className="w-4 h-4 mr-2" />
                  Configurar
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleRejectAll}
                  className="bg-transparent border-background text-background hover:bg-background/10"
                >
                  Rechazar
                </Button>
                <Button
                  size="sm"
                  onClick={handleAcceptAll}
                  className="bg-accent text-foreground hover:bg-accent/90"
                >
                  Aceptar Todo
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cookie Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-background rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-xl">
            {/* Header */}
            <div className="sticky top-0 bg-background border-b border-muted-foreground/20 p-4 md:p-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold font-headline text-foreground">
                Configuración de Cookies
              </h2>
              <button
                onClick={() => setShowSettings(false)}
                className="text-foreground/60 hover:text-foreground p-1"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content */}
            <div className="p-4 md:p-6 space-y-6">
              <p className="text-foreground/80">
                Selecciona qué tipo de cookies deseas permitir. Las cookies esenciales siempre están activas.
              </p>

              {/* Essential Cookies */}
              <div className="border border-muted-foreground/20 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="essential"
                    checked={preferences.essential}
                    disabled
                    className="mt-1 w-4 h-4"
                  />
                  <div className="flex-1">
                    <label htmlFor="essential" className="font-semibold text-foreground block cursor-not-allowed">
                      Cookies Esenciales
                    </label>
                    <p className="text-sm text-foreground/70 mt-1">
                      Necesarias para el funcionamiento correcto del sitio web. No requieren consentimiento.
                    </p>
                  </div>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="border border-muted-foreground/20 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="analytics"
                    checked={preferences.analytics}
                    onChange={(e) =>
                      setPreferences({ ...preferences, analytics: e.target.checked })
                    }
                    className="mt-1 w-4 h-4"
                  />
                  <div className="flex-1">
                    <label htmlFor="analytics" className="font-semibold text-foreground block cursor-pointer">
                      Cookies Analíticas
                    </label>
                    <p className="text-sm text-foreground/70 mt-1">
                      Nos ayudan a entender cómo utilizas nuestro sitio web para mejorarlo. (Google Analytics)
                    </p>
                  </div>
                </div>
              </div>

              {/* Marketing Cookies */}
              <div className="border border-muted-foreground/20 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="marketing"
                    checked={preferences.marketing}
                    onChange={(e) =>
                      setPreferences({ ...preferences, marketing: e.target.checked })
                    }
                    className="mt-1 w-4 h-4"
                  />
                  <div className="flex-1">
                    <label htmlFor="marketing" className="font-semibold text-foreground block cursor-pointer">
                      Cookies de Marketing
                    </label>
                    <p className="text-sm text-foreground/70 mt-1">
                      Utilizadas para rastrear visitantes en sitios web y mostrar anuncios personalizados.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-xs text-foreground/60">
                Puedes obtener más información sobre nuestras prácticas en la{' '}
                <Link href="/politica-privacidad" className="text-accent hover:underline">
                  Política de Privacidad
                </Link>
                .
              </p>
            </div>

            {/* Footer */}
            <div className="sticky bottom-0 bg-background border-t border-muted-foreground/20 p-4 md:p-6 flex gap-2 justify-end">
              <Button
                variant="outline"
                onClick={() => setShowSettings(false)}
              >
                Volver Atrás
              </Button>
              <Button
                variant="outline"
                onClick={handleRejectAll}
              >
                Rechazar Todas
              </Button>
              <Button
                onClick={handleSavePreferences}
                className="bg-accent text-foreground hover:bg-accent/90"
              >
                Guardar Configuración
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
