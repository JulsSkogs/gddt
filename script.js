"use strict";

// Defining variables
let draftData
let draftNum
let draftTop
let chadPicks
let jtPicks
let striderPicks
let chrisPicks
let guestPicks
let drafters
let ranks
let epNum

// Selecting DOM elements
let chadWins = document.getElementById('#chadWins');
console.log(chadWins);

// Load Data from Supabase
loadStats();

async function loadStats() {
  const res = await fetch('https://czesuseuzdcfxulrcquh.supabase.co/rest/v1/drafts', {
    headers: {
      apikey: config.myKey,
      authorization: config.auth
    }
});

const data = await res.json();
console.log(data);

updateStats(data)
};

// Calculating Win Totals
// Separate each draft as their own array and then extract the draft rank for each drafter
function updateStats(dataArray) {
  dataArray.forEach((obj) => {
    const draftNum = obj.draftNum;
    const draftTop = obj.draftTop;
    const chadPicks = obj.chadPicks;
    const jtPicks = obj.jtPicks;
    const striderPicks = obj.jtPicks;
    const chrisPicks = obj.chrisPicks;
    const guestPicks = obj.guestPicks;
    const drafters = obj.drafters;
    const ranks = obj.ranks;
    const epNum = obj.epNum;
  })
}