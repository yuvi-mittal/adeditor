
document.addEventListener('DOMContentLoaded', function () {
    var iframe = document.getElementById('iframe');
    iframe.onload = function () {
        var doc = iframe.contentDocument || iframe.contentWindow.document;

        var adHeading = doc.getElementById('ad_heading');
        var adSubHeading = doc.getElementById('ad_sub-heading');
        var adBtn = doc.getElementById('ad_btn');

        var headingInput = document.getElementById('heading');
        var subHeadingInput = document.getElementById('sub-heading');
        var btnInput = document.getElementById('btn');
        var headingSizeInput = document.getElementById('heading-size');
        var subHeadingSizeInput = document.getElementById('sub-heading-size');
        var btnSizeInput = document.getElementById('btn-size');


        function updateAdContent() {
            adHeading.textContent = headingInput.value;
            adSubHeading.textContent = subHeadingInput.value;
            adBtn.textContent = btnInput.value;

            adHeading.style.fontSize = headingSizeInput.value;
            adSubHeading.style.fontSize = subHeadingSizeInput.value;
            adBtn.style.fontSize = btnSizeInput.value;
        }


        function resetInputs() {
            headingInput.value = "Can't beat the real thing.";
            subHeadingInput.value = "The paradise of sweetness";
            btnInput.value = "Buy Now";
            headingSizeInput.value = "32px";
            subHeadingSizeInput.value = "16px";
            btnSizeInput.value = "16px";

            updateAdContent();
        }
        
        

        document.getElementById('reset').addEventListener('click', resetInputs);
        headingInput.addEventListener('input', updateAdContent);
        subHeadingInput.addEventListener('input', updateAdContent);
        btnInput.addEventListener('input', updateAdContent);
        headingSizeInput.addEventListener('input', updateAdContent);
        subHeadingSizeInput.addEventListener('input', updateAdContent);
        btnSizeInput.addEventListener('input', updateAdContent);
        openImagesLink.addEventListener('click', myImage);

        updateAdContent(); 
    };
});






































