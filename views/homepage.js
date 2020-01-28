const checkboxes = Array.from(document.querySelectorAll('.inbox input[type="checkbox"]'));
let lastChecked;

function handleClick(e) {
  let inBetween = false;
  /* see if they had the shift key down && see if they're checking (rather than unchecking) */
  if (e.shiftKey && this.checked) {
    checkboxes.forEach(checkbox => {
      // console.log('this inside: ', this);

      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });

    lastChecked = this;
    // console.log('this outside: ', this);
  }
}

checkboxes.forEach(checkbox => checkbox.addEventListener("click", handleClick));
