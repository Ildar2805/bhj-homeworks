const xhr = new XMLHttpRequest();
let title = document.getElementById('poll__title');
let answers = document.getElementById('poll__answers');

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();

xhr.onload = function() {
    const parseData = JSON.parse(xhr.response);
    title.innerHTML = parseData.data.title;

    for (let i=0; i < parseData.data.answers.length; i++) {
        let button = document.createElement('button');
        button.innerHTML = parseData.data.answers[i];
        button.className = 'poll__answer';
        answers.appendChild(button);
    }

    const buttons = Array.from(document.querySelectorAll('.poll__answer'));
    
    buttons.forEach(b => {
        b.addEventListener('click', (e) => {
            alert('Спасибо, ваш голос засчитан!');
            
            let xhrResult = new XMLHttpRequest();
            xhrResult.open('POST', 'https://students.netoservices.ru/nestjs-backend/poll');
            xhrResult.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            const index = parseData.data.answers.indexOf(e.target.textContent);
            const body = 'vote=' + parseData.id + '&answer=' + index;
            xhrResult.send(body);

            xhrResult.onload = function() {
                answers.remove()

                const result = JSON.parse(xhrResult.response);
                console.log(result)

                let total = []
                for (let i=0; i < result.stat.length; i++) {
                    total.push(result.stat[i].votes);
                }
                const sum = total.reduce((partialSum, a) => partialSum + a, 0);

                for (let i=0; i < result.stat.length; i++) {
                    let div = document.createElement('div');
                    div.innerHTML = result.stat[i].answer + ': ' + (result.stat[i].votes/sum * 100).toFixed(2) + '%';
                    div.className = 'poll__answer';
                    title.appendChild(div);
                } 
            }
        })
    })
}