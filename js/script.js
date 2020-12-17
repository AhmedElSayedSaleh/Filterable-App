let trTable = document.querySelectorAll("#filterTable tbody tr");
let searchInputs = document.querySelectorAll(".search-input");

searchInputs.forEach((val, index) => { 
    val.addEventListener("input", () => { 

        trTable.forEach((item) => {
            // console.log(item.children[0]);
            // console.log(searchInput);


            if (index == 0) {
                if (item.textContent.toLowerCase().includes((val.value).toLowerCase())) {
                    item.style.display = "table-row";

                } else {
                    item.style.display = "none";
                }
            } else {
                if (item.children[index -1].textContent.toLowerCase().includes((val.value).toLowerCase())) {
                    item.style.display = "table-row";
                    // console.log(index-1);

                } else {
                    item.style.display = "none";
                }
            }
        })
    })
})