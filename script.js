"use strict";

// Defining variables
let draftData = []; // Declare the array in the global scope
const winners = {};

// Selecting DOM elements
 const chadWinTotal = document.querySelector(".chadWins")

// Load Data from Supabase

loadData();

async function loadData() {
  const res = await fetch('https://czesuseuzdcfxulrcquh.supabase.co/rest/v1/drafts', {
    headers: {
      apikey:config.myKey,
      authorization: config.auth
    }
  });
  const jsonData = await res.json();
  return jsonData;
}

async function processData() {
  const jsonData = await loadData();

  for (const obj of jsonData) {
    draftData.push(obj);
  return draftData;
  }
}
console.log(draftData);
// Calculating Win Totals
// Separate each draft as their own array and then extract the draft rank for each drafter
for (const draft of draftData) {

  const winner = draft.ranks[0]
  if (!winner.length) continue
  if (!(winner in winners)) {
  winners[winner] = 1
  } else {
  winners[winner]++
  }
}
console.log(winners)