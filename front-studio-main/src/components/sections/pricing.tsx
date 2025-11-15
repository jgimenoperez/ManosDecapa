import { Section } from '@/components/section';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const prices = [
  { item: 'Silla', price: 'desde 35€' },
  { item: 'Mesita / Silla tapizada', price: 'desde 50€' },
  { item: 'Cómoda / Aparador', price: 'desde 120€' },
  { item: 'Puerta', price: 'desde 80€' },
];

export function PricingSection() {
  return (
    <Section id="pricing">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-headline">Precios Orientativos</h2>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
          Precios competitivos para un servicio de máxima calidad.
        </p>
      </div>
      <Card className="max-w-2xl mx-auto shadow-lg">
        <CardHeader>
            <CardTitle className='font-headline'>Tarifas de Decapado</CardTitle>
            <CardDescription>
                *El precio final puede variar según el estado, dimensiones y acabados de la pieza.
            </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[70%] text-base">Tipo de Pieza</TableHead>
                <TableHead className="text-right text-base">Precio</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {prices.map((item) => (
                <TableRow key={item.item}>
                  <TableCell className="font-medium text-base">{item.item}</TableCell>
                  <TableCell className="text-right text-base">{item.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="mt-6 text-center text-sm text-muted-foreground p-4 bg-muted/50 rounded-md">
            <p className="font-bold">**Profesionales:** Póngase en contacto con nosotros para consultar tarifas especiales por volumen.</p>
          </div>
        </CardContent>
      </Card>
    </Section>
  );
}
