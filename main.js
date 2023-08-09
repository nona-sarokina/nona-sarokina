$( document ).ready(function() {
    const generate = $("#generate").focus();
    generate.click(function() {
        $("#output").val("");
        
        const round = $("#round").val();

        const lines = $("#participants").val().split('\n').filter(line => line != "");
        const n = lines.length;
        for (var i = 2; i < n - 1; i = i + 2) {
            const nextRound = `${i/2} игра, ${round} раунд:  ${lines[i-2]} - ${lines[i-1]}\nготовятся: ${lines[i]} - ${lines[i+1]}`;
            $("#output").val($("#output").val() + nextRound + "\n\n");
        }
        const lastRound = `${Math.floor(n/2)} игра, ${round} раунд:  ${lines[n-2]} - ${lines[n-1]}`;
        $("#output").val($("#output").val() + lastRound + "\n");
    });

    $("#clean").click(function() {
        const participants = $("#participants");
        participants.val("");
        participants.focus();   
    });
});