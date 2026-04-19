import { useState } from "react";
import { Routes, Route, Link, useNavigate, useLocation } from "react-router";

function HomePage() {
  return (
    <div>
      <HeroSection />
      <AktualitySection />
      <PodporaSection />
      <KontaktSection />
    </div>
  );
}

function OnasPage() {
  return (
    <div style={pageWrapStyle}>
      <h1 style={pageTitleStyle}>O nás</h1>
      <p style={paragraphStyle}>
        OZ Apitera je občianske združenie zamerané na podporu verejnoprospešných
        aktivít, rozvoj komunity a vytváranie projektov, ktoré majú pozitívny dopad.
      </p>
      <p style={paragraphStyle}>
        Našou snahou je prepájať ľudí, nápady a iniciatívy, ktoré pomáhajú
        zlepšovať život v komunite a podporovať spoluprácu medzi jednotlivcami,
        organizáciami a partnermi.
      </p>
    </div>
  );
}

function GrantyPage() {
  return (
    <div style={pageWrapStyle}>
      <h1 style={pageTitleStyle}>Granty</h1>
      <p style={paragraphStyle}>
        V tejto sekcii budú zverejnené informácie o grantových výzvach,
        podporených projektoch, možnostiach financovania a aktivitách,
        ktoré OZ Apitera realizuje s pomocou grantov a partnerov.
      </p>
      <p style={paragraphStyle}>
        Nájdete tu aj prehľad pripravovaných grantových iniciatív,
        zapojených partnerov a priebežné informácie o realizovaných projektoch.
      </p>
    </div>
  );
}

function OApiterePage() {
  return (
    <div style={pageWrapStyle}>
      <h1 style={pageTitleStyle}>O Apitere</h1>
      <p style={paragraphStyle}>
        OZ Apitera je občianske združenie zamerané na podporu včelárstva,
        komunitných aktivít, vzdelávania a environmentálnej osvety.
      </p>
      <p style={paragraphStyle}>
        Naším cieľom je prepájať ľudí, ktorí majú vzťah k prírode, tradíciám
        a udržateľnému rozvoju, a vytvárať projekty s pozitívnym dopadom.
      </p>
    </div>
  );
}

function NasTimPage() {
  return (
    <div style={pageWrapStyle}>
      <h1 style={pageTitleStyle}>Náš tím</h1>
      <p style={paragraphStyle}>
        V tejto sekcii môžete predstaviť členov občianskeho združenia,
        dobrovoľníkov, spolupracovníkov a ľudí, ktorí sa podieľajú na aktivitách OZ Apitera.
      </p>
      <p style={paragraphStyle}>
        Doplniť sa sem môžu mená, fotografie, funkcie, krátke medailóny
        a oblasť, ktorej sa jednotliví členovia venujú.
      </p>
    </div>
  );
}

function NaseVcelnicePage() {
  return (
    <div style={pageWrapStyle}>
      <h1 style={pageTitleStyle}>Naše včelnice</h1>
      <p style={paragraphStyle}>
        Táto stránka môže slúžiť na predstavenie vašich včelníc, ich polohy,
        zamerania, fotografie a zaujímavosti o chove včiel.
      </p>
      <p style={paragraphStyle}>
        Môžete sem doplniť aj informácie o počte úľov, miestach pôsobenia,
        starostlivosti o včely a aktivitách spojených s včelnicami.
      </p>
    </div>
  );
}

function VzdelavaniePage() {
  return (
    <div style={pageWrapStyle}>
      <h1 style={pageTitleStyle}>Vzdelávanie</h1>

      <p style={paragraphStyle}>
        V tejto sekcii môžete prezentovať vzdelávacie aktivity OZ Apitera,
        workshopy, prednášky, osvetové podujatia a programy pre verejnosť,
        školy alebo záujemcov o včelárstvo.
      </p>

      <div
        style={{
          marginTop: "40px",
          background: "#fffaf0",
          border: "1px solid #f1ead8",
          borderRadius: "24px",
          padding: "32px",
          boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
        }}
      >
        <h2
          style={{
            fontSize: "34px",
            marginTop: 0,
            marginBottom: "14px",
            color: "#1f1f1f",
          }}
        >
          Projekt včely ľuďom
        </h2>

        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.8",
            color: "#555",
            marginBottom: "24px",
            maxWidth: "850px",
          }}
        >
          V rámci projektu včely ľuďom prinášame vzdelávacie aktivity,
          ktoré prepájajú ľudí s témou včiel, prírody, včelárstva a osvety.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
          }}
        >
          <Link to="/univerzita-ludskosti-v-zavare" style={educationCardStyle}>
            <div style={educationLabelStyle}>Vzdelávací projekt</div>
            <h3 style={educationTitleStyle}>Univerzita ľudskosti v Zavare</h3>
            <p style={educationTextStyle}>
              Viac informácií o aktivitách, programe a priebehu vzdelávania v Zavare.
            </p>
          </Link>

          <Link
            to="/vcelarske-vzdelavanie-pre-najmensich-v-bratislave"
            style={educationCardStyle}
          >
            <div style={educationLabelStyle}>Vzdelávací projekt</div>
            <h3 style={educationTitleStyle}>
              Včelárske vzdelávanie pre najmenších v Bratislave
            </h3>
            <p style={educationTextStyle}>
              Predstavenie projektu zameraného na najmenšie deti a ich vzťah k včelám a prírode.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

function UniverzitaLudskostiPage() {
  return (
    <div style={pageWrapStyle}>
      <h1 style={pageTitleStyle}>Univerzita ľudskosti v Zavare</h1>
      <p style={paragraphStyle}>
        Táto stránka môže slúžiť na predstavenie projektu Univerzita ľudskosti v Zavare,
        jeho cieľov, programu, partnerov a priebehu realizácie.
      </p>
      <p style={paragraphStyle}>
        Môžete sem doplniť fotografie, harmonogram, výstupy projektu a ďalšie
        informácie o vzdelávacích aktivitách.
      </p>
    </div>
  );
}

function VzdelavanieNajmensichPage() {
  return (
    <div style={pageWrapStyle}>
      <h1 style={pageTitleStyle}>Včelárske vzdelávanie pre najmenších v Bratislave</h1>
      <p style={paragraphStyle}>
        Táto stránka môže predstaviť vzdelávacie aktivity určené pre deti,
        ktoré sú zamerané na spoznávanie sveta včiel, prírody a základov včelárstva.
      </p>
      <p style={paragraphStyle}>
        Môžete sem doplniť priebeh projektu, cieľové skupiny, fotografie,
        spolupracujúce organizácie a konkrétne aktivity realizované v Bratislave.
      </p>
    </div>
  );
}

function VedaVyskumPage() {
  return (
    <div style={pageWrapStyle}>
      <h1 style={pageTitleStyle}>Veda a výskum</h1>

      <p style={paragraphStyle}>
        V tejto sekcii nájdete odborné výstupy, vedecké články a výskumné témy,
        ktoré súvisia s apiterapiou, včelárstvom, zdravím, prírodou a
        rekreačným cestovným ruchom.
      </p>

      <div
        style={{
          marginTop: "40px",
          background: "linear-gradient(to bottom right, #fffdf7, #fff6e5)",
          border: "1px solid #ead7ac",
          borderRadius: "26px",
          padding: "34px",
          boxShadow: "0 14px 34px rgba(138, 99, 20, 0.10)",
        }}
      >
        <div
          style={{
            display: "inline-block",
            fontSize: "13px",
            fontWeight: "bold",
            letterSpacing: "1px",
            color: "#9b6300",
            background: "#fff1cc",
            padding: "8px 12px",
            borderRadius: "999px",
            marginBottom: "18px",
          }}
        >
          VEDECKÝ ČLÁNOK
        </div>

        <h2
          style={{
            fontSize: "34px",
            lineHeight: "1.3",
            marginTop: 0,
            marginBottom: "10px",
            color: "#1f1f1f",
          }}
        >
          Apiterapia ako inovatívny prvok rozvoja rekreačného cestovného ruchu
        </h2>

        <p
          style={{
            fontSize: "17px",
            lineHeight: "1.8",
            color: "#555",
            marginBottom: "12px",
          }}
        >
          <strong>Pôvodný názov:</strong>{" "}
          APITHERAPY AS AN INNOVATIVE ELEMENT IN RECREATIONAL TOURISM DEVELOPMENT
        </p>

        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.8",
            color: "#555",
            marginBottom: "26px",
            maxWidth: "920px",
          }}
        >
          Štúdia sa zameriava na apiterapiu ako inovatívny prvok rekreačného
          turizmu, pričom analyzuje skúsenosti 122 respondentov z rôznych
          regiónov Slovenska, ktorí absolvovali terapiu v apidomčekoch.
          Výsledky poukazujú na štatisticky významné zlepšenie psychickej aj
          fyzickej pohody, ako aj zvýšenie pocitu relaxácie a komfortu počas a
          po terapii. Zistenia zároveň naznačujú vysokú mieru akceptácie
          apiterapie naprieč rôznymi skupinami návštevníkov a jej potenciál ako
          súčasti udržateľného turizmu a regionálneho rozvoja. Štúdia poukazuje
          na potrebu ďalšieho výskumu a zvyšovania povedomia o možnostiach
          využitia apiterapie v oblasti cestovného ruchu.
        </p>

        <div
          style={{
            display: "flex",
            gap: "14px",
            flexWrap: "wrap",
            marginBottom: "28px",
          }}
        >
          <a
            href="https://www.researchgate.net/publication/391287457_APITHERAPY_AS_AN_INNOVATIVE_ELEMENT_IN_RECREATIONAL_TOURISM_DEVELOPMENT"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-block",
              background: "#c27c00",
              color: "white",
              textDecoration: "none",
              fontWeight: "bold",
              padding: "14px 22px",
              borderRadius: "14px",
              boxShadow: "0 6px 16px rgba(194,124,0,0.25)",
            }}
          >
            Otvoriť článok
          </a>

          <a
            href="https://doi.org/10.11118/978-80-7701-025-2-0034"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-block",
              background: "#ffffff",
              color: "#5a4214",
              textDecoration: "none",
              fontWeight: "bold",
              padding: "14px 22px",
              borderRadius: "14px",
              border: "1px solid #ead7ac",
            }}
          >
            Otvoriť DOI
          </a>
        </div>

        <div
          style={{
            background: "#ffffff",
            border: "1px solid #eadfbe",
            borderRadius: "20px",
            padding: "24px",
          }}
        >
          <h3
            style={{
              marginTop: 0,
              marginBottom: "14px",
              fontSize: "22px",
              color: "#5a4214",
            }}
          >
            Citácia
          </h3>

          <p
            style={{
              margin: 0,
              fontSize: "16px",
              lineHeight: "1.85",
              color: "#444",
            }}
          >
            Maruniaková, A., Kvasničák, R., Iľko, I., &amp; Peterková, V. (2025).
            <em> APITHERAPY AS AN INNOVATIVE ELEMENT IN RECREATIONAL TOURISM DEVELOPMENT</em>.
            In <em>Public recreation and landscape protection - with respect hand in hand…</em>.
            DOI: 10.11118/978-80-7701-025-2-0034
          </p>
        </div>
      </div>
    </div>
  );
}

export default function OZApiteraWebsite() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showAboutMenu, setShowAboutMenu] = useState(false);
  const [showActivitiesMenu, setShowActivitiesMenu] = useState(false);

  const goHome = (e) => {
    e.preventDefault();

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 80);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const goToSection = (sectionId) => (e) => {
    e.preventDefault();

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 150);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        background: "linear-gradient(to bottom, #fffdf7, #ffffff)",
        color: "#222",
        minHeight: "100vh",
      }}
    >
      <header
        style={{
          position: "sticky",
          top: 0,
          background: "rgba(255,255,255,0.95)",
          borderBottom: "1px solid #eee",
          backdropFilter: "blur(8px)",
          zIndex: 10,
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "18px 24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "nowrap",
            gap: "20px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <img
              src="/logo.jpg"
              alt="Logo OZ Apitera"
              style={{
                width: "120px",
                height: "120px",
                objectFit: "cover",
                borderRadius: "50%",
                border: "2px solid #f0dfb4",
              }}
            />
            <div>
              <div style={{ fontSize: "28px", fontWeight: "bold", color: "#c27c00" }}>
                OZ Apitera
              </div>
              <div style={{ fontSize: "14px", color: "#666" }}>
                Občianske združenie pre komunitu, pomoc a rozvoj
              </div>
            </div>
          </div>

          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              flexWrap: "nowrap",
              marginLeft: "auto",
              width: "fit-content",
              minWidth: "620px",
              justifyContent: "space-between",
              background: "rgba(255,255,255,0.95)",
              padding: "10px 12px",
              borderRadius: "18px",
              border: "1px solid #ead7ac",
              boxShadow: "0 10px 28px rgba(138, 99, 20, 0.14)",
            }}
          >
            <a href="/" onClick={goHome} style={navItemStyle}>Domov</a>

            <div
              style={{ position: "relative", display: "flex", alignItems: "center" }}
              onMouseEnter={() => setShowAboutMenu(true)}
              onMouseLeave={() => setShowAboutMenu(false)}
            >
              <button type="button" style={navDropdownTriggerStyle}>
                O nás
              </button>

              {showAboutMenu && (
                <div style={goldDropdownMenuStyle}>
                  <Link to="/o-apitere" style={goldDropdownItemStyle}>O Apitere</Link>
                  <Link to="/nas-tim" style={goldDropdownItemStyle}>Náš tím</Link>
                  <Link to="/nase-vcelnice" style={goldDropdownItemStyle}>Naše včelnice</Link>
                </div>
              )}
            </div>

            <div
              style={{ position: "relative", display: "flex", alignItems: "center" }}
              onMouseEnter={() => setShowActivitiesMenu(true)}
              onMouseLeave={() => setShowActivitiesMenu(false)}
            >
              <button type="button" style={navDropdownTriggerStyle}>
                Aktivity
              </button>

              {showActivitiesMenu && (
                <div style={goldDropdownMenuStyle}>
                  <Link to="/vzdelavanie" style={goldDropdownItemStyle}>Vzdelávanie</Link>
                  <Link to="/veda-a-vyskum" style={goldDropdownItemStyle}>Veda a výskum</Link>
                </div>
              )}
            </div>

            <Link to="/granty" style={navItemStyle}>Granty</Link>
            <a href="/#podpora" onClick={goToSection("podpora")} style={navItemStyle}>
              Podporte nás
            </a>
            <a href="/#kontakt" onClick={goToSection("kontakt")} style={navButtonStyle}>
              Kontakt
            </a>
          </nav>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/o-nas" element={<OnasPage />} />
        <Route path="/o-apitere" element={<OApiterePage />} />
        <Route path="/nas-tim" element={<NasTimPage />} />
        <Route path="/nase-vcelnice" element={<NaseVcelnicePage />} />
        <Route path="/vzdelavanie" element={<VzdelavaniePage />} />
        <Route path="/veda-a-vyskum" element={<VedaVyskumPage />} />
        <Route path="/granty" element={<GrantyPage />} />
        <Route path="/univerzita-ludskosti-v-zavare" element={<UniverzitaLudskostiPage />} />
        <Route
          path="/vcelarske-vzdelavanie-pre-najmensich-v-bratislave"
          element={<VzdelavanieNajmensichPage />}
        />
      </Routes>

      <footer
        style={{
          borderTop: "1px solid #eee",
          padding: "24px",
          textAlign: "center",
          color: "#777",
          background: "#fffdf9",
        }}
      >
        © 2025 OZ Apitera. Všetky práva vyhradené.
      </footer>
    </div>
  );
}

function HeroSection() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "80px 24px 60px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "40px",
        alignItems: "center",
      }}
    >
      <div>
        <div
          style={{
            display: "inline-block",
            background: "#fff3d6",
            color: "#9b6300",
            padding: "8px 14px",
            borderRadius: "999px",
            fontSize: "14px",
            fontWeight: "bold",
            marginBottom: "18px",
          }}
        >
          Spájame ľudí pre dobrú vec
        </div>

        <h1
          style={{
            fontSize: "56px",
            lineHeight: "1.1",
            margin: "0 0 18px",
            color: "#1f1f1f",
          }}
        >
          OZ Apitera
        </h1>

        <p
          style={{
            fontSize: "20px",
            lineHeight: "1.7",
            color: "#555",
            marginBottom: "28px",
            maxWidth: "600px",
          }}
        >
          Občianske združenie Apitera vzniklo z presvedčenia, že včely a včelárstvo
          majú nezastupiteľný význam pre človeka, prírodu aj rovnováhu v krajine.
          Zameriavame sa na podporu a rozvoj včelárstva, vzdelávanie a
          environmentálnu osvetu.
        </p>

        <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
          <Link to="/o-nas" style={primaryButton}>Zistiť viac</Link>
          <a href="/#kontakt" style={secondaryButton}>Kontaktovať nás</a>
        </div>
      </div>

      <div
        style={{
          background: "white",
          borderRadius: "28px",
          padding: "24px",
          boxShadow: "0 12px 35px rgba(0,0,0,0.12)",
          textAlign: "center",
          perspective: "1000px",
        }}
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "500px",
            transformStyle: "preserve-3d",
            transition: "transform 0.7s",
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              backfaceVisibility: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="/logo.jpg"
              alt="Logo Apitera"
              style={{
                width: "100%",
                maxWidth: "450px",
                borderRadius: "20px",
                objectFit: "cover",
              }}
            />
          </div>

          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "30px",
              boxSizing: "border-box",
            }}
          >
            <div>
              <h3 style={{ fontSize: "30px", marginBottom: "18px", color: "#9b6300" }}>
                O našom združení
              </h3>
              <p style={{ fontSize: "18px", lineHeight: "1.8", color: "#555" }}>
                OZ Apitera podporuje komunitné aktivity, spoluprácu, pomoc a rozvoj.
                Naším cieľom je prepájať ľudí a vytvárať projekty s pozitívnym dopadom.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AktualitySection() {
  return (
    <section
      id="aktivity"
      style={{
        ...sectionStyle,
        background: "#fffaf0",
        scrollMarginTop: "170px",
      }}
    >
      <div style={containerStyle}>
        <h2 style={sectionTitle}>Aktuality</h2>

        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.8",
            color: "#555",
            marginBottom: "28px",
            maxWidth: "850px",
          }}
        >
          Sledujte najnovšie informácie o našich aktivitách, pripravovaných
          podujatiach, vzdelávacích stretnutiach a komunitných projektoch.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "20px",
          }}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: "22px",
              padding: "24px",
              border: "1px solid #f1ead8",
              boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
            }}
          >
            <div
              style={{
                fontSize: "14px",
                fontWeight: "bold",
                color: "#c27c00",
                marginBottom: "10px",
              }}
            >
              Novinka
            </div>
            <h3
              style={{
                fontSize: "24px",
                marginTop: 0,
                marginBottom: "12px",
                color: "#1f1f1f",
              }}
            >
              Pripravujeme nové podujatia
            </h3>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.7",
                color: "#555",
                margin: 0,
              }}
            >
              Už čoskoro zverejníme termíny pripravovaných stretnutí,
              workshopov a komunitných aktivít.
            </p>
          </div>

          <div
            style={{
              background: "#fff",
              borderRadius: "22px",
              padding: "24px",
              border: "1px solid #f1ead8",
              boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
            }}
          >
            <div
              style={{
                fontSize: "14px",
                fontWeight: "bold",
                color: "#c27c00",
                marginBottom: "10px",
              }}
            >
              Oznámenie
            </div>
            <h3
              style={{
                fontSize: "24px",
                marginTop: 0,
                marginBottom: "12px",
                color: "#1f1f1f",
              }}
            >
              Rozširujeme spoluprácu
            </h3>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.7",
                color: "#555",
                margin: 0,
              }}
            >
              Postupne prepájame partnerov, dobrovoľníkov a podporovateľov,
              ktorí chcú pomôcť našim aktivitám rásť.
            </p>
          </div>

          <div
            style={{
              background: "#fff",
              borderRadius: "22px",
              padding: "24px",
              border: "1px solid #f1ead8",
              boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
            }}
          >
            <div
              style={{
                fontSize: "14px",
                fontWeight: "bold",
                color: "#c27c00",
                marginBottom: "10px",
              }}
            >
              Informácia
            </div>
            <h3
              style={{
                fontSize: "24px",
                marginTop: 0,
                marginBottom: "12px",
                color: "#1f1f1f",
              }}
            >
              Pracujeme na nových projektoch
            </h3>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.7",
                color: "#555",
                margin: 0,
              }}
            >
              Našim cieľom je prinášať zmysluplné iniciatívy v oblasti osvety,
              komunity a podpory včelárstva.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PodporaSection() {
  return (
    <section
      id="podpora"
      style={{
        padding: "80px 24px",
        background: "#2f2416",
        color: "white",
        scrollMarginTop: "170px",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "30px",
          alignItems: "center",
        }}
      >
        <div>
          <h2 style={{ fontSize: "40px", marginBottom: "20px" }}>Podporte nás</h2>
          <p style={{ fontSize: "18px", lineHeight: "1.8", color: "#e7d8c5" }}>
            Pomôžte nám realizovať ďalšie projekty a aktivity. Podporiť nás môžete
            finančne, dobrovoľníckou pomocou alebo partnerskou spoluprácou.
          </p>
        </div>

        <div
          style={{
            background: "rgba(255,255,255,0.08)",
            borderRadius: "24px",
            padding: "28px",
          }}
        >
          <div
            style={{
              fontSize: "14px",
              textTransform: "uppercase",
              letterSpacing: "2px",
              color: "#d9c0a1",
              marginBottom: "16px",
            }}
          >
            Možnosti podpory
          </div>
          <ul style={{ paddingLeft: "20px", lineHeight: "2", fontSize: "18px" }}>
            <li>Dobrovoľnícka pomoc</li>
            <li>Finančný príspevok</li>
            <li>Partnerská spolupráca</li>
            <li>Propagácia našich aktivít</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function KontaktSection() {
  return (
    <section id="kontakt" style={{ ...sectionStyle, scrollMarginTop: "170px" }}>
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "30px",
        }}
      >
        <div>
          <h2 style={sectionTitle}>Kontakt</h2>
          <p style={paragraphStyle}>
            Radi sa s vami spojíme. Doplňte sem svoje reálne kontaktné údaje.
          </p>

          <div style={{ marginTop: "22px", lineHeight: "2", fontSize: "18px" }}>
            <div><strong>E-mail:</strong> info@ozapitera.sk</div>
            <div><strong>Telefón:</strong> +421 xxx xxx xxx</div>
            <div><strong>Adresa:</strong> Ulica 123, Mesto</div>
          </div>
        </div>

        <div
          style={{
            background: "#fff8ea",
            border: "1px solid #f0dfb4",
            borderRadius: "24px",
            padding: "28px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
          }}
        >
          <h3 style={{ fontSize: "28px", marginTop: 0 }}>Napíšte nám</h3>

          <div style={{ display: "grid", gap: "14px", marginTop: "18px" }}>
            <input type="text" placeholder="Meno a priezvisko" style={inputStyle} />
            <input type="email" placeholder="E-mail" style={inputStyle} />
            <textarea placeholder="Vaša správa" rows="5" style={inputStyle}></textarea>
            <button style={primaryButtonButton}>Odoslať správu</button>
          </div>
        </div>
      </div>
    </section>
  );
}

const containerStyle = {
  maxWidth: "1100px",
  margin: "0 auto",
};

const sectionStyle = {
  padding: "80px 24px",
};

const sectionTitle = {
  fontSize: "40px",
  marginBottom: "20px",
  color: "#1f1f1f",
};

const paragraphStyle = {
  fontSize: "18px",
  lineHeight: "1.8",
  color: "#555",
  maxWidth: "850px",
};

const inputStyle = {
  width: "100%",
  padding: "14px 16px",
  borderRadius: "14px",
  border: "1px solid #ddd",
  fontSize: "16px",
  fontFamily: "Arial, sans-serif",
  boxSizing: "border-box",
};

const primaryButton = {
  display: "inline-block",
  background: "#c27c00",
  color: "white",
  padding: "14px 22px",
  borderRadius: "14px",
  textDecoration: "none",
  fontWeight: "bold",
};

const secondaryButton = {
  display: "inline-block",
  background: "white",
  color: "#333",
  padding: "14px 22px",
  borderRadius: "14px",
  textDecoration: "none",
  fontWeight: "bold",
  border: "1px solid #ddd",
};

const primaryButtonButton = {
  background: "#c27c00",
  color: "white",
  border: "none",
  padding: "14px 20px",
  borderRadius: "14px",
  fontSize: "16px",
  fontWeight: "bold",
  cursor: "pointer",
};

const navItemStyle = {
  textDecoration: "none",
  color: "#5f4a1d",
  fontWeight: "bold",
  padding: "10px 14px",
  borderRadius: "12px",
  whiteSpace: "nowrap",
};

const navButtonStyle = {
  textDecoration: "none",
  background: "#c27c00",
  color: "white",
  fontWeight: "bold",
  padding: "10px 16px",
  borderRadius: "12px",
  boxShadow: "0 6px 16px rgba(194,124,0,0.25)",
  whiteSpace: "nowrap",
};

const navDropdownTriggerStyle = {
  background: "transparent",
  border: "none",
  color: "#5f4a1d",
  fontWeight: "bold",
  padding: "10px 14px",
  borderRadius: "12px",
  cursor: "pointer",
  fontSize: "16px",
  whiteSpace: "nowrap",
  fontFamily: "Arial, sans-serif",
};

const goldDropdownMenuStyle = {
  position: "absolute",
  top: "calc(100% - 2px)",
  left: "0",
  minWidth: "230px",
  background: "linear-gradient(to bottom, #fffdf6, #fff7e8)",
  border: "1px solid #ead7ac",
  borderRadius: "18px",
  boxShadow: "0 16px 34px rgba(138, 99, 20, 0.18)",
  padding: "12px",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  zIndex: 50,
};

const goldDropdownItemStyle = {
  textDecoration: "none",
  color: "#5a4214",
  fontWeight: "bold",
  padding: "12px 14px",
  borderRadius: "12px",
  whiteSpace: "nowrap",
  display: "block",
  background: "rgba(255,255,255,0.6)",
  border: "1px solid rgba(234, 215, 172, 0.65)",
};

const pageWrapStyle = {
  maxWidth: "1100px",
  margin: "0 auto",
  padding: "80px 24px",
};

const pageTitleStyle = {
  fontSize: "48px",
  marginBottom: "24px",
  color: "#1f1f1f",
};

const educationCardStyle = {
  display: "block",
  textDecoration: "none",
  background: "#ffffff",
  border: "1px solid #f1ead8",
  borderRadius: "20px",
  padding: "24px",
  boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
  color: "#222",
};

const educationLabelStyle = {
  fontSize: "14px",
  fontWeight: "bold",
  color: "#c27c00",
  marginBottom: "10px",
};

const educationTitleStyle = {
  fontSize: "24px",
  marginTop: 0,
  marginBottom: "12px",
  color: "#1f1f1f",
};

const educationTextStyle = {
  fontSize: "16px",
  lineHeight: "1.7",
  color: "#555",
  margin: 0,
};