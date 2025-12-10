import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { Section } from './components/Section';
import { BRAND_COLORS, MENU_ITEMS } from './constants';
import { LogoFull, LogoMark, LogoName, LogoLockup } from './components/BrandAssets';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('introduksjon');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2 }
    );

    MENU_ITEMS.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-brand-light/20 font-sans text-brand-dark selection:bg-brand-gold selection:text-brand-white">
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-40 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
           <LogoMark className="w-8 h-8 text-brand-dark" />
           <span className="font-bold tracking-wide">Vidde</span>
        </div>
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 text-brand-dark bg-brand-light rounded-lg"
        >
          {isSidebarOpen ? "Lukk" : "Meny"}
        </button>
      </div>

      <Sidebar 
        activeSection={activeSection} 
        isOpen={isSidebarOpen} 
        setIsOpen={setIsSidebarOpen} 
      />

      {/* Main Content Area */}
      <main className="lg:ml-[280px] p-6 lg:p-12 max-w-[1920px]">
        
        {/* Intro Hero */}
        <section id="introduksjon" className="min-h-[90vh] flex flex-col justify-center mb-12 rounded-[3rem] bg-brand-dark text-white p-8 lg:p-24 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-gold opacity-10 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
           <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-slate opacity-20 blur-[100px] rounded-full -translate-x-1/3 translate-y-1/3"></div>
           
           <div className="relative z-10 max-w-4xl">
             <span className="inline-block px-5 py-2 rounded-full bg-white/5 backdrop-blur-sm text-sm font-bold tracking-widest uppercase mb-12 text-brand-beige">
               Brand Guidelines 2026
             </span>
             <h1 className="text-6xl lg:text-9xl font-medium tracking-tight leading-[0.95] mb-12">
               vidde <span className="font-serif text-brand-gold">hever</span><br/>
               <span>kompetanse.</span>
             </h1>
             <p className="text-xl lg:text-2xl text-brand-slate text-opacity-80 max-w-2xl leading-relaxed font-normal tracking-wide">
               En visuell identitet bygget på nordisk minimalisme, varme jordtoner og menneskelig interaksjon.
             </p>
           </div>
        </section>

        {/* Logomerket */}
        <Section id="logomerket" title="Symbol">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
             {/* 1. Dark / White (High Contrast) */}
             <div className="aspect-square bg-brand-dark rounded-[2.5rem] flex items-center justify-center p-12 group hover:scale-105 transition-transform duration-500 ease-out">
               <LogoMark className="w-full h-full text-white" />
             </div>
             
             {/* 2. Slate / White */}
             <div className="aspect-square bg-brand-slate rounded-[2.5rem] flex items-center justify-center p-12 group hover:scale-105 transition-transform duration-500 ease-out">
               <LogoMark className="w-full h-full text-white" />
             </div>

             {/* 3. Brown / Beige */}
             <div className="aspect-square bg-brand-brown rounded-[2.5rem] flex items-center justify-center p-12 group hover:scale-105 transition-transform duration-500 ease-out">
               <LogoMark className="w-full h-full text-brand-beige" />
             </div>

             {/* 4. Gold / White (Soft) */}
             <div className="aspect-square bg-brand-gold rounded-[2.5rem] flex items-center justify-center p-12 group hover:scale-105 transition-transform duration-500 ease-out">
               <LogoMark className="w-full h-full text-white" />
             </div>

             {/* 5. White / Dark */}
             <div className="aspect-square bg-white rounded-[2.5rem] flex items-center justify-center p-12 group hover:scale-105 transition-transform duration-500 ease-out">
               <LogoMark className="w-full h-full text-brand-dark" />
             </div>

             {/* 6. Light / Slate */}
             <div className="aspect-square bg-brand-light rounded-[2.5rem] flex items-center justify-center p-12 group hover:scale-105 transition-transform duration-500 ease-out">
               <LogoMark className="w-full h-full text-brand-slate" />
             </div>

             {/* 7. Beige / Brown */}
             <div className="aspect-square bg-brand-beige rounded-[2.5rem] flex items-center justify-center p-12 group hover:scale-105 transition-transform duration-500 ease-out">
               <LogoMark className="w-full h-full text-brand-brown" />
             </div>

             {/* 8. Dark / Gold */}
             <div className="aspect-square bg-brand-dark rounded-[2.5rem] flex items-center justify-center p-12 group hover:scale-105 transition-transform duration-500 ease-out">
               <LogoMark className="w-full h-full text-brand-gold" />
             </div>
          </div>
          <div className="mt-12 bg-white rounded-3xl p-12">
             <div className="flex flex-col md:flex-row gap-12 items-start">
               <div className="flex-1">
                 <h3 className="text-2xl font-medium mb-4 tracking-tight">Konseptet</h3>
                 <p className="text-brand-slate leading-loose font-normal tracking-wide">
                   Symbolet er en abstraksjon av en vidde, et landskap som åpner seg. De to formene som møtes skaper en spenning og dynamikk som representerer kunnskapsutveksling.
                 </p>
               </div>
               <div className="flex gap-4">
                 <div className="px-6 py-3 bg-brand-light rounded-xl text-xs font-bold text-brand-slate uppercase tracking-widest">Ratio 1:1</div>
                 <div className="px-6 py-3 bg-brand-light rounded-xl text-xs font-bold text-brand-slate uppercase tracking-widest">SVG</div>
               </div>
             </div>
          </div>
        </Section>

        {/* Navnetrekket */}
        <Section id="navnetrekket" title="Logo">
          <div className="flex flex-col gap-8">
            {/* Primary Logo Construction */}
            <div className="bg-white rounded-[2.5rem] p-12 lg:p-32 flex items-center justify-center min-h-[400px]">
               <LogoLockup className="w-full max-w-3xl" color="#0F161A" secondaryColor="#677A7E" />
            </div>

            {/* Color Variations Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {/* Dark Background */}
               <div className="bg-brand-dark rounded-[2.5rem] p-20 flex items-center justify-center text-white">
                  <LogoLockup className="w-full max-w-md" color="#FFFFFF" secondaryColor="#C69865" />
               </div>
               
               {/* Beige Background */}
               <div className="bg-brand-beige rounded-[2.5rem] p-20 flex items-center justify-center relative overflow-hidden">
                  <LogoLockup className="w-full max-w-md relative z-10" color="#0F161A" secondaryColor="#2A2119" />
               </div>

               {/* Slate Background */}
               <div className="bg-brand-slate rounded-[2.5rem] p-20 flex items-center justify-center">
                   <LogoLockup className="w-full max-w-md" color="#FFFFFF" secondaryColor="#F3FBFC" />
               </div>

               {/* Gold Background */}
               <div className="bg-brand-gold rounded-[2.5rem] p-20 flex items-center justify-center">
                   <LogoLockup className="w-full max-w-md" color="#0F161A" secondaryColor="#FFFFFF" />
               </div>
            </div>
          </div>
        </Section>

        {/* Typografi */}
        <Section id="typografi" title="Typografi">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
             {/* General Sans Card */}
             <div className="bg-white rounded-[2.5rem] p-16 flex flex-col justify-between min-h-[500px] group">
                <div>
                  <span className="inline-block px-4 py-1.5 rounded-full bg-brand-light text-brand-dark text-xs font-bold uppercase tracking-widest mb-12">Primærfont</span>
                  <h3 className="text-6xl md:text-8xl font-light tracking-tight mb-4">General<br/>Sans</h3>
                </div>
                <div className="flex justify-between items-end pt-12">
                   <div className="flex gap-6 text-sm font-bold tracking-wide">
                      <span>Light</span>
                      <span className="text-brand-slate">Regular</span>
                      <span className="text-brand-slate opacity-60">Medium</span>
                   </div>
                   <span className="text-4xl">Aa</span>
                </div>
             </div>

             {/* Hedvig Letters Card */}
             <div className="bg-[#FDFCFB] rounded-[2.5rem] p-16 flex flex-col justify-between min-h-[500px]">
                <div>
                  <span className="inline-block px-4 py-1.5 rounded-full bg-brand-brown text-white text-xs font-bold uppercase tracking-widest mb-12">Sekundærfont</span>
                  <h3 className="text-6xl md:text-8xl font-serif text-brand-dark mb-4">Hedvig<br/>Letters</h3>
                </div>
                <div className="flex justify-between items-end pt-12">
                   <p className="font-serif text-2xl text-brand-slate">"Editorial & Human"</p>
                   <span className="text-4xl font-serif">Aa</span>
                </div>
             </div>
          </div>

          <div className="bg-white rounded-[2.5rem] p-16 mb-8">
             <div className="grid gap-16">
               {[
                  { tag: 'H1', size: '80px', text: 'Vidde hever kompetanse', styles: 'text-5xl md:text-7xl font-light tracking-tight' },
                  { tag: 'H2', size: '48px', text: 'En ny standard for læring', styles: 'text-3xl md:text-5xl font-light tracking-tight' },
                  { tag: 'Body', size: '18px', text: 'Våre kursholdere er ledende eksperter innen sine felt. Vi setter høye krav til både faglig innhold og pedagogisk gjennomføring.', styles: 'text-lg md:text-xl text-brand-slate max-w-2xl leading-relaxed font-normal tracking-wide' },
               ].map((item, i) => (
                 <div key={i} className="grid grid-cols-1 md:grid-cols-12 gap-8 items-baseline group">
                    <div className="md:col-span-2">
                       <span className="text-xs font-bold tracking-widest text-brand-slate opacity-60 uppercase">{item.tag} — {item.size}</span>
                    </div>
                    <div className="md:col-span-10">
                       <p className={`${item.styles} group-hover:text-brand-slate transition-colors`}>{item.text}</p>
                    </div>
                 </div>
               ))}
             </div>
          </div>
        </Section>

        {/* Font Miksing Section */}
        <Section id="font-miksing" title="Font-miksing">
          <div className="mb-16">
            <p className="text-xl text-brand-slate max-w-2xl font-normal leading-relaxed tracking-wide">
              Kombinasjonen av General Sans og Hedvig Letters Serif skaper et spenningsfelt mellom det moderne, tekniske og det klassiske, humanistiske.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-8">
             <div className="bg-white p-16 rounded-[2.5rem] min-h-[450px] flex flex-col justify-between">
                <div>
                   <span className="text-xs font-bold text-brand-slate opacity-60 uppercase tracking-widest mb-6 block">Editorial</span>
                   <h3 className="font-serif text-5xl md:text-6xl mb-8 leading-tight">Mennesket i sentrum av teknologi</h3>
                   <p className="text-xl leading-relaxed text-brand-slate font-sans font-normal tracking-wide">
                     Vi tror på en fremtid der teknologi tjener menneskelige behov, ikke omvendt. Vår tilnærming kombinerer data med empati.
                   </p>
                </div>
             </div>
             
             <div className="bg-brand-light p-16 rounded-[2.5rem] min-h-[450px] flex flex-col justify-center">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-slate mb-8 block">Sitat</span>
                <p className="font-serif text-4xl text-brand-dark leading-snug mb-10">
                  "Det handler ikke om hva du lærer, men hvordan du anvender det i hverdagen."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-gold"></div>
                  <span className="text-sm font-bold font-sans tracking-wide">Vidde Metodikk</span>
                </div>
             </div>
          </div>

          {/* Mixed Font Large Statement */}
          <div className="bg-white p-20 rounded-[2.5rem] flex items-center justify-center">
              <div className="text-center max-w-5xl">
                <p className="text-3xl md:text-5xl leading-tight text-brand-dark font-serif">
                  Vi kombinerer <span className="font-sans font-bold tracking-tight">forskningsbasert</span> innsikt med praktisk erfaring, <span className="font-sans font-bold tracking-tight">vidde</span> gjør avansert psykologi tilgjengelig, relevant og anvendbart i <span className="font-sans font-bold tracking-tight">din</span> arbeidshverdag.
                </p>
              </div>
          </div>
        </Section>

        {/* Farger */}
        <Section id="farger" title="Farger">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {BRAND_COLORS.map((color) => (
              <div key={color.hex} className="group cursor-default">
                <div 
                  className="aspect-[4/3] rounded-[2.5rem] mb-8 group-hover:scale-95 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]"
                  style={{ backgroundColor: color.hex }}
                ></div>
                <div className="px-2">
                  <h4 className="font-medium text-brand-dark text-2xl mb-4 tracking-tight">{color.name}</h4>
                  <div className="space-y-2 font-mono text-sm text-brand-slate leading-relaxed opacity-80">
                    <p><span className="opacity-40 w-12 inline-block">PMS</span> {color.pms}</p>
                    <p><span className="opacity-40 w-12 inline-block">CMYK</span> {color.cmyk}</p>
                    <p><span className="opacity-40 w-12 inline-block">RGB</span> {color.rgb}</p>
                    <p><span className="opacity-40 w-12 inline-block">HEX</span> {color.hex}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Bildebruk */}
        <Section id="bildebruk" title="Illustrasjon">
          <div className="bg-white rounded-[2.5rem] p-6 lg:p-8 overflow-hidden">
            <div className="relative rounded-[2rem] overflow-hidden aspect-[16/9] group">
               <img 
                 src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2200&auto=format&fit=crop"
                 alt="Vidde Surrealist Line Art" 
                 className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale contrast-125 mix-blend-multiply"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/20 to-transparent"></div>
               <div className="absolute bottom-12 left-12 text-white max-w-md">
                  <h3 className="text-3xl font-medium mb-2 tracking-tight">Surrealistisk Linjekunst</h3>
                  <p className="opacity-90 font-medium tracking-wide">Organisk linjeføring møter streng geometri.</p>
               </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
               <div className="bg-brand-light rounded-[2rem] p-10 md:col-span-2 flex flex-col justify-center">
                  <h4 className="font-medium text-2xl mb-4 tracking-tight">Prompt Engineering</h4>
                  <p className="text-brand-slate text-sm font-mono bg-white p-6 rounded-2xl leading-relaxed">
                    /imagine prompt: surreal line art illustration, two human profiles facing each other, intricate parallel line hatching texture...
                  </p>
               </div>
               <div className="bg-brand-dark text-white rounded-[2rem] p-10 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl font-serif mb-3">V.6</div>
                    <div className="text-xs opacity-50 font-bold uppercase tracking-widest">Midjourney</div>
                  </div>
               </div>
            </div>
          </div>
        </Section>

        {/* Sosiale Medier */}
        <Section id="sosiale-medier" title="Sosiale Medier">
          {/* Platforms Grid */}
          <div className="space-y-16 mb-20">
            
            {/* LinkedIn & Facebook (Corporate) */}
            <div>
              <h3 className="text-2xl font-medium mb-8 tracking-tight">LinkedIn & Facebook</h3>
              <div className="bg-white rounded-[2.5rem] overflow-hidden">
                {/* Banner */}
                <div className="aspect-[4/1] bg-brand-slate relative flex items-center justify-center overflow-hidden">
                     {/* Abstract bg */}
                     <div className="absolute inset-0 opacity-20">
                        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <path d="M0 100 L100 0 L100 100 Z" fill="#0F161A" />
                        </svg>
                     </div>
                     <LogoLockup className="w-64 text-white relative z-10" />
                     <div className="absolute bottom-6 right-6 bg-brand-dark/20 backdrop-blur-md px-4 py-2 rounded-full text-[10px] text-white font-mono tracking-widest">
                        COVER 1128x191
                     </div>
                </div>
                <div className="px-10 pb-10 relative">
                     <div className="flex justify-between items-end -mt-16">
                        {/* Profile Pic */}
                        <div className="w-32 h-32 rounded-full bg-brand-dark shadow-2xl flex items-center justify-center relative z-10 p-2">
                             <div className="w-full h-full rounded-full border-4 border-white flex items-center justify-center">
                                <LogoMark className="w-12 text-white" />
                             </div>
                        </div>
                        <div className="mb-2 text-right">
                            <h4 className="font-bold text-xl text-brand-dark">Vidde Kompetanse</h4>
                            <p className="text-brand-slate text-sm font-medium tracking-wide">Education Management • Oslo</p>
                        </div>
                     </div>
                </div>
              </div>
            </div>

            {/* Instagram (Visual) */}
            <div>
              <h3 className="text-2xl font-medium mb-8 tracking-tight">Instagram</h3>
               <div className="bg-white rounded-[2.5rem] p-12 max-w-2xl">
                  <div className="flex items-center gap-10 mb-10">
                     <div className="w-24 h-24 rounded-full bg-brand-dark flex items-center justify-center relative">
                        <LogoMark className="w-10 text-white" />
                     </div>
                     <div>
                        <h4 className="font-bold text-lg mb-2 tracking-wide">vidde.kompetanse</h4>
                        <p className="text-sm text-brand-slate leading-relaxed">
                           <span className="font-bold text-brand-dark">Vidde.</span> Vi hever kompetanse gjennom innsikt og praksis.<br/>
                           <span className="opacity-60">#vidde #kompetanse #ledelse</span><br/>
                           <a href="#" className="text-brand-dark font-medium hover:underline decoration-brand-gold underline-offset-4">www.vidde.no</a>
                        </p>
                     </div>
                  </div>
                  {/* Highlights */}
                  <div className="flex gap-6 overflow-x-auto pb-4">
                     {['Kurs', 'Folk', 'Event', 'Tips'].map((label, i) => (
                        <div key={i} className="flex flex-col items-center gap-3 min-w-[70px]">
                           <div className="w-16 h-16 rounded-full bg-brand-light flex items-center justify-center">
                              <LogoMark className="w-6 text-brand-slate opacity-50" />
                           </div>
                           <span className="text-xs font-bold tracking-wide">{label}</span>
                        </div>
                     ))}
                  </div>
               </div>
            </div>

            {/* YouTube */}
            <div>
               <h3 className="text-2xl font-medium mb-8 tracking-tight">YouTube</h3>
               <div className="bg-white rounded-[2.5rem] overflow-hidden">
                  <div className="aspect-[16/3] bg-brand-brown relative flex items-center justify-center">
                      <LogoFull className="w-48 text-white opacity-90" />
                  </div>
                  <div className="px-10 py-8 flex items-center gap-6">
                       <div className="w-16 h-16 rounded-full bg-brand-gold flex items-center justify-center shrink-0">
                          <LogoMark className="w-8 text-brand-dark" />
                       </div>
                       <div>
                          <h4 className="font-bold text-lg tracking-wide">Vidde TV</h4>
                          <p className="text-brand-slate text-sm font-medium">@vidde • 1.2K subscribers</p>
                       </div>
                  </div>
               </div>
            </div>
          </div>

          <h3 className="text-2xl font-medium mb-16 pt-12">Annonseformater</h3>
          
          <div className="space-y-32">
             
             {/* 1. STORIES (9:16) */}
             <div>
                <div className="flex items-baseline justify-between mb-10">
                   <h4 className="text-2xl font-bold tracking-tight">Story (9:16)</h4>
                   <span className="text-sm font-bold tracking-widest text-brand-slate opacity-60">1080 x 1920</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                   
                   {/* Story 1 - Clean Minimal */}
                   <div className="aspect-[9/16] bg-brand-beige rounded-[2.5rem] relative overflow-hidden group">
                      <img 
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop"
                        className="absolute inset-0 w-full h-full object-cover grayscale opacity-20 mix-blend-multiply"
                        alt="Workshop"
                      />
                      <div className="absolute inset-0 flex flex-col justify-between p-10">
                         <LogoFull className="w-24 text-brand-dark" color="#0F161A" />
                         
                         <div className="bg-white/[0.02] backdrop-blur-3xl p-10 rounded-[2.5rem]">
                             <span className="text-xs font-bold tracking-widest uppercase text-brand-slate mb-4 block">Masterclass</span>
                             <h4 className="text-3xl font-serif text-brand-dark leading-tight mb-8">Psykologisk trygghet i ledergruppen.</h4>
                             <button className="w-full py-5 bg-brand-dark text-white rounded-full text-xs font-bold tracking-widest uppercase hover:bg-brand-slate transition-colors">Meld deg på</button>
                         </div>
                      </div>
                   </div>

                   {/* Story 2 - Dark & Bold */}
                   <div className="aspect-[9/16] bg-brand-dark rounded-[2.5rem] relative overflow-hidden group flex flex-col p-10">
                       <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold blur-[120px] opacity-20 rounded-full pointer-events-none"></div>
                       <LogoMark className="w-12 text-white opacity-50 absolute top-10 left-10" />
                       
                       <div className="flex-1 flex flex-col justify-center relative z-10">
                          <h3 className="text-5xl text-white leading-[1.05] mb-10">
                             Lær å lede<br/><span className="font-serif text-brand-gold">med hjertet.</span>
                          </h3>
                          <p className="text-white/60 text-lg font-medium tracking-wide">Nytt kull starter 15. august.</p>
                       </div>
                       
                       <button className="w-full py-5 bg-white text-brand-dark rounded-full text-xs font-bold tracking-widest uppercase">Les mer</button>
                   </div>

                   {/* Story 3 - High Converting Split */}
                   <div className="aspect-[9/16] bg-brand-light rounded-[2.5rem] relative overflow-hidden group flex flex-col">
                       <div className="h-[60%] bg-brand-slate relative">
                           <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover opacity-80 mix-blend-overlay" alt="Woman" />
                           <div className="absolute inset-0 flex items-center justify-center">
                               <h3 className="text-white text-4xl font-serif text-center px-8">"Kunnskap er ferskvare."</h3>
                           </div>
                       </div>
                       <div className="h-[40%] p-10 flex flex-col justify-between bg-white">
                           <p className="text-brand-dark text-xl font-medium leading-relaxed tracking-wide">
                              Sikre din plass på høstens viktigste konferanse.
                           </p>
                           <button className="flex items-center justify-between w-full p-5 bg-brand-light rounded-3xl group hover:bg-brand-beige transition-colors">
                              <span className="font-bold text-xs tracking-widest uppercase text-brand-dark">Kjøp billett</span>
                              <div className="w-8 h-8 rounded-full bg-brand-dark text-white flex items-center justify-center text-sm">→</div>
                           </button>
                       </div>
                   </div>

                   {/* Story 4: Recruitment */}
                   <div className="aspect-[9/16] bg-brand-brown rounded-[2.5rem] relative overflow-hidden group flex flex-col p-10">
                       <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
                       <div className="relative z-10 flex justify-between items-start">
                          <LogoMark className="w-10 text-white" />
                          <span className="text-white/50 font-bold text-[10px] tracking-widest uppercase bg-white/10 px-3 py-1.5 rounded-full">KARRIERE</span>
                       </div>
                       <div className="relative z-10 mt-auto mb-12">
                          <h2 className="text-5xl font-serif text-white mb-8">Vi søker<br/>flere hoder.</h2>
                          <div className="space-y-4">
                              <div className="flex items-center gap-4 text-white/80">
                                  <div className="w-1.5 h-1.5 bg-brand-gold rounded-full"></div>
                                  <span className="font-medium tracking-wide">Seniorrådgiver</span>
                              </div>
                              <div className="flex items-center gap-4 text-white/80">
                                  <div className="w-1.5 h-1.5 bg-brand-gold rounded-full"></div>
                                  <span className="font-medium tracking-wide">Prosjektleder</span>
                              </div>
                          </div>
                       </div>
                       <button className="relative z-10 w-full py-5 bg-white/10 backdrop-blur-md text-white rounded-full text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-brand-brown transition-colors">Se stillinger</button>
                   </div>

                   {/* Story 5: Podcast Teaser (Clean) */}
                   <div className="aspect-[9/16] bg-brand-light rounded-[2.5rem] relative overflow-hidden group flex flex-col items-center justify-center p-10 text-center">
                       <div className="w-48 h-48 rounded-full bg-white shadow-2xl flex items-center justify-center mb-12 relative">
                           <LogoMark className="w-20 text-brand-dark" />
                           <div className="absolute -bottom-4 bg-brand-dark text-white px-5 py-2 rounded-full text-[10px] font-bold tracking-widest uppercase">NY EPISODE</div>
                       </div>
                       <h3 className="text-brand-dark text-3xl font-serif mb-6">Vidde Podden</h3>
                       <p className="text-brand-slate font-medium max-w-[220px] mx-auto mb-12 leading-relaxed tracking-wide">Hvordan navigere endring i store organisasjoner.</p>
                       <div className="animate-bounce">
                           <span className="text-xs font-bold uppercase tracking-widest text-brand-dark">Lytt nå</span>
                       </div>
                   </div>

                   {/* Story 6: Did you know? (Calm) */}
                   <div className="aspect-[9/16] bg-brand-beige rounded-[2.5rem] relative overflow-hidden group p-10 flex flex-col">
                       <div className="w-full h-1.5 bg-brand-dark/5 mb-12 rounded-full overflow-hidden">
                           <div className="w-1/3 h-full bg-brand-dark"></div>
                       </div>
                       <h3 className="text-brand-dark font-bold text-[10px] uppercase tracking-widest mb-4 opacity-40">Innsikt</h3>
                       <p className="text-4xl font-serif text-brand-dark leading-tight mb-10">
                           40% av ansatte føler seg mindre produktive uten riktig kompetanseheving.
                       </p>
                       <div className="mt-auto">
                           <button className="w-full py-5 bg-white text-brand-dark rounded-3xl text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-3">
                               Last ned rapport <span className="text-brand-gold text-lg">↓</span>
                           </button>
                       </div>
                   </div>

                   {/* Story 7: Countdown (Urgency but Calm) */}
                   <div className="aspect-[9/16] bg-brand-slate rounded-[2.5rem] relative overflow-hidden group flex flex-col items-center justify-center text-center p-10">
                       <span className="text-white/80 font-bold uppercase tracking-widest text-xs mb-10">Konferansen 2026</span>
                       <div className="text-[12rem] font-serif text-white leading-none mb-6">03</div>
                       <div className="text-xl font-medium text-brand-gold uppercase tracking-widest">Dager igjen</div>
                       <button className="absolute bottom-10 w-full max-w-xs py-5 bg-brand-gold text-brand-dark font-bold tracking-widest uppercase rounded-full text-xs">Sikre din plass</button>
                   </div>

                   {/* Story 8: Testimonial (Trust) */}
                   <div className="aspect-[9/16] bg-white rounded-[2.5rem] relative overflow-hidden group p-12 flex flex-col justify-center">
                       <div className="mb-10 flex gap-2">
                           {[1,2,3,4,5].map(i => <span key={i} className="text-brand-gold text-2xl">★</span>)}
                       </div>
                       <p className="text-3xl font-serif text-brand-dark leading-tight relative z-10 mb-12">
                           "Dette kurset endret måten jeg leder på. Enestående faglig tyngde."
                       </p>
                       <div className="flex items-center gap-5">
                           <div className="w-14 h-14 rounded-full bg-brand-light overflow-hidden">
                               <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop" className="w-full h-full object-cover" alt="User" />
                           </div>
                           <div>
                               <div className="font-bold text-brand-dark text-sm tracking-wide">Anna Olsen</div>
                               <div className="font-medium text-brand-slate text-xs tracking-wide opacity-60">HR Direktør</div>
                           </div>
                       </div>
                   </div>

                   {/* Story 9: Behind scenes (Authentic) */}
                   <div className="aspect-[9/16] bg-brand-dark rounded-[2.5rem] relative overflow-hidden group">
                       <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-80" alt="Team" />
                       <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                       <div className="absolute bottom-0 left-0 w-full p-10">
                           <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-bold tracking-widest text-white inline-block mb-6">BAK FASADEN</div>
                           <h3 className="text-white font-serif text-4xl mb-6">Slik jobber vi.</h3>
                           <div className="h-1 w-full bg-white/20 rounded-full overflow-hidden">
                               <div className="h-full w-1/2 bg-white"></div>
                           </div>
                       </div>
                   </div>

                </div>
             </div>

             {/* 2. FEED (1:1) */}
             <div>
                <div className="flex items-baseline justify-between mb-10">
                   <h4 className="text-2xl font-bold tracking-tight">Feed (1:1)</h4>
                   <span className="text-sm font-bold tracking-widest text-brand-slate opacity-60">1080 x 1080</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                   
                   {/* Feed 1 - The "Hook" */}
                   <div className="aspect-square bg-brand-dark rounded-[2.5rem] relative overflow-hidden group">
                      <img 
                        src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000&auto=format&fit=crop"
                        className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale"
                        alt="Meeting"
                      />
                      <div className="absolute inset-0 flex items-center justify-center p-8">
                          <div className="bg-white/[0.05] backdrop-blur-3xl p-10 rounded-[2.5rem] text-center w-full h-full flex flex-col items-center justify-center">
                             <span className="text-brand-gold font-bold tracking-widest text-[10px] uppercase mb-4">Event</span>
                             <h4 className="text-5xl text-white font-serif mb-2 leading-none">Leder<br/>Dagen</h4>
                             <p className="text-white/60 text-xs font-medium tracking-widest mt-6">20. OKT • OSLO SPEKTRUM</p>
                          </div>
                      </div>
                   </div>

                   {/* Feed 2 - Quote (Calm) */}
                   <div className="aspect-square bg-white rounded-[2.5rem] relative overflow-hidden group p-10 flex flex-col justify-between">
                       <LogoMark className="w-8 text-brand-slate opacity-50" />
                       <div className="py-2">
                          <p className="text-3xl font-serif text-brand-dark leading-snug">
                             Vi må tørre å snakke om det som er <span className="text-brand-brown bg-brand-beige px-2 rounded-lg italic">vanskelig</span> på jobb.
                          </p>
                       </div>
                       <div className="flex items-center justify-between">
                          <div className="text-[10px] font-bold uppercase tracking-widest text-brand-slate opacity-60">Vidde Podcast</div>
                          <div className="w-10 h-10 rounded-full bg-brand-light flex items-center justify-center text-brand-dark">▶</div>
                       </div>
                   </div>

                   {/* Feed 3 - Offer (Action) */}
                   <div className="aspect-square bg-brand-gold rounded-[2.5rem] relative overflow-hidden group p-10 flex flex-col text-center justify-center">
                       <span className="text-brand-dark/60 font-bold tracking-widest text-[10px] uppercase mb-4">Early Bird</span>
                       <h3 className="text-8xl font-serif text-brand-dark mb-4">-30%</h3>
                       <p className="text-brand-dark font-medium text-sm mb-8 max-w-[180px] mx-auto leading-relaxed">På alle lederkurs ved bestilling før 1. juni.</p>
                       <button className="bg-brand-dark text-white px-8 py-4 rounded-full font-bold text-xs tracking-widest uppercase mx-auto">Bestill nå</button>
                   </div>

                   {/* Feed 4: Minimal Photo w/ Tag */}
                   <div className="aspect-square bg-gray-100 rounded-[2.5rem] relative overflow-hidden group">
                       <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover" alt="Office" />
                       <div className="absolute top-8 right-8">
                           <span className="bg-white/90 backdrop-blur-md px-5 py-2.5 rounded-full font-bold text-brand-dark text-[10px] tracking-widest uppercase">Nytt kontor</span>
                       </div>
                   </div>

                   {/* Feed 5: Stats (Trust) */}
                   <div className="aspect-square bg-brand-slate rounded-[2.5rem] relative overflow-hidden group p-10 flex flex-col justify-center items-center text-center">
                       <h3 className="text-7xl font-serif text-white mb-4">9/10</h3>
                       <p className="text-white/80 font-medium text-xl leading-tight tracking-wide">Anbefaler oss til en kollega.</p>
                       <div className="mt-10 pt-10 border-t border-white/10 w-full">
                           <p className="text-[10px] text-white/50 font-bold uppercase tracking-widest">Kundetilfredshet 2025</p>
                       </div>
                   </div>

                   {/* Feed 6: Team/People (Warmth) */}
                   <div className="aspect-square bg-brand-brown rounded-[2.5rem] relative overflow-hidden group">
                       <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover opacity-80" alt="Man" />
                       <div className="absolute bottom-6 left-6 right-6 bg-white/[0.1] backdrop-blur-xl p-6 rounded-3xl">
                           <p className="font-bold text-white text-[10px] uppercase tracking-widest mb-1">Møt teamet</p>
                           <h3 className="font-serif text-white text-2xl">Pål, Seniorrådgiver</h3>
                       </div>
                   </div>

                   {/* Feed 7: Resource/Mockup */}
                   <div className="aspect-square bg-brand-light rounded-[2.5rem] relative overflow-hidden group flex items-center justify-center p-14">
                       <div className="w-full aspect-[3/4] bg-white shadow-2xl rounded-2xl rotate-6 transition-transform group-hover:rotate-0 flex items-center justify-center p-8">
                           <div className="text-center">
                               <LogoMark className="w-10 mx-auto mb-6 text-brand-dark" />
                               <div className="font-serif text-brand-dark text-2xl leading-none">Ledelse i<br/>praksis</div>
                               <div className="mt-6 text-[10px] text-brand-slate font-bold tracking-widest uppercase">Whitepaper</div>
                           </div>
                       </div>
                   </div>

                   {/* Feed 8: Pattern/Brand */}
                   <div className="aspect-square bg-brand-dark rounded-[2.5rem] relative overflow-hidden group flex flex-col items-center justify-center text-center p-10">
                       <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #C69865 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
                       <LogoMark className="w-32 text-brand-gold mb-8 relative z-10" />
                       <p className="text-white font-serif text-2xl relative z-10">Vidde Kompetanse</p>
                   </div>

                   {/* Feed 9: Workshop (Active) */}
                   <div className="aspect-square bg-white rounded-[2.5rem] relative overflow-hidden group p-2">
                       <div className="w-full h-full rounded-[2rem] overflow-hidden relative">
                           <img src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover grayscale" alt="Hands" />
                           <div className="absolute inset-0 bg-brand-gold/90 mix-blend-multiply"></div>
                           <div className="absolute inset-0 flex items-center justify-center">
                               <h3 className="text-white font-serif text-4xl italic">Workshops</h3>
                           </div>
                       </div>
                   </div>

                </div>
             </div>

             {/* 3. LINK / LANDSCAPE (1.91:1) */}
             <div>
                <div className="flex items-baseline justify-between mb-10">
                   <h4 className="text-2xl font-bold tracking-tight">Link (1.91:1)</h4>
                   <span className="text-sm font-bold tracking-widest text-brand-slate opacity-60">1200 x 628</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                   
                   {/* Link 1 - Article */}
                   <div className="aspect-[1.91/1] bg-white rounded-[2.5rem] relative overflow-hidden group flex">
                      <div className="w-[40%] bg-brand-slate relative overflow-hidden">
                         <img 
                           src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop" 
                           className="w-full h-full object-cover mix-blend-overlay opacity-60 grayscale" 
                           alt="Office"
                         />
                      </div>
                      <div className="w-[60%] p-10 flex flex-col justify-center">
                         <span className="text-[10px] text-brand-gold font-bold uppercase tracking-widest mb-4">Fagartikkel</span>
                         <h4 className="text-2xl text-brand-dark font-serif leading-tight mb-6">Hvordan bygge en lærende organisasjon?</h4>
                         <span className="text-xs text-brand-slate font-bold flex items-center gap-2 uppercase tracking-wide">Les saken <span className="text-lg">→</span></span>
                      </div>
                   </div>

                   {/* Link 2 - Download */}
                   <div className="aspect-[1.91/1] bg-brand-beige rounded-[2.5rem] relative overflow-hidden group p-10 flex flex-col justify-center">
                       <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-gold/10 skew-x-12 translate-x-8"></div>
                       <div className="relative z-10 max-w-[70%]">
                          <LogoMark className="w-8 text-brand-dark mb-6" />
                          <h4 className="text-3xl font-serif text-brand-dark mb-3">Bærekraftig ledelse</h4>
                          <p className="text-sm text-brand-slate font-medium mb-8 leading-relaxed tracking-wide">Last ned vår nyeste whitepaper gratis.</p>
                          <button className="bg-brand-dark text-white px-6 py-3 rounded-full text-[10px] font-bold tracking-widest uppercase">Last ned PDF</button>
                       </div>
                   </div>

                   {/* Link 3 - Hiring */}
                   <div className="aspect-[1.91/1] bg-brand-dark rounded-[2.5rem] relative overflow-hidden group flex items-center justify-center p-10 text-center">
                       <div>
                          <h4 className="text-4xl text-white font-serif mb-8">Bli en av oss.</h4>
                          <div className="inline-block bg-white text-brand-dark px-10 py-4 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-brand-light transition-colors cursor-pointer">
                             Se ledige stillinger
                          </div>
                       </div>
                   </div>

                   {/* Link 4: Blog Layout */}
                   <div className="aspect-[1.91/1] bg-brand-light rounded-[2.5rem] relative overflow-hidden group flex p-3">
                       <div className="w-1/3 bg-white rounded-3xl flex items-center justify-center text-5xl">
                           💡
                       </div>
                       <div className="w-2/3 p-8 flex flex-col justify-center">
                           <span className="text-[10px] font-bold tracking-widest text-brand-slate opacity-50 mb-3">BLOGG</span>
                           <h4 className="text-2xl font-serif text-brand-dark mb-3">5 tips til bedre møtekultur</h4>
                           <p className="text-xs text-brand-slate font-medium tracking-wide">Les mer på vidde.no</p>
                       </div>
                   </div>

                   {/* Link 5: Case Study */}
                   <div className="aspect-[1.91/1] bg-brand-brown rounded-[2.5rem] relative overflow-hidden group p-10 flex items-center justify-between">
                       <div className="max-w-[65%]">
                           <span className="text-white/60 text-[10px] font-bold uppercase tracking-widest mb-3 block">KUNDEHISTORIE</span>
                           <h4 className="text-white font-serif text-2xl leading-normal">Equinor valgte Vidde for lederutvikling.</h4>
                       </div>
                       <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-brand-brown transition-colors text-white cursor-pointer text-2xl">
                           ↗
                       </div>
                   </div>

                   {/* Link 6: Newsletter (Clean) */}
                   <div className="aspect-[1.91/1] bg-white rounded-[2.5rem] relative overflow-hidden group p-10 flex flex-col items-center justify-center text-center">
                       <h4 className="text-2xl font-serif text-brand-dark mb-6">Hold deg oppdatert</h4>
                       <div className="flex w-full max-w-sm gap-3">
                           <div className="h-12 bg-brand-light rounded-xl flex-1 px-5 flex items-center text-xs text-brand-slate font-medium tracking-wide">E-post...</div>
                           <div className="h-12 bg-brand-dark rounded-xl w-24 flex items-center justify-center text-white text-xs font-bold tracking-widest uppercase">OK</div>
                       </div>
                   </div>

                   {/* Link 7: Video Thumbnail */}
                   <div className="aspect-[1.91/1] bg-brand-slate rounded-[2.5rem] relative overflow-hidden group">
                       <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover opacity-40 mix-blend-multiply" alt="Video" />
                       <div className="absolute inset-0 flex items-center justify-center">
                           <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                               <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                           </div>
                       </div>
                       <div className="absolute bottom-8 left-8 text-white font-bold text-xs tracking-widest uppercase">Se webinaret i opptak</div>
                   </div>

                   {/* Link 8: Partner (Minimal) */}
                   <div className="aspect-[1.91/1] bg-white rounded-[2.5rem] relative overflow-hidden group p-10 flex items-center gap-8 justify-center">
                       <LogoName className="w-28 text-brand-dark" />
                       <span className="text-2xl text-brand-slate opacity-30 font-light">|</span>
                       <span className="text-sm font-bold text-brand-slate tracking-widest uppercase opacity-50">PARTNER</span>
                   </div>

                   {/* Link 9: About Us */}
                   <div className="aspect-[1.91/1] bg-brand-dark rounded-[2.5rem] relative overflow-hidden group p-12 flex flex-col justify-end">
                        <div className="absolute top-0 right-0 p-12">
                            <LogoMark className="w-16 text-white/10" />
                        </div>
                        <h4 className="text-4xl font-serif text-white mb-3">Om oss</h4>
                        <p className="text-white/60 font-medium text-sm tracking-wide">Et tverrfaglig miljø i Oslo sentrum.</p>
                   </div>

                </div>
             </div>

             {/* 4. PORTRAIT (4:5) */}
             <div>
                <div className="flex items-baseline justify-between mb-10">
                   <h4 className="text-2xl font-bold tracking-tight">Portrett (4:5)</h4>
                   <span className="text-sm font-bold tracking-widest text-brand-slate opacity-60">1080 x 1350</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                   
                   {/* Portrait 1 - Speaker Card (Glass) */}
                   <div className="aspect-[4/5] bg-brand-slate rounded-[2.5rem] relative overflow-hidden group">
                       <img 
                         src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
                         className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 mix-blend-multiply"
                         alt="Speaker"
                       />
                       <div className="absolute bottom-6 left-6 right-6">
                          <div className="bg-white/[0.05] backdrop-blur-3xl p-8 rounded-[2rem]">
                             <div className="flex justify-between items-start mb-2">
                                 <div>
                                    <h4 className="text-3xl font-serif text-white mb-2">Kari Nordmann</h4>
                                    <p className="text-[10px] text-white/80 font-bold uppercase tracking-widest">Organisasjonspsykolog</p>
                                 </div>
                                 <LogoMark className="w-8 text-white" />
                             </div>
                          </div>
                       </div>
                   </div>

                   {/* Portrait 2 - Agenda (List) */}
                   <div className="aspect-[4/5] bg-brand-light rounded-[2.5rem] relative overflow-hidden group p-10 flex flex-col">
                       <div className="mb-10">
                          <span className="text-[10px] font-bold text-brand-slate bg-white px-4 py-2 rounded-full uppercase tracking-widest">Agenda</span>
                       </div>
                       <h3 className="text-5xl font-serif text-brand-dark mb-12 leading-tight">Høst<br/>Konferansen</h3>
                       
                       <div className="space-y-6 flex-1">
                          {[
                             { time: '09:00', text: 'Velkommen' },
                             { time: '09:30', text: 'Fremtidens kompetanse' },
                             { time: '11:00', text: 'Lunsj & Mingling' },
                             { time: '12:00', text: 'Workshops' },
                          ].map((slot, i) => (
                             <div key={i} className="flex gap-6 items-baseline pb-4">
                                <span className="text-xs font-mono text-brand-slate w-12 opacity-60">{slot.time}</span>
                                <span className="text-brand-dark text-xl font-medium tracking-tight">{slot.text}</span>
                             </div>
                          ))}
                       </div>
                   </div>

                   {/* Portrait 3 - Certification (Central) */}
                   <div className="aspect-[4/5] bg-brand-dark rounded-[2.5rem] relative overflow-hidden group flex flex-col items-center justify-center p-10">
                       <div className="w-64 h-64 rounded-full bg-white/5 flex items-center justify-center relative mb-12">
                          <div className="w-40 h-40 rounded-full bg-brand-gold/10 backdrop-blur-md flex items-center justify-center">
                             <LogoMark className="w-20 text-brand-gold" />
                          </div>
                       </div>
                       <h4 className="text-4xl text-white font-medium text-center leading-tight">Vidde<br/><span className="font-serif italic text-brand-gold">Sertifisering</span></h4>
                   </div>

                   {/* Portrait 4: Q&A (Interaction) */}
                   <div className="aspect-[4/5] bg-brand-beige rounded-[2.5rem] relative overflow-hidden group p-10 flex flex-col justify-between">
                       <div className="text-[10rem] font-serif text-brand-dark/5 leading-none -ml-6 -mt-10">Q&A</div>
                       <div className="relative z-10">
                           <h4 className="text-4xl font-serif text-brand-dark mb-6">Spørsmål & Svar</h4>
                           <p className="font-medium text-brand-slate mb-10 leading-relaxed tracking-wide">Vi svarer på dine spørsmål om lederutvikling hver tirsdag på Instagram.</p>
                           <div className="w-full bg-white p-6 rounded-3xl text-brand-slate font-bold text-xs uppercase tracking-widest flex justify-between items-center">
                               Still spørsmål
                               <span className="text-xl">+</span>
                           </div>
                       </div>
                   </div>

                   {/* Portrait 5: Checklist (Utility) */}
                   <div className="aspect-[4/5] bg-white rounded-[2.5rem] relative overflow-hidden group p-10">
                       <h3 className="text-3xl font-serif text-brand-dark mb-10 leading-tight">Sjekkliste for<br/>nyansatte</h3>
                       <div className="space-y-6">
                           {['Onboarding plan', 'Utstyr bestilt', 'Tilgang til systemer', 'Mentor tildelt'].map((item, i) => (
                               <div key={i} className="flex items-center gap-5">
                                   <div className={`w-8 h-8 rounded-full flex items-center justify-center ${i < 2 ? 'bg-brand-dark text-white' : 'bg-brand-light'}`}>
                                       {i < 2 && <span className="text-sm">✓</span>}
                                   </div>
                                   <span className={`font-medium tracking-wide ${i < 2 ? 'text-brand-dark' : 'text-brand-slate opacity-50'}`}>{item}</span>
                               </div>
                           ))}
                       </div>
                   </div>

                   {/* Portrait 6: App Mockup (Modern) */}
                   <div className="aspect-[4/5] bg-brand-light rounded-[2.5rem] relative overflow-hidden group flex flex-col items-center pt-20">
                       <h3 className="text-brand-dark font-serif text-3xl mb-4 text-center px-8">Læring rett i lomma.</h3>
                       <p className="text-brand-slate font-bold text-[10px] uppercase tracking-widest mb-10">Last ned appen</p>
                       <div className="w-3/4 bg-white rounded-t-[3rem] h-full shadow-2xl p-6 mx-auto relative top-0">
                           <div className="w-12 h-1 bg-brand-light rounded-full mx-auto mb-8"></div>
                           <div className="space-y-6">
                               <div className="h-32 bg-brand-light rounded-3xl w-full"></div>
                               <div className="h-32 bg-brand-beige rounded-3xl w-full"></div>
                           </div>
                       </div>
                   </div>

                   {/* Portrait 7: Steps (Process) */}
                   <div className="aspect-[4/5] bg-brand-brown rounded-[2.5rem] relative overflow-hidden group p-12 flex flex-col">
                       <h3 className="text-white font-serif text-3xl mb-12">Prosessen</h3>
                       <div className="space-y-10 relative">
                           <div className="absolute left-[11px] top-2 bottom-2 w-px bg-white/20"></div>
                           {[1,2,3].map((n) => (
                               <div key={n} className="relative pl-12">
                                   <div className="absolute left-0 top-0 w-6 h-6 bg-brand-gold rounded-full z-10 box-content border-4 border-brand-brown"></div>
                                   <h4 className="text-white font-bold text-[10px] uppercase tracking-widest mb-2">Steg {n}</h4>
                                   <p className="text-white/60 text-sm tracking-wide">Kort beskrivelse av fasen.</p>
                               </div>
                           ))}
                       </div>
                   </div>

                   {/* Portrait 8: Atmosphere (Mood) */}
                   <div className="aspect-[4/5] bg-brand-slate rounded-[2.5rem] relative overflow-hidden group">
                       <img src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover mix-blend-overlay opacity-30" alt="Event" />
                       <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                           <div className="w-px h-20 bg-white/30 mb-8"></div>
                           <h3 className="text-5xl font-serif text-white mb-4">Julebord<br/>2026</h3>
                           <p className="text-white/80 font-medium text-sm tracking-widest uppercase">En kveld for feiring</p>
                           <div className="w-px h-20 bg-white/30 mt-8"></div>
                       </div>
                   </div>

                   {/* Portrait 9: Quote on Image (Classic) */}
                   <div className="aspect-[4/5] bg-brand-dark rounded-[2.5rem] relative overflow-hidden group">
                       <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover opacity-60 grayscale" alt="Man" />
                       <div className="absolute bottom-12 left-10 right-10 text-white">
                           <p className="font-serif text-3xl leading-tight mb-8">"Investeringen i de ansatte ga umiddelbar avkastning."</p>
                           <div className="flex items-center gap-4">
                               <div className="w-8 h-px bg-brand-gold"></div>
                               <p className="font-bold text-[10px] uppercase tracking-widest">Daglig Leder, Tech AS</p>
                           </div>
                       </div>
                   </div>

                </div>
             </div>

          </div>
        </Section>

        {/* Malverk */}
        <Section id="malverk" title="Maler">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Email Signature */}
            <div className="col-span-1 lg:col-span-2 bg-white rounded-[2.5rem] p-16">
               <div className="flex items-center gap-4 mb-10">
                  <div className="p-3 bg-brand-light rounded-2xl">
                    <svg className="w-6 h-6 text-brand-slate" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <h3 className="text-2xl font-medium tracking-tight">E-post signatur</h3>
               </div>
               
               <div className="p-12 max-w-2xl bg-brand-light rounded-[2rem]">
                  <p className="text-brand-slate mb-12 font-normal leading-relaxed tracking-wide">
                    Hei, <br/><br/>
                    Takk for en hyggelig samtale tidligere i dag. Jeg sender over presentasjonen som avtalt.
                  </p>
                  <div className="pt-10 flex items-start gap-8">
                     <LogoMark className="w-16 h-16 text-brand-dark" />
                     <div>
                        <div className="font-bold text-brand-dark text-lg tracking-wide">Navn Navnesen</div>
                        <div className="text-brand-slate mb-4 font-medium opacity-60">Senior Rådgiver</div>
                        <div className="text-sm text-brand-slate space-y-1 font-medium tracking-wide">
                           <p>+47 900 00 000</p>
                           <p>navn@vidde.no</p>
                           <p className="text-brand-gold pt-2 font-bold">www.vidde.no</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* PowerPoint */}
            <div className="bg-brand-beige rounded-[2.5rem] p-12 flex flex-col justify-between min-h-[500px] group relative overflow-hidden cursor-default">
               <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-white rounded-2xl">
                      <svg className="w-6 h-6 text-[#C43E1C]" fill="currentColor" viewBox="0 0 24 24"><path d="M2.5 0C1.12 0 0 1.12 0 2.5v19C0 22.88 1.12 24 2.5 24h19c1.38 0 2.5-1.12 2.5-2.5v-19C24 1.12 22.88 0 21.5 0h-19zm2.5 16h6v2h-6v-2zm0-4h10v2h-10v-2zm0-4h14v2h-14v-2z" opacity="0.3"/><path d="M21.5 0H14v24h7.5c1.38 0 2.5-1.12 2.5-2.5v-19C24 1.12 22.88 0 21.5 0z" opacity="0.1"/><path d="M12 11h2v2h-2v-2zm-2-2h2v2h-2v-2zm-2 0h2v2H8V9zm4 4h2v2h-2v-2zm-2 0h2v2h-2v-2zm-2 0h2v2H8v-2zm4 4h2v2h-2v-2zm-2 0h2v2h-2v-2zm-2 0h2v2H8v-2z" fill="#C43E1C"/></svg>
                    </div>
                    <h3 className="text-2xl font-medium tracking-tight">PowerPoint</h3>
                  </div>
                  
                  {/* PPT Preview */}
                  <div className="aspect-video bg-brand-dark rounded-3xl p-10 flex flex-col justify-between transform group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] origin-bottom-left shadow-2xl">
                     <LogoFull className="w-28 text-white" color="#FFFFFF" />
                     <div>
                        <h4 className="text-white text-4xl font-serif mb-3">Årsrapport 2026</h4>
                        <p className="text-brand-gold text-xs font-mono uppercase tracking-widest">Konfidensielt</p>
                     </div>
                  </div>
               </div>
            </div>

            {/* Word */}
            <div className="bg-brand-light rounded-[2.5rem] p-12 flex flex-col justify-between min-h-[500px] group relative overflow-hidden cursor-default">
               <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-white rounded-2xl">
                      <svg className="w-6 h-6 text-[#2B579A]" fill="currentColor" viewBox="0 0 24 24"><path d="M21.5 0h-19C1.12 0 0 1.12 0 2.5v19C0 22.88 1.12 24 2.5 24h19c1.38 0 2.5-1.12 2.5-2.5v-19C24 1.12 22.88 0 21.5 0z" fill="#2B579A"/><path d="M6.5 19.5L8.75 6h2.5l1.75 10.5L14.75 6h2.5l2.25 13.5h-2.5l-1.25-9-1.75 9h-2.5l-1.75-9-1.25 9h-2.5z" fill="#FFFFFF"/></svg>
                    </div>
                    <h3 className="text-2xl font-medium tracking-tight">Word</h3>
                  </div>

                  {/* Word Preview */}
                  <div className="aspect-[1/1.4] bg-white rounded-3xl p-10 flex flex-col mx-auto w-2/3 transform group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] origin-bottom shadow-2xl">
                     <div className="flex justify-between items-start mb-16">
                        <LogoMark className="w-8 h-8 text-brand-dark" />
                        <div className="text-[8px] text-brand-slate opacity-40 text-right font-medium uppercase tracking-wider">Vidde Kompetanse AS<br/>Storgata 1, 0150 Oslo</div>
                     </div>
                     <div className="space-y-6">
                        <div className="h-6 bg-brand-light rounded w-3/4"></div>
                        <div className="h-3 bg-brand-light rounded w-full"></div>
                        <div className="h-3 bg-brand-light rounded w-full"></div>
                        <div className="h-3 bg-brand-light rounded w-5/6"></div>
                        <div className="h-3 bg-brand-light rounded w-full mt-8"></div>
                     </div>
                  </div>
               </div>
            </div>

          </div>
        </Section>

        {/* Last ned */}
        <Section id="last-ned" title="Ressurser">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Logo Pakke', type: 'ZIP', size: '12 MB', color: 'bg-brand-gold text-brand-dark' },
              { title: 'Fontfiler', type: 'ZIP', size: '4 MB', color: 'bg-brand-slate text-white' },
              { title: 'SoMe Kit', type: 'ZIP', size: '65 MB', color: 'bg-brand-brown text-white' },
              { title: 'Presentasjoner', type: 'KEY', size: '24 MB', color: 'bg-brand-dark text-white' },
            ].map((item, i) => (
              <a key={i} href="#" className="bg-white rounded-[2.5rem] p-10 hover:-translate-y-2 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] flex flex-col justify-between h-72 group">
                 <div className="flex justify-between items-start">
                    <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest ${item.color}`}>{item.type}</span>
                    <svg className="w-8 h-8 text-brand-slate opacity-20 group-hover:text-brand-dark group-hover:opacity-100 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                 </div>
                 <div>
                    <h4 className="text-3xl font-medium mb-2 tracking-tight group-hover:text-brand-gold transition-colors">{item.title}</h4>
                    <p className="text-brand-slate text-sm font-mono opacity-60">{item.size}</p>
                 </div>
              </a>
            ))}
          </div>
        </Section>

        <footer className="mt-40 pt-12 flex justify-center items-center text-xs font-bold tracking-widest text-brand-slate opacity-40 pb-12 uppercase">
             <span>Designet av <a href="https://netlab.no" target="_blank" rel="noreferrer" className="text-brand-dark hover:text-brand-gold transition-colors">Netlab</a></span>
        </footer>
      </main>
    </div>
  );
};

export default App;