function criaCalculadora(){
    
    return{
        display: document.querySelector('.caixaResultado'),
        btnClear: document.querySelector('.clear'),
        

        inicia(){
            this.cliqueBotoes();
        },
       
        realizaConta(){
            let conta = this.display.value;

            try{
                conta = eval(conta);



                if(!conta){
                    alert('Operação inválida');
                    return;
                }

                this.display.value = String(conta);
            }catch(e){
                alert('Conta inválida');
            }
        },

        deleteOne(){
            this.display.value = this.display.value.slice(0, -1);
        },

        clearDisplay(){
            this.display.value = '';
        },

        inicia(){
            this.cliqueBotoes();
        },
        cliqueBotoes(){
            // this calculadora
            document.addEventListener('click', function(e){
                const el = e.target;

                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText);
                }

                if(el.classList.contains('clear')){
                    this.clearDisplay();
                }

                if(el.classList.contains('del')){
                    this.deleteOne();
                }
                if(el.classList.contains('igual')){
                    this.realizaConta();
                }
            }.bind(this));
        },

        btnParaDisplay(valor){
            this.display.value += valor;
        }
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();