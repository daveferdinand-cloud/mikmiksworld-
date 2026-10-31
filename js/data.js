export {RECIPES,PANTRY} from './recipes.js';
export const SONGS=[
  {title:'Enchanted',subtitle:'Speak Now · a little wonderstruck',id:'lrN940Xh4jQ',credit:'Piano cover with strings · John Rod Dondoyano',color:'#b6a1c7'},
  {title:'Blank Space',subtitle:'1989 · main-character energy',id:'yROSm3OOn6Q',credit:'Piano instrumental · Zach Evans',color:'#b1c9d3'},
  {title:'Love Story',subtitle:'Fearless · the golden one',id:'0kEMvChfIFA',credit:'Piano cover · Karim Yacoub',color:'#d9b978'}
];
export const ROOMS=[
  {id:'art',name:'Art & sketch',title:'Make your mark.',eyebrow:'THE ART STUDIO',description:'Learn something new. Break a few rules. Fill a page that could only be yours.',image:'scene-art.webp'},
  {id:'crafts',name:'Craft & make',title:'From idea to “I made this.”',eyebrow:'THE MAKING TABLE',description:'Beautiful little projects, proper instructions, and a place to keep track of every experiment.',image:'mika-craft.webp'},
  {id:'stories',name:'Write & imagine',title:'An entire world. In your words.',eyebrow:'THE WRITING DESK',description:'A strange first line. A character with a secret. Your next story starts here.',image:'scene-stories.webp'},
  {id:'recipes',name:'Recipe lab',title:'A little kitchen creativity.',eyebrow:'THE NO-COOK KITCHEN',description:'Fifty things to make, mix, taste, and make your own. No oven required.',image:'mika-kitchen.webp'},
  {id:'plush',name:'Kitty & plush',title:'The very important collection.',eyebrow:'THE PLUSH SHELF',description:'Meet the personalities behind the plush. Give each one a story, a style, and a place to belong.',image:'mika-shelf.webp'}
];
const make=(id,title,category,minutes,materials,steps,extra)=>({id,title,category,minutes,materials,steps:steps.map(s=>({title:s[0],body:s[1]})),extra});
export const CRAFTS=[
 make('friendship','Chevron friendship bracelet','Wear',45,['Four colours of embroidery thread, 80 cm of each','Tape or a clipboard','Scissors'],[
 ['Set up the colours','Fold all four threads in half. Tie a loop at the fold and tape it down. Arrange the eight strands in a mirror: A B C D | D C B A.'],
 ['Make a forward knot','Take the outside-left A over the next strand in a “4” shape. Pass its tail through the loop and pull up gently. Repeat once: two loops make one knot. Work across the next two strands.'],
 ['Meet in the middle','From the right, use the outside A to make backward knots toward the centre. Tie the two A strands together with one double knot. That is the first V.'],
 ['Repeat the pattern','The B strands are now outside. Repeat left and right, always making two loops per knot. Keep an even tension and check the V after each row.'],
 ['Finish and fit','When it fits your wrist, split the strands into two groups and braid each tail. Tie through the starting loop. Make a second one in your cousin’s colours.']
 ],'Make a tiny sample first. Your first rows are practice, not a promise of perfection.'),
 make('zine','One-sheet mini zine','Paper',20,['One A4 or letter sheet','Pencil and markers','Scissors'],[
 ['Divide into eight','Fold the sheet in half lengthwise. Open, fold in half across the width, then in half again. Unfold: you should see eight equal rectangles.'],
 ['Make the centre slit','Fold the sheet across the width again. From the folded edge, cut along the centre crease only to the next crease. Stop there; do not cut to the outside edge.'],
 ['Find the book','Unfold and refold lengthwise. Push the short ends toward each other; the slit opens into a diamond. Keep pushing until the pages form a cross.'],
 ['Fold into pages','Fold the cross together into a little book. Number the pages lightly in pencil, including front and back covers.'],
 ['Give it a theme','Try “Things nobody tells you about being 11”, a tiny mystery, or a guide to your favourite characters. Add a title and one bold cover image.']
 ],'An eight-page zine is a brilliant excuse to tell a very small, very specific story.'),
 make('moodboard','A room moodboard','Room',30,['Paper or thin cardboard','Coloured paper or old magazines','Glue stick','Pencil and ruler'],[
 ['Pick a feeling','Write three words for your dream room: maybe calm, creative, and a little dramatic. Choose three main colours.'],
 ['Build a palette','Cut or colour three large swatches. Give them names and place them along one edge. Leave space around them.'],
 ['Choose the big pieces','Draw a desk, a shelf, and a place to read. Add material samples or colour scraps. Keep the largest piece as your focal point.'],
 ['Layer the details','Add lighting, plants, artwork, cushions, and one unexpected thing. Overlap a few pieces instead of lining everything up.'],
 ['Edit like a designer','Remove anything that fights your three words. Give the board a title. Circle one small change you could actually make to your room.']
 ],'A moodboard is a direction, not a shopping list. Rearranging what you have counts.'),
 make('origami','Origami corner bookmarks','Paper',15,['A square of paper','Markers','Small paper scraps','Glue stick'],[
 ['Make a triangle','Fold your square diagonally in half. Keep the long folded edge closest to you and the point facing away.'],
 ['Mark the pocket','Fold the left and right corners up to meet the top point. Unfold those two corners. Fold only the top layer of the top point down to the bottom edge.'],
 ['Tuck the corners','Fold each side corner back up, then tuck its point behind the folded-down flap. The result is a little diamond pocket.'],
 ['Make a character','Turn it into a cat, a strawberry, or a tiny monster using ears, leaves, or paper teeth. Keep glue away from the pocket opening.'],
 ['Test the fit','Slide the pocket over a page corner. Trim decorations that cover too many words, then make a matching bookmark for a cousin.']
 ],'Use a 15 cm square for your first one. Small origami is harder, not automatically better.'),
 make('charms','A bag charm with a story','Wear',25,['Strong string or cord','Beads with holes large enough for your cord','A key ring','Scissors'],[
 ['Choose a colour story','Pick three colours and a word, initial, or symbol that means something to you. Lay out your bead order before threading.'],
 ['Make the loop','Fold the cord in half. Feed the fold through the key ring, then pass both loose ends through the fold and pull snug.'],
 ['Thread the pattern','Thread beads on one or both tails. Repeat a pattern or make the two tails different. Leave at least 8 cm of cord for tying.'],
 ['Secure the ends','Tie two firm overhand knots under the last bead on each tail. Gently tug to test. Ask an adult to help secure slippery cord.'],
 ['Style and name','Clip it to a pencil case or bag. Give the charm a name and a tiny origin story: what would it be a good-luck charm for?']
 ],'A key ring keeps the whole charm together. Avoid attaching loose beads to anything for small children.'),
 make('collage','Cut-paper album cover','Paper',25,['Square of cardboard','Coloured paper','Glue','Pencil','Scissors'],[
 ['Invent an album','Choose an original title and three words for its mood. You can borrow the feeling of a favourite song without copying its cover.'],
 ['Find the focal point','Sketch one large shape or character. Keep it big enough to recognise when the cover is tiny.'],
 ['Cut the layers','Cut a background, a middle layer, and the main subject. Try torn edges on one layer for contrast.'],
 ['Set the type','Cut or draw your title. Make one word larger. Test the layout before gluing anything.'],
 ['Finish the edition','Glue from back to front. On the reverse, write three made-up song titles and a short note about the imaginary artist.']
 ],'Use your music as a mood, then make the imagery entirely your own.'),
 make('crochet','Your first crochet chain','Yarn',25,['Smooth medium-weight yarn','A crochet hook that matches the yarn label','Scissors'],[
 ['Make a slip knot','Cross the yarn into a loop. Pull a small loop from the working yarn through it. Put that loop on your hook and gently tighten.'],
 ['Hold the yarn','Hold the hook comfortably and pinch the knot with your other hand. Keep the working yarn loose enough to move.'],
 ['Yarn over','Bring the working yarn over the hook from back to front. Catch it in the groove.'],
 ['Pull through','Pull the caught yarn through the loop already on your hook. One new loop remains: you made one chain. Repeat 20 times, counting the little V shapes.'],
 ['Finish a sample','Leave a 10 cm tail, cut the yarn, and pull the tail all the way through your last loop. Compare your first five chains with your last five.']
 ],'If the hook will not fit through a loop, loosen your tension. A practice chain makes a lovely gift tie.'),
 make('desk','Cardboard desk organiser','Room',45,['Clean small cartons or boxes','Cardboard base','Paper or wrapping scraps','Tape and glue','Ruler and scissors'],[
 ['Plan what goes where','Gather the pencils, notes, and little objects you want to organise. Arrange three cartons on a base without glue.'],
 ['Vary the heights','Keep a tall pot for pencils, a medium one for scissors, and a shallow tray for small things. Mark cutting lines with a ruler. Ask for help with thick cardboard.'],
 ['Wrap the pieces','Cover each carton with paper. Fold the top edge neatly inside and secure it so pencils cannot catch on it.'],
 ['Build the base','Glue or tape the cartons to the base. Keep the heavier pot near the centre so the organiser does not tip.'],
 ['Finish the system','Label the compartments or add small drawings. Fill it and test: everything should be reachable with one hand.']
 ],'Design for the actual things you use. An organiser that works beats a perfect-looking one.'),
 make('bow','Layered paper bow','Paper',20,['Coloured paper','Ruler','Glue or tape','Scissors'],[
 ['Cut three strips','Cut one strip 20 × 3 cm, one 16 × 3 cm, and one 5 × 2 cm. Cut a fourth 12 × 3 cm strip for the tails.'],
 ['Form the loops','Bring both ends of the longest strip to its centre and secure. Do the same with the medium strip. Do not flatten the loops.'],
 ['Stack the layers','Place the smaller loop on the larger one. Pinch their centres together.'],
 ['Wrap the middle','Wrap the short strip around the centre and secure it behind. Cut a V into each end of the tail strip and attach it underneath.'],
 ['Give it a purpose','Use it on a notebook cover, gift, or moodboard. Try a second version with contrasting inner loops.']
 ],'Paper remembers a crease. Round loops with your finger instead of folding them flat.'),
 make('rocket','An engineered cardboard rocket','Build',60,['Cardboard tubes and thin cardboard','Paper','Ruler','Tape','Scissors'],[
 ['Design the silhouette','Sketch a rocket with a body, a cone, and three matching fins. Decide how tall it should be before cutting.'],
 ['Make a cone','Cut a paper circle and remove a wedge. Overlap the cut edges until it fits your tube, then tape the seam.'],
 ['Cut matching fins','Draw one fin template on cardboard. Trace it three times. Add a small fold-over tab along the edge that meets the tube.'],
 ['Build for balance','Tape the fins evenly around the body. Stand it upright and adjust until it balances without help. Attach the cone.'],
 ['Test and redesign','Try taller and wider fins on paper first. Which shape is most stable? Add a mission patch and a name for your craft.']
 ],'This is a display model, not a launcher. The challenge is stability and proportion.'),
 make('theatre','A miniature set design','Build',50,['A shoebox or small carton','Paper','Tape','Markers','Scissors'],[
 ['Choose a scene','Pick one moment from an original story: a library at midnight, a tiny café, or a backstage dressing room.'],
 ['Build the backdrop','Stand the box on its side. Draw or collage the back wall. Add a floor with a different colour or pattern.'],
 ['Create depth','Make three freestanding paper shapes with folded tabs. Place them at the front, middle, and back.'],
 ['Add one moving part','Create a door that opens, a curtain on a string, or a character on a folded-paper stand.'],
 ['Stage the moment','Move the pieces until the scene tells a story even without words. Write a one-line caption for the moment.']
 ],'Lighting changes a story. Test your set near a window and notice the shadows.'),
 make('journal','A pocket inspiration journal','Paper',30,['Six sheets of paper','Card for a cover','String','Hole punch','Pencils'],[
 ['Fold your pages','Fold the sheets in half together. Cut a card cover slightly larger than the folded pages.'],
 ['Punch the spine','Punch two holes near the folded edge through the cover and pages. Ask for help if the stack is thick.'],
 ['Bind the book','Thread string through both holes and tie a bow outside the spine. Keep it loose enough for the pages to open.'],
 ['Make four sections','Label a few pages: overheard lines, colour combinations, tiny drawings, and things to make.'],
 ['Start imperfectly','Fill the first page right away with one observation and one sketch. A used notebook is the goal.']
 ],'Leave the cover title until last. The journal might tell you what it wants to be called.'),
 make('weaving','Cardboard-loom mini weaving','Yarn',60,['A piece of cardboard','Yarn scraps in two colours','Scissors','Tape'],[
 ['Make the loom','Cut five small notches along the top and bottom of a 10 × 15 cm cardboard piece. Line them up.'],
 ['Add the warp','Tape a yarn end behind the board. Run it through the notches from top to bottom to make five parallel strings. Tape the end behind.'],
 ['Start the weft','Thread a long yarn tail over the first string, under the next, and so on. For the return row, reverse: under, over, under.'],
 ['Build the fabric','Gently push each row up. Keep the sides loose so your weaving stays rectangular. Knot on a new colour when you like.'],
 ['Take it off','Ask for help lifting the loops from the notches. Tie neighbouring loops together at each end. Trim loose tails or leave a little fringe.']
 ],'Over-under is the whole secret. A tiny woven rectangle becomes a plush blanket or coaster.'),
 make('press','A pressed-paper flower study','Paper',25,['Coloured paper','Pencil','Scissors','Glue','A page for mounting'],[
 ['Observe a flower','Choose a flower from imagination or a reference you can see. Notice petal shape, overlap, and how the centre sits.'],
 ['Draw the pieces','Draw five large petals, five smaller petals, a centre, a stem, and two leaves. Make the petals slightly different.'],
 ['Give them dimension','Curve the petals gently around a pencil. Fold a soft line down the leaves.'],
 ['Assemble from outside in','Glue the large petals first, then the small ones, then the centre. Leave the petal tips loose.'],
 ['Make a study page','Add your flower’s invented name, a colour palette, and a tiny sketch of what its garden might look like.']
 ],'Let the negative space between petals do some of the drawing.'),
 make('plush-tag','A plush passport','Plush',20,['Paper and card','Pencil and coloured pens','String or ribbon','Hole punch'],[
 ['Fold the passport','Fold two small sheets into a booklet and add a card cover. Write the plush’s name and draw its portrait.'],
 ['Invent the details','Add an imaginary hometown, a favourite snack, a special talent, and a very specific fear.'],
 ['Make a stamp page','Draw little empty stamp frames. Give each a label: first adventure, cousin visit, movie night, and more.'],
 ['Create a luggage tag','Cut a small card tag with the plush’s name only. Punch a hole and thread ribbon through it.'],
 ['Start the journey','Write the first adventure inside. Give it a date and an original stamp design.']
 ],'Keep names and places fictional. Plushes are allowed mysterious pasts.'),
 make('lettering','A hand-lettered name print','Room',35,['Paper','Pencil and eraser','Black pen','Coloured pens','Ruler'],[
 ['Find your composition','Draw a light baseline. Write a first name or short phrase in pencil with lots of room between letters.'],
 ['Create the letter shapes','Build each letter as an outline instead of a single stroke. Try tall narrow letters, chunky rounds, or a script.'],
 ['Check the spacing','Look at the empty shapes between letters. Adjust until those spaces feel balanced.'],
 ['Add depth','Choose one shadow direction, such as down and right. Repeat that same offset on every letter.'],
 ['Finish the print','Ink your outlines, erase dry pencil marks, and add two accent colours. Keep one clear focal point.']
 ],'One well-chosen detail repeated is more powerful than every decoration at once.')
];
export const GENRES=['Mystery','Fantasy','Real life','Adventure','Comedy','Poetry'];
export const SPARKS={
 Mystery:[['The book with no last page','A library book ends one page too soon. The person who borrowed it before you has left three clues.'],['A message in the margins','Someone is answering the notes you leave in your own notebook. Their handwriting looks familiar.'],['The missing painting','An empty frame appears at school. Nobody agrees on what used to be inside it.'],['Three cousins, one secret','A shared bracelet contains a message that only makes sense when all three cousins are together.']],
 Fantasy:[['The borrowed colour','You wake up with the ability to take a colour out of an object. It turns out someone has already taken the blue from the sea.'],['The almost-magic shop','Everything in the shop is a little bit magical and a little bit broken. You get one item for free.'],['A door in the sketchbook','The door you drew last night is open this morning. Something has left tiny footprints across the page.'],['The last ordinary day','Your best friend is sure today is completely ordinary. You have one hour to prove that the moon in your pocket is real.']],
 'Real life':[['The audition','You have practised for weeks, but the person before you performs the exact same piece. What do you do?'],['A good kind of different','Your cousin visits your school for a day and notices something everyone else stopped seeing.'],['The group project','Four people, four completely different ideas, and one afternoon to make something. Someone has to listen first.'],['An unsent letter','Write a letter your character is too nervous to send. Then write what happens when it is delivered by mistake.']],
 Adventure:[['A map with one wrong turn','The map is perfect except for a street that does not exist. It is also the only way home.'],['The rooftop garden','Three friends discover a hidden garden above their building. Someone has been keeping it alive for years.'],['Twenty minutes to curtain','The lead performer is missing and you know exactly where she went. Unfortunately, you are next on stage.'],['The tiny expedition','Your mission takes place entirely in one room. From the perspective of something two centimetres tall.']],
 Comedy:[['An extremely official complaint','A plush writes a furious letter about shelf conditions. Another plush has a very different version of events.'],['A recipe for disaster','The recipe is simple. The narrator is absolutely certain they know better.'],['The highly qualified cat','A cat accidentally becomes the head of a very important club. Its decisions are unexpectedly popular.'],['The announcement','Write a serious school announcement about something wonderfully ridiculous. Never let the narrator admit it is silly.']],
 Poetry:[['A colour without its name','Write a poem that makes someone feel a colour without naming it. Use sounds, textures, and one surprising comparison.'],['An ordinary thing, closely seen','Choose a hair ribbon, pencil, or favourite mug. Describe it as if nobody has ever seen one before.'],['Two places at once','Write six lines about missing someone. Let every second line describe what they might be doing right now.'],['The song of a room','List the sounds of your favourite room. Turn them into a poem with a rhythm of your own.']]
};
export const ART_PROMPTS=[
 'Design a room for a character who collects moonlight. Show how the light enters.',
 'Draw the same face with three different emotions. Change the brows before the mouth.',
 'Make an imaginary album cover using only three colours and one shape.',
 'Draw a favourite object from above, from the side, and impossibly close.',
 'Invent a clothing collection for three cousins. Give each outfit one shared detail.',
 'Fill a page with different leaves. Make the spaces between them as interesting as the leaves.',
 'Draw a tiny café inside an ordinary object. Decide how someone enters.',
 'Design a character starting with a silhouette. Could someone recognise them in shadow?',
 'Illustrate a word so its letters show what it means. Try whisper, tangled, or float.',
 'Draw a place you know, then add one impossible detail. Make it feel believable.',
 'Make a comic in four panels where the last panel changes the meaning of the first.',
 'Draw your plush as the lead character in an adventure. Give it an outfit with a purpose.',
 'Create a pattern for a notebook cover. Repeat three shapes at different sizes.',
 'Draw a bowl of fruit with one light source. Add the shadows last.',
 'Design a garden for night-time. Which colours would you let glow?',
 'Invent a postcard from a place that does not exist. Draw both the stamp and the view.',
 'Sketch a hand holding a pencil. First reduce it to five simple shapes.',
 'Create a fashion illustration inspired by the mood of your favourite song.',
 'Draw an ordinary school bag with an extraordinary secret compartment.',
 'Make a tiny illustrated map connecting three cousins’ imaginary worlds.',
 'Draw one rose three ways: realistic, geometric, and made entirely of lines.',
 'Design a book cover that gives a clue without giving away the ending.',
 'Draw a scene using only warm colours. Repeat it using only cool colours.',
 'Create a comic conversation between two objects on your desk. No humans allowed.'
];
