import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, ShieldCheck, FileText, CreditCard, Rocket, Brain, Bot, Building2, Users, TrendingUp, ShoppingCart, Download, Mail, Calendar, CheckCircle2, Link as LinkIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import Logo from '/logo.svg'

const Section = ({ id, children, className = '' }) => (
  <section id={id} className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</section>
)

const Pill = ({ children }) => (
  <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium backdrop-blur bg-white/60">
    {children}
  </span>
)

const FeatureItem = ({ icon: Icon, title, children }) => (
  <div className="flex gap-3">
    <div className="shrink-0 mt-1"><Icon className="h-5 w-5" /></div>
    <div>
      <h4 className="font-semibold leading-tight">{title}</h4>
      <p className="text-sm opacity-80 mt-1">{children}</p>
    </div>
  </div>
)

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-zinc-50 to-white text-zinc-900">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b bg-white/70 backdrop-blur">
        <Section className="flex items-center justify-between py-3">
          <div className="flex items-center gap-2">
            <img src={Logo} alt="Bestial.me" className="h-7 w-7" />
            <span className="font-bold tracking-tight">Búscate la vida • con IA</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#programas" className="opacity-80 hover:opacity-100">Programas</a>
            <a href="#membresia" className="opacity-80 hover:opacity-100">Membresía</a>
            <a href="#docs" className="opacity-80 hover:opacity-100">Documentos</a>
            <a href="#caso" className="opacity-80 hover:opacity-100">Caso real</a>
            <a href="#contacto" className="opacity-80 hover:opacity-100">Contacto</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button className="rounded-2xl" size="sm">
              Reservar sesión
              <Calendar className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </Section>
      </header>

      {/* HERO */}
      <Section id="hero" className="pt-16 pb-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Pill><Sparkles className="mr-1 h-3.5 w-3.5" /> Estrategia sanitaria • IA aplicada</Pill>
              <Pill>Tokenización sociosanitaria</Pill>
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight"
            >
              Búscate la vida. <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-rose-600">Con IA</span>.
            </motion.h1>
            <p className="mt-5 text-lg opacity-90">
              Consejera independiente en innovación sanitaria, longevidad, M&A y blockchain. Liderazgo sin pancarta, impacto con datos. Visión 360°, ejecución 0% humo.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button className="rounded-2xl text-base px-5 py-6">
                Empieza por una 1:1
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="rounded-2xl text-base px-5 py-6">
                Ver programas ejecutivos
              </Button>
            </div>

            <div className="mt-6 text-sm opacity-75 flex items-center gap-2">
              <ShieldCheck className="h-4 w-4" /> Pagos seguros con Stripe • Reserva instantánea
            </div>
          </div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative"
          >
            <div className="aspect-square w-full rounded-3xl bg-gradient-to-tr from-indigo-200 via-fuchsia-200 to-rose-200 p-1">
              <div className="h-full w-full rounded-3xl bg-white flex items-center justify-center">
                <div className="p-8 text-center">
                  <div className="text-6xl">🤖🧬🏥</div>
                  <p className="mt-4 text-sm opacity-80">IA aplicada • Gestión hospitalaria • Bioinvestigación • Longevidad • Tokenización real estate sociosanitario</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* SOCIAL PROOF / TAGLINE */}
      <Section className="py-4">
        <div className="rounded-2xl border p-4 md:p-6 bg-white/60 backdrop-blur">
          <p className="text-center text-sm md:text-base opacity-80">
            “No busco visibilidad. Busco impacto. Trabajo en la sombra; los resultados, a plena luz.”
          </p>
        </div>
      </Section>

      {/* QUÉ HAGO */}
      <Section id="que" className="py-16">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold">Qué hago (y qué no)</h2>
            <FeatureItem icon={Brain} title="Consultoría estratégica 1:1 y para equipos">
              Diagnóstico rápido, roadmap accionable y accountability sin rodeos. Resultados medibles en 90 días.
            </FeatureItem>
            <FeatureItem icon={Users} title="Programas ejecutivos">
              Formación aplicada en IA sanitaria, longevidad, M&A y operaciones. 1:1 o en cohortes.
            </FeatureItem>
            <FeatureItem icon={Building2} title="Arquitectura de negocio y tokenización">
              Diseño de modelos, tokenomics responsables y cumplimiento en real estate sociosanitario.
            </FeatureItem>
            <FeatureItem icon={TrendingUp} title="Liderazgo pragmático">
              Decisiones veloces, foco en valor. Menos PowerPoint, más P&L.
            </FeatureItem>
          </div>

          <Card className="rounded-3xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Bot className="h-5 w-5"/> Tu Copiloto IA (MCP-ready)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm opacity-90">
              <p>
                Integro un <strong>copiloto de IA</strong> para tu organización, con <strong>MCP (Model Context Protocol)</strong> y agentes que orquestan datos, flujos y decisiones.
              </p>
              <ul className="list-disc ml-5 space-y-1">
                <li>Conectores a EHR/ERP, BI y data rooms</li>
                <li>Playbooks de prompts y guardrails</li>
                <li>Dashboards y automatizaciones de backoffice</li>
              </ul>
              <div className="flex gap-2 pt-2">
                <Button size="sm" className="rounded-2xl">Explorar MVP <Rocket className="ml-1 h-4 w-4"/></Button>
                <Button size="sm" variant="outline" className="rounded-2xl">Arquitectura (PDF) <Download className="ml-1 h-4 w-4"/></Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* PROGRAMAS */}
      <Section id="programas" className="py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Programas ejecutivos</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Executive Longevity Intelligence",
              desc: "Diseño de estrategia y pipeline de longevidad: biomarcadores, prevención, negocio.",
              points: ["1:1 intensivo 6 semanas", "KPIs e implementación", "Soporte asíncrono"],
            },
            {
              title: "IA Sanitaria Aplicada",
              desc: "Del caso de uso al ROI: clínica, operaciones, compras y riesgo.",
              points: ["Cohortes reducidas", "Casos reales de hospital", "Plantillas y frameworks"],
            },
            {
              title: "Búscate la vida con IA",
              desc: "Productividad ejecutiva: prompts, agentes, automatizaciones y criterio.",
              points: ["2 sprints/mes", "Playbooks de decisión", "Stack recomendado"],
            },
          ].map((p, i) => (
            <Card key={i} className="rounded-3xl flex flex-col">
              <CardHeader>
                <CardTitle>{p.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-sm opacity-80 mb-4">{p.desc}</p>
                <ul className="text-sm space-y-2 mb-6">
                  {p.points.map((pt, idx) => (
                    <li key={idx} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4"/>{pt}</li>
                  ))}
                </ul>
                <div className="mt-auto flex gap-2">
                  <Button className="rounded-2xl flex-1">Aplicar</Button>
                  <Button variant="outline" className="rounded-2xl" size="icon"><LinkIcon className="h-4 w-4"/></Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* MEMBRESÍA */}
      <Section id="membresia" className="py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Membresía: Sombra con foco</h2>
            <p className="mt-3 opacity-90">Recursos, sesiones grupales, librería viva de documentos y acceso al Copiloto IA básico. Sin ruido, con criterio.</p>
            <ul className="mt-5 space-y-2 text-sm">
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4"/> Sesión grupal mensual</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4"/> Plantillas ejecutivas y checklists</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4"/> Acceso prioritario a 1:1</li>
            </ul>
            <div className="mt-6 flex gap-3">
              <Button className="rounded-2xl">
                Unirme ahora <CreditCard className="ml-2 h-4 w-4"/>
              </Button>
              <Button variant="outline" className="rounded-2xl">Ver qué incluye</Button>
            </div>
            <p className="mt-2 text-xs opacity-60">* Próximamente: niveles Pro/Enterprise con integraciones MCP.</p>
          </div>
          <Card className="rounded-3xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><FileText className="h-5 w-5"/> Documentos y frameworks</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm opacity-90">
              <div className="flex items-center justify-between">
                <span>Due Diligence M&A Sanitario (Checklist)</span>
                <Button size="sm" variant="outline" className="rounded-2xl"><ShoppingCart className="mr-2 h-4 w-4"/>Comprar</Button>
              </div>
              <div className="flex items-center justify-between">
                <span>Guía: Tokenización sociosanitaria responsable</span>
                <Button size="sm" variant="outline" className="rounded-2xl"><ShoppingCart className="mr-2 h-4 w-4"/>Comprar</Button>
              </div>
              <div className="flex items-center justify-between">
                <span>Playbook: IA en operaciones hospitalarias</span>
                <Button size="sm" variant="outline" className="rounded-2xl"><ShoppingCart className="mr-2 h-4 w-4"/>Comprar</Button>
              </div>
              <div className="pt-2 text-xs opacity-60">Pagos con Stripe. Descarga inmediata de PDF/Notion links.</div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* CASO PERSONAL */}
      <Section id="caso" className="py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Caso real: peso, datos y método</h2>
            <p className="mt-3 opacity-90">Pérdida de peso con IA + protocolo monjaouro: un sistema con métricas, adherencia y micro-decisiones diarias. No milagros: procedimientos.</p>
            <ul className="mt-5 space-y-2 text-sm">
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4"/> Dashboard de hábitos y calorías</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4"/> Agentes para planificación semanal</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4"/> Revisión mensual de progreso</li>
            </ul>
          </div>
          <div className="rounded-3xl border p-6 bg-white/60">
            <div className="text-sm opacity-80 space-y-2">
              <p><strong>Resultados (resumen)</strong>: % de grasa, perímetro, VO₂ estimado, adherencia. *Los datos exactos se muestran en sesión.*</p>
              <p>Principio: <em>gestionar como una empresa</em>. Si no se mide, no mejora.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA / NEWSLETTER */}
      <Section id="contacto" className="py-16">
        <div className="rounded-3xl border p-8 bg-gradient-to-br from-zinc-50 to-white">
          <div className="grid md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2">
              <h3 className="text-xl md:text-2xl font-bold">Agenda una llamada o recibe el playbook inicial</h3>
              <p className="mt-2 opacity-80 text-sm">Te envío el PDF "Primeros 30 días con IA" y coordinamos una 1:1. Sin spam. Sin humo.</p>
              <div className="mt-4 flex flex-col sm:flex-row gap-3 max-w-lg">
                <Input placeholder="Tu email" className="rounded-2xl" />
                <Button className="rounded-2xl"><Mail className="mr-2 h-4 w-4"/>Recibir Playbook</Button>
              </div>
              <p className="mt-2 text-xs opacity-60">Al enviar tu email aceptas la política de privacidad.</p>
            </div>
            <div className="">
              <div className="text-sm opacity-90 space-y-2">
                <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4"/> Cumplimiento y ética de IA</div>
                <div className="flex items-center gap-2"><Bot className="h-4 w-4"/> MCP & agentes listos para integrar</div>
                <div className="flex items-center gap-2"><CreditCard className="h-4 w-4"/> Stripe + Checkout en 1 clic (TODO)</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="py-10 border-t">
        <Section className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm opacity-80">
          <div>© {new Date().getFullYear()} • Consejería independiente • Todos los derechos reservados</div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:opacity-100 opacity-80">Privacidad</a>
            <a href="#" className="hover:opacity-100 opacity-80">Términos</a>
            <a href="#" className="hover:opacity-100 opacity-80">Contacto</a>
          </div>
        </Section>
      </footer>
    </div>
  )
}
