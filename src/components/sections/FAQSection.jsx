import { useState } from "react";
import "../../../css/FAQSection.css";

// TODO: replace with the Google Drive link to the important-contacts PDF
const CONTACTS_DRIVE_LINK = "#";

export const faqCategories = [
  {
    title: "Stay & Celebrations",
    items: [
      {
        question: "Where is the accommodation?",
        answer: [
          {
            p: "We've arranged accommodation for all our guests across the three nights of celebrations, from the 28th to the 30th of January.",
          },
          {
            p: "Guests from Siddharth's side will be staying at **Hometel Suites, Dahisar, Mumbai**, and guests from Ankita's side will be staying at **MCA, Kandivali, Mumbai** — chosen specifically for easy access to the venues. Everything is taken care of for the wedding days, so just show up and enjoy!",
          },
          {
            p: "If you're planning to arrive a few days early or extend your stay after the wedding, we'd recommend booking independently in the **Colaba, BKC, Bandra, or Juhu** areas — these neighbourhoods offer easy access to Mumbai's best hotspots, restaurants, and tourist attractions.",
          },
        ],
      },
      {
        question: "Who can I contact for assistance?",
        answer: [
          {
            p: `A list of important contacts is available [here](${CONTACTS_DRIVE_LINK}).`,
          },
        ],
      },
      {
        question: "How will the weather be in January?",
        answer: [
          {
            p: "Mumbai in late January is dry, sunny, but comfortably warm. Expect daytime temperatures around **30–33°C (86–91°F)** and cooler evenings around **18–22°C (64–72°F)**. For guests coming from a German or American winter, it will feel like stepping into summer.",
          },
          {
            p: "Pack light, breathable clothing for the day, but do bring a light shawl or jacket for the evenings as outdoor venues can get breezy after sunset. Sunscreen and sunglasses are a must, and stay hydrated throughout the celebrations.",
          },
        ],
      },
      {
        question: "Will there be more than 3 ceremonies during the days of the wedding?",
        answer: [
          {
            p: "Indian weddings are multi-day celebrations, and ours will be no different! While the three main events are the heart of the festivities, there will be additional smaller gatherings like Haldi, Mehendi, and Lagan Lakhvanu which don't require special outfits — dresses for women and smart casual for the guys will do the trick here. Brunches and after-parties will be woven into the schedule too.",
          },
          {
            p: "We'll share a detailed day-by-day itinerary closer to the date so you know exactly what to expect, when to arrive, and how to dress for each event.",
          },
          {
            p: "You're welcome to attend every event or just the ones that suit your energy and schedule — there's absolutely no pressure to be at everything, and we'll love having you at whatever you join.",
          },
        ],
      },
    ],
  },
  {
    title: "What to Wear",
    items: [
      {
        question: "What to wear at an Indian Wedding?",
        answer: [
          {
            p: "Indian weddings are a celebration of colour and glamour — leave the understated neutrals at home and go bold!",
          },
          {
            p: "**Sangeet (Evening):** Men in Kurtas, Bandhgalas, or Indo-Western outfits. Women in Lehengas, Anarkalis, Indo-Western sets, or Sarees. It's an evening event, so lean into rich, deep colours — Emerald Green, Royal Blue, Burgundy, Purple, or Chocolate Brown.",
          },
          {
            p: "**Wedding (Daytime):** Similar outfit styles as the Sangeet, but in lighter, softer shades to suit the daytime setting — Lavender, Mint Green, Powder Blue, Champagne Gold, or Peach. Please avoid Red, as it's traditionally the bride's colour.",
          },
          {
            p: "**Reception (Evening):** The most formal event. Men in Suits, women in Cocktail Dresses or Evening Gowns. Indian, Western, or a mix — just bring the polish.",
          },
          {
            p: "New to draping a Saree, ladies? Don't worry, we can arrange for someone to help you.",
          },
          {
            p: "Comfortable footwear is key — you'll be standing, dancing, and may need to slip shoes on and off. Skip the stilettos, embrace block heels or dressy flats. For guys, you can buy fancy footwear in India (Mojaris), or bring your own loafers. Want to rock your Samba bowling shoes? Go for it!",
          },
        ],
      },
      {
        question: "Is there any dressing etiquette?",
        answer: [
          {
            p: "**Colours to avoid:** White is associated with mourning in Indian culture, black is considered inauspicious at celebrations, and red is generally reserved for the bride. When in doubt — go colourful. You genuinely cannot overdress at an Indian wedding.",
          },
          {
            p: "For the wedding ceremony, please keep shoulders and knees covered as a sign of respect during the rituals.",
          },
          {
            p: "Unsure about an outfit or colour? Send us a photo and we'll happily advise.",
          },
        ],
      },
      {
        question: "Where can I shop?",
        answer: [
          {
            p: "Mumbai is a shopper's paradise and caters to every budget — whether you're looking for something high-end or beautifully affordable, you'll find it here.",
          },
          {
            p: "With the incredible variety and value available, we'd recommend purchasing your outfits rather than hassling with rentals. You'll end up with a stunning piece you can treasure and rewear long after the wedding. There's a wide range of stores nearby that cater to wedding outfits.",
          },
          {
            p: "For inspiration, please checkout some Indian wedding outfits for guests men/women on Pinterest.",
          },
        ],
      },
      {
        question: "Will there be anyone to assist us in shopping?",
        answer: [
          {
            p: "We'll be reaching out to you privately to help coordinate your shopping — whether that's recommending the right stores, arranging a guided shopping trip, or helping you find exactly what you need. You're in great hands!",
          },
        ],
      },
    ],
  },
  {
    title: "Food & Drink",
    items: [
      {
        question:
          "Will there be non-vegetarian food and alcohol? Will the food be spicy?",
        answer: [
          {
            p: "All wedding meals across the three days will be exclusively vegetarian, and trust us, Indian vegetarian food is an experience in itself — you won't miss a thing! That said, if you need your morning eggs or a non-veg fix, the breakfast buffets at both hotels will have non-vegetarian options to start your day right. Restaurants around Mumbai also have wonderful global cuisine if you're craving something non-veg.",
          },
          {
            p: "As for alcohol, availability will vary by ceremony — some informal events will serve drinks, others won't. We'll share the details in the itinerary closer to the date so you know what to expect each evening.",
          },
          {
            p: "We can definitely arrange special non-spicy versions of some dishes for sensitive stomachs.",
          },
        ],
      },
      {
        question: "What if I have dietary restrictions or allergies?",
        answer: [
          {
            p: "We're happy to accommodate dietary restrictions and allergies. Please let us know in advance via the RSVP so we can coordinate with our caterers. Whether it's Gluten-Free, Nut-Free, Dairy-Free, Jain, or any other requirement, we want to make sure you enjoy every meal worry-free.",
          },
        ],
      },
      {
        question: "Is it safe to drink the tap water?",
        answer: [
          {
            p: "No — we strongly recommend drinking only bottled or filtered water during your stay. Bottled water will be readily available at the hotels and at all wedding venues. As a general rule, also avoid ice from street vendors or local restaurants, though all ice and water served at our wedding events will be completely safe.",
          },
        ],
      },
    ],
  },
  {
    title: "Travel & Logistics",
    items: [
      {
        question: "Do I need a visa to travel to India?",
        answer: [
          {
            p: "Yes — both American and European passport holders require a visa to enter India. The easiest option is an e-Visa, which can be applied for online through the official Indian e-Visa portal. We recommend applying at least 4–6 weeks before travel to avoid any last-minute stress. The process is straightforward, but processing times can vary, so don't leave it to the last minute!",
          },
        ],
      },
      {
        question:
          "Are there any additional requirements at Mumbai airport during immigration?",
        answer: [
          {
            p: "Yes — all international travellers are required to fill out an Arrival Card before clearing immigration; these are typically handed out on the flight or available at the immigration counters.",
          },
          {
            p: "Make sure you have a printed or digital copy of your e-Visa approval, your return flight ticket, and your hotel accommodation details handy, as immigration officers may ask to see them. We'd also recommend keeping our contact details on hand in case they ask for a local reference.",
          },
        ],
      },
      {
        question: "Is transportation provided between events?",
        answer: [
          {
            p: "We don't have an answer to this just yet, unfortunately — we'll get back to you on this closer to the event dates.",
          },
        ],
      },
      {
        question: "Do I need any vaccinations before traveling to India?",
        answer: [
          {
            p: "We recommend consulting your doctor or a travel health clinic at least 4–6 weeks before your trip. They'll advise you based on your personal health history and the latest recommendations for travel to India. It's a quick conversation that gives you peace of mind for the journey.",
          },
        ],
      },
      {
        question: "Will I need Indian currency, and where can I exchange money?",
        answer: [
          {
            p: "India has become incredibly card and digital-payment friendly, so you won't need to carry large amounts of cash. Most restaurants, shops, and malls accept international credit and debit cards. For smaller purchases, street shopping, or tipping, it's handy to have some Indian Rupees on you — the easiest place to exchange is right at Mumbai Airport upon arrival.",
          },
          {
            p: "Sick of paying by card, PayPal, or the good old German cash system? You can also pay by scanning QR codes at shops and even on the street. Foreign tourists can use the **Unified Payments Interface (UPI)** without a local bank account via UPI One World prepaid wallets, which let you load funds using international cards and scan standard merchant QR codes nationwide.",
          },
          {
            list: [
              "**No local bank needed** — you don't need an Indian bank account to make instant digital payments.",
              "**Supported apps** — download a partner app like Cheq UPI for Foreigners & NRIs or Mony.",
              "**Mandatory KYC** — complete in-person verification with your passport and valid Indian visa at designated airport counters, partner branches, or verified agents.",
              "**Loading funds** — top up your wallet balance in Indian Rupees (INR) using your international credit, debit, or forex card.",
              "**Restrictions** — it only works for merchant payments (peer-to-peer transfers aren't allowed), and the app must be used within Indian borders.",
              "**Refunds** — unused balances can be refunded to your original payment source or converted back when you leave.",
            ],
          },
        ],
      },
      {
        question: "Will there be Wi-Fi? Should I get a local SIM card?",
        answer: [
          {
            p: "It's the 21st century — of course there will be Wi-Fi! Both hotels and all wedding venues will have Wi-Fi access.",
          },
          {
            p: "However, for reliable connectivity on the go — navigation, Uber, WhatsApp, and all the Instagram Stories you'll be posting — we'd recommend getting an eSIM before you travel. Providers like Airalo or Holafly offer affordable India eSIM plans that activate instantly, with no physical SIM swap needed. Just make sure your phone supports eSIM, and you'll be connected the moment you land.",
          },
        ],
      },
    ],
  },
];

function renderInline(text) {
  const nodes = [];
  const regex = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let match;
  let key = 0;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }

    if (match[1] !== undefined) {
      nodes.push(<strong key={key++}>{match[1]}</strong>);
    } else {
      const [, , label, href] = match;
      const isExternal = !href.startsWith("mailto:") && href !== "#";

      nodes.push(
        <a
          key={key++}
          href={href}
          {...(isExternal ? { target: "_blank", rel: "noreferrer" } : {})}
        >
          {label}
        </a>
      );
    }

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
}

function renderAnswer(answer) {
  return answer.map((block, index) => {
    if (block.list) {
      return (
        <ul className="faq-item__list" key={index}>
          {block.list.map((entry, entryIndex) => (
            <li key={entryIndex}>{renderInline(entry)}</li>
          ))}
        </ul>
      );
    }

    return <p key={index}>{renderInline(block.p)}</p>;
  });
}

function FAQItem({ item, isOpen, onToggle, panelId, buttonId }) {
  return (
    <article className={`faq-item ${isOpen ? "faq-item--open" : ""}`}>
      <h4 className="faq-item__heading">
        <button
          id={buttonId}
          className="faq-item__button"
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
        >
          <span>{item.question}</span>

          <span className="faq-item__icon" aria-hidden="true">
            <i />
            <i />
          </span>
        </button>
      </h4>

      <div
        id={panelId}
        className="faq-item__answer-wrapper"
        role="region"
        aria-labelledby={buttonId}
      >
        <div className="faq-item__answer">{renderAnswer(item.answer)}</div>
      </div>
    </article>
  );
}

export default function FAQSection() {
  const [openKey, setOpenKey] = useState("0-0");

  const handleToggle = (key) => {
    setOpenKey((currentKey) => (currentKey === key ? null : key));
  };

  return (
    <section className="faq-section section-ambient-bg" id="faq">
      <div className="section-ambient-wash section-ambient-wash--left" aria-hidden="true" />
      <div className="section-ambient-wash section-ambient-wash--right" aria-hidden="true" />
      <div className="section-ambient-mandala" aria-hidden="true" />

      <div className="faq-section__inner">
        <header className="faq-section__intro">
          <p className="faq-section__eyebrow">Before the Celebrations</p>

          <h2>
            Frequently Asked
            <span>Questions</span>
          </h2>

          <div className="faq-section__ornament" aria-hidden="true">
            <span />
            <i>✦</i>
            <span />
          </div>

          <p className="faq-section__description">
            A few helpful details to make your journey and celebration with us
            as effortless as possible.
          </p>
        </header>

        <div className="faq-section__groups">
          {faqCategories.map((category, categoryIndex) => (
            <div className="faq-section__group" key={category.title}>
              <h3 className="faq-section__category">{category.title}</h3>

              <div className="faq-section__accordion">
                {category.items.map((item, itemIndex) => {
                  const key = `${categoryIndex}-${itemIndex}`;

                  return (
                    <FAQItem
                      key={item.question}
                      item={item}
                      isOpen={openKey === key}
                      onToggle={() => handleToggle(key)}
                      panelId={`faq-panel-${key}`}
                      buttonId={`faq-button-${key}`}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
