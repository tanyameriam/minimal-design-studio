import type { CaseStudy } from './types';
import cover from '@/assets/merry-health-cover.png';
import currentFlow from '@/assets/merry-current-flow.png';
import idealFlow from '@/assets/merry-ideal-flow.png';
import proposedWorkflow from '@/assets/merry-proposed-workflow.jpg';
import whatsappHospital from '@/assets/merry-whatsapp-hospital.png';
import whatsappPatient from '@/assets/merry-whatsapp-patient.png';
import hifiTracking from '@/assets/merry-hifi-tracking.png';
import hifiDashboard from '@/assets/merry-hifi-dashboard.png';

export const merryHealth: CaseStudy = {
  slug: 'merry-health',
  title: 'Merry Health',
  headline:
    'Turning the WhatsApp chats that ambulance rides already ran on into a system that keeps a record',
  qualifier: 'Apprenticeship',
  year: '2026',
  status: 'concept',
  tagline: 'Healthcare . Sending ambulances . Smaller cities in India',
  cover,

  intro: [
    'Merry Health arranges emergency ambulance rides between hospitals, drivers and patients, mostly in smaller Indian cities where not many people use digital tools and hospital staff are very busy. About 95 percent of requests come in by phone or WhatsApp. Only about 5 percent come through a form on the dashboard.',
    'Four groups of people were involved, and nobody had the same information. A patient’s family calls in a panic and describes a condition they cannot judge. A hospital admin passes it to a driver in a separate chat. The driver arrives at an address with no floor number. The Merry Health team only finds out the trip happened when somebody remembers to mention it. Every hand-off lost information, added minutes, and left nothing behind to look back on.',
  ],

  meta: [
    { label: 'Role', value: 'Product Designer' },
    { label: 'Type of project', value: 'A master’s degree project with Merry Health, at JSAA' },
    { label: 'Timeline', value: '2026' },
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
          'Four groups work together across twelve steps with no shared record. An unclear address, a missing floor number, a trip nobody marked as started. Information gets lost at every hand-off, and looking back at what went wrong is impossible because nothing was written down.',
        solution:
          'Collecting details step by step inside WhatsApp, not next to it, a dashboard for the operations team that does not ask hospitals to change anything, and backup plans for the problems that stop ambulances getting sent. Only the details needed at each hand-off, not the full record.',
        why:
          'Because 95 percent of requests already come by phone or WhatsApp. Asking busy hospital staff in smaller cities to learn a new tool during an emergency is a design that fails on the first day. The system had to live inside the app people already trusted, and create organised records just by being used.',
        resultsLabel: 'Intended results',
        results:
          'Taking requests without needing a call to ask questions, every trip leaving a record you can check, and hand-offs that still work when GPS or WhatsApp fails. An idea only earns its claims by naming the number that would prove it wrong, so each hoped-for result here comes with its proof.',
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
            'We checked every piece of information in the process against three questions: who owns it, who starts it, and what choice it helps someone make. That covered four groups of people across twelve steps. For each piece of information we wrote down where it comes from, who uses it, what it is for, how often it appears, and how it goes wrong.',
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
              body: 'It expected a calm person with time to type.',
            },
            {
              title: 'Ride details were scattered',
              body: 'Spread across chats, calls and people’s memories, with no single true version.',
            },
            {
              title: 'Nobody could see what was happening live',
              body: 'Nobody could answer “where is it now?” without making a phone call.',
            },
            {
              title: 'It could not cope when it got busy',
              body: 'A way of working that copes with three ambulances at once falls apart at fifteen.',
            },
            {
              title: 'No proper handover',
              body: 'When one shift ended and the next began, all the details were lost.',
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
        {
          kind: 'todo',
          body: 'Name the three handoffs that accounted for most of the failure, and say whether you observed live dispatch or reconstructed the flow from interviews. Stating the limit of your evidence is stronger than leaving it open.',
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
            'Information was not lost because people were careless. It was lost because a scared caller was being asked open questions. Simple step-by-step questions replaced free text, in the app people already used. So the details needed to send an ambulance are collected once, at the moment someone is ready to answer.',
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
              src: whatsappHospital,
              alt: 'A WhatsApp chat showing how a hospital admin asks for an ambulance',
              caption: 'Fig 2. How a hospital admin asks for an ambulance, as it really happens.',
            },
            {
              src: whatsappPatient,
              alt: 'A WhatsApp chat showing how the patient’s family gets ambulance updates',
              caption: 'Fig 3. The family’s side of the same ride.',
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
            'We listed six ways things could go wrong: a WhatsApp message not arriving, GPS not working, unclear or mixed-up information, a driver who cannot be reached, the same patient booked twice, and a hospital group that cannot be reached. We planned for things to keep working, not for them to be perfect. So each problem needed a backup plan, a person in charge and a warning message, before any screen needed a design.',
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
              body: 'The system keeps track of replies it is waiting for, and if there is no reply within two minutes, the job goes to the next driver. A driver with no smartphone or no signal gets a phone call, and the operations team updates the ride for them.',
            },
            { title: 'Duplicate bookings for the same patient', body: '[NEED: the reconciliation rule]' },
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
              src: proposedWorkflow,
              alt: 'A diagram of the backup plans, from the hospital admin all the way to the message sent to the family',
              caption: 'Fig 4. All the backup plans, including what happens when the main way of sending messages fails.',
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
      nav: '03 The operations dashboard',
      problem: 'The operations team could not see a system they were responsible for',
      intervention: 'so the dashboard was built for the operations team, not for hospitals',
      blocks: [
        {
          kind: 'prose',
          body: [
            'Hospitals stay where they are. The operations team can see everything without forcing anyone to change, which is the only version of this that works at a busy hospital desk. Live tracking and route maps answered the “where is it now?” question that used to cost a phone call for every ride.',
            'Twelve scattered steps become one shared timeline that all four groups read from, each seeing the part that matters to them.',
          ],
        },
        {
          kind: 'figures',
          items: [
            {
              src: hifiDashboard,
              alt: 'The operations dashboard showing the rides happening now and what step each one is on',
              caption: 'Fig 5. The operations dashboard. Everything visible, without making hospitals change tools.',
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
              caption: 'Fig 6. Live tracking. One answer to “where is it now?”',
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
          why: 'The obvious answer, and the one the product assumed. We said no because it gets it backwards. Ninety-five percent of requests already came through WhatsApp, and asking panicking staff to switch tools in the middle of an emergency is asking them to stop using the system.',
        },
        {
          option: 'Collect every detail when the request comes in',
          why: 'Better reports and cleaner records. We said no because every extra question is a chance for the request to get stuck. Instead, we asked only for what each hand-off needs, and accepted weaker reports as the price.',
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
            'Fig 7. Sending an ambulance, before and after. Four groups with no shared information, then one timeline all four read from.',
        },
      ],
      callouts: [
        {
          title: 'Twelve steps became',
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
          text: 'The screens are only 30 percent of the answer. The other 70 percent is how the work flows, how systems connect, and what the system can and cannot do.',
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
