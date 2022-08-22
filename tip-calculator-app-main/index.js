        let inputs = document.querySelectorAll('input')
        let bill_input = document.querySelector('[aria-label ="bill"]')
        let person_input = document.querySelector('[aria-label ="person"]')
        const percentage_button = document.querySelectorAll('.tip_container button')
        const perPerson = document.querySelector('#perPerson')
        const totalPerPerson = document.querySelector('#TotalperPerson')

        let customPercentage_input = document.querySelector('[custom-tip]').value
        let default_Val = '0.00';

        const computeTipAmount = (tip) => parseFloat(bill_input.value) * (tip * .01)
        const errormsg =  document.getElementById('error')

        function reset(){
            perPerson.textContent = ('$') + default_Val;
            totalPerPerson.textContent = ('$') + default_Val;
            person_input.value = '0'
            bill_input.value = '0'
        }

        reset();
        person_input.setAttribute('onkeyup','resetErrormsg()')

        function resetErrormsg(){
            if(person_input.value !== '') {
                errormsg.textContent = ''
                person_input.removeAttribute('error')
            }
        }

        //prevent from entering decimal in person_input
        person_input.setAttribute('onkeydown',"{if(event.key === '.') {event.preventDefault()}}" )
        person_input.setAttribute('oninput',"event.target.value = event.target.value.replace(/[^0-9]*/g,'')")



        percentage_button.forEach(buttons => {
                buttons.addEventListener('click',() =>{    
                    let tip_val = buttons.getAttribute('tip-value')

                    perPerson.textContent = ('$')+ computeTipAmount(tip_val).toFixed(2)
                    totalPerPerson.textContent = ('$') + (computeTipAmount(tip_val).toFixed(2) * parseInt(person_input.value)).toFixed(2)

                    
                    if(person_input.value === '0' || person_input.value === ''){
                        reset()
                        errormsg.textContent = "Can't be zero"
                        person_input.setAttribute('error','')
                    }else{
                        document.getElementById('error').textContent = ''
                        person_input.removeAttribute('error')
                    }   
                    if(bill_input.value === "0") return reset();
            })
        })




