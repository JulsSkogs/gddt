"use strict";

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
};

