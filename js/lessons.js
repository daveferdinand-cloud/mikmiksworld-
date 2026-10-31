const lesson=(id,title,category,time,description,steps)=>({id,title,category,time,description,steps:steps.map(([title,body,svg])=>({title,body,svg}))});
export const LESSONS=[
 lesson('perspective','A room with a view','Perspective','25 min','Turn flat lines into a room you could step into.',[
 ['Find a vanishing point','Draw a light horizontal eye-level line. Mark one point near the centre. Lines moving away from you will aim for this point.','<path d="M25 125H375 M194 120L206 132 M206 120L194 132"/>'],
 ['Build the back wall','Draw a rectangle around your point. Connect its corners toward the edges of the page to create the floor, ceiling, and side walls.','<path d="M115 65H285V195H115Z M115 65L20 20 M285 65L380 20 M115 195L20 280 M285 195L380 280"/>'],
 ['Place the window','On a side wall, the top and bottom of the window tilt toward the vanishing point. Its upright edges stay upright.','<path d="M35 84L100 103V163L35 183Z M67 93V173 M35 134L100 133"/>'],
 ['Add a desk','Draw a tabletop on the back wall. Extend the front corners along lines from the vanishing point. Add upright legs underneath.','<path d="M150 155H255L280 180H130Z M140 180V230 M268 180V230 M155 156V190 M250 156V190"/>'],
 ['Make the room yours','Add a book, a plant, or a favourite object. Darken the lines you want to keep and soften the construction lines. What could you change about the room?','<path d="M180 154V130H207V154 M193 130Q165 110 180 104Q197 105 193 128 M193 128Q215 105 220 119Q213 133 193 130 M232 154V145H250V154"/>']
 ]),
 lesson('character','A face with personality','Characters','20 min','Expression starts with small changes, not enormous eyes.',[
 ['Map the head','Start with an oval, then add a centre line and an eye line halfway down. Turn the centre line slightly for a three-quarter face.','<ellipse cx="200" cy="140" rx="74" ry="100"/><path class="guide" d="M194 40Q224 140 194 240 M128 133Q200 151 272 133"/>'],
 ['Place the features','Keep roughly one eye-width between the eyes. Try small almond shapes. Put the nose below the eye line and the mouth between the nose and chin.','<path d="M151 139Q165 126 179 139Q165 148 151 139 M208 139Q221 126 235 139Q221 148 208 139 M195 149L190 177L202 177 M173 199Q196 214 222 195"/>'],
 ['Let eyebrows do the acting','Draw one brow a little higher. A lifted inner brow can look worried; a lifted outer brow can feel curious. Change one thing at a time.','<path d="M149 119Q165 105 180 115 M207 114Q223 106 239 117"/><circle cx="166" cy="138" r="4"/><circle cx="221" cy="138" r="4"/>'],
 ['Build the hair as a shape','Find the hairline, then the outside silhouette. Think in a few large sections before adding individual strands.','<path d="M125 151Q100 32 190 29Q290 21 278 168L263 208Q271 118 252 82Q204 110 141 89Q128 116 136 174 M141 89Q174 49 224 45"/>'],
 ['Try an expression sheet','Draw the face again twice: excited, suspicious, or trying not to laugh. Keep the head shape consistent. Compare which feature made the biggest difference.','<path d="M160 245Q195 266 234 243 M148 138Q166 127 180 139 M207 138Q221 130 235 140"/>']
 ]),
 lesson('fashion','An outfit with a point of view','Design','25 min','Use silhouette, fabric, and one memorable detail.',[
 ['Start with a gesture','Draw a light line for the pose, a small head, and tilted shoulder and hip lines. Keep the pose relaxed.','<ellipse cx="200" cy="43" rx="18" ry="23"/><path class="guide" d="M200 66L194 165L175 275 M194 165L231 275 M161 88L231 82 M166 163L222 168"/>'],
 ['Block in the outfit','Sketch a loose jacket and straight trousers over the pose. Clothes have thickness: leave a little space between the body and fabric.','<path d="M185 75L159 86L139 155L160 161L175 112L166 174L221 174L218 108L239 158L257 148L232 84L214 75 M169 174L162 270L188 270L196 195L212 270L238 270L221 174"/>'],
 ['Give the fabric weight','Add folds where fabric bends: elbows, waist, and knees. Choose a few folds that explain the form rather than lots of random lines.','<path d="M150 132L165 138 M231 132L245 126 M171 157L194 161L217 153 M168 227L181 235 M216 229L230 222"/>'],
 ['Choose the signature detail','Add a collar, big pockets, and one original motif. Repeat the motif in a smaller place to tie the design together.','<path d="M185 75L196 111L179 96L174 83 M214 75L196 111L223 93 M177 128H190V145H177Z M203 128H218V145H203Z M192 112V169"/>'],
 ['Make a mini collection','Draw two more versions using the same silhouette. Change the palette and one fabric detail. Name the collection after a mood, place, or favourite song’s feeling.','<path d="M161 270L156 279H190V271 M212 270L211 279H244L238 270"/>']
 ]),
 lesson('botanical','A rose, layer by layer','Botanical','20 min','Observe the edges, overlaps, and spaces between petals.',[
 ['Find the gesture','Draw a loose circle for the flower head. Add a curved stem. Avoid perfect symmetry: flowers are not rulers.','<ellipse class="guide" cx="205" cy="100" rx="65" ry="57"/><path d="M203 151Q175 200 196 280"/>'],
 ['Build the centre','Start with two or three folded petal shapes. Let each curve tuck behind the next.','<path d="M187 92Q200 67 222 91Q222 108 202 111Q177 108 187 92 M202 111Q178 85 192 78 M222 91Q238 101 217 119"/>'],
 ['Wrap the outer petals','Draw wider petals around the centre. Make some edges dip and others flare. Use overlapping lines to show which petal sits in front.','<path d="M192 78Q164 55 152 88Q143 113 179 126 M152 88Q131 84 140 115Q151 145 189 147 M222 79Q251 62 264 94Q278 122 235 139 M189 147Q210 165 235 139 M179 126Q204 149 230 123"/>'],
 ['Add leaves and structure','Leaves grow from the stem in different directions. Put a vein down the centre and give the edges a few small notches.','<path d="M188 202Q146 175 139 202Q161 225 188 202 M188 227Q224 190 240 211Q226 235 188 227 M145 203L185 202 M194 223L233 212"/>'],
 ['Shade where petals overlap','Hatch lightly under the folded edges. Leave the top surfaces open and bright. Try the same flower with just five confident lines.','<path d="M156 115L169 125 M164 115L177 126 M178 135L192 141 M186 132L201 141 M239 112L248 104 M236 119L249 111"/>']
 ]),
 lesson('ribbon','A bow that feels like fabric','Design','15 min','Make folds and volume with surprisingly few lines.',[
 ['Find the knot','Draw a small soft rectangle. This is the knot that pulls all the fabric inward.','<path d="M183 119Q200 112 216 120L215 153Q200 160 183 152Z"/>'],
 ['Let the loops open','From the knot, draw two wide loops. Their outer edges are rounded; their inner edges narrow toward the knot.','<path d="M183 123Q116 66 76 85Q43 124 81 173Q123 191 183 148 M216 123Q284 65 325 86Q354 127 317 174Q278 188 215 149"/>'],
 ['Turn the ribbon back','Add an inner curved edge to each loop. These lines show the fabric returning to the knot.','<path d="M78 87Q111 127 182 136 M324 87Q291 127 216 136 M83 171Q125 144 181 142 M317 172Q274 145 216 143"/>'],
 ['Add falling tails','Draw two tails leaving the bottom of the knot. Let one curl, and end each with an angled cut or V.','<path d="M184 151Q161 210 139 249L169 236L186 262Q203 212 200 157 M211 151Q238 202 264 229L237 225L233 250Q210 217 204 157"/>'],
 ['Shade the pinches','Darken just beside the knot and on the inside of the loops. Keep the big outer curves clean. Design your own print for the fabric.','<path d="M170 124L180 134 M164 132L179 138 M168 148L181 144 M221 134L234 123 M222 140L238 134 M220 145L235 150"/>']
 ]),
 lesson('lettering','Lettering with dimension','Lettering','20 min','Give a short word shape, rhythm, and a consistent shadow.',[
 ['Set a baseline','Draw two very light horizontal lines. Write MAKE between them with wide spacing. These are guides, not a cage.','<path class="guide" d="M35 95H365 M35 185H365"/><text x="45" y="177" font-size="84" font-family="Georgia">MAKE</text>'],
 ['Think in outlines','Imagine each letter as a solid shape. Widen the downstrokes. Check the spaces inside A and between the letters.','<path d="M42 192H351"/>'],
 ['Choose one shadow direction','Pick down and right. Repeat that same offset on every letter, even the curves.','<text x="51" y="183" font-size="84" font-family="Georgia" fill="#d6b0b8" stroke="none">MAKE</text><text x="45" y="177" font-size="84" font-family="Georgia" fill="#fffaf2">MAKE</text>'],
 ['Use accents sparingly','Add a small underline, star, or frame. Keep the word as the main event.','<path d="M105 210Q200 225 299 209 M324 55L329 69L344 72L331 80L332 95L321 85L307 91L312 77L302 66L317 67Z"/>'],
 ['Make a different version','Try the same word tall and narrow, then low and wide. Notice how the lettering changes the voice of the word.','<path d="M65 58L75 69 M91 49L96 63 M119 48L118 62"/>']
 ]),
 lesson('stilllife','Light on a favourite mug','Observation','20 min','Learn to see simple objects as volumes.',[
 ['Begin with an ellipse','Draw a wide oval for the top of the mug. A circle looks flatter as it turns away from you.','<ellipse cx="190" cy="75" rx="66" ry="22"/>'],
 ['Build the cylinder','Draw two upright sides and a curved bottom. The bottom curve follows the top ellipse.','<path d="M124 75V215Q190 250 256 215V75"/>'],
 ['Attach the handle','Start the handle below the rim and end it above the base. Add an inner shape so it has thickness.','<path d="M257 107Q324 86 324 152Q320 206 257 198 M257 126Q300 113 300 153Q299 180 257 177"/>'],
 ['Choose the light','Imagine the light coming from the upper left. Shade the right side with parallel curved strokes. Leave a narrow highlight.','<path d="M230 105V214 M239 102V217 M247 97V214 M216 126V213 M224 119V219"/>'],
 ['Ground the object','Add a soft shadow beneath and to the right. Draw a small pattern that wraps around the surface rather than floating on top.','<path d="M129 239Q211 278 316 239 M142 141Q187 162 229 145 M143 164Q187 186 229 168"/>']
 ]),
 lesson('comic','A four-panel mini comic','Comics','25 min','Tell a complete story with a setup, change, and payoff.',[
 ['Plan the rhythm','Divide a page into four panels. A quiet first panel gives the reader a place to start.','<path d="M22 20H190V145H22Z M210 20H378V145H210Z M22 165H190V290H22Z M210 165H378V290H210Z"/>'],
 ['Introduce the wish','A character wants something small: a snack, a quiet place, or one perfect drawing. Show it with a clear pose.','<circle cx="75" cy="71" r="16"/><path d="M75 88V125 M75 99L104 82 M75 99L53 113 M118 69H153V95H118Z"/>'],
 ['Change the situation','Add one complication. Keep the same character design so the reader follows them instantly.','<circle cx="260" cy="71" r="16"/><path d="M260 88V125 M260 99L288 101 M260 99L236 91 M306 91L319 71L331 90 M314 66L324 52"/>'],
 ['Pause before the payoff','Use a reaction or a silent beat in panel three. Give the final reveal the strongest shape.','<circle cx="77" cy="215" r="16"/><path d="M77 232V270 M77 245L103 235 M77 245L57 251 M64 210L71 211 M82 211L91 207 M73 225H83"/>'],
 ['Land the ending','In panel four, let the result surprise us. Add speech only if the picture cannot say it. Read the comic without the words to test it.','<circle cx="259" cy="216" r="16"/><path d="M259 233V270 M259 244L285 234 M259 244L236 250 M299 220Q336 181 361 218L352 267H306Z M311 217Q327 237 348 218"/>']
 ]),
 lesson('plush-design','Design your own plush','Characters','20 min','A memorable character starts with a readable silhouette.',[
 ['Find a silhouette','Draw one rounded body shape. Pick short legs, long ears, or a big tail as the character’s signature.','<path d="M140 120Q111 38 145 25Q174 27 172 105 M225 105Q225 25 255 30Q280 46 254 128 M145 109Q100 137 111 219Q121 275 197 273Q274 274 284 218Q300 142 254 116"/>'],
 ['Place the face','Keep the eyes and nose in a small cluster. Moving the cluster lower or higher changes the character’s age and personality.','<circle cx="166" cy="169" r="6"/><circle cx="230" cy="169" r="6"/><path d="M189 190H208L198 200Z M198 200V212 M185 211Q198 222 212 211"/>'],
 ['Show the soft parts','Add a belly patch, small feet, and a seam. Curves can make a form feel soft without extra fur lines.','<ellipse cx="199" cy="236" rx="38" ry="27"/><path d="M111 225Q132 216 140 251 M281 225Q258 214 252 252 M198 110V139"/>'],
 ['Give it one accessory','Choose an accessory that suggests a story: an explorer’s scarf, a tiny bag, or a borrowed bow.','<path d="M145 199Q198 225 253 199L250 218Q199 241 149 216 M237 217L253 256L231 247L224 224"/>'],
 ['Make a character sheet','Name it. Draw its side view. Add its favourite snack, a secret talent, and one thing it is hilariously bad at.','<path d="M48 80L59 95L42 95Z M333 162L343 177L327 177Z"/>']
 ]),
 lesson('cottage','A tiny storybook shop','Perspective','25 min','Architecture with a little character and a lot of detail.',[
 ['Build the main shape','Start with a simple rectangle. Mark a ground line to keep everything standing on the same surface.','<path d="M95 98H298V260H95Z M50 263H350"/>'],
 ['Choose a roof','Add a pitched roof. Let the eaves overhang the walls slightly so the building feels solid.','<path d="M77 98L197 24L315 98Z M105 82L197 40L288 83"/>'],
 ['Design the entrance','Place the door off-centre and give the shop a large display window. Check how a person would fit.','<path d="M119 161Q119 135 146 135Q173 135 173 161V260H119Z M194 136H277V215H194Z M234 136V215 M194 176H277"/>'],
 ['Tell us what it sells','Add an awning and one clue in the window. A bakery, bookshop, or tiny art store should look different.','<path d="M185 136L195 111H279L290 136Z M200 203V184H212V203 M216 203V178H230V203 M244 202Q261 177 272 203 M154 181H161"/>'],
 ['Give it history','Add a hanging sign, one plant, and a few uneven roof lines. Pick a shop name. What has this place seen?','<path d="M278 103H335V151H304V120H335 M68 257V230H87V257 M77 231Q49 200 62 192Q80 196 77 222 M77 224Q100 199 105 213Q97 231 77 224"/>']
 ]),
 lesson('pattern','A repeat that actually repeats','Design','20 min','Build a surface pattern for a notebook, fabric, or imaginary brand.',[
 ['Choose three motifs','Draw a flower, a leaf, and one small dot cluster. Use a shared line style so they feel related.','<circle cx="95" cy="95" r="10"/><path d="M95 85Q65 51 67 83Q35 91 66 104Q62 137 87 113Q110 139 115 110Q146 111 122 91Q139 62 108 78"/>'],
 ['Give them different sizes','Make the flower the largest, leaves medium, and dots tiny. A pattern needs rhythm as well as repetition.','<path d="M190 145Q159 91 209 80Q231 120 190 145 M190 141L207 87 M289 220Q253 182 290 167Q318 191 289 220"/>'],
 ['Move around the page','Repeat the shapes at different angles. Avoid putting all the flowers in a straight line unless that is your intention.','<path d="M278 57Q254 31 258 57Q232 68 259 76Q256 99 278 81Q299 101 303 77Q326 76 306 60Q316 37 292 48"/>'],
 ['Fill the quiet spaces','Add the smallest marks last. Step back and look for empty holes or crowded patches.','<circle cx="53" cy="196" r="4"/><circle cx="66" cy="207" r="4"/><circle cx="48" cy="214" r="4"/><circle cx="248" cy="136" r="4"/><circle cx="261" cy="147" r="4"/><circle cx="244" cy="154" r="4"/>'],
 ['Test a tile','For a true repeat, anything crossing the right edge must continue at the same height on the left. Try a second page with just two colours.','<path class="guide" d="M20 20H380V280H20Z M20 150H45 M355 150H380"/>']
 ]),
 lesson('kitty','A favourite kitty, remixed','Characters','15 min','A familiar face can be a warm-up for your own character design.',[
 ['Start with the silhouette','Draw a wide soft oval. Add two small rounded triangle ears. Keep the head wider than it is tall.','<path d="M124 92L130 45L173 72Q200 62 229 72L271 45L279 94Q310 124 292 192Q267 239 200 239Q129 239 106 191Q87 135 124 92Z"/>'],
 ['Place simple eyes','Draw two small upright ovals. The expression comes from their spacing, so try them lightly in pencil first.','<ellipse cx="161" cy="147" rx="6" ry="10"/><ellipse cx="241" cy="147" rx="6" ry="10"/>'],
 ['Add a tiny nose','A small oval between and below the eyes is enough. Leave room around it.','<ellipse cx="201" cy="171" rx="10" ry="7"/>'],
 ['Add whiskers and a bow','Use three short whiskers on each side. A bow is two soft loops around a small knot.','<path d="M93 146L132 152 M91 170H132 M96 197L135 187 M269 153L308 146 M270 171H310 M266 189L306 198 M252 90Q222 58 221 85Q220 110 251 101 M257 90Q280 62 287 86Q290 108 258 101"/><circle cx="254" cy="96" r="10"/>'],
 ['Now make it yours','Use the same simple-shape approach to invent a different character. Change the ears, silhouette, and one unmistakable detail.','<path d="M157 260Q199 272 245 257"/>']
 ])
];
