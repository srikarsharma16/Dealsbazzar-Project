class ProfileService{
    updateProfile = (data) => {

        console.log(data)
        return fetch("http://localhost:8080/admin/updateProfile", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
    }
    getProfile = (userId) => {
        return fetch(`http://localhost:8080/admin/getUserById/${userId}`)
    }
}

var obj = new ProfileService()
export default obj;