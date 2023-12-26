// https://ghchart.rshah.org/Username
// https://ghchart.rshah.org/



function printName() {

    // Get the value from the input field
    var user = document.getElementById('nameInput').value;

    // Print the name to the console
    console.log(user);

    // GitHub profile URL for fetching contribution graph
    const profileUrl = `https://ghchart.rshah.org/${user}`;

    try {
        if (user) {
            // Code to execute if user ID is found
            var con = document.getElementById('con');
            con.innerHTML = '<p style="color: white;">The contribution graph of <b>' + user + '</b> is : <br/></p>' +
                            '<img src="http://ghchart.rshah.org/' + user + '" alt="Type correct username" />';
        } else {
            // Code to execute if user ID is not found
            con.innerHTML = 'ID not found';
        }
    } catch (e) {
        // Print the error
        console.log("Error :", e);
    }
}
