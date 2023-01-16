const Calculator = {
    screen: document.querySelector('#screen p'),

    numbers: document.querySelectorAll('.number'),
    operators: document.querySelectorAll('.operator'),

    typing: '',
    typed: [],

    getNumbers() {
        for (let number of this.numbers) {
            number.addEventListener('click' , () => {
                this.typing = this.typing + `${number.value}`
                this.showOnScreen(this.typing)
            })
        }
    },

    getOperators() {
        for (let operator of this.operators) {
            operator.addEventListener('click' , () => {

                if (operator.value === '=') {
                    this.add(Number(this.typing))
                    this.calculate()
                } else if (this.typing == '') {
                    this.clearScreen()
                    this.add(operator.value)
                } else {
                    this.clearScreen()
                    this.add(Number(this.typing))
                    this.add(operator.value)
                }
               
            })
        }
    },

    showOnScreen(content) {
        this.screen.innerText = content
    },

    clearScreen() {
        this.showOnScreen('')
    },

    add(content) {
        if (this.typed.length === 3) {
            this.calculate()
        }
        this.typing = ''
        this.typed.push(content)
    },

    calculate() {
        // ex: [25,'+', 5]
        const number1 = this.typed[0]
        const operator = this.typed[1]
        const number2 = this.typed[2]
   
        if (operator === '+') {
            result = number1 + number2
        } else if (operator === '-') {
            result = number1 - number2
        } else if (operator === 'x') {
            result = number1 * number2
        } else {
            result = number1 / number2
        }

        this.typed.length = 0
        this.typed[0] = result
        this.showOnScreen(result)
    },

    clear() {
        window.location.reload()
    }
    
}





const App = {
    init() {
        Calculator.getNumbers()
        Calculator.getOperators()
    }
}

App.init()