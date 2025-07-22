import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.ghost.createMany({
    data: [
      {
        email: "hanako.yugiamane101@gmail.com",
        username: "ghost_rider",
        createdAt: "2025-07-20T21:03:05.441Z",
        updatedAt: "2025-07-20T21:03:05.441Z",
        verified: false,
      },
      {
        email: "itslight9007@gmail.com",
        username: "light",
        createdAt: "2025-07-21T05:04:57.679Z",
        updatedAt: "2025-07-21T05:04:57.679Z",
        verified: false,
      },
    ],
  });

  await prisma.trace.createMany({
    data: [
      {
        id: "a1c193e7-7f75-4b50-8c98-0bd85b4f4411",
        title: "The Last Leaf",
        slug: "the-last-leaf",
        content:
          "# The Last Leaf\n> A leaf becomes a symbol of hope for a sick girl.\n\nJohnsy stared at the vine outside, believing she would die when its last leaf fell. Her artist neighbor painted a leaf during the night’s storm, saving her spirit.",
        createdAt: "2025-07-21T01:05:43.971Z",
        updatedAt: "2025-07-21T01:05:43.971Z",
        username: "light",
        tldr: "A leaf becomes a symbol of hope for a sick girl.",
      },
      {
        id: "9e4d352d-3bd9-4aac-881d-4da6d3309b9c",
        title: "Midnight Train",
        slug: "midnight-train",
        content:
          "# Midnight Train\n> A missed train leads to an unexpected journey.\n\nTom missed his usual train and walked through the sleeping town, running into an old friend who changed his views about second chances.",
        createdAt: "2025-07-21T01:05:43.971Z",
        updatedAt: "2025-07-21T01:05:43.971Z",
        username: "light",
        tldr: "A missed train leads to an unexpected journey.",
      },
      {
        id: "6c70e39d-860e-4002-9f6a-372274ecce7e",
        title: "The Paper Boat",
        slug: "the-paper-boat",
        content:
          "# The Paper Boat\n> A child’s paper boat brings neighbors together.\n\nAda’s paper boat floated down the street during a rainstorm. Soon, neighbors joined, adding their own boats, forging new friendships on a gray day.",
        createdAt: "2025-07-21T01:05:43.971Z",
        updatedAt: "2025-07-21T01:05:43.971Z",
        username: "light",
        tldr: "A child’s paper boat brings neighbors together.",
      },
      {
        id: "85f54747-2fab-464a-833d-261024e7374f",
        title: "Beneath the Willow",
        slug: "beneath-the-willow",
        content:
          "# Beneath the Willow\n> Unspoken love found its voice beneath a tree.\n\nEach spring, Em and Jay met beneath the old willow. This year, Jay finally confessed, and the tree witnessed the start of their story.",
        createdAt: "2025-07-21T01:05:43.971Z",
        updatedAt: "2025-07-21T01:05:43.971Z",
        username: "light",
        tldr: "Unspoken love found its voice beneath a tree.",
      },
      {
        id: "62147c37-bf76-4ae6-b7bc-8bee9f563417",
        title: "The Lost Sketchbook",
        slug: "the-lost-sketchbook",
        content:
          "# The Lost Sketchbook\n> An artist finds inspiration in a forgotten place.\n\nMira rediscovered her childhood sketchbook while moving. Its innocence rekindled her passion, leading her to create her first exhibit.",
        createdAt: "2025-07-21T01:05:43.971Z",
        updatedAt: "2025-07-21T01:05:43.971Z",
        username: "light",
        tldr: "An artist finds inspiration in a forgotten place.",
      },
      {
        id: "dc1f2ac4-160a-4422-8bfe-8f929e2b5f57",
        title: "Stormy Night",
        slug: "stormy-night",
        content:
          "# Stormy Night\n> Unexpected kindness brightens a dark evening.\n\nWhen the lights went out, Ravi’s neighbor invited him to share a candlelit dinner, turning fear into warmth and laughter.",
        createdAt: "2025-07-21T01:05:43.971Z",
        updatedAt: "2025-07-21T01:05:43.971Z",
        username: "light",
        tldr: "Unexpected kindness brightens a dark evening.",
      },
      {
        id: "16c86bba-ffef-4ff0-bbfb-61f145798df7",
        title: "The Clockmaker",
        slug: "the-clockmaker",
        content:
          "# The Clockmaker\n> Time lost and found in an old repair shop.\n\nMr. Chen fixed broken clocks and listened to people’s stories, mending more than just timepieces in his quiet corner shop.",
        createdAt: "2025-07-21T01:05:43.971Z",
        updatedAt: "2025-07-21T01:05:43.971Z",
        username: "light",
        tldr: "Time lost and found in an old repair shop.",
      },
      {
        id: "b04e0793-3869-4b2a-aa35-04d844b863e0",
        title: "After the Rain",
        slug: "after-the-rain",
        content:
          "# After the Rain\n> A city blooms anew after a long drought.\n\nThe city’s first rain in months brought children outdoors, laughter echoing as flowers and hope blossomed simultaneously.",
        createdAt: "2025-07-21T01:05:43.971Z",
        updatedAt: "2025-07-21T01:05:43.971Z",
        username: "light",
        tldr: "A city blooms anew after a long drought.",
      },
      {
        id: "d681f776-f381-4ee7-8f2f-6532cfc7b2e6",
        title: "The Red Balloon",
        slug: "the-red-balloon",
        content:
          "# The Red Balloon\n> Letting go means moving forward.\n\nOn her birthday, Mia finally released the red balloon she’d saved since her father’s passing, feeling lighter as it floated away.",
        createdAt: "2025-07-21T01:05:43.971Z",
        updatedAt: "2025-07-21T01:05:43.971Z",
        username: "light",
        tldr: "Letting go means moving forward.",
      },
      {
        id: "bbd4e68d-32a9-4881-b29f-c90e0761827a",
        title: "Café Encounter",
        slug: "cafe-encounter",
        content:
          "# Café Encounter\n> Two strangers connect over a misplaced book.\n\nElla left her diary at the café. Mark found it and returned it, and their coffee break turned into a lasting friendship.",
        createdAt: "2025-07-21T01:05:43.971Z",
        updatedAt: "2025-07-21T01:05:43.971Z",
        username: "light",
        tldr: "Two strangers connect over a misplaced book.",
      },
      {
        id: "089e663c-8d3a-41a6-9e71-585c60cddc3e",
        title: "The Wishing Stone",
        slug: "the-wishing-stone",
        content:
          "# The Wishing Stone\n> A simple stone grants courage to a young boy.\n\nTim found a smooth stone by the river and wished for bravery. Believing in its magic, he faced his fears at school the next day.",
        createdAt: "2025-07-21T01:05:43.971Z",
        updatedAt: "2025-07-21T01:05:43.971Z",
        username: "light",
        tldr: "A simple stone grants courage to a young boy.",
      },
      {
        id: "879a1b0b-c404-4e55-a378-086bee0a0932",
        title: "Mailbox 42",
        slug: "mailbox-42",
        content:
          "# Mailbox 42\n> Decades-old letters reignite memories between friends.\n\nSara discovered a bundle of letters in an abandoned mailbox, reconnecting her with her childhood pen pal.",
        createdAt: "2025-07-21T01:05:43.971Z",
        updatedAt: "2025-07-21T01:05:43.971Z",
        username: "light",
        tldr: "Decades-old letters reignite memories between friends.",
      },
      {
        id: "965dfa5b-ab7d-4bae-a1a2-bc7d02938fd5",
        title: "Lost Lullaby",
        slug: "lost-lullaby",
        content:
          "# Lost Lullaby\n> A melody bridges the gap between generations.\n\nGrandma hummed an old lullaby to her granddaughter; together they discovered their family’s roots in its notes.",
        createdAt: "2025-07-21T01:05:43.971Z",
        updatedAt: "2025-07-21T01:05:43.971Z",
        username: "light",
        tldr: "A melody bridges the gap between generations.",
      },
      {
        id: "9fe6e4b1-2c46-46a7-90fa-b62763a5a25a",
        title: "A Letter to Tomorrow",
        slug: "a-letter-to-tomorrow",
        content:
          "# A Letter to Tomorrow\n> An optimistic note for the future self.\n\nSam wrote a letter to be opened in ten years, filling it with hopes and encouragement on a rainy afternoon.",
        createdAt: "2025-07-21T01:05:43.971Z",
        updatedAt: "2025-07-21T01:05:43.971Z",
        username: "light",
        tldr: "An optimistic note for the future self.",
      },
      {
        id: "22ea3f7c-d598-466a-83bd-df891118a729",
        title: "The Painted Door",
        slug: "the-painted-door",
        content:
          "# The Painted Door\n> An old door’s colors inspire new beginnings.\n\nWhen Mei painted her front door yellow, neighbors followed with vibrant hues, each doorway sparking stories and community pride.",
        createdAt: "2025-07-21T01:05:43.971Z",
        updatedAt: "2025-07-21T01:05:43.971Z",
        username: "light",
        tldr: "An old door’s colors inspire new beginnings.",
      },
      {
        id: "4a7e3878-c94f-408f-8c03-c91d7f490cfc",
        title: "Secret Garden",
        slug: "secret-garden",
        content:
          "# Secret Garden\n> A hidden garden sparks hope for a grieving family.\n\nAfter moving, the Parkers discovered a neglected garden. Tending it together renewed their sense of joy.",
        createdAt: "2025-07-21T01:05:43.971Z",
        updatedAt: "2025-07-21T01:05:43.971Z",
        username: "light",
        tldr: "A hidden garden sparks hope for a grieving family.",
      },
      {
        id: "8fd5e055-6e1f-4bfd-b8a1-b1272102dde6",
        title: "Starry Message",
        slug: "starry-message",
        content:
          "# Starry Message\n> A wish upon a star encourages a lonely heart.\n\nMax sent a glowing lantern skyward on a lonely night, his hope for a friend answered by a new neighbor’s smile.",
        createdAt: "2025-07-21T01:05:43.971Z",
        updatedAt: "2025-07-21T01:05:43.971Z",
        username: "light",
        tldr: "A wish upon a star encourages a lonely heart.",
      },
      {
        id: "eea95c98-dfd5-4c92-913e-1ba2fee0bda9",
        title: "The Thank You Note",
        slug: "the-thank-you-note",
        content:
          "# The Thank You Note\n> Unexpected gratitude brings two lives together.\n\nLila wrote a thank-you note to her bus driver. The simple gesture brightened two lives forever.",
        createdAt: "2025-07-21T01:05:43.971Z",
        updatedAt: "2025-07-21T01:05:43.971Z",
        username: "light",
        tldr: "Unexpected gratitude brings two lives together.",
      },
      {
        id: "93016db7-3a0b-4a5b-bf8d-dc7fd72277f7",
        title: "The Apricot Tree",
        slug: "the-apricot-tree",
        content:
          "# The Apricot Tree\n> Sweet fruit and sweet memories of childhood.\n\nDuring harvest, Lena remembered summers under the apricot tree, learning to climb and dream.",
        createdAt: "2025-07-21T01:05:43.971Z",
        updatedAt: "2025-07-21T01:05:43.971Z",
        username: "light",
        tldr: "Sweet fruit and sweet memories of childhood.",
      },
      {
        id: "310ba2b1-0008-435f-85da-eedc841d11f2",
        title: "The Forgotten Tune",
        slug: "the-forgotten-tune",
        content:
          "# The Forgotten Tune\n> Music mends a broken friendship.\n\nOld friends reunited to play a tune they once composed, rekindling their bond through shared notes.",
        createdAt: "2025-07-21T01:05:43.971Z",
        updatedAt: "2025-07-21T01:05:43.971Z",
        username: "light",
        tldr: "Music mends a broken friendship.",
      },
      {
        id: "c9e198ac-5b8a-4de1-87d4-f5c161a52e3a",
        title: "Whispering Pines",
        slug: "whispering-pines",
        content:
          "# Whispering Pines\n> Secrets told by the forest bring peace to a troubled soul.\n\nLila wandered into the whispering pines, feeling the trees murmur stories of hope and healing. The forest gave her the courage to start anew.",
        createdAt: "2025-07-21T01:05:43.971Z",
        updatedAt: "2025-07-21T01:05:43.971Z",
        username: "light",
        tldr: "Secrets told by the forest bring peace to a troubled soul.",
      },
      {
        id: "2fbb8831-22bb-44d7-94aa-0b4425a6e07b",
        title: "The Invisible Thread",
        slug: "the-invisible-thread",
        content:
          "# The Invisible Thread\n> An unseen bond that connects two hearts across time.\n\nSarah and Noah never met, but their lives intertwined through letters left in a dusty attic, connecting their souls across decades.",
        createdAt: "2025-07-21T01:05:43.971Z",
        updatedAt: "2025-07-21T01:05:43.971Z",
        username: "light",
        tldr: "An unseen bond that connects two hearts across time.",
      },
      {
        id: "7b0701c5-9a0e-4ecf-9c3f-ec5de3770bde",
        title: "Morning Dew",
        slug: "morning-dew",
        content:
          "# Morning Dew\n> Fresh starts and new beginnings in the early light.\n\nEvery morning, Ben watched the dew on flower petals and reminded himself that every day was a new chance to grow and change.",
        createdAt: "2025-07-21T01:05:43.971Z",
        updatedAt: "2025-07-21T01:05:43.971Z",
        username: "light",
        tldr: "Fresh starts and new beginnings in the early light.",
      },
      {
        id: "efb1d66f-f893-4e43-b6bd-9148a5d17484",
        title: "Echoes of Silence",
        slug: "echoes-of-silence",
        content:
          "# Echoes of Silence\n> Sometimes silence speaks louder than words.\n\nIn the quiet aftermath, Emily felt the strength of unspoken understanding between her and her brother, a bond beyond language.",
        createdAt: "2025-07-21T01:05:43.971Z",
        updatedAt: "2025-07-21T01:05:43.971Z",
        username: "light",
        tldr: "Sometimes silence speaks louder than words.",
      },
      {
        id: "b7f5cbe8-7aa6-46da-bf5d-d5172ac02744",
        title: "The Golden Thread",
        slug: "the-golden-thread",
        content:
          "# The Golden Thread\n> Hope weaves its way through the darkest times.\n\nDespite the storms, Lila held onto the golden thread of hope that kept her family united through desperate times.",
        createdAt: "2025-07-21T01:05:43.971Z",
        updatedAt: "2025-07-21T01:05:43.971Z",
        username: "light",
        tldr: "Hope weaves its way through the darkest times.",
      },
      {
        id: "b4c7862b-a7ed-44df-bb02-3707e2044d3b",
        title: "Canvas of Dreams",
        slug: "canvas-of-dreams",
        content:
          "# Canvas of Dreams\n> Dreams painted on a blank canvas come alive.\n\nAlex’s first painting captured his dreams so vividly that it inspired others to chase their own aspirations with color and passion.",
        createdAt: "2025-07-21T01:05:43.971Z",
        updatedAt: "2025-07-21T01:05:43.971Z",
        username: "light",
        tldr: "Dreams painted on a blank canvas come alive.",
      },
      {
        id: "4589cb2b-09aa-4c22-b183-7d81eaa34b7f",
        title: "Silent Symphony",
        slug: "silent-symphony",
        content:
          "# Silent Symphony\n> Music felt deep within the heart of silence.\n\nIn the stillness of the night, Mia heard the silent symphony of her soul and found peace without a single note played.",
        createdAt: "2025-07-21T01:05:43.971Z",
        updatedAt: "2025-07-21T01:05:43.971Z",
        username: "light",
        tldr: "Music felt deep within the heart of silence.",
      },
      {
        id: "9f9e4564-f8e2-4f60-89e6-5284f2a3e5ee",
        title: "Chasing Shadows",
        slug: "chasing-shadows",
        content:
          "# Chasing Shadows\n> Sometimes the shadows lead you to the light.\n\nDetermined not to fear her past, Nora chased the shadows only to find the bright path she had always sought.",
        createdAt: "2025-07-21T01:05:43.971Z",
        updatedAt: "2025-07-21T01:05:43.971Z",
        username: "light",
        tldr: "Sometimes the shadows lead you to the light.",
      },
      {
        id: "352194f2-2397-452a-8852-8222a06c7c45",
        title: "Beneath the Starlight",
        slug: "beneath-the-starlight",
        content:
          "# Beneath the Starlight\n> Stars guide dreams on a quiet night.\n\nUnder the vast sky, Liam whispered his wishes to the stars, hopeful that dreams could take flight even in darkness.",
        createdAt: "2025-07-21T01:05:43.971Z",
        updatedAt: "2025-07-21T01:05:43.971Z",
        username: "light",
        tldr: "Stars guide dreams on a quiet night.",
      },
      {
        id: "14b64e83-9be7-4853-9550-49a6db9bcecd",
        title: "Petals in the Wind",
        slug: "petals-in-the-wind",
        content:
          "# Petals in the Wind\n> Letting go with grace and hope.\n\nAs the cherry petals floated by, Sara learned the art of letting go, discovering freedom and new beginnings.",
        createdAt: "2025-07-21T01:05:43.971Z",
        updatedAt: "2025-07-21T01:05:43.971Z",
        username: "light",
        tldr: "Letting go with grace and hope.",
      },
      {
        id: "61e235f8-f4bc-49d7-a665-07420dfa039b",
        title: "Ripples",
        slug: "ripples",
        content:
          "# Ripples\n> Small actions causing great change.\n\nA single act of kindness sent ripples through the town, inspiring a wave of goodwill and connection.",
        createdAt: "2025-07-21T01:05:43.971Z",
        updatedAt: "2025-07-21T01:05:43.971Z",
        username: "light",
        tldr: "Small actions causing great change.",
      },
    ],
  });
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
  });
