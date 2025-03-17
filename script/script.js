/*butonlara tıklandığında ilgili contentlerin ve resmin değişmesi için fonksiyon*/
function changeInfoAndImg() { 
    /*değiştirilecek tüm elementleri alıyorum*/
    var buttons = document.querySelectorAll(".classes-buttons button"); 
    var img = document.getElementById("classes-chosen-photo");
    var title = document.getElementById("info-title");
    var desc = document.getElementById("info-desc");
    var timeTitle = document.getElementById("info-time-title");
    var time = document.getElementById("info-time");
    var timeAdd = document.getElementById("info-time-add");
    var timeExtra = document.getElementById("info-time-extra");

    /*tüm butonları aldığım için foreach ile dolaşıp click anında functionu veriyorum*/
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            // Önce tüm butonlardan highlight sınıfını kaldırıyorum
            buttons.forEach(btn => btn.classList.remove("highlight"));
            
            // Tıklanan butona highlight sınıfını ekliyorum
            this.classList.add("highlight");

            //Tıklanan butona göre İçeriği değiştiriyorum
            if (this.id === "btn-yoga") {
                title.textContent = "Why are your Yoga?";
                desc.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur possimus voluptatum impedit odit perferendis dolorum placeat, exercitationem in officia autem maiores ab nostrum laboriosam sapiente nulla totam neque eum veniam.";
                timeTitle.textContent = "When comes Yoga Your Time.";
                time.textContent = "Saturday-Sunday: 8:00am - 10:00am";
                timeAdd.textContent = "Monday-Tuesday: 10:00am - 12:00pm";
                timeExtra.textContent = "Wednesday-Friday: 3:00pm - 6:00pm";
                img.src = "./images/yoga.jpg";
            } else if (this.id === "btn-group") {
                title.textContent = "Group Classes";
                desc.textContent = "Enjoy the pleasure of working out while socializing in group classes. These sessions not only help you stay motivated but also create a sense of community, making your fitness journey more enjoyable and engaging.";
                timeTitle.textContent = "Group Classes Schedule";
                time.textContent = "Saturday-Sunday: 10:00am - 12:00pm";
                timeAdd.textContent = "Monday-Tuesday: 1:00pm - 3:00pm";
                timeExtra.textContent = "Wednesday-Friday: 5:00pm - 7:00pm";
                img.src = "./images/group.webp";
            } else if (this.id === "btn-solo") {
                title.textContent = "Solo Workouts";
                desc.textContent = "Achieve your personal goals with individual training sessions. These workouts allow you to focus on your specific needs, improve your performance, and progress at your own pace. Whether you're aiming for strength, endurance, personalized training helps you stay dedicated.";
                timeTitle.textContent = "Solo Workouts Schedule";
                time.textContent = "Everyday: 6:00am - 8:00am";
                timeAdd.textContent = "";
                timeExtra.textContent = "Everyday: 4:00pm - 6:00pm";
                img.src = "./images/solo.jpg";
            } else if (this.id === "btn-stretching") {
                title.textContent = "Stretching Sessions";
                desc.textContent = "Stretching sessions for flexibility and relaxation. These sessions help improve mobility, reduce muscle tension, and enhance overall well-being. Whether you're recovering from a workout or simply looking to relieve stress, guided stretching exercises provide a refreshing way to relax your body and mind.";
                timeTitle.textContent = "Stretching Sessions Schedule";
                time.textContent = "Saturday-Sunday: 8:00am - 9:00am";
                timeAdd.textContent = "Monday-Tuesday: 4:00pm - 5:00pm";
                timeExtra.textContent = "Wednesday-Friday: 7:00pm - 8:00pm";
                img.src = "./images/stret.webp";
            }
        });
    });
}
/*ilgili fonksiyonu çağırıyorum*/
changeInfoAndImg();


/*bmi hesabı için tetiklenecek fonksiyon*/
function calculateBMI() {
    /*height için cmyi metreye çeviriyorum ve weight değerimi de alıyorum*/
    var height = parseFloat(document.getElementById("height").value) / 100;
    var weight = parseFloat(document.getElementById("weight").value);
    // Eğer height veya weight değeri yoksa, fonksiyondan çık
    if (!height || !weight) return; 
    var bmi = weight / (height * height);
    var indicator = document.getElementById("bmi-indicator");

    // BMI hesabına göre indicatoru style'ına left vererek saga kaydiriyorum 
    if (bmi < 18.5) {
         // Underweight
        indicator.style.left = '15%';
    } else if (bmi >= 18.5 && bmi < 24.9) {
         // Normal weight
        indicator.style.left = '31.5%';
    } else if (bmi >= 25 && bmi < 29.9) {
         // Overweight
        indicator.style.left = '48%';
    } else if (bmi >= 30 && bmi < 34.9) {
         // Obesity
        indicator.style.left = '64%';
    }else {
        // Extremely Obese
        indicator.style.left = '80.5%'; 
    }

}
/*height ve weight degerleri girilince calculateBMI'yi tetikliyorum*/
document.getElementById("height").addEventListener("input", calculateBMI);
document.getElementById("weight").addEventListener("input", calculateBMI);

/*navbar scroll olunca backgroun colorun değişmesi için fonksiyon*/
function changeClassList() { 
    /*navbarı id ile alıyorum*/
    var navbar = document.getElementById('navbar');
    /*scroll olayı windows üzerinden tetikleniyo*/
    window.addEventListener('scroll', function() {
        // 50px aşağı kayınca ekleniyor
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scroll');
        } else {
            navbar.classList.remove('navbar-scroll');
        }
    });
}
changeClassList();

/*sayfa yüklendiği anda hamburger menuyu alır ve ona tıklandığı anda navbarı
id ile alıp show classını ekleyip görünür olmasını sağlar*/
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("menu-hmbrgr").addEventListener("click", function () { 
        let menu = document.querySelector(".navbar ul");
        menu.classList.toggle("show");
    });
});



