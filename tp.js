function getUserData() {
    // Dev1: ajout du log pour UI
    console.log("Fetching user data for UI");
    return fetch("/api/user").then(res => res.json());
}
