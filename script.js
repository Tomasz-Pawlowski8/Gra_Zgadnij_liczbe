$(document).ready(function() {
    let cyfry = liczba.toString().split("");
    let szanse = 5;

    $("#sprawdz").on("click", function() {
        let wpisanaCyfra = $("#cyfra").val();

        if (!/^[0-9]$/.test(wpisanaCyfra)) {
            alert("Podaj cyfrę od 0 do 9");
            return;
        }

        let znaleziono = false;

        $(".liczba .ikonka").each(function(index) {
            if (cyfry[index] === wpisanaCyfra) {
                $(this).find("h1").text(cyfry[index]);
                znaleziono = true;
            }
        });

        if (znaleziono) {
            $("#wynik").css("color", "green");
            $("#wynik").text(
                "Cyfra " + wpisanaCyfra + " jest częścią liczby"
            );
        } 
        else {
            szanse--;
            $("#wynik").css("color", "red");
            $("#wynik").text(
                "Cyfra " + wpisanaCyfra + " nie jest częścią liczby. Pozostałe szanse: " + szanse
            );
            if(szanse == 0){
                $("#wynik").css("color", "red");
                $("#wynik").text(
                    "Koniec szans. Przegrałeś!"
                );
                $("#cyfra, #sprawdz").prop("disabled", true);
            }
        }
        $("#cyfra").val("");
        
        let wszystkieOdkryte = true;
        
        $(".liczba .ikonka").each(function() {
            if ($(this).find("h1").text() === "?") {
                wszystkieOdkryte = false;
            }
        });
        
        if (wszystkieOdkryte) {
            $("#wynik").css("color", "green");
            $("#wynik").text("Gratulacje! Udało Ci się odgadnąć liczbę! Twoja liczba to " + liczba);
            $("#cyfra, #sprawdz").prop("disabled", true);
        }
    });
});
