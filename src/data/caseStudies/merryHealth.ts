import type { CaseStudy } from './types';
import cover from '@/assets/merry-health-cover.png';
import currentFlow from '@/assets/merry-current-flow.png';
import idealFlow from '@/assets/merry-ideal-flow.png';
import proposedWorkflow from '@/assets/merry-proposed-workflow.jpg';
import whatsappHospital from '@/assets/merry-whatsapp-hospital.png';
import whatsappPatient from '@/assets/merry-whatsapp-patient.png';
import hifiTracking from '@/assets/merry-hifi-tracking.png';
import hifiDashboard from '@/assets/merry-hifi-dashboard.png';
import deckHandover from '@/assets/merry-deck-handover.jpg';
import deckDriverSms from '@/assets/merry-deck-driver-sms.jpg';
import deckFamilyFallback from '@/assets/merry-deck-family-fallback.jpg';
import deckParallelRequests from '@/assets/merry-deck-parallel-requests.jpg';

export const merryHealth: CaseStudy = {
  slug: 'merry-health',
  title: 'Merry Health',
  headline:
    'Turning the WhatsApp chats that ambulance rides already ran on into a system that keeps a record',
  qualifier: 'Apprenticeship',
  year: '2025',
  status: 'concept',
  tagline: 'Healthcare . Sending ambulances . Smaller cities in India',
  cover,

  intro: [
    'Merry Health arranges emergency ambulance rides between hospitals, drivers and patients, mostly in smaller Indian cities where not many people use digital tools and hospital staff are very busy. Hospital admins relied on WhatsApp in emergencies. The dashboard was rarely used.',
    'Four groups of people were involved, and nobody had the same information. A patient’s family calls in a panic and describes a condition they cannot judge. A hospital admin passes it to a driver in a separate chat. The driver arrives at an address with no floor number. The ride is closed, if at all, when somebody remembers. Every hand-off lost information, added minutes, and left nothing behind to look back on.',
  ],

  meta: [
    { label: 'Role', value: 'Product Designer' },
    { label: 'Type of project', value: 'An apprenticeship with Career Reactor, for the client Merry Health' },
    { label: 'Timeline', value: '2025' },
    { label: 'Team', value: 'Team of 5 designers' },
    { label: 'Stage', value: 'Proposed system, researched not rolled out' },
    { label: 'Area', value: 'Emergency healthcare operations' },
  ],

  sections: [
    {
      kind: 'pitch',
      id: 'pitch',
      label: 'Quick pitch',
      footnote:
        'Short on time? The pitch above is the whole story. The journey below is how it really went.',
      summary: {
        problems:
          'Four groups work together with no shared record. An unclear address, a missing floor number, a trip nobody marked as started. Information gets lost at every hand-off, and looking back at what went wrong is impossible because nothing was written down.',
        solution:
          'Collecting details step by step inside WhatsApp, not next to it, a dashboard that gives hospital admins the full record of every ride, and backup plans for the problems that stop ambulances getting sent. A ride only closes after a checked handover.',
        why:
          'Because hospital admins already relied on WhatsApp in emergencies. Asking busy hospital staff in smaller cities to learn a new tool during an emergency is a design that fails on the first day. The system had to live inside the app people already trusted, and create organised records just by being used.',
        resultsLabel: 'Intended results',
        results:
          'Taking requests without needing a call to ask questions, every trip leaving a record you can check, and a dashboard that still works when WhatsApp fails. Nothing was measured. An idea only earns its claims by naming the number that would prove it wrong, so each hoped-for result here comes with its proof.',
      },
    },

    {
      kind: 'journey',
      id: 'journey',
      label: 'The full journey',
      question:
        'How do you make an emergency process easy to follow, without asking anyone in it to learn a new tool?',
      blocks: [
        {
          kind: 'prose',
          body: [
            'We checked every piece of information in the process against three questions: who owns it, who starts it, and what choice it helps someone make. That covered four groups of people across every step of a ride. For each piece of information we wrote down where it comes from, who uses it, what it is for, how often it appears, and how it goes wrong.',
            'What we found pointed the opposite way to what we were asked to do. WhatsApp was the only part of the system that everybody used, and that was because it asked nothing of them. No login, no training, no strong internet. It was not a workaround. It was the thing everything ran on.',
          ],
        },
        {
          kind: 'quote',
          text: 'WhatsApp was not the problem. It was the only thing that worked.',
        },
        {
          kind: 'points',
          items: [
            {
              title: 'The dashboard was not designed for emergencies',
              body: '“Add Ride” was too slow, so admins skipped fields or went back to WhatsApp.',
            },
            {
              title: 'Ride details were scattered',
              body: 'Spread across chats, calls and people’s memories, so records were missing or wrong.',
            },
            {
              title: 'Nobody could see what was happening live',
              body: 'Nobody could answer “where is it now?” without making a phone call.',
            },
            {
              title: 'It could not cope when it got busy',
              body: 'Several requests arriving within minutes got mixed up in the same chats.',
            },
            {
              title: 'No proper handover',
              body: 'Nothing checked that the patient was really handed over at the hospital, so rides were closed late or not at all.',
            },
          ],
        },
        {
          kind: 'figures',
          items: [
            {
              src: currentFlow,
              alt: 'A diagram of how rides were sent before, showing broken hand-offs between four groups of people',
              caption: 'Fig 1. How it worked before. Four groups of people, no shared information.',
              reveal: true,
            },
          ],
          width: 'wide',
        },
      ],
    },

    {
      kind: 'step',
      id: 'step-01',
      index: '01',
      nav: '01 Step-by-step questions',
      problem: 'Typing in free text lost information at the very first hand-off',
      intervention: 'so taking requests became step-by-step questions inside WhatsApp',
      blocks: [
        {
          kind: 'prose',
          body: [
            'Information was not lost because people were careless. It was lost because a scared caller was being asked open questions. Simple step-by-step questions replaced free text, in the app people already used. The system asks for five things: location, patient condition, patient contact, ambulance type and facilities required. If one is missing, it asks for just that one.',
            'Several requests can arrive within minutes. Each one gets its own Case ID and its own updates, so none get mixed up.',
            'Building inside WhatsApp, and not next to it, meant living with its limits, and we chose that on purpose.',
          ],
        },
        {
          kind: 'tradeoffs',
          items: [
            {
              title: 'Build inside WhatsApp, not next to it',
              cost: 'We had to live with its limits. No fancy screens, no promise that messages arrive, no real checking of answers.',
              gain: 'Almost no effort to start using it, for staff with no time to learn a tool.',
            },
            {
              title: 'Ask only for what is needed, not the full record',
              cost: 'Fewer numbers to study, and weaker reports.',
              gain: 'Hand-offs that still work while somebody is panicking.',
            },
          ],
        },
        {
          kind: 'figures',
          items: [
            {
              src: deckParallelRequests,
              alt: 'The hospital admin’s WhatsApp chat with several requests at once, each with its own Case ID, the system asking for a missing patient contact, and the list of five details to send',
              caption: 'Fig 2. Several requests at once. Each gets its own Case ID.',
            },
            {
              src: whatsappHospital,
              alt: 'The read-only announcement group for Felix Hospital, showing case MH-REQ-1342 posted step by step from request received to request closed',
              caption: 'Fig 3. The read-only hospital group. Everyone gets the same updates, with no replies or clutter.',
            },
            {
              src: whatsappPatient,
              alt: 'A WhatsApp chat showing how the patient’s family gets ambulance updates',
              caption: 'Fig 4. The family’s side of the same ride.',
            },
          ],
        },
      ],
    },
    {
      kind: 'step',
      id: 'step-02',
      index: '02',
      nav: '02 When things go wrong',
      problem: 'In an emergency system, things going wrong is normal',
      intervention: 'so we designed for things going wrong before designing for when everything goes right',
      blocks: [
        {
          kind: 'prose',
          body: [
            'We listed six ways things could go wrong: a WhatsApp message not arriving, GPS not working, unclear or mixed-up information, a driver who cannot be reached, several requests at once, and a hospital group that cannot be reached. We planned for things to keep working, not for them to be perfect. So each problem needed a backup plan, a person in charge and a warning message, before any screen needed a design.',
          ],
        },
        {
          kind: 'points',
          items: [
            {
              title: 'A WhatsApp message does not arrive',
              body: 'It tries again, then sends a text message, then warns on the dashboard, so a failed message never goes unnoticed. The operations team is in charge.',
            },
            {
              title: 'GPS stops working',
              body: 'Tracking switches to arrival times typed in by hand, and the ride is marked on the dashboard. The system makes the switch, and the operations team does the updates.',
            },
            {
              title: 'Information is unclear or mixed up',
              body: 'The system replies in the same chat, asking for the one detail it is missing. A voice note or photo goes to the operations team, who fill in the record by hand.',
            },
            {
              title: 'The driver cannot be reached',
              body: 'The system keeps track of replies it is waiting for, and if there is no reply, the job goes to the next driver. A driver with no smartphone gets the job by SMS, and replies 1 to accept or 2 to reject.',
            },
            {
              title: 'The family cannot use WhatsApp',
              body: 'They get the ambulance details by SMS, plus an automated call in their own regional language.',
            },
            {
              title: 'Several requests at once',
              body: 'Each request gets its own Case ID, so the same patient is not booked twice by mistake.',
            },
            {
              title: 'A hospital group cannot be reached',
              body: 'If the system does not know a hospital’s number, the operations team picks the hospital by hand and saves the number for next time. A hospital with no WhatsApp calls Merry Health, and the trip is added to the same record.',
            },
          ],
        },
        {
          kind: 'figures',
          items: [
            {
              src: deckDriverSms,
              alt: 'The driver’s WhatsApp chat next to the SMS version for drivers without a smartphone, ending with Send 1 to accept and 2 to reject',
              caption: 'Fig 5. No smartphone? The driver gets an SMS and replies 1 or 2.',
            },
            {
              src: deckFamilyFallback,
              alt: 'The family’s WhatsApp chat next to an SMS with the same ambulance details and an automated IVR call in the regional language',
              caption: 'Fig 6. Families also get an SMS and an automated call in their own language.',
            },
          ],
        },
        {
          kind: 'figures',
          items: [
            {
              src: proposedWorkflow,
              alt: 'A diagram of the backup plans, from the hospital admin all the way to the message sent to the family',
              caption: 'Fig 7. All the backup plans, including what happens when the main way of sending messages fails.',
              reveal: true,
            },
          ],
          width: 'wide',
        },
      ],
    },
    {
      kind: 'step',
      id: 'step-03',
      index: '03',
      nav: '03 The hospital dashboard',
      problem: 'Hospital admins could not see their rides in one place',
      intervention: 'so the dashboard became the full record of every ride, for hospital admins',
      blocks: [
        {
          kind: 'prose',
          body: [
            'WhatsApp stays the fast channel. The dashboard is the full record, and it still works when WhatsApp fails. It has seven parts: home, add ride, ride list, ride details, handover, track ambulance and reports. Every part also works on a phone. Live tracking answered the “where is it now?” question that used to cost a phone call for every ride.',
            'A ride only closes after three checks: hospital staff confirmed, driver handover done, and admin verified. Then the admin presses Mark Handover. So records are no longer filled in afterwards.',
          ],
        },
        {
          kind: 'figures',
          items: [
            {
              src: hifiDashboard,
              alt: 'The hospital dashboard showing key numbers, a map of rides coming to the hospital, live ride updates and the ride list',
              caption: 'Fig 8. The hospital dashboard. Every ride coming to the hospital, in one place.',
            },
            {
              src: deckHandover,
              alt: 'The handover dialog: arrival details, three required checks for hospital staff, driver and admin, and the Mark Handover button',
              caption: 'Fig 9. Three required checks, then Mark Handover.',
            },
          ],
        },
      ],
    },
    {
      kind: 'step',
      id: 'step-04',
      index: '04',
      nav: '04 Updates sent automatically',
      problem: 'Families called the hospital because nobody had told them anything',
      intervention: 'so updates became something the system sends, not something you have to ask for',
      blocks: [
        {
          kind: 'prose',
          body: [
            'Most calls to the hospital were families asking for news nobody had given them. A way of messaging patients turned that into an update the system sends by itself, which takes work away from the admin who has the least time for it.',
          ],
        },
        {
          kind: 'figures',
          items: [
            {
              src: hifiTracking,
              alt: 'Live ambulance tracking, showing the route, the arrival time and the trip status',
              caption: 'Fig 10. Live tracking. One answer to “where is it now?”',
            },
          ],
        },
      ],
    },

    {
      kind: 'decision',
      id: 'decisions',
      label: 'What I thought about and did not do',
      items: [
        {
          option: 'The dashboard first, with WhatsApp as a backup',
          why: 'The obvious answer, and the one the product assumed. We said no because it gets it backwards. Admins already relied on WhatsApp in emergencies, and asking panicking staff to switch tools in the middle of an emergency is asking them to stop using the system.',
        },
        {
          option: 'Collect every detail when the request comes in',
          why: 'Better reports and cleaner records. We said no because every extra question is a chance for the request to get stuck. Instead, we asked only for the essentials up front, and showed a count of what is still missing so the record gets filled in.',
        },
        {
          option: 'A separate app for drivers',
          why: 'We said no for the same reason as the dashboard. Installing it and learning it are costs paid by the person who can least afford them.',
        },
      ],
    },

    {
      kind: 'outcomes',
      id: 'outcomes',
      label: 'Intended outcomes',
      heading: 'What I would measure, and what would prove it',
      blocks: [
        {
          kind: 'prose',
          body: [
            'An idea only earns its claims by naming the number that would prove it wrong. Each hoped-for result below comes with the measurement that would confirm it or end it.',
          ],
        },
        {
          kind: 'intended',
          items: [
            { outcome: 'Taking requests without calling back to ask questions', metric: 'Follow-up calls per ride' },
            { outcome: 'Every trip leaves a record you can check', metric: 'Share of trips with a start and end time recorded' },
            { outcome: 'Hand-offs still work when things go wrong', metric: 'Share of rides that still finish when GPS or WhatsApp fails' },
            { outcome: 'Busy times do not make everything fall apart', metric: 'The slowest response times compared with the usual ones' },
            { outcome: 'Step-by-step questions save the admin work', metric: 'Time from first contact to an ambulance confirmed' },
          ],
        },
        {
          kind: 'beforeAfter',
          width: 'wide',
          before: {
            src: currentFlow,
            alt: 'A diagram of how rides were sent before, showing broken hand-offs between four groups of people',
          },
          after: {
            src: idealFlow,
            alt: 'A diagram of the new way, with one shared timeline for all four groups of people',
          },
          caption:
            'Fig 11. Sending an ambulance, before and after. Four groups with no shared information, then one timeline all four read from.',
        },
      ],
      callouts: [
        {
          title: 'Scattered steps became',
          emphasis: 'one shared timeline',
          body: 'Four groups reading the same record, instead of four separate chats.',
        },
        {
          title: 'Six ways things go wrong, each with',
          emphasis: 'a person in charge',
          body: 'Backup plans designed first, because in an emergency things going wrong is normal.',
        },
        {
          title: 'Taking requests stayed',
          emphasis: 'in the app people already use',
          body: 'We added structure to WhatsApp, instead of asking people to learn a new tool.',
        },
      ],
    },

    {
      kind: 'reflection',
      id: 'reflection',
      label: 'Where I was wrong',
      blocks: [
        {
          kind: 'todo',
          body: 'Your paragraph. The strongest candidate is something the data audit overturned: an assumption about who owned a data point, a step you expected to matter that did not, or a piece of information everyone said was essential that nobody actually used.',
        },
        {
          kind: 'quote',
          text: 'The screens are only part of the answer. The rest is how the work flows, how systems connect, and what the system can and cannot do.',
        },
        {
          kind: 'prose',
          body: [
            'Real emergency systems need to keep working, not to be perfect. Design has to cope with weak signals, broken processes and people doing unexpected things. WhatsApp is the tool Indian businesses use most, so designing around it instead of against it was the whole plan.',
            'Designing for things to keep working, instead of being perfect, also changed how I decide what to build. The rest was how the work flows, the limits of connecting systems, and deciding what a system is allowed to ask of someone in a crisis.',
          ],
        },
      ],
    },
  ],
};
