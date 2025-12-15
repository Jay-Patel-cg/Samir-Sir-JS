var checkbox = document.querySelector(".box");

checkbox.addEventListener("change", (event) => {
if (event.target.checked){
    document.cookie = "username = samirsingh; expires=Thu, 18 Dec 2025 12:00:00 UTC; Path=/";
    document.cookie = "emailId = samirsingh@gmail.com; expires=Thu, 18 Dec 2025 12:00:00 UTC; Path=/";

        // create, read ....

console.log(document.cookie);
}
else{
console.log("nothing to store in the cookies section");

}

})