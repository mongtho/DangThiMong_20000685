document.addEventListener("DOMContentLoaded", function () {
    // Get references to HTML elements by their IDs
    const elements = {
        "1_c": document.getElementById("1_c"),
        "1_b": document.getElementById("1_b"),
        "1_a": document.getElementById("1_a"),
        // Add more elements here...
    };

    // Define the styles using JavaScript
    const styles = {
        "1_c": {
            position: "relative",
            width: "360px",
            height: "640px",
            background: "#FFFFFF"
        },
        "1_b": {
            position: "absolute",
            width: "360px",
            height: "640px",
            left: "0px",
            top: "0px",
            background: "#FFFFFF"
        },
        "1_a": {
            position: "absolute",
            width: "360px",
            height: "640px",
            left: "0px",
            top: "0px",
            background: "linear-gradient(180deg, #C7F4F7 0.03%, #D1F4F6 30.21%, #E5F4F5 85.42%, #00CCF9 100%)"
        },
        // Define styles for other elements as needed...
    };

    // Apply styles to the elements
    for (const id in styles) {
        if (elements[id]) {
            const element = elements[id];
            const style = styles[id];
            for (const prop in style) {
                element.style[prop] = style[prop];
            }
        }
    }
});
