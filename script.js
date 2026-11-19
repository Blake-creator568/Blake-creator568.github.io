/* ==========================================================================
   ORBIS VOX — ARTICLE DATABASE & NEWSPAPER ENGINE
   ========================================================================== */

const ARTICLES = [
  {
    id: 1,
    featured: true,
    section: "local",
    category: "Local News",
    date: "7 Apr 2026",
    title: "Local > Global News… Please",
    excerpt: "Is it just me that dislikes how much I see Trump's face on the BBC? Local news isn't optional—it's the only news that actually affects the life you're living.",
    quote: "Local news isn't optional. It's the only news that actually affects the life you're living.",
    content: [
      "Is it just me that dislikes how much I see Trump's face on the BBC? I live in the UK meaning what's happening in the US doesn't fully bother me. If I want to read about global news, there's this fascinating thing called a search bar, incredible discovery.",
      "Let's use the UK for example, me as a teenager living in England, reading the news most days all I see is Donald Trump… okay, yeah. What's happening in the United States is important, but I would quite like to read about the latest in Nottingham or Derbyshire, somewhere more local to me… not somewhere that's a seven-hour flight away.",
      "Honestly, I really just want to read something near me because it's where I live, you know? If something is dangerous or important where I live then I need to know straight up, not after half an hour of digging through news sites to find out. Even if it's happy news, I still need to know because it's local.",
      "It honestly pisses me off how long it takes me to find news close to me. Private Eye barely covers it, the BBC hides it under layers of quicksand, CNN decides the UK needs even more shade. To be blunt, at this point someone in the UK could become a serial killer and us locals would get the update 3-5 business days later. Even then, we'd have to dig through Donald Trump, wars, politics, and more before we find anything even remotely linked to the UK let alone linking to the issue.",
      "My point is, that there is a search bar for a reason, show me the local news first. We need location enabled in news sites so it automatically shows us the local news. That'd be useful, right?",
      "Local news isn't optional. It's the only news that actually affects the life you're living."
    ]
  },
  {
    id: 2,
    featured: false,
    section: "community",
    category: "Community",
    date: "17 May 2026",
    title: "Maybe You're Not Numb. Maybe You're Just Worn Down",
    excerpt: "Everything today is loud, fast, and constant, but somehow you feel nothing from it. Maybe nothing is wrong with you—maybe you've just worn it down.",
    content: [
      "Everything today is loud, fast, and constant, but somehow you feel nothing from it.",
      "Life is full of so much noise. The world around you is loud. You've got drama in friendships, or just drama in general. You're stressed. Everybody is stressed, let's be bluntly real. But it's kind of hard to enjoy those moments where you feel something, where you feel happy, where you feel okay.",
      "Because everything is loud. Everything is, “come on, let's do this, let's do this, let's do this.” Everything is constant. You get into routines. You do the same thing every day when you get home to relax. It becomes boring. You realise you're not actually enjoying it anymore, it's just a routine. Honestly, sometimes that makes you question what's the point.",
      "It's kind of hard to pinpoint exactly how you feel, especially as a teenager. You're surrounded by people your age who go out, go to parties, and enjoy things, while you're sat at home watching a movie alone because nobody's hitting you up. Nobody's messaging you. You begin to overthink it.",
      "You talk about wanting friends, about how it feels not to have friends, and you miss when you did have friends. It's not even that anything big happened. You just slipped away.",
      "Because you do the same thing daily, you've worn it out.",
      "It's like wearing the same outfit constantly. At the start, it might be an outfit you really loved. At the end, it frays and gets worn down. That's the same with life. Same with the hobbies you enjoy. You do something so much that when you come back to it, it just feels like routine because you're not getting enjoyment from it anymore. You've worn it down so much.",
      "With gaming, with watching movies, with being alone, it's worn down so much that you actually miss somebody hitting you up and saying, “Hey, do you want to go out this weekend?”",
      "It's not just about friendships. It's everything in life. As a society, we find something we love, we pinpoint our focus on it, and then when it wears out and we feel no joy from it anymore, we assume there's something wrong with us. We assume maybe we're feeling numb.",
      "It could be that. Or maybe you've just worn it down. You've done it so much that it's gone. You've felt so much that your feelings have muted themselves for that thing."
    ]
  },
  {
    id: 3,
    featured: false,
    section: "community",
    category: "Community",
    date: "17 May 2026",
    title: "Life Gets So Lonely",
    excerpt: "You don't want popularity or twenty friends. You just want one person you're close with who actually sees you properly.",
    content: [
      "Life gets so lonely.",
      "You grow up and your friendships vanish. No big argument, no issues, you just get busy. Sometimes being busy is great, but there's still part of you that wants connection.",
      "You don't want popularity. You don't want twenty friends. You just want one person. Somebody you're close with. Somebody that shares your interests. Somebody you can send a video to at 3am and they'll reply the next morning. Somebody that'll play online with you, message you, invite you places.",
      "And yeah, sure, you can still go out, play online, watch YouTube, do things on your own. But it's not as fun. It's all grey around the edges when you're alone.",
      "Some people love being alone. Some say they prefer it, and sometimes they do. But then routine hits and everything starts to feel repetitive and flat.",
      "You do the same things every day, and eventually even the fun stuff feels like something is missing that you can't quite replace.",
      "You wish you had a friend to laugh and rage at games with. A friend to invite you out places. A friend to talk about stupid interests, rate movies with, and gossip without feeling judged or dropped when it's inconvenient.",
      "You can be surrounded by people and still feel alone. You can have friends, but are they real? Do they actually like you? Do they message first? Do they invite you out, or only respond when you start things?",
      "Everybody needs somebody. It doesn't have to be loads of people. But as a teenager, closeness is difficult to get.",
      "Society feels like one massive act. You try to fit in. You change yourself to make friends. And then eventually you realise you don't know what parts of you were real anymore.",
      "A lot of teenagers speak to AIs instead of people because they're lonely, or because the people around them don't really see them properly.",
      "And life without closeness gets dull. You can still do everything alone that you could do with somebody else. But without connection, everything feels grey and blurry around the edges.",
      "Everyone always says “just go meet people.” But as a teenager, you walk into a room already wondering if you'll be accepted.",
      "We all just need a friend. Maybe that's why everybody feels lonely now. Because nobody knows how to be themselves anymore. We just know how to be liked."
    ]
  },
  {
    id: 4,
    featured: false,
    section: "community",
    category: "Community",
    date: "19 Apr 2026",
    title: "Everyone, Everywhere is stressed.",
    excerpt: "Sixteen, attending college, going to work, and juggling friendships—yet adults still have the nerve to say teenagers do 'nothing'.",
    content: [
      "Everyone, Everywhere is stressed.",
      "It could be toddlers stressed about not having the right toy, teenagers stressed about their social life, young adults stressed about bills, adults stressed about work, or the elderly stressed about their kids or money.",
      "Everyone, Everywhere has something or someone to be stressed about. But for today, let's focus on the teenagers.",
      "Let's paint the scene really quick. You're sixteen, attending college, going to work, and trying to cram in hobbies and some time slots to hang out with friends. Then that one adult with the face of stone decides to dim it all down with four simple words... \"That's what we do.\" Right, totally. But you're not a teenager and you have more experience.",
      "Teenagers are well aware what stress feels like. Most teenagers deal with college or school pressure, on top of family pressure and the many expectations piled on by today's society.",
      "Working as a teenager is something we will cover next week, but college as a teenager is just as stressful, if not more.",
      "Attending college at sixteen means constant pressure to fit in with the right crowds, pressure to be on time, pressure to know your way around, pressure to do the work and hand it in on time.",
      "In a list it sounds like nothing, but living it is a different story. This shit is mind-numbing and adults have the nerve to say we do 'nothing'?",
      "Trying to handle being with friends is draining in itself. You plan, prepare and then complete. You have to plan around what everyone is doing, you have to prepare by tidying and buying things. Then they arrive, you engage in everything.",
      "But then they leave and suddenly its eerily quiet and you're left sprawled out on the sofa with little to no energy.",
      "In the end, everyone deals with stress, some more than others. Stress isn't one thing, it's everything - all at once, all the damn time. Even if it's hidden behind 'strength'."
    ]
  },
  {
    id: 5,
    featured: false,
    section: "opinion",
    category: "Opinion",
    date: "1 Apr 2026",
    title: "Trumps New Year in a nutshell",
    excerpt: "Only three months into the year, and headlines feel less like news and more like warnings—from foreign strikes to constitutional clashes.",
    content: [
      "Don't get me wrong, Trump has an approval rate of 42.4%. He must be the martyr then, aye? Wrong, I hate Trump as much as the next person. He might have a high approval rate, but his disapproval rate is at 54.9%... keep that in mind.",
      "Alright, he's done some questionable stuff… he lifted the sanctions against Russia to allow them to sell their oil on the international market. This brought joy to Ukraine; some residents in Ukraine agree that “Russia has agreed to lay down their arms and stop fighting.” But this good thing doesn't cancel out all the controversial stuff Trump has done this year. Bear in mind, it is only April, it has been 3 months, and Trump has managed to cause protests, aggressive foreign policy, controversial domestic policy, war, conflict and pain.",
      "Let's start with the Military Strikes on Iran. The US, alongside Israel, decided it was a bright idea to launch large-scale airstrikes on Iran, targeting military and nuclear sites. Right, so we all know how well this is going to go with Trump in charge. Iran's supreme leader, Ali Khamenei, was reportedly killed in the attacks. Grand, an important leader, is dead. Thanks to Trump's Einstein idea. But in all seriousness, rest in peace Ali Khamenei.",
      "Seriously, such a light bulb moment. Nothing says stability like casually flirting with a Middle East war before lunch.",
      "Trump's attempt to end Birthright citizenship was truly a remarkable time… not. Trump decided it was so flaming smart to sign an executive order to limit birthright citizenship (who automatically becomes a US citizen at birth). Right, because it doesn't matter if you were born in America, the law says otherwise. Revolutionary discovery. This policy is being challenged in court and could clash with the 14th Amendment, so once again…. Trump's smart decisions don't end with entertaining consequences.",
      "Trump even showed up to the Supreme Court in person, which is not something presidents just… do. But yeah. Big constitutional fight, potential long-term impact on US identity? Sounds like Trump and his big brain. Apparently, constitutional amendments are now more like suggestions.",
      "That isn't all Trump has conducted this year. Seriously, he's checking off his New Year's resolutions.",
      "Moving on, the White House ballroom drama (yeah, seriously). Trump decided to start building a $400 Million ballroom at the White House. Because that's exactly what it needed to spice things up, wasn't Trump being there dramatic enough? Luckily, a judge halted the project, saying Trump needed Congress approval. I mean, the project involved demolishing part of the historical east wing. Right, just out with the old, in with the very dramatic new.",
      "Sure, not as globally explosive as a war, but still a huge legal and political crash. But, of course, when a nation is divided, what it really needs is a $400 Million ballroom.",
      "None other than the infamous Greenland takeover idea… again. Of course, it all starts with Trump and his amazing light bulb moments. Trump pushed for negotiations to buy Greenland during a major global summit. This sparked tension with allies… mainly, in Europe and NATO. Trump really loves making enemies. He thought it didn't work last time, but let's try it again… turn it into a sport. And, yes, he's still on that Greenland arc. It's crazy how some plotlines never die. Diplomacy in 2026: Ask nicely for Greenland and hope no one laughs too loudly.",
      "In the end, Trump has erred a lot… too many times, and some of this is continuing. I read Private Eye newspapers, and so far, this year, Trump has had his face plastered on the front page four out of seven issues. If that doesn't show how problematic his actions are, I don't know what will, honestly. At this point, headlines feel less like news and more like warnings."
    ]
  },
  {
    id: 6,
    featured: false,
    section: "opinion",
    category: "Opinion",
    date: "17 Mar 2026",
    title: "Everyone's fine. At least, that's the performance you're watching.",
    excerpt: "Being kind isn't some superpower. It costs literally nothing, yet some people guard basic decency like it's a limited-edition personality trait.",
    content: [
      "Everyone's fine. At least, that's the performance you're watching.",
      "You'd be surprised how many people smiling at you are barely holding their life together behind their teeth. Everyone is struggling with something; no one's life is perfect but as a society we still judge everyone before we get to know them. It could be anyone, anything and as humans we immediately take shots at their flaws. Being kind isn't some superpower. It costs literally nothing, yet some people guard basic decency like it's a limited-edition personality trait.",
      "We all have secrets, some good, some bad, some traumatic. You don't know their secrets, their story, their past, present or future. So why do we point it out? Why do we all decide it's our human right to be horrible to others? We all have limits; we all have this imaginary rope we're hanging onto. The thing is… you can't see anyone else's rope, you don't know if it is wound up tight, or if it is fraying at the edges, or even if they're at the end of their rope.",
      "One cruel word could be the last snap they needed to tip. Don't be the reason someone tips. Don't deliberately hurt someone.",
      "Your actions are your choice. Choose correctly.",
      "You have struggles, they have struggles. Not everyone struggles visibly. Not everyone's struggles are physical. It could be mental, emotional, environmental. If they don't speak about it… it doesn't automatically make it unimportant, harmless, or non-traumatic. So, yeah, if they don't talk about it you can't help. You can also not make it worse with harsh words.",
      "It's like Thumper said: “If you don't have somethin' nice to say, don't say nuthin' at all.”",
      "In the end, you never know what people are going through beyond what's visible on the surface. You might think you're funny teasing others, but you aren't. Being nice isn't some heroic act. It's just choosing not to make someone's already unbearable day worse."
    ]
  },
  {
    id: 7,
    featured: false,
    section: "latest",
    category: "Latest",
    date: "10 Mar 2026",
    title: "Understanding Criminal Psychology.",
    excerpt: "Most people know the names of high-profile criminals, but not their upbringing or early psychological warning signs. A look at historical case studies.",
    content: [
      "This section provides a chronological look at historical case studies within criminal psychology. Understanding the background and early warning signs of notorious individuals is a subject of significant interest to criminologists and researchers alike.",
      "An analysis often begins with well-documented historical cases, such as that of Jeffrey Dahmer.",
      "Jeffrey Lionel Dahmer was born May 21, 1960, in Milwaukee, Wisconsin, and grew up in Bath, Ohio. Researchers often point to his early environment, which frequently lacked the modern resources and awareness required to recognize and address severe psychological needs in troubled youth.",
      "Psychologists study how isolated environments, emotional difficulties, and unchecked behavioral red flags can influence an individual's development. While environmental factors and trauma are thoroughly examined, forensic experts emphasize that personal choices ultimately lead to criminal behavior.",
      "His recorded criminal activity began in 1978 shortly after he graduated from high school. Early behavioral warning signs during his youth included a preoccupation with dead animals and antisocial behaviors, which escalated over time.",
      "Criminologists categorize the major aspects of such complex cases into distinct focus areas: antisocial behavior, severe psychological manipulation, and violent offenses.",
      "Between 1978 and 1991, his offenses escalated significantly, resulting in multiple victims before law enforcement intervention took place.",
      "Dahmer was arrested in 1991 after a potential victim managed to escape and alert local authorities. The subsequent police investigation uncovered definitive evidence of his crimes within his apartment. In 1992, he was convicted on multiple counts of murder and received consecutive life sentences.",
      "His life ended in prison on November 28, 1994, following a fatal altercation with a fellow inmate at the Columbia Correctional Institution in Wisconsin. The case remains a heavily studied subject in modern forensic science.",
      "The study of these crimes focuses on understanding a deeply fractured mind shaped by isolation, control, and unchecked psychological disturbances. Examining these historical paths does not excuse the actions, but challenges society to analyze how extreme behavioral patterns form and how future violence might be prevented.",
      "Analyzing these histories prompts important questions regarding early intervention, mental health support systems, and institutional safeguards."
    ]
  },
  {
    id: 8,
    featured: false,
    section: "community",
    category: "Community",
    date: "10 Mar 2026",
    title: "The pressure to have your life figured out at 16.",
    excerpt: "One minute you're worrying about homework, the next you're expected to have a five-year life plan—without any instruction booklet.",
    content: [
      "Somewhere between childhood and adulthood, a strange expectation appears. Not gradually, not politely, and definitely not with any sort of instruction booklet. One minute you're worrying about homework and what's for lunch, the next you're apparently supposed to have a five-year life plan. You don't get the smooth, relaxing, calming fade into adulthood. You get the sudden flip of the switch somewhere between the ages of 13 and 14.",
      "You go through the start of school with a breeze, but in Year 9 or near the end, everything gets so much harder, without preparation. No dramatic announcement, no helpful warning, just the quiet realisation that suddenly things matter a lot more than they did before. You have to focus on education, decisions, responsibilities. Apparently, the world decided this was the perfect time to start asking questions about your future, as if most sixteen-year-olds secretly have a detailed career roadmap hidden somewhere in their school bag.",
      "It's the polar opposite to what it was originally like. Back then the biggest decisions were about homework, friends, and getting through the day without embarrassment. Now it feels like every conversation eventually circles back to “the future,” as if it's something that's supposed to already be neatly organised. It's not, it never will be. Not for most people, and certainly not for those still in school.",
      "It's as if going to the future with no idea on what's coming for you. What's going to change or happen. No preview, no trailer, no helpful list of instructions explaining what comes next. Just you and the whiplash of what is to come. Do you ever feel like that? Like you have to have everything figured out just as you're getting used to the new expectations?",
      "For most teenagers, the pressure usually arrives in the form of one simple question. “What do you want to do with your life?” It's crazy how you're supposed to be able to answer that. You don't know. You don't have ideas because in school they teach you Macbeth, A Christmas Carol, and An Inspector Calls. Right, because we should learn how to write a sonnet instead of how to pay taxes. We should learn chemical reactions instead of how to budget, how to live alone, how to function as an adult with the inflation prices which are ridiculous by the way. This unanswerable question appears everywhere.",
      "Teachers ask it in classrooms. Parents bring it up at home. Even distant relatives seem curious. Suddenly, the question appears everywhere. And you're still stuck there, not a clue in the world because how can you know? How can you figure out what you want to do for the rest of your life? Or even just the start of your life? How is that possible at the age of 13/14? The reason I say 13/14 is because your important life-changing decisions don't start at the age of sixteen when you leave school, they start at the end of Year 9 when you pick your GCSE options.",
      "At the age of 13/14 you have all this pressure, all these life making decisions. But you're a kid with no guidance, no support, so how can you answer that question? How could anyone in your situation? Society suddenly expects teenagers to make decisions that supposedly shape the rest of their lives. Choose your GCSE options. Choose a college course. Choose a career path. All while still figuring out who you even are.",
      "The strange thing is that most adults didn't have their lives figured out at sixteen either. Ask almost anyone about their teenage years and the story is rarely a straight line. People change their minds. They discover new interests, new careers, new directions they never expected. Yet somehow, teenagers are still expected to have a clear answer to a question many adults didn't figure out until years later.",
      "Yeah, in school you learn stuff that might help in the long-run. But what about now? When you leave school? When you apply for your first job? When you write your first CV? Adults didn't know this when they were a kid, sure. But they are the ones teaching us now. They are the ones with some leverage as to what they teach you. You need to know how to function as an early adult, you don't have the experience they do. They know first hand what it is like to be a teenager and not have a straight, clear plan for your future. Many adults quit jobs, try out new environments, apply for jobs out of their comfort zone that they might enjoy. Following this many working adults aren't in the job path they might have chosen in school.",
      "Maybe the problem isn't that teenagers don't have the answers yet. Paths change, futures derail, life gets in the way. But that doesn't mean that in a few years you'll be in the same place with the same pressure. You gain knowledge every day, even in the smallest of things. Yeah, you won't have your life figured out at the age of sixteen, but you will have some knowledge that you didn't have when you started school. You will have an idea of what to expect in college, you'll have gained communication skills, teamwork, confidence. You might not have a clear path of your future, but you will understand what it takes to complete hard work and get through copious amounts of coursework. Life changes, some things are fate, but some things are in your control. It's up to you what you do with it.",
      "In the end, sixteen doesn't have to be the deadline for your five-year-plan. You could make it the start of your options. Don't force yourself into a cage when the key is already in your hand. Use it and choose your own path."
    ]
  },
  {
    id: 9,
    featured: false,
    section: "community",
    category: "Community",
    date: "24 Feb 2026",
    title: "When Being Busy Costs You a Place",
    excerpt: "Friendship isn't supposed to be a subscription you lose after three missed payments. What happens when saying 'no' because you're busy gets you left out.",
    content: [
      "Is it the truth? Are we all replaceable? Are we allowed to deny requests without consequence?",
      "Just imagine this for a split second, you say no a few times, and then suddenly you're the problem. You get left out, ignored, and become the backup. It hurts more when you are the one who introduced them to whoever they prefer now. But you don't speak up, you don't push for more, you become a ghost. You think you're the problem, and maybe it feels like it because you said no in the first place. But that isn't the truth. I mean, come on. Do you only exist when convenient for everyone else?",
      "Some friends ask you out, maybe for a night out or a sleepover. You say no, you're super busy, at work, at college, with commitments. And those friends stop asking you to hang out, stop communicating with you, stop messaging you first. So, it all goes silent for a while, unless you start the conversation, or you ask things. And yes, it works both ways. But it shouldn't have to be this way. Friends should react.",
      "Friends aren't supposed to ignore you, leave you out, or completely shut you off. Yet here we are.",
      "Friendship is supposed to be constant, but in reality, it's available or you're replaceable. In many ways. Friends are supposed to be there, even if you say no a few times, they are supposed to respect the fact that you might be busy, respect the fact that your life is different to theirs. And when they don't show that respect, it hurts. It makes you assume things about yourself that aren't true. Friendship isn't supposed to be a subscription you lose after three missed payments.",
      "And yes. It hurts more than you would like to admit. You get insecure, you feel guilty for saying no. You feel horrible for being busy with important things. The thing is, it's not just you. Human relationships are fragile, sometimes shallow, and often governed by convenience. They are flimsy. One argument, one slip up, one “no” can ruin a relationship with anyone. That isn't you being petty, or selfish. It's you being human. Humans have feelings, you are allowed to feel. The scientific term for this is 'Social Exclusion' meaning the experience of being deliberately excluded. It's valid, and normal for humans to feel left out, it's scientific. You shouldn't feel bad, or guilty for feeling left out. It is a normal human response, and you can't stress that enough.",
      "If being busy erases you, then maybe the loyalty was never real. Maybe you were just convenient. You aren't alone, and if anyone is reading this, feeling rough about this or anything else? Text SHOUT at 85258. It's free and confidential. You are not alone."
    ]
  },
  {
    id: 10,
    featured: false,
    section: "community",
    category: "Community",
    date: "19 Feb 2026",
    title: "Not Going Home: When the Front Door Feels Like a Trap",
    excerpt: "When the school bell rings and everyone else heads home to relax, what it feels like when home is tension, noise, and unpredictability.",
    content: [
      "The moment the school bell rings, your stomach twists. Everyone else is heading home with a backpack full of work and a mind ready to relax—but you're not ready.",
      "Home isn't comfort; it's tension, noise, unpredictability. Every step closer to the door feels heavier, like gravity itself is pushing back. And yet, there's no choice but to go… or is there?",
      "It's hard to concentrate on anything else when your mind is as loud as a jet. No one understands the trauma of living in an unstable household.",
      "You go home; you can't relax. Relaxing is impossible when the house is chaotic. You can't get work done when someone walks in without knocking every five seconds or someone is screaming downstairs. It hurts, you feel worthless, like you've failed, and ashamed.",
      "You watch everyone else answer phone calls or get picked up on time by their parents and it's a loving sight. No shouting, no arguing, no disgust. Then there's you. Answering calls just to be screamed at. Just for them to criticize you. Stood for hours waiting for your parents to show up. Feeling like you've been forgotten again. Watching cars drive by after picking up their children.",
      "The mental pain this inflicts is heavy. You feel like nothing you do is good enough. You go home and you're either walking into a storm or a beach. Sometimes it's nice, calm, but you still feel tense because that's how you've grown up. You still scan every corner of the room to make sure there are no threats.",
      "But other days you walk in and it's shouting, arguing, crying. Who can calm them down? You. All the pressure is on you, the teenager who never got to be a kid, the one who grew up too fast, the one who is the peacemaker for the fully grown adults.",
      "It hurts. Having to be a sixteen-year-old therapist. Having to learn how to calm everyone down from an early age. Childhood? Gone. The care for yourself? Gone. Replaced by? Sheer survival.",
      "It isn't normal to be called names or ignored or shouted at constantly. It's harmful, mentally, and physically.",
      "And so, you linger in the in-between – on the street, at a friend's house, anywhere but the place that is supposed to be home – waiting for the courage, or the distraction, to carry you through another evening you didn't ask for."
    ]
  },
  {
    id: 11,
    featured: false,
    section: "community",
    category: "Community",
    date: "15 Feb 2026",
    title: "The Quiet Reality of Youth Homelessness",
    excerpt: "Youth homelessness at sixteen doesn't look like alleys and cardboard signs—it looks like bags half-packed and sofas you're scared of overstaying.",
    content: [
      "People hear “homeless” and assume alleys, cardboard signs, torn bags. That's 'comfortable', that's stereotypical. But the kind that happens at sixteen doesn't look like that at all. It looks like bags permanently half-packed, sofas you're grateful for but scared of overstaying your welcome and keeping your bag away so no one remembers you're there. You're invisible so you aren't a burden. It's not dramatic — it's quiet, and that's the problem.",
      "At sixteen you're not “on the streets”, you're in limbo. Too young to rent, too old to be coddled and given help. You're expected to cope but not trusted to decide anything, even where you live. You still go to college, still hand assignments in, still laugh at the right times, because if you fall apart, you don't suddenly get help — you just look like more hassle, more of an inconvenience. So, you learn to function on fumes.",
      "The mad thing is how invisible it is. If you don't look battered enough, people assume you're fine. “Staying with a mate” sounds natural. “Just for a bit” stretches into weeks, maybe months. And you learn fast that explaining the truth makes people uncomfortable, so you stop. You don't want pity. You want stability. A door that doesn't feel temporary. A place where your bag can actually be unpacked. A place where it's safe enough to drop your shoulders even an inch.",
      "This isn't about dramatics or poor choices. It's about surviving instability before you're old enough to be taken seriously. It's about growing up too early, too silently, and being told you're doing great just because you haven't vanished yet. That's youth homelessness. Not loud. Not obvious. Just brutal — and way more common than people like to admit."
    ]
  },
  {
    id: 12,
    featured: false,
    section: "community",
    category: "Community",
    date: "1 Feb 2026",
    title: "You Weren't Lazy. You Were Just… Observed.",
    excerpt: "When you're cleaning or being productive on your own terms, and one unnecessary comment from the doorway kills your motivation instantly.",
    content: [
      "Picture this, just for a second. You're cleaning or doing something productive on your own terms, music is blasting on that dodgy, ignorant Alexa collecting dust. You're calm, or as calm as you can be while tackling mountains of washing. It was your own plan, your own choice, your own task. Then… the door opens, your parent or guardian is stood there, that same look always plastered onto their face. And it's as if by magic they decide to ruin the moment, not dramatically, not loudly. Quietly, one comment and your motivation decided to take a nosedive.",
      "And that whole time, your internal monologue is screaming at you with words you never would've said out loud: 'I was in my productivity era. It lasted 4 minutes' and 'Damn, they saw that? The streak is ruined.' Not because you're rude or ungrateful, but because you chose to do that, it was on your terms, it was your plan.",
      "Them coming in with those unnecessary comments wasn't needed. You didn't need the unhelpful commentary like it's a football game. Them saying, “See, it's not that hard.” doesn't mean them being bad parents, but it does mean that your mood drops as quick as an anvil. That just made your motivation evaporate instantly, the task became contaminated, that's why you just stop doing it.",
      "You stop being productive because it stops feeling like your choice, it turns into a performance, sometimes it even feels like being judged instead of supported. So, you end up just laying down, scrolling on TikTok and saying you'll do it later. Because your motivation packed its bags and left.",
      "In the end, You Weren't Lazy. You Were Just… Observed."
    ]
  },
  {
    id: 13,
    featured: false,
    section: "opinion",
    category: "Opinion",
    date: "1 Feb 2026",
    title: "You Never Wanted My Answer — You Just Wanted Control",
    excerpt: "You ask questions like it makes you generous, then talk over the answer. Why staying quiet isn't dramatic—it's exhaustion.",
    content: [
      "You ask me questions like it makes you generous. Like the act of asking absolves you from what comes next. But the moment I speak, you interrupt. You overwrite. You decide you already know better. Don't pretend this is confusion. Don't call it miscommunication. You heard me. You just didn't care enough to stop yourself from talking over me.",
      "You do this every time. You ask, I answer, you ignore it — and then you look confused when I shut down. As if silence appeared out of nowhere. As if it wasn't trained into me, moment by moment, by being dismissed again and again. You teach someone very quickly what happens when they speak and nothing changes.",
      "When you ask me what I want to eat and I answer – clear and direct. You ignore me, you ask me to repeat it. I say it again and again, but you don't listen. You're too busy listening to your own voice to stop and hear me. You ask me how was college? I respond, begin to tell you about my day, but you talk over me, ignore me. Then wonder why I never speak unless the conversation is lacking?",
      "I watch other families talking in public. One of the children is crying. What do the parents do? They comfort them and LISTEN to their issues. I see my relatives talk, listen, agree, communicate like they got an instruction book you never got. But you did get it. You listen to my brothers, to everyone else in the family. You listen to them. But when it comes to me? I have to repeat everything and if I ignore you or ask you to repeat something you said? Then that's classed as rude and ignorant.",
      "You say something to me? I respond but you don't hear me. I keep repeating it, but you never listen to me. You listen to everyone else, but never me. So, I walk away, upstairs, hidden, out of sight. Why? Because I am exhausted of trying to please you, trying to get you to listen to me, trying so hard to stay patient when I repeat everything I say. I stay quiet because no one ever listens to me even when what I have to say is important.",
      "Every conversation I have with anyone now, I keep stopping what I'm saying to make sure they are listening or I don't talk at all. I've learnt to stay quiet, answer in short, snappy sentences. Don't expect someone to listen to me.",
      "So, no — I'm not dramatic for walking away. I'm exhausted from performing clarity for people who refuse to listen. I'm done repeating myself so you can feel considerate while doing exactly what you wanted anyway. If you're angry that I've gone quiet, ask yourself why my silence bothers you more than my words ever did. You don't miss my voice. You miss your access to it."
    ]
  },
  {
    id: 14,
    featured: false,
    section: "community",
    category: "Community",
    date: "1 Feb 2026",
    title: "Gasping for air in a pool no one notices",
    excerpt: "We aren't lazy—we are exhausted. What happens when college pressure, relationships, and home life overflow an already overloaded mind.",
    content: [
      "We aren't lazy. No. We are exhausted. The worst part? We live with that exhaustion daily.",
      "You see the silence, the disengagement, the copious amount of sleep, and call it attitude instead of stopping, even for a moment, to ask why it even exists. This isn't a lack of effort. It's what happens when everything builds up and we're too burnt out from masking it too long.",
      "Rest doesn't exist when our brains are never allowed to go quiet. Our minds are constantly swamped. It could be college pressure: the work, the rules, the timing. It could be relationships: friends arguing and us being the peacekeeper. Partners demanding attention when we don't even have the energy to unlock the phone.",
      "The constant pressure no one helps us with is heavy. We have college, home life, mental health, and relationships. It doesn't sound like a lot in a list, but when it all builds up in one person's mind it's like static you can't turn off – but sure, let's call it laziness.",
      "All these little things build up and overflow our already overloaded minds. It's like gasping for air in a pool but someone keeps filling the water. And no one can see how draining it is. And somehow, we're still 'lazy'.",
      "But we still go to college every day. Still push through all the pain. Even when our bodies are dragging and our minds are hazy from the constant pressure. No matter that every step feels heavier than the last, we keep moving anyway."
    ]
  },
  {
    id: 15,
    featured: false,
    section: "opinion",
    category: "Opinion",
    date: "1 Jan 2026",
    title: "Everyone Wants a Voice – No One Wants to Listen",
    excerpt: "Voices are everywhere, but real attention is extinct. Why listening has become a superpower in a world stuck on broadcast mode.",
    content: [
      "Everyone wants a voice – no one wants to listen.",
      "Voices are everywhere, but real attention? Extinct.",
      "There's this thing I keep noticing: everyone wants to talk, but no one wants to hear a thing. I see videos of people singing original songs and the lyrics are deep, actual gut-wrenching songs, but no one concentrates on the lyrics—it's the voice or face card that matters. As a society we walk through life with our eyes closed and whenever someone tries to speak up, no one listens long enough to change the world.",
      "It feels like the whole world is stuck on broadcast mode—everyone's shouting into the void hoping someone claps. You have to be heard to make a change and if no one hears you and understands the first time, don't give up. We all scroll on TikTok, Insta, Snap or wherever and all we hear is noise. People have thousands or millions of views, but they use them on pranks or makeup tutorials. What about our main global issues?",
      "Someone needs to listen because it gets really annoying when someone speaks but they aren't understood.",
      "Conversations now feel like: who can talk the fastest, the loudest, the most dramatic? The funny part? The loudest ones usually have nothing important to say.",
      "In this world, it's always “listen to ME,” never “Hey, what did YOU mean by that?” It's frustrating, being listened to but not heard. People would rather watch a video with cats in than listen to the concerns of others.",
      "I realised something recently – listening is basically a superpower now. Nobody does it. The world is loud enough already, so don't try to be the loudest, try to be the one who gets it.",
      "Most people don't even want conversations — they want background noise that agrees with them. They want voices they can mute whenever it gets too real. They want “awareness” as an aesthetic, not a responsibility.",
      "So keep scrolling, or stop and actually hear the people who have something to say. Because the voices that could make a difference are the ones we refuse to hear."
    ]
  },
  {
    id: 16,
    featured: false,
    section: "community",
    category: "Community",
    date: "29 Dec 2025",
    title: "The Things We Pretend Aren't the Best Part of the Day",
    excerpt: "Adults talk about 'making memories' like a strategic project, forgetting that the moments that stick are the small, unplanned ones.",
    content: [
      "The things we pretend aren't the best parts of the day.",
      "There's something peculiar about adults saying it's important to “make memories.” They say it as if it's some strategic project, as if we have to do something ridiculous to make a memory. They don't know that the most memorable moments of our lives are the small, stupid things that happen daily.",
      "The tiny moments that guide us through the day are underrated. Like when someone does something weirdly drastic at the wrong moment, or when someone sends something so unfunny it becomes hilarious. Maybe even someone spawning in out of nowhere like a summoned demon. Or the completely ridiculous idea of riding a Tesco trolley down a hill mid-afternoon.",
      "Fun as a teenager isn't planned, it just happens. In the quiet moments in class when someone mispronounces a word, or when you're at lunch and your friend decides this is the perfect time to make a volcano by erupting a Pepsi bottle.",
      "Ah, yes, nothing like a bit of destruction before last period. But seriously, those moments are the ones that stick.",
      "We don't need a game plan for big, dramatic things to make memories. It's the small moments that count, the inside jokes, the calm before the chaos, the friends you choose to make memories with. Fun isn't about dramatic events; it doesn't need to be. It's the crack in the wall that lets light through when everything else feels too dark. Those tiny moments, the ones that matter, keep half of us sane most of the time."
    ]
  },
  {
    id: 17,
    featured: false,
    section: "opinion",
    category: "Opinion",
    date: "27 Dec 2025",
    title: "A Truthful Look at the BBC Today",
    excerpt: "The BBC reports the news, but sometimes it feels like it forgot who it's actually talking to—and why teenagers get headlines from TikTok at 3AM.",
    content: [
      "The BBC reports the news, but sometimes it feels like it forgot who it's actually talking to.",
      "Reading the BBC lately feels like walking into a familiar room, but someone's taken all the personality away, the colours stripped down. Instead, it feels clinical, dull and sanded down. Now, don't get me wrong, the BBC is useful, predictable, reliable and it's been around for years giving us the latest updates. The only problem is that as the years go on, the world changes, but the BBC hasn't moved with time. This isn't an attack on the BBC, more of an eye-opener to why most teenagers get their headlines from TikTok at 3AM.",
      "Okay, yeah. TikTok might not be the best way for getting your news updates, but at least with TikTok it feels like we are being spoken to instead of spoken at. We read BBC News and feel lectured instead of included in important conversations.",
      "It doesn't feel like it's one human writing and talking to another, it feels like a robotic system shouting at us. We watch TikTok daily, or most of us do. Funny cat videos, make-up tutorials, arts and crafts. Everything you could ever imagine crammed into one app. TikTok is familiar to today's generation, so that is where we get our news stories.",
      "BBC News is stable, structured, but it has no personality. It's clinical, detached, dry. It gives us what we need but it doesn't invite us in. It's like reading about something happening light years away because the tone feels detached, numb and unwilling. We would prefer it if reading the BBC News felt inclusive, felt as if we are a part of what is happening in our world.",
      "In the end, news that talks at people might inform them, but news that talks to people is what actually gets heard."
    ]
  },
  {
    id: 18,
    featured: false,
    section: "opinion",
    category: "Opinion",
    date: "23 Dec 2025",
    title: "The World Wants Me to 'Be Myself' But Only the Polite Version",
    excerpt: "Everyone says 'just be yourself'—as long as it's convenient, doesn't make anyone uncomfortable, and fits the approved rules.",
    content: [
      "The world wants me to “Be Myself” but only the polite version.",
      "The world always says, “just be yourself”, but they don't understand why being yourself is so difficult. It's a common saying, isn't it? “Be yourself.” Yeah, okay I'll be myself as soon as I can get a minute without judgement, without comments, without being afraid I'm too different. You can be yourself, as long as you don't make anyone uncomfortable, as long as it's convenient, as long as it doesn't affect society too much.",
      "Yeah, alright, you can be yourself but how easy is it really? I mean, we all know the rules no-one likes to admit:",
      "1. You have to be confident, but not that confident.",
      "2. Have opinions, but only ones everyone agrees with.",
      "3. You're allowed to speak your mind until it makes someone stressed and uncomfortable.",
      "4. You can be unique, but good luck if you stand out too much.",
      "5. You can be honest, but only if the truth is cute and comforting.",
      "Nowadays it's like we are running our own PR for our personalities. We live in a society that makes us filter ourselves to fit in, makes us sand down every edge just to be liked.",
      "But honestly, I'd rather be different than a clone, wouldn't you? What's the point of having a personality if we all end up being clones? I'm happy being weird, at least I'm me."
    ]
  },
  {
    id: 19,
    featured: false,
    section: "community",
    category: "Community",
    date: "23 Dec 2025",
    title: "🎧🎬 WOULD YOU RATHER? 🎵",
    excerpt: "No thinking, instinct only—fifteen rapid-fire music, TV, and playlist dilemmas.",
    content: [
      "No thinking, instinct only x",
      "• Would you rather your favourite song play every time you enter a room or never remember its name?",
      "• Would you rather rewatch Friends forever or only watch one new show once and forget it straight after watching?",
      "• Would you rather your Spotify Wrapped expose you or your Netflix recently watched expose you?",
      "• Would you rather music be way too loud forever or vaguely muffled forever?",
      "• Would you rather your favourite song be a 10-second loop or a 7-minute slow build?",
      "• Would you rather accidentally play your sad song really loud from your phone or your most feral song?",
      "• Would you rather every song remind you of one person you miss or one place you can't go back to but loved?",
      "• Would you rather only watch shows like Brooklyn Nine-Nine on shuffle episodes or strict order, no skipping?",
      "• Would you rather know every lyric but sing badly or sing perfectly but forget words mid-chorus?",
      "• Would you rather music only hit after gremlin hours (midnight) or only hit in human hours (daylight)?",
      "• Would you rather binge Stranger Things with spoilers or wait a year but watch it fresh without any idea what might happen?",
      "• Would you rather your playlists be chronological chaos or over-organised to the point of a crash out?",
      "• Would you rather lose headphones forever or lose Wi-Fi forever?",
      "• Would you rather love a song for the music or for the vibes you made up in your head?",
      "• Would you rather an album with no skips or one song so good it ruins the rest?"
    ]
  },
  {
    id: 20,
    featured: false,
    section: "latest",
    category: "Latest",
    date: "19 Dec 2025",
    title: "Discrimination shown as trans girls are banned from Girl Guide groups",
    excerpt: "From 2nd December 2025, trans girls are banned from joining Girl Guide groups within the UK. Why was this decision made, and do you agree with it?",
    content: [
      "From 2nd December 2025, trans girls are banned from joining Girl Guide groups within the UK. Why was this decision made, and do you agree with it?",
      "This new decision means that girls who were assigned male at birth will no longer be able to join Girl Guide groups. The trustees within the organisation that oversees these groups says, “Trans girls and young women and others not recorded female at birth, will no longer be able to join Girlguiding as new young members.” They also said that there would be no changes for young women who are already members but more information on this topic will be shared next week. – BBC News.",
      "Many people from the public think it is unfair and discriminative against trans women. TransActual said: “There is no problem being solved here, only harm done.” In my opinion, this ban seems unfair because every girl should have the right to join. This decision excludes girls who only want to belong by being who they are. – BBC News.",
      "What do you think – should all girls be allowed to join, or do you agree with the rules that are set in place?"
    ]
  },
  {
    id: 21,
    featured: false,
    section: "community",
    category: "Community",
    date: "16 Dec 2025",
    title: "Surviving the Christmas countdown: Not everyone's waiting for cheer.",
    excerpt: "While everyone's out there counting down the days till the Christmas cheer, some are just trying to keep their heads above water.",
    content: [
      "Last week of college before Christmas break. Exciting, right? Yeah. For most. But not for the ones who can't even get through a weekend without a breakdown.",
      "We walk around and see families shopping for each other. All smiles and joy. We drive by houses with dramatic Christmas lights and inflatable Santas. We mourn that, the love. We envy a family that can actually function without a riot every week.",
      "We don't want the last week of college to end. We hope, yeah, actually hope it drags on. But we know it won't. We know as soon as Monday arrives, the week will evaporate. It's like when you're a kid and you never want Christmas to end. But now it's the complete opposite – you desperately need the break to end.",
      "We need the escape. The freedom. The flight instead of fight response. We need the days at college – it's a break from the constant chaos at home. We need the stability, the structure, the routine of the only escape. Why? Because at college at least we know what to expect.",
      "Christmas isn't supposed to be scary, but for some of us, it feels like we are in a room with no exit. It isn't supposed to be isolated. It should be enjoyed, wanted and cozy. We should be able to look forward to the dinner, the family time, the gifts and the happiness.",
      "Instead, we put on the act of love and joy. We normalise not feeling secure at home. Because while everyone's out there counting down the days till the Christmas cheer, we're just trying to keep our heads above water."
    ]
  },
  {
    id: 22,
    featured: false,
    section: "community",
    category: "Community",
    date: "20 Oct 2025",
    title: "Things That Ruin Your Day Every Day",
    excerpt: "Running out of milk before morning coffee, dead phones after charging all night, and loud phone calls before the town wakes up.",
    content: [
      "I think we can all agree no one wakes up with a smile. You wake up already drained or with little to no energy. But life gets in the way – it decides it's a great day to throw punches.",
      "It can be the simple things: 1. The car not starting first time. 2. Your phone being dead even after charging all night – a bit like us humans. 3. Maybe running out of milk before your morning coffee.",
      "It all sounds small in a list, petty even. But, just imagine this for a moment. You could be walking through town, barely functioning, and three people spawn in with music blasting at full volume in the middle of the high street.",
      "Or on an already rough day, you're chilling in Starbucks, barely out of bed, and there is one obnoxiously loud person shouting on the phone before the town has had a chance to wake.",
      "Honestly? These moments might feel small, tiny even. Except, on an already rough day it's like being hit by a ton of bricks. But humans being stubborn, we survive today just to ruin tomorrow all over again."
    ]
  },
  {
    id: 23,
    featured: false,
    section: "community",
    category: "Community",
    date: "15 Oct 2025",
    title: "College Chaos Therapy: How Students Unwind",
    excerpt: "Everyone has some sort of way to regulate themselves—here is how students at Broomfield College unwind after a long week.",
    content: [
      "Everyone has some sort of way to regulate themselves, it could be drawing, writing, maybe even singing. But college students, on the other hand… well, it's unpredictable to say the least.",
      "Students at Broomfield College shared some of their ways to unwind:",
      "• Scream clubs – Loads of people join and scream their lungs out.",
      "• Burrito yourself – Wrap yourself in a blanket really tight.",
      "• Exist – Get into bed, be alone, scroll on your phone.",
      "• Irritate your siblings – Classic way to distract yourself.",
      "• Aggressive bubble popping – Fidgety, calming, aggressive.",
      "• Go to bed – Nothing like a bit of sleep to make us unwind.",
      "• Play online games – Alone, or with friends, neither matters just relax.",
      "• Golfing range – Can be relaxing if you don't hit someone with the club!",
      "• Blast music – Nothing like a bit of loud music to kick off the day.",
      "These activities are… chaotic. That might be an understatement, but it doesn't matter that they aren't productive, that's not what regulating is. It only matters that it gives your brain a small moment to breathe."
    ]
  }
];
/* ==========================================================================
   2. NEWSPAPER ENGINE — NAVIGATION, RENDERING & SEARCH
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  // Set live UK date in utility bar
  const dateEl = document.getElementById("live-date");
  if (dateEl) {
    const today = new Date().toLocaleDateString("en-GB", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric"
    });
    dateEl.textContent = `${today} • Independent UK Journalism`;
  }

  // Persistent Visitor Counter using localStorage
  const countEl = document.getElementById("visitor-count");
  if (countEl) {
    let visits = parseInt(localStorage.getItem("orbisVoxVisits") || "1420", 10);
    visits += 1;
    localStorage.setItem("orbisVoxVisits", visits.toString());
    countEl.textContent = visits.toLocaleString("en-GB");
  }

  // Mobile Menu Toggle
  const mobileBtn = document.getElementById("mobile-menu-btn");
  const navLinksList = document.getElementById("nav-links");
  if (mobileBtn && navLinksList) {
    mobileBtn.addEventListener("click", () => {
      const isOpen = navLinksList.classList.toggle("open");
      mobileBtn.setAttribute("aria-expanded", isOpen.toString());
    });
  }

  // Render Homepage Sections
  renderHomepage();

  // Navigation Click Handlers
  document.querySelectorAll("[data-nav]").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = link.getAttribute("data-nav");
      navigateTo(target);
      if (navLinksList && navLinksList.classList.contains("open")) {
        navLinksList.classList.remove("open");
        mobileBtn.setAttribute("aria-expanded", "false");
      }
    });
  });

  // Search Form Handler
  const searchForm = document.getElementById("search-form");
  const searchInput = document.getElementById("search-input");
  if (searchForm && searchInput) {
    searchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const query = searchInput.value.trim();
      if (query) {
        renderSearchResults(query);
      }
    });
  }

  // Back Button on Single Article Reader
  const backBtn = document.getElementById("article-back-btn");
  if (backBtn) {
    backBtn.addEventListener("click", () => {
      navigateTo(lastSection || "home");
    });
  }
});

let lastSection = "home";

function showView(viewId) {
  document.querySelectorAll(".page-view").forEach((view) => {
    view.hidden = true;
    view.classList.remove("active");
  });
  const activeView = document.getElementById(viewId);
  if (activeView) {
    activeView.hidden = false;
    activeView.classList.add("active");
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function setActiveNav(sectionName) {
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.toggle("active", link.getAttribute("data-nav") === sectionName);
  });
}

function navigateTo(section) {
  lastSection = section;
  setActiveNav(section);

  if (section === "home") {
    showView("view-home");
  } else if (section === "about") {
    showView("view-about");
  } else if (section === "contact") {
    showView("view-contact");
  } else {
    renderCategoryArchive(section);
  }
}

function createArticleCard(article, isOpinion = false) {
  const card = document.createElement("article");
  card.className = isOpinion ? "opinion-card" : "article-card";
  card.setAttribute("tabindex", "0");
  card.setAttribute("role", "button");
  card.setAttribute("aria-label", `Read article: ${article.title}`);

  card.innerHTML = `
    <div>
      <span class="category-pill">${article.category}</span>
      <h3 class="card-title">${article.title}</h3>
      <p class="card-excerpt">${article.excerpt}</p>
    </div>
    <div class="card-footer">
      <span>${article.date}</span>
      <strong>Read Story →</strong>
    </div>
  `;

  const openHandler = () => openArticle(article.id);
  card.addEventListener("click", openHandler);
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openHandler();
    }
  });

  return card;
}

function renderHomepage() {
  // 1. Featured Article
  const featuredSlot = document.getElementById("featured-article-slot");
  const featured = ARTICLES.find((a) => a.featured) || ARTICLES[0];
  if (featuredSlot && featured) {
    featuredSlot.innerHTML = `
      <article class="featured-card" tabindex="0" role="button" aria-label="Read featured story: ${featured.title}">
        <div>
          <span class="category-pill">${featured.category}</span>
          <h3 class="featured-title">${featured.title}</h3>
          <p class="featured-excerpt">${featured.excerpt}</p>
          <div class="article-meta">
            <span>By Blake Richardson</span>
            <span>•</span>
            <span>${featured.date}</span>
          </div>
          <span class="read-more-cta">Read Full Report →</span>
        </div>
        <aside class="featured-aside">
          <blockquote class="featured-quote">“${featured.quote || featured.excerpt}”</blockquote>
          <span class="article-meta">Orbis Vox Lead Dispatch</span>
        </aside>
      </article>
    `;
    const cardEl = featuredSlot.querySelector(".featured-card");
    cardEl.addEventListener("click", () => openArticle(featured.id));
    cardEl.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openArticle(featured.id);
      }
    });
  }

  // 2. Latest Articles (Next 5 recent pieces)
  const latestGrid = document.getElementById("latest-articles-grid");
  if (latestGrid) {
    latestGrid.innerHTML = "";
    const latestList = ARTICLES.filter((a) => a.id !== featured.id).slice(0, 5);
    latestList.forEach((article) => {
      latestGrid.appendChild(createArticleCard(article));
    });
  }

  // 3. Opinion & Perspectives (Top 3 opinion pieces)
  const opinionGrid = document.getElementById("opinion-articles-grid");
  if (opinionGrid) {
    opinionGrid.innerHTML = "";
    const opinionList = ARTICLES.filter((a) => a.section === "opinion").slice(0, 3);
    opinionList.forEach((article) => {
      opinionGrid.appendChild(createArticleCard(article, true));
    });
  }

  // 4. Community & Youth Voices (Top 4 community pieces)
  const communityGrid = document.getElementById("community-articles-grid");
  if (communityGrid) {
    communityGrid.innerHTML = "";
    const communityList = ARTICLES.filter((a) => a.section === "community").slice(0, 4);
    communityList.forEach((article) => {
      communityGrid.appendChild(createArticleCard(article));
    });
  }
}

function renderCategoryArchive(section) {
  const badgeEl = document.getElementById("archive-badge");
  const titleEl = document.getElementById("archive-title");
  const descEl = document.getElementById("archive-description");
  const gridEl = document.getElementById("archive-articles-grid");

  const metaMap = {
    latest: {
      badge: "Complete Archive",
      title: "Latest Dispatches",
      desc: "Every published report, commentary, and community story from Orbis Vox."
    },
    local: {
      badge: "Regional & UK Focus",
      title: "Local News",
      desc: "Stories affecting communities close to home—because local news isn't optional."
    },
    opinion: {
      badge: "Columns & Commentary",
      title: "Opinion & Perspectives",
      desc: "Unfiltered viewpoints, cultural critique, and honest analysis."
    },
    community: {
      badge: "People & Youth Voices",
      title: "Community",
      desc: "Real experiences, student life, and the stories that deserve more attention."
    }
  };

  const info = metaMap[section] || metaMap.latest;
  badgeEl.textContent = info.badge;
  titleEl.textContent = info.title;
  descEl.textContent = info.desc;

  const filtered =
    section === "latest"
      ? ARTICLES
      : ARTICLES.filter((a) => a.section === section);

  gridEl.innerHTML = "";
  if (filtered.length === 0) {
    gridEl.innerHTML = `<p>No articles found in this section yet.</p>`;
  } else {
    filtered.forEach((article) => {
      gridEl.appendChild(createArticleCard(article));
    });
  }

  showView("view-archive");
}

function renderSearchResults(query) {
  setActiveNav("");
  const badgeEl = document.getElementById("archive-badge");
  const titleEl = document.getElementById("archive-title");
  const descEl = document.getElementById("archive-description");
  const gridEl = document.getElementById("archive-articles-grid");

  const lower = query.toLowerCase();
  const matches = ARTICLES.filter(
    (a) =>
      a.title.toLowerCase().includes(lower) ||
      a.excerpt.toLowerCase().includes(lower) ||
      a.category.toLowerCase().includes(lower) ||
      a.content.some((p) => p.toLowerCase().includes(lower))
  );

  badgeEl.textContent = "Search Results";
  titleEl.textContent = `Results for “${query}”`;
  descEl.textContent = `Found ${matches.length} matching article${matches.length === 1 ? "" : "s"}.`;

  gridEl.innerHTML = "";
  if (matches.length === 0) {
    gridEl.innerHTML = `<p>No articles matched your search. Try searching another keyword.</p>`;
  } else {
    matches.forEach((article) => {
      gridEl.appendChild(createArticleCard(article));
    });
  }

  showView("view-archive");
}

function openArticle(id) {
  const article = ARTICLES.find((a) => a.id === id);
  if (!article) return;

  document.getElementById("reader-category").textContent = article.category;
  document.getElementById("reader-date").textContent = article.date;
  document.getElementById("reader-title").textContent = article.title;
  document.getElementById("reader-standfirst").textContent = article.excerpt;

  const bodyEl = document.getElementById("reader-body");

