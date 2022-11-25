/** @format */

const billammount = document.querySelector("#bill-amount");
const cashgiven = document.querySelector("#cash-given");
const checkbtn = document.querySelector("#check-btn");
const nextbtn = document.querySelector("#next-btn");
const message = document.querySelector("#message");
const noofnotes = document.querySelectorAll(".no-of-notes");
const cash_div = document.querySelector("#cash");
const returntable = document.querySelector(".return-table");
const returnchange = document.querySelector(".return-change");
const change = document.querySelector("#change");

const notes = [2000, 500, 200, 100, 50, 20, 10, 5, 1];

cash_div.style.display = "none";
returntable.style.display = "none";
returnchange.style.display = "none";
checkbtn.style.display = "none";

// perform operations using click event
nextbtn.addEventListener("click", () => {
  if (billammount.value > 0) {
    nextbtn.style.display = "none";
    cash_div.style.display = "block";
    checkbtn.style.display = "inline-block";
  } else {
    showmsg("Enter a valid Ammount!");
  }
});

function showmsg(msg) {
  returntable.style.display = "none";
  returnchange.style.display = "none";
  message.style.display = "block";
  message.innerText = msg;
}

checkbtn.addEventListener("click", () => {
  message.style.display = "none";
  returntable.style.display = "inline-block";
  let billamnt = Number(billammount.value);
  if (cashgiven.value > 0) {
    let cashamnt = Number(cashgiven.value);

    let bacha_cash = cashamnt - billamnt;

    if (billamnt <= cashamnt) {
      if (billamnt === cashamnt) {
        showmsg("No Ammount to be returned");
      } else {
        returnchange.style.display = "block";
        change.innerText = bacha_cash;
        calculate_notes(bacha_cash);
      }
    } else {
      showmsg("Give more cash!");
    }
  } else {
    showmsg("Enter a Vaid Ammount!");
  }
});

function calculate_notes(value) {
  for (let i = 0; i < notes.length; i++) {
    const remainnotes = Math.floor(value / notes[i]);
    value = value % notes[i];
    if (remainnotes == 0) {
      noofnotes[i].innerText = "-";
    } else {
      noofnotes[i].innerText = remainnotes;
    }
  }
}
