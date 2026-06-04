import type { Service, Location, GalleryImage, CommunityLink } from "./types";

export const CLIENT = {
  businessName: "Let's Get Trowled",
  tagline: "I care about the work being completed the best it can be done",
  phone: "0422 820 129",
  phoneRaw: "0422820129",
  email: "contact@letsgettrowled.com.au",
  suburb: "Seymour",
  state: "VIC",
  postcode: "3660",
  serviceArea: "Within 130 km of Seymour VIC",
  siteUrl: "https://letsgettrowled.com.au",
  facebook: null,
  instagram: null,
  gaId: "G-KSKCBF6L9F",
  formspreeId: process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "mwvjewly",
};

export const SERVICES: Service[] = [
  {
    name: "Domestic Plastering",
    slug: "domestic-plastering",
    keyword: "plastering services",
    metaTitle: "Domestic Plastering Seymour VIC | Plastering Services",
    metaDescription:
      "Professional domestic plastering services in Seymour & Goulburn Valley. Smooth, durable finishes for your home. Contact us for a free quote.",
    heroAlt: "Plasterer applying smooth finish to interior wall in Seymour home",
    introShort:
      "We provide high-quality domestic plastering services to homeowners throughout Seymour and the Goulburn Valley. From single rooms to full home plasters, our experienced team delivers flawless results every time.",
    introFull:
      "Our domestic plastering services are designed to meet the needs of Seymour homeowners at every stage — whether you're building new, renovating, or simply refreshing tired walls and ceilings. As a local plastering company, we take pride in delivering smooth, durable finishes that stand the test of time. Every job, no matter the size, receives the same level of care and professionalism from our experienced plastering contractors.",
    sections: [
      {
        heading: "Wall Plastering",
        body: "Our wall plastering service covers new plaster installations, skim coats, and full replasters for residential properties throughout Seymour and surrounds. We work with precision to ensure perfectly flat, paint-ready surfaces that provide a beautiful base for any interior finish.",
      },
      {
        heading: "Ceiling Plastering",
        body: "A smooth, even ceiling makes a significant difference to the feel of any room. Our plastering contractors install and finish ceilings to a high standard, whether it's a fresh plasterboard installation or a skim coat over an existing surface. We also repair sagging or damaged ceilings as part of our domestic plastering services.",
      },
      {
        heading: "New Homes and Renovations",
        body: "We work alongside homeowners and builders on both new builds and renovation projects across Seymour. Our team understands the demands of residential construction timelines and coordinates closely with other trades to ensure your plastering is completed on schedule and to specification.",
      },
      {
        heading: "Why Choose Our Plastering Services?",
        body: "With years of experience serving the Seymour and Goulburn Valley community, we bring local knowledge, reliable workmanship, and genuine care to every domestic plastering project. We're fully insured, provide clear and competitive quotes, and clean up thoroughly after every job.",
      },
    ],
    faqs: [
      {
        q: "How long does domestic plastering take?",
        a: "The duration depends on the size and scope of the project. A single room typically takes one to two days, while a full home plaster may take one to two weeks. We'll provide a realistic timeframe when we assess your job.",
      },
      {
        q: "How soon can I paint after plastering?",
        a: "New plaster needs adequate drying time before painting — generally a minimum of 3 to 4 weeks for full plaster, though this varies depending on ventilation, humidity, and the thickness of the coat applied. Your plasterer will advise you on the best approach for your specific job.",
      },
      {
        q: "Do I need to move furniture before the plasterer arrives?",
        a: "We recommend clearing the room of furniture and covering anything that can't be moved. Our team will protect flooring and fittings with drop sheets, but having the area clear before we arrive helps us get started promptly and minimises the risk of damage.",
      },
      {
        q: "Can you match the existing texture on my walls?",
        a: "Yes. Matching existing textures and finishes is something we do regularly, particularly on repair and renovation work. We assess the existing surface before commencing to ensure a seamless result.",
      },
      {
        q: "Do you offer free quotes for domestic plastering?",
        a: "Yes, we provide free, no-obligation quotes for all domestic plastering work throughout Seymour and the Goulburn Valley. Contact us to arrange a convenient time for an on-site assessment.",
      },
      {
        q: "Are your plasterers licensed and insured?",
        a: "Yes. Our team holds the appropriate trade licences and is fully insured for public liability. You can engage our plastering services with complete confidence.",
      },
      {
        q: "Can you plaster just one room or do you only take on large jobs?",
        a: "We take on jobs of all sizes. Whether it's a single room, a small repair, or a full home plaster, we bring the same standard of workmanship to every project.",
      },
    ],
    galleryDir: "images/domestic-plastering",
    galleryImages: [
      "image1.webp",
      "image2.webp",
      "image3.webp",
      "image4.webp",
      "image5.webp",
      "image6.webp",
      "image7.webp",
      "image8.webp",
      "image9.webp",
      "image10.webp",
    ],
  },
  {
    name: "Commercial Plastering",
    slug: "commercial-plastering",
    keyword: "plastering contractors",
    metaTitle: "Commercial Plastering Seymour VIC | Plastering Contractors",
    metaDescription:
      "Trusted commercial plastering contractors in Seymour & regional Victoria. Quality finishes for offices, retail & industrial projects. Get a quote today.",
    heroAlt:
      "Plastering contractors finishing walls in a commercial building in Seymour Victoria",
    introShort:
      "We are experienced plastering contractors serving builders, developers, and business owners across Seymour and regional Victoria. Our team delivers consistent, high-quality commercial plastering on time and within budget.",
    introFull:
      "Our commercial plastering services are trusted by construction professionals and business owners throughout the Goulburn Valley and wider regional Victoria. As dedicated plastering contractors, we understand the demands of commercial environments — tight schedules, multiple trades on site, and the expectation of a consistently high standard across large surface areas. We bring the organisation, experience, and workforce to meet those expectations on every project.",
    sections: [
      {
        heading: "Office and Retail Fitouts",
        body: "We provide plastering services for office and retail fitout projects throughout Seymour and surrounds. Our plastering contractors work closely with fitout builders and project managers to deliver smooth, paint-ready surfaces that meet commercial standards, on schedule and with minimal disruption to surrounding trades.",
      },
      {
        heading: "Industrial and Warehouse Plastering",
        body: "From warehouses to industrial facilities, our commercial plastering team has the experience and equipment to handle large-scale projects efficiently. We apply durable, high-quality finishes suited to the demands of industrial environments, ensuring longevity and a professional result.",
      },
      {
        heading: "Working with Builders and Developers",
        body: "We have established relationships with builders and developers across regional Victoria and understand how to operate effectively within a construction programme. Our plastering contractors communicate clearly, show up as scheduled, and deliver the standard expected on commercial builds without the need for supervision.",
      },
      {
        heading: "Commercial Plastering You Can Rely On",
        body: "Reliability is everything in commercial construction. We maintain consistent quality across all our plastering services, carry full public liability insurance, and provide detailed quotes that give project managers the clarity they need to plan effectively. Contact us to discuss your next commercial project.",
      },
    ],
    faqs: [
      {
        q: "Do you work directly with builders and head contractors?",
        a: "Yes. We regularly engage directly with builders, head contractors, and project managers as a plastering subcontractor on commercial builds throughout Seymour and regional Victoria.",
      },
      {
        q: "Can you accommodate tight construction timelines?",
        a: "Absolutely. Commercial construction schedules are demanding and we plan our work accordingly. We communicate proactively with your site manager and allocate the appropriate resources to meet your programme requirements.",
      },
      {
        q: "Are you insured for commercial plastering work?",
        a: "Yes. We hold comprehensive public liability insurance and all relevant trade registrations required for commercial plastering work in Victoria.",
      },
      {
        q: "What types of commercial properties do you work on?",
        a: "We work across a wide range of commercial properties including offices, retail spaces, medical centres, schools, warehouses, industrial facilities, and hospitality venues throughout the Seymour and Goulburn Valley region.",
      },
      {
        q: "Do you provide quotes for commercial plastering projects?",
        a: "Yes. We provide detailed, itemised quotes for commercial plastering projects of all sizes. Contact us with your plans or specifications and we'll arrange an assessment at a time that suits your programme.",
      },
      {
        q: "Can you work after hours or on weekends to minimise disruption?",
        a: "Where required, we can discuss after-hours or weekend scheduling to minimise disruption to an operating business. This is best discussed at the quoting stage so we can plan and price accordingly.",
      },
    ],
    galleryDir: "images/commercial-plastering",
    galleryImages: ["image1.webp", "image2.webp", "image3.webp", "image4.webp"],
  },
  {
    name: "Plastering for Renovations",
    slug: "plastering-renovations",
    keyword: "plastering services",
    metaTitle: "Plastering for Renovations Seymour VIC | Plastering Services",
    metaDescription:
      "Expert plastering services for renovations in Seymour & Goulburn Valley. Seamless finishes, matched textures & plaster repair. Request a free quote.",
    heroAlt:
      "Plasterer smoothing walls during a home renovation in Seymour Victoria",
    introShort:
      "Renovating your home or investment property? Our plastering services ensure your renovation is finished to the highest standard — with seamless surfaces, matched textures, and results that are ready to paint.",
    introFull:
      "Plastering is one of the most important finishing trades in any renovation, and getting it right requires experience with older properties and an eye for detail. Our team provides a comprehensive plastering service for residential and commercial renovations throughout Seymour and the Goulburn Valley. From matching existing finishes on heritage homes to full replasters on major renovations, we approach every project with the care and craftsmanship it deserves.",
    sections: [
      {
        heading: "Matching Existing Finishes",
        body: "One of the most common challenges in renovation plastering is achieving a seamless match between new and existing surfaces. Our experienced plasterers assess your existing walls and ceilings before commencing work, selecting the right techniques and materials to blend new plaster invisibly with the surrounding finish.",
      },
      {
        heading: "Full Replastering",
        body: "If your walls or ceilings are beyond patching, a full replaster may be the most cost-effective and durable solution. We carry out full replasters on renovated rooms and entire properties throughout Seymour, stripping back old surfaces and applying fresh plaster for a completely renewed result.",
      },
      {
        heading: "Heritage and Period Properties",
        body: "Older homes present unique plastering challenges — from lime plaster substrates to ornate decorative features that need to be preserved. As plastering contractors with experience in heritage properties, we apply appropriate techniques and materials to maintain the character and integrity of your period home throughout the renovation.",
      },
      {
        heading: "Coordinating with Your Renovation Timeline",
        body: "We understand that renovation projects involve multiple trades and tight timelines. Our team works cooperatively with your builder or project manager to ensure plastering is completed at the right stage of the renovation without causing delays to other trades. We'll provide a clear timeframe and stick to it.",
      },
    ],
    faqs: [
      {
        q: "Can you match the texture of my existing plaster?",
        a: "Yes. Texture matching is a core part of our renovation plastering service. We assess your existing surfaces before commencing and use the appropriate techniques to achieve a finish that blends seamlessly with the surrounding plaster.",
      },
      {
        q: "Do I need to fully replaster or can damaged areas be patched?",
        a: "This depends on the extent and nature of the damage. Minor cracks, holes, and isolated damage can often be repaired with targeted plaster patching. Where damage is extensive or the existing plaster is structurally compromised, a full replaster may be the better long-term solution. We'll assess your surfaces and provide an honest recommendation.",
      },
      {
        q: "Do you work on heritage-listed properties?",
        a: "Yes. We have experience working on older and heritage properties in the Seymour region and apply appropriate materials and techniques to preserve the character of the building.",
      },
      {
        q: "Can you plaster around existing fixtures and fittings?",
        a: "Yes. We work carefully around existing fixtures, cornices, skirtings, and fittings, protecting them throughout the process and finishing precisely to their edges.",
      },
      {
        q: "How far in advance do I need to book renovation plastering?",
        a: "We recommend contacting us as early as possible in your renovation planning — ideally before trades are scheduled. This allows us to assess the project, provide a quote, and lock in a start date that works within your renovation programme.",
      },
      {
        q: "Will the plastering dust and mess be contained?",
        a: "We take reasonable steps to contain dust and mess, including sealing doorways and laying drop sheets in work areas. Plastering does generate fine dust, so we recommend removing or covering valuables in adjacent areas during the work.",
      },
    ],
    galleryDir: "images/plastering-renovations",
    galleryImages: [
      "image1.webp",
      "image2.webp",
      "image3.webp",
      "image4.webp",
      "image5.webp",
      "image6.webp",
      "image7.webp",
    ],
  },
  {
    name: "Plastering for Extensions",
    slug: "plastering-extensions",
    keyword: "plastering contractor",
    metaTitle: "Plastering for Extensions Seymour VIC | Plastering Contractor",
    metaDescription:
      "Professional plastering contractor for home & commercial extensions in Seymour VIC. Seamless finishes that integrate with your existing structure. Get a quote.",
    heroAlt:
      "Plastering contractor installing plasterboard in a home extension in Seymour Victoria",
    introShort:
      "Building an extension is a significant investment — make sure the finish reflects that. Our plastering contractor team delivers seamless, high-quality plastering for home and commercial extensions throughout Seymour and regional Victoria.",
    introFull:
      "A well-built extension deserves plastering that integrates perfectly with the existing structure and finishes to the same standard as the rest of your home or building. As experienced plastering contractors, we work closely with your builder throughout the extension process to ensure walls and ceilings are plastered to specification, on schedule, and with a finish that makes the new space feel like it was always there.",
    sections: [
      {
        heading: "Residential Extensions",
        body: "Whether you're adding a bedroom, extending your living area, or enclosing an outdoor space, our plastering contractor team will deliver a smooth, professional finish throughout your new extension. We match existing interior finishes wherever possible to ensure a cohesive result between old and new areas of your home.",
      },
      {
        heading: "Commercial Extensions",
        body: "Commercial extensions require plastering that meets building standards and suits the functional demands of the space. Our plastering services for commercial extensions cover offices, retail premises, medical suites, and more, with the capacity and experience to work efficiently within a commercial construction programme.",
      },
      {
        heading: "Working Alongside Your Builder",
        body: "We operate as a reliable plastering subcontractor and understand how to integrate seamlessly within your builder's programme. Our team communicates clearly with site supervisors, arrives on schedule, and completes plastering to the stage required — so other trades aren't held up waiting on us.",
      },
      {
        heading: "Matching Your Existing Interior",
        body: "One of the most important details in an extension is ensuring the new plastering integrates visually with the existing interior. We assess your existing walls and ceilings before commencing and apply the appropriate finish so the transition between old and new is as seamless as possible.",
      },
    ],
    faqs: [
      {
        q: "Can you match the plastering in my existing home to the new extension?",
        a: "Yes. Matching finishes between existing and new areas is a priority on extension work. We assess your current interior finish and apply the appropriate techniques to achieve a cohesive result throughout the property.",
      },
      {
        q: "Do you work directly with builders on extension projects?",
        a: "Yes. We regularly work as a plastering subcontractor on residential and commercial extension projects throughout Seymour and regional Victoria. We're experienced in coordinating with builders and site managers within a construction programme.",
      },
      {
        q: "What is typically involved in plastering an extension?",
        a: "Extension plastering typically involves fixing and finishing plasterboard to internal walls and ceilings, applying set coats for a smooth finish, installing cornices, and finishing around windows, doors, and other openings. The specific scope depends on your extension design and specification.",
      },
      {
        q: "How long does plastering an extension take?",
        a: "Timeframes vary depending on the size of the extension and the finishes specified. A modest single-room extension typically takes two to four days, while larger or more complex extensions may require a week or more. We'll provide a clear timeframe at the quoting stage.",
      },
      {
        q: "When in the construction process does plastering take place?",
        a: "Plastering typically occurs after framing, insulation, and rough-in trades (electrical, plumbing) are complete and inspected. We coordinate with your builder to ensure we're on site at the right time within the programme.",
      },
      {
        q: "Do you provide a free quote for extension plastering?",
        a: "Yes. We provide free, no-obligation quotes for plastering on extensions of all sizes throughout Seymour and the Goulburn Valley. Contact us to arrange a site visit.",
      },
    ],
    galleryDir: "images/plastering-extensions",
    galleryImages: [
      "image1.webp",
      "image2.webp",
      "image3.webp",
      "image4.webp",
      "image5.webp",
      "image6.webp",
      "image7.webp",
    ],
  },
  {
    name: "Plastering for New Builds",
    slug: "plastering-new-builds",
    keyword: "plastering contractor",
    metaTitle: "Plastering for New Builds Seymour VIC | Plastering Contractor",
    metaDescription:
      "Reliable plastering contractor for new residential & commercial builds in Seymour VIC. Quality finishes delivered on schedule. Request a free quote today.",
    heroAlt:
      "Plastering contractor finishing plasterboard on a new residential build in Seymour Victoria",
    introShort:
      "We partner with builders and developers across Seymour and Victoria to deliver premium plastering services on new builds — completing every home and commercial project to the highest standard, on time.",
    introFull:
      "New build plastering requires precision, reliability, and the capacity to meet construction programme milestones without compromise. Our plastering contractor team works with residential and commercial builders throughout the Seymour and Goulburn Valley region, providing a complete plastering service from plasterboard installation through to final set and cornice. We're committed to quality that holds up to scrutiny at practical completion and beyond.",
    sections: [
      {
        heading: "New Residential Builds",
        body: "We provide full plastering services for new residential builds across Seymour and surrounds, working with volume builders, project builders, and custom home builders alike. Our team handles plasterboard supply and fix, setting, and finishing to produce smooth, paint-ready surfaces that meet the standards expected in new home construction.",
      },
      {
        heading: "New Commercial Builds",
        body: "Commercial new builds demand consistent quality across large surface areas and require a plastering contractor who can operate effectively within a busy site programme. We have the experience and capacity to manage commercial plastering scopes efficiently, maintaining quality throughout while meeting the demands of your construction schedule.",
      },
      {
        heading: "Plasterboard Supply and Fix",
        body: "As part of our new build plastering services, we can manage the supply and installation of plasterboard, removing a coordination step for your builder and ensuring material quality is maintained from delivery to installation. We work with reputable plasterboard suppliers and carry appropriate product for residential and commercial applications.",
      },
      {
        heading: "A Plastering Contractor Builders Trust",
        body: "Builders choose us because we show up, communicate clearly, and deliver the standard they need to present their clients with a finished home or building they're proud of. Our plastering contractor team understands construction and operates as a professional, cooperative trade on every site we work on. Contact us to discuss your new build project.",
      },
    ],
    faqs: [
      {
        q: "Do you work with volume builders as well as custom home builders?",
        a: "Yes. We work with a range of builder types including volume builders, project builders, and custom home builders across Seymour and regional Victoria. We adapt our service to suit the requirements of each builder's programme and standards.",
      },
      {
        q: "Can you supply plasterboard as well as install it?",
        a: "Yes. We offer a supply and install service for plasterboard on new builds, which simplifies coordination for your builder and ensures material quality is maintained throughout. See our Supply and Install page for more detail.",
      },
      {
        q: "What plastering stages are involved in a new build?",
        a: "New build plastering typically involves two main stages: the fix (installing plasterboard to framed walls and ceilings) and the finishing (applying set coats, sanding, and installing cornices to produce a paint-ready surface). The specifics depend on the design and specification.",
      },
      {
        q: "How do you handle defects identified at practical completion?",
        a: "We take defects seriously and address them promptly. Our team carries out a thorough inspection of our work before notifying the builder of completion, and we return to rectify any items identified at practical completion without delay.",
      },
      {
        q: "Are you available for ongoing work with builders across multiple projects?",
        a: "Yes. We welcome ongoing relationships with builders who have a regular pipeline of work in the Seymour and Goulburn Valley region. Consistent subcontractor relationships benefit both parties and we're happy to discuss how we can support your building programme long term.",
      },
      {
        q: "Do you carry public liability insurance for new build work?",
        a: "Yes. We hold comprehensive public liability insurance and all relevant trade registrations required for plastering on new residential and commercial builds in Victoria.",
      },
    ],
    galleryDir: "images/plastering-new-builds",
    galleryImages: [
      "image1.webp",
      "image2.webp",
      "image3.webp",
      "image4.webp",
      "image5.webp",
      "image6.webp",
      "image7.webp",
    ],
  },
  {
    name: "Fibrous Plastering",
    slug: "fibrous-plastering",
    keyword: "plastering services",
    metaTitle: "Fibrous Plastering Seymour VIC | Specialist Plastering Services",
    metaDescription:
      "Specialist fibrous plastering services in Seymour & Goulburn Valley. Heritage restoration, decorative features & custom fibrous plaster elements. Get a quote.",
    heroAlt:
      "Detailed fibrous plaster cornice and ceiling rose in a period home in Seymour Victoria",
    introShort:
      "Our fibrous plastering service combines traditional craftsmanship with lasting quality. From heritage restoration to custom decorative features, our skilled team manufactures and installs fibrous plaster elements that bring character and elegance to any space.",
    introFull:
      "Fibrous plastering is a specialist trade that requires a depth of knowledge and skill beyond standard plasterboard work. Our team has experience in the manufacture and installation of fibrous plaster elements for period homes, heritage restorations, and prestige residential projects throughout Seymour and regional Victoria. Whether you need to reproduce an original cornice profile, restore damaged ornamental plaster, or introduce a statement decorative feature, our plastering services deliver results that honour the craft.",
    sections: [
      {
        heading: "Heritage Restoration",
        body: "Restoring original plasterwork in a heritage property requires both technical skill and sensitivity to the building's character. Our fibrous plastering team works with the existing profiles and details in your property, reproducing or repairing original elements to match as closely as possible to the period features they complement.",
      },
      {
        heading: "Custom Fibrous Plaster Elements",
        body: "We manufacture and install custom fibrous plaster elements for prestige residential projects, including cornices, ceiling roses, archways, columns, and decorative panels. Custom fibrous plaster can be produced to your architect's or designer's specifications, or we can assist you in selecting profiles that suit your interior.",
      },
      {
        heading: "Decorative Cornice and Ceiling Work",
        body: "Fibrous plaster cornices and ceiling roses are among the most popular decorative plastering features requested for both period restorations and new prestige builds. Our team installs these features with precision and care, ensuring mitres are tight, joins are seamless, and the finished result is worthy of the room it adorns.",
      },
      {
        heading: "Why Choose Specialist Fibrous Plastering Services?",
        body: "Fibrous plastering is a discipline that rewards experience. Our team brings genuine expertise to this work and takes pride in the quality and authenticity of every fibrous plaster installation. If you're considering decorative or heritage plastering for your property in the Seymour region, we'd welcome the opportunity to discuss your project.",
      },
    ],
    faqs: [
      {
        q: "What is fibrous plastering?",
        a: "Fibrous plastering involves the manufacture and installation of plaster elements reinforced with hessian or fibreglass, rather than applied directly to a wall or ceiling substrate. It is used primarily for decorative features such as cornices, ceiling roses, columns, and ornamental panels, particularly in period homes and prestige builds.",
      },
      {
        q: "Can you reproduce an existing cornice profile that has been damaged?",
        a: "Yes. We can assess your existing cornice profile and reproduce it to match, ensuring that repairs or new sections are consistent with the original detail. This is a common requirement on heritage and period property restoration work.",
      },
      {
        q: "Is fibrous plastering only suitable for older homes?",
        a: "Not at all. While fibrous plastering is strongly associated with heritage and period properties, it is also used in prestige new builds and renovations where a high level of decorative detail is desired. Custom profiles and features can be designed to suit contemporary interiors as well as traditional ones.",
      },
      {
        q: "How are fibrous plaster elements manufactured?",
        a: "Fibrous plaster elements are cast in moulds using a plaster and reinforcing material mixture, typically incorporating hessian or fibreglass. The elements are manufactured off-site and then installed on location. This method allows for consistent reproduction of profiles and the creation of complex decorative shapes.",
      },
      {
        q: "Can you install fibrous plaster elements supplied by someone else?",
        a: "Yes. If you have sourced fibrous plaster elements from a supplier or manufacturer, we can provide a professional installation service. Contact us to discuss the specifics of your project.",
      },
      {
        q: "Do you offer fibrous plastering services for commercial properties?",
        a: "Yes. Fibrous plastering is used in a range of commercial contexts including hospitality venues, heritage-listed commercial buildings, and prestige fitouts. We welcome enquiries for commercial fibrous plastering work throughout Seymour and regional Victoria.",
      },
    ],
    galleryDir: "images/fibrous-plastering",
    galleryImages: ["image1.webp", "image2.webp", "image3.webp"],
  },
  {
    name: "Supply and Install of Plaster",
    slug: "plaster-supply-and-install",
    keyword: "plastering supplies",
    metaTitle: "Plaster Supply and Install Seymour VIC | Plastering Supplies",
    metaDescription:
      "Plastering supplies and professional installation in Seymour & Goulburn Valley. Plasterboard supply and fix for residential & commercial projects. Get a quote.",
    heroAlt:
      "Stacked plasterboard sheets ready for installation on a construction site in Seymour Victoria",
    introShort:
      "We supply and install a comprehensive range of plastering supplies and plasterboard products for residential and commercial projects throughout Seymour and the Goulburn Valley — keeping your project on track from materials through to finished surface.",
    introFull:
      "Managing plastering supplies and installation separately adds unnecessary complexity to any building project. As a plasterboard contractor offering both supply and installation, we streamline the process for builders, developers, and homeowners throughout Seymour and regional Victoria. We source quality plasterboard and plastering supplies from reputable manufacturers and install them to a high standard, giving you one point of contact and one standard of quality from start to finish.",
    sections: [
      {
        heading: "Plasterboard Supply and Fix",
        body: "We supply and install plasterboard for walls and ceilings across a wide range of residential and commercial applications. By managing both the plastering supplies and the installation, we maintain quality control throughout and remove the risk of product mismatches or delays caused by separate supply chains.",
      },
      {
        heading: "Specialist Plasterboard Products",
        body: "Different applications require different plasterboard products. We can supply and install a range of specialist plasterboard types including moisture-resistant, fire-rated, and acoustic products suited to bathrooms, commercial kitchens, stairwells, and other applications where standard plasterboard is not appropriate.",
      },
      {
        heading: "For Builders and Developers",
        body: "As a plasterboard contractor serving the construction industry throughout Seymour and regional Victoria, we understand the importance of having plastering supplies on site when they're needed. We coordinate deliveries and installation to align with your construction programme, minimising delays and keeping the project moving.",
      },
      {
        heading: "Simplify Your Project with One Contractor",
        body: "Combining plastering supplies and installation under one contractor reduces the administrative burden, eliminates coordination gaps, and gives you a single point of accountability for the quality of both materials and workmanship. Contact us to discuss your supply and install requirements.",
      },
    ],
    faqs: [
      {
        q: "What plasterboard products do you supply?",
        a: "We supply a range of standard and specialist plasterboard products including standard, moisture-resistant, fire-rated, and acoustic plasterboard. We'll recommend the appropriate product for your specific application at the quoting stage.",
      },
      {
        q: "Is it cheaper to supply my own plasterboard and just hire you for installation?",
        a: "Not necessarily. As a plasterboard contractor purchasing materials regularly, we often have access to competitive pricing on plastering supplies. We recommend requesting a supply and install quote from us before purchasing materials separately.",
      },
      {
        q: "Do you supply plastering supplies for trade customers to install themselves?",
        a: "Our primary service is supply and installation rather than supply only. If you have specific supply requirements, contact us to discuss your needs and we'll advise on the best approach.",
      },
      {
        q: "What thickness of plasterboard do you install?",
        a: "The most common thicknesses are 10mm for ceilings and 13mm for walls, though thicker boards are used in specific applications such as fire-rated walls or certain commercial requirements. We'll specify the appropriate thickness for your project.",
      },
      {
        q: "Can you supply and install plasterboard for a single room or small area?",
        a: "Yes. We take on supply and install jobs of all sizes, from single rooms to full residential and commercial buildings. Contact us for a quote on your specific requirements.",
      },
      {
        q: "Do you carry liability insurance for supply and install work?",
        a: "Yes. We hold comprehensive public liability insurance covering both the supply and installation components of our work throughout Seymour and regional Victoria.",
      },
    ],
    galleryDir: "images/plaster-supply-and-install",
    galleryImages: ["image1.webp", "image2.webp", "image3.webp"],
  },
  {
    name: "Metal Battens",
    slug: "metal-battens",
    keyword: "plasterboard contractor",
    metaTitle: "Metal Batten Installation Seymour VIC | Plasterboard Contractor",
    metaDescription:
      "Professional metal batten installation in Seymour & Goulburn Valley. Steel furring channel systems for walls & ceilings. Trusted plasterboard contractor.",
    heroAlt:
      "Metal furring channel battens installed on ceiling ready for plasterboard in Seymour Victoria",
    introShort:
      "Metal battens provide a superior, straight substrate for plasterboard and ceiling linings. Our plasterboard contractor team supplies and installs metal batten systems for residential and commercial projects throughout Seymour and regional Victoria.",
    introFull:
      "Metal batten systems — also known as steel furring channels — are widely used as an alternative to timber framing in both new builds and renovation projects. They offer superior straightness, resistance to moisture and warping, and a consistent substrate for plasterboard installation. As an experienced plasterboard contractor, we supply and install metal batten systems to the appropriate Australian Standards for walls and ceilings throughout the Seymour and Goulburn Valley region.",
    sections: [
      {
        heading: "Ceiling Batten Systems",
        body: "Ceiling battens provide a level, stable substrate for plasterboard ceiling linings and are particularly useful in applications where timber framing is prone to movement or where precise ceiling heights are required. We install ceiling batten systems to Australian Standards, ensuring your plasterboard has a solid and consistent base throughout.",
      },
      {
        heading: "Wall Batten Systems",
        body: "Metal battens are frequently used on external masonry walls to create a cavity and provide a straight, fixed substrate for interior plasterboard linings. Our team installs wall batten systems in both residential and commercial applications, ensuring a plumb and true surface ready for plasterboard and finishing.",
      },
      {
        heading: "New Builds and Renovations",
        body: "Metal batten systems are equally suited to new construction and renovation projects. In renovations, they provide an effective way to re-line walls and ceilings without the need for extensive preparation of the existing substrate. We assess each project and recommend the appropriate batten specification for the application.",
      },
      {
        heading: "Installed to Australian Standards",
        body: "All metal batten installations are carried out in accordance with relevant Australian Standards and manufacturer specifications. As a professional plasterboard contractor, we ensure every batten system we install provides the performance and durability your project requires.",
      },
    ],
    faqs: [
      {
        q: "What are metal battens used for in plastering?",
        a: "Metal battens, or steel furring channels, are used to create a straight, stable substrate for plasterboard walls and ceiling linings. They are particularly useful in applications where timber framing is not appropriate or where a more dimensionally consistent framing system is required.",
      },
      {
        q: "Are metal battens better than timber for plasterboard?",
        a: "Metal battens offer several advantages over timber including resistance to moisture and warping, consistent dimensions, and greater straightness. They are the preferred option in many commercial applications and are increasingly common in residential construction as well.",
      },
      {
        q: "Can metal battens be used to re-line an existing wall or ceiling?",
        a: "Yes. Metal battens are a practical solution for re-lining existing walls and ceilings, particularly where the existing substrate is uneven or damaged. They create a fresh, true surface without the need to remove the original lining in many cases.",
      },
      {
        q: "Do metal battens require a specific type of plasterboard?",
        a: "Standard plasterboard products are compatible with metal batten framing systems. In specialist applications such as fire-rated or acoustic walls, specific plasterboard products and batten spacings are required — we'll specify the appropriate combination for your project.",
      },
      {
        q: "Do you supply the metal battens as well as install them?",
        a: "Yes. We can supply and install metal batten systems as part of a complete plasterboard contractor service, or install battens that you have supplied. Contact us to discuss your project requirements.",
      },
      {
        q: "Are metal batten installations covered by your public liability insurance?",
        a: "Yes. All work carried out by our team, including metal batten installation, is covered by our comprehensive public liability insurance.",
      },
    ],
    galleryDir: "images/metal-battens",
    galleryImages: ["image1.webp", "image2.webp", "image3.webp", "image4.webp"],
  },
  {
    name: "Decorative Cornices",
    slug: "decorative-cornices",
    keyword: "plastering services",
    metaTitle: "Decorative Cornices Seymour VIC | Plastering Services",
    metaDescription:
      "Supply and install of decorative cornices in Seymour & Goulburn Valley. Plaster cornice installation for period homes & new builds. Request a free quote.",
    heroAlt:
      "Decorative plaster cornice installed in a residential interior in Seymour Victoria",
    introShort:
      "Add an elegant finishing touch to any room with our decorative cornice installation service. We supply and install a wide range of plaster cornice profiles throughout Seymour and the Goulburn Valley — with precise mitring and seamless joins for a truly professional result.",
    introFull:
      "A well-chosen cornice can transform the feel of a room, framing walls and ceilings with architectural detail that adds refinement to both contemporary and period-style interiors. Our plastering services include the supply and installation of decorative cornices for residential and commercial properties throughout Seymour and regional Victoria. Whether you're matching an existing period profile, upgrading to a more substantial cornice, or specifying a contemporary cove detail, our team brings the skill and care to execute it perfectly.",
    sections: [
      {
        heading: "Period and Heritage Cornice Profiles",
        body: "For period homes and heritage properties, we supply and install cornice profiles that complement the architectural character of the building. We can source traditional profiles in a range of sizes and details, and our team has the experience to install them with tight mitres and invisible joins — a standard that makes all the difference in a well-appointed room.",
      },
      {
        heading: "Contemporary Cove Cornices",
        body: "For modern interiors, a clean cove cornice provides a subtle but effective transition between wall and ceiling. We supply and install contemporary cove profiles in a range of sizes to suit the proportions of your room, with a smooth, seamless finish that is ready for painting.",
      },
      {
        heading: "Cornice Repair and Replacement",
        body: "Damaged or missing sections of cornice are a common issue in older homes and can be difficult to repair without the right skills and materials. We repair and replace cornice sections to match existing profiles, restoring the original look of your interior as part of our broader plastering services.",
      },
      {
        heading: "Supply and Install — One Point of Contact",
        body: "By managing both supply and installation, we ensure the cornice profile you receive is the one you selected and that it is installed to a standard that does it justice. Contact us to discuss your cornice requirements throughout Seymour and the Goulburn Valley.",
      },
    ],
    faqs: [
      {
        q: "What cornice profiles do you supply and install?",
        a: "We supply and install a wide range of plaster cornice profiles including traditional period styles, decorative ogee profiles, and contemporary cove cornices. We can assist you in selecting a profile that suits your interior at the quoting stage.",
      },
      {
        q: "Can you repair a section of damaged cornice to match the existing profile?",
        a: "Yes. Cornice repair and section replacement is a common part of our plastering services. We assess your existing cornice profile and source or manufacture a matching section so the repair is as seamless as possible.",
      },
      {
        q: "How do you achieve a neat mitre at internal and external corners?",
        a: "Mitre cuts on cornice require precision and experience. Our team uses appropriate tools and techniques to achieve tight, clean mitres at corners, and we fill and finish joins carefully to produce a seamless result.",
      },
      {
        q: "Can cornice be installed on a textured ceiling?",
        a: "In most cases, yes. The method and adhesive used depend on the nature of the existing ceiling surface. We assess your ceiling before commencing and recommend the appropriate installation approach.",
      },
      {
        q: "Do you install cornice in commercial properties as well as residential?",
        a: "Yes. We install decorative and standard cornice profiles in commercial settings including offices, retail spaces, and hospitality venues throughout Seymour and regional Victoria.",
      },
      {
        q: "Can I choose my own cornice profile and have you install it?",
        a: "Yes. If you have already selected and sourced a cornice profile, we are happy to provide an installation-only service. Contact us with the product details and we'll provide a quote.",
      },
    ],
    galleryDir: "images/decorative-cornices",
    galleryImages: ["image1.webp", "image2.webp", "image3.webp"],
  },
  {
    name: "Ceiling Roses",
    slug: "ceiling-roses",
    keyword: "plastering services",
    metaTitle: "Ceiling Rose Installation Seymour VIC | Plastering Services",
    metaDescription:
      "Professional ceiling rose installation in Seymour & Goulburn Valley. Plaster ceiling roses for period homes, renovations & new builds. Request a quote.",
    heroAlt:
      "Ornate plaster ceiling rose installed in a period home living room in Seymour Victoria",
    introShort:
      "Our ceiling rose installation service adds a timeless architectural feature to any room. We install plaster ceiling roses with precision and care for homes and businesses throughout Seymour and the Goulburn Valley.",
    introFull:
      "A ceiling rose is one of the most impactful decorative details you can add to a room — drawing the eye upward and lending a sense of craftsmanship and tradition to the space. Our plastering services include the supply and professional installation of plaster ceiling roses in a range of styles and sizes, suited to period restorations, prestige renovations, and new builds throughout Seymour and regional Victoria. We install every ceiling rose with care, ensuring it is level, securely fixed, and finished seamlessly to the surrounding ceiling.",
    sections: [
      {
        heading: "Period and Heritage Restorations",
        body: "Ceiling roses are a defining feature of Victorian and Edwardian-era homes, and restoring or replacing an original rose is one of the most rewarding aspects of heritage renovation work. We source period-appropriate ceiling rose profiles and install them with sensitivity to the character of the building, working alongside our fibrous plastering and decorative cornice services to restore the complete ceiling detail.",
      },
      {
        heading: "New Installations for Contemporary and Prestige Homes",
        body: "Ceiling roses are not limited to period homes. A well-chosen ceiling rose adds distinction to a dining room, entrance hall, or master bedroom in any style of home. We supply and install ceiling roses suited to contemporary and prestige new builds and renovations throughout Seymour, helping you create an interior that feels genuinely considered.",
      },
      {
        heading: "Ceiling Rose Repair and Replacement",
        body: "Damaged or missing ceiling roses are a common finding in older homes. We repair cracked or broken ceiling roses and replace missing ones with a matching profile wherever possible, restoring the original character of the room as part of our comprehensive plastering services.",
      },
      {
        heading: "Installation You Can Trust",
        body: "Ceiling rose installation requires careful preparation of the ceiling surface, correct adhesion and fixing, and precise finishing of the join between the rose and the surrounding plaster. Our team carries out every installation to a standard that ensures the rose is secure, level, and finished to a result you'll be proud of for years to come.",
      },
    ],
    faqs: [
      {
        q: "What sizes of ceiling rose do you supply and install?",
        a: "We supply and install plaster ceiling roses in a range of sizes to suit different room proportions, from modest 300mm profiles through to large ornate roses suited to grand entrances and formal rooms. We can advise on an appropriate size for your room at the quoting stage.",
      },
      {
        q: "Can a ceiling rose be installed over an existing light fitting?",
        a: "Yes. Ceiling roses are typically installed around a central light fitting. We install the rose carefully to accommodate the existing or planned light fitting, ensuring a clean and secure result.",
      },
      {
        q: "How is a plaster ceiling rose fixed to the ceiling?",
        a: "Plaster ceiling roses are fixed using a combination of appropriate adhesive and mechanical fixings where required. The method depends on the size and weight of the rose and the nature of the ceiling substrate.",
      },
      {
        q: "Can you match a ceiling rose to an existing one in another room?",
        a: "Yes. Where an original ceiling rose profile can be identified, we can source a matching or closely matching profile to ensure consistency throughout the property.",
      },
      {
        q: "Do you repair damaged ceiling roses or only install new ones?",
        a: "We offer both repair and new installation services. Minor chips and cracks can often be repaired in situ, while more significantly damaged or missing roses may need to be replaced. We'll assess your existing rose and recommend the most appropriate approach.",
      },
      {
        q: "Can a ceiling rose be painted to match the ceiling?",
        a: "Yes. Plaster ceiling roses are typically painted to match or complement the ceiling colour. Once installed and dried, they accept standard interior paint in the same way as the surrounding plaster ceiling.",
      },
    ],
    galleryDir: "images/ceiling-roses",
    galleryImages: ["image1.webp", "image2.webp", "image3.webp", "image4.webp"],
  },
  {
    name: "Metal Stud Walls",
    slug: "metal-stud-walls",
    keyword: "plasterboard contractor",
    metaTitle: "Metal Stud Walls Seymour VIC | Plasterboard Contractor",
    metaDescription:
      "Professional metal stud wall installation in Seymour & Goulburn Valley. Partition walls for residential & commercial projects. Trusted plasterboard contractor.",
    heroAlt:
      "Metal stud wall framing under construction in a commercial fitout in Seymour Victoria",
    introShort:
      "Metal stud walls offer a versatile, cost-effective solution for partitioning residential and commercial spaces. Our plasterboard contractor team designs and constructs metal stud wall systems to your exact specifications throughout Seymour and regional Victoria.",
    introFull:
      "Metal stud wall framing is the industry-standard method for constructing internal partition walls in commercial fitouts and is increasingly common in residential applications. As an experienced plasterboard contractor, we design and build metal stud wall systems that are plumb, straight, and ready for plasterboard and finishing. Whether you need a single partition wall or a complete internal layout, our team provides a professional, efficient service throughout Seymour and the Goulburn Valley.",
    sections: [
      {
        heading: "Commercial Partition Walls",
        body: "Metal stud partition walls are the preferred framing method for commercial fitouts, office partitioning, and retail fit-throughs throughout the Seymour region. Our plasterboard contractor team constructs commercial partition walls that meet building code requirements and are ready to accommodate services, glazing, and door frames as required.",
      },
      {
        heading: "Residential Partition Walls",
        body: "Metal stud framing is an excellent option for internal partition walls in residential properties, particularly in renovations and extensions where dimensional consistency and resistance to moisture are important. We install residential partition walls throughout Seymour and surrounds, providing a straight and stable substrate for plasterboard and finishing.",
      },
      {
        heading: "Fire-Rated and Acoustic Wall Systems",
        body: "Where building regulations or acoustic performance requirements demand it, we construct fire-rated and acoustic metal stud wall systems using the appropriate stud profiles, insulation, and plasterboard products. We are familiar with the relevant Australian Standards and can advise on the correct system specification for your application.",
      },
      {
        heading: "From Framing to Finished Wall",
        body: "As a complete plasterboard contractor service, we can take your metal stud walls from framing through to finished, paint-ready surfaces — including plasterboard installation, setting, and finishing. This reduces coordination complexity and gives you a single point of responsibility for the quality of the completed wall.",
      },
    ],
    faqs: [
      {
        q: "What are metal stud walls used for?",
        a: "Metal stud walls are used to construct internal partition walls in both residential and commercial buildings. They are particularly common in commercial fitouts and office partitioning but are also widely used in residential renovations and new builds.",
      },
      {
        q: "Are metal stud walls as strong as timber framed walls?",
        a: "Metal stud walls provide structural integrity appropriate for internal non-loadbearing partition walls. They are not typically used for loadbearing applications. For partition wall purposes, they are dimensionally consistent, resistant to moisture and warping, and meet all relevant building requirements.",
      },
      {
        q: "Can metal stud walls accommodate electrical and plumbing services?",
        a: "Yes. Metal stud walls are designed to accommodate services. Knock-outs in the stud profiles allow cables and small pipes to pass through the wall cavity. Coordination with electrical and plumbing trades is standard practice on any project involving metal stud framing.",
      },
      {
        q: "Do you install plasterboard on the metal stud walls you construct?",
        a: "Yes. As a complete plasterboard contractor service, we can take metal stud walls from framing through to finished, paint-ready surfaces. This is the most efficient approach and ensures consistency between the framing and lining.",
      },
      {
        q: "Can you construct fire-rated partition walls?",
        a: "Yes. We construct fire-rated metal stud wall systems using appropriate stud profiles, plasterboard products, and construction methods as required by the building specification and relevant Australian Standards.",
      },
      {
        q: "Do you work on commercial fitout projects as a subcontractor?",
        a: "Yes. We regularly work as a plasterboard contractor on commercial fitout projects throughout Seymour and regional Victoria, providing metal stud framing and plasterboard services to fitout builders and head contractors.",
      },
    ],
    galleryDir: "images/metal-stud-walls",
    galleryImages: ["image1.webp", "image2.webp", "image3.webp"],
  },
  {
    name: "Suspended Ceilings",
    slug: "suspended-ceilings",
    keyword: "plastering contractor",
    metaTitle: "Suspended Ceilings Seymour VIC | Plastering Contractor",
    metaDescription:
      "Professional suspended ceiling installation in Seymour & Goulburn Valley. Drop ceiling systems for commercial & residential projects. Get a free quote today.",
    heroAlt:
      "Suspended grid ceiling system being installed in a commercial building in Seymour Victoria",
    introShort:
      "We design and install suspended ceiling systems for commercial and residential projects throughout Seymour and the Goulburn Valley. Our plastering contractor team delivers drop ceiling installations that combine practicality, acoustic performance, and a clean, professional finish.",
    introFull:
      "Suspended ceilings — also known as drop ceilings or grid ceilings — are widely used in commercial environments to conceal services, improve acoustic performance, and create a consistent, professional ceiling finish across large areas. As an experienced plastering contractor, we design and install suspended ceiling systems for a wide range of applications throughout Seymour and regional Victoria, from office fitouts and retail spaces to healthcare facilities and educational buildings.",
    sections: [
      {
        heading: "Commercial Suspended Ceilings",
        body: "Commercial environments benefit significantly from suspended ceiling systems, which allow services such as electrical conduits, ductwork, and sprinkler systems to be routed above the ceiling line while remaining accessible for maintenance. Our plastering contractor team installs commercial suspended ceilings efficiently and to the standard required for professional commercial fitouts.",
      },
      {
        heading: "Acoustic Ceiling Systems",
        body: "In environments where noise control is important — offices, meeting rooms, healthcare facilities, and educational buildings — acoustic suspended ceiling tiles offer a practical and effective solution. We supply and install acoustic ceiling systems that meet the acoustic performance requirements of your space, improving comfort and productivity.",
      },
      {
        heading: "Residential Suspended Ceilings",
        body: "Suspended ceilings can be a practical solution in residential applications too, particularly in basements, multi-storey homes where floor noise is an issue, or where concealing existing services without major construction work is desirable. We provide residential suspended ceiling installations throughout Seymour and surrounds.",
      },
      {
        heading: "Installation and Ongoing Access",
        body: "A key advantage of suspended ceiling systems is the ongoing access they provide to services above the ceiling line. We install suspended ceilings with the access requirements of your space in mind, ensuring tiles can be removed and reinstated cleanly for maintenance or future alterations without disruption to the surrounding ceiling.",
      },
    ],
    faqs: [
      {
        q: "What is a suspended ceiling?",
        a: "A suspended ceiling, also called a drop ceiling or grid ceiling, is a secondary ceiling installed below the structural ceiling of a building. It consists of a metal grid system suspended from the structure above, into which ceiling tiles or panels are installed. The void above the grid is used to route services.",
      },
      {
        q: "How much clearance is required for a suspended ceiling?",
        a: "The amount of clearance required depends on the services that need to be routed above the ceiling. A minimum of around 150–200mm is generally required, though deeper voids are common where ductwork or other large services are present. We assess your space and advise on the appropriate ceiling height at the quoting stage.",
      },
      {
        q: "Can a suspended ceiling improve the acoustics of a room?",
        a: "Yes. Acoustic suspended ceiling tiles are designed to absorb sound and reduce noise transmission between floors and rooms. They are particularly effective in offices, meeting rooms, and other environments where noise control is important.",
      },
      {
        q: "Are suspended ceilings suitable for wet areas such as bathrooms or kitchens?",
        a: "Moisture-resistant ceiling tiles are available for installation in areas exposed to higher humidity. We can specify and install appropriate tile products for wet or humid environments as part of our suspended ceiling service.",
      },
      {
        q: "Can existing suspended ceiling tiles be replaced without replacing the grid?",
        a: "In most cases, yes. If the existing grid system is in good condition and correctly installed, tiles can be replaced individually or across the entire ceiling without disturbing the grid. We can assess your existing system and advise on the most appropriate approach.",
      },
      {
        q: "Do you install suspended ceilings in both new builds and existing buildings?",
        a: "Yes. We install suspended ceiling systems in new construction and in existing commercial and residential buildings throughout Seymour and regional Victoria. Both applications are a routine part of our plastering contractor services.",
      },
    ],
    galleryDir: "images/suspended-ceilings",
    galleryImages: ["image1.webp", "image2.webp", "image3.webp"],
  },
  {
    name: "Plaster Patching",
    slug: "plaster-patching",
    keyword: "plaster repair",
    metaTitle: "Plaster Repair Seymour VIC | Plaster Patching Service",
    metaDescription:
      "Professional plaster repair & patching in Seymour & Goulburn Valley. Cracks, holes & water damage repaired to a seamless finish. Get a free quote today.",
    heroAlt: "Plasterer repairing and patching a damaged wall in a Seymour home",
    introShort:
      "From minor cracks to significant damage, our plaster repair service restores your walls and ceilings to a smooth, seamless finish. We match existing textures with care and precision so repairs are virtually invisible throughout Seymour and the Goulburn Valley.",
    introFull:
      "Plaster damage is one of the most common issues homeowners, landlords, and property managers face, whether it's from settlement cracks, water ingress, impact damage, or the removal of old fittings. Our plaster repair service addresses damage of all types and sizes, restoring your walls and ceilings to a condition that is ready to paint and indistinguishable from the surrounding surface. We provide plaster repair services throughout Seymour and regional Victoria, with the same standard of care on every job regardless of size.",
    sections: [
      {
        heading: "Plaster Repair for Cracks",
        body: "Cracks in plaster walls and ceilings are extremely common, particularly in older homes and properties subject to ground movement. Our plaster repair cracks service addresses both superficial hairline cracks and deeper structural cracks, using appropriate preparation and filling techniques to ensure the repair is durable and seamlessly finished.",
      },
      {
        heading: "Plaster Repair for Holes and Impact Damage",
        body: "Holes in plasterboard walls from door handles, accidental impacts, or removed fittings are a common and straightforward plaster repair. Our team patches holes of all sizes — from small fastener holes to large sections — with a seamless finish that is ready for painting and indistinguishable from the surrounding wall.",
      },
      {
        heading: "Water Damage Plaster Repair",
        body: "Water damage to plaster ceilings and walls requires careful assessment before repair to ensure the source of moisture has been resolved. Once the cause is confirmed as fixed, our plaster repair service restores water-damaged plaster to a clean, sound surface — removing deteriorated material, applying appropriate primer, and re-plastering to a smooth finish.",
      },
      {
        heading: "Texture Matching and Paint-Ready Finishes",
        body: "The mark of a quality plaster repair is that it's invisible once painted. We take texture matching seriously, assessing the surrounding surface finish before commencing and applying the appropriate technique to replicate it. The result is a plaster repair patch that blends seamlessly and requires no special treatment from your painter.",
      },
    ],
    faqs: [
      {
        q: "What types of plaster damage can you repair?",
        a: "We repair a wide range of plaster damage including settlement cracks, hairline cracks, holes from impacts or removed fittings, water-damaged plaster, sagging ceilings, and areas damaged during renovation or construction work. Contact us to discuss your specific repair requirements.",
      },
      {
        q: "Will the plaster repair be visible after painting?",
        a: "Our goal on every plaster repair is a result that is invisible once painted. We assess your existing surface finish and match it as closely as possible. In most cases, a quality plaster repair patch is undetectable after painting.",
      },
      {
        q: "Can you repair cracks that keep coming back?",
        a: "Recurring cracks are often a sign of ongoing movement in the building — either seasonal timber movement or more significant ground movement. We can assess recurring cracks and recommend the most appropriate repair approach, which may involve flexible compounds or further investigation by a structural professional if warranted.",
      },
      {
        q: "Do I need to repaint the whole wall after a plaster repair?",
        a: "In most cases, repainting the entire wall or ceiling surface produces the best visual result, as paint colour and sheen can vary between applications. We provide the surface ready for your painter, and we're happy to recommend repainting the full surface for the best outcome.",
      },
      {
        q: "Can you repair water-damaged plaster if the leak has been fixed?",
        a: "Yes. Once the source of water ingress has been resolved and the area has had adequate time to dry out, we can repair the affected plaster. We assess the extent of the damage before commencing and remove any unsound material before applying new plaster.",
      },
      {
        q: "Do you provide plaster repair services for rental properties?",
        a: "Yes. We regularly provide plaster repair services for landlords and property managers in Seymour and the Goulburn Valley, including end-of-tenancy repairs, insurance repairs, and general maintenance patching.",
      },
      {
        q: "How do I get a quote for a plaster repair?",
        a: "Contact us with a description and photos of the damage if possible, or we can arrange a site visit to assess the repair in person. We provide free, no-obligation quotes for plaster repair work throughout Seymour and surrounds.",
      },
    ],
    galleryDir: "images/plaster-patching",
    galleryImages: ["image1.webp", "image2.webp", "image3.webp"],
  },
  {
    name: "Small Plastering Jobs",
    slug: "small-plastering-jobs",
    keyword: "plaster repair service",
    metaTitle: "Small Plastering Jobs Seymour VIC | Local Plaster Repair Service",
    metaDescription:
      "No job too small. Local plaster repair service in Seymour & Goulburn Valley for patches, cracks, cornices & more. Professional finish every time. Get a quote.",
    heroAlt:
      "Plasterer completing a small plaster repair patch on a wall in a Seymour home",
    introShort:
      "No job is too small. We provide a professional plaster repair service for homeowners, landlords, and property managers across Seymour and the Goulburn Valley — bringing the same quality and care to every job, regardless of size.",
    introFull:
      "Many plastering companies won't take on small jobs, leaving homeowners and property managers struggling to find a reliable tradesperson for minor repairs and single-room work. We believe every client deserves a professional plaster repair service, regardless of the scale of the work. From a single plaster repair patch to a small cornice replacement or a minor skim coat, our team provides prompt, high-quality service throughout Seymour and the Goulburn Valley without the need to wait for a larger job to justify the visit.",
    sections: [
      {
        heading: "Minor Plaster Repairs",
        body: "Small holes, hairline cracks, and minor surface damage are the most common reasons homeowners contact a plaster repair service. Our team addresses minor plaster repairs efficiently and professionally, matching your existing finish and leaving the surface ready for painting — with no mess left behind.",
      },
      {
        heading: "Single Room Plastering",
        body: "Whether it's a bedroom that needs a fresh skim coat or a bathroom ceiling that requires replastering after a leak, we take on single-room plastering throughout Seymour and surrounds. You'll receive the same quality workmanship we bring to full-home plasters, delivered on a timeline that suits you.",
      },
      {
        heading: "Cornice and Ceiling Rose Repairs",
        body: "Small sections of damaged or missing cornice, a cracked ceiling rose, or a loose decorative feature — these are exactly the kind of small jobs we're happy to attend to. Our plaster repair service covers decorative as well as structural plastering repairs, no matter how minor.",
      },
      {
        heading: "Prompt, Local Service in Seymour",
        body: "As a locally based plastering company, we can respond promptly to small job enquiries throughout Seymour and the Goulburn Valley. We understand the value of a reliable local tradesperson who turns up when they say they will and leaves the job looking better than they found it. Contact us for a free quote on your small plastering job today.",
      },
    ],
    faqs: [
      {
        q: "Do you take on small plastering jobs or only large projects?",
        a: "We take on jobs of all sizes, including minor repairs, single-room plastering, and small patch jobs. Every client receives the same standard of workmanship from our plaster repair service, regardless of the scale of the work.",
      },
      {
        q: "What is the minimum job size you'll quote for?",
        a: "We don't have a minimum job size. If you have a plaster repair or small plastering task that needs attending to, contact us and we'll provide a free quote. We're happy to discuss any job, no matter how minor.",
      },
      {
        q: "How quickly can you attend to a small plastering job?",
        a: "Our availability varies depending on our current workload, but we aim to respond to all enquiries promptly and schedule small jobs as efficiently as possible. Contact us to discuss your timeframe and we'll do our best to accommodate you.",
      },
      {
        q: "Can you patch just one small hole in my wall?",
        a: "Yes. A single plaster repair patch is exactly the kind of work our plaster repair service is designed for. We'll repair the hole, match the surrounding texture, and leave the surface ready for painting.",
      },
      {
        q: "Do you charge a call-out fee for small jobs?",
        a: "Our pricing for small jobs is discussed at the quoting stage. We provide free, no-obligation quotes so you know exactly what to expect before any work commences. Contact us to discuss your job and we'll provide transparent pricing.",
      },
      {
        q: "Can you do a small plastering job at a rental property?",
        a: "Yes. We regularly carry out minor plaster repairs and small plastering jobs at rental properties for landlords and property managers throughout Seymour and the Goulburn Valley. We work efficiently to minimise disruption to tenants and leave the property in a clean, tidy condition.",
      },
      {
        q: "Are small plastering jobs covered by your insurance?",
        a: "Yes. All work carried out by our team, regardless of size, is covered by our comprehensive public liability insurance. You can engage our plaster repair service with complete confidence.",
      },
    ],
    galleryDir: "images/small-plastering-jobs",
    galleryImages: ["image1.webp", "image2.webp", "image3.webp"],
  },
];

export const LOCATIONS: Location[] = [
  {
    town: "Seymour",
    postcode: "3660",
    slug: "plastering-services-seymour",
    state: "VIC",
    heroDescription:
      "We provide professional plastering services throughout Seymour and the surrounding Goulburn Valley region. As your local plastering company, we're on hand for everything from new builds and renovations to plaster repairs and decorative finishes.",
    heroImage: "/images/locations/hero-seymour.webp",
    imageAlt: "Plastering services Seymour VIC",
  },
  {
    town: "Tallarook",
    postcode: "3659",
    slug: "plastering-services-tallarook",
    state: "VIC",
    heroDescription:
      "We deliver quality plastering services to homes and properties throughout Tallarook, just 10 minutes south of Seymour. Whether you're renovating a period home in this scenic township or building new, our experienced plastering contractors are ready to help.",
    heroImage: "/images/locations/hero-tallarook.webp",
    imageAlt: "Plastering services Tallarook VIC",
  },
  {
    town: "Avenel",
    postcode: "3664",
    slug: "plastering-services-avenel",
    state: "VIC",
    heroDescription:
      "Our plastering services cover Avenel and the surrounding district, 15 minutes north-east of Seymour. From heritage property restorations to new residential builds, our plastering contractors bring quality workmanship to every job in the Avenel area.",
    heroImage: "/images/locations/hero-avenel.webp",
    imageAlt: "Plastering services Avenel VIC",
  },
  {
    town: "Trawool",
    postcode: "3658",
    slug: "plastering-services-trawool",
    state: "VIC",
    heroDescription:
      "We provide professional plastering services to properties throughout Trawool and the surrounding valley, 15 minutes south-east of Seymour. From prestige rural homes to renovation projects, our experienced team delivers quality plastering results throughout the Trawool area.",
    heroImage: "/images/locations/hero-trawool.webp",
    imageAlt: "Plastering services Trawool VIC",
  },
  {
    town: "Puckapunyal",
    postcode: "3662",
    slug: "plastering-services-puckapunyal",
    state: "VIC",
    heroDescription:
      "We offer reliable plastering services to residential and commercial properties in and around Puckapunyal, 10 minutes west of Seymour. Our experienced plastering contractors understand the demands of the local community and deliver quality results on every job.",
    heroImage: "/images/locations/hero-puckapunyal.webp",
    imageAlt: "Plastering services Puckapunyal VIC",
  },
  {
    town: "Nagambie",
    postcode: "3608",
    slug: "plastering-services-nagambie",
    state: "VIC",
    heroDescription:
      "Our plastering services extend north to Nagambie and the surrounding lakeside district, approximately 25 minutes from Seymour. Whether it's a residential renovation, a new build, or a commercial fitout in this vibrant tourism town, our team delivers professional results throughout the Nagambie area.",
    heroImage: "/images/locations/hero-nagambie.webp",
    imageAlt: "Plastering services Nagambie VIC",
  },
  {
    town: "Longwood",
    postcode: "3665",
    slug: "plastering-services-longwood",
    state: "VIC",
    heroDescription:
      "We provide quality plastering services to homes and rural properties throughout Longwood and the surrounding district, located 25 to 30 minutes north-east of Seymour. Our plastering contractors service residential and commercial projects of all sizes across the Longwood area.",
    heroImage: "/images/locations/hero-longwood.webp",
    imageAlt: "Plastering services Longwood VIC",
  },
  {
    town: "Locksley",
    postcode: "3665",
    slug: "plastering-services-locksley",
    state: "VIC",
    heroDescription:
      "Our plastering services cover Locksley and the surrounding farming localities, situated 25 to 30 minutes north-east of Seymour. From rural residential properties to light commercial projects, our experienced plastering team is available throughout the Locksley district.",
    heroImage: "/images/locations/hero-locksley.webp",
    imageAlt: "Plastering services Locksley VIC",
  },
  {
    town: "Euroa",
    postcode: "3666",
    slug: "plastering-services-euroa",
    state: "VIC",
    heroDescription:
      "We deliver professional plastering services to Euroa and the wider Strathbogie Ranges district, approximately 45 minutes north-east of Seymour. From historic homes in this charming service town to new commercial builds, our plastering contractors provide quality finishes across the Euroa area.",
    heroImage: "/images/locations/hero-euroa.webp",
    imageAlt: "Plastering services Euroa VIC",
  },
  {
    town: "Violet Town",
    postcode: "3669",
    slug: "plastering-services-violet-town",
    state: "VIC",
    heroDescription:
      "Our plastering services reach Violet Town and the surrounding district near the Strathbogie Ranges, approximately 50 minutes north-east of Seymour. Whether it's a residential renovation or a new build, our experienced plastering contractors deliver quality results throughout the Violet Town area.",
    heroImage: "/images/locations/hero-violet-town.webp",
    imageAlt: "Plastering services Violet Town VIC",
  },
  {
    town: "Shepparton",
    postcode: "3630",
    slug: "plastering-services-shepparton",
    state: "VIC",
    heroDescription:
      "We provide professional plastering services to Shepparton and the greater Goulburn Valley region, at the outer edge of our service area approximately 1.5 hours north of Seymour. Our plastering contractors service residential and commercial projects across this major regional centre and surrounds.",
    heroImage: "/images/locations/hero-shepparton.webp",
    imageAlt: "Plastering services Shepparton VIC",
  },
  {
    town: "Benalla",
    postcode: "3672",
    slug: "plastering-services-benalla",
    state: "VIC",
    heroDescription:
      "Our plastering services extend to Benalla and the surrounding region at the northern boundary of our service area, approximately 1.5 hours from Seymour. From residential renovations to commercial projects, our experienced team provides quality plastering throughout the Benalla district.",
    heroImage: "/images/locations/hero-benalla.webp",
    imageAlt: "Plastering services Benalla VIC",
  },
  {
    town: "Tooborac",
    postcode: "3522",
    slug: "plastering-services-tooborac",
    state: "VIC",
    heroDescription:
      "We deliver quality plastering services to Tooborac and the surrounding district, approximately 25 minutes west of Seymour. From rural homesteads to commercial properties in this iconic Goldfields gateway township, our plastering contractors provide professional results throughout the Tooborac area.",
    heroImage: "/images/locations/hero-tooborac.webp",
    imageAlt: "Plastering services Tooborac VIC",
  },
  {
    town: "Heathcote",
    postcode: "3523",
    slug: "plastering-services-heathcote",
    state: "VIC",
    heroDescription:
      "Our plastering services cover Heathcote and the surrounding wine region, approximately 50 minutes west of Seymour. Whether it's a prestige rural home, a winery fitout, or a residential renovation in this globally recognised Shiraz region, our experienced plastering contractors deliver exceptional results.",
    heroImage: "/images/locations/hero-heathcote.webp",
    imageAlt: "Plastering services Heathcote VIC",
  },
  {
    town: "Kyneton",
    postcode: "3444",
    slug: "plastering-services-kyneton",
    state: "VIC",
    heroDescription:
      "We provide professional plastering services to Kyneton and the surrounding Macedon Ranges district, approximately 1 hour south-west of Seymour. From heritage bluestone properties on Piper Street to new residential builds, our plastering contractors deliver quality workmanship throughout the Kyneton area.",
    heroImage: "/images/locations/hero-kyneton.webp",
    imageAlt: "Plastering services Kyneton VIC",
  },
  {
    town: "Bendigo",
    postcode: "3550",
    slug: "plastering-services-bendigo",
    state: "VIC",
    heroDescription:
      "Our plastering services extend to Bendigo and the surrounding Goldfields region, approximately 1.25 hours west of Seymour. From grand Victorian-era homes to modern commercial builds in this historic gold-rush city, our experienced plastering contractors deliver quality finishes across the greater Bendigo area.",
    heroImage: "/images/locations/hero-bendigo.webp",
    imageAlt: "Plastering services Bendigo VIC",
  },
  {
    town: "Wandong",
    postcode: "3758",
    slug: "plastering-services-wandong",
    state: "VIC",
    heroDescription:
      "We provide quality plastering services to Wandong and the surrounding southern corridor, approximately 35 minutes south of Seymour. Our plastering contractors service residential and light commercial projects throughout Wandong and the communities nestled against the Mount Disappointment State Forest.",
    heroImage: "/images/locations/hero-wandong.webp",
    imageAlt: "Plastering services Wandong VIC",
  },
  {
    town: "Heathcote Junction",
    postcode: "3758",
    slug: "plastering-services-heathcote-junction",
    state: "VIC",
    heroDescription:
      "Our plastering services cover Heathcote Junction and the surrounding southern commuter corridor, approximately 35 minutes south of Seymour. Whether it's a residential renovation or a new build, our experienced plastering team delivers professional results throughout the Heathcote Junction area.",
    heroImage: "/images/locations/hero-heathcote-junction.webp",
    imageAlt: "Plastering services Heathcote Junction VIC",
  },
  {
    town: "Broadford",
    postcode: "3658",
    slug: "plastering-services-broadford",
    state: "VIC",
    heroDescription:
      "We deliver professional plastering services to Broadford and the surrounding district, approximately 15 to 20 minutes south of Seymour. From established residential homes in this growing mid-sized town to new commercial builds, our plastering contractors provide quality results throughout the Broadford area.",
    heroImage: "/images/locations/hero-broadford.webp",
    imageAlt: "Plastering services Broadford VIC",
  },
  {
    town: "Kilmore",
    postcode: "3764",
    slug: "plastering-services-kilmore",
    state: "VIC",
    heroDescription:
      "Our plastering services extend to Kilmore and the surrounding district, approximately 30 minutes south of Seymour. As one of Victoria's oldest inland towns, Kilmore features a mix of heritage and modern properties — all of which our experienced plastering contractors are equipped to service to the highest standard.",
    heroImage: "/images/locations/hero-kilmore.webp",
    imageAlt: "Plastering services Kilmore VIC",
  },
  {
    town: "Pyalong",
    postcode: "3521",
    slug: "plastering-services-pyalong",
    state: "VIC",
    heroDescription:
      "We provide quality plastering services to Pyalong and the surrounding farming district, approximately 25 minutes south-west of Seymour. From rural residential properties to small commercial jobs near this heritage township, our plastering contractors deliver reliable results throughout the Pyalong area.",
    heroImage: "/images/locations/hero-pyalong.webp",
    imageAlt: "Plastering services Pyalong VIC",
  },
  {
    town: "Yea",
    postcode: "3717",
    slug: "plastering-services-yea",
    state: "VIC",
    heroDescription:
      "Our plastering services cover Yea and the surrounding Goulburn River district, approximately 45 minutes east of Seymour. Whether it's a residential renovation, a new build, or a commercial project in this major junction town, our experienced plastering contractors are ready to deliver quality results throughout the Yea area.",
    heroImage: "/images/locations/hero-yea.webp",
    imageAlt: "Plastering services Yea VIC",
  },
];

export const COMMUNITY_LINKS: CommunityLink[] = [
  {
    name: "Avenel Primary School",
    url: "https://www.avenelps.vic.edu.au/",
    icon: "book",
  },
  {
    name: "Avenel Football Netball Club",
    url: "https://avenelfnc.com.au/",
    icon: "football",
  },
  {
    name: "Maeco Builders",
    url: "https://www.maecobuilders.com.au/",
    icon: "house",
  },
  {
    name: "Sherwood Airconditioning",
    url: "https://www.google.com/search?q=sherwood+air+conditioning+seymour",
    icon: "wind",
  },
  {
    name: "Cole Construction",
    url: "https://www.facebook.com/coleconstructionanddevelopment/",
    icon: "house",
  },
  {
    name: "Green Light Electrical",
    url: "https://www.gles.com.au/",
    icon: "lightning",
  },
];

export const GLOBAL_FAQS = [
  {
    q: "Do you offer free quotes?",
    a: "Yes. We provide free, no-obligation quotes for all plastering work throughout Seymour and the Goulburn Valley. Contact us to arrange a convenient time for an on-site assessment, or send us a description and photos of your project and we'll get back to you promptly.",
  },
  {
    q: "Are your plasterers licensed and insured?",
    a: "Yes. Our team holds the appropriate trade licences and is fully insured for public liability. You can engage our plastering services with complete confidence, whether it's a minor repair or a large commercial project.",
  },
  {
    q: "Do you take on small jobs or only large projects?",
    a: "We take on jobs of all sizes — from a single plaster repair patch through to full home plasters and large commercial builds. Every client receives the same standard of workmanship and professionalism regardless of the scale of the work.",
  },
  {
    q: "What areas do you service?",
    a: "We are based in Seymour and service the surrounding Goulburn Valley region and wider regional Victoria. Contact us to discuss your location and we'll confirm availability.",
  },
  {
    q: "How soon can I paint after plastering?",
    a: "New plaster needs adequate drying time before painting — generally a minimum of 3 to 4 weeks for full plaster, though this varies depending on ventilation, humidity, and the thickness of the coat applied. Your plasterer will advise you on the best approach for your specific job.",
  },
  {
    q: "How long will my plastering job take?",
    a: "Timeframes vary depending on the scope of the work. A single room typically takes one to two days, a full home plaster may take one to two weeks, and commercial projects are assessed individually. We provide a clear timeframe at the quoting stage and keep you informed throughout.",
  },
  {
    q: "Do I need to move furniture before the plasterer arrives?",
    a: "We recommend clearing the work area of furniture and covering anything that can't be moved. Our team will protect flooring and fittings with drop sheets, but having the area clear before we arrive helps us get started promptly and minimises the risk of damage.",
  },
  {
    q: "Can you match the existing texture on my walls or ceiling?",
    a: "Yes. Matching existing textures and finishes is something we do regularly, particularly on repair and renovation work. We assess the existing surface before commencing to ensure a seamless result that is virtually invisible once painted.",
  },
  {
    q: "Will plastering repairs be visible after painting?",
    a: "Our goal on every plaster repair is a result that is undetectable once painted. We assess your existing surface finish and match it as closely as possible. In most cases a quality repair is indistinguishable from the surrounding surface after painting.",
  },
  {
    q: "Do I need to repaint the whole wall after a plaster repair?",
    a: "In most cases, repainting the entire wall or ceiling surface produces the best visual result, as paint colour and sheen can vary between applications. We provide the surface ready for your painter and are happy to recommend repainting the full surface for the best outcome.",
  },
  {
    q: "Can you repair cracks that keep coming back?",
    a: "Recurring cracks are often a sign of ongoing movement in the building — either seasonal timber movement or more significant ground movement. We can assess recurring cracks and recommend the most appropriate repair approach, which may involve flexible compounds or further investigation by a structural professional if warranted.",
  },
  {
    q: "Can you repair water-damaged plaster?",
    a: "Yes. Once the source of water ingress has been resolved and the area has had adequate time to dry out, we can repair the affected plaster. We assess the extent of the damage before commencing, remove any unsound material, and re-plaster to a smooth, paint-ready finish.",
  },
  {
    q: "What types of plaster damage can you repair?",
    a: "We repair a wide range of plaster damage including settlement cracks, hairline cracks, holes from impacts or removed fittings, water-damaged plaster, sagging ceilings, and areas damaged during renovation or construction work. Contact us to discuss your specific requirements.",
  },
  {
    q: "Do you work on heritage and period properties?",
    a: "Yes. We have experience working on older and heritage properties throughout the Seymour region, applying appropriate materials and techniques to preserve the character of the building. We also manufacture and install fibrous plaster elements for heritage restoration work.",
  },
  {
    q: "Can you supply plasterboard and plastering materials as well as install them?",
    a: "Yes. We offer a supply and install service for plasterboard and plastering materials, which simplifies coordination and ensures material quality is maintained throughout your project. As a contractor purchasing materials regularly, we often have access to competitive pricing.",
  },
  {
    q: "Do you work with builders and head contractors?",
    a: "Yes. We regularly work as a plastering subcontractor on residential and commercial projects throughout Seymour and regional Victoria. We are experienced in coordinating with builders, site managers, and project managers within construction programmes.",
  },
  {
    q: "Can you accommodate tight construction timelines?",
    a: "Yes. We understand the demands of construction schedules and plan our work accordingly. We communicate proactively with your site manager and allocate the appropriate resources to meet your programme requirements without compromising quality.",
  },
  {
    q: "Do you work on both residential and commercial projects?",
    a: "Yes. We provide plastering services across a wide range of residential and commercial applications — from domestic homes and renovations through to offices, retail spaces, medical centres, schools, warehouses, and hospitality venues.",
  },
  {
    q: "Can you work after hours or on weekends to minimise disruption?",
    a: "Where required, we can discuss after-hours or weekend scheduling to minimise disruption to an operating home or business. This is best raised at the quoting stage so we can plan and price accordingly.",
  },
  {
    q: "How far in advance do I need to book?",
    a: "We recommend contacting us as early as possible, particularly for renovation and construction projects where plastering needs to fit within a broader programme. For smaller repair jobs we aim to schedule work as promptly as our workload allows. Contact us to discuss your timeframe.",
  },
  {
    q: "Will you clean up after the job?",
    a: "Yes. We clean up thoroughly after every job. Plastering does generate fine dust, so we recommend removing or covering valuables in adjacent areas during the work. Our team uses drop sheets throughout and leaves the site in a tidy condition on completion.",
  },
  {
    q: "Do you provide plastering services for rental properties?",
    a: "Yes. We regularly carry out plastering work for landlords and property managers throughout Seymour and the Goulburn Valley, including end-of-tenancy repairs, insurance repairs, and general maintenance. We work efficiently to minimise disruption to tenants.",
  },
  {
    q: "Do you charge a call-out fee for small jobs?",
    a: "Our pricing is discussed at the quoting stage and we provide free, no-obligation quotes so you know exactly what to expect before any work commences. Contact us to discuss your job and we'll provide transparent pricing.",
  },
  {
    q: "Do you install decorative features such as cornices and ceiling roses?",
    a: "Yes. We supply and install a wide range of decorative plastering features including cornices, ceiling roses, and fibrous plaster elements. We also repair and replace damaged or missing decorative features to match existing profiles where possible.",
  },
  {
    q: "Can you construct internal partition walls?",
    a: "Yes. We design and construct metal stud partition walls for residential and commercial applications, from single partitions through to complete internal layouts. We can take the work from framing through to finished, paint-ready plasterboard surfaces.",
  },
  {
    q: "Do you install suspended ceilings?",
    a: "Yes. We design and install suspended ceiling systems — also known as drop or grid ceilings — for commercial and residential applications. These systems are ideal for concealing services, improving acoustics, and creating a clean, professional ceiling finish.",
  },
  {
    q: "Can you install fire-rated or acoustic wall and ceiling systems?",
    a: "Yes. Where building regulations or acoustic performance requirements demand it, we construct fire-rated and acoustic wall and ceiling systems using appropriate products and methods in accordance with relevant Australian Standards.",
  },
  {
    q: "Are you available for ongoing work across multiple projects?",
    a: "Yes. We welcome ongoing relationships with builders, developers, and property managers who have a regular pipeline of work in the Seymour and Goulburn Valley region. We're happy to discuss how we can support your programme long term.",
  },
  {
    q: "How do I get a quote?",
    a: "You can contact us by phone or through our website contact form. For repair work, photos of the damage are helpful. For larger projects, plans or specifications assist us in preparing an accurate quote. We aim to respond to all enquiries promptly and can arrange a site visit at a time that suits you.",
  },
  {
    q: "What should I look for when choosing a plastering company?",
    a: "Look for a plastering company that is licensed, insured, and willing to provide a clear written quote before commencing work. Experience with your specific type of project — whether residential, commercial, heritage, or decorative — is important, as is a track record of showing up as scheduled and finishing to a consistent standard. We're happy to discuss our experience and answer any questions you have before you commit.",
  },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { src: "/images/domestic-plastering/image1.webp", alt: "Plasterer applying smooth plaster finish to interior wall in Seymour home", caption: "Domestic wall plastering" },
  { src: "/images/domestic-plastering/image2.webp", alt: "Freshly plastered and set ceiling in a residential property in Seymour", caption: "Residential ceiling plastering" },
  { src: "/images/domestic-plastering/image3.webp", alt: "Plasterer skimming coat over plasterboard wall in Seymour home", caption: "Skim coat wall finish" },
  { src: "/images/domestic-plastering/image4.webp", alt: "Paint-ready plastered walls in a newly renovated room in Seymour", caption: "Paint-ready plastered walls" },
  { src: "/images/domestic-plastering/image5.webp", alt: "Plasterer finishing plasterboard installation in a new home in Seymour", caption: "New home plasterboard installation" },
  { src: "/images/domestic-plastering/image6.webp", alt: "Smooth set plaster finish on walls and ceiling in Seymour residence", caption: "Set plaster finish — walls and ceiling" },
  { src: "/images/domestic-plastering/image7.webp", alt: "Plasterer installing cornice as part of domestic plastering job in Seymour", caption: "Domestic cornice installation" },
  { src: "/images/domestic-plastering/image8.webp", alt: "Completed domestic plastering in living room of Seymour property", caption: "Completed domestic plastering — living room" },
  { src: "/images/domestic-plastering/image9.webp", alt: "Plasterer preparing wall surface before plastering in Seymour home", caption: "Wall surface preparation" },
  { src: "/images/domestic-plastering/image10.webp", alt: "Freshly plastered bedroom walls ready for painting in Seymour", caption: "Bedroom plastering — ready to paint" },
  { src: "/images/commercial-plastering/image1.webp", alt: "Plastering contractors finishing walls in a commercial office fitout in Seymour", caption: "Commercial office plastering" },
  { src: "/images/commercial-plastering/image2.webp", alt: "Large-scale commercial ceiling plastering in a warehouse in regional Victoria", caption: "Commercial warehouse ceiling plastering" },
  { src: "/images/commercial-plastering/image3.webp", alt: "Plastering contractors applying set coat in a retail fitout in Seymour VIC", caption: "Retail fitout plastering" },
  { src: "/images/commercial-plastering/image4.webp", alt: "Completed commercial plastering on walls and ceilings in Seymour business premises", caption: "Completed commercial plastering" },
  { src: "/images/plastering-renovations/image1.webp", alt: "Plasterer matching existing finish during a home renovation in Seymour", caption: "Renovation plastering — finish matching" },
  { src: "/images/plastering-renovations/image2.webp", alt: "Full replaster of renovated room with fresh set coat in Seymour home", caption: "Full room replaster" },
  { src: "/images/plastering-renovations/image3.webp", alt: "Plasterer working on heritage property walls during renovation in regional Victoria", caption: "Heritage property renovation plastering" },
  { src: "/images/plastering-renovations/image4.webp", alt: "Renovated kitchen with freshly plastered and set walls in Seymour", caption: "Kitchen renovation plastering" },
  { src: "/images/plastering-renovations/image5.webp", alt: "Plasterer applying skim coat over existing plaster during renovation in Seymour", caption: "Skim coat over existing plaster" },
  { src: "/images/plastering-renovations/image6.webp", alt: "Renovation plastering in progress on walls and ceiling of Seymour home", caption: "Renovation plastering in progress" },
  { src: "/images/plastering-renovations/image7.webp", alt: "Completed renovation plastering with seamless finish ready for painting in Seymour", caption: "Completed renovation plastering" },
  { src: "/images/fibrous-plastering/image1.webp", alt: "Ornate fibrous plaster cornice installed in period home in Seymour Victoria", caption: "Fibrous plaster cornice — period home" },
  { src: "/images/fibrous-plastering/image2.webp", alt: "Custom fibrous plaster ceiling rose and cornice detail in Seymour residence", caption: "Custom fibrous plaster ceiling detail" },
  { src: "/images/fibrous-plastering/image3.webp", alt: "Fibrous plaster decorative panel installed in prestige home in regional Victoria", caption: "Fibrous plaster decorative panel" },
  { src: "/images/decorative-cornices/image1.webp", alt: "Decorative plaster cornice installed in period-style living room in Seymour Victoria", caption: "Decorative cornice — period-style interior" },
  { src: "/images/decorative-cornices/image2.webp", alt: "Contemporary cove cornice installed in modern home in Seymour VIC", caption: "Contemporary cove cornice" },
  { src: "/images/decorative-cornices/image3.webp", alt: "Repaired and replaced cornice section matching existing profile in Seymour home", caption: "Cornice repair and replacement" },
  { src: "/images/ceiling-roses/image1.webp", alt: "Ornate plaster ceiling rose installed in formal dining room in Seymour Victoria", caption: "Ceiling rose — formal dining room" },
  { src: "/images/ceiling-roses/image2.webp", alt: "Period-style plaster ceiling rose installed in Victorian-era home in regional Victoria", caption: "Period ceiling rose — heritage home" },
  { src: "/images/ceiling-roses/image3.webp", alt: "Plaster ceiling rose installed around central light fitting in Seymour home", caption: "Ceiling rose with central light fitting" },
  { src: "/images/ceiling-roses/image4.webp", alt: "Repaired and restored ceiling rose in period property in Seymour VIC", caption: "Ceiling rose repair and restoration" },
  { src: "/images/plaster-patching/image1.webp", alt: "Plasterer repairing crack in plaster wall in Seymour home", caption: "Plaster crack repair" },
  { src: "/images/plaster-patching/image2.webp", alt: "Hole in plasterboard wall patched and set to seamless finish in Seymour residence", caption: "Plasterboard hole patch — seamless finish" },
  { src: "/images/plaster-patching/image3.webp", alt: "Water-damaged plaster ceiling repaired and re-plastered in Seymour property", caption: "Water damage plaster repair — ceiling" },
];
