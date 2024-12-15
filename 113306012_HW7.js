const inputBox = document.getElementById("inputBox");
const submitButton = document.getElementById("submitBtn");
const addButton = document.getElementById("add");
const musicList = document.getElementById("music-list");
const addName = document.getElementById("addName");
const block = document.getElementById("edit");
const enterbutton = document.getElementById("enter");
const text = document.getElementById("text");
// 初始隱藏 inputBox
inputBox.style.display = "none";
addName.addEventListener("click",() =>{

	console.log("Hello");
	if (edit.style.display === "none" || edit.style.display === "") {
        edit.style.display = "block";
    } else{
    	edit.style.display = "none";
    }
});
enterbutton.addEventListener("click",() =>{
	var name = document.getElementById("Name");
	name.innerHTML = text.value;
	edit.style.display = "none";
});
// 點擊 Add 按鈕時，顯示/隱藏 inputBox
addButton.addEventListener("click", () => {
    if (inputBox.style.display === "none" || inputBox.style.display === "") {
        inputBox.style.display = "block";
    } else {
        inputBox.style.display = "none";
    }
});

// 提交後新增歌曲
submitButton.addEventListener("click", () => {
    const url = document.getElementById("web").value; // 網址
    const songName = document.getElementById("userInput").value; // 歌曲名稱

    // 驗證輸入欄位
    if (url.trim() === "" || songName.trim() === "") {
        alert("請輸入網址和歌曲名稱！");
        return;
    }

    // 建立新歌曲元素
    const newColumn = document.createElement("div");
    newColumn.classList.add("column");
    newColumn.innerHTML = `
        <a href="${url}" target="_blank">
            <img src="圖片1.png" alt="Spotify Icon">
        </a>
        <p>${songName}</p>
    `;

    // 加入音樂清單
    musicList.appendChild(newColumn);

    // 清空輸入欄位並隱藏 inputBox
    document.getElementById("web").value = "";
    document.getElementById("userInput").value = "";
    inputBox.style.display = "none";
});


