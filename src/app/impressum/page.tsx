import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-background-primary relative pt-20">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-10 bg-primary-blue">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white uppercase mb-8">
            Impressum
          </h1>
          <p className="text-xl text-[#E5E5E5] max-w-3xl mx-auto leading-relaxed">
            Rechtliche Informationen und Angaben gemäß § 5 TMG
          </p>
        </div>
      </section>

      {/* Impressum Content */}
      <section className="py-20 px-10 bg-background-white">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-text-primary uppercase mb-8">
              Angaben gemäß § 5 TMG
            </h2>
            
            <div className="space-y-8 text-text-secondary leading-relaxed">
              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</h3>
                <div className="space-y-2">
                  <p><strong>Peace Hub</strong></p>
                  <p>Max Mustermann</p>
                  <p>Musterstraße 123</p>
                  <p>45127 Essen</p>
                  <p>Deutschland</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-4">Kontakt:</h3>
                <div className="space-y-2">
                  <p>Telefon: +49 (0) 201 123 4567</p>
                  <p>E-Mail: info@peace-hub.de</p>
                  <p>Website: www.peace-hub.de</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-4">Rechtliche Angaben:</h3>
                <div className="space-y-4">
                  <p>
                    <strong>Rechtsform:</strong> Eingetragener Verein (e.V.)<br />
                    <strong>Registergericht:</strong> Amtsgericht Essen<br />
                    <strong>Registernummer:</strong> VR 12345
                  </p>
                  
                  <p>
                    <strong>Vereinsvorsitzender:</strong> Max Mustermann<br />
                    <strong>Stellvertretender Vorsitzender:</strong> Maria Musterfrau
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-4">Umsatzsteuer-ID:</h3>
                <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p>
                <p>DE123456789</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-4">Redaktionell verantwortlich:</h3>
                <div className="space-y-2">
                  <p>Max Mustermann</p>
                  <p>Musterstraße 123</p>
                  <p>45127 Essen</p>
                  <p>Deutschland</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-4">EU-Streitschlichtung:</h3>
                <p>
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                  <a href="https://ec.europa.eu/consumers/odr/" className="text-primary-blue hover:underline ml-1">
                    https://ec.europa.eu/consumers/odr/
                  </a>
                </p>
                <p>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-4">Verbraucherstreitbeilegung/Universalschlichtungsstelle:</h3>
                <p>
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-4">Haftung für Inhalte:</h3>
                <p>
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
                  allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
                  unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach 
                  Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>
                <p>
                  Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen 
                  Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt 
                  der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden 
                  Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-4">Haftung für Links:</h3>
                <p>
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
                  Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der 
                  verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die 
                  verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. 
                  Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
                </p>
                <p>
                  Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte 
                  einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige 
                  Links umgehend entfernen.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-4">Urheberrecht:</h3>
                <p>
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen 
                  Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der 
                  Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. 
                  Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                </p>
                <p>
                  Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte 
                  Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem 
                  auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei 
                  Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
