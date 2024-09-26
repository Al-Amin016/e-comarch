

const bayNowBtn = document.getElementsByClassName('bayNowBtn');

for(bayBtn of bayNowBtn){
    bayBtn.addEventListener('click', function(e){
        console.log('alain islam')
    })
}

const womanSection = document.getElementById('womanSection').addEventListener('click', function(){
    window.location.href = './woman.html'
})
const manSection = document.getElementById('manSection').addEventListener('click', function(){
    window.location.href = './man.html'
})