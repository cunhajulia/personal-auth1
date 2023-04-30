var trash = document.getElementsByClassName("fa-trash");


Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const date = this.parentNode.parentNode.childNodes[1].innerText
        console.log(this)
        console.log(this.parentNode)
        console.log(this.parentNode.parentNode)
        console.log(this.parentNode.parentNode.childNodes)
        const time = this.parentNode.parentNode.childNodes[3].innerText
        const ounces = this.parentNode.parentNode.childNodes[5].innerText
        fetch('water', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'date': date,
            'time': time,
            'ounces': ounces
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
