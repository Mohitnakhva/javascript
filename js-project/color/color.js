 
        const colors = ['red', 'orange', 'yellow', 'blue', 'pink', 'black']; 
        let currentIndex = 0; 

        function prev() {
            currentIndex = (currentIndex - 1 + colors.length) % colors.length; 
            updateColor();
        }

        function next() {
            currentIndex = (currentIndex + 1) % colors.length;
            updateColor();
        }

        function updateColor() {
            const divElement = document.querySelector('.div');
            divElement.style.backgroundColor = colors[currentIndex]; // Change background color
        }