var dataTag = "", data = [], loopTo200 = 0;

function ajax(callback) {   
    let xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open('GET', 'https://neto6391.github.io/challenge-dom-app/app/data/dados.json');
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == "200") {
            callback(JSON.parse(xhr.responseText));
        }
    };
    xhr.send(null);  
}    

ajax( json => {
    loadInitialDom(json);
    addDomArray(json);
        
    window.onscroll = function() {
        if(scroll() === 0.4 && loopTo200 <= 249) {
            let tb = document.getElementById('table');
            tb.innerHTML += this.data[loopTo200];
            loopTo200++;
        }
    }
});

function loadInitialDom(dataJson) {
    addDomArrayInitial(dataJson, 0, 200);
    renderDomArrayInitial(this.dataTag);
}

function addDomArrayInitial(array, indexInitial, indexFinal) {
    for(; indexInitial < indexFinal; indexInitial++) {
        this.dataTag += '<tr><th>'+(indexInitial+1)+'</th><td>'+array[indexInitial].company+'</td><td class="myBar"><span id="bar">'+((100*indexInitial)/50000)+'%</span><div class="progress"><div class="progress-bar" role="progressbar" style="width: '+ ((100*indexInitial)/50000) +'%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div></div></td></tr>';
    }
}
        
function addDomArray(data) {
    let loop = 1;
    for(let index = 200; index < 50000; index++) { 
        if(loop < 200) {
            this.dataTag += '<tr><th>'+index+"</th><td>"+data[index].company+'</td><td class="myBar"><span id="bar">'+ ((100*index)/50000) +'%</span><div class="progress"><div class="progress-bar" role="progressbar" style="width: '+ ((100*index)/50000) +'%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div></div></td></tr>';
            loop++;
        } else {
            this.data.push(this.dataTag);
            this.dataTag = "";
            loop = 1;
        }   
    }
}

function renderDomArrayInitial(tag) {
    let tb = document.getElementById('table');
    tb.innerHTML = tag;
    this.dataTag = "";
}

function scroll() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    return(200*((winScroll / height) * 100)/50000);
}
