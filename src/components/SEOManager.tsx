import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function SEOManager() {
  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    let title = "Demontāža 24/7";
    let description = "Profesionāli demontāžas pakalpojumi visā Latvijā.";
    let canonicalUrl = `https://demontaza24.eu${currentPath}`;
    const logoUrl = "https://pub-ff8b54c4ee504990b655b0d624a4449e.r2.dev/Logo.webp";

    // Set precise titles & descriptions requested by the user
    if (currentPath === "/") {
      title = "Demontāžas darbi visā Latvijā | Demontāža 24/7";
      description = "Profesionāla ēku nojaukšana, iekštelpu demontāža un būvgružu izvešana visā Latvijā. Bezmaksas tāmes sagatavošana. Zvani un piesakies.";
    } else if (currentPath === "/pakalpojumi") {
      title = "Demontāža, zemes ierīcības darbi un konteineru noma | Demontāža 24/7";
      description = "Profesionāli demontāžas pakalpojumi, zemes ierīcības darbi, teritoriju planēšana, būvgružu konteineru noma un modernas tehnikas noma visā Latvijā.";
    } else if (currentPath === "/musu-tehnika") {
      title = "Ekskavatori, kravas automašīnas un tehnikas noma | Demontāža 24/7";
      description = "Mūsu tehnikas parks un noma: ekskavatori, mini ekskavatori, kravas automašīnas un būvgružu konteineri. Apskatiet veiktspēju un konkurētspējīgas nomas ceny.";
    } else if (currentPath === "/buj") {
      title = "Demontāžas izmaksas, saskaņošana un risinājumi | BUJ";
      description = "Biežāk uzdotie jautājumi par demontāžas pakalpojumiem, cenām, izmaksām, būvatļaujām un utilizācijas deklarācijām.";
    } else if (currentPath === "/galerija") {
      title = "Realizēto darbu portfolio | Demontāža 24/7";
      description = "Mūsu pabeigto objektu un nojaukšanas darbu attēlu galerija. Novērtējiet mūsu darba kvalitāti.";
    } else if (currentPath === "/kontakti") {
      title = "Sazināties ar mums un piesakiet bezmaksas tāmi | Demontāža 24/7";
      description = "Sazinieties ar mums pa tālruni vai aizpildiet kontaktu formu tūlītējai saziņai.";
    } else if (currentPath === "/sikdatnu-politika") {
      title = "Sīkdatņu politika | Demontāža 24/7";
      description = "Uzziniet par to, kā un kāpēc mēs izmantojam sīkdatnes savā vietnē un kā tās pārvaldīt.";
    } else if (currentPath === "/privatuma-politika") {
      title = "Privātuma politika | Demontāža 24/7";
      description = "Privātuma politika skaidro, kā mēs apkopojam, izmantojam, uzglabājam un aizsargājam jūsu personas datus.";
    }

    // 1. Update title
    document.title = title;

    // 2. Set Meta Description
    let metaDescElement = document.querySelector('meta[name="description"]');
    if (!metaDescElement) {
      metaDescElement = document.createElement("meta");
      metaDescElement.setAttribute("name", "description");
      document.head.appendChild(metaDescElement);
    }
    metaDescElement.setAttribute("content", description);

    // 3. Set Canonical Link
    let canonicalElement = document.querySelector('link[rel="canonical"]');
    if (!canonicalElement) {
      canonicalElement = document.createElement("link");
      canonicalElement.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalElement);
    }
    canonicalElement.setAttribute("href", canonicalUrl);

    // 4. Open Graph (OG) Tags
    const ogTags = {
      "og:title": title,
      "og:description": description,
      "og:url": canonicalUrl,
      "og:type": "website",
      "og:image": logoUrl,
      "og:site_name": "Demontāža 24/7"
    };

    Object.entries(ogTags).forEach(([property, content]) => {
      let ogElement = document.querySelector(`meta[property="${property}"]`);
      if (!ogElement) {
        ogElement = document.createElement("meta");
        ogElement.setAttribute("property", property);
        document.head.appendChild(ogElement);
      }
      ogElement.setAttribute("content", content);
    });

    // 5. Schema.org injection for LocalBusiness on Sākumlapa (/)
    const existingSchema = document.getElementById("local-business-schema");
    if (existingSchema) {
      existingSchema.remove();
    }

    if (currentPath === "/") {
      const schemaScript = document.createElement("script");
      schemaScript.id = "local-business-schema";
      schemaScript.type = "application/ld+json";
      schemaScript.innerHTML = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Demontāža 24/7",
        "image": logoUrl,
        "logo": logoUrl,
        "telephone": "+371 26739899",
        "email": "info@demontaza24.eu",
        "url": "https://demontaza24.eu",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "",
          "addressLocality": "Rīga",
          "addressCountry": "LV"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "56.9496",
          "longitude": "24.1052"
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "00:00",
          "closes": "23:59"
        },
        "sameAs": [],
        "areaServed": [
          {
            "@type": "AdministrativeArea",
            "name": "Latvia"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Rīga"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Zemgale"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Kurzeme"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Vidzeme"
          }
        ]
      });
      document.head.appendChild(schemaScript);
    }
  }, [currentPath]);

  return null;
}
