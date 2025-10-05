import { useState } from "react";
import { motion } from "framer-motion";

// Accent color utility (keeps buttons en negro, acentos en magenta/cobre suave)
const ACCENT = "rose"; // tailwind color key (rose = magenta cálido)

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } }
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } }
};

const Section = ({ id, eyebrow, title, desc, cta, secondaryCta, children }) => (
  <section id={id} className="relative mx-auto w-full max-w-6xl px-6 py-16 md:py-24 font-sans">
    <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
      {eyebrow && (
        <motion.p variants={item} className={`mb-2 text-sm uppercase tracking-wider text-${ACCENT}-600/80 font-light`}>
          {eyebrow}
        </motion.p>
      )}
      <motion.h2 variants={item} className="mb-4 text-3xl font-semibold leading-tight text-neutral-900 md:text-4xl">
        {title}
      </motion.h2>
      {desc && (
        <motion.p variants={item} className="mb-8 max-w-2xl text-neutral-700 font-light">
          {desc}
        </motion.p>
      )}
      {(cta || secondaryCta) && (
        <motion.div variants={item} className="mb-10 flex flex-wrap items-center gap-3">
          {cta}
          {secondaryCta}
        </motion.div>
      )}
      {children}
    </motion.div>
  </section>
);

const Pill = ({ children }) => (
  <span className={`rounded-full border border-${ACCENT}-200/60 bg-${ACCENT}-50/40 px-3 py-1 text-xs text-${ACCENT}-700 font-light`}>{children}</span>
);

const Card = ({ title, children, footer, tag }) => (
  <motion.div variants={item} className="group relative flex flex-col rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:shadow-md font-sans">
    <div className="mb-3 flex items-center gap-2">
      {tag && <Pill>{tag}</Pill>}
    </div>
    <h3 className="mb-2 text-lg font-semibold text-neutral-900">{title}</h3>
    <p className="mb-4 text-neutral-700 font-light">{children}</p>
    {footer}
  </motion.div>
);

const NavLink = ({ href, children }) => (
  <a href={href} className="text-sm text-neutral-700 transition hover:text-black font-light">
    {children}
  </a>
);

const CTAButton = ({ href = "#", children, variant = "primary" }) => {
  const base = "inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2 font-sans";
  const styles =
    variant === "primary"
      ? "bg-black text-white hover:bg-neutral-800 focus:ring-black"
      : "bg-white text-black ring-1 ring-neutral-300 hover:bg-neutral-50 focus:ring-neutral-400";
  return (
    <a href={href} className={`${base} ${styles}`}>
      {children}
    </a>
  );
};

export default function BestialHome() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b border-neutral-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#top" className="flex items-center gap-2">
            <div className={`flex h-8 w-8 items-center justify-center rounded-lg bg-${ACCENT}-600 text-white`}>🐾</div>
            <span className="text-lg font-semibold tracking-tight">bestial<span className="text-neutral-400">.me</span></span>
          </a>
          <nav className="hidden items-center gap-6 md:flex font-light">
            <NavLink href="#profesion">Profesión</NavLink>
            <NavLink href="#salud">Salud</NavLink>
            <NavLink href="#vida">Vida</NavLink>
            <NavLink href="#formacion">Formación</NavLink>
            <NavLink href="#biblioteca">Biblioteca</NavLink>
          </nav>
          <CTAButton href="#agenda">Agenda tu sesión</CTAButton>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <div className={`pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-${ACCENT}-100/40 blur-3xl`} />
        <div className={`pointer-events-none absolute -left-24 -bottom-24 h-80 w-80 rounded-full bg-${ACCENT}-50/60 blur-3xl`} />

        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-20 md:grid-cols-2 md:py-28">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className={`mb-3 text-sm uppercase tracking-widest text-${ACCENT}-700/90 font-light`}>Exponencia tus capacidades con IA</p>
            <h1 className="mb-4 text-4xl font-semibold leading-tight md:text-5xl">
              Profesión, salud y vida real potenciadas por IA
            </h1>
            <p className="mb-8 max-w-xl text-neutral-700 text-lg font-light leading-relaxed">
              Bestial es lo que sientes cuando la IA se convierte en tu aliada. <br />
              Domina su poder, rompe límites y descubre hasta dónde puedes llegar en todas las facetas de tu vida.
            </p>
            <div className="flex flex-wrap gap-3">
              <CTAButton href="#agenda">Activa tu cambio</CTAButton>
              <CTAButton href="#casos" variant="secondary">Descubre cómo hacerlo</CTAButton>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-2 text-xs text-neutral-500">
              <Pill>Gestión sanitaria</Pill>
              <Pill>Menopausia & bienestar</Pill>
              <Pill>IA doméstica</Pill>
              <Pill>Formación ejecutiva</Pill>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="relative">
            <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden border border-neutral-200 shadow-sm">
              <img
                src="/SARA MARTINEZ FOTO.jpeg"
                alt="Sara Martínez - Bestial.me"
                className="h-full w-full object-contain object-top transition-transform duration-700 hover:scale-105 bg-white"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROFESIÓN */}
      <Section
        id="profesion"
        eyebrow="Profesión"
        title="IA que multiplica tu criterio y tus resultados"
        desc="Consultoría aplicada a salud y gestión: de la predicción de demanda a los tableros ejecutivos. Menos hype, más impacto medible."
        cta={<CTAButton href="#contacto">Potencia tu equipo</CTAButton>}
        secondaryCta={<CTAButton href="#casos" variant="secondary">Explora proyectos reales</CTAButton>}
      >
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="grid gap-6 md:grid-cols-3">
          <Card title="Predicción de demanda" tag="Gestión asistencial" footer={<a href="#" className={`text-sm font-medium text-${ACCENT}-700 underline underline-offset-4`}>Leer caso</a>}>
            Anticipa picos de pacientes y optimiza recursos. Menos colas, más cuidado.
          </Card>
          <Card title="Rutas clínicas inteligentes" tag="Estrategia" footer={<a href="#" className={`text-sm font-medium text-${ACCENT}-700 underline underline-offset-4`}>Leer caso</a>}>
            Protocolos asistidos por IA para decidir mejor y documentar sin fricciones.
          </Card>
          <Card title="Tableros ejecutivos" tag="Dirección" footer={<a href="#" className={`text-sm font-medium text-${ACCENT}-700 underline underline-offset-4`}>Leer caso</a>}>
            KPIs accionables: menos PowerPoint, más decisiones.
          </Card>
        </motion.div>
      </Section>

      {/* SALUD */}
      <Section
        id="salud"
        eyebrow="Salud"
        title="Menopausia, 20 kg menos y una cabeza más ligera"
        desc="IA + ciencia + sentido común. Lo que funcionó de verdad para recuperar energía, foco y bienestar. Sin gurús ni filtros."
        cta={<CTAButton href="#historia">Lee mi historia</CTAButton>}
        secondaryCta={<CTAButton href="#comunidad" variant="secondary">Únete a la comunidad</CTAButton>}
      >
        <div className="grid gap-6 md:grid-cols-2">
          <motion.div variants={item} className="rounded-2xl border border-neutral-200 bg-white p-6">
            <h3 className="mb-2 text-lg font-semibold">Bitácora de progreso</h3>
            <p className="mb-4 text-neutral-700">Métricas simples y honestas: peso, energía y antojos.</p>
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className={`rounded-xl bg-${ACCENT}-50 p-4`}>
                <div className="text-2xl font-semibold">-20 kg</div>
                <div className="text-xs text-neutral-500">Peso</div>
              </div>
              <div className={`rounded-xl bg-${ACCENT}-50 p-4`}>
                <div className="text-2xl font-semibold">+35%</div>
                <div className="text-xs text-neutral-500">Energía</div>
              </div>
              <div className={`rounded-xl bg-${ACCENT}-50 p-4`}>
                <div className="text-2xl font-semibold">-60%</div>
                <div className="text-xs text-neutral-500">Antojos</div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={item} className="rounded-2xl border border-neutral-200 bg-white p-6">
            <h3 className="mb-2 text-lg font-semibold">Toolkit práctico</h3>
            <ul className="list-inside list-disc space-y-2 text-neutral-700">
              <li>Prompts para plan semanal realista.</li>
              <li>Seguimiento hormonal sensato.</li>
              <li>Hábitos micro que sí se sostienen.</li>
            </ul>
          </motion.div>
        </div>
      </Section>

      {/* VIDA */}
      <Section
        id="vida"
        eyebrow="Vida real"
        title="Conservas, orden y creatividad: IA doméstica sin postureo"
        desc="Planifica, cocina y doma el caos. La vida también merece su propio algoritmo."
        cta={<CTAButton href="#tutoriales">Explora tutoriales</CTAButton>}
        secondaryCta={<CTAButton href="#newsletter" variant="secondary">Recibe ideas semanales</CTAButton>}
      >
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="grid gap-6 md:grid-cols-3">
          <Card title="Pantry AI" tag="Cocina">
            Qué cocinar con lo que ya tienes. Prompts + sentido común.
          </Card>
          <Card title="Batching doméstico" tag="Productividad">
            Un domingo bien orquestado: conservas, bases y agenda.
          </Card>
          <Card title="Orden que se mantiene" tag="Hogar">
            Sistemas mínimos viables para no volver al caos.
          </Card>
        </motion.div>
      </Section>

      {/* FORMACIÓN */}
      <Section
        id="formacion"
        eyebrow="Formación"
        title="Talleres y charlas: la IA sin pedestal"
        desc="De CEOs a equipos clínicos o comunidades de mujeres: experiencias prácticas para pensar y hacer mejor con IA."
        cta={<CTAButton href="#eventos">Próximos eventos</CTAButton>}
        secondaryCta={<CTAButton href="#charlas" variant="secondary">Solicita una charla</CTAButton>}
      >
        <div className="grid gap-6 md:grid-cols-3">
          <Card title="IA para dirección" tag="Ejecutivos" footer={<a href="#" className={`text-sm font-medium text-${ACCENT}-700 underline underline-offset-4`}>Ver temario</a>}>
            Riesgos, decisiones y oportunidades. Impacto real, cero humo.
          </Card>
          <Card title="Clínica aumentada" tag="Salud" footer={<a href="#" className={`text-sm font-medium text-${ACCENT}-700 underline underline-offset-4`}>Ver temario</a>}>
            Documentación, triage y pacientes informados.
          </Card>
          <Card title="IA & bienestar" tag="Comunidad" footer={<a href="#" className={`text-sm font-medium text-${ACCENT}-700 underline underline-offset-4`}>Ver temario</a>}>
            Herramientas y hábitos para una vida más ligera.
          </Card>
        </div>
      </Section>

      {/* BIBLIOTECA */}
      <Section
        id="biblioteca"
        eyebrow="Recursos"
        title="Biblioteca Bestial"
        desc="Papers, artículos y referencias que sostienen esta visión: ciencia + criterio humano."
        cta={<CTAButton href="#recursos">Explorar lecturas</CTAButton>}
        secondaryCta={<CTAButton href="#suscripcion" variant="secondary">Guardar colección</CTAButton>}
      >
        <div className="grid gap-4 md:grid-cols-2">
          <motion.div variants={item} className="rounded-xl border border-neutral-200 bg-white p-4">
            <p className={`text-xs uppercase tracking-wider text-${ACCENT}-600/80`}>Artículo</p>
            <h4 className="text-base font-semibold">Modelos de demanda en urgencias</h4>
            <p className="text-sm text-neutral-600">Predicción y gestión para reducir tiempos de espera.</p>
          </motion.div>
          <motion.div variants={item} className="rounded-xl border border-neutral-200 bg-white p-4">
            <p className={`text-xs uppercase tracking-wider text-${ACCENT}-600/80`}>Paper</p>
            <h4 className="text-base font-semibold">IA generativa en documentación clínica</h4>
            <p className="text-sm text-neutral-600">Riesgos, sesgos y cómo mitigarlos.</p>
          </motion.div>
        </div>
      </Section>

      {/* SOBRE MÍ */}
      <Section
        id="sobre-mi"
        eyebrow="Quién soy"
        title="Soy Sara Martínez: médica, estratega y humana curiosa"
        desc="Uso la IA como espejo: no para parecer más lista, sino para pensar mejor."
        cta={<CTAButton href="#contacto">Colaboremos</CTAButton>}
        secondaryCta={<CTAButton href="#agenda" variant="secondary">Agenda una sesión</CTAButton>}
      >
        <div className="grid items-center gap-6 md:grid-cols-3">
          <div className="order-2 md:order-1 md:col-span-2">
            <ul className="list-inside list-disc space-y-2 text-neutral-700">
              <li>Gestión sanitaria y estrategia con impacto.</li>
              <li>Casos reales, métricas claras.</li>
              <li>Voz propia: claridad, ironía y cercanía.</li>
            </ul>
          </div>
          <div className="order-1 md:order-2">
            <div className={`aspect-square w-full rounded-2xl border border-${ACCENT}-200/60 bg-${ACCENT}-50/30`}></div>
          </div>
        </div>
      </Section>

      {/* NEWSLETTER / COMUNIDAD */}
      <section id="newsletter" className="mx-auto w-full max-w-6xl px-6 pb-20">
        <div className={`rounded-3xl border border-neutral-200 bg-gradient-to-tr from-white to-${ACCENT}-50/40 p-8 md:p-12`}>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-2">
              <h3 className="mb-2 text-2xl font-semibold">Bestial Weekly</h3>
              <p className="mb-6 text-neutral-700">Ideas, experimentos y recetas para sobrevivir (y disfrutar) del futuro. Sin spam, con sustancia.</p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert(`Gracias por suscribirte: ${email}`);
                }}
                className="flex flex-col gap-3 sm:flex-row"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  className={`w-full flex-1 rounded-full border border-${ACCENT}-200 bg-white px-4 py-2 text-sm outline-none ring-${ACCENT}-300 placeholder:text-neutral-400 focus:ring-2`}
                />
                <button type="submit" className="rounded-full bg-black px-6 py-2 text-sm font-medium text-white transition hover:bg-neutral-800">
                  Suscribirme
                </button>
              </form>
            </div>
            <div className="flex items-center">
              <p className="text-sm text-neutral-600">Únete a la comunidad: IA para la salud, la empresa y la vida cotidiana. Práctica, honesta y bestial.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-neutral-200 bg-white py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
          <p className="text-sm text-neutral-500">© {new Date().getFullYear()} bestial.me — Lo bestial no es la máquina.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#privacidad" className="text-neutral-600 hover:text-neutral-900">Privacidad</a>
            <a href="#contacto" className="text-neutral-600 hover:text-neutral-900">Contacto</a>
            <a href="#agenda" className="text-neutral-600 hover:text-neutral-900">Agenda</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
