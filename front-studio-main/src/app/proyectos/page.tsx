'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Section } from '@/components/section';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { ProjectsPageSchema } from '@/components/schema/projects-page-schema';
import { BreadcrumbSchema } from '@/components/schema/breadcrumb-schema';
import Link from 'next/link';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  beforeImage: string;
  afterImage: string;
  clientTestimony: string;
  completionTime: string;
  difficulty: 'Fácil' | 'Medio' | 'Complejo';
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Cómoda Antigüa del Siglo XX',
    description: 'Recuperación completa de una cómoda de madera con múltiples capas de pintura vieja.',
    category: 'Muebles Grandes',
    beforeImage: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop',
    clientTestimony: 'Increíble transformación. La madera quedó como nueva. Muy recomendados.',
    completionTime: '5 días',
    difficulty: 'Medio',
  },
  {
    id: 2,
    title: 'Silla de Madera Oscura',
    description: 'Decapado de silla clásica con barniz oscuro muy adherente.',
    category: 'Sillas',
    beforeImage: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop',
    clientTestimony: 'Trabajo rápido y profesional. Mi silla quedó perfecta para restaurar.',
    completionTime: '2 días',
    difficulty: 'Fácil',
  },
  {
    id: 3,
    title: 'Puerta Antigua de Roble',
    description: 'Restauración de puerta histórica con detalles decorativos preservados.',
    category: 'Puertas',
    beforeImage: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop',
    clientTestimony: 'Excelente atención al detalle. La puerta recuperó su belleza original.',
    completionTime: '7 días',
    difficulty: 'Complejo',
  },
  {
    id: 4,
    title: 'Mesita Lacada en Blanco',
    description: 'Decapado de pequeña mesa con laca blanca. Trabajo rápido y eficiente.',
    category: 'Mesas',
    beforeImage: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop',
    clientTestimony: 'Presupuesto justo y trabajo muy limpio. Sin duda volveré.',
    completionTime: '1 día',
    difficulty: 'Fácil',
  },
  {
    id: 5,
    title: 'Armario Victoriano',
    description: 'Restauración completa de armario de época con incrustaciones de marquetería.',
    category: 'Muebles Grandes',
    beforeImage: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop',
    clientTestimony: 'Increíble el cuidado con los detalles. Un trabajo de museo.',
    completionTime: '10 días',
    difficulty: 'Complejo',
  },
  {
    id: 6,
    title: 'Escritorio de Roble Macizo',
    description: 'Decapado de escritorio clásico con acabado barnizado. Preservación de detalles.',
    category: 'Muebles Grandes',
    beforeImage: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop',
    clientTestimony: 'Muy profesionales. Mi escritorio quedó listo para usar nuevamente.',
    completionTime: '6 días',
    difficulty: 'Medio',
  },
  {
    id: 7,
    title: 'Rejas de Forja Antigua',
    description: 'Decapado de elementos metálicos decorativos con óxido acumulado.',
    category: 'Metal',
    beforeImage: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop',
    clientTestimony: 'Las rejas quedaron como nuevas. Increíble transformación.',
    completionTime: '3 días',
    difficulty: 'Medio',
  },
  {
    id: 8,
    title: 'Cómoda de Pino Restaurada',
    description: 'Decapado total con tratamiento especial para preservar vetas de madera.',
    category: 'Muebles Grandes',
    beforeImage: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop',
    clientTestimony: 'La madera de pino quedó hermosa. Muy satisfecho con el resultado.',
    completionTime: '4 días',
    difficulty: 'Medio',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

function ProjectCard({
  project,
  onSelect,
}: {
  project: Project;
  onSelect: (project: Project) => void;
}) {
  return (
    <motion.div variants={itemVariants}>
      <Card className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300 h-full">
        <CardContent className="p-0">
          <div className="relative overflow-hidden bg-muted" style={{ height: '200px' }}>
            {/* Before/After Slider Container */}
            <div className="relative w-full h-full group">
              {/* Before Image */}
              <img
                src={project.beforeImage}
                alt={`Antes - ${project.title}`}
                className="w-full h-full object-cover"
              />

              {/* After Image (overlaid) */}
              <div className="absolute inset-0 overflow-hidden" style={{ width: '50%' }}>
                <img
                  src={project.afterImage}
                  alt={`Después - ${project.title}`}
                  className="w-full h-full object-cover"
                  style={{ width: '200%' }}
                />
              </div>

              {/* Divider */}
              <div className="absolute inset-y-0 left-1/2 w-1 bg-white/80 group-hover:bg-accent transition-colors"></div>

              {/* Labels */}
              <div className="absolute top-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
                Antes
              </div>
              <div className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
                Después
              </div>

              {/* Click Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <button
                  onClick={() => onSelect(project)}
                  className="opacity-0 group-hover:opacity-100 transition-opacity bg-accent text-white px-4 py-2 rounded font-semibold"
                >
                  Ver Completo
                </button>
              </div>
            </div>
          </div>

          <div className="p-4">
            <h3 className="font-bold font-headline text-lg mb-2">{project.title}</h3>
            <p className="text-sm text-muted-foreground mb-4">{project.description}</p>

            <div className="space-y-2 mb-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Categoría:</span>
                <span className="bg-accent/10 text-accent px-2 py-1 rounded text-xs font-medium">
                  {project.category}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Tiempo:</span>
                <span className="font-semibold">{project.completionTime}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Dificultad:</span>
                <span
                  className={`font-semibold ${
                    project.difficulty === 'Fácil'
                      ? 'text-green-600'
                      : project.difficulty === 'Medio'
                        ? 'text-yellow-600'
                        : 'text-red-600'
                  }`}
                >
                  {project.difficulty}
                </span>
              </div>
            </div>

            <p className="text-xs italic text-muted-foreground border-l-2 border-accent pl-2 mb-4">
              "{project.clientTestimony}"
            </p>

            <Button
              onClick={() => onSelect(project)}
              className="w-full bg-accent hover:bg-accent/90"
            >
              Ver Proyecto
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-background rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="sticky top-0 flex items-center justify-between p-6 border-b bg-background/95 backdrop-blur">
          <h2 className="text-2xl font-bold font-headline">{project.title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Before/After Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-semibold text-muted-foreground mb-2">ANTES</p>
              <img
                src={project.beforeImage}
                alt={`Antes - ${project.title}`}
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
            <div>
              <p className="text-sm font-semibold text-muted-foreground mb-2">DESPUÉS</p>
              <img
                src={project.afterImage}
                alt={`Después - ${project.title}`}
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Project Details */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-muted p-4 rounded-lg">
              <p className="text-xs text-muted-foreground mb-1">Categoría</p>
              <p className="font-semibold">{project.category}</p>
            </div>
            <div className="bg-muted p-4 rounded-lg">
              <p className="text-xs text-muted-foreground mb-1">Tiempo</p>
              <p className="font-semibold">{project.completionTime}</p>
            </div>
            <div className="bg-muted p-4 rounded-lg">
              <p className="text-xs text-muted-foreground mb-1">Dificultad</p>
              <p
                className={`font-semibold ${
                  project.difficulty === 'Fácil'
                    ? 'text-green-600'
                    : project.difficulty === 'Medio'
                      ? 'text-yellow-600'
                      : 'text-red-600'
                }`}
              >
                {project.difficulty}
              </p>
            </div>
            <div className="bg-accent/10 p-4 rounded-lg">
              <p className="text-xs text-muted-foreground mb-1">Estado</p>
              <p className="font-semibold text-accent">Completado</p>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="font-bold font-headline mb-2">Descripción del Proyecto</h3>
            <p className="text-muted-foreground">{project.description}</p>
          </div>

          {/* Client Testimony */}
          <div className="bg-accent/10 border-l-4 border-accent p-4 rounded">
            <p className="text-sm text-muted-foreground mb-2">Testimonio del Cliente</p>
            <p className="text-lg font-semibold italic">"{project.clientTestimony}"</p>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild size="lg" className="flex-1 bg-accent hover:bg-accent/90">
              <Link href="/#contact">Solicitar Presupuesto Similar</Link>
            </Button>
            <Button
              onClick={onClose}
              size="lg"
              variant="outline"
              className="flex-1"
            >
              Cerrar
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ProyectosPage() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filterCategory, setFilterCategory] = useState<string | null>(null);

  const filteredProjects = filterCategory
    ? projects.filter((p) => p.category === filterCategory)
    : projects;

  const categories = Array.from(new Set(projects.map((p) => p.category)));

  return (
    <div className="flex flex-col min-h-screen">
      <ProjectsPageSchema />
      <BreadcrumbSchema items={[
        { name: 'Inicio', url: 'https://www.manosdecapa.es' },
        { name: 'Proyectos', url: 'https://www.manosdecapa.es/proyectos' },
      ]} />
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-accent/10 to-background py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: -20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 className="text-5xl md:text-6xl font-bold font-headline mb-6">
                Nuestros <span className="text-accent">Proyectos Realizados</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Galería de trabajos antes y después. Mira la transformación que conseguimos en cada
                proyecto. Tus muebles también pueden recuperar su belleza original.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter Section */}
        <Section className="bg-muted">
          <div className="mb-8">
            <h2 className="text-2xl font-bold font-headline mb-4">Filtrar por Categoría</h2>
            <div className="flex flex-wrap gap-2">
              <Button
                onClick={() => setFilterCategory(null)}
                className={filterCategory === null ? 'bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/40 font-semibold' : 'bg-background text-foreground hover:bg-background border-2 border-accent/30 hover:border-accent/60 font-medium'}
              >
                Todos ({projects.length})
              </Button>
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => setFilterCategory(category)}
                  className={filterCategory === category ? 'bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/40 font-semibold' : 'bg-background text-foreground hover:bg-background border-2 border-accent/30 hover:border-accent/60 font-medium'}
                >
                  {category} (
                  {projects.filter((p) => p.category === category).length})
                </Button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <motion.div
            key={filterCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={setSelectedProject}
              />
            ))}
          </motion.div>
        </Section>

        {/* Stats Section */}
        <Section className="bg-background">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <p className="text-4xl font-bold text-accent mb-2">{projects.length}+</p>
              <p className="text-lg font-semibold font-headline">Proyectos Completados</p>
              <p className="text-muted-foreground">En los últimos 10 años</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="text-4xl font-bold text-accent mb-2">100%</p>
              <p className="text-lg font-semibold font-headline">Clientes Satisfechos</p>
              <p className="text-muted-foreground">Garantía de calidad en cada trabajo</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-4xl font-bold text-accent mb-2">2-7</p>
              <p className="text-lg font-semibold font-headline">Días Promedio</p>
              <p className="text-muted-foreground">Tiempo de completación</p>
            </motion.div>
          </div>
        </Section>

        {/* CTA Section */}
        <Section className="bg-gradient-to-r from-accent/10 to-accent/5">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
              ¿Tu Mueble Necesita Restauración?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Solicita un presupuesto sin compromiso. Nuestro equipo analizará tu proyecto y te
              dará un presupuesto personalizado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                <Link href="/#contact">Solicitar Presupuesto</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/proceso">Ver Nuestro Proceso</Link>
              </Button>
            </div>
          </motion.div>
        </Section>
      </main>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}

      <Footer />
    </div>
  );
}
