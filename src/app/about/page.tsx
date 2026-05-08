import Image from "next/image";

export default function About() {
  return (
    <div className="about-page">
      <h1 className="font-serif text-center mb-8" style={{ fontSize: '3rem' }}>Reactive Runway's Mission </h1>

      <section className="designer-section grid-2 mb-8" style={{ alignItems: 'center' }}>
        <div style={{ position: 'relative', height: '500px', borderRadius: '4px', overflow: 'hidden' }}>
          <Image
            src="/izzy_headshot.jpg"
            alt="Isabel DiFabio"
            fill
            style={{ objectFit: 'cover', objectPosition: 'top center' }}
          />
        </div>
        <div className="designer-bio">
          <h2 className="font-serif mb-2" style={{ fontSize: '2rem' }}>Meet the Designer</h2>
          <p className="mb-2" style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
            My name is Isabel DiFabio, and I am a software engineer with a passion for how computer science can be used to create one-of-a-kind interactive fashion pieces. I take heavy inspirations from the many fashioneers that came before me, as well as the craftiness of drag culture. It is my goal to serve the communities who inspire me. I am proud of everything I've been able to do so far and look forward to working with you! Let's make history!
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
            My commission are currently open! Please feel free to reach out to me via the contact page. I will get back to you as soon as possible!
          </p>
        </div>
      </section>

      <hr style={{ borderColor: 'var(--border)', marginBottom: '4rem' }} />

      <div className="history-sections">
        <h2 className="font-serif text-center mb-12" style={{ fontSize: '2.5rem' }}>Roots in Drag Culture</h2>

        {/* Section 1: Image Left, Text Right */}
        <section className="grid-2 mb-16" style={{ alignItems: 'center' }}>
          <div style={{ position: 'relative', height: '400px', borderRadius: '4px', overflow: 'hidden' }}>
            <Image src="/drag_history_1.png" alt="Drag performer with structured metallic collar" fill style={{ objectFit: 'cover', objectPosition: 'center' }} />
          </div>
          <div className="history-text">
            <h3 className="font-serif mb-4" style={{ fontSize: '1.8rem' }}>Drag Artists</h3>
            <p className="mb-4" style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Drag Artists is a term that refers to those who have portray extreme forms of gender expression as a form of expressing their true self or in protest. Drag is all about the glamour, camp, and uniqueness of each queer person who partakes in it. It has heavy roots in queer culture, and drag artists have always influenced what is the hottest trend on the runway.
            </p>
          </div>
        </section>

        {/* Section 2: Text Left, Image Right */}
        <section className="grid-2 mb-16" style={{ alignItems: 'center' }}>
          <div className="history-text" style={{ order: 1 }}>
            <h3 className="font-serif mb-4" style={{ fontSize: '1.8rem' }}>The Power of the Reveal</h3>
            <p className="mb-4" style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              In drag, clothing is never just meant to be static. Since drag is a form of expression and protest, it's essential that the clothing tells a story. It started with simple tear-away clothing to reveal new ones underneath, but drag artists just continued to up the bar. The clothing they wear needs to allows performers to create moments of pure magic on stage. A garment that changes as a physical manifestation of an artist's evolving performance.
            </p>
          </div>
          <div style={{ position: 'relative', height: '400px', borderRadius: '4px', overflow: 'hidden', order: 2 }}>
            <Image src="/drag_history_2.png" alt="Trio of drag queens in colorful dresses" fill style={{ objectFit: 'cover', objectPosition: 'center top' }} />
          </div>
        </section>

        {/* Section 3: Image Left, Text Right */}
        <section className="grid-2 mb-16" style={{ alignItems: 'center' }}>
          <div style={{ position: 'relative', height: '400px', borderRadius: '4px', overflow: 'hidden' }}>
            <Image src="/drag_history_3.jpg" alt="Drag performer in a structural face-printed dress on the street" fill style={{ objectFit: 'cover', objectPosition: 'center' }} />
          </div>
          <div className="history-text">
            <h3 className="font-serif mb-4" style={{ fontSize: '1.8rem' }}>Making a Statement</h3>
            <p className="mb-4" style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Reactive fashion in drag is deeply political. Having clothing that doesn't fit into a box is symbolic of the way drag artists refuse to be put into a box of binary gender expresson. They challenge the norms and demand attention through their clothes and refuse to be ignored.
            </p>
          </div>
        </section>

        {/* Section 4: Text Left, Image Right */}
        <section className="grid-2 mb-8" style={{ alignItems: 'center' }}>
          <div className="history-text" style={{ order: 1 }}>
            <h3 className="font-serif mb-4" style={{ fontSize: '1.8rem' }}>Honoring the Craft</h3>
            <p className="mb-4" style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Reactive Runway aims to do justice for this community, because to often are drag artists taken advantage of by designers. Many fashion designers do not see drag artists as worthy of quality work, or do not want to be associated with drag due to the societal stigma around this joyful artform. At Reactive Runway, we want to make a change for these trailblaizers and make their avant garde dreams come true.
            </p>
          </div>
          <div style={{ position: 'relative', height: '400px', borderRadius: '4px', overflow: 'hidden', order: 2 }}>
            <Image src="/drag_history_4.jpg" alt="Classic drag queen in a sequin dress and large wig" fill style={{ objectFit: 'cover', objectPosition: 'center' }} />
          </div>
        </section>
      </div>
    </div>
  );
}
