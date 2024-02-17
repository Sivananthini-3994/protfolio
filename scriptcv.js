document.addEventListener('DOMContentLoaded', function () {
       var contactBtn = document.getElementById('contactBtn');

      contactBtn.addEventListener('click', function () {
        
        document.getElementById('contact').scrollIntoView({
            behavior: 'smooth'
        });
    });

        var viewResumeBtn=document.getElementById('viewResumeBtn');
       viewResumeBtn .addEventListener('click', function () {      
        var pdfUrl='SIVA_CV_2024.pdf';
       window.open(pdfUrl,'_blank');

    });
      
    });    
