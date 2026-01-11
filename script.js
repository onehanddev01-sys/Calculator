let firstNumber = "";
        let operator = "";
        let secondNumber = "";
        let shouldResetDisplay = false;
        let display = document.getElementById("display");
        let buttons = document.querySelectorAll(".btn");


        buttons.forEach(button => {
            button.addEventListener("click", (e) => {
                let type = e.target.dataset.type;

                if (type === "number") {
                    let number = button.textContent;

                    if (shouldResetDisplay) { // อันนี้ที่ผมเพิ่มมาคือเช็คว่าตอนกดมาเเล้ว shouldResetDisplay เป็น ture ไหมถ้าใช้ให้เป็นตรง display เป็นเลขที่กดมา 
                        display.textContent = number;
                        shouldResetDisplay = false;
                        return;
                    }

                    if (display.textContent === "0") {
                        display.textContent = number;
                    } else {
                        display.textContent += number;
                    }
                }

                if (type === "operator") {  // อันนี้คือที่ผมให้กด operatorเเล้วให้ใส่ข้อมูลลงตัวเเปร firstNumber operator เเละ ให้ shouldResetDisplay เป็นจริงด้วย จะใด้ส่งอีกตัวเลขมาเเล้วปลี่ยนตามโค้ดบน
                    firstNumber = display.textContent;
                    operator = button.textContent;
                    shouldResetDisplay = true;
                }

                if (type === "equals") {
                    secondNumber = display.textContent;

                    let num1 = Number(firstNumber);
                    let num2 = Number(secondNumber);

                    let result;

                    if (operator === "+") {
                        result = num1 + num2;
                    } else if (operator === "-") {
                        result = num1 - num2;
                    } else if (operator === "x") {
                        result = num1 * num2;
                    } else if (operator === "÷") {
                        result = num1 / num2;
                    }

                    display.textContent = result;

                    firstNumber = "";
                    operator = "";
                    secondNumber = "";
                }

                if (type === "clear") {
                    display.textContent = "0";
                    firstNumber = "";
                    operator = "";
                    secondNumber = "";
                    shouldResetDisplay = false;
                }
            });
        });