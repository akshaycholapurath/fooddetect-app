document.getElementById("button1").addEventListener("click", function(){
        let value = document.getElementById("uri").value
        document.getElementById("image").src = value;
        const div = document.getElementById("pred")
        fetch('http://127.0.0.1:5000/prediction',{
              method:'post',
              headers:{'Content-Type':'application/json'},
              body:JSON.stringify({
                  url:value
                  })
                })
        .then(res=> res.json())
        .then(data=> div.innerText = `You are looking at \n ${data['Prediction']}..`)
        .catch(err=> console.log(err))
});