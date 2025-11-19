'use client';

import { useEffect, useState } from 'react';

/**
 * Hook para detectar la preferencia de movimiento reducido del usuario.
 * Respeta la media query prefers-reduced-motion de CSS.
 *
 * Uso:
 * ```tsx
 * const reducedMotion = useReducedMotion();
 *
 * <motion.div
 *   animate={reducedMotion ? {} : { x: 100 }}
 * >
 * ```
 *
 * Beneficios:
 * - Accesibilidad: Usuarios con vestibular disorders, migrañas, etc.
 * - Performance: Reduce CPU/GPU en dispositivos de bajos recursos
 * - UX mejorada: Respeta las preferencias del SO del usuario
 */
export function useReducedMotion(): boolean {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Verificar preferencia inicial
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    // Escuchar cambios en la preferencia
    const handleChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };

    // Método moderno (soportado en navegadores actuales)
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
    // Fallback para navegadores antiguos
    else if (mediaQuery.addListener) {
      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener(handleChange);
    }
  }, []);

  return reducedMotion;
}

/**
 * Hook alternativo que devuelve las opciones de animación basadas en preferencia.
 *
 * Uso:
 * ```tsx
 * const animationConfig = useMotionAnimation();
 *
 * <motion.div
 *   transition={animationConfig.transition}
 * >
 * ```
 */
export function useMotionAnimation() {
  const reducedMotion = useReducedMotion();

  return {
    transition: reducedMotion ? { duration: 0 } : { duration: 0.6 },
    duration: reducedMotion ? 0 : 0.6,
    delay: reducedMotion ? 0 : 0.2,
    shouldAnimate: !reducedMotion,
  };
}
