$(document).ready(function() {
    $(".numButton").click(function () {
        
        var res = $("#resultCalc");
        var curr = $("#currentCalc");
        if (curr.text().indexOf("=") !== -1) $("#ac").trigger("click");
        if (res.html() === "0" || !$.isNumeric(res.html())) {
            res.text($(this).html());
        } else {
            res.text(res.text() + $(this).html());
        }
    });

    $("#numDot").click(function() {
        var res = $("#resultCalc");
        var curr = $("#currentCalc");
        if (res.html().indexOf(".") === -1 && curr.text().indexOf("=") === -1) {
            res.text(res.text() + $(this).html());
        }
    });

    $("#ce").click(function() {
        $("#resultCalc").text("0");
    });

    $("#ac").click(function() {
        $("#resultCalc").text("0");
        $("#currentCalc").text("");
    });

    $(".opButton").click(function () {
        var curr = $("#currentCalc");
        var res = $("#resultCalc");
        var val = $(this).html();
        if (curr.text().indexOf("=") == -1) {
            curr.text(curr.text() + res.text() + val);
        } else {
            curr.text(res.text() + val);
        }
        res.text(val);
    });

    $("#equals").click(function() {
        var curr = $("#currentCalc");
        var res = $("#resultCalc");
        var arithm = curr.text() + res.text();
        var result = math.eval(arithm);
        res.text(result);
        curr.text(arithm + $(this).html() + result);
        
    });


})