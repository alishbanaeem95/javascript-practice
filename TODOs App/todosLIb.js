url = 'https://jsonplaceholder.typicode.com/todos/'
fetch(url)
.then((resp) => resp.json())
.then(function(arr) {

    $(document).ready(function(){
        $("#first").click(function(){
          firstPage();
        });

        $("#next").click(function(){
            nextPage();
        });

        $("#last").click(function(){
            lastPage();
        });

        $("#previous").click(function(){
            previousPage();
        });

        $("#Logout").click(function(){
            Logout();
        });

    });

    var pageList = new Array();
    var currentPage = 1;
    var numberPerPage = 10;
    var numberOfPages = 0;

    function load(){
        numberOfPages = getNumberOfPages();
        loadList();
    }

    function getNumberOfPages() {
        return Math.ceil(arr.length / numberPerPage);
    }

    function nextPage() {
        currentPage += 1;
        loadList();
    }

    function previousPage() {
        currentPage -= 1;
        loadList();
    }

    function firstPage() {
        currentPage = 1;
        loadList();
    }

    function lastPage() {
        currentPage = numberOfPages;
        loadList();
    }

    function loadList() {
        var begin = ((currentPage - 1) * numberPerPage);
        var end = begin + numberPerPage;

        pageList = arr.slice(begin, end);
        drawList();    
        check();         
    }

    function drawList() {
        var tableBody = document.getElementById("todosBody");
        tableBody.innerHTML = "";
        for (i = 0; i < pageList.length; i++) {
            var tr = document.createElement('tr');
            for (var key in pageList[i]) {
                var td = document.createElement('td')
                td.appendChild(document.createTextNode(pageList[i][key]));
                tr.appendChild(td)
            }
            var btnRemove = document.createElement("INPUT");
            btnRemove.type = "button";
            btnRemove.value = "Remove";
            btnRemove.addEventListener("click", Remove.bind(btnRemove), false);
            tr.appendChild(btnRemove);

            var btnEdit = document.createElement("INPUT");
            btnEdit.type = "button";
            btnEdit.value = "Edit";
            btnEdit.addEventListener("click", Edit.bind(btnEdit), false);
            tr.appendChild(btnEdit);

            var btnCancel = document.createElement("INPUT");
            btnCancel.type = "button";
            btnCancel.value = "Cancel";
            btnCancel.addEventListener("click", Cancel.bind(btnCancel), false);
            btnCancel.style.display = 'none';
            tr.appendChild(btnCancel);

            var btnDone = document.createElement("INPUT");
            btnDone.type = "button";
            btnDone.value = "Done";
            btnDone.addEventListener("click", Done.bind(btnDone), false);
            btnDone.style.display = 'none';
            tr.appendChild(btnDone);

            tableBody.appendChild(tr);
        }
    }

    function Remove(){
        var oRow = this.parentNode.rowIndex;
        document.getElementById("todos").deleteRow(oRow);
    }

    function Edit(){
        var oRow = this.parentNode.childNodes;
        oRow[0].contentEditable = "true";
        oRow[2].contentEditable = "true";
        oRow[3].contentEditable = "true";

        oRow[4].style.display = 'none';
        oRow[5].style.display = 'none';

        oRow[6].style.display = 'block';
        oRow[7].style.display = 'block';
    }

    function Cancel(){
        var oRow = this.parentNode.childNodes;
        oRow[0].contentEditable = "false";
        oRow[2].contentEditable = "false";
        oRow[3].contentEditable = "false";

        oRow[4].style.display = 'block';
        oRow[5].style.display = 'block';

        oRow[6].style.display = 'none';
        oRow[7].style.display = 'none';

        loadList();
    }

    function Done(){
        var oRow = this.parentNode.childNodes;
        var id = oRow[1].innerHTML;

        arr.map(function(obj){
            if(obj.id == id){
                obj.userId = oRow[0].innerHTML;
                obj.title = oRow[2].innerHTML;
                obj.completed = oRow[3].innerHTML;
            }
        });

        oRow[0].contentEditable = "false";
        oRow[2].contentEditable = "false";
        oRow[3].contentEditable = "false";

        oRow[4].style.display = 'block';
        oRow[5].style.display = 'block';

        oRow[6].style.display = 'none';
        oRow[7].style.display = 'none';

        loadList();
    }

    function check() {
        document.getElementById("next").disabled = currentPage == numberOfPages ? true : false;
        document.getElementById("previous").disabled = currentPage == 1 ? true : false;
        document.getElementById("first").disabled = currentPage == 1 ? true : false;
        document.getElementById("last").disabled = currentPage == numberOfPages ? true : false;
    }

    function Logout(){
        window.location.href = "index.html";
    }

    load();
    
});