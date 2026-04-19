export default function OZApiteraWebsite() {
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
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "18px 24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "10px",
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

          <nav style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            <a href="#o-nas" style={linkStyle}>O nás</a>
            <a href="#aktivity" style={linkStyle}>Aktivity</a>
            <a href="#podpora" style={linkStyle}>Podporte nás</a>
            <a href="#kontakt" style={linkStyle}>Kontakt</a>
          </nav>
        </div>
      </header>

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
            Občianske združenie pre komunitu, pomoc a rozvoj. Podporujeme
            zmysluplné projekty, spoluprácu a pozitívne zmeny v spoločnosti.
          </p>

          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <a href="#o-nas" style={primaryButton}>Zistiť viac</a>
            <a href="#kontakt" style={secondaryButton}>Kontaktovať nás</a>
          </div>
        </div>

        <div
          style={{
            background: "white",
            borderRadius: "28px",
            padding: "24px",
            boxShadow: "0 12px 35px rgba(0,0,0,0.12)",
            textAlign: "center",
          }}
        >
          <img
            src="/logo.jpg"
            alt="Logo Apitera"
            style={{
              width: "150%",
              maxWidth: "500px",
              borderRadius: "20px",
              objectFit: "cover",
            }}
          />
        </div>
      </section>

      <section id="o-nas" style={sectionStyle}>
        <div style={containerStyle}>
          <h2 style={sectionTitle}>O nás</h2>
          <p style={paragraphStyle}>
            OZ Apitera je občianske združenie zamerané na podporu
            verejnoprospešných aktivít, rozvoj komunity a vytváranie projektov,
            ktoré majú pozitívny dopad.
          </p>
          <p style={paragraphStyle}>
            Našou snahou je prepájať ľudí, nápady a iniciatívy, ktoré pomáhajú
            zlepšovať život v komunite a podporovať spoluprácu medzi
            jednotlivcami, organizáciami a partnermi.
          </p>
        </div>
      </section>

      <section id="aktivity" style={{ ...sectionStyle, background: "#fffaf0" }}>
        <div style={containerStyle}>
          <h2 style={sectionTitle}>Naše aktivity</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "20px",
              marginTop: "30px",
            }}
          >
            <div style={activityCard}>
              <h3 style={cardTitle}>Komunitné podujatia</h3>
              <p style={cardText}>
                Organizovanie stretnutí, workshopov, prednášok a podujatí pre
                verejnosť.
              </p>
            </div>

            <div style={activityCard}>
              <h3 style={cardTitle}>Vzdelávanie a osveta</h3>
              <p style={cardText}>
                Šírenie informácií, podpora edukácie a rozvoj užitočných
                zručností v komunite.
              </p>
            </div>

            <div style={activityCard}>
              <h3 style={cardTitle}>Pomoc a spolupráca</h3>
              <p style={cardText}>
                Zapájanie dobrovoľníkov, partnerov a podporovateľov do
                zmysluplných projektov.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="podpora"
        style={{
          padding: "80px 24px",
          background: "#2f2416",
          color: "white",
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
              Pomôžte nám realizovať ďalšie projekty a aktivity. Podporiť nás
              môžete finančne, dobrovoľníckou pomocou alebo partnerskou
              spoluprácou.
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

      <section id="kontakt" style={sectionStyle}>
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
              Radi sa s vami spojíme. Doplňte sem svoje reálne kontaktné údaje,
              adresu, e-mail, telefón a sociálne siete.
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

const activityCard = {
  background: "white",
  borderRadius: "22px",
  padding: "26px",
  boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
  border: "1px solid #f1ead8",
};

const cardTitle = {
  fontSize: "24px",
  marginBottom: "12px",
  color: "#9b6300",
};

const cardText = {
  fontSize: "17px",
  lineHeight: "1.7",
  color: "#555",
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

const linkStyle = {
  textDecoration: "none",
  color: "#444",
  fontWeight: "bold",
};