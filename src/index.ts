/**
 * class AnswerClass
 * TODO: getValue & appendVal 會有溢位問題
 */
class AnswerClass {
  public el;
  private decimalPointClick: boolean = false;
  public intNumber: number;

  constructor() {
    this.el = document.getElementById("Answer");
    //this.decimalPointClick = false;
    this.intNumber = 0
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

  public decimal_point() {
    this.decimalPointClick = true ;
    console.log(this.decimalPointClick)
  }

  public ok(type: string) {
    if (type == "add") {
      Type = "add"
      upNumber = this.getValue()
    }

    if (type == "epual") {
      if (this.el !== null) {
        if (Type == "add"){
          this.el.innerHTML = String(upNumber + this.getValue())
          Type = "epual"
        }
      }
    }

    if(this.el !== null && type !== "epual") {
      this.el.innerHTML = "0"
    }
  }
}

let upNumber: number = 0;
let Type: string = "none"

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
      if (answerObj.el && Type == "epual") {
        answerObj.el.innerHTML = "0"
        Type = "none"
      }
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

  const decimalPoint = document.getElementById("decimal_point");
  decimalPoint?.addEventListener("click" , answerObj.decimal_point);

  const add = document.getElementById("add");
  add?.addEventListener("click" , function (evn: Event) {
    answerObj.ok("add");
  })

  const epual = document.getElementById("epual")
  epual?.addEventListener("click" , function (evn: Event) {
    answerObj.ok("epual");
  })
});
