/**
 * class AnswerClass
 * TODO: getValue & appendVal 會有溢位問題
 */
class AnswerClass {
  private el;

  constructor() {
    this.el = document.getElementById("Answer");
  }

  public getValue() {
    if (this.el !== null) {
      return Number(this.el.innerHTML);
    }
    return 0;
  }

  public appendVal(val: number) {
    if (this.el !== null) {
      const currVal = this.getValue();
      const nextVal = currVal * 10 + val;
      this.el.innerHTML = nextVal.toString();
    }
  }
}

/**
 * onload
 */
window.addEventListener("load", function () {
  // initialize answerObj
  const answerObj = new AnswerClass();

  /**
   * number element onClick handler
   */
  function numberElementOnClickHander(evt: Event) {
    if (evt.target instanceof HTMLButtonElement) {
      const valueAttr = evt.target.getAttribute("value");
      const numValueAttr = Number(valueAttr);
      answerObj.appendVal(numValueAttr);
    }
  }

  // mount click event handlers
  const numberElements = document.getElementsByClassName("number");
  for (const el of numberElements) {
    el.addEventListener("click", numberElementOnClickHander);
  }
});
