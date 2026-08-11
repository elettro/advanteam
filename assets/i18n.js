(() => {
  const STORAGE_KEY = 'advanteam-language';
  const DEFAULT_LANGUAGE = 'en';

  const translations = {
    'Skip to content':'Zum Inhalt springen',
    'Home':'Startseite',
    'Connections':'Verbindungen',
    'Communications':'Kommunikation',
    'Consulting':'Beratung',
    'Global Markets':'Globale Märkte',
    'Overview':'Überblick',
    'Germany & Europe':'Deutschland & Europa',
    'North America':'Nordamerika',
    'Middle East':'Naher Osten',
    'About':'Über uns',
    'Selected References':'Ausgewählte Referenzen',
    'Company History':'Unternehmensgeschichte',
    'Contact':'Kontakt',
    'Contact ADVANTEAM':'ADVANTEAM kontaktieren',
    'Email ADVANTEAM':'ADVANTEAM per E-Mail kontaktieren',
    'Call ADVANTEAM':'ADVANTEAM anrufen',
    'Imprint':'Impressum',
    'Privacy Policy':'Datenschutz',
    'Founded 1998':'Gegründet 1998',
    'Start a Conversation':'Gespräch starten',
    'View Capabilities':'Leistungen ansehen',
    'Open navigation':'Navigation öffnen',
    'Close navigation':'Navigation schließen',
    'Language':'Sprache',
    'Legal and company links':'Rechtliche und Unternehmenslinks',
    'Meet Udo':'Udo kennenlernen',
    'Hear from Udo':'Udo hören',
    'Click to play with sound':'Klicken, um mit Ton abzuspielen',
    'Click to hear Udo':'Klicken, um Udo zu hören',
    'Loading video…':'Video wird geladen…',
    'Video did not start. Click to retry.':'Video konnte nicht gestartet werden. Zum erneuten Versuch klicken.',
    'Video did not load. Click to retry.':'Video konnte nicht geladen werden. Zum erneuten Versuch klicken.',
    'Strategy':'Strategie',
    'Marketing':'Marketing',
    'Digitalization':'Digitalisierung',
    'Implementation':'Umsetzung',
    'Business Development':'Geschäftsentwicklung',
    'Sales':'Vertrieb',
    'Positioning':'Positionierung',
    'Technology':'Technologie',
    'Innovation':'Innovation',
    'Market Entry':'Markteintritt',
    'Cross-Border Growth':'Grenzüberschreitendes Wachstum',
    'International Growth':'Internationales Wachstum',
    'Research':'Forschung',
    'Corporations':'Unternehmen',
    'Start-ups':'Start-ups',
    'Associations':'Verbände',
    'Healthcare':'Gesundheitswesen',
    'Western Europe':'Westeuropa',

    'International strategy and business development':'Internationale Strategie und Geschäftsentwicklung',
    'Connections.':'Verbindungen.',
    'Communications.':'Kommunikation.',
    'Consulting.':'Beratung.',
    'Connections. Communications. Consulting.':'Verbindungen. Kommunikation. Beratung.',
    'ADVANTEAM helps companies build valuable relationships, communicate with authority, and make stronger strategic decisions across Germany, Europe, North America, and the Middle East.':'ADVANTEAM hilft Unternehmen, wertvolle Beziehungen aufzubauen, überzeugend zu kommunizieren und fundiertere strategische Entscheidungen in Deutschland, Europa, Nordamerika und dem Nahen Osten zu treffen.',
    'Your partner for communication, resilience, and international growth.':'Ihr Partner für Kommunikation, Resilienz und internationales Wachstum.',
    'ADVANTEAM is a specialist agency for strategy, marketing, communications, and digital transformation. We advise and support organizations from the first idea through implementation and continued growth.':'ADVANTEAM ist eine Spezialagentur für Strategie, Marketing, Kommunikation und digitale Transformation. Wir beraten und begleiten Organisationen von der ersten Idee über die Umsetzung bis zum weiteren Wachstum.',
    'Our work combines business development, sales, public relations, media relations, digital strategy, and management consulting.':'Unsere Arbeit verbindet Geschäftsentwicklung, Vertrieb, Public Relations, Medienarbeit, Digitalstrategie und Managementberatung.',
    'The Three Cs':'Die drei C',
    'Three services. One coordinated growth system.':'Drei Leistungen. Ein abgestimmtes Wachstumssystem.',
    'Relationships, communications, and strategic guidance work best together.':'Beziehungen, Kommunikation und strategische Beratung entfalten gemeinsam die größte Wirkung.',
    'Open the right doors.':'Öffnen Sie die richtigen Türen.',
    'Decision-makers, customers, investors, strategic partners, media, institutions, advisors, and international networks.':'Entscheider, Kunden, Investoren, strategische Partner, Medien, Institutionen, Berater und internationale Netzwerke.',
    'Explore Connections':'Verbindungen ansehen',
    'Make your value clear.':'Machen Sie Ihren Wert klar.',
    'Positioning, messaging, visibility, public relations, media relations, and crisis communications.':'Positionierung, Botschaften, Sichtbarkeit, Public Relations, Medienarbeit und Krisenkommunikation.',
    'Explore Communications':'Kommunikation ansehen',
    'Turn complexity into action.':'Machen Sie aus Komplexität konkrete Maßnahmen.',
    'Market entry, business strategy, digital transformation, change management, resilience, and growth.':'Markteintritt, Unternehmensstrategie, digitale Transformation, Change Management, Resilienz und Wachstum.',
    'Explore Consulting':'Beratung ansehen',
    'Move into the right markets with the right people.':'Erschließen Sie mit den richtigen Menschen die richtigen Märkte.',
    'Germany and Europe. North America. The Middle East.':'Deutschland und Europa. Nordamerika. Der Nahe Osten.',
    'Local relationships, positioning, and partner strategy.':'Lokale Beziehungen, Positionierung und Partnerstrategie.',
    'Visibility, strategic contacts, media access, and commercial momentum.':'Sichtbarkeit, strategische Kontakte, Medienzugang und kommerzielle Dynamik.',
    'Investor relationships, strategic partnerships, and cross-cultural communications.':'Investorenbeziehungen, strategische Partnerschaften und interkulturelle Kommunikation.',
    'What ADVANTEAM combines':'Was ADVANTEAM verbindet',
    'Commercial Expertise':'Kommerzielle Expertise',
    'Realization & Growth':'Umsetzung & Wachstum',
    'Individual':'Individuell',
    'Every collaboration is built around your organization and objectives.':'Jede Zusammenarbeit wird auf Ihre Organisation und Ihre Ziele zugeschnitten.',
    'Integrated':'Integriert',
    'Strategic, marketing, digital, and commercial thinking stay connected.':'Strategisches, marketingbezogenes, digitales und kommerzielles Denken bleibt miteinander verbunden.',
    'Hands-on':'Praxisnah',
    'Support continues from planning into actual project realization.':'Die Begleitung reicht von der Planung bis in die konkrete Projektumsetzung.',
    'Long-term':'Langfristig',
    'The relationship extends beyond launch into optimization and growth.':'Die Zusammenarbeit reicht über den Start hinaus bis zu Optimierung und Wachstum.',
    'What does your organization need to move forward?':'Was braucht Ihre Organisation, um voranzukommen?',

    'The Three Cs · Connections':'Die drei C · Verbindungen',
    'ADVANTEAM connects companies with decision-makers, customers, investors, strategic partners, media, institutions, advisors and international networks.':'ADVANTEAM verbindet Unternehmen mit Entscheidern, Kunden, Investoren, strategischen Partnern, Medien, Institutionen, Beratern und internationalen Netzwerken.',
    'Why Connections':'Warum Verbindungen',
    'Access creates momentum.':'Zugang schafft Dynamik.',
    'Strong business growth often starts with access. ADVANTEAM identifies the people and organizations relevant to your goals, prepares the approach and creates credible introductions.':'Starkes Unternehmenswachstum beginnt oft mit dem richtigen Zugang. ADVANTEAM identifiziert die für Ihre Ziele relevanten Menschen und Organisationen, bereitet die Ansprache vor und schafft glaubwürdige Kontakte.',
    'Every assignment begins with the business objective, target market and stakeholders who matter most.':'Jedes Mandat beginnt mit dem Geschäftsziel, dem Zielmarkt und den wichtigsten Stakeholdern.',
    'Connections Capabilities':'Leistungen im Bereich Verbindungen',
    'Relationships built around the business objective.':'Beziehungen, die sich am Geschäftsziel orientieren.',
    'Market Access':'Marktzugang',
    'Relationships with decision-makers, partners, institutions and advisors across priority markets.':'Beziehungen zu Entscheidern, Partnern, Institutionen und Beratern in priorisierten Märkten.',
    'Investors & Strategic Partners':'Investoren & strategische Partner',
    'Preparation and introductions for capital, alliances, distribution and growth partnerships.':'Vorbereitung und Kontakte für Kapital, Allianzen, Vertrieb und Wachstumspartnerschaften.',
    'Media & Institutions':'Medien & Institutionen',
    'Access to journalists, associations, research institutions and public-sector stakeholders.':'Zugang zu Journalisten, Verbänden, Forschungseinrichtungen und Stakeholdern des öffentlichen Sektors.',
    'Structured outreach built around a market, client profile or commercial objective.':'Strukturierte Ansprache rund um einen Markt, ein Kundenprofil oder ein kommerzielles Ziel.',
    'Cross-Border Networks':'Grenzüberschreitende Netzwerke',
    'Connections between German and international businesses entering new markets.':'Verbindungen zwischen deutschen und internationalen Unternehmen beim Eintritt in neue Märkte.',
    'Partner Qualification':'Partnerqualifizierung',
    'Practical review of alignment, credibility and next steps before introductions.':'Praktische Prüfung von Passung, Glaubwürdigkeit und nächsten Schritten vor einer Kontaktvermittlung.',
    'FPO IMAGE 02':'PLATZHALTER BILD 02',
    'Recommended supporting image':'Empfohlenes unterstützendes Bild',
    'A senior professional reviewing an international market map with another executive.':'Eine erfahrene Führungskraft, die gemeinsam mit einer weiteren Führungskraft eine internationale Marktkarte prüft.',
    'Expected Value':'Erwarteter Mehrwert',
    'What this work should produce.':'Was diese Arbeit bewirken soll.',
    'Faster access to relevant decision-makers':'Schnellerer Zugang zu relevanten Entscheidern',
    'More credible introductions':'Glaubwürdigere Kontaktanbahnungen',
    'Better-qualified partners and opportunities':'Besser qualifizierte Partner und Chancen',
    'Stronger local market understanding':'Stärkeres Verständnis des lokalen Marktes',
    'A coordinated follow-up strategy':'Eine abgestimmte Follow-up-Strategie',
    'Integrated Model':'Integriertes Modell',
    'Connections work with Communications and Consulting.':'Verbindungen wirken gemeinsam mit Kommunikation und Beratung.',
    'Related pillar':'Verwandter Bereich',
    'Build the messages and visibility needed to make new relationships productive.':'Entwickeln Sie die Botschaften und Sichtbarkeit, die neue Beziehungen produktiv machen.',
    'Turn access and opportunity into practical market and growth strategy.':'Überführen Sie Zugang und Chancen in eine praktische Markt- und Wachstumsstrategie.',
    'Build the right relationships.':'Bauen Sie die richtigen Beziehungen auf.',

    'The Three Cs · Communications':'Die drei C · Kommunikation',
    'ADVANTEAM develops positioning, messaging, visibility, public relations, media relations and crisis communications.':'ADVANTEAM entwickelt Positionierung, Botschaften, Sichtbarkeit, Public Relations, Medienarbeit und Krisenkommunikation.',
    'Why Communications':'Warum Kommunikation',
    'Clarity builds confidence.':'Klarheit schafft Vertrauen.',
    'ADVANTEAM turns complex ideas into focused messages and coordinates communications across leadership, media, customers, partners and international markets.':'ADVANTEAM übersetzt komplexe Ideen in fokussierte Botschaften und koordiniert die Kommunikation mit Führungskräften, Medien, Kunden, Partnern und internationalen Märkten.',
    'Capabilities':'Leistungen',
    'Positioning and visibility tied to business goals.':'Positionierung und Sichtbarkeit, ausgerichtet an Geschäftszielen.',
    'Corporate Communications':'Unternehmenskommunikation',
    'Company narratives, leadership messages and stakeholder communications.':'Unternehmensnarrative, Führungsbotschaften und Stakeholder-Kommunikation.',
    'Public Relations':'Public Relations',
    'Media strategy, story development, outreach and interviews.':'Medienstrategie, Themenentwicklung, Ansprache und Interviews.',
    'Media Relations':'Medienarbeit',
    'Journalist relationships, preparation and international media access.':'Journalistenkontakte, Vorbereitung und internationaler Medienzugang.',
    'Brand Positioning':'Markenpositionierung',
    'A sharper definition of what the company represents and why it matters.':'Eine klarere Definition dessen, wofür das Unternehmen steht und warum das relevant ist.',
    'Strategic Marketing':'Strategisches Marketing',
    'Campaign and channel decisions tied to reputation and growth.':'Kampagnen- und Kanalentscheidungen im Einklang mit Reputation und Wachstum.',
    'Crisis Communications':'Krisenkommunikation',
    'Message development, spokesperson preparation and response planning.':'Botschaftsentwicklung, Sprechertraining und Reaktionsplanung.',
    'Reach the stakeholders and media audiences who matter.':'Erreichen Sie die relevanten Stakeholder und Medienzielgruppen.',
    'Align messages with business strategy and market entry.':'Richten Sie Botschaften an Unternehmensstrategie und Markteintritt aus.',

    'The Three Cs · Consulting':'Die drei C · Beratung',
    'ADVANTEAM provides practical guidance for market entry, business strategy, digital transformation, change management, resilience and growth.':'ADVANTEAM bietet praxisorientierte Beratung für Markteintritt, Unternehmensstrategie, digitale Transformation, Change Management, Resilienz und Wachstum.',
    'Why Consulting':'Warum Beratung',
    'Advice should lead to decisions.':'Beratung sollte zu Entscheidungen führen.',
    'ADVANTEAM combines business experience, communications insight and international relationships to create plans organizations can execute, measure and adjust.':'ADVANTEAM verbindet Geschäftserfahrung, Kommunikationskompetenz und internationale Beziehungen zu Plänen, die Organisationen umsetzen, messen und anpassen können.',
    'Strategy designed for implementation.':'Strategie, die auf Umsetzung ausgelegt ist.',
    'Business Strategy':'Unternehmensstrategie',
    'Focused priorities, decision frameworks and action plans.':'Klare Prioritäten, Entscheidungsrahmen und Aktionspläne.',
    'Positioning, partner strategy and phased entry into new regions.':'Positionierung, Partnerstrategie und schrittweiser Eintritt in neue Regionen.',
    'Digital Transformation':'Digitale Transformation',
    'Process improvement, automation, AI readiness and implementation.':'Prozessverbesserung, Automatisierung, KI-Bereitschaft und Umsetzung.',
    'Change Management':'Change Management',
    'Leadership alignment, communications and transition support.':'Führungsabstimmung, Kommunikation und Begleitung von Veränderungsprozessen.',
    'Resilience':'Resilienz',
    'Scenario planning, response structures and organizational readiness.':'Szenarioplanung, Reaktionsstrukturen und organisatorische Bereitschaft.',
    'Marketing & Sales':'Marketing & Vertrieb',
    'Market focus, value proposition and coordinated growth activity.':'Marktfokus, Wertversprechen und koordinierte Wachstumsaktivitäten.',
    'Bring the right partners and relationships into the plan.':'Bringen Sie die richtigen Partner und Beziehungen in den Plan ein.',
    'Align stakeholders around the strategy.':'Richten Sie Stakeholder gemeinsam auf die Strategie aus.',

    'Build credible access, visibility and business momentum across Germany, Europe, North America and the Middle East.':'Schaffen Sie glaubwürdigen Zugang, Sichtbarkeit und Geschäftsdynamik in Deutschland, Europa, Nordamerika und dem Nahen Osten.',
    'Priority Regions':'Schwerpunktregionen',
    'Three international market pathways.':'Drei Wege in internationale Märkte.',
    'Market entry, partner strategy and corporate positioning.':'Markteintritt, Partnerstrategie und Unternehmenspositionierung.',
    'Explore Germany & Europe':'Deutschland & Europa ansehen',
    'Visibility, strategic introductions and business development.':'Sichtbarkeit, strategische Kontakte und Geschäftsentwicklung.',
    'Explore North America':'Nordamerika ansehen',
    'Regional positioning, investor relations and strategic partnerships.':'Regionale Positionierung, Investorenbeziehungen und strategische Partnerschaften.',
    'Explore the Middle East':'Nahen Osten ansehen',

    'Build local relationships, positioning and partner strategy for Germany and the wider European market.':'Bauen Sie lokale Beziehungen, Positionierung und Partnerstrategien für Deutschland und den europäischen Markt auf.',
    'Enter with a clear position and qualified relationships.':'Treten Sie mit einer klaren Position und qualifizierten Beziehungen in den Markt ein.',
    'ADVANTEAM helps international companies identify relevant partners, adapt communications and plan a practical market-entry path.':'ADVANTEAM hilft internationalen Unternehmen, relevante Partner zu identifizieren, die Kommunikation anzupassen und einen praktikablen Weg in den Markt zu planen.',
    'Discuss Germany & Europe':'Deutschland & Europa besprechen',
    'Gain visibility, strategic contacts, media access and commercial momentum across North America.':'Gewinnen Sie Sichtbarkeit, strategische Kontakte, Medienzugang und kommerzielle Dynamik in Nordamerika.',
    'Translate European strength into North American relevance.':'Übertragen Sie europäische Stärke in nordamerikanische Relevanz.',
    'ADVANTEAM supports positioning, introductions, communications and structured business development for market entry and expansion.':'ADVANTEAM unterstützt Positionierung, Kontakte, Kommunikation und strukturierte Geschäftsentwicklung für Markteintritt und Expansion.',
    'Discuss North America':'Nordamerika besprechen',
    'Develop regional positioning, investor relationships, strategic partnerships and cross-cultural communications.':'Entwickeln Sie regionale Positionierung, Investorenbeziehungen, strategische Partnerschaften und interkulturelle Kommunikation.',
    'Build trust through relationships and regional understanding.':'Schaffen Sie Vertrauen durch Beziehungen und regionales Verständnis.',
    'ADVANTEAM supports stakeholder mapping, partner access, investor readiness and Europe–Middle East business development.':'ADVANTEAM unterstützt Stakeholder-Mapping, Partnerzugang, Investorenbereitschaft und Geschäftsentwicklung zwischen Europa und dem Nahen Osten.',
    'Discuss the Middle East':'Nahen Osten besprechen',

    'About ADVANTEAM':'Über ADVANTEAM',
    'Founded in 1998, ADVANTEAM helps organizations grow, adapt and enter new markets.':'Seit 1998 unterstützt ADVANTEAM Organisationen dabei, zu wachsen, sich anzupassen und neue Märkte zu erschließen.',
    'Founder, business connector, communications strategist and consultant.':'Gründer, Business-Netzwerker, Kommunikationsstratege und Berater.',
    'Representative work across sectors and international markets.':'Ausgewählte Arbeiten über Branchen und internationale Märkte hinweg.',
    'ADVANTEAM’s development since 1998.':'Die Entwicklung von ADVANTEAM seit 1998.',
    'Founder and Managing Director':'Gründer und Geschäftsführer',
    'Business connector, communications strategist and consultant with experience across media, healthcare, technology and international market access.':'Business-Netzwerker, Kommunikationsstratege und Berater mit Erfahrung in Medien, Gesundheitswesen, Technologie und internationalem Marktzugang.',
    'Visit UdoFoerster.com':'UdoFoerster.com besuchen',
    'Professional focus':'Professioneller Fokus',
    'Connections, communications, business development, digital transformation and cross-border growth.':'Verbindungen, Kommunikation, Geschäftsentwicklung, digitale Transformation und grenzüberschreitendes Wachstum.',
    'Since 1998':'Seit 1998',
    'From Aachen roots to international strategy, communications and business development.':'Von den Wurzeln in Aachen zu internationaler Strategie, Kommunikation und Geschäftsentwicklung.',
    'Founded in Aachen':'Gründung in Aachen',
    'ADVANTEAM begins as a communications and management consulting company.':'ADVANTEAM startet als Unternehmen für Kommunikation und Managementberatung.',
    '2010s':'2010er',
    'Projects expand across healthcare, media, technology and institutions.':'Die Projekte erweitern sich auf Gesundheitswesen, Medien, Technologie und Institutionen.',
    'Today':'Heute',
    'Connections, communications and consulting across priority global markets.':'Verbindungen, Kommunikation und Beratung in priorisierten internationalen Märkten.',

    'Selected Work':'Ausgewählte Arbeiten',
    'References':'Referenzen',
    'More than two decades of projects across media, healthcare, technology, international business, research and corporate communications.':'Mehr als zwei Jahrzehnte Projekte in Medien, Gesundheitswesen, Technologie, internationalem Geschäft, Forschung und Unternehmenskommunikation.',
    'Experience across sectors':'Erfahrung über Branchen hinweg',
    'years of client and project work':'Jahre Kunden- und Projektarbeit',
    'TV Broadcasters':'TV-Sender',
    'Reference Portfolio':'Referenzportfolio',
    'Projects built around real business objectives.':'Projekte, die auf realen Geschäftszielen basieren.',
    'Over the past 20 years, we have successfully completed numerous projects. We have worked for TV broadcasters including RTL, Super RTL, VOX and WDR, as well as research institutions, large corporations, start-ups and business associations. We would like to briefly present some of these projects here.':'In den vergangenen 20 Jahren haben wir zahlreiche Projekte erfolgreich umgesetzt. Wir haben für TV-Sender wie RTL, Super RTL, VOX und WDR sowie für Forschungseinrichtungen, große Unternehmen, Start-ups und Wirtschaftsverbände gearbeitet. Einige dieser Projekte möchten wir hier kurz vorstellen.',
    'Research Institutions':'Forschungseinrichtungen',
    'Large Corporations':'Großunternehmen',
    'Business Associations':'Wirtschaftsverbände',
    'Featured References':'Ausgewählte Referenzen',
    'Selected projects in greater detail.':'Ausgewählte Projekte im Detail.',
    'These examples show how ADVANTEAM combines relationships, communications and consulting to support organizations at very different stages of development.':'Diese Beispiele zeigen, wie ADVANTEAM Beziehungen, Kommunikation und Beratung verbindet, um Organisationen in sehr unterschiedlichen Entwicklungsphasen zu unterstützen.',
    'Healthcare & Rehabilitation Technology':'Gesundheitswesen & Rehatechnik',
    'Healthcare Growth · Business Development':'Wachstum im Gesundheitswesen · Geschäftsentwicklung',
    'mein SANiHAUS and mein SANiHAUS Rehatechnik GmbH':'mein SANiHAUS und mein SANiHAUS Rehatechnik GmbH',
    'From an entrepreneurial starting point to two established healthcare businesses, ADVANTEAM has supported the development of mein SANiHAUS and mein SANiHAUS Rehatechnik from the very beginning.':'Von einem unternehmerischen Ausgangspunkt zu zwei etablierten Gesundheitsunternehmen: ADVANTEAM begleitet die Entwicklung von mein SANiHAUS und mein SANiHAUS Rehatechnik seit Beginn.',
    'Using our business-development toolkit, networks and partners, we helped connect strategy with practical implementation. What began as a one-woman operation developed over eight years into two successful companies with around 40 employees. The work reflects the kind of long-term collaboration ADVANTEAM is built for: identifying opportunities, building the right relationships and staying involved as the organization grows.':'Mit unserem Instrumentarium für Geschäftsentwicklung, unseren Netzwerken und Partnern haben wir Strategie mit praktischer Umsetzung verbunden. Was als Ein-Frau-Unternehmen begann, entwickelte sich innerhalb von acht Jahren zu zwei erfolgreichen Unternehmen mit rund 40 Mitarbeitenden. Die Arbeit steht exemplarisch für die langfristige Zusammenarbeit von ADVANTEAM: Chancen erkennen, die richtigen Beziehungen aufbauen und das Wachstum der Organisation kontinuierlich begleiten.',
    'A key area of the rehabilitation-technology business is support for people living with neurological conditions, including MS and stroke patients, with Functional Electrical Stimulation among the specialized treatment approaches associated with this work.':'Ein wichtiger Bereich der Rehatechnik ist die Unterstützung von Menschen mit neurologischen Erkrankungen, darunter MS- und Schlaganfallpatienten. Zu den spezialisierten Behandlungsansätzen in diesem Umfeld gehört auch die Funktionelle Elektrostimulation.',
    'Network Building':'Netzwerkaufbau',
    'Growth Strategy':'Wachstumsstrategie',
    'Long-term Support':'Langfristige Begleitung',
    'Visit mein SANiHAUS':'mein SANiHAUS besuchen',
    'Neurorehabilitation reference':'Referenz Neurorehabilitation',
    'International Market Entry · Real Estate':'Internationaler Markteintritt · Immobilien',
    'Consulting for the international real estate industry':'Beratung für die internationale Immobilienbranche',
    'Concepts, contacts and collaborations for a Dubai-based real estate development company seeking a business foothold in Western Europe.':'Konzepte, Kontakte und Kooperationen für einen in Dubai ansässigen Immobilienentwickler, der in Westeuropa geschäftlich Fuß fassen wollte.',
    'ADVANTEAM supported the assignment as a cross-border market-entry project. The focus was on creating a credible route into Western Europe through market-oriented concepts, relevant contacts and potential collaboration partners. Rather than treating market entry as a simple sales exercise, the work centered on building the relationships and context required for serious business conversations.':'ADVANTEAM begleitete das Mandat als grenzüberschreitendes Markteintrittsprojekt. Im Mittelpunkt stand ein glaubwürdiger Zugang zu Westeuropa durch marktorientierte Konzepte, relevante Kontakte und potenzielle Kooperationspartner. Statt den Markteintritt als reine Vertriebsaufgabe zu behandeln, lag der Fokus auf den Beziehungen und dem Kontext, die für ernsthafte Geschäftsgespräche erforderlich sind.',
    "The project is a strong example of ADVANTEAM's role between markets: connecting decision-makers, helping navigate different business cultures and bringing commercial strategy together with trusted local relationships.":'Das Projekt ist ein starkes Beispiel für die Rolle von ADVANTEAM zwischen Märkten: Entscheider verbinden, unterschiedliche Geschäftskulturen navigieren und kommerzielle Strategie mit vertrauenswürdigen lokalen Beziehungen zusammenführen.',
    'The client is presented without a company name because the original reference identifies it as a real estate development company from the United Arab Emirates based in Dubai.':'Der Kunde wird ohne Firmennamen dargestellt, da die ursprüngliche Referenz ihn als Immobilienentwicklungsgesellschaft aus den Vereinigten Arabischen Emiraten mit Sitz in Dubai bezeichnet.',
    'Strategic Contacts':'Strategische Kontakte',
    'Partnership Development':'Partnerschaftsentwicklung',
    'Electromobility · Aachen':'Elektromobilität · Aachen',
    'Innovation Communications · Electromobility':'Innovationskommunikation · Elektromobilität',
    'On behalf of Professor Dr. Achim Kampker, ADVANTEAM had the opportunity to accompany the launch of StreetScooter, an early Aachen-based electric-vehicle initiative.':'Im Auftrag von Professor Dr. Achim Kampker hatte ADVANTEAM die Gelegenheit, die Markteinführung von StreetScooter zu begleiten, einer frühen Aachener Initiative für Elektrofahrzeuge.',
    "The StreetScooter was officially presented at the 2011 International Motor Show in Frankfurt at a time when practical electric commercial vehicles were still far from mainstream. ADVANTEAM's involvement connected communications with an innovation story that was beginning to challenge conventional assumptions about how electric vehicles could be developed and brought into real-world use.":'Der StreetScooter wurde 2011 auf der Internationalen Automobil-Ausstellung in Frankfurt offiziell vorgestellt, zu einer Zeit, als praxistaugliche elektrische Nutzfahrzeuge noch weit vom Mainstream entfernt waren. ADVANTEAM verband die Kommunikation mit einer Innovationsgeschichte, die etablierte Vorstellungen darüber infrage stellte, wie Elektrofahrzeuge entwickelt und in die Praxis gebracht werden können.',
    "StreetScooter went on to become a recognized name in electric last-mile mobility. The reference demonstrates ADVANTEAM's ability to work alongside founders, technical leaders and emerging technologies at the point where a strong idea needs visibility, positioning and momentum.":'StreetScooter entwickelte sich zu einem bekannten Namen in der elektrischen Last-Mile-Mobilität. Die Referenz zeigt die Fähigkeit von ADVANTEAM, Gründer, technische Führungskräfte und neue Technologien genau dann zu begleiten, wenn eine starke Idee Sichtbarkeit, Positionierung und Dynamik benötigt.',
    'Launch Communications':'Markteinführungskommunikation',
    'Visit StreetScooter':'StreetScooter besuchen',
    'The ADVANTEAM Pattern':'Das ADVANTEAM-Muster',
    'Different sectors. The same three strengths.':'Unterschiedliche Branchen. Dieselben drei Stärken.',
    'Reach the right people.':'Erreichen Sie die richtigen Menschen.',
    'Build access to decision-makers, partners, institutions, customers, media and specialist networks.':'Schaffen Sie Zugang zu Entscheidern, Partnern, Institutionen, Kunden, Medien und spezialisierten Netzwerken.',
    'Make the opportunity clear.':'Machen Sie die Chance verständlich.',
    'Turn business and technical complexity into positioning, stories and messages stakeholders understand.':'Übersetzen Sie geschäftliche und technische Komplexität in Positionierung, Geschichten und Botschaften, die Stakeholder verstehen.',
    'Move from idea to execution.':'Von der Idee zur Umsetzung.',
    'Connect strategic thinking with practical market entry, business development, growth and implementation.':'Verbinden Sie strategisches Denken mit praktischem Markteintritt, Geschäftsentwicklung, Wachstum und Umsetzung.',

    'Discuss connections, communications, consulting or international market growth.':'Sprechen Sie mit uns über Verbindungen, Kommunikation, Beratung oder internationales Marktwachstum.',
    'FPO IMAGE 01':'PLATZHALTER BILD 01',
    'Recommended contact image':'Empfohlenes Kontaktbild',
    'A warm, professional client conversation in an authentic business environment.':'Ein persönliches, professionelles Kundengespräch in einem authentischen Geschäftsumfeld.',
    'Head Office':'Hauptsitz',
    'Aachen Branch':'Niederlassung Aachen',
    'Tell us what you need to move forward.':'Sagen Sie uns, was Sie brauchen, um voranzukommen.',
    'Include your objective, target market, timing and current position.':'Nennen Sie uns Ihr Ziel, Ihren Zielmarkt, den Zeitrahmen und Ihre aktuelle Ausgangslage.',

    'Legal':'Rechtliches',
    'Legal provider information for ADVANTEAM.':'Rechtliche Anbieterinformationen für ADVANTEAM.',
    'Company information':'Unternehmensangaben',
    'Commercial Register: HRB 47579':'Handelsregister: HRB 47579',
    'Register Court: Amtsgericht Mainz':'Registergericht: Amtsgericht Mainz',
    'Represented by: Udo Foerster':'Vertreten durch: Udo Foerster',
    'Phone:':'Telefon:',
    'Email:':'E-Mail:',
    'VAT identification number':'Umsatzsteuer-Identifikationsnummer',
    'VAT identification number pursuant to § 27a of the German VAT Act: DE 205564312.':'Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: DE 205564312.',
    'Consumer dispute resolution':'Verbraucherstreitbeilegung',
    'ADVANTEAM is not willing or obligated to participate in dispute resolution proceedings before a consumer arbitration board.':'ADVANTEAM ist weder bereit noch verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.',
    'Image sources':'Bildquellen',
    'The site uses photography and visual material from ADVANTEAM and Udo Foerster archives as well as licensed or freely available image sources where applicable.':'Die Website verwendet Fotografien und visuelles Material aus den Archiven von ADVANTEAM und Udo Foerster sowie, soweit zutreffend, lizenzierte oder frei verfügbare Bildquellen.',
    'Last updated: August 10, 2026.':'Stand: 10. August 2026.',
    'Information about how ADVANTEAM handles personal data when you use this website or contact the company.':'Informationen darüber, wie ADVANTEAM personenbezogene Daten verarbeitet, wenn Sie diese Website nutzen oder das Unternehmen kontaktieren.',
    'Responsible entity':'Verantwortliche Stelle',
    'Data processed when you visit the website':'Datenverarbeitung beim Besuch der Website',
    'Technical data required to deliver and secure the website may be processed automatically. This may include IP address, browser and device information, operating system, referring page, requested page, and the date and time of access. This information is used for reliable delivery, security, troubleshooting, and protection against misuse.':'Technische Daten, die für die Bereitstellung und Absicherung der Website erforderlich sind, können automatisch verarbeitet werden. Dazu gehören insbesondere IP-Adresse, Browser- und Geräteinformationen, Betriebssystem, verweisende Seite, aufgerufene Seite sowie Datum und Uhrzeit des Zugriffs. Diese Informationen dienen der zuverlässigen Bereitstellung, Sicherheit, Fehlerbehebung und dem Schutz vor Missbrauch.',
    'Contact by email or telephone':'Kontakt per E-Mail oder Telefon',
    'If you contact ADVANTEAM, the information you provide is processed to respond to your request, prepare or perform a business relationship, and manage any necessary follow-up. Data is retained only for as long as required for the relevant purpose or applicable statutory retention obligations.':'Wenn Sie ADVANTEAM kontaktieren, werden die von Ihnen bereitgestellten Informationen verarbeitet, um Ihre Anfrage zu beantworten, eine Geschäftsbeziehung vorzubereiten oder durchzuführen und erforderliche Folgemaßnahmen zu bearbeiten. Daten werden nur so lange gespeichert, wie es für den jeweiligen Zweck oder aufgrund gesetzlicher Aufbewahrungspflichten erforderlich ist.',
    'Cookies and local storage':'Cookies und lokaler Speicher',
    'Technically necessary browser storage may be used where required for core website functions. Optional technologies that require consent should only be activated after consent has been obtained. You may also manage stored data through your browser settings.':'Technisch notwendiger Browserspeicher kann eingesetzt werden, soweit dies für zentrale Website-Funktionen erforderlich ist. Optionale Technologien, die eine Einwilligung erfordern, sollen erst nach Erteilung der Einwilligung aktiviert werden. Gespeicherte Daten können Sie zudem über die Einstellungen Ihres Browsers verwalten.',
    'Embedded media and external services':'Eingebettete Medien und externe Dienste',
    'Pages may include media, links, or services supplied by third parties. When third-party content is loaded, the relevant provider may receive technical connection data. Where consent is legally required for an optional service, the service should remain inactive until consent is provided.':'Seiten können Medien, Links oder Dienste von Drittanbietern enthalten. Beim Laden von Drittinhalten kann der jeweilige Anbieter technische Verbindungsdaten erhalten. Soweit für einen optionalen Dienst gesetzlich eine Einwilligung erforderlich ist, soll der Dienst bis zur Erteilung der Einwilligung inaktiv bleiben.',
    'Legal bases':'Rechtsgrundlagen',
    "Depending on the situation, processing is based on consent, steps requested before entering into a contract, performance of a contract, compliance with a legal obligation, or ADVANTEAM's legitimate interest in operating a secure and effective company website and responding to business enquiries.":'Je nach Situation erfolgt die Verarbeitung auf Grundlage einer Einwilligung, vorvertraglicher Maßnahmen, der Vertragserfüllung, einer rechtlichen Verpflichtung oder des berechtigten Interesses von ADVANTEAM am sicheren und effektiven Betrieb der Unternehmenswebsite sowie an der Beantwortung geschäftlicher Anfragen.',
    'Recipients and service providers':'Empfänger und Dienstleister',
    "Personal data is shared only where necessary for the stated purpose, where required by law, or where a service provider processes data on ADVANTEAM's behalf under appropriate contractual and data-protection safeguards.":'Personenbezogene Daten werden nur weitergegeben, wenn dies für den genannten Zweck erforderlich ist, gesetzlich vorgeschrieben ist oder ein Dienstleister Daten im Auftrag von ADVANTEAM unter geeigneten vertraglichen und datenschutzrechtlichen Schutzmaßnahmen verarbeitet.',
    'Retention':'Speicherdauer',
    'Personal data is deleted or anonymized when the purpose for processing no longer applies, unless legal retention periods or another lawful basis require continued storage.':'Personenbezogene Daten werden gelöscht oder anonymisiert, sobald der Verarbeitungszweck entfällt, sofern keine gesetzlichen Aufbewahrungsfristen oder eine andere Rechtsgrundlage eine weitere Speicherung erfordern.',
    'Your rights':'Ihre Rechte',
    'Under applicable data-protection law, you may have rights to access, correction, deletion, restriction of processing, data portability, withdrawal of consent, and objection to certain processing. You also have the right to lodge a complaint with the competent supervisory authority.':'Nach dem anwendbaren Datenschutzrecht haben Sie gegebenenfalls Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit, Widerruf einer Einwilligung und Widerspruch gegen bestimmte Verarbeitungen. Außerdem haben Sie das Recht, sich bei der zuständigen Aufsichtsbehörde zu beschweren.',
    'Objection to direct marketing':'Widerspruch gegen Direktwerbung',
    'You may object at any time to the use of your personal data for direct marketing. Contact ADVANTEAM using the details above to exercise this right.':'Sie können der Verwendung Ihrer personenbezogenen Daten für Direktwerbung jederzeit widersprechen. Wenden Sie sich hierzu über die oben genannten Kontaktdaten an ADVANTEAM.',
    'Security':'Sicherheit',
    "ADVANTEAM uses appropriate technical and organizational measures designed to protect personal data. Internet transmission is not completely risk-free, so confidential information should be shared through appropriate channels.":'ADVANTEAM setzt geeignete technische und organisatorische Maßnahmen zum Schutz personenbezogener Daten ein. Die Übertragung über das Internet ist nicht vollständig risikofrei. Vertrauliche Informationen sollten daher über geeignete Kanäle übermittelt werden.',

    'ADVANTEAM | Connections, Communications & Consulting':'ADVANTEAM | Verbindungen, Kommunikation & Beratung',
    'Connections | ADVANTEAM':'Verbindungen | ADVANTEAM',
    'Communications | ADVANTEAM':'Kommunikation | ADVANTEAM',
    'Consulting | ADVANTEAM':'Beratung | ADVANTEAM',
    'Global Markets | ADVANTEAM':'Globale Märkte | ADVANTEAM',
    'Germany & Europe | ADVANTEAM':'Deutschland & Europa | ADVANTEAM',
    'North America | ADVANTEAM':'Nordamerika | ADVANTEAM',
    'Middle East | ADVANTEAM':'Naher Osten | ADVANTEAM',
    'About ADVANTEAM':'Über ADVANTEAM',
    'Selected References | ADVANTEAM':'Ausgewählte Referenzen | ADVANTEAM',
    'Company History | ADVANTEAM':'Unternehmensgeschichte | ADVANTEAM',
    'Contact | ADVANTEAM':'Kontakt | ADVANTEAM',
    'Imprint | ADVANTEAM':'Impressum | ADVANTEAM',
    'Privacy Policy | ADVANTEAM':'Datenschutz | ADVANTEAM',

    'Global markets visual centered on Germany':'Visualisierung globaler Märkte mit Deutschland im Zentrum',
    'Germany and Europe market visual':'Visualisierung des Marktes Deutschland und Europa',
    'North America market visual':'Visualisierung des nordamerikanischen Marktes',
    'Middle East business development visual featuring Udo Foerster in Dubai':'Visualisierung zur Geschäftsentwicklung im Nahen Osten mit Udo Foerster in Dubai',
    'Udo Foerster, founder and managing director of ADVANTEAM':'Udo Foerster, Gründer und Geschäftsführer von ADVANTEAM',
    "Udo Foerster introduces ADVANTEAM":'Udo Foerster stellt ADVANTEAM vor',
    "Play Udo's ADVANTEAM introduction":'Udos ADVANTEAM-Einführung abspielen',
    "Play Udo's ADVANTEAM communications video":'Udos ADVANTEAM-Video zur Kommunikation abspielen',
    "Play Udo's consulting introduction":'Udos Einführung zur Beratung abspielen'
  };

  const textState = new WeakMap();
  const attrState = new WeakMap();
  let currentLanguage = DEFAULT_LANGUAGE;
  let applying = false;

  const getSavedLanguage = () => {
    try {
      const value = localStorage.getItem(STORAGE_KEY);
      return value === 'de' ? 'de' : DEFAULT_LANGUAGE;
    } catch (error) {
      return DEFAULT_LANGUAGE;
    }
  };

  const saveLanguage = (language) => {
    try { localStorage.setItem(STORAGE_KEY, language); } catch (error) {}
  };

  const translatedValue = (value, language) => {
    if (language !== 'de') return value;
    return Object.prototype.hasOwnProperty.call(translations, value) ? translations[value] : value;
  };

  const processTextNode = (node, language, forceSourceRefresh = false) => {
    if (!node || node.nodeType !== Node.TEXT_NODE) return;
    const parent = node.parentElement;
    if (!parent || parent.closest('script,style,noscript,textarea,[data-no-translate]')) return;
    const raw = node.nodeValue || '';
    const trimmed = raw.trim();
    if (!trimmed) return;

    let state = textState.get(node);
    if (forceSourceRefresh && Object.prototype.hasOwnProperty.call(translations, trimmed)) state = null;
    if (!state) {
      if (!Object.prototype.hasOwnProperty.call(translations, trimmed)) return;
      const prefix = raw.slice(0, raw.indexOf(trimmed));
      const suffix = raw.slice(raw.indexOf(trimmed) + trimmed.length);
      state = {
        en: raw,
        de: prefix + translations[trimmed] + suffix
      };
      textState.set(node, state);
    }
    node.nodeValue = language === 'de' ? state.de : state.en;
  };

  const translatableAttributes = ['aria-label', 'title', 'alt', 'placeholder'];
  const processElementAttributes = (element, language) => {
    if (!(element instanceof Element) || element.closest('[data-no-translate]')) return;
    let state = attrState.get(element);
    if (!state) {
      state = {};
      translatableAttributes.forEach((attribute) => {
        if (!element.hasAttribute(attribute)) return;
        const value = element.getAttribute(attribute);
        if (!value || !Object.prototype.hasOwnProperty.call(translations, value)) return;
        state[attribute] = { en: value, de: translations[value] };
      });
      attrState.set(element, state);
    }
    Object.entries(state).forEach(([attribute, values]) => {
      element.setAttribute(attribute, language === 'de' ? values.de : values.en);
    });
  };

  const processSubtree = (root, language, forceSourceRefresh = false) => {
    if (!root) return;
    if (root.nodeType === Node.TEXT_NODE) {
      processTextNode(root, language, forceSourceRefresh);
      return;
    }
    if (!(root instanceof Element) && root !== document.body) return;
    if (root instanceof Element) processElementAttributes(root, language);
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) processTextNode(node, language, forceSourceRefresh);
    if (root.querySelectorAll) root.querySelectorAll('*').forEach((element) => processElementAttributes(element, language));
  };

  const updateSwitcher = (language) => {
    document.querySelectorAll('[data-adv-lang]').forEach((button) => {
      const active = button.dataset.advLang === language;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    const group = document.querySelector('.adv-lang-switch');
    if (group) group.setAttribute('aria-label', language === 'de' ? 'Sprache' : 'Language');
  };

  const applyLanguage = (language, persist = true) => {
    const nextLanguage = language === 'de' ? 'de' : 'en';
    currentLanguage = nextLanguage;
    applying = true;
    document.documentElement.lang = nextLanguage;
    processSubtree(document.body, nextLanguage);

    const titleState = document.documentElement.dataset.advTitleEn || document.title;
    if (!document.documentElement.dataset.advTitleEn) document.documentElement.dataset.advTitleEn = titleState;
    document.title = nextLanguage === 'de' ? translatedValue(titleState, 'de') : titleState;

    updateSwitcher(nextLanguage);
    if (persist) saveLanguage(nextLanguage);
    requestAnimationFrame(() => { applying = false; });
  };

  const installStyles = () => {
    if (document.getElementById('advanteam-i18n-styles')) return;
    const style = document.createElement('style');
    style.id = 'advanteam-i18n-styles';
    style.textContent = `
      .adv-lang-switch{display:inline-flex;align-items:center;gap:2px;margin-left:4px;padding:3px;border:1px solid rgba(255,255,255,.24);border-radius:999px;background:rgba(255,255,255,.06);flex:0 0 auto}
      .adv-lang-switch button{min-width:34px;height:32px;padding:0 8px;border:0;border-radius:999px;color:rgba(255,255,255,.72);background:transparent;font:800 .72rem/1 Arial,sans-serif;letter-spacing:.04em;cursor:pointer;transition:background 160ms ease,color 160ms ease}
      .adv-lang-switch button.is-active{color:#071525;background:#fff}
      .adv-lang-switch button:focus-visible{outline:3px solid #8cc6b6;outline-offset:2px}
      @media(max-width:1080px){.adv-lang-switch{margin-left:auto;margin-right:2px}.site-header .nav-shell{gap:8px}}
      @media(max-width:420px){.adv-lang-switch{padding:2px}.adv-lang-switch button{min-width:30px;height:30px;padding:0 6px;font-size:.68rem}.site-header .brand{width:140px!important}}
    `;
    document.head.appendChild(style);
  };

  const installSwitcher = () => {
    if (document.querySelector('.adv-lang-switch')) return;
    const navShell = document.querySelector('.site-header .nav-shell, [data-header] .nav-shell');
    if (!navShell) return;
    const switcher = document.createElement('div');
    switcher.className = 'adv-lang-switch';
    switcher.setAttribute('role', 'group');
    switcher.setAttribute('aria-label', 'Language');
    switcher.setAttribute('data-no-translate', '');
    switcher.innerHTML = '<button type="button" data-adv-lang="en" aria-pressed="true">EN</button><button type="button" data-adv-lang="de" aria-pressed="false">DE</button>';
    const menuButton = navShell.querySelector('[data-menu-button]');
    navShell.insertBefore(switcher, menuButton || null);
    switcher.addEventListener('click', (event) => {
      const button = event.target.closest('[data-adv-lang]');
      if (!button) return;
      applyLanguage(button.dataset.advLang, true);
    });
  };

  installStyles();
  installSwitcher();
  applyLanguage(getSavedLanguage(), false);

  const observer = new MutationObserver((mutations) => {
    if (applying) return;
    applying = true;
    mutations.forEach((mutation) => {
      if (mutation.type === 'characterData') {
        processTextNode(mutation.target, currentLanguage, true);
      } else {
        mutation.addedNodes.forEach((node) => processSubtree(node, currentLanguage, true));
      }
    });
    requestAnimationFrame(() => { applying = false; });
  });
  observer.observe(document.body, { subtree: true, childList: true, characterData: true });
})();
