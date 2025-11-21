

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        findTalent: "Find Talent",
        forCompanies: "For Companies",
        forTalent: "For Talent",
        pricing: "Pricing",
        contact: "Contact",
        dashboard: "Dashboard",
        profile: "Profile",
        logout: "Logout",
      },

      hero: {
        title: "Connecting Global Companies with Top AI & Tech Talent",
        subtitle:
          "Hire smarter and faster with validated skills, AI-driven matching, and enterprise-grade security.",
        findTalent: "Find Your Talent",
        joinTalent: "Join as Talent",
        getStarted: "Get Started",
      },

      whyChoose: {
        title: "Why Choose ",
        subtitle:
          "We combine AI precision with human expertise to help you hire the right talent 3x faster and with confidence.",
      },

      features: {
        database: {
          title: "Vast Talent Database",
          description:
            "50,000+ vetted AI & tech professionals ready to deliver on your projects today.",
        },
        testing: {
          title: "Advanced Testing",
          description:
            "We test real skills on real projects - so you only interview top performers.",
        },
        security: {
          title: "Secure & Compliant",
          description:
            "Enterprise-grade security & full GDPR compliance your data stays protected.",
        },
        matching: {
          title: "Smart Matching",
          description:
            "AI-powered smart matching - the right talent, the right culture, the right time.",
        },
      },

      howItWorks: {
        title: "How It",
        highlight: "Works",
        subtitle:
          "A fast, effective hiring process designed for tech-driven teams.",
        steps: {
          step1: {
            title: "Define Your Needs",
            description:
              "Tell us your goals, team culture, and requirements.",
          },
          step2: {
            title: "AI Matching",
            description:
              "Instantly get the best-fit candidates from our vetted talent pool.",
          },
          step3: {
            title: "Connect & Hire",
            description:
              "Interview with confidence and build your team without delays.",
          },
        },
      },

      trusted: {
        title: "Trusted by Leading Companies",
        subtitle:
          "Trusted by Innovators Worldwide – From startups to enterprises, Nebula helps companies scale faster with top AI & tech talent.",
      },

      cta: {
        title: "Ready to Find Your Perfect Match?",
        subtitle:
          "Hire Smarter. Scale Faster. Join thousands of global companies already building stronger teams with Nebula.",
        button1: "Get Started",
        button2: "Contact Sales",
      },

   
      forTalent: {
        hero: {
          title: "Your Next Big Career Move Starts Here",
          subtitle:
            "Join the most selective network of AI & tech professionals. Be discovered by top companies actively searching for your unique skills.",
          button: "Join as Talent",
        },
        stats: {
          companies: "Active Companies",
          placements: "Successful Placements",
          satisfaction: "Satisfaction Rate",
          countries: "Countries Served",
        },
        benefitsSection: {
          title: "Why Choose Our Platform?",
          subtitle:
            "We connect exceptional talent with extraordinary opportunities",
        },
        benefits: {
          global: {
            title: "Global Opportunities",
            description:
              "Remote and international roles with world-leading companies.",
          },
          skill: {
            title: "Skill Validation",
            description:
              "Showcase your expertise with verified skills and recognized certifications.",
          },
          growth: {
            title: "Career Growth",
            description:
              "Get tailored recommendations, upskill with our resources, and grow your career faster.",
          },
          flexibility: {
            title: "Flexible Work",
            description:
              "Choose between full-time, contract, or part-time opportunities that fit your lifestyle.",
          },
          rate: {
            title: "Competitive Rates",
            description:
              "Earn competitive compensation for your skills and experience level.",
          },
          match: {
            title: "Quality Matches",
            description:
              "Get matched with companies that value your specific skill set and experience.",
          },
        },
        howItWorks: {
          title: "How It Works",
          subtitle: "Four simple steps to unlock your career potential",
          steps: {
            apply: {
              title: "Apply",
              description:
                "Fill out our simple application form with your skills and experience",
            },
            evaluate: {
              title: "Get Evaluated",
              description:
                "Our team will review your profile and may contact you for further evaluation",
            },
            match: {
              title: "Get Matched",
              description:
                "We'll connect you with companies looking for your specific skill set",
            },
          },
        },
        cta: {
          title: "Ready to Take the Next Step?",
          subtitle:
            "Join thousands of talented professionals who have found their dream opportunities through our platform.",
          button: "Join as Talent",
        },
      },

      forCompanies: {
        hero: {
          headline: {
            line1: "Find the best AI and",
            line2: "Tech Talent",
            line3: "Faster than ever",
            single: "Hire Elite AI & Tech Talent Faster Than Ever",
          },
          subtitle:
            "Connect with pre-screened, top-tier professionals who can drive your innovation forward.",
          button1: "Start Hiring Now",
          button2: "Schedule Demo",
          dashboard: "Talent Acquisition Dashboard",
          stat1: "50k+ Talents",
          stat2: "98% Match Rate",
        },

        benefitsSection: {
          title: "The Choice of Global Leaders",
          subtitle: "Make the right choice, reach results faster",
        },

        featuresSection: {
          part1: "Everything You Need to",
          highlight: "Hire Smart",
          subtitle:
            "Comprehensive tools and services designed for modern hiring teams.",
        },

        cta: {
          title: "Ready to Build Your Dream Team?",
          subtitle:
            "Hundreds of companies already trust Nebula - now it’s your turn.",
             "button1": "Start Hiring Now",
            "button2": "Schedule Demo"
        },

        benefits: {
          preScreened: {
            title: "Pre-Screened Talent Pool",
            description:
              "Access 50,000+ vetted AI and tech professionals ready to contribute from day one.",
          },
          skillTesting: {
            title: "Advanced Skill Testing",
            description:
              "Comprehensive technical assessments and real-world project evaluations.",
          },
          secure: {
            title: "Secure & Compliant",
            description:
              "Enterprise-grade security with GDPR compliance and data protection.",
          },
          aiMatching: {
            title: "AI-Powered Matching",
            description:
              "Smart algorithms find the perfect fit for your team culture and requirements.",
          },
        },
"stats": {
  "successRate": "Success Rate",
  "timeToHire": "Average Time to Hire",
  "costReduction": "Cost Reduction",
  "clientSatisfaction": "Client Satisfaction",

  "successRateValue": "92%",
  "timeToHireValue": "14 days",
  "costReductionValue": "60%",
  "clientSatisfactionValue": "98%"
},

        features: {
          talentDatabase: {
            title: "Talent Database Access",
            description:
              "Search and filter through our extensive database of pre-vetted candidates.",
          },
          testingPlatform: {
            title: "Advanced Testing Platform",
            description:
              "Create custom technical tests and assessments for your specific needs.",
          },
          accountManager: {
            title: "Dedicated Account Manager",
            description:
              "Personal support throughout your hiring journey.",
          },
          contracts: {
            title: "Contract Management",
            description:
              "Streamlined contract creation and e-signature integration.",
          },
          analytics: {
            title: "Analytics Dashboard",
            description:
              "Track hiring metrics and optimize your recruitment process.",
          },
          support: {
            title: "Priority Support",
            description: "24/7 support with guaranteed response times.",
          },
        },
      },

"findTalent": {
  "title": {
    "part1": "Hire Bold",
    "highlight": "Hire Brilliant"
  },
  "subtitle": "Meet the minds shaping tomorrow’s technology"
},

      talentSearch: {
        subtitle: "Meet the minds shaping tomorrow’s technology",
        noResults: "No talents found",
        noResultsDesc: "Try adjusting your filters or search criteria",
        resetFilters: "Reset Filters",
      },

      filters: {
        skills: "Skills (React, Python, AI/ML...)",
        seniority: "Seniority",
        seniority_any: "Any level",
        junior: "Junior",
        mid: "Mid-Level",
        senior: "Senior",
        lead: "Lead",
        principal: "Principal",

        location: "Location",
        location_any: "Any location",
        remote: "Remote",
        usa: "USA",
        europe: "Europe",
        asia: "Asia",

        minSalary: "Min $",
        maxSalary: "Max $",

        availability: "Availability",
        any: "Any",
        available_now: "Available Now",
        available_2w: "Available in 2 weeks",
        available_1m: "Available in 1 month",

        search: "Search",
        searching: "Searching...",
      },
"contact": {
  "title": "Get in",
  "highlight": "Touch",
 

  "formTitle": "Send us a message",
  "name": "Your Name",
  "email": "Your Email",
  "company": "Company",
  "message": "Message",
  "send": "Send Message",

  "emailLabel": "Email",
  "phoneLabel": "Phone",
  "officeLabel": "Office",

  "emailValue": "Contact@nebulahub.ai",
  "phoneValue": "+995 579 58 88 59",
  "officeValue": "Kutaisi, St. Nino N4"
},

      footer: {
        platform: "Platform",
        resources: "Resources",
        legal: "Legal",
        helpCenter: "Help Center",
        blog: "Blog",
        apiDocs: "API Documentation",
        caseStudies: "Case Studies",

        privacy: "Privacy Policy",
        terms: "Terms of Service",
        gdpr: "GDPR Compliance",
        cookies: "Cookie Policy",

        copyright: "© 2024 Nebula Platform. All rights reserved.",
        gdprCompliant: "GDPR Compliant",

        contactEmail: "contact@nebula.ai",
        contactPhone: "+995 579 58 88 59",
        location: "kutaisi, St Nino N4",
      },
    },
  },

  
  ka: {
    translation: {
      nav: {
        home: "მთავარი",
        findTalent: "ტალანტის მოძიება",
        forCompanies: "კომპანიებისთვის",
        forTalent: "ტალანტებისთვის",
        pricing: "ფასები",
        contact: "კონტაქტი",
        dashboard: "პანელი",
        profile: "პროფილი",
        logout: "გასვლა",
      },

      hero: {
        title: "მსოფლიო დონის ტალანტები გლობალური კომპანიებისთვის",
        subtitle:
          "AI-ით მართული სიზუსტე, დაჩქარებული პროცესი და საიმედო კადრები.",
        findTalent: "დიწყე კანდიდატების ძიება",
        joinTalent: "შეუერთდი ტალანტების ქსელს",
        getStarted: "დაწყება",
      },

      whyChoose: {
        title: "რატომ უნდა აირჩიო ",
        subtitle:
          "AI-ის სიზუსტე + ადამიანური გამოცდილება — იპოვე იდეალური ტალანტი 3-ჯერ სწრაფად და მიიღე გადაწყვეტილება თავდაჯერებულად.",
      },

      features: {
        database: {
          title: "ტალანტების მასშტაბური ბაზა",
          description:
            "50,000+ AI, IT და Tech პროფესიონალი მზად არის დაუყოვნებლივ დაგეხმაროს.",
        },
        testing: {
          title: "პრაქტიკული შეფასება",
          description:
            "ჩვენ ვამოწმებთ უნარებს რეალურ პროექტებზე — შედეგს იღებ მხოლოდ საუკეთესო სპეციალისტებისგან.",
        },
        security: {
          title: "უსაფრთხოება და GDPR შესაბამისობა",
          description:
            "საერთაშორისო უსაფრთხოება და GDPR შესაბამისობა — შენი მონაცემები დაცულია.",
        },
        matching: {
          title: "ჭკვიანური შერჩევა",
          description: "AI ალგორითმი პოულობს საუკეთესო ტალანტს.",
        },
      },

      howItWorks: {
        title: "როგორ",
        highlight: "მუშაობს",
        subtitle: "სწრაფი & ეფექტური შერჩევის პროცესი ტექნოლოგიური გუნდებისთვის.",
        steps: {
          step1: {
            title: "მოთხოვნების განსაზღვრა",
            description:
              "მოგვიყევი შენი მიზნების, გუნდის კულტურის და საჭიროებების შესახებ.",
          },
          step2: {
            title: "AI შერჩევა",
            description:
              "მაშინვე მიიღე საუკეთესო კანდიდატები ჩვენი ტალანტების ბაზიდან.",
          },
          step3: {
            title: "დაუკავშირდი & დაიქირავე",
            description:
              "ინტერვიუები სრული თავდაჯერებულობით — ააშენე ძლიერი გუნდი.",
          },
        },
      },

      trusted: {
        title: "ინოვატორებისა და ლიდერების არჩევანი",
        subtitle: "არ გამოტოვო შენი იდეალური კანდიდატი!",
      },

      cta: {
        title: "გსურს იპოვო შენი იდეალური გუნდის წევრი?",
        subtitle: "გაერთიანდი კომპანიებთან, რომლებიც უკვე გვენდობიან.",
        button1: "დაიწყე შერჩევა",
        button2: "დაგვიკავშირდი",
      },


      forTalent: {
        hero: {
          title: "შენი კარიერული წინსვლა იწყება აქ",
          subtitle:
            "შემოუერთდი საუკეთესო AI და Tech ექსპერტების ქსელს — აღმოგაჩენენ კომპანიები, რომლებიც ზუსტად შენს უნარებს ეძებენ.",
          button: "დარეგისტრირდი",
        },
        stats: {
          companies: "აქტიური დამსაქმებლები",
          placements: "წარმატებული დაქირავებები",
          satisfaction: "კმაყოფილების მაჩვენებელი",
          countries: "გლობალური დაფარვა",
        },
        benefitsSection: {
          title: "რატომ უნდა აირჩიო ჩვენი პლატფორმა?",
          subtitle:
            "ჩვენ ვაერთიანებთ გამორჩეულ ტალანტებს გამორჩეულ შესაძლებლობებთან",
        },
        benefits: {
          global: {
            title: "გლობალური შესაძლებლობები",
            description: "დისტანციური პოზიციები წამყვან კომპანიებში.",
          },
          skill: {
            title: "უნარების ვალიდაცია",
            description: "დაადასტურე ცოდნა სერთიფიკატებით და ტესტირებით.",
          },
          growth: {
            title: "კარიერული ზრდა",
            description:
              "მიიღე რეკომენდაციები და განვითარდი სწრაფად და ეფექტურად.",
          },
          flexibility: {
            title: "მოქნილი სამუშაო",
            description:
              "აირჩიე სრულ/ნახევარ განაკვეთზე ან კონტრაქტორი პოზიციები.",
          },
          rate: {
            title: "კონკურენტული ანაზღაურება",
            description:
              "მიიღე შენს გამოცდილებასა და უნარებზე მორგებული ჰონორარი.",
          },
          match: {
            title: "ზუსტი შეთავსება",
            description:
              "დაგაკავშირებთ კომპანიებთან, რომლებიც ეძებენ შენს უნარებს.",
          },
        },
        howItWorks: {
          title: "როგორ მუშაობს",
          subtitle:
            "ოთხი მარტივი ნაბიჯი შენი კარიერული მიზნების მისაღწევად",
          steps: {
            apply: {
              title: "განაცხადი",
              description:
                "შეავსე მარტივი ფორმა შენი გამოცდილების შესახებ.",
            },
            evaluate: {
              title: "შეფასება",
              description: "AI + HR ექსპერტები შეაფასებენ შენს პროფილს.",
            },
            match: {
              title: "შეთავსება",
              description:
                "დაგაკავშირებთ კომპანიებთან, რომლებიც ეძებენ ასეთ უნარებს.",
            },
          },
        },
        cta: {
          title: "მზად ხარ შემდეგი ნაბიჯისთვის?",
          subtitle:
            "აირჩიე გზები, რომ იპოვო შენი კარიერული შესაძლებლობები.",
          button: "დარეგისტრირდი ტალანტად",
        },
      },

    
      forCompanies: {
        hero: {
          headline: {
            line1: "იპოვე საუკეთესო AI და",
            line2: "Tech ტალანტი",
            line3: "ყველაზე სწრაფად",
            single:
              "იპოვე საუკეთესო AI & Tech ტალანტი ყველაზე სწრაფად",
          },
          subtitle:
            "გაეცანი გადამოწმებულ AI და Tech ტალანტებს, რომლებიც მზად არიან გაზარდონ შენი ბიზნეს შედეგები.",
          button1: "დაიწყე ტალანტის მოძიება",
          button2: "დაგეგმე დემო",
          dashboard: "ტალანტების მართვის დაფა",
          stat1: "50k+ ტალანტი",
          stat2: "98% დამთხვეული",
        },

        benefitsSection: {
          title: "გლობალური ლიდერების არჩევანი",
          subtitle: "აირჩიე მარტივად, მიაღწიე სწრაფად",
        },

        featuresSection: {
          part1: "ყველაფერი, რაც გჭირდება",
          highlight: "სწორი კანდიდატის შერჩევისთვის",
          subtitle:
            "ინოვაციური ინსტრუმენტები & სერვისები, რომლებიც შერჩევას მარტივს და სწრაფს ხდის.",
        },
"stats": {
  "successRate": "წარმატების მაჩვენებელი",
  "timeToHire": "დასაქმების საშუალო დრო",
  "costReduction": "ხარჯების შემცირება",
  "clientSatisfaction": "კლიენტის კმაყოფილება",

  "successRateValue": "92%",
  "timeToHireValue": "14 დღე",
  "costReductionValue": "60%",
  "clientSatisfactionValue": "98%"
},




        cta: {
          title: "მზად ხარ შენი ოცნების გუნდის ასაწყობად?",
          subtitle:
            "უკვე ათასობით კომპანია გვენდობა — ახლა შენი დროა!",
             "button1": "დაიწყე შერჩევა",
            "button2": "დაგვიკავშირდი"
        },

        benefits: {
          preScreened: {
            title: "ვერიფიცირებული პროფესიონალები",
            description:
              "მიიღე წვდომა ათიათასობით AI და Tech სპეციალისტზე.",
          },
          skillTesting: {
            title: "პრაქტიკული შეფასება",
            description:
              "რეალური პროექტებით გადამოწმებული ცოდნა.",
          },
          secure: {
            title: "დაცული პროცესი",
            description:
              "მაქსიმალური უსაფრთხოება + GDPR შესაბამისობა.",
          },
          aiMatching: {
            title: "ჭკვიანი შერჩევა",
            description:
              "AI ალგორითმი პოულობს გუნდისთვის საუკეთესო შეთავსებას.",
          },
        },

        features: {
          talentDatabase: {
            title: "ყველა ტალანტი ერთ სივრცეში",
            description:
              "მოკლე დროში მოძებნე საჭირო პროფესიონალი.",
          },
          testingPlatform: {
            title: "მოქნილი ტესტირების პლატფორმა",
            description: "შეაფასე კანდიდატები შენზე მორგებული ტესტებით.",
          },
          accountManager: {
            title: "პირადი მენეჯერი",
            description:
              "ისარგებლე პერსონალური მხარდაჭერით.",
          },
          contracts: {
            title: "კონტრაქტების მართვა",
            description:
              "შექმენი & მოაწერინე კონტრაქტები მარტივად.",
          },
          analytics: {
            title: "ანალიტიკური პანელი",
            description:
              "აკონტროლე პროცესები & გააუმჯობესე შერჩევის სტრატეგია.",
          },
          support: {
            title: "მხარდაჭერის სერვისი",
            description:
              "24/7 დახმარება ჩვენი გუნდისგან.",
          },
        },
      },

      footer: {
        platform: "პლატფორმა",
        resources: "რესურსები",
        legal: "იურიდიული",
        helpCenter: "დახმარების ცენტრი",
        blog: "ბლოგი",
        apiDocs: "API დოკუმენტაცია",
        caseStudies: "ქეის სტადიები",
        privacy: "კონფიდენციალურობა",
        terms: "წესები",
        gdpr: "GDPR შესაბამისობა",
        cookies: "ქუქი პოლიტიკა",

        copyright:
          "© 2024 Nebula Platform. ყველა უფლება დაცულია.",
        gdprCompliant: "GDPR შესაბამისი",

        contactEmail: "contact@nebula.ai",
        contactPhone: "+995 579 58 88 59",
        location: "ქუთაისი წმინდა ნინოს N4",
      },
      "contact": {
  "title": "დაგვიკავშირდი",
  "highlight": "ახლავე",
  

  "formTitle": "მოგვწერე შეტყობინება",
  "name": "შენი სახელი",
  "email": "შენი ელფოსტა",
  "company": "კომპანია",
  "message": "შეტყობინება",
  "send": "შეტყობინების გაგზავნა",

  "emailLabel": "ელფოსტა",
  "phoneLabel": "ტელეფონი",
  "officeLabel": "ოფისი",

  "emailValue": "contact@nebula.ai",
  "phoneValue": "+995 579 58 88 59",
  "officeValue": "ქუთაისი წმინდა ნინოს N4"
},
"findTalent": {
  "title": {
    "part1": "დაიქირავე თამამად",
    "highlight": "დაიქირავე გონივრულად"
  },
  "subtitle": "გაიცანი ადამიანები, რომლებიც ქმნიან ხვალინდელ ტექნოლოგიებს"
},



      filters: {
        skills: "უნარები (React, Python, AI/ML...)",
        seniority: "Seniorობა",
        seniority_any: "ნებისმიერი დონე",
        junior: "უმცროსი",
        mid: "საშუალო",
        senior: "უფროსი",
        lead: "ლიდი",
        principal: "პრინციპალი",

        location: "ადგილმდებარეობა",
        location_any: "ნებისმიერი ადგილი",
        remote: "დაშორებით",
        usa: "აშშ",
        europe: "ევროპა",
        asia: "აზია",

        minSalary: "მინ $",
        maxSalary: "მაქს $",

        availability: "ხელმისაწვდომობა",
        any: "ნებისმიერი",
        available_now: "მყისიერად ხელმისაწვდომი",
        available_2w: "ხელმისაწვდომია 2 კვირაში",
        available_1m: "ხელმისაწვდომია 1 თვეში",

        search: "ძებნა",
        searching: "მიმდინარეობს ძებნა...",
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
    },
  });

export default i18n;
