const correctAnswers=['B','B','B','B']

const form=document.querySelector('.quiz-form')
const resultDiv=document.querySelector('.result')

form.addEventListener('submit',e=>{
    e.preventDefault()

    let score=0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value]

    //check answers
    userAnswers.forEach((answer,index)=>{
        if(answer===correctAnswers[index]){
            score+=25;
        }

        //show result on page
        scrollTo(0,0) //window.scrollTo()
        
        resultDiv.setAttribute('class','result py-4 bg-light text-center')
        if(score<50){
            resultDiv.querySelector('.pf').textContent='you have failed :( Dont give up'
        }else{
            resultDiv.querySelector('.pf').textContent = 'you have passed :)'
        }


        let output=0;

        const timer=setInterval(()=>{
            resultDiv.querySelector('span').textContent = `you have scored ${output} % ninja`
            if(output==score){
                clearInterval(timer)
            }else{
                output++
            }
        },10)

           

    })

    console.log(score)
})