import '../framer/styles.css'
import AimFramerComponent from '../framer/aim'
import CardFramerComponent from '../framer/card'
import ClientLogoFramerComponent from '../framer/client-logo'
import CtaFramerComponent from '../framer/cta'
import FooterFramerComponent from '../framer/footer'
import GridFramerComponent from '../framer/grid'
import HeadingCyclerFramerComponent from '../framer/heading-cycler'
import NavLinksFramerComponent from '../framer/nav-links'
import ToolFramerComponent from '../framer/tool'

const clients = [
  { link: 'https://brands.brut.media/brut-adsmanager', fill: 'rgba(255, 255, 255, 0.5)' },
  { link: 'https://www.ornikar.com/stage', fill: 'rgba(255, 255, 255, 0.5)' },
  { link: 'https://www.lfp.fr/', fill: 'rgba(255, 255, 255, 0.43)' },
  { link: 'https://www.emfps.fr/', fill: 'rgba(87, 87, 87, 0.5)' },
  { link: 'https://www.xtensio.eu/', fill: 'rgba(255, 255, 255, 0.43)' },
  { link: 'https://www.squarefactor.app/fr', fill: 'rgba(255, 255, 255, 0.43)' },
  { link: '', fill: 'rgba(255, 255, 255, 0.43)' },
  { link: 'https://www.latribuhappykids.com/', fill: 'rgba(255, 255, 255, 0.43)' },
]

const projects = [
  {
    amount: '2025',
    background: 'rgb(161, 161, 161)',
    link: 'https://brands.brut.media/brut-adsmanager',
    projet: 'Plateforme de gestion de campagnes publicitaires',
    role: 'Dev front & back, automatisations',
    stack: 'WeWeb, Xano, Mailgun',
    title: 'brut.',
    image: 'https://framerusercontent.com/images/iJPrTCnEnfD5IDQNRh3YnfF8zk.png?width=1920&height=1920',
  },
  {
    amount: '2025',
    background: 'rgb(255, 221, 0)',
    link: 'https://goodmotors.agency/',
    projet: 'App web de location de motos',
    role: 'Dev front & back',
    stack: 'Weweb, Xano, Stripe',
    title: 'good motors',
    image: 'https://framerusercontent.com/images/zzsZSJT8dMjBFJ9wz5zhTNsCMI.png?width=1920&height=1440',
  },
  {
    amount: '2025',
    background: 'rgb(147, 137, 214)',
    link: 'https://www.ornikar.com/stage',
    projet: 'Dev front et back, intégration Stripe',
    role: 'Plateforme réservation de stages',
    stack: 'WeWeb, APIs, logique métier',
    title: 'ornikar',
    image: 'https://framerusercontent.com/images/YMlxnor38pclgZ9pXa5tV0QZjeo.png?width=1920&height=1920',
  },
  {
    amount: '2025',
    background: 'rgb(221, 165, 80)',
    link: 'https://www.lfp.fr/',
    projet: 'Application pour l’événement Trophée des Champions',
    role: 'Dev front & back, intégration produit',
    stack: 'WeWeb, Xano',
    title: 'lfp',
    image: 'https://framerusercontent.com/images/ot2dZuX9okvLK0cX4gn8AUSskw.png?width=1920&height=1920',
  },
  {
    amount: '2024',
    background: 'rgb(77, 206, 165)',
    link: '/index.html',
    projet: 'Calcul du potentiel constructible',
    role: 'Conception du moteur de calcul & logique métier',
    stack: 'Weweb, Mapbox, Xano',
    title: 'xtensio',
    image: 'https://framerusercontent.com/images/PteVEBAoXJPpYuK98DVHrBG1wsY.png?width=1920&height=1920',
  },
  {
    amount: '2025-2026',
    background: 'rgb(237, 187, 214)',
    link: 'https://app.dermio.fr/',
    projet: 'CRM & automatisation pour instituts',
    role: 'Produit, architecture & automatisations',
    stack: 'WeWeb, Xano, CRM, workflows',
    title: 'dermio',
    image: 'https://framerusercontent.com/images/IrAlGsxGjgo5hO5RzRVpFf7Y.png?width=1920&height=1920',
  },
]

const tools = [
  {
    name: 'Weweb',
    category: 'front app creation',
    image: 'https://framerusercontent.com/images/Y4DRXodTs3TwtD8oG0VIq4XfRXM.webp?width=200&height=200',
  },
  {
    name: 'Xano',
    category: 'back end',
    image: 'https://framerusercontent.com/images/0CQxCIqwGWOacaKNBmyev4VCl3Y.webp?width=225&height=224',
  },
  {
    name: 'Webflow',
    category: 'web dev',
    image: 'https://framerusercontent.com/images/ZvHIQKWHEWnCLLVPeUoOnWuI0g.webp?width=512&height=512',
  },
  {
    name: 'Notion',
    category: 'gestion',
    image: 'https://framerusercontent.com/images/6OrT7hrhfXHGIcvE1ND3D0Lm8.webp?width=512&height=512',
  },
  {
    name: 'Airtable',
    category: 'CRM',
    image: 'https://framerusercontent.com/images/3NXaK12zXo0i83ngl0bPgMhd05A.webp?width=320&height=320',
  },
  {
    name: 'n8n',
    category: 'automatisations',
    image: 'https://framerusercontent.com/images/Hq9Gakv2rKi1sAgsYCF05g19ukY.webp?width=260&height=260',
  },
  {
    name: 'OpenAI / LLM APIs',
    category: 'intégrations IA',
    image: 'https://framerusercontent.com/images/sl3zjRUpGWQYKmt2hCzmNuGZWE.jpg?width=400&height=400',
  },
  {
    name: 'Stripe',
    category: 'API de paiement',
    image: 'https://framerusercontent.com/images/JAXrUYNhY6YXBPyO9X2GUZ757c.png?width=1504&height=1510',
  },
  {
    name: 'Brevo',
    category: 'email marketing',
    image: 'https://framerusercontent.com/images/xMZktyZjYEA3tYEnTft2l5yVJUc.webp?width=875&height=871',
  },
]

function SectionTag({ label }: { label: string }) {
  return (
    <div className="mb-10 flex items-center gap-4">
      <p className="text-xs text-white/50">{label}</p>
      <div className="h-px flex-1 bg-white/25" />
    </div>
  )
}

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black text-white">
      {/* Grid background sur toute la page */}
      <div className="pointer-events-none absolute inset-0 z-0 flex justify-center">
        <div className="w-full max-w-[1440px]">
          <GridFramerComponent.Responsive
            style={{ height: '100%', width: '100%' }}
            variants={{ base: 'mobile', md: 'tablet', lg: 'laptop', xl: 'laptop' }}
          />
        </div>
        {/* Fondu bas de grille */}
        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-[120px]"
          style={{
            boxShadow: '0 -1.01px 1.01px -.16px #00000042, 0 -2.39px 2.39px -.31px #00000045, 0 -4.36px 4.36px -.47px #0000004a, 0 -7.24px 7.24px -.63px #0000004f, 0 -11.7px 11.7px -.78px #00000059, 0 -19.15px 19.15px -.94px #00000069, 0 -32.97px 32.97px -1.09px #00000087, 0 -60px 60px -1.25px #000000bf',
            backgroundColor: '#000',
          }}
        />
      </div>

      {/* Nav fixed */}
      <div className="fixed top-0 z-50 w-full backdrop-blur-[8px] bg-black/50">
        <div className="mx-auto flex w-full max-w-[1440px] justify-center px-6 lg:px-[120px]">
          <div className="w-full max-w-[1200px]">
            <NavLinksFramerComponent.Responsive
              style={{ width: '100%' }}
              variants={{ base: 'mobile', lg: 'desktop', xl: 'desktop' }}
            />
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col items-center px-6 pt-[83px] lg:px-20">
        <section id="home" className="w-full max-w-[1200px] pb-24 pt-6 lg:pb-32 lg:pt-10">
          {/* Top meta bar : [texte gauche] [dot] [Disponible] — exactement comme l'original */}
          <div className="mb-10 flex items-center gap-1 overflow-hidden text-[11px] lg:mb-14">
            <p className="min-w-0 flex-1 text-white/50">apps web & CRM · intégrations IA · automatisations</p>
            <div className="relative h-[14px] w-[14px] flex-none overflow-hidden">
              <div className="absolute bottom-[2px] left-1/2 h-[7px] w-[7px] -translate-x-1/2 rounded-full bg-[#00ff77]" />
            </div>
            <span className="flex-none text-white/50">Disponible</span>
          </div>

          {/* Heading container avec élément décoratif bottom-right */}
          <div className="relative">
            <HeadingCyclerFramerComponent.Responsive
              C1iMkXo89=""
              DvYyl8ACl="automatisations"
              F5ik83oFx="intégrations IA"
              IXjNbbM7p={0.3}
              Y0F41o9li=""
              kKjkRWIuM="product builder spécialisé"
              m3wlapqCe={1}
              pCl4EXN39="applications web"
              style={{ width: '100%' }}
            />
            {/* Élément décoratif coin bas-droit (desktop uniquement) */}
            <div className="pointer-events-none absolute bottom-0 right-0 hidden lg:block" style={{ width: 36, height: 36 }}>
              {/* Ligne horizontale 1px avec blur */}
              <div
                className="absolute bottom-0 left-0"
                style={{
                  height: 1,
                  right: -36,
                  backdropFilter: 'blur(4px)',
                  backgroundColor: 'rgba(255,255,255,0.25)',
                }}
              />
              {/* Cercle 24x24 débordant en bas-droit */}
              <div
                className="absolute"
                style={{
                  width: 24,
                  height: 24,
                  bottom: -12,
                  right: -12,
                  borderRadius: 201,
                  border: '1px solid rgba(255,255,255,0.25)',
                  overflow: 'hidden',
                }}
              />
            </div>
          </div>
        </section>

        <section className="w-full max-w-[1200px] pb-20 lg:pb-28">
          <SectionTag label=".clients" />
          <div className="grid grid-cols-2 gap-x-4 gap-y-6 md:grid-cols-4 lg:gap-x-6 lg:gap-y-8">
            {clients.map((client, index) => (
              <ClientLogoFramerComponent.Responsive
                key={`${client.link || 'client'}-${index}`}
                PImt_aH6I={client.link}
                XXjY5Z1Kq="rgb(252, 252, 252)"
                aQkpodsV4={client.fill}
                style={{ width: '100%' }}
                variants={{ base: 'Variant 2', lg: 'Variant 1', xl: 'Variant 1' }}
              />
            ))}
          </div>
        </section>

        <section id="projectss" className="w-full max-w-[1200px] pb-20 lg:pb-28">
          <SectionTag label=".projets" />
          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <CardFramerComponent.Responsive
                key={project.title}
                HNdJyx_ZD={project.link}
                MUlgyJEIg="rgb(0, 0, 0)"
                N2NdkcDAy={project.image}
                POe5RX9yr={project.amount}
                W0Rf3F34c={project.stack}
                avVKDWRIG={project.role}
                enyQTFGl5={project.background}
                jQPFv_4xA="0px"
                lSB3XNzQs={project.projet}
                style={{ borderRadius: 8, height: '100%', width: '100%' }}
                v4nQNdbNw={project.title}
                variants={{ base: 'mobile', md: 'tablet', lg: 'laptop', xl: 'laptop' }}
              />
            ))}
          </div>
        </section>

        <section id="about" className="w-full max-w-[1200px] pb-20 lg:pb-28">
          <AimFramerComponent.Responsive style={{ width: '100%' }} />
        </section>

        <section id="stack" className="w-full max-w-[1200px] pb-20 lg:pb-28">
          <SectionTag label=".stack" />
          <div className="grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-14">
            {tools.map((tool) => (
              <ToolFramerComponent.Responsive
                key={tool.name}
                JN95yfhUz={tool.name}
                rbjrvi7FU={tool.image}
                sA3LlWG4k={tool.category}
                style={{ width: '100%' }}
                variants={{ base: 'Variant 2', lg: 'Variant 1', xl: 'Variant 1' }}
              />
            ))}
          </div>
        </section>

        <section id="contact" className="w-full max-w-[1200px] pb-20">
          <CtaFramerComponent.Responsive
            style={{ width: '100%' }}
            variants={{ base: 'mobile', lg: 'desktop', xl: 'desktop' }}
          />
        </section>

        <section className="w-full max-w-[1200px] pb-10">
          <FooterFramerComponent.Responsive
            style={{ width: '100%' }}
            variants={{ base: 'Variant 2', lg: 'Variant 1', xl: 'Variant 1' }}
          />
        </section>
      </div>
    </div>
  )
}
