function GetProduct() {
    let basket = JSON.parse(localStorage.getItem('basket'));

    let item = ''

    basket.forEach(pr => {
        let count = 0;

        let a = pr.Price;
        let e = '';
        let total;
        for (let i = 1; i < a.length; i++) {
            e += a[i]
        }

        total = parseInt(e) * pr.Count;

        item += `
        <tr>
            <th class = "d-none" scope="row">${pr.Id}</th>
            <td> <img src=${pr.Image} alt=""></td>
            <td class = "pad">${pr.Name}</td>
            <td></td>
            <td class = "pad">${pr.Price}</td>
            <td class = "pad"> <input class="inp" type="number" value=${pr.Count}></td>
            <td  class = "pad" id=${count}>$ ${total}</td>
            <td class = "pad"><i class="fa-solid fa-trash-can remove"></i></td>

            </tr>
            `
            count++;
        });

    document.getElementById('t-body').innerHTML = item
}
GetProduct()




let inputs = document.querySelectorAll('.inp')

for (let inp of inputs) {
    inp.addEventListener('change', function () {
        let basket = JSON.parse(localStorage.getItem('basket' ));
        id = inp.parentElement.parentElement.children[0].innerHTML
        let total;

        basket.forEach(pr => {
            if (id === pr.Id) {
                pr.Count = inp.value;

                if (inp.value < 0) {
                    inp.value = 0
                }
                let a = pr.Price;
                let e = '';

                for (let i = 1; i < a.length; i++) {
                    e += a[i]
                }

                total = parseInt(e) * inp.value;
            }
        })

        localStorage.setItem('basket', JSON.stringify(basket))
        inp.parentElement.parentElement.children[6].innerHTML ='$ '+total

        CountProduct()
    })

}


function CountProduct(){
    let basket=JSON.parse(localStorage.getItem('basket'));
  
    document.querySelector('#product-counter').innerHTML=basket.length
}
  
  CountProduct()



let removers=document.querySelectorAll('.remove')


removers.forEach(rmv => {
    rmv.onclick=function(){
        let prId = this.parentElement.parentElement.children[0].innerHTML
            let prparent=this.parentElement.parentElement
    
        let basket=JSON.parse(localStorage.getItem('basket'));
        
        let arr=[]
    for(let i=0;i<basket.length;i++){
        if(basket[i].Id!=prId){
            arr.push(basket[i])
          
        }
        else{
            continue;
        }
    }
    prparent.style.display='none'
        
    localStorage.setItem('basket', JSON.stringify(arr))
    
    CountProduct()


}
});