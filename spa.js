

function renderTable(containerId, galleryData) {
    const container = document.getElementById(containerId);
    const table = document.createElement('table');
    let currentRow;

    galleryData.forEach((item, index) => {
        // Create a new row every 5 elements
        if (index % 5 === 0) {
            currentRow = document.createElement('tr');
            table.appendChild(currentRow);
        }

        const td = document.createElement('td');
        td.align = "center";

        // 1. Main Anchor (Full Res Logic: remove -thumb)
        const mainLink = document.createElement('a');
        mainLink.href = item.thumb.replace('-thumb', '');
        
        const img = document.createElement('img');
        img.src = item.thumb;
        img.style.borderColor = "#8888FF";
        img.style.borderStyle = "solid";
        img.style.borderWidth = "2px";
        
        mainLink.appendChild(img);
        td.appendChild(mainLink);
        td.appendChild(document.createElement('br'));

        // 2. Author Section
        if (item.author) {
          let authorLink = null;
          if(item.author.url == null) {
            authorLink = document.createElement('span');
          } else
          {
            authorLink = document.createElement('a');
            authorLink.href = item.author.url;
          }
            authorLink.textContent = item.author.name;
            td.appendChild(authorLink);
            td.appendChild(document.createElement('br'));
        }

        // 3. Extra Text (e.g. (slightly altered))
        if (item.extra) {
            const span = document.createElement('span');
            span.textContent = item.extra;
            td.appendChild(span);
            td.appendChild(document.createElement('br'));
        }

        // 4. License Section
        if (item.license) {
            const licLink = document.createElement('a');
            licLink.href = item.license;
            licLink.target = "_blank";
            licLink.textContent = "license";
            td.appendChild(licLink);
        }

        currentRow.appendChild(td);
    });

    container.appendChild(table);
}

  function renderCreditsPage() {
    var html = `
<div align="center">The following people have contributed to <a href="#">Age of Fable</a>:</div>
<div style="height:12px">&nbsp;</div>
<div align="center"><b>Your adventures were faithfully chronicled</b></div>
<div align="center"><b>with nothing false set down, nor anything true omitted,</b></div>
<div align="center">by <a href="http://www.apolitical.info/teleleli" target="_blank">James Hutchings</a>.</div>
<div style="height:12px">&nbsp;</div>
<div align="center"><b>The people, places, gods and monsters</b></div>
<div align="center"><b>of Karrakara and the islands around have been accurately depicted by the following artists.</b></div>
<div style="height:12px">&nbsp;</div>
<div align="center">Thanks are due to these artists for permission to use their work.</div>
<div align="center">Each miniature may be inspected by clicking the thumbnail.</div>
<div style="height:12px">&nbsp;</div>

<table align="center"><tbody id='gallery1'></tbody></table>

<div style="height:12px">&nbsp;</div>
<div align="center">The pictures in the letters at the start of the game are by <a href="http://dcrouzet.chez-alice.fr/" target="_blank">Dominique Crouzet</a>.</div>
<div style="height:12px">&nbsp;</div>
<div align="center"><b>This artwork is also in the public domain:</b></div>
<div style="height:12px">&nbsp;</div>
<table align="center"><tbody id='gallery2'></tbody></table>

<div style="height:12px">&nbsp;</div>
<div align="center"><b>Many things which were foretold have come to pass.</b></div>
<div align="center">The idea for the oasis on the horizon by <a href="https://thefreerpgblog.blogspot.com/" target="_blank">Rob Lang</a>.</div>
<div align="center">Gnome named by Nadia Menon.</div>
<div align="center">The description of the pyramid taken from Robert E. Howard.</div>
<div align="center">Cthulhu invented by H.P. Lovecraft.</div>
<div align="center">The rebel's speech by <a href="https://en.wikipedia.org/wiki/John%20Ball%20(priest)" target="_blank">John Ball</a>.</div>
<div align="center">The cryer's chant by Percy Shelley.</div>
<div align="center">The idea of Janooth by the <a href="http://www.vitalspot.f9.co.uk/" target="_blank">Vital Spot</a>.</div>
<div align="center">The original idea of the Hollow Mockery by <a href="http://www.myspace.com/phoenixofborg" target="_blank">Phoenix Talion</a>.</div>
<div align="center">The phrase 'Ape-Rajahs' is inspired by <a href="http://www222.pair.com/sjohn/encounter-critical.htm" target="_blank">Encounter Critical</a>.</div>
<div align="center">Prince Dimitri originally inspired by a character in the Fabled Lands series.</div>
<div align="center">The mad goblin inspired by the Fabled Lands series. His speech by <a href="https://en.wikipedia.org/wiki/Thomas%20de%20Quincey" target="_blank">Thomas de Quincey</a> (slightly adapted).</div>
<div align="center">The rating system for ghosts by <a href="http://www.nonadventures.com/" target="_blank">Justin Pierce</a>.</div>
<div align="center">'The Crows Call My Name' from an idea by Jack Handey.</div>
<div align="center">The living door inspired by a similar feature in the Tunnels and Trolls paperback rules.</div>
<div align="center">Dead Eye Street inspired by Forever Street and Nowhere Lane in the Fighting Fantasy series.</div>
<div align="center">The description of the smoke in the pyramid based on the D&amp;D module 'White Plume Mountain'.</div>
<div align="center">The gods in the pyramid are based on Lolth from D&amp;D, and Yag-kosha from <a href="http://www.apolitical.info/webgame/tower.php">The Tower of the Elephant</a>.</div>
<div align="center">Font used for The End is <a href="https://greywolf.critter.net/fonts.htm">Greywolf Nouveau</a> (changed from the missing original)</div>
`;
    const creditsContainer = document.getElementById('credits-container');
    creditsContainer.innerHTML = html;
    renderTable('gallery1', artists1)
    renderTable('gallery2', artists2)
  }
  function rollDie(sides) {
    return Math.floor(Math.random() * sides) + 1;
  }

  function roll2d6Plus(statValue) {
    return rollDie(6) + rollDie(6) + statValue;
  }

const classTemplates = {
  "talking cat": { idx:1, stats: [1,20,5,15,1,11,1,20,5,20,1,20], name: "Seti Nur-ishtar", male:true },
  wizard: { idx:2, stats: [3,8,8,8,12,20,10,12,9,10,16,4], name: "Perilandera", male:false },
  scoundrel: { idx:3, stats: [5,16,9,12,5,6,1,5,20,20,1,20], name: "Urang Semalai", male:true },
  bard: { idx:4, stats: [8,20,5,5,10,5,5,5,12,20,9,16], name: "Hisvet Sigrun", male:false },
  knight: { idx:5, stats: [10,5,20,15,9,10,20,5,1,10,10,5], name: "Be-Steadfast Toth", male:true },
  nomad: { idx:6, stats: [15,5,13,13,19,5,14,20,1,5,9,1], name: "Taruk Few-Clothes", male:true },
  pirate: { idx:7, stats: [13,13,13,13,20,1,5,5,14,9,1,13], name: "Two Souls Macout", male:true },
  fairy: { idx:8, stats: [1,19,1,1,1,19,10,10,19,19,15,5], name: "Damael", male:false },
  dwarf: { idx:9, stats: [20,5,10,17,3,3,15,15,8,8,8,8], name: "Longshanks Macabee", male:true },
  barbarian: { idx:10, stats: [14,5,14,19,14,5,9,14,10,10,1,5], name: "Ektor the Patient One", male:true },
  assassin: { idx:11, stats: [1,15,15,15,5,11,1,11,15,11,5,15], name: "Owl-Waits-For-the-Moon", male:true },
  witch: { idx:12, stats: [13,13,5,5,1,20,5,15,5,13,20,5], name: "Sulia Bukawayo", male:false },
  faun: { idx:13, stats: [5,20,1,10,5,20,1,20,20,10,7,1], name: "Hekatotaratos", male:true },
  troll: { idx:14, stats: [20,1,10,20,3,10,5,20,5,10,15,1], name: "Ingvar Arnesson", male:true },
  courtesan: { idx:15, stats: [1,20,1,1,8,10,15,1,8,20,15,20], name: "White Sparrow", male:false },
  "fortune-teller": { idx: 16, stats: [7,15,6,8,12,1,1,15,15,15,10,15], name: "Goody Atkins", male:false },
  amazon: { idx: 17, stats: [15,1,17,17,17,1,12,17,1,4,17,1], name: "Ana Blood-On-The-Arm", male:false },
  "lizard-man": { idx: 18, stats: [19,1,19,19,1,19,19,19,1,1,1,1], name: "Bright Skin Young Jewel", male:true },
  explorer: { idx:19, stats: [19,15,1,1,19,1,14,19,1,14,15,1], name: "Temperance Jobsworth", male:true },
  aristocrat: { idx:20, stats: [1,10,20,1,20,20,1,10,2,20,10,5], name: "Euphemia", male:false }
};

function classTemplateStat(profession, statId) {
  stat = classTemplates[profession].stats[statId];
  if (statId == 0 || statId == 6)
    return stat + 5;
  return stat;
}

function classNameByIdx(idx) {
  for (const [name, data] of Object.entries(classTemplates)) {
    if (data.idx === idx) return name;
  }
}

const allItems = {
"null": {'idx': 1, 'kind': "item",},
"done specially below": {'idx': 2, 'kind': "item",},
"goblin-tailored cloak": {'idx': 3, 'kind': "item",},
"dwarven medallion": {'idx': 4, 'kind': "item",},
"Owyth": {'idx': 5, 'kind': "frog",},
"crown": {'idx': 6, 'kind': "item",},
"black pearl": {'idx': 7, 'kind': "item",},
"witch's bundle": {'idx': 8, 'kind': "item",},
"box from the armoured hut": {'idx': 9, 'kind': "item",},
"glass bottle": {'idx': 10, 'kind': "item",},
"Imp": {'idx': 11, 'kind': "imp",},
"fur (possibly magic)": {'idx': 12, 'kind': "item",},
"magic fur": {'idx': 13, 'kind': "item",},
"fur": {'idx': 14, 'kind': "item",},
"Owyth warrior": {'idx': 15, 'kind': "warrior",},
"unicorn": {'idx': 16, 'kind': "unicorn",},
"horse": {'idx': 17, 'kind': "horse",},
"book": {'idx': 18, 'kind': "item",},
"drum": {'idx': 19, 'kind': "item",},
"r.o.p.h., but this isn't used": {'idx': 20, 'kind': "item",}, //the name itself is not used
"neckweasel": {'idx': 21, 'kind': "item",},
"the Pearl of Wisdom": {'idx': 22, 'kind': "item",},
"Piteous Mew": {'idx': 23, 'kind': "cat",},
"raven": {'idx': 24, 'kind': "raven",},
"Ugly Stick": {'idx': 25, 'kind': "item",},
"key": {'idx': 26, 'kind': "item",},
"guide to Dead Eye Street": {'idx': 27, 'kind': "item",},
"red rose": {'idx': 28, 'kind': "item",},
"Yasmina": {'idx': 29, 'kind': "princess"}};

function getItemByIdx (idx) {
    for (const [name, data] of Object.entries(allItems)) {
    if (data.idx === idx) return name;
  }
}

function characterStartingPara (profession) {
  switch(profession) {
    case 8: return "Fstart";
    case 9: return "Dstart";
    case 13: return "Faunstart1";
    case 3: return Math.random() < 0.5 ? "Rstart" : 200;
    case 7: return Math.random() < 0.5 ? "Pstart" : 200;
    case 11: return "Astart";
    case 14: return "Tstart";
    case 15: return "Cstart";
    case 16: return "Ftstart";
    case 1: return "Catstart";
    case 20: return "Snow";
    default: return 200;
  }
}

function getImageForProfession(profession) {
  return 'images/thumb ' + profession + '.jpg';
}

// Dynamically generates a table of character images and links for the pregenerated character page
// classTemplates: map of profession -> { stats, name }
// containerId: id of the element to fill
function renderPregeneratedCharacters(containerId) {
  const professions = Object.keys(classTemplates);
  const table = document.createElement('table');
  table.style.margin = 'auto';
  let row = document.createElement('tr');
  professions.forEach((profession, i) => {
    const td = document.createElement('td');
    td.style.textAlign = 'center';
    const a = document.createElement('a');
    a.href = '?profession=' + profession + '&name=' + encodeURIComponent(classTemplates[profession].name) + "#selected";
    /*a.setAttribute('data-profession', profession);
    a.setAttribute('data-name', classTemplates[profession].name);*/
    const img = document.createElement('img');
    img.src = getImageForProfession(profession);
    img.alt = classTemplates[profession].name + ', a ' + profession;
    img.style.borderColor = '#8888FF';
    a.appendChild(img);
    td.appendChild(a);
    const nameDiv = document.createElement('div');
    nameDiv.textContent = classTemplates[profession].name;
    td.appendChild(nameDiv);
    const profDiv = document.createElement('div');
    profDiv.textContent = profession;
    td.appendChild(profDiv);
    row.appendChild(td);
    if ((i+1) % 4 === 0) {
      table.appendChild(row);
      row = document.createElement('tr');
    }
  });
  if (row.children.length > 0) table.appendChild(row);
  const container = document.getElementById(containerId);
  if (container) {
    container.innerHTML = '';
    container.appendChild(table);
  }
}

function renderCharacterRename() {
  let params = new URLSearchParams(window.location.search);
  prof = params.get('profession');
  charName = params.get('name');
  document.getElementById('rename-character-container').innerHTML = `<table align="center" width="100%"><tbody><tr valign="top"><td width="50%"><table align="center"><tbody><tr><td><div align="center"><img class="char-portrait" src="${getImageForProfession(prof)}"></div><div align="center"><i class="char-name">${charName}</i></div><div align="center" class="profession-name">${prof}</div></td><td><table border="0" cellspacing="0" cellpadding="0"><tbody>
    </tbody></table></td></tr></tbody></table><div align="center">
    <form name="input" id="rename" method="get"><input type="text" name="name"><input type="submit" value="enter"></form></div><div align="center">Enter the character's name in the text box above and click the 'enter' button, or</div><div align="center"><a href="#">leave the name as it is</a></div><div>&nbsp;</div></td><td width="60%"><div align="center">artwork by Rene Magritte</div><div align="center"><img src="rename%20character%20custom_files/intro.jpg"></div></td></tr></tbody></table>`
  return;
}

function closestProfession(stats) {
  //assumes stats already corrected (+5 stamina & heroism)
  let lowestScore = -1;
  let closest;
  for (let profession of Object.keys(classTemplates)) {
    let currentScore = 0;
    let idx = 0;
    for(const [i,v] of stats.entries()) {
      const templateStat = classTemplateStat(profession, idx);
      currentScore += Math.abs(v - templateStat);
      idx += 1;
    }
    if(lowestScore == -1 || currentScore < lowestScore) {
      lowestScore = currentScore;
      closest = profession;
    }
  }
  return closest;
}

function renderCharacterLinks() {
  const currentParams = new URLSearchParams(window.location.search);
  let selectedStats = new Map();
  const charLinks = document.getElementById('charLinks');
  charLinks.innerHTML = '';
  let linksTable = document.createElement('table');
  linksTable.align = 'center';
  let linksBody = document.createElement('tbody');
  let totalStats = 0;
  for(const attribute of attributes) {
    if(attribute == 'null') continue;
    let minStat = 1, maxStat = 20;
    if(attribute == "Stamina" || attribute == "Heroism") {
      minStat = 6; maxStat = 25;
    }
    currentlySelected = currentParams.get(attribute);
    if(!currentlySelected) currentlySelected = Math.floor((maxStat + minStat) / 2);
    totalStats += parseInt(currentlySelected);
    selectedStats.set(attribute, currentlySelected);
}
for(const attribute of attributes) {
    if(attribute == 'null') continue;
    let minStat = 1, maxStat = 20;
    if(attribute == "Stamina" || attribute == "Heroism") {
      minStat = 6; maxStat = 25;
    }
    let newTr = document.createElement('tr');
    newTr.innerHTML = `<td align="right"><b>${attribute}</b></td>`
    for(let statIdx=minStat;statIdx <= maxStat; statIdx++) {
      let newTD = document.createElement('td');
      newTD.align = 'center';
      if (statIdx == selectedStats.get(attribute)) {
        newTD.bgcolor = "#FF0000";
        newTD.className = 'whiteText';
        newTD.textContent = statIdx;
      }
      else {
        newA = document.createElement('a');
        newA.href='#create-links';
        newA.textContent = statIdx;
        newA.onclick = function(event) {
          event.preventDefault();
          const newParams = new URLSearchParams(selectedStats);
          //replace name param with the new name, keeping other params the same
          newParams.set(attribute, statIdx);
          window.location.hash = "create-links";
          history.pushState(null, '', '?' + newParams.toString() + window.location.hash);
          renderCharacterLinks();
        }
        newTD.appendChild(newA);
      }
      newTr.appendChild(newTD);
    }
    linksBody.appendChild(newTr);
  }
  linksTable.appendChild(linksBody);
  charLinks.appendChild(linksTable);
  const closest = closestProfession(selectedStats);
  document.querySelectorAll('.profession-name').forEach(elem => {elem.textContent = closest});
  document.querySelectorAll('.char-portrait').forEach(img => {
    img.src = getImageForProfession(closest);
    });
  document.getElementById('total-attributes-div').textContent = `The total attributes for this character are ${totalStats}`;
  let confirmDiv = document.getElementById('character-create-confirm');
  confirmDiv.innerHTML = '';
  if (totalStats == 130) {
    let startLink = document.createElement('a');
    startLink.id = 'start-link';
    const newParams = new URLSearchParams(selectedStats);
    newParams.set('profession', closest);
    startLink.href = window.location.pathname + '?' + newParams.toString() + '#selected';
    startLink.textContent = 'Accept this character';
    confirmDiv.appendChild(startLink);
  } else {
    confirmDiv.textContent = 'Total attributes need to be 130';
  }
}

function renderSelectedCharacter() {
    let params = new URLSearchParams(window.location.search);
    let name = params.get('name');
    let profession = params.get('profession');
    let charData = classTemplates[profession];
    if (!charData) return;
    if (!name) name = charData.name;

    let idx = 0;
    for(const attribute of attributes) {
      if(attribute == 'null') continue;
      attrVal = params.get(attribute);
      if(attrVal) charData.stats[idx] = parseInt(attrVal);
      idx++;
    }

    var container = document.getElementById('selected-character-container');
    container.innerHTML = '';

    var table = document.createElement('table');
    table.style.width = '100%';
    var tr = document.createElement('tr');

    // Left column: character info
    var tdLeft = document.createElement('td');
    tdLeft.style.width = '50%';

    // Build the inner table for character info and stats
    var innerTable = document.createElement('table');
    innerTable.setAttribute('align', 'center');
    var innerTbody = document.createElement('tbody');
    var innerTr = document.createElement('tr');

    // Character image, name, profession
    var tdChar = document.createElement('td');
    tdChar.innerHTML = '<div align="center"><img class="char-portrait"></div>' +
      '<div align="center"><i class="char-name"></i></div>' +
      '<div align="center" class="profession-name">' + profession + '</div>';

    // Stat table
    var tdStats = document.createElement('td');
    var attrTable = document.createElement('table');
    attrTable.border = 0;
    attrTable.cellSpacing = 0;
    attrTable.cellPadding = 0;
    var attrTbody = document.createElement('tbody');
    for (var i = 1; i < attributes.length; i++) {
        var attrRow = document.createElement('tr');
        var tdName = document.createElement('td');
        tdName.textContent = attributes[i] + ':';
        var tdValue = document.createElement('td');
        tdValue.textContent = classTemplateStat(profession, i - 1);
        attrRow.appendChild(tdName);
        attrRow.appendChild(tdValue);
        attrTbody.appendChild(attrRow);
    }
    attrTable.appendChild(attrTbody);
    tdStats.appendChild(attrTable);

    innerTr.appendChild(tdChar);
    innerTr.appendChild(tdStats);
    innerTbody.appendChild(innerTr);
    innerTable.appendChild(innerTbody);
    tdLeft.appendChild(innerTable);

    // Accept and edit links
    tdLeft.innerHTML += '<div align="center"><a id="play-link" href="#ingame">start playing with this character</a></div>' +
      '<div>&nbsp;</div>' +
      '<div align="center">Edit this character, using<div align="center"><a href="#create-links">links</a> or <a href="#create-dropdown">drop-down menus</a></div><div align="center">or <a href="#">randomly change</a> their scores</div><div>&nbsp;</div><div align="center">rename this character - <a href="#selected" class="random-rename">randomly</a> or <a href="#rename">your choice</a></div><div>&nbsp;</div><div align="center"><a href="#home">Quit</a>';

    // Attach the random-rename event listener after the link is inserted
    let randomRenameLink = tdLeft.querySelector('.random-rename');
    if (randomRenameLink) {
      randomRenameLink.addEventListener('click', function(event) {
        event.preventDefault();
        
        const currentParams = new URLSearchParams(window.location.search);
        const gender_male = classTemplates[currentParams.get('profession')].male;
        let namebits = randomNameElements.length;
        let name;
        
        if (Math.random() * 9 < 3) {
          // one element
          let which;
          do {
              which = Math.floor(Math.random() * namebits) + 1;
          } while (randomNameElements[which].alone === 0 || randomNameElements[which].alone === 0);
          
          // OR gender [not sure what this comment means, but it was in the original code, so I'll keep it]
          name = randomNameElements[which].name;
        } else {
          // two elements
          let whichf, whichl;
          do {
              whichf = Math.floor(Math.random() * namebits); //original had +1, exluding Be-Steadfast, the priest first name, but not Toth, the last
              whichl = Math.floor(Math.random() * namebits);
          } while (whichf === whichl || 
                  randomNameElements[whichf].first === 0 || 
                  randomNameElements[whichl].last === 0 || 
                  randomNameElements[whichf].gender_male == gender_male || 
                  (whichl === 34 && gender_male) || 
                  (whichl === 90 && !gender_male));
          
          // gender check only for first name
          // but element 34 (Gottmundsdaughter) and 90 (Halfull) are special.
          name = randomNameElements[whichf].name + " " + randomNameElements[whichl].name;
        }
        currentParams.set('name', name);
        window.location.hash = "selected";
        history.pushState(null, '', '?' + currentParams.toString() + window.location.hash);
        document.querySelectorAll('.char-name').forEach(nameElem => {
        nameElem.textContent = name || charData.name; });
      });
    }

    tr.appendChild(tdLeft);

    // Right column: artwork
    var tdRight = document.createElement('td');
    tdRight.style.width = '60%';
    tdRight.innerHTML = '<div align="center">artwork by Rene Magritte</div>' +
      '<div align="center"><img src="selected%20pregenerated%20character%20page_files/intro.jpg"></div>';
    tr.appendChild(tdRight);

    table.appendChild(tr);
    container.appendChild(table);

    //also, set the character image to the selected one
    document.querySelectorAll('.char-portrait').forEach(img => {
    img.src = getImageForProfession(profession);
    });
    //and the name
    document.querySelectorAll('.char-name').forEach(nameElem => {
        nameElem.textContent = name || charData.name;
    });

    document.getElementById('play-link').addEventListener('click', function() {
      const currentParams = new URLSearchParams(window.location.search);
      currentParams.set('para', characterStartingPara(charData.idx));
      currentParams.set('name', name);
      //debugger;
      //window.location.hash = "ingame";
      //debugger;
      window.location.href = window.location.pathname + '?' + currentParams.toString() + '#ingame';
      //history.pushState(null, '', '?' + currentParams.toString() + '#ingame');
    });
}

  // Attribute list (index 1-based to mirror the PHP code)
  const attributes = [
    "null",
    "Stamina",
    "Charisma",
    "Duelling",
    "Brawling",
    "Seafaring",
    "Magic",
    "Heroism",
    "Scouting",
    "Roguery",
    "Luck",
    "Healing",
    "Streetwise",
  ];

  const attIndexByName = Object.fromEntries(
    attributes.map((name, idx) => [name, idx]),
  );

let gameState = {
    para: null,
    profession: 0,
    name: "",
    // 1-based stats array: [dummy, Stamina, Charisma, Duelling, ...]
    stats: [
      0,
      0, // Stamina
      0, // Charisma
      0, // Duelling
      0, // Brawling
      0, // Seafaring
      0, // Magic
      0, // Heroism
      0, // Scouting
      0, // Roguery
      0, // Luck
      0, // Healing
      0, // Streetwise
    ],
    // remember to treat initial max Stamina as equal to initial Stamina and let ADVANCE rolls raise maxsta.
    maxsta: 0,
    shells: 0,
    items: new Set(),
    keywords: new Set(),
    blessings: {},
  };

function gainBlessing(whichName) {
  // gain a blessing: [whichName|'random', dest]
  // Blessings keyed by attribute name (or other text). We'll store counts in state.bless[name], keeping 0
  let chosen = null;
  if (whichName === "random") {
    // pick a random attribute name (skip index 0); Shelter is the only non-attribute blessing
    const names = [...attributes.slice(1), "Shelter"];
    chosen = names[Math.floor(Math.random() * names.length)];
  } else {
    chosen = whichName;
  }
  gameState.blessings[chosen] = (gameState.blessings[chosen] || 0) + 1;
  return chosen;
}

function clampStat(idx) {
    const attrName = attributes[idx];
    if (attrName === "Stamina") {
      if (gameState.stats[idx] < 1) {
        gameState.stats[idx] = 0;
        gameState.over = true;
      }
      if (gameState.stats[idx] > gameState.maxsta) {
        gameState.stats[idx] = gameState.maxsta;
      }
    } else {
      if (gameState.stats[idx] < 1) gameState.stats[idx] = 1;
    }
  }

gameState.blessings = Object.fromEntries(attributes.map(attr => attr === 'null' ? ['Shelter', 0] : [attr, 0]));

function statCheck(div, stats, difficulty, made) {
    const magicChecksWithoutPenalty = [
  "Childno",
  "boilingseafigurea",
  "Uglys",
  "Tokescapeff",
  "Grossfvom1",
  "Grossfnovom",
  "chainexploren",
  "Pyrlooke",
  "Pyrlookh",
  "seacity6",
  "Clownyn",
  "Finalozywall2y1",
  "nearly269gu",
  "Amaheadaff1"
]
    function magicLoss(stat) {
        if(stat == "Magic" && ! magicChecksWithoutPenalty.includes(gameState.para) && gameState.stats[1] > 1) {
            let loss = Math.min(Math.floor(Math.random() * 2) + 1, gameState.stats[1] - 1);
            gameState.stats[1] -= loss;
            rollInfo += `</div><div class='metatext'>Lose ${loss} Stamina` } }
    passedRolls = 0;
    for(const stat of stats) {
      const dice = roll2d6Plus(gameState.stats[attIndexByName[stat]]);
      rollInfo = `<div class="metatext">${stat} roll, difficulty ${difficulty} - `;//has to be red
      
        if (dice >= difficulty) {
        // advancement roll
        const adroll = rollDie(20);
        if (dice >= difficulty + 5 && adroll > gameState.stats[stat]) {
          //advancement passed
          if (attributes[stat] !== "Stamina") {
            gameState.stats[stat] += 1;
          } else if (adroll > gameState.maxsta) {
            gameState.maxsta += 1;
          }
          rollInfo += `ADVANCED`;
        } else {
          rollInfo += `made it`;
        }
        passedRolls += 1;
      } else {
        if (gameState.blessings[attributes[stat]] > 0) {
          if(gameState.profession != 'fairy' || Math.random() > 0.5) {
            gameState.blessings[attributes[stat]] -= 1;
            rollInfo += `used blessing`;
            passedRolls += 1;
          } else {
            rollInfo += 'blessing failed'
            magicLoss(stat);
          }
        }
        else {
          rollInfo += `failed`;
          magicLoss(stat);
          }
        }
      rollInfo += "</div>";
      }
  div.innerHTML += rollInfo;
  div.innerHTML += `<div>&nbsp;</div>`;
  gameState.para = made[passedRolls];
}

function pushStateToURL() {
  /*flattenedState = {...gameState}
  flattenedState.keywords = Array.from(gameState.keywords);
  flattenedState.items = Array.from(gameState.items)
  const json = JSON.stringify(flattenedState);
  const newUrl = `${location.pathname}?s=${encodeURIComponent(json)}#ingame`;
  history.pushState(null, "", newUrl);*/
}

function getStateFromURL() {
  debugger;
  const params = new URLSearchParams(location.search);
  const json = params.get('s');
  if (json) {
      const parsedState = JSON.parse(json);
      // Validate the parsed state
      if (typeof parsedState === 'object' && parsedState !== null) {
        parsedState.keywords = new Set(parsedState.keywords);
        parsedState.items = new Set(parsedState.items);
        gameState = parsedState;
      }
      else throw 'Invalid parsed state'
    }
  else {
    gameState.para = params.get('para');
    gameState.name = params.get('name');
    gameState.profession = params.get('profession');
    if(gameState.para == undefined) gameState.para = characterStartingPara(classTemplates[gameState.profession].idx);
    template = classTemplates[gameState.profession]
    for(let i=1; i < gameState.stats.length; i++)
      gameState.stats[i] = classTemplateStat(gameState.profession, [i-1]);
    if (['fairy', 'faun'].includes(gameState.profession))
      gainBlessing('random');
    gameState.maxsta = gameState.stats[1];
    if(template.idx == 8 || template.idx == 13)
      gameState.shells = 0;
    else if(template.idx == 9)
      gameState.shells = 40;
    else gameState.shells = 20;
  }
}

function weaponName() {
  const weaponnames = ["null","club","quarterstaff","machete","dagger","sword","scimitar","spear","trident","axe","war-hammer","mace"];
  if(gameState.items.has("r.o.p.h., but this isn't used"))
    return 'Rod of Puerile Humour'
  return weaponnames[classTemplates[gameState.profession].idx];
}

function renderInventory() {
  invDiv = document.getElementById('itemsDiv'); invDiv.innerHTML = '<div>Items:</div>';
  compDiv = document.getElementById('companions'); compDiv.innerHTML = '';
  for (const item of gameState.items) {
    
    if (allItems[item] == 'item') {
      invDiv.innerHTML += `<div>${item}</div>`;
    } else {
      compDiv.innerHTML += `<div>${item}</div>`;
    }
    if (item === "your weapon") {
      item = "Your " + weaponName();
    }
  }
  if (compDiv.innerHTML === '') { compDiv.textContent = 'You have no companions.'; }
  renderArt();
}

function renderArt() {
  const imageTag = document.getElementById('artwork-image');
  const creditsDiv = document.getElementById('artwork-credits');
  const para = gameState.para;
  if(para && art[para]) {
    const im = art[para];
    imageTag.src = `images/${im}.jpg`;
    const artist = artists[im];
    if (artist[1] != 'public') {
      creditsDiv.innerHTML = `artwork by <a href='http://${artist[1]}'>${artist[0]}</a>`;
    } else {
      creditsDiv.textContent = `artwork by ${artist[0]}`;
    }
  }
  else {
    imageTag.src = 'images/title.jpg';
    creditsDiv.textContent = 'artwork copyright Azalea';
  }
}

function attrDescription(statName, value) {
  if (statName === "Stamina") {
    if (value < 2) return "near death";
    else if (value < 5) return "sickly";
    else if (value < 8) return "unhealthy";
    else if (value < 12) return "unremarkable";
    else if (value < 16) return "healthy";
    else if (value < 19) return "robust";
    else return "unstoppable";
  }
  else if (statName === "Charisma") {
    if (value < 3) return "repulsive";
    else if (value < 6) return "hateful";
    else if (value < 9) return "annoying";
    else if (value < 12) return "innocuous";
    else if (value < 15) return "likeable";
    else if (value < 18) return "charming";
    else return "mesmerising";
  }
  else if (statName === "Duelling") {
    if (value < 5) return "clumsy";
    else if (value < 9) return "slow";
    else if (value < 12) return "average";
    else if (value < 16) return "agile";
    else if (value < 19) return "dangerous";
    else return "deadly";
  }
  else if (statName === "Brawling") {
    if (value < 4) return "puny";
    else if (value < 7) return "weak";
    else if (value < 11) return "unremarkable";
    else if (value < 15) return "strong";
    else if (value < 19) return "powerful";
    else return "legendary";
  }
  else if (statName === "Seafaring") {
    if (value < 3) return "gets seasick in the bath";
    else if (value < 6) return "landlubber";
    else if (value < 9) return "mediocre";
    else if (value < 12) return "fair";
    else if (value < 15) return "good";
    else if (value < 19) return "great";
    else return "old salt";
  }
  else if (statName === "Magic") {
    if (value < 3) return "powerless";
    else if (value < 6) return "poor";
    else if (value < 9) return "mediocre";
    else if (value < 12) return "fair";
    else if (value < 15) return "good";
    else if (value < 19) return "great";
    else return "superb";
  }
  else if (statName === "Heroism") {
    value = value - 5;
    if (value < 3) return "wicked";
    else if (value < 6) return "corrupt";
    else if (value < 8) return "selfish";
    else if (value < 11) return "wavering";
    else if (value < 14) return "good-hearted";
    else if (value < 17) return "bold";
    else return "heroic";
  }
  else if (statName === "Scouting") {
    if (value < 3) return "gets lost in the back yard";
    else if (value < 6) return "terrible";
    else if (value < 9) return "poor";
    else if (value < 12) return "mediocre";
    else if (value < 15) return "fair";
    else if (value < 19) return "good";
    else return "great";
  }
  else if (statName === "Roguery") {
    if (value < 3) return "terrible";
    else if (value < 6) return "poor";
    else if (value < 9) return "mediocre";
    else if (value < 12) return "fair";
    else if (value < 15) return "good";
    else if (value < 19) return "great";
    else return "superb";
  }
  else if (statName === "Luck") {
    if (value < 3) return "cursed";
    else if (value < 6) return "ill-starred";
    else if (value < 9) return "mediocre";
    else if (value < 12) return "fair";
    else if (value < 15) return "lucky";
    else if (value < 19) return "auspicious";
    else return "charmed";
  }
  else if (statName === "Healing") {
    if (value < 3) return "terrible";
    else if (value < 6) return "poor";
    else if (value < 9) return "mediocre";
    else if (value < 12) return "fair";
    else if (value < 15) return "good";
    else if (value < 19) return "great";
    else return "superb";
  }
  else if (statName === "Streetwise") {
    if (value < 3) return "babe in the woods";
    else if (value < 6) return "clueless";
    else if (value < 9) return "foolish";
    else if (value < 12) return "unwise";
    else if (value < 15) return "fair";
    else if (value < 19) return "alert";
    else return "crafty";
  }
}

function pushMessage(message) {
  storyDiv = document.getElementById('story');
  storyDiv.innerHTML += message;
  storyDiv.innerHTML += `<div>&nbsp;</div>`;
}

function runParagraph() {
  if(!gameState.para) return;
  storyDiv = document.getElementById('story');
  storyDiv.innerHTML = '';
  //getStateFromURL();
  //pushStateToURL();
  for (;;) {
  const entry = paras[gameState.para];
  if (!entry) {
    // If we the para doesn't exist, fall back to the in-world "Oops" paragraph instead of a raw error.
    para = "Oops";
    continue;
  }

  let [body, branch, ...slots] = entry;

  //you don't get the forest pool encounter
  //if your Charisma and Heroism are too different.
  //IF CHANGE ATTRIBUTES, NEED TO CHANGE THIS.
  if ( gameState.para == "Forestpool" && Math.abs(gameState.stats[2] - gameState.stats[7])>9) {
    gameState.para = 301;
  } else if (gameState.para=="Foxwomanss") {
  // at 'Foxwomanss' your class becomes 'bird'
  // and you lose all your items and companions.
  gameState.profession = 'bird';
  gameState.shells = 0;
  let lostCompanions = 0;
  gameState.items.forEach(item => {
    if(allItems[item] != "item" || item == "neckweasel") lostCompanions += 1;
  });
  gameState.items = [];
  
  switch(lostCompanions) {
    case 0: body = "The vixen looks" + body; break;
    case 1: body = "Your companion looks" + body; break;
    default: body = "Your companions look" + body;
  }
  }

  // Show body if it isn't "no text". Append so multiple automatic
  // paragraphs render together on one page.
  if (body && body !== "no text") {
    const html = body.replace(/WEAPONNAME/g, weaponName());
    storyDiv.innerHTML += `<div style="margin-bottom:0.85rem;">${html}</div>`;
  }
 //Fix: write body only in relevant paras

  // Player-choice branches: stop and render buttons
  if (branch === 0 || branch === 25) {
    gameState.over = true;
    //print "<img style=\"border:0px\" src=\"http://www.apolitical.info/webgame/images/end.jpg\">";
    storyDiv.innerHTML += `<div>&nbsp;</div><img src="end.png" style="border:0px" alt="the end"><div>&nbsp;</div>`;
    break;
  }

  if (branch === 1) {
    // single automatic destination: continue immediately onto it
    const dest = slots[0];
    gameState.para = dest;
    continue;
  }

  if (branch === 2) {
    //player choice
    const count = slots[0];
    const choices = [];
    for (let i = 0; i < count; i++) {
      const label = slots[1 + i * 2];
      const dest = slots[1 + i * 2 + 1];
      choices.push({ label, dest });
    }
    renderChoices(choices);
    renderInventory();
    break;
  }

  // Automatic branches; update state and continue loop.
  if (branch === 3) {
    // saving roll: [attrName, difficulty, successPara, failPara]
    const attrName = slots[0];
    const difficulty = slots[1];
    const successPara = slots[2];
    const failPara = slots[3];

    statCheck(storyDiv, [attrName], difficulty, [failPara, successPara]);
    continue;
  }

  if (branch === 4) {
    // random branching: [howMany, ...destinations]
    const howMany = slots[0];
    const destIndex = rollDie(howMany);
    const dest = slots[destIndex];
    gameState.para = dest;
    continue;
  }

  if (branch === 5) {
    // item check: [itemId, haveDest, notDest]
    const itemId = slots[0];
    const haveDest = slots[1];
    const notDest = slots[2];
    const itemName = getItemByIdx(itemId);
    gameState.para = gameState.items.has(itemName) ? haveDest : notDest;
    continue;
  }

  if (branch === 6) {
    // keyword check: [keywordId, haveDest, notDest]
    const kwId = slots[0];
    const haveDest = slots[1];
    const notDest = slots[2];
    const hasKw = gameState.keywords.has(kwId);
    gameState.para = hasKw ? haveDest : notDest;
    continue;
  }

  if (branch === 7) {
    // gain/lose item: [itemId, 0|1, dest]
    const itemId = slots[0];
    const value = slots[1];
    const dest = slots[2];
    const itemName = getItemByIdx(itemId);
    if (value) {
      gameState.items.add(itemName);
    } else {
      gameState.items.delete(itemName);
    }
    gameState.para = dest;
    continue;
  }

  if (branch === 8) {
    // gain/lose keyword: [kwId, 0|1, dest]
    const kwId = slots[0];
    const value = slots[1];
    const dest = slots[2];
    if (value) {
      gameState.keywords.add(kwId);
    } else {
      gameState.keywords.delete(kwId);
    }
    gameState.para = dest;
    continue;
  }

  if (branch === 9) {
    // attribute change: [attrName, delta, dest]
    const attrName = slots[0];
    let delta = slots[1];
    const dest = slots[2];
    const idx = attIndexByName[attrName];
    if (!idx) {
      pushMessage(
        `<div class="metatext">ERROR: non-existent attribute "${attrName}" in para ${gameState.para}</div>`,
      );
      gameState.para = dest;
      continue;
    }
    gameState.stats[idx] += delta;
    clampStat(idx);
    if (delta !== 0) {
      const sign = delta > 0 ? "+" : "";
      pushMessage(`<div class='metatext'>${attrName} ${sign}${delta}</div>`);
    }
    if (attrName === "Stamina" && gameState.stats[idx] < 1) {
      pushMessage(
        'Alas, the damage was too much for you. You have died.<div>&nbsp;</div><img src="end.png" style="border:0px" alt="the end">');
      renderInventory();
      break;
    }
    gameState.para = dest;
    continue;
  }

  if (branch === 10) {
    // shells change: [delta, dest]
    let delta = slots[0];
    const dest = slots[1];
    if (gameState.shells + delta < 0) delta = -gameState.shells;
    gameState.shells += delta;
    if (delta !== 0 && delta !== -0) {
      const gain = delta > 0;
      const amount = Math.abs(delta);
      if (amount < 900) {
        storyDiv.innerHTML += `<div class="metatext">${gain ? "Gain" : "Lose"} ${amount} shell${amount > 1 ? "s" : ""}</div>`;
      } else {
        storyDiv.innerHTML += `<div class="metatext">${gain ? "Gain" : "Lose"} a vast haul of booty</div>`;
      }
      storyDiv.innerHTML += '<div>&nbsp;</div>'
      cowrieDiv = document.querySelector('.cowries');
      cowrieDiv.textContent = `Cowrie Shells:${gameState.shells}`;
    }
    gameState.para = dest;
    continue;
  }

  if (branch === 11) {
    // shell check: [minShells, haveDest, notDest]
    const minShells = slots[0];
    const haveDest = slots[1];
    const notDest = slots[2];
    gameState.para = gameState.shells >= minShells ? haveDest : notDest;
    continue;
  }

  if (branch === 12) {
    // multiple saves
    const howMany = slots[0];
    const difficulty = slots[1];
    let saves = []
    for (let i = 0; i < howMany; i++) {
      saves.push(slots[2 + i]);
      }
    // destinations are after attributes: fail-all, made 1, made 2, ...
    const baseDestIndex = 2 + howMany;
    statCheck(storyDiv, saves, difficulty, slots.slice(2 + howMany));
    continue;
    }

  if (branch === 13) {
    // 'click to continue' – show the paragraph body, then a single Continue button
    const dest = slots[0];
    renderChoices([{ label: "Continue", dest }]);
    // reflect this state in the URL (so saving/links work at this point)
    renderInventory();
    break;
  }

  if (branch === 16) {
    // profession-based split: [profNumber, matchDest, otherDest]
    const checkProf = slots[0];
    const matchDest = slots[1];
    const otherDest = slots[2];
    gameState.para = gameState.prof === checkProf ? matchDest : otherDest;
    continue;
  }

  if (branch === 14) {
    const whichName = slots[0];
    const dest = slots[1];
    let chosen = gainBlessing(whichName);
    pushMessage(`<span style="color:#f66;">gain ${chosen} blessing</span>`);
    gameState.para = dest;
    continue;
  }

  if (branch === 15) {
    // non-attribute blessing check (just Shelter): [whichName, haveDest, notDest]
    const whichName = slots[0];
    const haveDest = slots[1];
    const notDest = slots[2];
    const count = gameState.blessings[whichName] || 0;
    if (count > 0) {
      gameState.blessings[whichName] = count - 1;
      pushMessage(`<span style="color:#f66;">use ${whichName} blessing</span>`);
      gameState.para = haveDest;
    } else {
      gameState.para = notDest;
    }
    continue;
  }

  if (branch === 17) {
    // conditional free choice: [maxChoices, label, requirement, dest, ...]
    const maxChoices = slots[0];
    const choices = [];
    for (let i = 0; i < maxChoices; i++) {
      const label = slots[1 + i * 3];
      const req = slots[1 + i * 3 + 1];
      const dest = slots[1 + i * 3 + 2];
      let met = false;
      if (req === 0) {
        met = true;
      } else if (req > 1000) {
        // requires keyword to be 0
        met = !gameState.keywords.has(req - 1000);
      } else if (req > 0) {
        // requires keyword present
        met = gameState.keywords.has(req);
      } else if (req < 0 && req > -100) {
        // requires you have item (-req)
        met = gameState.items.has(-req);
      } else {
        // req <= -100 : requires you NOT have item ((-req)-100)
        met = !gameState.items.has((-req) - 100);
      }
      if (met) choices.push({ label, dest });
    }
    renderChoices(choices);
    renderInventory();
    break;
  }

  if (branch === 18) {
    // lose all companions (non-'item' entries in itemnames)
    const dest = slots[0];
    for (const idStr of Object.keys(itemnames)) {
      const id = Number(idStr);
      const info = itemnames[id];
      if (!info) continue;
      const kind = info[1];
      // special-case the PHP exception for para '69main' (keep cat/raven there)
      if (kind !== "item" && !(gameState.para === "69main" && (id === 22 || id === 23))) {
        gameState.items[id] = 0;
      }
    }
    gameState.para = dest;
    continue;
  }

  //no longer used in the final game
  if (branch === 20) {
    // level check: [level, destIfAtLeast, destIfNot]
    let total = 0;
    for (let i = 1; i < attributes.length; i++) total += gameState.stats[i] || 0;
    let level = Math.max(1, 1 + Math.floor((total - 130) / 10));
    const required = slots[0];
    const yes = slots[1];
    const no = slots[2];
    gameState.para = level >= required ? yes : no;
    continue;
  }

  if (branch === 21) {
    // change one attribute to equal another: [changeName, targetName, dest]
    const changeName = slots[0];
    const targetName = slots[1];
    const dest = slots[2];
    const ci = attIndexByName[changeName];
    const ti = attIndexByName[targetName];
    if (!ci || !ti) {
      pushMessage(`<span style="color:#ff6;">ERROR: NON-EXISTENT ATTRIBUTE</span>`);
    } else {
      gameState.stats[ci] = gameState.stats[ti];
    }
    gameState.para = dest;
    continue;
  }

  if (branch === 22) {
    // shell check against random(1..n): [n, destIfMake, destIfFail]
    const n = slots[0];
    const success = slots[1];
    const failure = slots[2];
    const check = rollDie(n);
    gameState.para = gameState.shells >= check ? success : failure;
    continue;
  }

  if (branch === 23) {
    // change profession randomly: [dest]
    // only at the Well of New Life
    const dest = slots[0];
    let newprof;
    do {
      newprof = classNameByIdx(Math.floor(Math.random() * classes.length));
    } while (newprof === gameState.profession || newprof === 0); // never select clown thorugh branch 23
    gameState.profession = newprof;
    gameState.para = dest;
    document.querySelectorAll('.char-portrait').forEach(img => {
    img.src = getImageForProfession(newprof);
    document.getElementsByClassName('profession-name').textContent = newprof;
    });
    continue;
  }

  if (branch === 24) {
    // become a clown (profession 0): [dest]
    const dest = slots[0];
    gameState.profession = 'clown';
    gameState.para = dest;
    document.querySelectorAll('.char-portrait').forEach(img => {
    img.src = getImageForProfession('clown');
    });
    continue;
  }

  if (branch === 19) {
    // "haven't written this yet"
    gameState.para = "Oops";
    continue;
  }
}
  if (storyDiv.innerHTML.includes('images/illuminated')) pushMessage('Picture in the letter by <a href="http://dcrouzet.chez-alice.fr">Dominique Crouzet</a>')
}

function renderChoices(choices) {
  //[[label, dest]]
  actionsDiv = document.getElementById('actions');
  actionsDiv.innerHTML = '';
  choices.forEach(choice => {
    nextTr = document.createElement('tr');
    nextTd = document.createElement('td');
    nextA = document.createElement('a');
    stateAdapt = {...gameState};
    stateAdapt.para = choice.dest;
    stateAdapt.keywords = Array.from(gameState.keywords);
    stateAdapt.items = Array.from(gameState.items)
    const json = JSON.stringify(stateAdapt);
    const newUrl = `${location.pathname}?s=${encodeURIComponent(json)}#ingame`;//need to covert the obj before making the json
    nextA.href = newUrl;
    nextA.textContent = choice.label;
    nextTd.appendChild(nextA);
    nextTr.appendChild(nextTd);
    actionsDiv.appendChild(nextTr);
  });
}

function renderIngamePage() {
    getStateFromURL();
    let container = document.getElementById('ingame-container');
    // Create main table
    const mainTable = document.createElement('table');
    mainTable.setAttribute('width', '100%');
    
    const tbody = document.createElement('tbody');
    const tr = document.createElement('tr');
    
    // Story column
    const leftTd = document.createElement('td');
    leftTd.setAttribute('width', '25%');
    
    //empty div to copy the original format of the page
    const div1 = document.createElement('div');
    div1.innerHTML = '&nbsp;';
    leftTd.appendChild(div1);
    
    const div2 = document.createElement('div');
    leftTd.appendChild(div2);
    
    const div3 = document.createElement('div');
    div3.innerHTML = '&nbsp;';
    leftTd.appendChild(div3);
    
    const div4 = document.createElement('div');
    div4.innerHTML = '&nbsp;';
    leftTd.appendChild(div4);
    
    const div5 = document.createElement('div');
    div5.id = 'story';
    div5.innerHTML = 'Story text';    leftTd.appendChild(div5);
    
    const div6 = document.createElement('div');
    div6.innerHTML = '&nbsp;';
    leftTd.appendChild(div6);
    
    // Inner table for actions
    const innerTable = document.createElement('table');
    innerTable.setAttribute('align', 'center');
    innerTable.setAttribute('width', '100%');
    
    const innerTbody = document.createElement('tbody');
    innerTbody.id = 'actions';
    
    innerTable.appendChild(innerTbody);
    leftTd.appendChild(innerTable);
    
    const div7 = document.createElement('div');
    div7.innerHTML = '&nbsp;';
    leftTd.appendChild(div7);
    
    const div8 = document.createElement('div');
    div8.innerHTML = '&nbsp;';
    leftTd.appendChild(div8);
    
    // Middle column (50%)
    const middleTd = document.createElement('td');
    middleTd.id = 'artwork'
    middleTd.setAttribute('width', '50%');
    
    const middleDiv1 = document.createElement('div');
    middleDiv1.id = 'artwork-credits'
    middleDiv1.setAttribute('align', 'center');
    middleDiv1.textContent = 'artwork by Herrad von Landsberg';
    middleTd.appendChild(middleDiv1);
    
    const middleDiv2 = document.createElement('div');
    middleDiv2.setAttribute('align', 'center');
    const middleImg = document.createElement('img');
    middleImg.id = 'artwork-image'
    middleImg.style = "border:0px"
    middleImg.src = 'ingame%20page_files/hell.jpg';
    middleDiv2.appendChild(middleImg);
    middleTd.appendChild(middleDiv2);
    
    const middleDiv3 = document.createElement('div');
    middleDiv3.setAttribute('align', 'center');
    const creditsLink = document.createElement('a');
    creditsLink.href = '#';
    creditsLink.target = '_blank';
    creditsLink.textContent = 'credits';
    
    const homeLink = document.createElement('a');
    homeLink.href = '#home';
    homeLink.textContent = 'quit';
    
    const storiesLink = document.createElement('a');
    storiesLink.href = '#stories';
    storiesLink.target = '_blank';
    storiesLink.textContent = 'library';
    
    middleDiv3.appendChild(creditsLink);
    middleDiv3.appendChild(document.createTextNode(' . '));
    middleDiv3.appendChild(homeLink);
    middleDiv3.appendChild(document.createTextNode(' . '));
    middleDiv3.appendChild(storiesLink);
    middleTd.appendChild(middleDiv3);
    
    const middleDiv4 = document.createElement('div');
    middleDiv4.innerHTML = '&nbsp;';
    middleTd.appendChild(middleDiv4);
    
    // Right column (25%)
    const rightTd = document.createElement('td');
    rightTd.id = 'right-column';
    rightTd.setAttribute('width', '25%');
    
    // Character portrait table
    const portraitTable = document.createElement('table');
    portraitTable.setAttribute('border', '0');
    portraitTable.setAttribute('cellspacing', '0');
    portraitTable.setAttribute('cellpadding', '0');
    
    const portraitTbody = document.createElement('tbody');
    
    const portraitTr = document.createElement('tr');
    const portraitTd = document.createElement('td');
    
    const portraitImg = document.createElement('img');
    portraitImg.className = 'char-portrait';
    portraitImg.src = getImageForProfession(classTemplates[gameState.profession]);
    portraitTd.appendChild(portraitImg);
    portraitTr.appendChild(portraitTd);
    portraitTbody.appendChild(portraitTr);
    
    const nameTr = document.createElement('tr');
    const nameTd = document.createElement('td');
    nameTd.setAttribute('align', 'center');
    
    const nameDiv = document.createElement('div');
    nameDiv.setAttribute('align', 'center');
    nameDiv.innerHTML = `<i>${gameState.name}</i>`;
    nameTd.appendChild(nameDiv);
    
    const raceDiv = document.createElement('div');
    raceDiv.setAttribute('align', 'center');
    raceDiv.textContent = gameState.profession;
    nameTd.appendChild(raceDiv);
    
    nameTr.appendChild(nameTd);
    portraitTbody.appendChild(nameTr);
    
    portraitTable.appendChild(portraitTbody);
    rightTd.appendChild(portraitTable);
    
    const div9 = document.createElement('div');
    div9.innerHTML = '&nbsp;';
    rightTd.appendChild(div9);
    
    const invDiv = document.createElement('div');
    invDiv.id = 'inventory';
    // Stats table
    const statsTable = document.createElement('table');
    statsTable.setAttribute('border', '0');
    statsTable.setAttribute('cellspacing', '0');
    statsTable.setAttribute('cellpadding', '0');
    
    const statsTbody = document.createElement('tbody');
    
    statsTable.appendChild(statsTbody);
    invDiv.appendChild(statsTable);
    rightTd.appendChild(invDiv);
    
    const div10 = document.createElement('div');
    div10.innerHTML = '&nbsp;';
    rightTd.appendChild(div10);
    
    const cowrieDiv = document.createElement('div');
    cowrieDiv.className = 'cowries';
    cowrieDiv.textContent = `Cowrie Shells:${gameState.shells}`;
    rightTd.appendChild(cowrieDiv);
    
    const div11 = document.createElement('div');
    div11.innerHTML = '&nbsp;';
    rightTd.appendChild(div11);
    
    const blessingsDiv = document.createElement('div');
    let hasBlessings = false;
    Object.entries(gameState.blessings).forEach(([blessName, count]) => {
      if (count) {
        hasBlessings = true;
        blessingsDiv.innerHTML += `<div>${blessName} (${count})</div>`;
      }
    });
    if (!hasBlessings) {
      blessingsDiv.innerHTML = '<div>You have no blessings.</div>';
    }
    rightTd.appendChild(blessingsDiv);
    
    const div12 = document.createElement('div');
    div12.innerHTML = '&nbsp;';
    rightTd.appendChild(div12);
    
    const itemsDiv = document.createElement('div');
    itemsDiv.id = 'itemsDiv'
    itemsDiv.textContent = 'Items:';
    rightTd.appendChild(itemsDiv);
    
    const itemDiv = document.createElement('div');
    itemDiv.textContent = 'your mace';
    rightTd.appendChild(itemDiv);
    
    const div13 = document.createElement('div');
    div13.innerHTML = '&nbsp;';
    rightTd.appendChild(div13);
    
    const companionsDiv = document.createElement('div');
    companionsDiv.id = 'companions';
    rightTd.appendChild(companionsDiv);

    document.getElementById('ingame-container').innerHTML = '';
    
    // Assemble main table
    tr.appendChild(leftTd);
    tr.appendChild(middleTd);
    tr.appendChild(rightTd);
    tbody.appendChild(tr);
    mainTable.appendChild(tbody);
    document.getElementById('ingame-container').appendChild(mainTable);
    //document.getElementById('right-column').appendChild(portraitTable);
    runParagraph();
    for (let i = 1; i < attributes.length; i++) {
      const attr = attributes[i];
      let value = gameState.stats[i];
      const desc = attrDescription(attr, value);
      const statTr = document.createElement('tr');
      
      const labelTd = document.createElement('td');
      labelTd.textContent = `${attr}:`;
      statTr.appendChild(labelTd);
      
      const valueTd = document.createElement('td');
      valueTd.setAttribute('align', 'right');
      if(attr == 'Stamina')
        {valueTd.textContent = `${value}/${gameState.maxsta}`;} else {
        valueTd.textContent = value;}
      valueTd.textContent += ' ('; //that's how it did the table spacing
      statTr.appendChild(valueTd);
      
      const descTd = document.createElement('td');
      descTd.textContent = desc + ')';
      statTr.appendChild(descTd);
      
      statsTbody.appendChild(statTr);
      container.appendChild(mainTable);
    }
    document.querySelectorAll('.char-portrait').forEach(img => {
    img.src = getImageForProfession(gameState.profession);
    });
    renderInventory();
}


// random name elements
// with flags for where they can be: 1=first, 2=last, 3=alone.
// and for genders 4=male, 5=female
//(doesn't apply if used as surname)

const randomNameElements = [
  { name: "Be-Steadfast", first: 1, last: 1, alone: 1, male: 1, female: 1 
},
  { name: "Toth", first: 1, last: 1, alone: 1, male: 1, female: 0 },
  { name: "Perilandera", first: 1, last: 1, alone: 1, male: 0, female: 1 
},
  { name: "Urang", first: 1, last: 1, alone: 1, male: 1, female: 0 },
  { name: "Semalai", first: 1, last: 1, alone: 1, male: 1, female: 1 },
  { name: "Djemmela", first: 1, last: 0, alone: 1, male: 0, female: 1 },
  { name: "Hisvet", first: 1, last: 0, alone: 1, male: 0, female: 1 },
  { name: "Tasmetum-sharrat", first: 1, last: 1, alone: 1, male: 0, 
female: 1 },
  { name: "Goodenough", first: 1, last: 1, alone: 0, male: 1, female: 1 },
  { name: "Taruk", first: 1, last: 1, alone: 1, male: 1, female: 0 },
  { name: "Few-Clothes", first: 1, last: 1, alone: 1, male: 1, female: 1 
},
  { name: "Two Souls", first: 1, last: 1, alone: 1, male: 1, female: 1 
},
  { name: "Macout", first: 1, last: 1, alone: 1, male: 1, female: 1 },
  { name: "Damael", first: 1, last: 1, alone: 1, male: 1, female: 1 },
  { name: "Gadabout", first: 1, last: 1, alone: 1, male: 1, female: 1 },
  { name: "Longshanks", first: 1, last: 1, alone: 0, male: 1, female: 1 },
  { name: "Ektor", first: 1, last: 0, alone: 1, male: 1, female: 0 },
  { name: "the Patient One", first: 0, last: 1, alone: 0, male: 0, female: 0 },
  { name: "Owl-Waits-For-The-Moon", first: 1, last: 1, alone: 1, male: 1, female: 1 },
  { name: "Sulia", first: 1, last: 1, alone: 1, male: 0, female: 1 },
  { name: "Bukawayo", first: 1, last: 1, alone: 1, male: 1, female: 1 },
  { name: "Hekatotaratos", first: 1, last: 1, alone: 1, male: 1, female: 0 },
  { name: "Ingvar", first: 1, last: 0, alone: 1, male: 1, female: 0 },
  { name: "Arnesson", first: 0, last: 1, alone: 0, male: 0, female: 0 },
  { name: "White", first: 1, last: 1, alone: 0, male: 1, female: 1 },
  { name: "Sparrow", first: 1, last: 1, alone: 1, male: 1, female: 1 },
  { name: "Goody", first: 1, last: 0, alone: 0, male: 0, female: 1 },
  { name: "Atkins", first: 1, last: 1, alone: 0, male: 1, female: 0 },
  { name: "Ana", first: 1, last: 0, alone: 1, male: 0, female: 1 },
  { name: "Blood-On-The-Arm", first: 1, last: 1, alone: 1, male: 1, female: 1 },
  { name: "Bright Skin", first: 1, last: 1, alone: 1, male: 1, female: 1 },
  { name: "Young Jewel", first: 1, last: 1, alone: 1, male: 1, female: 1 },
  { name: "Athousandapologies", first: 1, last: 1, alone: 1, male: 1, female: 1 },
  { name: "Gottmundsdaughter", first: 0, last: 1, alone: 0, male: 0, female: 1 },
  { name: "the Virtuous", first: 0, last: 1, alone: 0, male: 1, female: 1 },
  { name: "Sun", first: 1, last: 1, alone: 1, male: 1, female: 1 },
  { name: "Mad Tom", first: 1, last: 0, alone: 1, male: 1, female: 0 },
  { name: "Wee Jock", first: 1, last: 0, alone: 1, male: 1, female: 0 },
  { name: "Padrath", first: 1, last: 1, alone: 1, male: 1, female: 1 },
  { name: "Lori", first: 1, last: 1, alone: 1, male: 0, female: 1 },
  { name: "Ingrid", first: 1, last: 0, alone: 0, male: 0, female: 1 },
  { name: "Macabee", first: 1, last: 1, alone: 1, male: 1, female: 1 },
  { name: "du Mal", first: 0, last: 1, alone: 0, male: 1, female: 1 },
  { name: "Obadiah", first: 1, last: 0, alone: 1, male: 1, female: 0 },
  { name: "Perdus", first: 1, last: 1, alone: 1, male: 1, female: 1 },
  { name: "Iakkos", first: 1, last: 0, alone: 1, male: 1, female: 0 },
  { name: "the Unwanted Guest", first: 0, last: 1, alone: 0, male: 1, female: 1 },
  { name: "Crumhorn", first: 1, last: 1, alone: 1, male: 1, female: 1 },
  { name: "Agatha", first: 1, last: 0, alone: 0, male: 0, female: 1 },
  { name: "The Magnificent", first: 0, last: 1, alone: 0, male: 1, female: 1 },
  { name: "Cathlin", first: 1, last: 0, alone: 0, male: 0, female: 1 },
  { name: "Ajibayo", first: 1, last: 1, alone: 1, male: 1, female: 0 },
  { name: "Abanazir", first: 1, last: 1, alone: 1, male: 1, female: 1 },
  { name: "Notsoblind", first: 0, last: 1, alone: 1, male: 1, female: 1 },
  { name: "Deanna", first: 1, last: 0, alone: 0, male: 0, female: 1 },
  { name: "Hassan", first: 1, last: 1, alone: 1, male: 1, female: 0 },
  { name: "Kittybiscuits", first: 1, last: 1, alone: 1, male: 1, female: 1 },
  { name: "Anaxagoras", first: 1, last: 0, alone: 1, male: 1, female: 0 },
  { name: "Charis", first: 1, last: 1, alone: 1, male: 0, female: 1 },
  { name: "Leofric", first: 1, last: 1, alone: 1, male: 1, female: 0 },
  { name: "Idris", first: 1, last: 1, alone: 1, male: 1, female: 1 },
  { name: "Briar", first: 1, last: 1, alone: 1, male: 1, female: 1 },
  { name: "Hekatotaratos", first: 1, last: 1, alone: 1, male: 1, female: 0 },
  { name: "Ingvar", first: 1, last: 0, alone: 1, male: 1, female: 0 },
  { name: "Arnesson", first: 0, last: 1, alone: 0, male: 0, female: 0 },
  { name: "White", first: 1, last: 1, alone: 0, male: 1, female: 1 },
  { name: "Sparrow", first: 1, last: 1, alone: 1, male: 1, female: 1 },
  { name: "Goody", first: 1, last: 0, alone: 0, male: 0, female: 1 },
  { name: "Atkins", first: 1, last: 1, alone: 0, male: 1, female: 0 },
  { name: "Ana", first: 1, last: 0, alone: 1, male: 0, female: 1 },
  { name: "Blood-On-The-Arm", first: 1, last: 1, alone: 1, male: 1, female: 1 },
  { name: "Bright Skin", first: 1, last: 1, alone: 1, male: 1, female: 1 },
  { name: "Young Jewel", first: 1, last: 1, alone: 1, male: 1, female: 1 },
  { name: "Athousandapologies", first: 1, last: 1, alone: 1, male: 1, female: 1 },
  { name: "Gottmundsdaughter", first: 0, last: 1, alone: 0, male: 0, female: 1 },
  { name: "the Virtuous", first: 0, last: 1, alone: 0, male: 1, female: 1 },
  { name: "Sun", first: 1, last: 1, alone: 1, male: 1, female: 1 },
  { name: "Mad Tom", first: 1, last: 0, alone: 1, male: 1, female: 0 },
  { name: "Wee Jock", first: 1, last: 0, alone: 1, male: 1, female: 0 },
  { name: "Padrath", first: 1, last: 1, alone: 1, male: 1, female: 1 },
  { name: "Lori", first: 1, last: 1, alone: 1, male: 0, female: 1 },
  { name: "Ingrid", first: 1, last: 0, alone: 0, male: 0, female: 1 },
  { name: "Macabee", first: 1, last: 1, alone: 1, male: 1, female: 1 },
  { name: "du Mal", first: 0, last: 1, alone: 0, male: 1, female: 1 },
  { name: "Obadiah", first: 1, last: 0, alone: 1, male: 1, female: 0 },
  { name: "Perdus", first: 1, last: 1, alone: 1, male: 1, female: 1 },
  { name: "Iakkos", first: 1, last: 0, alone: 1, male: 1, female: 0 },
  { name: "the Unwanted Guest", first: 0, last: 1, alone: 0, male: 1, female: 1 },
  { name: "Crumhorn", first: 1, last: 1, alone: 1, male: 1, female: 1 },
  { name: "Agatha", first: 1, last: 0, alone: 0, male: 0, female: 1 },
  { name: "The Magnificent", first: 0, last: 1, alone: 0, male: 1, female: 1 },
  { name: "Cathlin", first: 1, last: 0, alone: 0, male: 0, female: 1 },
  { name: "Ajibayo", first: 1, last: 1, alone: 1, male: 1, female: 0 },
  { name: "Abanazir", first: 1, last: 1, alone: 1, male: 1, female: 1 },
  { name: "Notsoblind", first: 0, last: 1, alone: 1, male: 1, female: 1 },
  { name: "Deanna", first: 1, last: 0, alone: 0, male: 0, female: 1 },
  { name: "Hassan", first: 1, last: 1, alone: 1, male: 1, female: 0 },
  { name: "Kittybiscuits", first: 1, last: 1, alone: 1, male: 1, female: 1 },
  { name: "Anaxagoras", first: 1, last: 0, alone: 1, male: 1, female: 0 },
  { name: "Charis", first: 1, last: 1, alone: 1, male: 0, female: 1 },
  { name: "Leofric", first: 1, last: 1, alone: 1, male: 1, female: 0 },
  { name: "Idris", first: 1, last: 1, alone: 1, male: 1, female: 1 }
];

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('rename').addEventListener('submit', function(event) {
      event.preventDefault();    
      var nameInput = document.querySelector('#rename input[name="name"]');
      const currentParams = new URLSearchParams(window.location.search);
      //replace name param with the new name, keeping other params the same
      currentParams.set('name', nameInput.value);
      window.location.hash = "selected";
      history.pushState(null, '', '?' + currentParams.toString() + window.location.hash);
    });
});
