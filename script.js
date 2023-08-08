"use strict";

// Defining variables
let draftData = []; // Declare the array in the global scope

// Selecting DOM elements


// Load Data from Supabase

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
  }

  console.log(draftData);
}

processData();

// Calculating Win Totals
// Separate each draft as their own array and then extract the draft rank for each drafter